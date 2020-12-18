export default ({
  classes,
  l10n,
  months,
  years,
  id,
}) => `
  <div id="${id}" class="${classes.wrapper}" role="dialog" aria-modal="true">
    <div class="${classes.header}">

      <label>
        ${l10n.month}
        <select data-daypicker-month-select class="${classes.select} ${classes.monthSelect}">
          ${months.map(month => `<option>${month}</option>`)}
        </select>
      </label>

      <label>
        ${l10n.year}
        <select data-daypicker-year-select class="${classes.select} ${classes.yearSelect}">
          ${years.map(year => `<option>${year}</option>`)}
        </select>
      </label>

      <button type="button" data-daypicker-prev-month>${l10n.prevMonth}</button>
      <button type="button" data-daypicker-prev-month>${l10n.nextMonth}</button>  
    </div>
  </div>
`;