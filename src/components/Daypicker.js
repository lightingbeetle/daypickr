import { html } from 'htm/preact';
import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'preact/hooks';

import classNames from '../utils/classNames';
import l10n from '../utils/l10n';
import { getMonth, dateToYYYYMMDD, arrangeWeekdays, getDaysInMonth } from '../utils/date';
import Context from './Context';

import Calendar from './Calendar';
import YearSelect from './YearSelect';
import MonthSelect from './MonthSelect';

const Daypicker = ({
  min = '1900-01-01',
  max = '2100-12-31',
  classes = classNames,
  selectedDay,
  firstDayOfWeek = 1,
  locale = {},
  disabledDayFn = () => {},
  onSelect = () => {},
  formatDate = (date) => dateToYYYYMMDD(date),
  parseDate = (date) => {
    const matches = date.match(/(\d{2})\/(\d{2})\/(\d{4})/);

    if (matches) {
      return new Date(matches[3], matches[2] - 1, matches[1]);
    }

    return false;
  },
  name,
  id,
}) => {
  const [view, setView] = useState(selectedDay ? new Date(selectedDay) : new Date());
  const [selected, setSelected] = useState(selectedDay ? new Date(selectedDay) : undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const focusedElement = useRef();
  const toggleButtonRef = useRef();
  const yearSelectRef = useRef();
  const dialogRef = useRef();
  const closeButtonRef = useRef();

  useEffect(() => {
    onSelect(selected);
    setIsDialogOpen(false);
  }, [selected]);

  useEffect(() => {
    const focusTrap = (e) => {
      if (e.key === 'Tab' && isDialogOpen) {
        if (!e.shiftKey && document.activeElement === closeButtonRef.current) {
          e.preventDefault();
          yearSelectRef.current.focus();
        }

        if (e.shiftKey && document.activeElement === yearSelectRef.current) {
          e.preventDefault();
          focusedElement.current.focus();
        }
      }
    };

    const closeOnEsc = (e) => {
      if (e.key === 'Escape' && isDialogOpen) {
        setIsDialogOpen(false);
      }
    };

    document.addEventListener('keyup', focusTrap);
    document.addEventListener('keyup', closeOnEsc);

    return () => {
      document.removeEventListener('keyup', focusTrap);
      document.removeEventListener('keyup', closeOnEsc);
    };
  }, []);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (!dialogRef.current.contains(e.target) && isDialogOpen) {
        setIsDialogOpen(false);
      }
    };
    document.addEventListener('click', closeOnClickOutside);

    return () => document.removeEventListener('click', closeOnClickOutside);
  }, []);

  useLayoutEffect(() => {
    if (isDialogOpen) {
      yearSelectRef.current.focus();
    } else {
      toggleButtonRef.current.focus();
    }
  }, [isDialogOpen]);

  /**
   * Function to skip disabled dates and navigate to the closest enabled date in that month
   * @param {Date} view Selected calendar date value
   * @param {number} step Step amount to search for closest enabled date
   */
  const setClosestAvailableDateInMonth = useCallback(
    (view, step = 1) => {
      const isDisabled = disabledDayFn?.(view) ?? false;
      if (!isDisabled) return;

      const viewDate = view.getDate();
      const viewMonth = view.getMonth();
      const viewYear = view.getFullYear();

      const monthDays = getDaysInMonth(viewMonth, viewYear);
      const isFirstDayOfMonth = viewDate === 1;
      const isLastDayOfMonth = viewDate === monthDays;
      // switch search direction if start or end of the month
      if ((isFirstDayOfMonth && step === -1) || (isLastDayOfMonth && step === 1)) {
        step *= -1;
      }

      view.setDate(viewDate + step);
      setClosestAvailableDateInMonth(view, step);
    },
    [disabledDayFn]
  );

  // https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html#kbd_label_5
  const handleKeyboardNavigation = (e) => {
    const navigationKeys = [
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'PageUp',
      'PageDown',
      'Home',
      'End',
    ];
    if (navigationKeys.includes(e.key)) {
      e.preventDefault();
    } else {
      return;
    }

    let newView = new Date(view);

    const weekdaysSorted = arrangeWeekdays([0, 1, 2, 3, 4, 5, 6], firstDayOfWeek);

    const getFirstWeekdayDiff = (day) => weekdaysSorted.indexOf(day);
    const getLastWeekdayDiff = (day) => weekdaysSorted.reverse().indexOf(day);

    switch (e.key) {
      case 'ArrowLeft':
        newView.setDate(view.getDate() - 1);
        break;
      case 'ArrowRight':
        newView.setDate(view.getDate() + 1);
        break;
      case 'ArrowUp':
        newView.setDate(view.getDate() - 7);
        break;
      case 'ArrowDown':
        newView.setDate(view.getDate() + 7);
        break;
      case 'PageUp':
        if (e.shiftKey) {
          newView.setFullYear(view.getFullYear() - 1);
        } else {
          newView = getPrevMonthDate(view);
        }
        setClosestAvailableDateInMonth(newView, -1);
        break;
      case 'PageDown':
        if (e.shiftKey) {
          newView.setFullYear(view.getFullYear() + 1);
        } else {
          newView = getNextMonthDate(view);
        }
        setClosestAvailableDateInMonth(newView, 1);
        break;
      case 'Home':
        newView.setDate(view.getDate() - getFirstWeekdayDiff(view.getDay()));
        setClosestAvailableDateInMonth(newView, 1);
        break;
      case 'End':
        newView.setDate(view.getDate() + getLastWeekdayDiff(view.getDay()));
        setClosestAvailableDateInMonth(newView, -1);
        break;
    }

    setView(newView);

    setTimeout(() => {
      focusedElement.current.focus();
    }, 0);
  };

  const getRelativeMonthDate = (view, step) => {
    return getMonth(view, view.getMonth() + step);
  };

  const getPrevMonthDate = (view) => {
    return getRelativeMonthDate(view, -1);
  };

  const getNextMonthDate = (view) => {
    return getRelativeMonthDate(view, 1);
  };

  const prevMonth = () => {
    setView(getPrevMonthDate(view));
  };

  const nextMonth = () => {
    setView(getNextMonthDate(view));
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const onInputChange = (e) => {
    if (e.target.value === '') {
      setSelected(undefined);
    }

    const date = parseDate(e.target.value);
    if (date) {
      setView(date);
      return setSelected(date);
    }
  };

  return html`
    <${Context.Provider}
      value=${{
        firstDayOfWeek,
        classes,
        l10n,
        min,
        max,
        view,
        setView,
        selected,
        setSelected,
        handleKeyboardNavigation,
        focusedRef: focusedElement,
        disabledDayFn,
        locale,
      }}
    >
      <input
        id=${id}
        type="text"
        class=${classes.input}
        value=${selected && selected.toLocaleDateString(locale)}
        onChange=${(e) => onInputChange(e)}
      />
      <input type="hidden" id=${`${id}-value`} value=${formatDate(selected)} name=${name} />
      <button
        type="button"
        aria-controls="${id}-dialog"
        onClick=${() => toggleDialog()}
        aria-expanded=${isDialogOpen}
        ref=${toggleButtonRef}
        class=${classes.toggleButton}
      >
        ${l10n.openButton}
      </button>
      <div
        class=${classes.wrapper}
        role="dialog"
        aria-modal="true"
        aria-labelledby="daypicker-label"
        hidden=${!isDialogOpen}
        ref=${dialogRef}
      >
        <div class="daypicker__content">
          <h2 id="daypicker-label" class="sr-only">${view.getFullYear()} ${view.getMonth()}</h2>
          <div class="${classes.header}">
            <div class="${classes.yearMonthWrapper}">
              <${YearSelect} ref=${yearSelectRef} />
              <${MonthSelect} />
            </div>

            <div class="${classes.pagination}">
              <button
                type="button"
                class="${classes.button} ${classes.prevMonthButton}"
                onClick=${prevMonth}
              >
                ${l10n.prevMonth}
              </button>
              <button
                type="button"
                class="${classes.button} ${classes.nextMonthButton}"
                onClick=${nextMonth}
              >
                ${l10n.nextMonth}
              </button>
            </div>
          </div>
          <${Calendar} />
          <button
            class="${classes.button} ${classes.closeButton}"
            type="button"
            onClick=${() => toggleDialog()}
            ref=${closeButtonRef}
          >
            ${l10n.closeButton}
          </button>
        </div>
      </div>
    <//>
  `;
};

export default Daypicker;
