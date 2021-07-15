import dayjs from 'dayjs'
import weekdayPlugin from 'dayjs/plugin/weekday'
import toObjectPlugin from 'dayjs/plugin/toObject'

dayjs.extend(weekdayPlugin)
dayjs.extend(toObjectPlugin)

export default function useCalendar() {
  const { years, months } = dayjs().toObject()
  const monthDay = dayjs().daysInMonth() // 获取当前月份的天数
  const lastMonthDay = dayjs(
    `${months === 0 ? years - 1 : years}-${months === 0 ? '12' : months}-01`
  ).daysInMonth()
  const firstDayOfMonth = `${years}-${months + 1}-01`
  const firstDayOfWeek = dayjs(firstDayOfMonth).weekday() // 当月第一天周几
  const getLastDate = firstDayOfWeek - 1 // 从上月获取的天数
  const lastDateArr = Array.from({ length: getLastDate }).map((item, index) => lastMonthDay - index)
  const lastDayOfMonth = `${years}-${months + 1}-${monthDay}`
  const lastDayOfWeek = dayjs(lastDayOfMonth).weekday() // 当月最后一天周几
  const getNextDate = 7 - lastDayOfWeek // 从下月获取的天数
  const nextDateArr = Array.from({ length: getNextDate }).map((item, index) => index + 1)
  const DateArr = Array.from({ length: monthDay }).map((item, index) => index + 1)
  return {
    days: [...lastDateArr, ...DateArr, ...nextDateArr]
  }
}
