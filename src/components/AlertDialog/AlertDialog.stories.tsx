import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDialog } from './AlertDialog';
import { Button } from '../Button/Button';
const meta: Meta<typeof AlertDialog> = { title: 'Components/AlertDialog', component: AlertDialog, tags: ['autodocs'], args: { title: 'Delete project Alpha?', description: 'Every document inside is lost and cannot be restored.', confirmLabel: 'Delete project', tone: 'danger' }, argTypes: { trigger: { control: false }, tone: { control: 'radio', options: ['danger', 'primary'] } } };
export default meta;
type Story = StoryObj<typeof AlertDialog>;
export const Delete: Story = { render: (a) => <AlertDialog {...a} trigger={<Button variant="danger">Delete project</Button>} /> };
export const Confirm: Story = { args: { title: 'Send the report to 12 members?', description: 'Each person receives an email with the PDF attached.', confirmLabel: 'Send report', tone: 'primary' }, render: (a) => <AlertDialog {...a} trigger={<Button>Send report</Button>} /> };
