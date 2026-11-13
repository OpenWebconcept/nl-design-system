import type { Meta, StoryObj } from '@storybook/react-vite';
import { CaseCard } from '@gemeente-denhaag/card';
import '@gemeente-denhaag/card/index.css';
import { expect, userEvent, within } from 'storybook/test';

const meta = {
  args: {
    context: '3 maart 2026',
    href: 'https://example.com/mijn-zaken/zaak-2026-0001234',
    title: 'Aanvraag omgevingsvergunning',
  },
  component: CaseCard,
  parameters: {
    docs: {
      description: {
        component:
          'A case card links to the details of a case. The link has the title as its accessible name. The `appearance` can be `default`, `archived` or `list`.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/CaseCard',
} satisfies Meta<typeof CaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSubtitle: Story = {
  args: {
    subTitle: 'Dakkapel Dorpsstraat 12',
  },
};

export const Archived: Story = {
  args: {
    appearance: 'archived',
    context: '12 januari 2026',
    title: 'Aanvraag paspoort',
  },
};

export const List: Story = {
  args: {
    appearance: 'list',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Aanvraag omgevingsvergunning voor het plaatsen van een dakkapel aan de achterzijde van de woning',
  },
};

export const KeyboardFocus: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.tab();
    await expect(canvas.getByRole('link', { name: 'Aanvraag omgevingsvergunning' })).toHaveFocus();
  },
};
