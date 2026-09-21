import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
/** Khối nội dung liên quan. Card không lồng trong card. */
const meta: Meta<typeof Card> = {
  title: 'Components/Card', component: Card, tags: ['autodocs'],
  args: { title: 'Cuộc họp tuần', description: 'Thứ Hai, 9:00 — Phòng họp lớn', children: 'Rà soát tiến độ các dự án đang chạy và phân công việc cho tuần mới.', elevation: 'flat' },
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
  name: 'Có ảnh dẫn đầu',
  args: {
    media: { src: '/img/phong-khach.jpg', alt: 'Phòng khách với sofa dài và kệ âm tường', ratio: '16/9' },
    title: 'Căn hộ Harbour Row',
    description: 'Hai phòng ngủ, bàn giao tháng 9.',
  },
  render: (args) => <div style={{ maxWidth: 320 }}><Card {...args} /></div>,
};

export const Ngang: Story = {
  name: 'Ngang — dùng trong danh sách',
  args: {
    orientation: 'horizontal',
    media: { src: '/img/bep.jpg', alt: 'Khu bếp liền bàn ăn' },
    title: 'Bếp mở Linden Park',
    description: 'Cải tạo trong 6 tuần, gia chủ ở lại suốt thời gian thi công.',
  },
  render: (args) => <div style={{ maxWidth: 560 }}><Card {...args} /></div>,
};

export const LuoiAnh: Story = {
  name: 'Lưới card có ảnh',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
      {[
        { src: '/img/phong-khach.jpg', alt: 'Phòng khách', title: 'Harbour Row', desc: '2 phòng ngủ · 11 tuần' },
        { src: '/img/bep.jpg', alt: 'Khu bếp', title: 'Linden Park', desc: 'Cải tạo · 6 tuần' },
        { src: '/img/phong-ngu.jpg', alt: 'Phòng ngủ', title: 'Ashfield', desc: 'Nhà phố · 14 tuần' },
      ].map((c) => (
        <Card key={c.title} media={{ src: c.src, alt: c.alt, ratio: '4/3' }} title={c.title} description={c.desc} />
      ))}
    </div>
  ),
};

