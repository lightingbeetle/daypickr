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

    this.today = new Date();
    this.currentView = {
      year: this.today.getFullYear(),
      month: this.today.getMonth(),
    };
    this.currentViewDates = [];

    this.yearSelect = null;
    this.monthSelect = null;
    this.prevButton = null;
    this.nextButton = null;

    this.onYearChange = this.onYearChange.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onPrevMonth = this.onPrevMonth.bind(this);
    this.onNextMonth = this.onNextMonth.bind(this);

    this.init();

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
    this.populateCalendar();
    this.renderDialog();
    this.renderCalendar();
    this.bindNavigation();
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
    console.log(this.dialog);
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

  populateCalendar() {
    const days = getMonthView(
      this.currentView.year,
      this.currentView.month,
      this.config.firstDayOfWeek
    );

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
    this.config.l10n.weekdays = [...this.config.l10n.weekdays, ...moveToEnd];
  }

  bindNavigation() {
    this.yearSelect = this.dialog.querySelector("[data-daypicker-year-select]");
    this.monthSelect = this.dialog.querySelector(
      "[data-daypicker-month-select]"
    );
    this.prevButton = this.dialog.querySelector("[data-daypicker-prev-month]");
    this.nextButton = this.dialog.querySelector("[data-daypicker-next-month]");

    this.yearSelect.addEventListener("change", this.onYearChange);
    this.monthSelect.addEventListener("change", this.onMonthChange);
    this.prevButton.addEventListener("click", this.onPrevMonth);
    this.nextButton.addEventListener("click", this.onNextMonth);
  }

  onYearChange() {
    this.calendar.remove();
    this.currentView.year = parseInt(this.yearSelect.value, 10);
    this.populateCalendar();
    this.renderCalendar();
  }

  onMonthChange() {
    this.calendar.remove();
    this.currentView.month = parseInt(this.monthSelect.value, 10);
    this.populateCalendar();
    this.renderCalendar();
  }

  onPrevMonth() {
    if (this.currentView.month > 0) {
      this.currentView.month = this.currentView.month - 1;
    } else {
      this.currentView.month = 11;
      this.currentView.year = this.currentView.year - 1;
    }
    this.updateSelects();
    this.calendar.remove();
    this.populateCalendar();
    this.renderCalendar();
  }

  onNextMonth() {
    if (this.currentView.month < 11) {
      this.currentView.month = this.currentView.month + 1;
    } else {
      this.currentView.month = 0;
      this.currentView.year = this.currentView.year + 1;
    }
    this.updateSelects();
    this.calendar.remove();
    this.populateCalendar();
    this.renderCalendar();
  }

  updateSelects() {
    this.monthSelect.value = this.currentView.month;
    this.yearSelect.value = this.currentView.year;
  }
}

new Daypicker();
