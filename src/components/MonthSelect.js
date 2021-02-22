import { useState, useContext } from "preact/hooks";
import { html } from "htm/preact";

import Context from "./Context";
import Select from "./Select";

const MonthSelect = ({ month }) => {
  const { l10n, setMonth } = useContext(Context);

  return html`<${Select}
    label=${l10n.month}
    value=${month}
    options=${l10n.months.map((month, i) => ({ value: i, text: month }))}
    onChange=${(e) => setMonth(parseInt(e.target.value, 10))}
  />`;
};

export default MonthSelect;
