import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '@gemeente-denhaag/tab';
import '@gemeente-denhaag/tab/index.css';
import { expect, userEvent, within } from 'storybook/test';

const currentCases = (
  <ul>
    <li>Aanvraag omgevingsvergunning - Dakkapel Dorpsstraat 12</li>
    <li>Melding openbare ruimte - Losliggende stoeptegel</li>
    <li>Aanvraag parkeervergunning bewoners</li>
  </ul>
);

const completedCases = (
  <ul>
    <li>Aanvraag paspoort</li>
    <li>Verhuizing doorgeven</li>
  </ul>
);

const meta = {
  args: {
    tabData: [
      { label: 'Lopende zaken', panelContent: currentCases },
      { label: 'Afgeronde zaken', panelContent: completedCases },
    ],
  },
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Tabs switch between related views on the same page, such as current and completed cases. Use the arrow keys to move between tabs and Enter to select one. The package has no disabled state.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/Tabs',
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondTabSelected: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const secondTab = canvas.getByRole('tab', { name: 'Afgeronde zaken' });

    await userEvent.click(secondTab);
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
  },
};

export const WithIndicator: Story = {
  args: {
    tabData: [
      { indicator: 3, label: 'Lopende zaken', panelContent: currentCases },
      { indicator: 2, label: 'Afgeronde zaken', panelContent: completedCases },
    ],
  },
};

export const Empty: Story = {
  args: {
    tabData: [
      { label: 'Lopende zaken', panelContent: <p>U heeft op dit moment geen lopende zaken.</p> },
      { label: 'Afgeronde zaken', panelContent: <p>U heeft nog geen afgeronde zaken.</p> },
    ],
  },
};

export const KeyboardFocus: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    await expect(canvas.getByRole('tab', { name: 'Afgeronde zaken' })).toHaveFocus();
  },
};

export const ManyTabs: Story = {
  args: {
    tabData: [
      { label: 'Lopende zaken', panelContent: currentCases },
      { label: 'Afgeronde zaken', panelContent: completedCases },
      { label: 'Documenten', panelContent: <p>Er zijn geen documenten.</p> },
      { label: 'Berichten', panelContent: <p>Er zijn geen berichten.</p> },
      { label: 'Betalingen', panelContent: <p>Er zijn geen betalingen.</p> },
    ],
  },
  globals: {
    viewport: { isRotated: false, value: 'mobile1' },
  },
};
