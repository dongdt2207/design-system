import type { Preview } from '@storybook/react-vite';
import '../src/index.css';
const preview: Preview = {
  parameters: {
    layout: 'centered', controls: { matchers: { color: /(background|color)$/i } }, a11y: { test: 'todo' }, backgrounds: { disable: true },
    options: { storySort: { order: ['Foundations', ['Overview', 'Colors', 'Typography', 'Spacing', 'Radius & Shadow'], 'Components', 'Sections'] } },
  },
  globalTypes: { theme: { description: 'Theme', toolbar: { icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true } } },
  initialGlobals: { theme: 'light' },
  decorators: [(Story, ctx) => { document.documentElement.dataset.theme = ctx.globals.theme; return <Story />; }],
};
export default preview;
