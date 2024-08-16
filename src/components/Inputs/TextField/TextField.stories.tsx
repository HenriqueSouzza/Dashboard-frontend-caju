import type { Meta, StoryObj } from '@storybook/react';

import { TextField, TextFieldProps } from './TextField';
import { Mask } from '~/utils';

interface TextFieldStoryBookProps extends TextFieldProps { }

const meta: Meta<TextFieldStoryBookProps> = {
  component: TextField,
};

export default meta;

interface Story extends StoryObj<TextFieldStoryBookProps> { }

const Template: Story = {
  render: ({ ...args }) => <TextField {...args} />
};

export const Default: Story = {
  ...Template,
  args: {
    label: 'Nome Completo',
  },
};

export const InputMask: Story = {
  ...Template,
  argTypes: {
    error: {
      control: 'object',
      description: '{message: "coloque aqui a mensagem"}'
    }
  },
  args: {
    label: 'CPF',
    maxLength: 14,
    onMask: (value: string) => Mask.cpfMask(value)
  },
};

export const Error: Story = {
  ...Template,
  args: {
    label: 'Nome Completo',
    error: {
      message: "error"
    }
  },
};
