import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
const meta: Meta<typeof Popover> = { title: 'Components/Popover', component: Popover, tags: ['autodocs'], argTypes: { trigger: { control: false }, children: { control: false }, placement: { control: 'radio', options: ['bottom start', 'bottom end', 'bottom', 'top', 'left', 'right'] } } };
export default meta;
type Story = StoryObj<typeof Popover>;
export const Filter: Story = {
  render: (a) => (
    <Popover {...a} title="Lọc theo trạng thái" trigger={<Button variant="secondary">Bộ lọc</Button>}>
      {(close) => (
        <div style={{ display: 'grid', gap: 12 }}>
          <Checkbox label="Đang hoạt động" defaultChecked /><Checkbox label="Chờ duyệt" /><Checkbox label="Bị khoá" />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 4 }}><Button variant="ghost" size="sm" onClick={close}>Huỷ</Button><Button size="sm" onClick={close}>Áp dụng</Button></div>
        </div>
      )}
    </Popover>
  ),
};
