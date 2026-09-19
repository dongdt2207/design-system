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
