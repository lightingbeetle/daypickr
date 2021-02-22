import { html } from "htm/preact";

const Select = ({ label, value, options }) => {
  return html`
    <label>
      ${label}
      <select>
        ${options.map(
          (opt) => html`
            <option
              value=${opt?.value}
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
