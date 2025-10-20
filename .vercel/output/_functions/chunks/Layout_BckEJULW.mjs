import { c as createComponent, m as maybeRenderHead, b as renderScript, r as renderTemplate, d as createAstro, e as addAttribute, f as renderHead, a as renderComponent, g as renderSlot } from './astro/server_Cqx8OZ-y.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="navbar" class="bg-blue-25 absolute w-full sm:min-h-[175px] min-h-[500px] background-layer overflow-hidden"> <div id="navbar-status" class="font-pixel flex text-white font-bold relative m-[15px] justify-end align-middle items-center"> <h3 id="day"></h3> <h3> : </h3> <h3 id="date"></h3> </div> <div id="folders" class="absolute bottom-0 right-15"> <a href="/"><button class="bg-white p-[15px] rounded-t-xl min-w-[150px] hover:cursor-pointer"> ☆ home</button></a> <a href="/"><button class="bg-white p-[15px] rounded-t-xl min-w-[200px] hover:cursor-pointer"> ☽ backyard</button></a> <a href="/"><button class="bg-white p-[15px] rounded-t-xl min-w-[150px] hover:cursor-pointer"> ☘︎ ݁˖ rooftop</button></a><a href="/"></a> </div> </section> ${renderScript($$result, "/Users/quynhtram/Downloads/cs/flechori/src/components/navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/navbar.astro", void 0);

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="profile-container" class="flex flex-col gap-[15px] z-[999] ml-[30px]"> <a id="polaroid-section" href="/" class="w-fit"> <img id="polaroid" src="src/assets/polaroid.png" width="200px" class="min-w-[200px]"> </a> <p class="text-4xl font-bold">flechori</p> <div id="quote-container"> <p class="max-w-[300px] min-w-[300px]">
“For by <b>him</b> all things were <b>created</b>
in heaven and on earth, visible and invisible, <i>whether thrones or dominions or rulers or authorities</i>—all things were created <span class="text-blue-50">through him and for him.”</span> </p> <p class="text-blue-100 font-bold">Colossians 1:16</p> </div> <div class="flex flex-col gap-[15px] items-start justify-start"> <button class="bg-blue-25 text-white landing-button border-1 border-black pl-[10px] pr-[10px] rounded-3xl">univ. of il. at chicago</button> <button class="landing-button border-1 pl-[10px] pr-[10px] rounded-3xl">computer science</button> <button class="landing-button border-1 pl-[10px] pr-[10px] rounded-3xl">low on cheetos...</button> </div> <div class="flex flex-row gap-[15px] items-center"> <a href="https://github.com/cheetodustflori" target="_blank" class=""><img src="src/assets/github.svg"></a> <a href="florianneche@gmail.com" target="_blank" class=""><img src="src/assets/mail.svg"></a> <a href="https://www.youtube.com/@florianneche" target="_blank" class=""><img src="src/assets/video.svg"></a> <a href="https://www.linkedin.com/in/florianne-che/" target="_blank" class=""><img src="src/assets/in.svg"></a> </div> </div>`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/components/profile.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <section id="hero" class="flex flex-row w-full p-[15px] sm:min-h-[700px] min-h-[500px] background-layer overflow-hidden gap-[30px] "> ${renderComponent($$result, "Profile", $$Profile, {})} <div id="main-container" class="flex w-full align-middle items-center"> ${renderSlot($$result, $$slots["default"])} </div> </section> </body></html>`;
}, "/Users/quynhtram/Downloads/cs/flechori/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
