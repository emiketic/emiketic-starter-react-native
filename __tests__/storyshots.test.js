import initStoryshots from '@storybook/addon-storyshots';
import { loadStories } from '../storybook/storyLoader';

initStoryshots({
  framework: 'react-native',
  configPath: './storybook',
  config: ({ configure }) => configure(() => loadStories(), module),
});
