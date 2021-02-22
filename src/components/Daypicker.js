import { html } from "htm/preact";
import { useState } from "preact/hooks";

import classNames from "../utils/classNames";
import l10n from "../utils/l10n";
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
  const [selected, setCurrentDay] = useState(new Date(selectedDay));
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(10);

  return html`
    <${Context.Provider}
      value=${{
        firstDayOfWeek,
        classes,
        l10n,
        min,
        max,
        selected,
        setYear,
        setMonth,
        setCurrentDay,
      }}
    >
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
