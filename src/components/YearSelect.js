import { useContext } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import { html } from 'htm/preact';

import Context from './Context';
import Select from './Select';

function populateYears(start, end) {
  const result = [];
  for (let curr = start; curr <= end; curr++) {
    result.push(curr);
  }

  return result;
}

const YearSelect = forwardRef((props, ref) => {
  const { l10n, min, max, view, setView, classes } = useContext(Context);
  const startYear = new Date(min).getFullYear();
  const endYear = new Date(max).getFullYear();

  return html`<${Select}
    label=${l10n.year}
    options=${populateYears(startYear, endYear)}
    value=${view.getFullYear()}
    className=${classes.yearSelect}
    onChange=${(e) => {
      const newView = new Date(view);
      newView.setFullYear(parseInt(e.target.value, 10));
      setView(newView);
    }}
    ref=${ref}
    ...${props}
  />`;
});

export default YearSelect;
