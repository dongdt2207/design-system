import { useState } from 'react';
import './Avatar.css';
export interface AvatarProps {
  /** Full name — used for the initials and the alt text. */
  name: string; src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Online status dot. */
  status?: 'online' | 'offline' | 'busy';
}
const initials = (n: string) => n.trim().split(/\s+/).slice(-2).map((w) => w[0]).join('').toUpperCase();
/** A profile image; without one, initials on an ink background. Never use it as a button. */
export function Avatar({ name, src, size = 'md', status }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={`eb-avatar eb-avatar--${size}`} title={name}>
      {src && !failed ? <img src={src} alt={name} onError={() => setFailed(true)} /> : <span className="eb-avatar__initials" aria-label={name}>{initials(name)}</span>}
      {status && <span className={`eb-avatar__status eb-avatar__status--${status}`} aria-label={status} />}
    </span>
  );
}
export interface AvatarGroupProps { people: { name: string; src?: string }[]; max?: number; size?: AvatarProps['size'] }
export function AvatarGroup({ people, max = 4, size = 'sm' }: AvatarGroupProps) {
  const shown = people.slice(0, max); const rest = people.length - shown.length;
  return <span className="eb-avatar-group">{shown.map((p) => <Avatar key={p.name} {...p} size={size} />)}{rest > 0 && <span className={`eb-avatar eb-avatar--${size} eb-avatar--rest`}><span className="eb-avatar__initials">+{rest}</span></span>}</span>;
}
