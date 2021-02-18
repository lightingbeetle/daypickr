import { dialog, calendar } from "./templates";
import l10n from "./utils/l10n";
import { getMonthView } from "./utils/date";

const defaultConfig = {
  attachTo: "#daypicker",
  appendTo: "body",
  firstDayOfWeek: 1,
  l10n,
  classes: {
    wrapper: "daypicker",
    header: "daypicker__header",
    select: "daypicker__select",
    monthSelect: "daypicker__month-select",
    yearSelect: "daypicker__month-select",
    table: "daypicker__calendar",
    tableRow: "daypicker__calendar-row",
    tableCell: "daypicker__calendar-cell",
    tableHeaderRow: "daypicker__calendar-header-row",
    tableHeaderCell: "daypicker__calendar-header-cell",
    dayButton: "daypicker__day-button",
    isToday: "isToday",
    srOnly: "sr-only",
  },
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  years: [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
  ],
};

class Daypicker {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };

    this.init();

    this.today = new Date();
    this.currentViewDates = [];

    return this;
  }

  init() {
    this.boundElement = document.querySelector(this.config.attachTo);

    if (!this.boundElement) {
      console.log("cannot bind to an element");
      return false;
    }

    this.appendToElement = document.querySelector(this.config.appendTo);

    this.identifier = this.boundElement.getAttribute("id");

    this.arrangeWeekdays();
    this.populateCalendar(2020, 11);
    this.renderDialog();
    this.renderCalendar();
  }

  renderDialog() {
    const dialogId = `${this.identifier}-dialog`;

    this.appendToElement.insertAdjacentHTML(
      "beforeend",
      dialog({
        ...this.config,
        id: dialogId,
      })
    );

    this.dialog = document.getElementById(dialogId);
  }

  renderCalendar() {
    const calendarId = `${this.identifier}-calendar`;

    this.dialog.insertAdjacentHTML(
      "beforeend",
      calendar({
        ...this.config,
        id: calendarId,
        days: this.currentViewDates,
        weekdays: this.config.l10n.weekdays,
      })
    );

    this.calendar = document.getElementById(calendarId);
  }

  populateCalendar(year, month) {
    const days = getMonthView(year, month, this.config.firstDayOfWeek);

    this.currentViewDates = days.map((day) => ({
      date: day,
      number: day.getDate(),
    }));
  }

  /** reorder week days to match firstDayOfWeek settings */
  arrangeWeekdays() {
    const moveToEnd = this.config.l10n.weekdays.splice(
      0,
      this.config.firstDayOfWeek
    );
    console.log(moveToEnd);
    this.config.l10n.weekdays = [...this.config.l10n.weekdays, ...moveToEnd];
  }
}

new Daypicker();
