export default {
  wrapper: 'daypickr',
  header: 'daypickr__header',
  select: 'daypickr__select',
  monthSelect: 'daypickr__select--month',
  yearSelect: 'daypickr__select--year',
  button: 'daypickr__button',
  paginationButton: 'daypickr__button--pagination',
  nextMonthButton: 'daypickr__button--pagination-next',
  prevMonthButton: 'daypickr__button--pagination-prev',
  yearMonthWrapper: 'daypickr__year-month-wrapper',
  pagination: 'daypickr__pagination',
  table: 'daypickr__calendar',
  tableRow: 'daypickr__calendar-row',
  tableCell: 'daypickr__calendar-cell',
  tableHeaderRow: 'daypickr__calendar-header-row',
  tableHeaderCell: 'daypickr__calendar-header-cell',
  dayButton: 'daypickr__day',
  isToday: 'isToday',
  isSelected: 'isSelected',
  srOnly: 'sr-only',
  closeButton: 'daypickr__button--close',
  toggleButton: 'daypickr__button--toggle',
};

export function concat(...items) {
  return items.join(' ').trim();
}
