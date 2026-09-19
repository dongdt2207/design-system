import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';
const items = [
  { id: 'a', title: 'Ebig CDN có tính phí băng thông không?', content: 'Không. 100 GB đầu mỗi tháng miễn phí, sau đó tính theo dung lượng lưu trữ, không tính egress.' },
  { id: 'b', title: 'Có dùng được với domain riêng không?', content: 'Có. Trỏ CNAME về cdn.ebig.co, chứng chỉ TLS tự cấp trong vài phút.' },
  { id: 'c', title: 'Purge cache mất bao lâu?', content: 'Dưới 50 ms lan toàn cầu, gọi qua API hoặc dashboard.' },
];
const meta: Meta<typeof Accordion> = { title: 'Components/Accordion', component: Accordion, tags: ['autodocs'], args: { items, defaultExpanded: ['a'] }, argTypes: { items: { control: false } }, decorators: [(S) => <div style={{ width: 520 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Accordion>;
export const Single: Story = {};
export const Multiple: Story = { args: { multiple: true, defaultExpanded: ['a', 'c'] } };
