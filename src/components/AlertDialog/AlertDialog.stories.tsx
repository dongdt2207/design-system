import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDialog } from './AlertDialog';
import { Button } from '../Button/Button';
const meta: Meta<typeof AlertDialog> = { title: 'Components/AlertDialog', component: AlertDialog, tags: ['autodocs'], args: { title: 'Xoá dự án Alpha?', description: 'Mọi tài liệu bên trong sẽ mất và không khôi phục được.', confirmLabel: 'Xoá dự án', tone: 'danger' }, argTypes: { trigger: { control: false }, tone: { control: 'radio', options: ['danger', 'primary'] } } };
export default meta;
type Story = StoryObj<typeof AlertDialog>;
export const Delete: Story = { render: (a) => <AlertDialog {...a} trigger={<Button variant="danger">Xoá dự án</Button>} /> };
export const Confirm: Story = { args: { title: 'Gửi báo cáo cho 12 thành viên?', description: 'Mỗi người sẽ nhận một email kèm file PDF.', confirmLabel: 'Gửi báo cáo', tone: 'primary' }, render: (a) => <AlertDialog {...a} trigger={<Button>Gửi báo cáo</Button>} /> };
