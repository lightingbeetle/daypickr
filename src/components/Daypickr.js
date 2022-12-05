import { useState, useRef, useEffect, useLayoutEffect } from 'preact/hooks';

import classNames from '../utils/classNames';
import { default as l10nEN } from '../utils/l10n';
import { getMonth, dateToYYYYMMDD, getLastDayOfWeek, getFirstDayOfWeek } from '../utils/date';
import Context from './Context';

import Calendar from './Calendar';
import YearSelect from './YearSelect';
import MonthSelect from './MonthSelect';
import { h } from 'preact';

const Daypickr = ({
  min = '1900-01-01',
  max = '2100-12-31',
  classes = classNames,
  l10n = l10nEN,
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
  calendarIcon,
  name,
  id,
}) => {
  const [view, setView] = useState(selectedDay ? new Date(selectedDay) : new Date());
  const [selected, setSelected] = useState(selectedDay ? new Date(selectedDay) : undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isInitialRender = useRef(true);
  const inputRef = useRef();
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

        if (
          e.shiftKey &&
          (document.activeElement === yearSelectRef.current ||
            document.activeElement === dialogRef.current)
        ) {
          e.preventDefault();
          closeButtonRef.current.focus();
        }
      }
    };

    const closeOnEsc = (e) => {
      if (e.key === 'Escape' && isDialogOpen) {
        setIsDialogOpen(false);
      }
    };

    document.addEventListener('keydown', focusTrap);
    document.addEventListener('keydown', closeOnEsc);

    return () => {
      document.removeEventListener('keydown', focusTrap);
      document.removeEventListener('keydown', closeOnEsc);
    };
  }, [isDialogOpen, closeButtonRef.current, yearSelectRef.current]);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (!dialogRef.current.contains(e.target) && isDialogOpen) {
        setIsDialogOpen(false);
      }
    };
    document.addEventListener('click', closeOnClickOutside);

    return () => document.removeEventListener('click', closeOnClickOutside);
  }, [isDialogOpen, dialogRef.current]);

  useLayoutEffect(() => {
    if (isDialogOpen) {
      dialogRef.current.focus();
    } else if (document.activeElement !== inputRef.current && !isInitialRender.current) {
      toggleButtonRef.current.focus();
    } else {
      isInitialRender.current = false;
    }
  }, [isDialogOpen, yearSelectRef.current, toggleButtonRef.current, inputRef.current]);

  // https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html#kbd_label_5
  const handleKeyboardNavigation = (e) => {
    let newView = new Date(view);

    const keyActions = {
      ArrowLeft: () => {
        newView.setDate(view.getDate() - 1);
      },
      ArrowRight: () => {
        newView.setDate(view.getDate() + 1);
      },
      ArrowUp: () => {
        newView.setDate(view.getDate() - 7);
      },
      ArrowDown: () => {
        newView.setDate(view.getDate() + 7);
      },
      PageUp: () => {
        if (e.shiftKey) {
          newView.setFullYear(view.getFullYear() - 1);
        } else {
          newView = getPrevMonthDate(view);
        }
      },
      PageDown: () => {
        if (e.shiftKey) {
          newView.setFullYear(view.getFullYear() + 1);
        } else {
          newView = getNextMonthDate(view);
        }
      },
      Home: () => {
        newView = getFirstDayOfWeek(view, firstDayOfWeek);
      },
      End: () => {
        newView = getLastDayOfWeek(view, firstDayOfWeek);
      },
    };

    if (Object.keys(keyActions).includes(e.key)) {
      e.preventDefault();
    } else {
      return;
    }

    keyActions[e.key]?.();

    setView(newView);

    setTimeout(() => {
      focusedElement.current.focus();
    }, 0);
  };

  const getPrevMonthDate = (view) => {
    return getMonth(view, view.getMonth() - 1);
  };

  const getNextMonthDate = (view) => {
    return getMonth(view, view.getMonth() + 1);
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

  const renderFromObject = ({ type, children, ...props }) =>
    h(type, props, children && children.length && children.map((child) => renderFromObject(child)));

  return (
    <Context.Provider
      value={{
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
        id={`${id}-input`}
        type="text"
        className={classes.input}
        value={selected && selected.toLocaleDateString(locale)}
        onChange={(e) => onInputChange(e)}
        ref={inputRef}
      />
      <input type="hidden" id={`${id}-value`} value={formatDate(selected)} name={name} />
      <button
        type="button"
        aria-controls={`${id}-dialog`}
        onClick={() => toggleDialog()}
        aria-expanded={isDialogOpen}
        ref={toggleButtonRef}
        className={classes.toggleButton}
      >
        {calendarIcon && renderFromObject(calendarIcon)}
        {calendarIcon ? <span class={classes.srOnly}>{l10n.openButton}</span> : l10n.openButton}
      </button>
      <div
        className={classes.wrapper}
        role="dialog"
        aria-modal="true"
        aria-labelledby="daypickr-label"
        hidden={!isDialogOpen}
        ref={dialogRef}
        tabIndex="-1"
      >
        <div className="daypickr__content">
          <h2 id="daypickr-label" className="sr-only">
            {view.toLocaleString(locale, { month: 'long', year: 'numeric' })}
          </h2>
          <div className={classes.header}>
            <div className={classes.yearMonthWrapper}>
              <YearSelect ref={yearSelectRef} />
              <MonthSelect />
            </div>

            <div className={classes.pagination}>
              <button
                type="button"
                className={`${classes.button} ${classes.prevMonthButton}`}
                onClick={prevMonth}
              >
                {l10n.prevMonth}
              </button>
              <button
                type="button"
                className={`${classes.button} ${classes.nextMonthButton}`}
                onClick={nextMonth}
              >
                {l10n.nextMonth}
              </button>
            </div>
          </div>
          <Calendar />
          <button
            className={`${classes.button} ${classes.closeButton}`}
            type="button"
            onClick={() => toggleDialog()}
            ref={closeButtonRef}
          >
            {l10n.closeButton}
          </button>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Daypickr;
