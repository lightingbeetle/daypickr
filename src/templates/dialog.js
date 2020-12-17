export default ({
  classes,
  strings,
  months,
  years,
  id,
}) => `
  <div id="${id}" class="${classes.wrapper}" role="dialog" aria-modal="true">
    <div class="${classes.header}">

      <label>
        ${strings.month}
        <select data-daypicker-month-select class="${classes.select} ${classes.monthSelect}">
          ${months.map(month => `<option>${month}</option>`)}
        </select>
      </label>

      <label>
        ${strings.year}
        <select data-daypicker-year-select class="${classes.select} ${classes.yearSelect}">
          ${years.map(year => `<option>${year}</option>`)}
        </select>
      </label>

      <button type="button" data-daypicker-prev-month>${strings.prevMonth}</button>
      <button type="button" data-daypicker-prev-month>${strings.nextMonth}</button>  
    </div>
  </div>
`;