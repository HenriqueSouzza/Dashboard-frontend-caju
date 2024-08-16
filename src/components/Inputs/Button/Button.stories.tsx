import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

interface ButtonStoryBookProps extends ButtonProps {
  label: string
}

const meta: Meta<ButtonStoryBookProps> = {
  component: Button,
};

export default meta;

interface Story extends StoryObj<ButtonStoryBookProps> { }

const Template: Story = {
  render: ({ label, ...args }) => {
    return (
      <Button {...args}>{label}</Button>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    label: 'Button',
  },
};