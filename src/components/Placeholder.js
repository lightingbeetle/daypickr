import { h } from 'preact';
import Context from './Context';

const Placeholder = ({ calendarIcon, classes = classNames, l10n = l10nEN, ...other }) => {
  const renderFromObject = ({ type, children, ...props }) =>
    h(type, props, children && children.length && children.map((child) => renderFromObject(child)));

  return (
    <Context.Provider
      value={{
        classes,
        l10n,
      }}
    >
      <input type="text" disabled className={classes.input} />
      <button type="button" className={classes.toggleButton} disabled>
        {calendarIcon && renderFromObject(calendarIcon)}
        {calendarIcon ? <span class={classes.srOnly}>{l10n.openButton}</span> : l10n.openButton}
      </button>
    </Context.Provider>
  );
};

export default Placeholder;
