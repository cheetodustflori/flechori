import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C8sZ-URW.mjs';
import { manifest } from './manifest_XgKbfCt8.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/flicks.astro.mjs');
const _page2 = () => import('./pages/gallery.astro.mjs');
const _page3 = () => import('./pages/pages.astro.mjs');
const _page4 = () => import('./pages/works.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/flicks.astro", _page1],
    ["src/pages/gallery.astro", _page2],
    ["src/pages/pages.astro", _page3],
    ["src/pages/works.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d21b67f1-e2cb-4d45-b9b6-70f046e0ca85",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
