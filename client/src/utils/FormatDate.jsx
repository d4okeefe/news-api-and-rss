import { format } from 'date-fns'

export function format_date(d) {
  var date = new Date(d.replace('T', ' '))
  return format(date, 'd MMM yyyy')
}

export function within_six_months(d) {
  var date = new Date(d.replace('T', ' '))
  var today_date = new Date()
  if (today_date - 60 > date) return false
  else return true
}
