import { useEffect, useState } from 'react'
import { store, type DailyHours, type WeekdayKey } from '../data/store'

const weekdayKeys: Record<string, WeekdayKey> = {
  Sunday: 'sunday', Monday: 'monday', Tuesday: 'tuesday', Wednesday: 'wednesday',
  Thursday: 'thursday', Friday: 'friday', Saturday: 'saturday',
}

type LocalTime = { date: string; weekday: string; minutes: number }

function getLocalTime(date: Date): LocalTime {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: store.timeZone, weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(date)
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? ''
  return {
    date: `${value('year')}-${value('month')}-${value('day')}`,
    weekday: value('weekday'),
    minutes: Number(value('hour')) * 60 + Number(value('minute')),
  }
}

function hoursFor(local: LocalTime): DailyHours | null {
  if (Object.prototype.hasOwnProperty.call(store.hours.special, local.date)) return store.hours.special[local.date]
  return store.hours.weekly[weekdayKeys[local.weekday]]
}

function toMinutes(value: string) {
  const [hour, minute] = value.split(':').map(Number)
  return hour * 60 + minute
}

function displayTime(value: string) {
  const [hourText, minute] = value.split(':')
  const hour = Number(hourText)
  const suffix = hour >= 12 ? 'PM' : 'AM'
  return minute === '00' ? `${hour % 12 || 12} ${suffix}` : `${hour % 12 || 12}:${minute} ${suffix}`
}

function nextOpening(now: Date) {
  for (let offset = 1; offset <= 8; offset += 1) {
    const local = getLocalTime(new Date(now.getTime() + offset * 86_400_000))
    const hours = hoursFor(local)
    if (hours) return `${offset === 1 ? 'tomorrow' : local.weekday} at ${displayTime(hours.opens)}`
  }
  return 'on the next regular business day'
}

export function getStoreStatus(now = new Date()) {
  const local = getLocalTime(now)
  const hours = hoursFor(local)
  const opensAt = hours ? toMinutes(hours.opens) : Number.POSITIVE_INFINITY
  const closesAt = hours ? toMinutes(hours.closes) : Number.NEGATIVE_INFINITY
  const open = Boolean(hours && local.minutes >= opensAt && local.minutes < closesAt)
  const opensLaterToday = Boolean(hours && local.minutes < opensAt)
  const label = open
    ? `Open now · closes at ${displayTime(hours!.closes)}`
    : opensLaterToday
      ? `Opens today at ${displayTime(hours!.opens)}`
      : `Closed · opens ${nextOpening(now)}`
  const acceptingVisitsToday = open || opensLaterToday

  return {
    open,
    label,
    acceptingVisitsToday,
    heroKicker: acceptingVisitsToday ? "Your quick Windsor stop for today's groceries" : 'Plan your next quick Windsor grocery stop',
    directionsLabel: acceptingVisitsToday ? 'Get Directions — Visit Today' : 'Get Directions — Plan Your Visit',
    visitEyebrow: acceptingVisitsToday ? "Make DeMarco's your stop today" : "Plan your next DeMarco's stop",
    visitTitle: acceptingVisitsToday ? 'Fresh food is one easy stop away.' : 'Your next grocery stop is easy to plan.',
  }
}

export function useStoreStatus() {
  const [status, setStatus] = useState(() => getStoreStatus())
  useEffect(() => {
    const interval = window.setInterval(() => setStatus(getStoreStatus()), 60_000)
    return () => window.clearInterval(interval)
  }, [])
  return status
}
