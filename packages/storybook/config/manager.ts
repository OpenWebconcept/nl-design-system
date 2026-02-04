import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    brandTitle: 'Open Webconcept',
    colorPrimary: '#2FB298'
  }),
});
