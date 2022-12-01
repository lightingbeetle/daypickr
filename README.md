# Daypickr

An accessible, interactive widget for selecting a day which populates an input field with a date.

## Demo

[https://daypickr.vercel.app/](https://daypickr.vercel.app/)

## Use

```html
<div id="my-dayPickr"></div>
```

```javascript
import dayPickr from 'daypickr';

const myDaypickr = new dayPickr(document.getElementById('#my-dayPickr'), { ...options });
```

```html
<script src="daypickr.min.js"></script>
<script>
  dayPickr.default(document.getElementById('#my-dayPickr'), {
    ...options,
  });
</script>
```

The dayPickr function renders two input elements - a user editable input field and a hidden field that is populated with the selected value. The user editable input should be formatted in natural language and is not set along with the form. The hidden input is populated with YYYY-MM-DD format, which can be customized.

## Options

```javascript
{
  min = '1900-01-01', // minimum date
  max = '2100-12-31', // maximum date
  classes = {
    wrapper: 'daypickr', // calendar dialog wrapper
    header: 'daypickr__header', // calendar header with month and year navigation
    select: 'daypickr__select', // all select elements
    monthSelect: 'daypickr__select--month', // select for choosing calendar month
    yearSelect: 'daypickr__select--year', // select for choosing calendar year
    button: 'daypickr__button', // all buttons in calendar
    paginationButton: 'daypickr__button--pagination', // next/prev pagination buttons
    nextMonthButton: 'daypickr__button--pagination-next', // next month pagination button
    prevMonthButton: 'daypickr__button--pagination-prev', // previous month pagination button
    yearMonthWrapper: 'daypickr__year-month-wrapper', // wrapper for year and month selects
    pagination: 'daypickr__pagination', // wrapper for prev/next buttons
    table: 'daypickr__calendar', // calendar table
    tableRow: 'daypickr__calendar-row', // calendar table row
    tableCell: 'daypickr__calendar-cell', // calendar table cell
    tableHeaderRow: 'daypickr__calendar-header-row', // calendar table header row with weekdays
    tableHeaderCell: 'daypickr__calendar-header-cell', // calendar table header cell with weekdays
    dayButton: 'daypickr__day', // button element for each day
    isToday: 'isToday', // today button element
    isSelected: 'isSelected', // selected button element
    srOnly: 'sr-only', // visually hidden screenreader text
    closeButton: 'daypickr__button--close', // dialog close button
    toggleButton: 'daypickr__button--toggle', // open/close toggle button
  },
  selectedDay, // preselected date, also fills input value
  firstDayOfWeek = 1, // first day of week, defaults to monday
  locale = {}, // locale of the displayed date.
  disabledDayFn = () => {}, // receives a date object for each visible date. disable any date by returning true.
  onSelect = () => {}, // function invoked upon selecting a date. receives the selected date object as argument.
  formatDate = (date) => dateToYYYYMMDD(date), // format the date for hidden input element
  parseDate = (date) => { // parse user input for manual entry
    const matches = date.match(/(\d{2})\/(\d{2})\/(\d{4})/);

    if (matches) {
      return new Date(matches[3], matches[2] - 1, matches[1]);
    }

    return false;
  },
  name, // name of the hidden input element
  id, // id of the user editable input field
  calendarIcon, // object rendered into an element in the open/close button using createElement. When present, the button text is wrapped in a span with srOnly className.
  /**
   * calendarIcon: {
   *   type: 'svg',
   *   width: '10',
   *   height: '10,
   *   viewBox: '0 0 10 10',
   *   children: [
   *     type: 'rect',
   *     width: '10',
   *     height: '10',
   *     fill: 'blue',
   *   ]
   * }
   * /
}
```
