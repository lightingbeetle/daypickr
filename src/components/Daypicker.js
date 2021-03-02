import { html } from "htm/preact";
import { useState, useRef } from "preact/hooks";

import classNames from "../utils/classNames";
import l10n from "../utils/l10n";
import keyCodes from "../utils/keyCodes";
import Context from "./Context";

import Calendar from "./Calendar";
import YearSelect from "./YearSelect";
import MonthSelect from "./MonthSelect";

const Daypicker = ({
  min = "1900-01-01",
  max = "2100-12-31",
  classes = classNames,
  selectedDay,
  firstDayOfWeek = 0,
}) => {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(10);
  const [selected, setCurrentDay] = useState(
    selectedDay ? new Date(selectedDay) : undefined
  );
  const [focused, setFocused] = useState(
    selectedDay ? new Date(selectedDay) : new Date(`${year}-${month + 1}-01`)
  );

  let focusedRef = null;

  const handleKeyboardNavigation = (e) => {
    e.preventDefault();

    const storage = new Date(focused);

    switch (e.which) {
      case keyCodes.ARROWLEFT:
        storage.setDate(storage.getDate() - 1);
        setFocused(storage);
        break;
      case keyCodes.ARROWRIGHT:
        storage.setDate(storage.getDate() + 1);
        setFocused(storage);
        break;
      case keyCodes.ARROWUP:
        storage.setDate(storage.getDate() - 7);
        setFocused(storage);
        break;
      case keyCodes.ARROWDOWN:
        storage.setDate(storage.getDate() + 7);
        setFocused(storage);
        break;
    }

    setTimeout(() => {
      focusedRef.focus();
      console.log(focusedRef.children[0]);
    }, 100);
  };

  return html`
    <${Context.Provider}
      value=${{
        firstDayOfWeek,
        classes,
        l10n,
        min,
        max,
        selected,
        focused,
        setYear,
        setMonth,
        setCurrentDay,
        setFocused,
        handleKeyboardNavigation,
        focusedRef: (el) => (focusedRef = el),
      }}
    >
      <strong>Selected: </strong>${selected
        ? selected.toLocaleDateString()
        : ""}
      <div class=${classes.wrapper} role="dialog" aria-modal="true">
        <div class="${classes.header}">
          <${YearSelect} year=${year} />
          <${MonthSelect} month=${month} />
          <button
            onClick=${() => {
              if (month > 0) {
                setMonth(month - 1);
              } else {
                setMonth(11);
                setYear(year - 1);
              }
            }}
          >
            ${l10n.prevMonth}
          </button>
          <button
            onClick=${() => {
              if (month < 11) {
                setMonth(month + 1);
              } else {
                setMonth(0);
                setYear(year + 1);
              }
            }}
          >
            ${l10n.nextMonth}
          </button>
        </div>
      </div>
      <${Calendar} year=${year} month=${month} />
    <//>
  `;
};

export default Daypicker;
