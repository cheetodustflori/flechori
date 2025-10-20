import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Cqx8OZ-y.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BckEJULW.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Apps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="apps" class="grid grid-cols-2 gap-4"> <a href="#" class="transition hover:shadow-lg hover:scale-110 rounded-lg text-center w-fit"><img src="src/assets/app-1.svg" width="100px">works</a> <a href="#" class="transition hover:shadow-lg hover:scale-110 rounded-lg text-center w-fit"><img src="src/assets/app-2.svg" width="100px">lists</a> <a href="#" class="transition hover:shadow-lg hover:scale-110 rounded-lg text-center w-fit"><img src="src/assets/app-3.svg" width="100px">blog</a> <a href="#" class="transition hover:shadow-lg hover:scale-110 rounded-lg text-center w-fit"><img src="src/assets/app-4.svg" width="100px">writing</a> <a href="#" class="transition hover:shadow-lg hover:scale-110 rounded-lg text-center w-fit"><img src="src/assets/app-5.svg" width="100px">art</a> <a href="#" class="transition hover:shadow-lg hover:scale-110 rounded-lg text-center w-fit"><img src="src/assets/app-6.svg" width="100px">youtube</a> </section> `;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/apps.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[300px] h-fit border-1"> <div class="w-[300px] h-[30px] border-1 bg-gray-100 p-[5px]">
projects
</div> <div class="p-[15px]"> <ul> <li><a>+ commuter connect: 🚆</a> | react, firebase,
blah blah. building a network that connects
users with google maps api.
</li> <li><a>+ sparkhacks website: ⌨️</a> |astro, firebase, b.
dashboard with users. 2500+ whatever idk.
</li> <li><a>+ wics website: 🖥️</a> | building this ur whatev
er and this is for the wics organization.
</li> <li><a>+ sweet T</a> | real local business leading team
of young builders and future leaders ha.
</li> <li><a>+ more...</a></li> </ul> </div> </div>`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/projects.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[300px] h-fit border-1"> <div class="w-[300px] h-[30px] border-1 bg-gray-100 p-[5px]">
experience
</div> <div class="p-[15px]"> <ul> <li><a>+ commuter connect: 🚆</a> | react, firebase,
blah blah. building a network that connects
users with google maps api.
</li> <li><a>+ sparkhacks website: ⌨️</a> |astro, firebase, b.
dashboard with users. 2500+ whatever idk.
</li> <li><a>+ wics website: 🖥️</a> | building this ur whatev
er and this is for the wics organization.
</li> <li><a>+ sweet T</a> | real local business leading team
of young builders and future leaders ha.
</li> <li><a>+ more...</a></li> </ul> </div> </div>`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/experience.astro", void 0);

const $$Flick = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center mt-[50px]"> <h3 class="text-black text-3xl font-bold bg-amber-200 w-[150px] max-h-fit justify-center text-center">
on film
</h3> <div class="flex"> <img class="w-[300px] h-fit" src="src/assets/camera.svg"> </div> </div>`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/flick.astro", void 0);

const $$Album = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="photo-album" class="relative top-[-60px] bg-white w-[325px] h-[250px] border-10 border-white shadow-md rounded-2xl justify-center align items-center text-center"> <a class="flex items-center justify-center" href="/gallery"><img src="src/assets/album.svg" width="290px"></a> <p>the photo album.</p> </div>`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/album.astro", void 0);

const $$Music = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="photo-album" class="relative top-[-60px] bg-white w-[325px] h-[250px] border-10 border-white shadow-md rounded-2xl justify-center align items-center text-center"> <img src="src/assets/music.svg" width="290px"> <p>the photo album.</p> </div>`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/music.astro", void 0);

const $$Landing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="landing-container" class="items-center grid grid-cols-3 sm:min-h-[700px] min-h-[500px] gap-[15px] mt-[130px]" data-astro-cid-e5pmnztv> <div class="flex flex-col" data-astro-cid-e5pmnztv> ${renderComponent($$result, "Album", $$Album, { "data-astro-cid-e5pmnztv": true })} ${renderComponent($$result, "Apps", $$Apps, { "data-astro-cid-e5pmnztv": true })} ${renderComponent($$result, "Flick", $$Flick, { "data-astro-cid-e5pmnztv": true })} </div> <div id="proj-exp-container" class="flex flex-col gap-[15px]" data-astro-cid-e5pmnztv> ${renderComponent($$result, "Projects", $$Projects, { "data-astro-cid-e5pmnztv": true })} ${renderComponent($$result, "Experience", $$Experience, { "data-astro-cid-e5pmnztv": true })} </div> <div id="extra-container" data-astro-cid-e5pmnztv> ${renderComponent($$result, "Music", $$Music, { "data-astro-cid-e5pmnztv": true })} </div> </div> `;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/landing.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "flechori", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Landing", $$Landing, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/quynhtram/Downloads/cs/flechori/src/pages/index.astro", void 0);

const $$file = "/Users/quynhtram/Downloads/cs/flechori/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
