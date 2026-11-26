import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '@gemeente-denhaag/alert';
import '@gemeente-denhaag/alert/index.css';
import { fn } from 'storybook/test';

const meta = {
  args: {
    text: 'U ontvangt binnen 8 weken een besluit op uw aanvraag.',
    title: 'Uw aanvraag is in behandeling',
    variant: 'info',
  },
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'An alert shows a short message about the status of a case or page. The title is always rendered as a level 4 heading. The alert has no `role`, so screen readers do not announce it when it appears.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/Alert',
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const Success: Story = {
  args: {
    text: 'U ontvangt een bevestiging per e-mail.',
    title: 'Uw aanvraag is verstuurd',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    text: 'Stuur de ontbrekende documenten voor 1 april 2026, anders kunnen wij uw aanvraag niet verder behandelen.',
    title: 'Er ontbreken documenten',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    text: 'Er is een onbekende fout opgetreden. Probeer het later opnieuw.',
    title: 'Uw zaken kunnen niet worden geladen',
    variant: 'error',
  },
};

export const WithAction: Story = {
  args: {
    action: { buttonText: 'Documenten uploaden', onClick: fn() },
    text: 'Stuur de ontbrekende documenten voor 1 april 2026, anders kunnen wij uw aanvraag niet verder behandelen.',
    title: 'Er ontbreken documenten',
    variant: 'warning',
  },
};

export const Dismissible: Story = {
  args: {
    close: fn(),
  },
};
