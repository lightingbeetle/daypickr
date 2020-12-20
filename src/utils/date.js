function getRange(startDate, endDate) {
  const days = [];
  let currentDay = startDate;

  while (currentDay.getTime() !== endDate.getTime()) {
    days.push(new Date(currentDay));
    currentDay = new Date( currentDay.setDate(currentDay.getDate() + 1) );
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