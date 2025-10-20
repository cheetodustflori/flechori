import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_Cqx8OZ-y.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CFdc8hwe.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/quynhtram/Downloads/cs/flechori/","cacheDir":"file:///Users/quynhtram/Downloads/cs/flechori/node_modules/.astro/","outDir":"file:///Users/quynhtram/Downloads/cs/flechori/dist/","srcDir":"file:///Users/quynhtram/Downloads/cs/flechori/src/","publicDir":"file:///Users/quynhtram/Downloads/cs/flechori/public/","buildClientDir":"file:///Users/quynhtram/Downloads/cs/flechori/dist/client/","buildServerDir":"file:///Users/quynhtram/Downloads/cs/flechori/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/flicks","isIndex":false,"type":"page","pattern":"^\\/flicks\\/?$","segments":[[{"content":"flicks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/flicks.astro","pathname":"/flicks","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.CPZwDnkJ.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pages","isIndex":false,"type":"page","pattern":"^\\/pages\\/?$","segments":[[{"content":"pages","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pages.astro","pathname":"/pages","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/works","isIndex":false,"type":"page","pattern":"^\\/works\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works.astro","pathname":"/works","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.CPZwDnkJ.css"},{"type":"inline","content":"#polaroid[data-astro-cid-e5pmnztv]:hover{position:relative;transform:rotate(-5deg);cursor:pointer}#polaroid[data-astro-cid-e5pmnztv]:active{position:relative;top:5px}@keyframes bounce{0%{transform:translateY(0)}40%{transform:translateY(-50%)}60%{transform:translateY(-30%)}to{transform:translateY(0)}}.landing-star[data-astro-cid-e5pmnztv]:hover{animation:bounce .5s ease-out forwards}p[data-astro-cid-j7pv25f6]{font-family:Pixelify Sans}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/quynhtram/Downloads/cs/flechori/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/Users/quynhtram/Downloads/cs/flechori/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/flicks@_@astro":"pages/flicks.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/pages@_@astro":"pages/pages.astro.mjs","\u0000@astro-page:src/pages/works@_@astro":"pages/works.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/quynhtram/Downloads/cs/flechori/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BihwDk54.mjs","\u0000@astrojs-manifest":"manifest_XgKbfCt8.mjs","/Users/quynhtram/Downloads/cs/flechori/src/components/navbar.astro?astro&type=script&index=0&lang.ts":"_astro/navbar.astro_astro_type_script_index_0_lang.BKaJfdK1.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/quynhtram/Downloads/cs/flechori/src/components/navbar.astro?astro&type=script&index=0&lang.ts","const d=[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"];var e=document.getElementById(\"date\"),a=document.getElementById(\"day\");if(e&&a){var t=new Date,n=t.toLocaleDateString();e.innerHTML=n;var r=d[t.getDay()],y=r.toUpperCase();a.innerHTML=y}"]],"assets":["/_astro/gallery.CPZwDnkJ.css","/favicon.svg","/fonts/Larken/LarkenDEMO-Black.otf","/fonts/Larken/LarkenDEMO-BlackItalic.otf","/fonts/Larken/LarkenDEMO-Bold.otf","/fonts/Larken/LarkenDEMO-BoldItalic.otf","/fonts/Larken/LarkenDEMO-ExtraBold.otf","/fonts/Larken/LarkenDEMO-ExtraBoldItalic.otf","/fonts/Larken/LarkenDEMO-Italic.otf","/fonts/Larken/LarkenDEMO-Light.otf","/fonts/Larken/LarkenDEMO-LightItalic.otf","/fonts/Larken/LarkenDEMO-Medium.otf","/fonts/Larken/LarkenDEMO-MediumItalic.otf","/fonts/Larken/LarkenDEMO-Regular.otf","/fonts/Larken/LarkenDEMO-Thin.otf","/fonts/Larken/LarkenDEMO-ThinItalic.otf"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"rXJ6k2AoAaTUxzXRShCsdFGexPDKqivolSk/fp1tTNo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
