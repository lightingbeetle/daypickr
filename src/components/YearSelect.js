import { useState, useContext } from "preact/hooks";
import { html } from "htm/preact";

import Context from "./Context";
import Select from "./Select";

function populateYears(start, end) {
  const result = [];
  for (let curr = start; curr <= end; curr++) {
    result.push(curr);
  }

  return result;
}

const YearSelect = ({ year }) => {
  const { setYear, l10n, min, max } = useContext(Context);
  const startYear = new Date(min).getFullYear();
  const endYear = new Date(max).getFullYear();

  return html`<${Select}
    label=${l10n.year}
    options=${populateYears(startYear, endYear)}
    value=${year}
    onChange=${(e) => setYear(parseInt(e.target.value, 10))}
  />`;
};

export default YearSelect;
