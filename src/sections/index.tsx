import './sections.css';

export type VisualSpec =
  | { type: 'terminal'; lines: { text: string; tone?: 'dim' | 'ok' }[]; light?: boolean }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'image'; src: string; alt: string };

export function renderVisual(v: VisualSpec) {
  switch (v.type) {
    case 'terminal': return <Terminal lines={v.lines} light={v.light} />;
    case 'stats': return <Stats items={v.items} />;
    case 'image': return <img src={v.src} alt={v.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />;
  }
}

export interface NavProps { logo: string; links: { label: string; href: string }[]; cta: { label: string; href: string }; /** aria-label của <nav>, đổi theo ngôn ngữ trang */ navLabel?: string }
export function Nav({ logo, links, cta, navLabel = 'Chính' }: NavProps) {
  return (
    <header className="lp-nav"><nav className="lp-grid" aria-label={navLabel}>
      <a className="lp-nav__logo" href="#">{logo}</a>
      <ul className="lp-nav__links">{links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
      <a className="lp-nav__cta" href={cta.href}>{cta.label}</a>
    </nav></header>
  );
}

export interface HeroBlock { value: string; label: string; height?: 'tall' | 'mid' | 'low'; deep?: boolean }
export interface HeroEditorialProps { eyebrow?: string; /** ≤ 4 từ */ title: string; /** 4–6 khối, đúng một deep */ blocks: HeroBlock[] }
export function HeroEditorial({ eyebrow, title, blocks }: HeroEditorialProps) {
  return (
    <section className="lp-section lp-hero"><div className="lp-grid">
      <div className="lp-hero__head">{eyebrow && <p className="lp-eyebrow">{eyebrow}</p>}<h1 className="lp-display lp-display--lg">{title}</h1></div>
      <div className="lp-hero__strip" aria-label="Số liệu chính">
        {blocks.map((b, i) => <div key={i} className={`lp-hero__block lp-hero__block--${b.height ?? 'mid'}${b.deep ? ' lp-hero__block--deep' : ''}`}><div className="lp-hero__value">{b.value}</div><div className="lp-hero__label">{b.label}</div></div>)}
      </div>
    </div></section>
  );
}

export interface ManifestoProps { /** 12–25 từ */ text: string; asideLeft?: string; asideRight?: string }
export function Manifesto({ text, asideLeft, asideRight }: ManifestoProps) {
  return (
    <section className="lp-section"><div className="lp-grid">
      {asideLeft && <span className="lp-manifesto__aside lp-manifesto__aside--l">{asideLeft}</span>}
      <p className="lp-display lp-display--sm lp-manifesto__text">{text}</p>
      {asideRight && <span className="lp-manifesto__aside lp-manifesto__aside--r">{asideRight}</span>}
    </div></section>
  );
}

export interface SplitTextProps { eyebrow: string; /** ≤ 60 từ */ text: string; visual: VisualSpec }
export function SplitText({ eyebrow, text, visual }: SplitTextProps) {
  return (
    <section className="lp-section"><div className="lp-grid">
      <div className="lp-split__text"><p className="lp-eyebrow">{eyebrow}</p><p className="lp-small">{text}</p></div>
      <div className="lp-split__visual">{renderVisual(visual)}</div>
    </div></section>
  );
}

export interface FeatureFullBleedProps { index?: string; title: string; /** ≤ 40 từ */ description: string; visual: VisualSpec; visualSide?: 'right' | 'left' }
export function FeatureFullBleed({ index, title, description, visual, visualSide = 'right' }: FeatureFullBleedProps) {
  return (
    <section className={`lp-feature${visualSide === 'left' ? ' lp-feature--visual-left' : ''}`}><div className="lp-feature__inner"><div className="lp-grid">
      <div className="lp-feature__head">{index && <p className="lp-feature__index">{index}</p>}<h2 className="lp-display lp-display--md">{title}</h2><p className="lp-small lp-feature__desc">{description}</p></div>
      <div className="lp-feature__visual">{renderVisual(visual)}</div>
    </div></div></section>
  );
}

export interface Quote { quote: string; author: string; role: string }
export interface TestimonialProps { variant?: 'single' | 'pair'; quotes: Quote[] }
export function Testimonial({ variant = 'single', quotes }: TestimonialProps) {
  if (variant === 'pair') {
    return (
      <section className="lp-section lp-testimonial--pair"><div className="lp-grid">
        {quotes.slice(0, 2).map((q) => <figure key={q.author} className="lp-testimonial__item" style={{ margin: 0 }}><blockquote>{q.quote}</blockquote><figcaption className="lp-testimonial__attr"><strong>{q.author}</strong> · {q.role}</figcaption></figure>)}
      </div></section>
    );
  }
  const q = quotes[0];
  return (
    <section className="lp-section"><figure className="lp-grid" style={{ margin: '0 auto' }}>
      <div className="lp-testimonial__quote"><blockquote className="lp-display lp-display--sm">{q.quote}</blockquote></div>
      <figcaption className="lp-testimonial__attr"><strong>{q.author}</strong> · {q.role}</figcaption>
    </figure></section>
  );
}

export interface CTAFinalProps { title: string; primary: { label: string; href: string }; secondary?: { label: string; href: string }; note?: string }
export function CTAFinal({ title, primary, secondary, note }: CTAFinalProps) {
  return (
    <section className="lp-section"><div className="lp-grid">
      <h2 className="lp-display lp-display--md lp-cta__head">{title}</h2>
      {note && <p className="lp-small lp-cta__note">{note}</p>}
      <div className="lp-cta__actions"><a className="eb-btn eb-btn--ink eb-btn--lg" href={primary.href}>{primary.label}</a>{secondary && <a className="lp-cta__link lp-muted" href={secondary.href}>{secondary.label}</a>}</div>
    </div></section>
  );
}

export interface FooterProps { brand: string; tagline: string; columns: { title: string; links: { label: string; href: string }[] }[]; meta?: string; /** địa danh ở góc phải dòng meta */ place?: string }
export function Footer({ brand, tagline, columns, meta, place = 'Hà Nội' }: FooterProps) {
  return (
    <footer className="lp-footer"><div className="lp-grid">
      <div className="lp-footer__brand"><strong>{brand}</strong>{tagline}</div>
      {columns.map((c) => <div key={c.title} className="lp-footer__col"><h4>{c.title}</h4><ul>{c.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul></div>)}
      <div className="lp-footer__meta"><span>{meta}</span><span>{place}</span></div>
    </div></footer>
  );
}

export function Terminal({ lines, light = false }: { lines: { text: string; tone?: 'dim' | 'ok' }[]; light?: boolean }) {
  return <div className={`lp-terminal${light ? ' lp-terminal--light' : ''}`} role="img" aria-label="Ví dụ dòng lệnh">{lines.map((l, i) => <div key={i} className={`lp-terminal__line${l.tone ? ` lp-terminal__${l.tone}` : ''}`}>{l.text}</div>)}</div>;
}
export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return <div className="lp-stats">{items.map((s) => <div key={s.label} className="lp-stat"><div className="lp-stat__value">{s.value}</div><div className="lp-stat__label">{s.label}</div></div>)}</div>;
}

/* ---------- Pricing ---------- */
export interface Tier { name: string; description: string; price: string; period?: string; features: string[]; cta: { label: string; href: string }; featured?: boolean }
export interface PricingProps { eyebrow?: string; title: string; tiers: Tier[] }
/** 2–4 tier. Đúng một `featured` — đảo mực, không ribbon màu. Giá là số thật hoặc "[cần số thật]". */
export function Pricing({ eyebrow, title, tiers }: PricingProps) {
  return (
    <section className="lp-section"><div className="lp-grid">
      <div className="lp-pricing__head">{eyebrow && <p className="lp-eyebrow">{eyebrow}</p>}<h2 className="lp-display lp-display--md">{title}</h2></div>
      <div className="lp-pricing__grid">
        {tiers.map((t) => (
          <div key={t.name} className={`lp-tier${t.featured ? ' lp-tier--featured' : ''}`}>
            <div><h3 className="lp-tier__name">{t.name}</h3><p className="lp-tier__desc">{t.description}</p></div>
            <div className="lp-tier__price"><span className="lp-tier__amount">{t.price}</span>{t.period && <span className="lp-tier__period">/ {t.period}</span>}</div>
            <ul className="lp-tier__features">{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <a className={`eb-btn eb-btn--md lp-tier__cta ${t.featured ? 'eb-btn--ink' : 'eb-btn--secondary'}`} href={t.cta.href}>{t.cta.label}</a>
          </div>
        ))}
      </div>
    </div></section>
  );
}

/* ---------- Comparison ---------- */
export interface ComparisonProps { eyebrow?: string; title: string; /** Tên cột: ["Tiêu chí", "Ebig CDN", "CDN truyền thống"] */ columns: [string, string, string]; rows: [string, string, string][] }
/** So sánh trung thực: mỗi hàng là sự thật kiểm chứng được, không dùng ✓/✗. Cột "ta" tô nền brand-subtle rất nhẹ. */
export function Comparison({ eyebrow, title, columns, rows }: ComparisonProps) {
  return (
    <section className="lp-section"><div className="lp-grid">
      <div className="lp-compare__head">{eyebrow && <p className="lp-eyebrow">{eyebrow}</p>}<h2 className="lp-display lp-display--md">{title}</h2></div>
      <div className="lp-compare"><table>
        <thead><tr><th>{columns[0]}</th><th className="lp-compare__us">{columns[1]}</th><th>{columns[2]}</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td className="lp-compare__us">{r[1]}</td><td>{r[2]}</td></tr>)}</tbody>
      </table></div>
    </div></section>
  );
}

/* ---------- Timeline ---------- */
export interface TimelineItem { marker: string; label: string; text: string }
export interface TimelineProps { eyebrow?: string; title: string; /** 3–6 items */ items: TimelineItem[] }
/** Ordered milestones. `marker` is a real point in time (week, month, year), not decoration. */
export function Timeline({ eyebrow, title, items }: TimelineProps) {
  return (
    <section className="lp-section"><div className="lp-grid">
      <div className="lp-timeline__head">{eyebrow && <p className="lp-eyebrow">{eyebrow}</p>}<h2 className="lp-display lp-display--md">{title}</h2></div>
      <ol className="lp-timeline">
        {items.map((it) => (
          <li key={it.marker + it.label} className="lp-timeline__item">
            <span className="lp-timeline__marker">{it.marker}</span>
            <div><h3 className="lp-timeline__label">{it.label}</h3><p className="lp-small lp-timeline__text">{it.text}</p></div>
          </li>
        ))}
      </ol>
    </div></section>
  );
}

/* ---------- Team ---------- */
export interface TeamBlockProps { image: { src: string; alt: string }; title: string; /** ≤ 40 words */ text: string; link?: { label: string; href: string } }
/** Full-width photo of the people doing the work, then one claim you can be held to. */
export function TeamBlock({ image, title, text, link }: TeamBlockProps) {
  return (
    <section className="lp-section lp-team"><div className="lp-grid">
      <div className="lp-team__image"><img src={image.src} alt={image.alt} /></div>
      <h2 className="lp-display lp-display--md lp-team__head">{title}</h2>
      <p className="lp-small lp-team__text">{text}</p>
      {link && <a className="lp-team__link" href={link.href}>{link.label}</a>}
    </div></section>
  );
}
