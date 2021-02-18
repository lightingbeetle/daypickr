export default ({ classes, l10n, years, id }) => `
  <div id="${id}" class="${classes.wrapper}" role="dialog" aria-modal="true">
    <div class="${classes.header}">

      <label>
        ${l10n.month}
        <select data-daypicker-month-select class="${classes.select} ${
  classes.monthSelect
}">
          ${l10n.months.map((m, i) => `<option value=${i}>${m}</option>`)}
        </select>
      </label>

      <label>
        ${l10n.year}
        <select data-daypicker-year-select class="${classes.select} ${
  classes.yearSelect
}">
          ${years.map((year) => `<option>${year}</option>`)}
        </select>
      </label>

      <button type="button" data-daypicker-prev-month>${l10n.prevMonth}</button>
      <button type="button" data-daypicker-next-month>${
        l10n.nextMonth
      }</button>  
    </div>
  </div>
`;
