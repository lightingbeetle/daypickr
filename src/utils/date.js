function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

function getRange(startDate, endDate) {
  const days = [];
  let currentDay = startDate;

  while (currentDay.getTime() !== endDate.getTime()) {
    days.push(new Date(currentDay));
    currentDay = new Date(currentDay.setDate(currentDay.getDate() + 1));
  }

  days.push(new Date(currentDay));

  return days;
}

function getFirstDayOfWeek(date, firstDayOfWeek) {
  const d = new Date(date);
  const day = date.getDay();
  const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;

  const result = new Date(d.setDate(d.getDate() - diff));

  return result;
}

function getLastDayOfWeek(date, firstDayOfWeek) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day < firstDayOfWeek ? -7 : 0) + 6 - (day - firstDayOfWeek);

  return new Date(d.setDate(d.getDate() + diff));
}

export function getMonthView(year, month, firstDayOfWeek) {
  const monthStart = new Date(year, month);
  const monthEnd = new Date(year, month + 1, 0);

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
  const moveToEnd = weekdays.splice(0, firstDayOfWeek);
  return [...weekdays, ...moveToEnd];
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
