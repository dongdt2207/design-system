import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toaster, toast } from './Toast';
import { Button } from '../Button/Button';
const meta: Meta = { title: 'Components/Toast', tags: ['autodocs'], parameters: { layout: 'fullscreen' }, decorators: [(S) => <div style={{ padding: 32, minHeight: 240 }}><S /><Toaster /></div>] };
export default meta;
/** Confirmation after an action completes. Skip it when the result is already visible (the new item appears in the list). */
export const Demo: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="secondary" onClick={() => toast('Changes saved')}>Neutral</Button>
      <Button variant="secondary" onClick={() => toast.success('Invitations sent to 3 people')}>Success</Button>
      <Button variant="secondary" onClick={() => toast.error('Couldn\u2019t load the list. Try again, or check your connection.')}>Error</Button>
      <Button variant="secondary" onClick={() => toast('Project Alpha archived', { action: { label: 'Undo', onClick: () => toast('Project restored') } })}>With undo</Button>
    </div>
  ),
};
