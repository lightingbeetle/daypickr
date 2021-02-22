import { html } from "htm/preact";

const Select = ({ label, value, options, onChange, ...other }) => {
  return html`
    <label>
      ${label}
      <select onChange=${(e) => onChange(e)} ${{ ...other }}>
        ${options.map(
          (opt) => html`
            <option
              value=${opt?.value || opt}
              selected=${value === opt?.value || value === opt
                ? "selected"
                : undefined}
            >
              ${opt?.text ? opt.text : opt}
            </option>
          `
        )}
      </select>
    </label>
  `;
};

export default Select;
