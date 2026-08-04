export function SectionHeading({ eyebrow, title, body, centered = false, titleId }: { eyebrow: string; title: string; body?: string; centered?: boolean; titleId?: string }) {
  return <div className={centered ? 'section-heading text-center mx-auto' : 'section-heading'}>
    <p className="eyebrow">{eyebrow}</p><h2 id={titleId}>{title}</h2>{body && <p className="section-copy">{body}</p>}
  </div>
}
