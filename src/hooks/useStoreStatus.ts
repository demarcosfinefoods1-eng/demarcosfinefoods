import { useMemo } from 'react'

export function useStoreStatus() {
  return useMemo(() => {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date())
    const day = parts.find((part) => part.type === 'weekday')?.value
    const hour = Number(parts.find((part) => part.type === 'hour')?.value)
    const sunday = day === 'Sun'
    const opensAt = sunday ? 11 : 10
    const closesAt = sunday ? 16 : 20
    const open = hour >= opensAt && hour < closesAt
    const opensLaterToday = hour < opensAt
    const nextOpening = day === 'Sat' ? 'Sunday at 11 AM' : 'tomorrow at 10 AM'
    const label = open
      ? `Open now · closes at ${sunday ? '4 PM' : '8 PM'}`
      : opensLaterToday
        ? `Opens today at ${sunday ? '11 AM' : '10 AM'}`
        : `Closed now · opens ${nextOpening}`
    const acceptingVisitsToday = open || opensLaterToday
    return {
      open,
      label,
      heroKicker: acceptingVisitsToday ? "Your quick Windsor stop for today's dinner" : 'Plan your next quick Windsor grocery stop',
      directionsLabel: acceptingVisitsToday ? 'Get Directions — Visit Today' : 'Get Directions — Plan Your Visit',
      visitEyebrow: acceptingVisitsToday ? "Make DeMarco's your stop today" : "Plan your next DeMarco's stop",
      visitTitle: acceptingVisitsToday ? "Today's dinner is one easy stop away." : 'Your next grocery stop is easy to plan.',
    }
  }, [])
}
