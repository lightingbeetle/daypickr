# Daypicker

An accessible, interactive widget for selecting a day which populates an input field with a date.

## Demo

[https://daypicker.netlify.app](https://daypicker.netlify.app)

## Use

```html
<div id="my-dayPicker"></div>
```

```javascript
import dayPicker from 'daypicker';

const myDaypicker = new dayPicker(document.getElementById('#my-dayPicker'), { ...options });
```

The dayPicker function renders two input elements - a user editable input field and a hidden field that is populated with the selected value. The user editable input should be formatted in natural language and is not set along with the form. The hidden input is populated with YYYY-MM-DD format, which can be customized.

## Options

```javascript
{
  min = '1900-01-01', // minimum date
  max = '2100-12-31', // maximum date
  classes = {
    wrapper: 'daypicker', // calendar dialog wrapper
    header: 'daypicker__header', // calendar header with month and year navigation
    select: 'daypicker__select', // all select elements
    monthSelect: 'daypicker__select--month', // select for choosing calendar month
    yearSelect: 'daypicker__select--year', // select for choosing calendar year
    button: 'daypicker__button', // all buttons in calendar
    paginationButton: 'daypicker__button--pagination', // next/prev pagination buttons
    nextMonthButton: 'daypicker__button--pagination-next', // next month pagination button
    prevMonthButton: 'daypicker__button--pagination-prev', // previous month pagination button
    yearMonthWrapper: 'daypicker__year-month-wrapper', // wrapper for year and month selects
    pagination: 'daypicker__pagination', // wrapper for prev/next buttons
    table: 'daypicker__calendar', // calendar table
    tableRow: 'daypicker__calendar-row', // calendar table row
    tableCell: 'daypicker__calendar-cell', // calendar table cell
    tableHeaderRow: 'daypicker__calendar-header-row', // calendar table header row with weekdays
    tableHeaderCell: 'daypicker__calendar-header-cell', // calendar table header cell with weekdays
    dayButton: 'daypicker__day', // button element for each day
    isToday: 'isToday', // today button element
    isSelected: 'isSelected', // selected button element
    srOnly: 'sr-only', // visually hidden screenreader text
    closeButton: 'daypicker__button--close', // dialog close button
    toggleButton: 'daypicker__button--toggle', // open/close toggle button
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
}
```
