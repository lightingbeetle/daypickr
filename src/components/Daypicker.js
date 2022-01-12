import { html } from 'htm/preact';
import { useState, useRef, useEffect, useCallback } from 'preact/hooks';

import classNames from '../utils/classNames';
import l10n from '../utils/l10n';
import keyCodes, { arrowKeys } from '../utils/keyCodes';
import { getMonth } from '../utils/date';
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
  inputEl,
  outputFormat = (date) => date.toLocaleDateString('sk-SK'),
}) => {
  const [view, setView] = useState(selectedDay ? new Date(selectedDay) : new Date());
  const [selected, setSelected] = useState(selectedDay ? new Date(selectedDay) : undefined);

  const focusedElement = useRef();

  useEffect(() => {
    selected ? (inputEl.value = outputFormat(selected)) : null;
  }, [selected]);

  const handleKeyboardNavigation = (e) => {
    if (arrowKeys.includes(e.which)) {
      e.preventDefault();
    } else {
      return;
    }

    const newView = new Date(view);

    switch (e.which) {
      case keyCodes.ARROWLEFT:
        newView.setDate(view.getDate() - 1);
        break;
      case keyCodes.ARROWRIGHT:
        newView.setDate(view.getDate() + 1);
        break;
      case keyCodes.ARROWUP:
        newView.setDate(view.getDate() - 7);
        break;
      case keyCodes.ARROWDOWN:
        newView.setDate(view.getDate() + 7);
        break;
    }

    setView(newView);

    setTimeout(() => {
      focusedElement.current.focus();
    }, 0);
  };

  const prevMonth = () => {
    setView(getMonth(view, view.getMonth() - 1));
  };

  const nextMonth = () => {
    setView(getMonth(view, view.getMonth() + 1));
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
      <strong>Selected: </strong>${selected ? selected.toLocaleDateString('sk-SK') : ''}
      <div
        class=${classes.wrapper}
        role="dialog"
        aria-modal="true"
        aria-labelledby="daypicker-label"
      >
        <h2 id="daypicker-label" class="sr-only">${view.getFullYear()} ${view.getMonth()}</h2>
        <div class="${classes.header}">
          <${YearSelect} />
          <${MonthSelect} />
          <button type="button" onClick=${prevMonth}>${l10n.prevMonth}</button>
          <button type="button" onClick=${nextMonth}>${l10n.nextMonth}</button>
        </div>
        <${Calendar} />
      </div>
    <//>
  `;
};

export default Daypicker;
