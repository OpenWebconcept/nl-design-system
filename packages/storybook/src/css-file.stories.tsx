import type { Meta, StoryObj } from '@storybook/react-vite';
import { File } from '@gemeente-denhaag/file';
import '@gemeente-denhaag/file/index.css';
import { fn } from 'storybook/test';

const meta = {
  args: {
    name: 'Besluit omgevingsvergunning',
    href: '/documenten/besluit-omgevingsvergunning.pdf',
    lastUpdated: '2026-03-12',
    size: '245 kB',
  },
  component: File,
  parameters: {
    docs: {
      description: {
        component:
          'A file shows a document that can be downloaded or removed. The extension is taken from the part of `href` after the last dot, not from `name`. The date in `lastUpdated` is formatted in the locale of the browser.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'CSS Component/File',
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Image: Story = {
  args: {
    name: 'Foto dakkapel',
    href: '/documenten/foto-dakkapel.jpg',
    lastUpdated: '2026-03-03',
    size: '1,8 MB',
  },
};

export const NameOnly: Story = {
  args: {
    name: 'Aanvraagformulier',
    href: '/documenten/aanvraagformulier.pdf',
    lastUpdated: undefined,
    size: undefined,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Removable: Story = {
  args: {
    name: 'Bouwtekening achtergevel',
    href: undefined,
    onClick: fn(),
    removable: true,
  },
};

export const DownloadUrlWithoutExtension: Story = {
  args: {
    name: 'Besluit omgevingsvergunning',
    href: 'https://example.com/mijn-zaken/documenten/download/8f2c1a',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Known issue: when the download URL has no file extension, everything after the last dot in the URL (here the domain and path) is shown as the extension.',
      },
    },
  },
};
