import { zonedTimeToUtc } from 'date-fns-tz'
import { format, formatDistance } from 'date-fns'

export const dateFromElixirString = (dateStr: string): Date =>
  zonedTimeToUtc(new Date(dateStr), 'GMT')

export function formatShortDate(date: Date | string): string {
  const d = typeof date === 'string' ? dateFromElixirString(date) : date
  return format(d, 'yyyy-MM-dd')
}

export function formatLongDate(date: Date | string): string {
  const d = typeof date === 'string' ? dateFromElixirString(date) : date
  return format(d, 'yyyy-MM-dd HH:mm:ss')
}

export function formatRelative(date: Date | string): string {
  const d = typeof date === 'string' ? dateFromElixirString(date) : date
  return formatDistance(d, new Date(), { addSuffix: true })
}
