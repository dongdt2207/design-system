import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
const meta: Meta<typeof Modal> = { title: 'Components/Modal', component: Modal, tags: ['autodocs'], argTypes: { size: { control: 'radio', options: ['sm', 'md', 'lg'] }, open: { control: false }, onOpenChange: { control: false }, footer: { control: false } } };
export default meta;
type Story = StoryObj<typeof Modal>;
function Demo({ trigger, ...args }: Partial<ModalProps> & { trigger?: 'danger' }) {
  const [open, setOpen] = useState(false);
  return <><Button variant={trigger === 'danger' ? 'danger' : 'primary'} onClick={() => setOpen(true)}>{trigger === 'danger' ? 'Delete project' : 'Open dialog'}</Button><Modal open={open} onOpenChange={setOpen} title="Title" {...args} /></>;
}
export const Confirm: Story = { name: 'Confirmation (sm)', render: () => <Demo trigger="danger" size="sm" title="Delete project Alpha?" description="Every document inside is lost and cannot be restored." footer={<><Button variant="secondary">Cancel</Button><Button variant="danger">Delete project</Button></>} /> };
export const Form: Story = { name: 'Short form (md)', render: () => <Demo size="md" title="Invite a member" description="They receive an email within a few minutes." preventOutsideClose footer={<><Button variant="secondary">Cancel</Button><Button>Invite</Button></>}><div style={{ display: 'grid', gap: 16 }}><Input label="Email" placeholder="name@ebig.co" /><Input label="Note (optional)" placeholder="A message to send with the invitation" /></div></Demo> };
export const Large: Story = { name: 'Long content (lg)', render: () => <Demo size="lg" title="Terms of use" footer={<Button>Got it</Button>}>{Array.from({ length: 12 }).map((_, i) => <p key={i} style={{ margin: '0 0 12px' }}>Paragraph {i + 1}. Long content to test scrolling inside the modal body. The header and footer stay put.</p>)}</Demo> };
