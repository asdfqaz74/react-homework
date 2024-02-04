import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../homework1/**/*.mdx',
  '../homework1/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  '../homework2/**/*.mdx',
  '../homework2/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  '../homework3/**/*.mdx',
  '../homework3/**/*.stories.@(js|jsx|mjs|ts|tsx)',],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
