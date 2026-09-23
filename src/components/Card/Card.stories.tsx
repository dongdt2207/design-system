import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
/** A block of related content. Cards don't nest inside cards. */
const meta: Meta<typeof Card> = {
  title: 'Components/Card', component: Card, tags: ['autodocs'],
  args: { title: 'Weekly meeting', description: 'Monday, 9:00 AM — Main room', children: 'Review progress on active projects and assign work for the coming week.', elevation: 'flat' },
  argTypes: { elevation: { control: 'radio', options: ['flat', 'raised'] }, action: { control: false }, footer: { control: false } },
  decorators: [(S) => <div style={{ width: 400 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story = {};
export const Raised: Story = { args: { elevation: 'raised' } };
export const WithActionAndFooter: Story = { args: { action: <Badge tone="warning" dot>Chờ duyệt</Badge>, footer: <><Button variant="secondary" size="sm">Từ chối</Button><Button size="sm">Duyệt</Button></> } };
export const BodyOnly: Story = { args: { title: undefined, description: undefined } };

export const CoAnh: Story = {
  name: 'With a leading image',
  args: {
    media: { src: '/img/phong-khach.jpg', alt: 'Living room with a long sofa and built-in shelving', ratio: '16/9' },
    title: 'Harbour Row apartment',
    description: 'Two bedrooms, handover in September.',
  },
  render: (args) => <div style={{ maxWidth: 320 }}><Card {...args} /></div>,
};

export const Ngang: Story = {
  name: 'Horizontal — for lists',
  args: {
    orientation: 'horizontal',
    media: { src: '/img/bep.jpg', alt: 'Kitchen opening onto the dining table' },
    title: 'Linden Park open kitchen',
    description: 'Renovated in 6 weeks, with the owners living there throughout.',
  },
  render: (args) => <div style={{ maxWidth: 560 }}><Card {...args} /></div>,
};

export const LuoiAnh: Story = {
  name: 'Grid of image cards',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
      {[
        { src: '/img/phong-khach.jpg', alt: 'Living room', title: 'Harbour Row', desc: '2 bedrooms · 11 weeks' },
        { src: '/img/bep.jpg', alt: 'Kitchen', title: 'Linden Park', desc: 'Renovation · 6 weeks' },
        { src: '/img/phong-ngu.jpg', alt: 'Bedroom', title: 'Ashfield', desc: 'Townhouse · 14 weeks' },
      ].map((c) => (
        <Card key={c.title} media={{ src: c.src, alt: c.alt, ratio: '4/3' }} title={c.title} description={c.desc} />
      ))}
    </div>
  ),
};

/** Narrow: the horizontal card stacks image over text — following the CARD width, not the window (section 3.5). */
export const Narrow: Story = {
  name: 'Narrow — 390px',
  args: {
    orientation: 'horizontal',
    media: { src: '/img/bep.jpg', alt: 'Kitchen opening onto the dining table' },
    title: 'Linden Park open kitchen',
    description: 'Renovated in 6 weeks, with the owners living there throughout.',
  },
  decorators: [frame(390)],
  render: (args) => <Card {...args} />,
};
