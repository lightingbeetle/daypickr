import { useContext } from 'preact/hooks';
import { html } from 'htm/preact';
import {
  getMonthView,
  splitToWeeks,
  arrangeWeekdays,
  isToday,
  datesAreEqual,
  isDayInCurrentMonth,
} from '../utils/date';

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
                const isSelected = selected && datesAreEqual(day, selected);
                const isFocused = datesAreEqual(day, view);
                const isDisabled = !isDayInCurrentMonth(day, view) || disabledDayFn(day);
                const todayClass = isToday(day) ? classes.isToday : undefined;
                const selectedClass = isSelected ? classes.isSelected : undefined;

                const buttonClasses = [classes.dayButton, todayClass, selectedClass];
                const buttonTabIndex = isFocused ? '0' : '-1';
                const localeDateString = day.toLocaleDateString(locale);
                const ref = isFocused ? focusedRef : undefined;

                return html`
                  <td role="gridcell" class="${classes.tableCell}">
                    <button
                      class="${buttonClasses.join(' ')}"
                      type="button"
                      onClick=${() => {
                        setSelected(day);
                        setView(day);
                      }}
                      tabindex=${buttonTabIndex}
                      onKeyDown=${handleKeyboardNavigation}
                      ref=${ref}
                      disabled=${isDisabled}
                      aria-label=${localeDateString}
                      aria-selected=${isSelected}
                    >
                      <span class="${classes.srOnly}">${localeDateString}</span>
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
