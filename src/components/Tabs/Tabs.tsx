import { Tabs as ATabs, TabList, Tab, TabPanel, type Key } from 'react-aria-components';
import type { ReactNode } from 'react';
import './Tabs.css';

export interface TabItem { id: string; label: string; content: ReactNode; disabled?: boolean }
export interface TabsProps {
  items: TabItem[];
  defaultSelected?: string; selected?: string; onChange?: (id: string) => void;
  /** line = gạch dưới (mặc định). pill = viên trong khay, cho toolbar. */
  variant?: 'line' | 'pill';
}
/** Chuyển giữa các view cùng cấp, tối đa 6 tab. Không dùng để điều hướng giữa trang. */
export function Tabs({ items, defaultSelected, selected, onChange, variant = 'line' }: TabsProps) {
  return (
    <ATabs className={`eb-tabs eb-tabs--${variant}`} defaultSelectedKey={defaultSelected} selectedKey={selected} onSelectionChange={(k: Key) => onChange?.(String(k))}>
      <TabList className="eb-tabs__list" aria-label="Tabs">
        {items.map((t) => <Tab key={t.id} id={t.id} className="eb-tabs__tab" isDisabled={t.disabled}>{t.label}</Tab>)}
      </TabList>
      {items.map((t) => <TabPanel key={t.id} id={t.id} className="eb-tabs__panel">{t.content}</TabPanel>)}
    </ATabs>
  );
}
