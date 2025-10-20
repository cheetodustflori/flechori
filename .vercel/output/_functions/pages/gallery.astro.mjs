import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqx8OZ-y.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BckEJULW.mjs';
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Gallery</h1> ` })}`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/pages/gallery.astro", void 0);

const $$file = "/Users/quynhtram/Downloads/cs/flechori/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Gallery,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
