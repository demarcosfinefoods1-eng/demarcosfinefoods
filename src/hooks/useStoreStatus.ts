import { useMemo } from 'react'

export function useStoreStatus() {
  return useMemo(() => {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date())
    const day = parts.find((part) => part.type === 'weekday')?.value
    const hour = Number(parts.find((part) => part.type === 'hour')?.value)
    const sunday = day === 'Sun'
    const open = sunday ? hour >= 11 && hour < 16 : day !== 'Sun' && hour >= 10 && hour < 20
    return { open, label: open ? 'Open now — stop in today' : sunday ? 'Opens Sunday at 11 AM' : 'Opens today at 10 AM' }
  }, [])
}
