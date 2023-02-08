import dayjs from "dayjs";

export function formatDate(value: Date, format: string): string {
  return dayjs(value).format(format);
}

export function readableDateInterval(startDate: Date, endDate: Date): string|undefined {
  let yearLabel: string = 'year'
  let monthLabel: string = 'month'
  let result, yearsVerbiage, monthsVerbiage: string = ''
  if (startDate && endDate) {
    const date1 = dayjs(startDate)
    const date2 = dayjs(endDate)
    const totalMonthsDiff: number = date2.diff(date1, 'month')
    const totalYearsDiff: number = date2.diff(date1, 'year')
    const remainderMonths: number = totalMonthsDiff % 12
    if (totalYearsDiff >= 1) {
      if (totalMonthsDiff > 1) {
        yearLabel = 'years'
      }
      yearsVerbiage = `${totalYearsDiff.toString()} ${yearLabel}`
      result = yearsVerbiage
    }
    if (remainderMonths >= 1) {
      if (remainderMonths > 1) {
        monthLabel = 'months'
      }
      monthsVerbiage = `${remainderMonths.toString()} ${monthLabel}`
      result = monthsVerbiage
    }

    if (totalYearsDiff >= 1 && remainderMonths >= 1) {
      result = `${yearsVerbiage}, ${monthsVerbiage}`
    }
  }
  return result
}