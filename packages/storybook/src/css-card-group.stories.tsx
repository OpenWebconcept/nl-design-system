import type { Meta, StoryObj } from '@storybook/react-vite';
import { CaseCard } from '@gemeente-denhaag/card';
import '@gemeente-denhaag/card/index.css';
import '@gemeente-denhaag/card-group/index.css';

interface CardGroupProps {
  cards: { context: string; href: string; title: string }[];
  distanced?: boolean;
  responsive?: boolean;
}

const CardGroup = ({ cards, distanced, responsive }: CardGroupProps) => {
  const classNames = [
    'denhaag-card-group',
    distanced ? 'denhaag-card-group--distanced' : '',
    responsive ? 'denhaag-card-group--responsive' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {cards.map((card) => (
        <CaseCard key={card.href} {...card} />
      ))}
    </div>
  );
};

const cases = [
  { context: '3 maart 2026', href: 'https://example.com/mijn-zaken/1', title: 'Aanvraag omgevingsvergunning' },
  { context: '18 februari 2026', href: 'https://example.com/mijn-zaken/2', title: 'Melding openbare ruimte' },
  {
    context: '2 februari 2026',
    href: 'https://example.com/mijn-zaken/3',
    title: 'Aanvraag parkeervergunning bewoners',
  },
  { context: '12 januari 2026', href: 'https://example.com/mijn-zaken/4', title: 'Aanvraag paspoort' },
  { context: '8 januari 2026', href: 'https://example.com/mijn-zaken/5', title: 'Verhuizing doorgeven' },
];

const meta = {
  args: {
    cards: cases.slice(0, 3),
  },
  component: CardGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A card group places cards in a grid: one column, two from a viewport width of 768px and three from 1024px. It is CSS only, so the stories render the markup with case cards inside.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/CardGroup',
} satisfies Meta<typeof CardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleCard: Story = {
  args: {
    cards: cases.slice(0, 1),
  },
};

export const ManyCards: Story = {
  args: {
    cards: cases,
  },
};

export const Distanced: Story = {
  args: {
    distanced: true,
  },
};

export const Responsive: Story = {
  args: {
    cards: cases,
    responsive: true,
  },
};

export const Mobile: Story = {
  globals: {
    viewport: { isRotated: false, value: 'mobile1' },
  },
};

export const Tablet: Story = {
  args: {
    cards: cases,
  },
  globals: {
    viewport: { isRotated: false, value: 'tablet' },
  },
};
