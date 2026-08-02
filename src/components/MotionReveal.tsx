import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function MotionReveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={reduced ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .55, ease: 'easeOut' }}>{children}</motion.div>
}
