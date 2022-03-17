export default {
  wrapper: 'daypicker',
  header: 'daypicker__header',
  select: 'daypicker__select',
  monthSelect: 'daypicker__select--month',
  yearSelect: 'daypicker__select--year',
  button: 'daypicker__button',
  paginationButton: 'daypicker__button--pagination',
  nextMonthButton: 'daypicker__button--pagination-next',
  prevMonthButton: 'daypicker__button--pagination-prev',
  yearMonthWrapper: 'daypicker__year-month-wrapper',
  pagination: 'daypicker__pagination',
  table: 'daypicker__calendar',
  tableRow: 'daypicker__calendar-row',
  tableCell: 'daypicker__calendar-cell',
  tableHeaderRow: 'daypicker__calendar-header-row',
  tableHeaderCell: 'daypicker__calendar-header-cell',
  dayButton: 'daypicker__day',
  isToday: 'isToday',
  isSelected: 'isSelected',
  srOnly: 'sr-only',
  closeButton: 'daypicker__button--close',
  toggleButton: 'daypicker__button--toggle',
};

export function concat(...items) {
  return items.join(' ').trim();
}
