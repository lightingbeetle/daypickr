import { useContext } from 'preact/hooks';
import { html } from 'htm/preact';

import Context from './Context';
import Select from './Select';

const MonthSelect = () => {
  const { l10n, view, setView, classes } = useContext(Context);

  return html`<${Select}
    label=${l10n.month}
    value=${view.getMonth()}
    className=${classes.monthSelect}
    options=${l10n.months.map((month, i) => ({ value: i.toString(), text: month }))}
    onChange=${(e) => {
      const newView = new Date(view);
      newView.setMonth(parseInt(e.target.value, 10));
      setView(newView);
    }}
  />`;
};

export default MonthSelect;
