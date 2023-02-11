import dayjs from 'dayjs';
import ptBr from 'dayjs/locale/pt-br'

export function formatDate(value: Date, format: string, lang: string="enUs"): string {
  if (lang === 'ptBr') {
    return dayjs(value).locale(ptBr).format(format);
  }
  return dayjs(value).format(format)
}

export function readableDateInterval(startDate: Date, endDate: Date, lang: string="enUs"): string|undefined {
  let yearLabel: string = lang === 'enUs' ? 'year' : 'ano'
  let monthLabel: string = lang === 'enUs' ? 'month' : 'mês'
  let result, yearsVerbiage, monthsVerbiage: string = ''
  if (startDate && endDate) {
    const date1 = dayjs(startDate)
    const date2 = dayjs(endDate)
    const totalMonthsDiff: number = date2.diff(date1, 'month')
    const totalYearsDiff: number = date2.diff(date1, 'year')
    const remainderMonths: number = totalMonthsDiff % 12
    if (totalYearsDiff >= 1) {
      if (totalMonthsDiff > 1) {
        yearLabel = lang === 'enUs' ? 'years' : 'anos'
      }
      yearsVerbiage = `${totalYearsDiff.toString()} ${yearLabel}`
      result = yearsVerbiage
    }
    if (remainderMonths >= 1) {
      if (remainderMonths > 1) {
        monthLabel = lang === 'enUs' ? 'months' : 'mêses'
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