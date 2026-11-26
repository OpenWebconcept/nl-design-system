import type { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import '@gemeente-denhaag/descriptionlist/index.css';

const meta = {
  args: {
    items: [
      { detail: '3 maart 2026', title: 'Datum aanvraag' },
      { detail: '5 maart 2026', title: 'Startdatum' },
      { detail: '30 april 2026', title: 'Einddatum gepland' },
      { detail: 'ZAAK-2026-0001234', title: 'Zaaknummer' },
    ],
  },
  component: DescriptionList,
  parameters: {
    docs: {
      description: {
        component:
          'A description list shows pairs of titles and details, such as the details of a case. Below a container width of 480px each title is shown above its detail.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/DescriptionList',
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCaption: Story = {
  args: {
    caption: 'Details',
  },
};

export const WithAction: Story = {
  args: {
    items: [
      {
        action: <a href="https://example.com">Wijzig e-mailadres</a>,
        detail: 'j.jansen@example.com',
        title: 'E-mailadres',
      },
      {
        action: <a href="https://example.com">Wijzig telefoonnummer</a>,
        detail: '06 12345678',
        title: 'Telefoonnummer',
      },
    ],
  },
};

export const AllCaseDetails: Story = {
  args: {
    items: [
      { detail: '3 maart 2026', title: 'Datum aanvraag' },
      { detail: '5 maart 2026', title: 'Startdatum' },
      { detail: '6 weken, tot 11 juni 2026', title: 'Verlenging' },
      { detail: 'Wachten op aanvullende gegevens', title: 'Opschorting' },
      { detail: '11 juni 2026', title: 'Einddatum gepland' },
      { detail: 'ZAAK-2026-0001234', title: 'Zaaknummer' },
    ],
  },
};

export const LongDetail: Story = {
  args: {
    items: [
      { detail: '3 maart 2026', title: 'Datum aanvraag' },
      { detail: 'Omgevingsvergunning', title: 'Zaaktype' },
      {
        detail:
          'Ik wil een dakkapel plaatsen aan de achterkant van mijn woning. De dakkapel wordt 3 meter breed en 1,5 meter hoog. De kozijnen worden van hout en krijgen dezelfde kleur als de bestaande kozijnen van de woning.',
        title: 'Aanvraag',
      },
    ],
  },
};

export const Narrow: Story = {
  args: {
    caption: 'Details',
  },
  globals: {
    viewport: { isRotated: false, value: 'mobile1' },
  },
};
