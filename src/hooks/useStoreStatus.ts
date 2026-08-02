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
    const nextOpening = day === 'Sat' ? 'Sunday at 11 AM' : 'tomorrow at 10 AM'
    const label = open
      ? `Open now · closes at ${sunday ? '4 PM' : '8 PM'}`
      : hour < opensAt
        ? `Opens today at ${sunday ? '11 AM' : '10 AM'}`
        : `Closed now · opens ${nextOpening}`
    return { open, label, closesAt: sunday ? '4 PM' : '8 PM' }
  }, [])
}
