import { useContext } from 'preact/hooks';
import { html } from 'htm/preact';
import { getMonthView, splitToWeeks, arrangeWeekdays, isToday, datesAreEqual } from '../utils/date';

import Context from './Context';

const Calendar = () => {
  const {
    firstDayOfWeek,
    classes,
    l10n,
    selected,
    setSelected,
    setView,
    handleKeyboardNavigation,
    focusedRef,
    view,
    disabledDayFn,
    locale,
  } = useContext(Context);

  const weekdays = arrangeWeekdays(l10n.weekdays, firstDayOfWeek);
  const monthView = getMonthView(view, firstDayOfWeek);
  const weeks = splitToWeeks(monthView);

  return html`
    <table class="${classes.table}">
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
                  selected && datesAreEqual(day, selected) ? classes.isSelected : undefined,
                ];

                const isInCurrentMonth = day.getMonth() === view.getMonth();
                const isDisabled = !isInCurrentMonth || disabledDayFn(day);
                return html`
                  <td role="gridcell" class="${classes.tableCell}">
                    <button
                      class="${buttonClasses.join(' ')}"
                      type="button"
                      onClick=${() => {
                        if (!isDisabled) {
                          setSelected(day);
                          setView(day);
                        }
                      }}
                      tabindex=${datesAreEqual(day, view) ? '0' : '-1'}
                      onKeyUp=${handleKeyboardNavigation}
                      ref=${datesAreEqual(day, view) ? focusedRef : undefined}
                      aria-disabled=${!isInCurrentMonth || disabledDayFn(day)}
                      aria-label=${day.toLocaleDateString(locale)}
                    >
                      <span class="${classes.srOnly}">${day.toLocaleDateString(locale)}</span>
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
