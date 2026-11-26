/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@nl-design-system-candidate/button-react';
import '@nl-design-system-candidate/button-css/button.css';

const meta = {
  id: 'react-button',
  args: {
    label: 'Opslaan en verder',
  },
  argTypes: {
    purpose: {
      control: { type: 'select' },
      options: [undefined, 'primary', 'secondary', 'subtle'],
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component van het NL Design System (`@nl-design-system-candidate/button-react`).',
      },
    },
  },
  tags: ['autodocs'],
  title: 'React Component/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { purpose: 'primary' },
};

export const Secondary: Story = {
  args: { purpose: 'secondary' },
};

export const Subtle: Story = {
  args: { purpose: 'subtle' },
};

export const Disabled: Story = {
  args: { disabled: true, purpose: 'primary' },
};

export const Busy: Story = {
  args: { busy: true, label: 'Bezig…', purpose: 'primary' },
};
