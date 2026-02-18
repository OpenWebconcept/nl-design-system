/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-candidate/button-css/button.css';

interface ButtonProps {
  label: string;
  appearance?: 'primary' | 'secondary' | 'subtle';
  disabled?: boolean;
  busy?: boolean;
}

const Button = ({ label, appearance, disabled, busy }: ButtonProps) => {
  const classNames = [
    'nl-button',
    appearance ? `nl-button--${appearance}` : '',
    disabled ? 'nl-button--disabled' : '',
    busy ? 'nl-button--busy' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} disabled={disabled} type="button">
      <span className="nl-button__label">{label}</span>
    </button>
  );
};

const meta = {
  id: 'css-button',
  args: {
    label: 'Opslaan en verder',
  },
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [undefined, 'primary', 'secondary', 'subtle'],
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component van het NL Design System (`@nl-design-system-candidate/button-css`).',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { appearance: 'primary' },
};

export const Secondary: Story = {
  args: { appearance: 'secondary' },
};

export const Subtle: Story = {
  args: { appearance: 'subtle' },
};

export const Disabled: Story = {
  args: { appearance: 'primary', disabled: true },
};

export const Busy: Story = {
  args: { appearance: 'primary', busy: true, label: 'Bezig…' },
};
