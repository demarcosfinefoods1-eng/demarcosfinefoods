export function SectionHeading({ eyebrow, title, body, centered = false }: { eyebrow: string; title: string; body?: string; centered?: boolean }) {
  return <div className={centered ? 'section-heading text-center mx-auto' : 'section-heading'}>
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p className="section-copy">{body}</p>}
  </div>
}
