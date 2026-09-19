import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Switch } from '../Switch/Switch';
const meta: Meta<typeof Drawer> = { title: 'Components/Drawer', component: Drawer, tags: ['autodocs'], argTypes: { trigger: { control: false }, children: { control: false }, footer: { control: false }, side: { control: 'radio', options: ['right', 'bottom'] }, size: { control: 'radio', options: ['sm', 'md', 'lg'] } } };
export default meta;
type Story = StoryObj<typeof Drawer>;
export const EditMember: Story = {
  args: { title: 'Chỉnh sửa thành viên', description: 'Trần Thu Hà · ha@ebig.co', side: 'right', size: 'md' },
  render: (a) => (
    <Drawer {...a} trigger={<Button variant="secondary">Mở drawer</Button>} footer={(close) => <><Button variant="secondary" onClick={close}>Huỷ</Button><Button onClick={close}>Lưu thay đổi</Button></>}>
      <div style={{ display: 'grid', gap: 16 }}><Input label="Tên hiển thị" defaultValue="Trần Thu Hà" /><Select label="Vai trò" defaultValue="editor" options={[{ value: 'admin', label: 'Quản trị viên' }, { value: 'editor', label: 'Biên tập' }, { value: 'viewer', label: 'Chỉ xem' }]} /><Switch label="Nhận thông báo email" defaultSelected /></div>
    </Drawer>
  ),
};
export const Bottom: Story = { args: { title: 'Bộ lọc', side: 'bottom' }, render: (a) => <Drawer {...a} trigger={<Button variant="secondary">Mở từ dưới</Button>}>Nội dung bộ lọc trên mobile.</Drawer> };
