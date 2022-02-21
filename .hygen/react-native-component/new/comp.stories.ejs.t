---
to: "<%= feature ? `src/features/${h.changeCase.pascal(feature)}/${h.changeCase.pascal(name)}/${h.changeCase.pascal(name)}.stories.js` : shared ? `src/shared/components/${shared}/${h.changeCase.pascal(name)}/${h.changeCase.pascal(name)}.stories.js` : `src/shared/components/${h.changeCase.pascal(name)}/${h.changeCase.pascal(name)}.stories.js`  %>"
---
<% const comp = h.changeCase.pascal(name) -%>
// Dependencies
import React from 'react';

// Storybook functions and decorators
import { storiesOf } from '@storybook/react-native';

// Application container
import App from '../../../App';

// Local components
// -- Story component
import <%= comp %> from './<%= comp %>';

// -- Other components

storiesOf('<%= comp %>', module).add('default', () => (
  <App rootTarget="storybook">
    <<%= comp %> />
  </App>
));

