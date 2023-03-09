function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

function getRange(startDate, endDate) {
  const days = [];
  let currentDay = startDate;

  while (currentDay.getTime() < endDate.getTime()) {
    days.push(new Date(currentDay));
    currentDay = new Date(currentDay.setDate(currentDay.getDate() + 1));
  }

  days.push(new Date(currentDay));

  return days;
}

export function getFirstDayOfWeek(date, firstDayOfWeek = 1) {
  const d = new Date(date);
  const day = date.getDay();
  const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;

  const result = new Date(d.setDate(d.getDate() - diff));

  return result;
}

export function getLastDayOfWeek(date, firstDayOfWeek = 1) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day < firstDayOfWeek ? -7 : 0) + 6 - (day - firstDayOfWeek);

  return new Date(d.setDate(d.getDate() + diff));
}

export function getMonthView(view, firstDayOfWeek) {
  const monthStart = new Date(view);
  monthStart.setDate(1);
  const monthEnd = new Date(view);
  monthEnd.setMonth(view.getMonth() + 1, 0);

  const firstDay = getFirstDayOfWeek(monthStart, firstDayOfWeek);
  const lastDay = getLastDayOfWeek(monthEnd, firstDayOfWeek);

  return getRange(firstDay, lastDay);
}

export function splitToWeeks(days) {
  const weeks = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}

/** reorder week days to match firstDayOfWeek settings */
export function arrangeWeekdays(weekdays, firstDayOfWeek) {
  const days = weekdays?.length ? [...weekdays] : [];
  const moveToEnd = days.splice(0, firstDayOfWeek);
  return [...days, ...moveToEnd];
}

export function isToday(date) {
  const today = new Date();
  return datesAreEqual(today, date);
}

export function datesAreEqual(date1, date2) {
  if (!isDate(date1) || !isDate(date2)) {
    return false;
  }

  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return date1.getTime() === date2.getTime();
}

export function getMonth(date, month) {
  const newMonth = new Date(date).setMonth(month);
  const max = new Date(date.getFullYear(), month + 1, 0).getTime();

  return newMonth > max ? new Date(max) : new Date(newMonth);
}

export function isDayInCurrentMonth(day, view) {
  return day.getMonth() === view.getMonth();
}

export function dateToYYYYMMDD(date) {
  if (!date || !(date instanceof Date)) {
    return '';
  }

  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
}
