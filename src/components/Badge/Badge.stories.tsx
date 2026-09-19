import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
/** Nhãn trạng thái ngắn. Không dùng làm nút. Tối đa 2 badge trên một đối tượng. */
const meta: Meta<typeof Badge> = { title: 'Components/Badge', component: Badge, tags: ['autodocs'], args: { children: 'Đang hoạt động', tone: 'success' }, argTypes: { tone: { control: 'radio', options: ['neutral', 'brand', 'success', 'warning', 'danger'] } } };
export default meta;
type Story = StoryObj<typeof Badge>;
export const Default: Story = {};
export const WithDot: Story = { args: { dot: true } };
export const AllTones: Story = { render: () => <div style={{ display: 'flex', gap: 8 }}><Badge tone="neutral">Nháp</Badge><Badge tone="brand">Mới</Badge><Badge tone="success" dot>Đang hoạt động</Badge><Badge tone="warning" dot>Chờ duyệt</Badge><Badge tone="danger" dot>Bị khoá</Badge></div>, parameters: { controls: { disable: true } } };
