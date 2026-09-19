import { DisclosureGroup, Disclosure, Button, DisclosurePanel, Heading } from 'react-aria-components';
import type { ReactNode } from 'react';
import './Accordion.css';
export interface AccordionItem { id: string; title: string; content: ReactNode }
export interface AccordionProps { items: AccordionItem[]; /** Cho mở nhiều mục cùng lúc. */ multiple?: boolean; defaultExpanded?: string[] }
/** Ẩn nội dung phụ để trang ngắn. Không giấu thông tin bắt buộc trong accordion. FAQ, cài đặt nâng cao. */
export function Accordion({ items, multiple, defaultExpanded = [] }: AccordionProps) {
  return (
    <DisclosureGroup className="eb-acc" allowsMultipleExpanded={multiple} defaultExpandedKeys={defaultExpanded}>
      {items.map((it) => (
        <Disclosure key={it.id} id={it.id} className="eb-acc__item">
          <Heading className="eb-acc__heading"><Button slot="trigger" className="eb-acc__trigger"><span>{it.title}</span><svg className="eb-acc__chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg></Button></Heading>
          <DisclosurePanel className="eb-acc__panel"><div className="eb-acc__body">{it.content}</div></DisclosurePanel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  );
}
