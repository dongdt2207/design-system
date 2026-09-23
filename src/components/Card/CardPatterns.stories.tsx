import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Card } from './Card';
import { SelectableCard } from '../SelectableCard/SelectableCard';
import { ActionCard } from '../ActionCard/ActionCard';
import { StatTile } from '../StatTile/StatTile';
import { ChartFrame } from '../ChartFrame/ChartFrame';
import { BarChart } from '../BarChart/BarChart';
import { EmptyState } from '../EmptyState/EmptyState';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

/** Each entry in the menu: its name, when to use it, and one live example. */
function Entry({ num, name, useWhen, madeOf, children }: { num: number; name: string; useWhen: string; madeOf: string; children: ReactNode }) {
  return (
    <section style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontVariantNumeric: 'tabular-nums' }}>{String(num).padStart(2, '0')}</span>
          <h3 style={{ margin: 0, fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>{name}</h3>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>{madeOf}</span>
        </div>
        <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{useWhen}</p>
      </div>
      <div>{children}</div>
    </section>
  );
}

const meta: Meta = { title: 'Patterns/Card', parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;

export const Menu: StoryObj = {
  name: 'Menu — ten kinds of card',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-10)', maxWidth: 880 }}>
      <Entry num={1} name="Content card" useWhen="Title, description, one secondary action. The default when none of the nine below fit." madeOf="Card">
        <div style={{ maxWidth: 420 }}>
          <Card title="Contract 24-118" description="Signed Sep 12, 2026, running 14 weeks." action={<Badge tone="success">Active</Badge>} footer={<Button variant="ghost" size="sm">View details</Button>}>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Full package, two bedrooms, handover expected Dec 24.</p>
          </Card>
        </div>
      </Entry>

      <Entry num={2} name="Metric card" useWhen="One leading number with its change and trend. Don't draw a chart for a single number." madeOf="StatTile">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
          <StatTile label="September revenue" value="$1.24M" delta={{ value: '12.4%', direction: 'up' }} caption="vs. August" spark={[8, 12, 10, 16, 14, 19, 24]} />
          <StatTile label="Churn rate" value="2.1%" delta={{ value: '0.6 pt', direction: 'down', meaning: 'good' }} caption="vs. August" />
        </div>
      </Entry>

      <Entry num={3} name="Chart card" useWhen="A chart with its title, legend, and four loading states." madeOf="ChartFrame">
        <div style={{ maxWidth: 520 }}>
          <ChartFrame title="Orders by branch" subtitle="September 2026" height={140}>
            <BarChart data={[{ label: 'Portland', values: [1240] }, { label: 'Austin', values: [1890] }, { label: 'Boulder', values: [640] }]} />
          </ChartFrame>
        </div>
      </Entry>

      <Entry num={4} name="Empty card" useWhen="No data yet. Say what is missing and what to do next; never leave a blank frame." madeOf="Card + EmptyState">
        <div style={{ maxWidth: 420 }}>
          <Card><EmptyState size="compact" title="No projects yet" description="Create your first project to start tracking progress." action={<Button variant="secondary" size="sm">Create project</Button>} /></Card>
        </div>
      </Entry>

      <Entry num={5} name="Image card" useWhen="The image is what people recognize first. Keep one aspect ratio across the grid." madeOf="Card media">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
          <Card media={{ src: '/img/phong-khach.jpg', alt: 'Living room with a long sofa', ratio: '4/3' }} title="Harbour Row" description="2 bedrooms · 11 weeks" />
          <Card media={{ src: '/img/bep.jpg', alt: 'Kitchen opening onto the dining table', ratio: '4/3' }} title="Linden Park" description="Renovation · 6 weeks" />
        </div>
      </Entry>

      <Entry num={6} name="Horizontal card" useWhen="Vertical lists: image left, text right. Faster to scan than a grid when there are many items." madeOf="Card horizontal">
        <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 560 }}>
          <Card orientation="horizontal" media={{ src: '/img/phong-ngu.jpg', alt: 'Bedroom' }} title="Ashfield" description="Townhouse, handover in July. Joinery and services guaranteed for 24 months." />
        </div>
      </Entry>

      <Entry num={7} name="Product card" useWhen="Commerce: image, name, price, rating. Composed, not its own component — every catalog differs." madeOf="Card + Badge + Button">
        <div style={{ maxWidth: 240 }}>
          <Card
            media={{ src: '/img/bep.jpg', alt: 'Tủ bếp gỗ sồi', ratio: '1/1' }}
            title="Tủ bếp gỗ sồi"
            action={<Badge tone="brand">Mới</Badge>}
            footer={<Button variant="secondary" size="sm" fullWidth>Add to cart</Button>}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-lg)' }}>18.400.000 ₫</span>
              <s style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>21.000.000 ₫</s>
            </div>
          </Card>
        </div>
      </Entry>

      <Entry num={8} name="Profile card" useWhen="People: photo, name, role, one action. Also composed, not its own component." madeOf="Card + Avatar">
        <div style={{ maxWidth: 320 }}>
          <Card>
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
              <Avatar name="Elin Sandoval" size="lg" status="online" />
              <div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' }}>Elin Sandoval</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Site manager · Harbour Row</div>
              </div>
              <Button variant="ghost" size="sm" style={{ marginLeft: 'auto' }}>Nhắn</Button>
            </div>
          </Card>
        </div>
      </Entry>

      <Entry num={9} name="Action card" useWhen="One card, one job. The description states the outcome, not the feature." madeOf="ActionCard">
        <div style={{ maxWidth: 480 }}>
          <ActionCard title="Book a site visit" description="One session at your place to measure up and hear how you live, before anything gets drawn." action={<Button variant="primary">Book a visit</Button>} note="Free, no deposit" />
        </div>
      </Entry>

      <Entry num={10} name="Selectable card" useWhen="Choosing one of several options with the whole card as the hit area. Underneath is a real input, not a div with onClick." madeOf="SelectableCard">
        <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
          <SelectableCard name="menu-package" value="design" title="Design only" description="You already have a builder." meta="$3,400 per room" defaultChecked />
          <SelectableCard name="menu-package" value="full" title="Full package" description="Design and build under one contract." meta="from $52,000 per home" />
        </div>
      </Entry>
    </div>
  ),
};

export const KhiNaoKhongDungCard: StoryObj = {
  name: 'When not to use a card',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', maxWidth: 720 }}>
      <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
        A card is the safe choice, not the right one. Data that gets scanned by column, compared across rows, or sorted reads far faster in a table. The six cards below are six rows of a table, and as cards the eye has to jump around to compare the same field.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-3)' }}>
        {[['Portland', '1,240', '42'], ['Austin', '1,890', '68'], ['Boulder', '640', '28'], ['Tucson', '310', '16'], ['Reno', '520', '24'], ['Fresno', '280', '12']].map(([name, orders, staff]) => (
          <Card key={name} title={name}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{orders} orders · {staff} staff</div>
          </Card>
        ))}
      </div>
    </div>
  ),
};
