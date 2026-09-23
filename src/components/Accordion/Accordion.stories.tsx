import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';
const items = [
  { id: 'a', title: 'Does Ebig CDN charge for bandwidth?', content: 'No. The first 100 GB each month is free, after that you pay for storage, not egress.' },
  { id: 'b', title: 'Can I use my own domain?', content: 'Yes. Point a CNAME at cdn.ebig.co and the TLS certificate issues itself within minutes.' },
  { id: 'c', title: 'How long does a cache purge take?', content: 'Under 50 ms worldwide, triggered from the API or the dashboard.' },
];
const meta: Meta<typeof Accordion> = { title: 'Components/Accordion', component: Accordion, tags: ['autodocs'], args: { items, defaultExpanded: ['a'] }, argTypes: { items: { control: false } }, decorators: [(S) => <div style={{ width: 520 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Accordion>;
export const Single: Story = {};
export const Multiple: Story = { args: { multiple: true, defaultExpanded: ['a', 'c'] } };
