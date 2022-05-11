import { s as serverRenderer } from './index.mjs';
import 'file:///Users/craig/Code/directus-nuxt/client/node_modules/unenv/runtime/mock/proxy.mjs';
import 'stream';

const renderToString = (...args) => {
  return serverRenderer.exports.renderToString(...args).then((result) => `<div id="__nuxt">${result}</div>`);
};

export { renderToString };
//# sourceMappingURL=vue3.mjs.map
