function splitToWeeks(days) {
  const weeks = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}

export default ({
  classes,
  weekdays,
  days,
  id,
}) => {
  const weeks = splitToWeeks(days);

  return`
    <table id="${id}" role="grid" class="${classes.table}">
      <thead>
        <tr class="${classes.tableHeaderRow}">
          ${weekdays.map(day => `
            <th scope="col" class="${classes.tableHeaderCell}">
              <span class="${classes.srOnly}">${day.name}</span>
              <span aria-hidden="true">${day.shortname}</span>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        ${weeks.map(week => `
          <tr class="${classes.tableRow}">
            ${week.map(day => `
              <td role="gridcell" class="${classes.tableCell}">
                <button class="${classes.dayButton} ${day.isToday && classes.isToday}" type="button">
                  <span class="${classes.srOnly}">${day.date}</span>
                  <span aria-hidden="true">${day.number}</span>
                </button>
              </td>
            `).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `
};