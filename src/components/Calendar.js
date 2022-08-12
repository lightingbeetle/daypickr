import { useContext } from 'preact/hooks';
import { h } from 'preact';

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

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.tableHeaderRow}>
          {weekdays.map((day) => (
            <th scope="col" className="{classes.tableHeaderCell}">
              <span className={classes.srOnly}>{day.name}</span>
              <span aria-hidden="true">{day.shortname}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week) => (
          <tr className={classes.tableRow}>
            {week.map((day) => {
              const isSelected = selected && datesAreEqual(day, selected);
              const isFocused = datesAreEqual(day, view);
              const isDisabled = !isDayInCurrentMonth(day, view) || disabledDayFn(day);
              const todayClass = isToday(day) ? classes.isToday : undefined;
              const selectedClass = isSelected ? classes.isSelected : undefined;

              const buttonClasses = [classes.dayButton, todayClass, selectedClass];
              const buttonTabIndex = isFocused ? '0' : '-1';
              const localeDateString = day.toLocaleDateString(locale);
              const ref = isFocused ? focusedRef : undefined;

              return (
                <td role="gridcell" className={classes.tableCell}>
                  <button
                    className={buttonClasses.join(' ')}
                    type="button"
                    onClick={() => {
                      if (!isDisabled) {
                        setSelected(day);
                        setView(day);
                      }
                    }}
                    tabindex={buttonTabIndex}
                    onKeyUp={handleKeyboardNavigation}
                    ref={ref}
                    aria-disabled={isDisabled}
                    aria-label={localeDateString}
                    aria-selected={isSelected}
                  >
                    <span className={classes.srOnly}>{localeDateString}</span>
                    <span aria-hidden="true">{day.getDate()}</span>
                  </button>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
