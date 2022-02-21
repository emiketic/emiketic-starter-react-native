---
to: "<%= feature ? `src/features/${h.changeCase.pascal(feature)}/${h.changeCase.pascal(name)}/__tests__/${h.changeCase.pascal(name)}.test.js` : shared ? `src/shared/components/${shared}/${h.changeCase.pascal(name)}/__tests__/${h.changeCase.pascal(name)}.test.js` : `src/shared/components/__tests__/${h.changeCase.pascal(name)}/${h.changeCase.pascal(name)}.test.js`  %>"
---
<% const comp = h.changeCase.pascal(name) -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages and scopes
import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

/* -------------------------------------------------------------------------- */
/*                                 Test groups                                */
/* -------------------------------------------------------------------------- */

// Test components
import <%= comp %> from '../<%= comp %>';
import App from '../../../../App';

describe('<%= comp %>', () => {
  it('renders correctly', () => {
    renderer.create(
      <App rootTarget="mainApp">
        <<%= comp %> />
      </App>,
    );
  });
});
