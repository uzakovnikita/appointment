const normalizeDateNumber = (number: number) => {
  if (number > 10) {
    return number
  }
  return `0${number}`
}

export const normalizeDate = (date: Date) => {
  return {
    month: normalizeDateNumber(date.getMonth()),
    day: normalizeDateNumber(date.getDate()),
    year: normalizeDateNumber(date.getFullYear()),
    hours: normalizeDateNumber(date.getHours()),
    minutes: normalizeDateNumber(date.getMinutes()),
  }
}
