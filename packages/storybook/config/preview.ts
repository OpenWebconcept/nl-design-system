import '@openwebconcept/theme-barendrecht/dist/index.css';
import '@openwebconcept/theme-de-fryske-marren/dist/index.css';
import '@openwebconcept/theme-gouda/dist/index.css';
import '@openwebconcept/theme-hoeksche-waard/dist/index.css';
import '@openwebconcept/theme-noordwijk/dist/index.css';
import type { Preview } from '@storybook/react';
import { defineCustomElements } from '@openwebconcept/web-components-stencil/loader/index.js';
import { withThemeByClassName } from '@storybook/addon-themes';
import { ParametersArgsDecorator } from './ParametersArgsDecorator';

defineCustomElements();

const preview: Preview = {
  decorators: [
    ParametersArgsDecorator,
    withThemeByClassName({
      defaultTheme: 'barendrecht',
      themes: {
        barendrecht: 'theme-barendrecht',
        'de-fryske-marren': 'theme-de-fryske-marren',
        gouda: 'theme-gouda',
        'hoeksche-waard': 'theme-hoeksche-waard',
        noordwijk: 'theme-noordwijk',
      },
    }),
  ],
  parameters: {
    controls: { expanded: false },
    options: { panelPosition: 'right' },
    status: {
      statuses: {
        ALPHA: {
          background: '#e0bc2e',
          color: '#000000',
          description:
            'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
        },
        BETA: {
          background: '#3065ee',
          color: '#ffffff',
          description:
            'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
        },
        PRODUCTION: {
          background: '#088008',
          color: '#ffffff',
          description:
            'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
        },
        'WORK IN PROGRESS': {
          background: '#cc0000',
          color: '#ffffff',
          description:
            'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
        },
      },
    },
  },
};

export default preview;
