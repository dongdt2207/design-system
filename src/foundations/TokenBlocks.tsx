/* Các khối hiển thị token cho trang Foundations. Đọc giá trị thật từ CSS variables đang chạy. */
import { useEffect, useState, type CSSProperties } from 'react';

function useCssVar(name: string) {
  const [v, setV] = useState('');
  useEffect(() => {
    const read = () => setV(getComputedStyle(document.documentElement).getPropertyValue(name).trim());
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, [name]);
  return v;
}

const cell: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-secondary)' };

export function ColorScale({ prefix, steps }: { prefix: string; steps: (string | number)[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: 4, marginBottom: 24 }}>
      {steps.map((s) => (
        <Swatch key={s} name={`--${prefix}-${s}`} label={String(s)} />
      ))}
    </div>
  );
}

function Swatch({ name, label }: { name: string; label: string }) {
  const v = useCssVar(name);
  return (
    <div>
      <div style={{ height: 48, borderRadius: 6, background: `var(${name})`, border: '1px solid var(--color-border-default)' }} />
      <div style={{ ...cell, marginTop: 4 }}>{label}</div>
      <div style={{ ...cell, color: 'var(--color-text-muted)' }}>{v}</div>
    </div>
  );
}

export function SemanticColors({ names }: { names: string[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 24 }}>
      {names.map((n) => (
        <SemanticRow key={n} name={n} />
      ))}
    </div>
  );
}
function SemanticRow({ name }: { name: string }) {
  const v = useCssVar(name);
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{ width: 36, height: 36, borderRadius: 6, background: `var(${name})`, border: '1px solid var(--color-border-default)', flexShrink: 0 }} />
      <div>
        <div style={{ ...cell, color: 'var(--color-text-primary)' }}>{name}</div>
        <div style={{ ...cell, color: 'var(--color-text-muted)' }}>{v}</div>
      </div>
    </div>
  );
}

export function TypeScale({ sizes }: { sizes: string[] }) {
  return (
    <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
      {sizes.map((s) => (
        <TypeRow key={s} name={`--text-${s}`} />
      ))}
    </div>
  );
}
function TypeRow({ name }: { name: string }) {
  const v = useCssVar(name);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'baseline', gap: 16 }}>
      <div style={cell}>{name} · {v}</div>
      <div style={{ fontSize: `var(${name})`, lineHeight: 1.2 }}>Họp tuần lúc 9:00 sáng thứ Hai</div>
    </div>
  );
}

export function SpaceScale({ steps }: { steps: number[] }) {
  return (
    <div style={{ display: 'grid', gap: 8, marginBottom: 24 }}>
      {steps.map((s) => (
        <SpaceRow key={s} name={`--space-${s}`} />
      ))}
    </div>
  );
}
function SpaceRow({ name }: { name: string }) {
  const v = useCssVar(name);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: 16 }}>
      <div style={cell}>{name} · {v}</div>
      <div style={{ height: 16, width: `var(${name})`, background: 'var(--color-bg-brand)', borderRadius: 2 }} />
    </div>
  );
}

export function RadiusScale({ steps }: { steps: string[] }) {
  return (
    <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
      {steps.map((s) => (
        <Box key={s} name={`--radius-${s}`} style={{ borderRadius: `var(--radius-${s})`, border: '2px solid var(--color-border-brand)' }} />
      ))}
    </div>
  );
}
export function ShadowScale({ steps }: { steps: string[] }) {
  return (
    <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap', padding: 8 }}>
      {steps.map((s) => (
        <Box key={s} name={`--shadow-${s}`} style={{ boxShadow: `var(--shadow-${s})`, borderRadius: 8, background: 'var(--color-bg-surface)' }} />
      ))}
    </div>
  );
}
function Box({ name, style }: { name: string; style: CSSProperties }) {
  const v = useCssVar(name);
  return (
    <div>
      <div style={{ width: 96, height: 72, ...style }} />
      <div style={{ ...cell, marginTop: 6 }}>{name}</div>
      <div style={{ ...cell, color: 'var(--color-text-muted)', maxWidth: 96, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</div>
    </div>
  );
}
