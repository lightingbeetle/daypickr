import { dialog, calendar } from './templates';

const defaultConfig = {
  attachTo: '#daypicker',
  appendTo: 'body',
  strings: {
    prevMonth: 'previous month',
    nextMonth: 'next month',
    month: 'Month',
    year: 'Year',
  },
  classes: {
    wrapper: 'daypicker',
    header: 'daypicker__header',
    select: 'daypicker__select',
    monthSelect: 'daypicker__month-select',
    yearSelect: 'daypicker__month-select',
  },
  months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
  years: [ '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999' ],
  weekdays: [ { name: 'Sunday', shortname: 'Sun', }, { name: 'Monday', shortname: 'Mon', }, { name: 'Tuesday', shortname: 'Tue', }, { name: 'Wednesday', shortname: 'Wed', }, { name: 'Thursday', shortname: 'Thu', }, { name: 'Friday', shortname: 'Fri', }, { name: 'Saturday', shortname: 'Sat', }, ]
};

class Daypicker {
  constructor(config) {
    this.config = {...defaultConfig, ...config};

    this.init();

    this.today = new Date();
    this.currentViewDates = [];

    return this;
  }

  init() {
    this.boundElement = document.querySelector(this.config.attachTo);
    
    if (!this.boundElement) {
      console.log('cannot bind to an element');
      return false;
    }

    this.appendToElement = document.querySelector(this.config.appendTo);

    this.identifier = this.boundElement.getAttribute('id');

    this.populateCalendar(2020, 11);
    this.renderDialog();
    this.renderCalendar();
  }

  renderDialog() {
    const dialogId = `${this.identifier}-dialog`;

    this.appendToElement.insertAdjacentHTML(
      'beforeend',
      dialog({
        ...this.config,
        id: dialogId,
      }),
    );

    this.dialog = document.getElementById(dialogId);
    console.log(this.dialog);
  }

  renderCalendar() {
    const calendarId = `${this.identifier}-calendar`;

    this.dialog.insertAdjacentHTML(
      'beforeend',
      calendar({
        ...this.config,
        id: calendarId,
        days: this.currentViewDates,
      })
    );

    this.calendar = document.getElementById(calendarId);
  }

  populateCalendar(year, month) {
    const currentMonth = new Date(year, month);
    const firstDay = currentMonth.getDay();
    const lastDay = new Date(year, month + 1, 0).getDay();
    const days = [];

    for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
      const day = new Date(year, month, i);
      days.push(day);
    }

    for (let i = 0; i < firstDay; i++) {
      const day = new Date( new Date(currentMonth).setDate(i * -1) );
      days.unshift(day);
    }

    for (let i = lastDay, l = 1; i < 6; i++, l++) {
      const day = new Date(year, month + 1, l);
      days.push(day);
    }

    this.currentViewDates = days.map(day => ({
      date: day,
      number: day.getDay(),
    }));
  }
}

new Daypicker();
