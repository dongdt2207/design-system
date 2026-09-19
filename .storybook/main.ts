import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/foundations/**/*.mdx', '../src/components/**/*.stories.@(ts|tsx)', '../src/sections/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-designs'],
  framework: '@storybook/react-vite',
};
export default config;
