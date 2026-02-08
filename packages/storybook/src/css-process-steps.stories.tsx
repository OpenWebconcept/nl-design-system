import type { Meta, StoryObj } from '@storybook/react';
import { Status } from '@gemeente-denhaag/process-steps';
import '@gemeente-denhaag/process-steps/index.css';

const exampleArgs = {
  steps: [
    {
      id: 'aanvraag',
      marker: 1,
      status: 'checked',
      steps: [{ status: 'checked', title: 'Aanvraag ontvangen' }],
      title: 'Aanvraag ingediend',
    },
    {
      id: 'beoordeling',
      marker: 2,
      status: 'current',
      steps: [
        { status: 'checked', title: 'Aanvraag in behandeling genomen' },
        { title: 'Toetsing aan regelgeving' },
        { title: 'Advies ingewonnen' },
      ],
      title: 'Beoordeling aanvraag',
    },
    { id: 'besluit', marker: 3, title: 'Besluit genomen' },
    { id: 'afgerond', marker: 4, title: 'Vergunning verstrekt' },
  ],
};

const meta = {
  args: exampleArgs,
  component: Status,
  parameters: {
    docs: {
      description: {
        component: 'Een component voor het tonen van processtappen met optionele substappen, statussen en metadata.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/ProcessSteps',
} as Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsible: Story = {
  args: { ...Default.args, collapsible: true },
};

export const CollapsibleWithExpandedStep: Story = {
  args: {
    ...Default.args,
    collapsible: true,
    expandedSteps: ['aanvraag'],
    steps: [
      {
        id: 'aanvraag',
        marker: 1,
        status: 'checked',
        steps: [{ id: 'aanvraag-ontvangen', status: 'checked', title: 'Aanvraag ontvangen' }],
        title: 'Aanvraag ingediend',
      },
      {
        id: 'beoordeling',
        marker: 2,
        status: 'current',
        steps: [
          { id: 'beoordeling-behandeling', status: 'checked', title: 'Aanvraag in behandeling genomen' },
          { id: 'beoordeling-toetsing', title: 'Toetsing aan regelgeving' },
          { id: 'beoordeling-advies', title: 'Advies ingewonnen' },
        ],
        title: 'Beoordeling aanvraag',
      },
      { id: 'besluit', marker: 3, title: 'Besluit genomen' },
      { id: 'afgerond', marker: 4, title: 'Vergunning verstrekt' },
    ],
  },
};

export const WithoutSubsteps: Story = {
  args: {
    ...Default.args,
    collapsible: true,
    steps: [
      {
        id: 'reservering',
        marker: 1,
        status: 'checked',
        title: 'Datum en locatie gereserveerd',
      },
      {
        id: 'getuigen',
        marker: 2,
        status: 'current',
        title: 'Getuigen aangemeld',
      },
      { id: 'documenten', marker: 3, title: 'Documenten gecontroleerd' },
      { id: 'ceremonie', marker: 4, title: 'Huwelijksvoltrekking' },
    ],
  },
};

export const WithMetadata: Story = {
  args: {
    ...Default.args,
    collapsible: true,
    steps: [
      {
        id: 'aanvraag',
        date: 'Ontvangen op 12 januari 2026',
        marker: 1,
        meta: (
          <a className="nl-link" href="https://example.com">
            Bekijk uw aanvraag
          </a>
        ),
        status: 'checked',
        title: 'Paspoortaanvraag ingediend',
      },
      {
        id: 'betaling',
        date: 'Binnen 7 dagen betalen',
        marker: 2,
        meta: 'Betaal de leges voor uw paspoort via de link in de bevestigingsmail',
        status: 'current',
        steps: [{ id: 'betaling-bevestigd', status: 'checked', title: 'Betaling ontvangen' }],
        title: 'Betaling leges',
      },
      {
        id: 'afhalen',
        date: 'Vanaf 26 januari 2026',
        marker: 3,
        meta: (
          <p className="nl-paragraph">
            U kunt uw paspoort ophalen bij{' '}
            <a className="nl-link" href="https://example.com">
              Burgerzaken
            </a>
          </p>
        ),
        title: 'Paspoort ophalen',
      },
    ],
  },
};

export const WithExpandedMetadata: Story = {
  args: {
    collapsible: true,
    expandedSteps: ['ontwerp'],
    steps: [
      {
        id: 'voorbereiding',
        date: 'januari - februari 2026',
        marker: 1,
        status: 'checked',
        title: 'Voorbereiding',
      },
      {
        id: 'ontwerp',
        date: 'maart - april 2026',
        marker: 2,
        meta: 'We werken de plannen uit en betrekken omwonenden bij de planvorming. Samen komen we tot een definitief ontwerp.',
        status: 'current',
        steps: [
          { id: 'ontwerp-schets', status: 'checked', title: 'Schetsontwerp gereed' },
          { id: 'ontwerp-inspraak', status: 'checked', title: 'Inspraakronde gehouden' },
          { id: 'ontwerp-verwerking', status: 'current', title: 'Verwerken reacties inwoners' },
          { id: 'ontwerp-definitief', title: 'Definitief ontwerp vaststellen' },
        ],
        title: 'Ontwerp',
      },
      {
        id: 'uitvoering',
        date: 'mei - juli 2026',
        marker: 3,
        title: 'Uitvoering werkzaamheden',
      },
      {
        id: 'oplevering',
        date: 'augustus 2026',
        marker: 4,
        title: 'Oplevering',
      },
    ],
  },
};

export const WithWarning: Story = {
  args: {
    steps: [
      {
        id: 'aanvraag',
        marker: 1,
        status: 'checked',
        steps: [{ id: 'aanvraag-ontvangen', status: 'checked', title: 'Aanvraag ontvangen' }],
        title: 'Aanvraag ingediend',
      },
      {
        id: 'beoordeling',
        marker: 2,
        status: 'warning',
        steps: [
          { id: 'beoordeling-behandeling', status: 'warning', title: 'Aanvraag in behandeling' },
          { id: 'beoordeling-documenten', status: 'warning', title: 'Aanvullende documenten benodigd' },
          { id: 'beoordeling-advies', title: 'Advies inwinnen' },
        ],
        title: 'Beoordeling aanvraag',
      },
      { id: 'besluit', marker: 3, title: 'Besluit nemen' },
      { id: 'afgerond', marker: 4, title: 'Vergunning verstrekken' },
    ],
  },
};

export const WithError: Story = {
  args: {
    steps: [
      {
        id: 'aanvraag',
        marker: 1,
        status: 'checked',
        steps: [{ id: 'aanvraag-ontvangen', status: 'checked', title: 'Aanvraag ontvangen' }],
        title: 'Aanvraag ingediend',
      },
      {
        id: 'beoordeling',
        marker: 2,
        meta: 'Uw aanvraag is afgewezen omdat niet aan alle voorwaarden is voldaan. Wilt u bezwaar maken? Neem dan contact op met de gemeente via 14 070.',
        status: 'error',
        steps: [{ id: 'beoordeling-afwijzing', status: 'error', title: 'Aanvraag afgewezen' }],
        title: 'Beoordeling aanvraag',
      },
      { id: 'besluit', marker: 3, title: 'Besluit nemen' },
      { id: 'afgerond', marker: 4, title: 'Vergunning verstrekken' },
    ],
  },
};

export const NonCollapsibleStep: Story = {
  args: {
    collapsible: true,
    expandedSteps: ['beoordeling'],
    steps: [
      {
        id: 'aanvraag',
        marker: 1,
        status: 'checked',
        steps: [{ id: 'aanvraag-ontvangen', status: 'checked', title: 'Aanvraag ontvangen' }],
        title: 'Aanvraag ingediend',
      },
      {
        id: 'beoordeling',
        collapsible: false,
        marker: 2,
        meta: 'Uw aanvraag is afgewezen omdat niet aan alle voorwaarden is voldaan. Wilt u bezwaar maken? Neem dan contact op met de gemeente via 14 070.',
        status: 'error',
        steps: [{ id: 'beoordeling-afwijzing', status: 'error', title: 'Aanvraag afgewezen' }],
        title: 'Beoordeling aanvraag',
      },
      { id: 'besluit', marker: 3, title: 'Besluit nemen' },
      { id: 'afgerond', marker: 4, title: 'Vergunning verstrekken' },
    ],
  },
};
