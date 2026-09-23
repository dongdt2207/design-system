import { MenuTrigger, Popover, Menu as AMenu, MenuItem, Separator, Section, Header, Pressable, type Key } from 'react-aria-components';
import type { ReactNode } from 'react';
import '../aria.css';

export type MenuEntry =
  | { type?: 'item'; id: string; label: string; shortcut?: string; disabled?: boolean; danger?: boolean }
  | { type: 'separator' }
  | { type: 'section'; title: string; items: { id: string; label: string; shortcut?: string; disabled?: boolean; danger?: boolean }[] };
export interface MenuProps {
  /** The trigger — usually a ghost/secondary Button or a "⋯" icon button. */
  trigger: ReactNode;
  items: MenuEntry[];
  onAction?: (id: string) => void;
  placement?: 'bottom start' | 'bottom end' | 'top start' | 'top end';
}
const Item = (i: { id: string; label: string; shortcut?: string; disabled?: boolean; danger?: boolean }) => (
  <MenuItem id={i.id} isDisabled={i.disabled} className={`eb-list__item${i.danger ? ' eb-list__item--danger' : ''}`}>
    <span>{i.label}</span>{i.shortcut && <kbd className="eb-menu__kbd">{i.shortcut}</kbd>}
  </MenuItem>
);
/** A list of actions on one object. Keep one kind of wording per menu (verbs or nouns), put delete last, separated by a divider. */
export function Menu({ trigger, items, onAction, placement = 'bottom start' }: MenuProps) {
  return (
    <MenuTrigger>
      <Pressable><span style={{ display: 'inline-flex' }}>{trigger}</span></Pressable>
      <Popover className="eb-popover" placement={placement} offset={4}>
        <AMenu className="eb-list" style={{ minWidth: 200 }} onAction={(k: Key) => onAction?.(String(k))}>
          {items.map((e, idx) => {
            if (e.type === 'separator') return <Separator key={idx} className="eb-list__sep" />;
            if (e.type === 'section') return <Section key={idx}><Header className="eb-list__section">{e.title}</Header>{e.items.map((i) => <Item key={i.id} {...i} />)}</Section>;
            return <Item key={e.id} {...e} />;
          })}
        </AMenu>
      </Popover>
    </MenuTrigger>
  );
}
