import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-DcY1wfAz.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lapak Rongsokan Denpasar Utara" },
      { name: "description", content: "Pengepul rongsok Bali. Besi tua, kardus, plastik, elektronik. Jemput lokasi." },
      { property: "og:site_name", content: "Lapak Rongsokan Denpasar Utara" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Lapak Rongsokan Denpasar Utara" },
      { name: "twitter:title", content: "Lapak Rongsokan Denpasar Utara" },
      { property: "og:description", content: "Pengepul rongsok Bali. Besi tua, kardus, plastik, elektronik. Jemput lokasi." },
      { name: "twitter:description", content: "Pengepul rongsok Bali. Besi tua, kardus, plastik, elektronik. Jemput lokasi." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dada2bd8-2b96-483e-aa0d-a13f8679b8b2/id-preview-2eeb693f--365e1bd3-75b7-4914-808d-4b57f98b50b8.lovable.app-1780295751744.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dada2bd8-2b96-483e-aa0d-a13f8679b8b2/id-preview-2eeb693f--365e1bd3-75b7-4914-808d-4b57f98b50b8.lovable.app-1780295751744.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
      },
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "../public/favicon.ico"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const WHATSAPP_NUMBER = "628133634717";
const WHATSAPP_DISPLAY = "+62 813-3634-717";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo, saya ingin menjual rongsokan. Bisa info harga & jemput ke lokasi?"
)}`;
const BUSINESS_NAME = "Lapak Rongsokan Denpasar Utara";
const LOCATION = "Jalan Seroja, Gang Rahwana No 10. Denpasar Utara, Bali";
const $$splitComponentImporter = () => import("./index-BG91eeQv.js");
const SEO_TITLE = "Jual Rongsok Denpasar Utara - Harga Tinggi, Jemput Lokasi";
const SEO_DESC = "Pengepul rongsok Bali terpercaya. Terima besi tua, kardus, plastik, elektronik bekas. Harga kompetitif, timbangan jujur, bisa jemput ke lokasi.";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: SEO_TITLE
    }, {
      name: "description",
      content: SEO_DESC
    }, {
      name: "keywords",
      content: "jual rongsok Denpasar, pengepul rongsok Bali, rongsok terdekat, jual besi tua Denpasar, pengepul kardus Bali"
    }, {
      property: "og:title",
      content: SEO_TITLE
    }, {
      property: "og:description",
      content: SEO_DESC
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: BUSINESS_NAME,
        description: SEO_DESC,
        areaServed: ["Denpasar Utara", "Denpasar", "Badung", "Bali"],
        telephone: WHATSAPP_DISPLAY,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Denpasar Utara",
          addressRegion: "Bali",
          addressCountry: "ID"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BUSINESS_NAME as B,
  LOCATION as L,
  WHATSAPP_DISPLAY as W,
  WHATSAPP_URL as a,
  router as r
};
