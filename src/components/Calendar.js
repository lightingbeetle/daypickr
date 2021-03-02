import { useContext, useEffect } from "preact/hooks";
import { html } from "htm/preact";
import {
  getMonthView,
  splitToWeeks,
  arrangeWeekdays,
  isToday,
  datesAreEqual,
} from "../utils/date";

import Context from "./Context";

const Calendar = ({ year, month }) => {
  const {
    firstDayOfWeek,
    classes,
    l10n,
    selected,
    setCurrentDay,
    handleKeyboardNavigation,
    focusedRef,
    focused,
  } = useContext(Context);

  const weekdays = arrangeWeekdays(l10n.weekdays, firstDayOfWeek);
  const monthView = getMonthView(year, month, firstDayOfWeek);
  const weeks = splitToWeeks(monthView);

  return html`
    <table role="grid" class="${classes.table}">
      <thead>
        <tr class="${classes.tableHeaderRow}">
          ${weekdays.map(
            (day) => html`
              <th scope="col" class="${classes.tableHeaderCell}">
                <span class="${classes.srOnly}">${day.name}</span>
                <span aria-hidden="true">${day.shortname}</span>
              </th>
            `
          )}
        </tr>
      </thead>
      <tbody>
        ${weeks.map(
          (week) => html`
            <tr class="${classes.tableRow}">
              ${week.map((day) => {
                const buttonClasses = [
                  classes.dayButton,
                  isToday(day) ? classes.isToday : undefined,
                  selected && datesAreEqual(day, selected)
                    ? classes.isSelected
                    : undefined,
                ];

                return html`
                  <td role="gridcell" class="${classes.tableCell}">
                    <button
                      class="${buttonClasses.join(" ")}"
                      type="button"
                      onClick=${() => setCurrentDay(day)}
                      tabindex=${datesAreEqual(day, focused) ? "0" : "-1"}
                      onKeyDown=${handleKeyboardNavigation}
                      ref=${datesAreEqual(day, focused)
                        ? focusedRef
                        : undefined}
                    >
                      <span class="${classes.srOnly}"
                        >${day.toLocaleDateString()}</span
                      >
                      <span aria-hidden="true">${day.getDate()}</span>
                    </button>
                  </td>
                `;
              })}
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
};

export default Calendar;
