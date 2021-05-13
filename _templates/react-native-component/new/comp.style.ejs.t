---
to: "<%= feature ? `src/features/${h.changeCase.pascal(feature)}/${h.changeCase.pascal(name)}/styles/index.js` : shared ? `src/shared/components/${shared}/${h.changeCase.pascal(name)}/styles/index.js` : `src/shared/components/styles/${h.changeCase.pascal(name)}/index.js`  %>"
---
<% const comp = h.changeCase.pascal(name) -%>
// Follow guidelines here: https://thoughtbot.com/blog/structure-for-styling-in-react-native#3-styles-are-important-make-them-easy-to-use

// Style libraries
import { StyleSheet } from 'react-native';

// Style topics
import * as Buttons from './buttons';
import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';

// Specific component styles
const <%= h.changeCase.camel(name) %> = {};

const styles = StyleSheet.create({
  <%= h.changeCase.camel(name) %>,
});

export { styles as default, Typography, Spacing, Colors, Buttons };
