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
  args: { title: 'Edit member', description: 'Priya Raman · priya@ebig.co', side: 'right', size: 'md' },
  render: (a) => (
    <Drawer {...a} trigger={<Button variant="secondary">Open drawer</Button>} footer={(close) => <><Button variant="secondary" onClick={close}>Cancel</Button><Button onClick={close}>Save changes</Button></>}>
      <div style={{ display: 'grid', gap: 16 }}><Input label="Display name" defaultValue="Priya Raman" /><Select label="Role" defaultValue="editor" options={[{ value: 'admin', label: 'Administrator' }, { value: 'editor', label: 'Editor' }, { value: 'viewer', label: 'Viewer' }]} /><Switch label="Email notifications" defaultSelected /></div>
    </Drawer>
  ),
};
export const Bottom: Story = { args: { title: 'Filters', side: 'bottom' }, render: (a) => <Drawer {...a} trigger={<Button variant="secondary">Open from the bottom</Button>}>Filter controls on mobile.</Drawer> };
