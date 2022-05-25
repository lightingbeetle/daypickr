import { useContext } from 'preact/hooks';
import { forwardRef } from 'preact/compat';

import Context from './Context';
import { concat } from '../utils/classNames';

const Select = forwardRef(
  ({ label, value, options, onChange, className, elemRef, ...other }, ref) => {
    const { classes } = useContext(Context);

    return (
      <label>
        <span className="sr-only">{label}</span>
        <select
          className={concat(classes.select, className)}
          onChange={(e) => onChange(e)}
          ref={ref}
          {...other}
        >
          {options.map((opt) => (
            <option
              value={opt?.value || opt}
              selected={value === opt?.value || value === opt ? 'selected' : undefined}
            >
              {opt?.text ? opt.text : opt}
            </option>
          ))}
        </select>
      </label>
    );
  }
);

export default Select;
