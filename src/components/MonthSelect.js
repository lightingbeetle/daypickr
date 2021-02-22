import { useState, useContext } from "preact/hooks";
import { html } from "htm/preact";

import Context from "./Context";
import Select from "./Select";

const MonthSelect = ({ month }) => {
  const { l10n } = useContext(Context);

  return html`<${Select}
    label=${l10n.month}
    value=${month}
    options=${l10n.months.map((month, i) => ({ value: i, text: month }))}
  />`;
};

export default MonthSelect;
