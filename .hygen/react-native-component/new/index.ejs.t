---
to: "<%= feature ? `src/features/${h.changeCase.pascal(feature)}/${h.changeCase.pascal(name)}/index.js` : shared ? `src/shared/components/${shared}/${h.changeCase.pascal(name)}/index.js` : `src/shared/components/${h.changeCase.pascal(name)}/index.js`  %>"
---
<% const comp = h.changeCase.pascal(name) -%>
export default from './<%= comp %>';
