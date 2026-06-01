import { jsx, jsxs } from "react/jsx-runtime";
import { Recycle, MapPin, BadgeCheck, Truck, Zap, Boxes, Package, Cpu, Scale, Star, Phone } from "lucide-react";
import { a as WHATSAPP_URL, W as WHATSAPP_DISPLAY, B as BUSINESS_NAME, L as LOCATION } from "./router-BMvALKG4.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
    }
  );
}
const heroImg = "/assets/hero-rongsokan-aqIvntfN.jpg";
const imgElektronik = "/assets/elektronik-hG9Kc8zU.jpeg";
const imgKardus = "/assets/kardus-FRwZ_yEj.jpeg";
const imgPlastik = "/assets/plastik-BAKwLZp4.jpeg";
const imgBesi = "/assets/besi-B-7DxPBi.jpeg";
const gallery1 = "/assets/gallery-1-BVnL9wxE.jpg";
const gallery2 = "/assets/gallery-2-zF18gRBd.jpg";
const gallery3 = "/assets/gallery-3-1P7tmwgi.jpg";
const gallery4 = "/assets/gallery-4-BPj8wxAN.jpg";
function WhatsAppFloat() {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: WHATSAPP_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat WhatsApp",
      className: "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] transition-all hover:scale-105 hover:shadow-2xl",
      children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-6 w-6 items-center justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" }),
          /* @__PURE__ */ jsx(WhatsAppIcon, { className: "relative h-6 w-6" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden font-semibold sm:inline", children: "Chat WhatsApp" })
      ]
    }
  );
}
const services = [{
  image: Boxes,
  title: "Besi Tua",
  desc: "Plat, pipa, kawat, rongsok logam",
  photo: imgBesi
}, {
  image: Package,
  title: "Kardus",
  desc: "Karton bekas semua ukuran",
  photo: imgKardus
}, {
  image: Recycle,
  title: "Plastik",
  desc: "Botol, ember, aneka plastik",
  photo: imgPlastik
}, {
  image: Cpu,
  title: "Elektronik Bekas",
  desc: "TV, kulkas, kabel, dll",
  photo: imgElektronik
}];
const advantages = [{
  icon: BadgeCheck,
  title: "Harga Kompetitif & Transparan",
  desc: "Cek harga dulu lewat WhatsApp tanpa biaya."
}, {
  icon: Scale,
  title: "Timbangan Jujur",
  desc: "Pakai timbangan tera, hasil sesuai berat asli."
}, {
  icon: Truck,
  title: "Bisa Jemput ke Lokasi",
  desc: "Gratis jemput area Denpasar & sekitarnya."
}, {
  icon: Zap,
  title: "Respon Cepat",
  desc: "Balas chat & datang ke lokasi di hari yang sama."
}];
const testimonials = [{
  name: "Pak Wayan",
  area: "Peguyangan, Denpasar Utara",
  text: "Cepat dijemput, ditimbang depan saya, langsung dibayar cash. Recommended!"
}, {
  name: "Ibu Putu",
  area: "Ubung, Denpasar",
  text: "Harga lebih bagus dari pengepul lain. Orangnya ramah dan jujur."
}, {
  name: "Bli Ketut",
  area: "Mengwi, Badung",
  text: "Kardus toko saya menumpuk, tinggal chat langsung diangkut semua. Mantap."
}];
const areas = ["Denpasar Utara", "Denpasar Kota", "Denpasar Selatan", "Denpasar Barat", "Badung", "Sekitarnya"];
const gallery = [gallery1, gallery2, gallery3, gallery4];
function Landing() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(WhatsAppFloat, {}),
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Recycle, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold leading-tight sm:text-base", children: [
          "Lapak Rongsokan",
          /* @__PURE__ */ jsx("br", { className: "sm:hidden" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground sm:ml-1 sm:font-medium", children: "Denpasar Utara" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-sm transition hover:opacity-90", children: [
        /* @__PURE__ */ jsx(WhatsAppIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "WhatsApp" }),
        /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Chat" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--accent)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--primary)_25%,transparent)_0%,transparent_55%)] opacity-60" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
            " Melayani Denpasar & Sekitarnya"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl", children: [
            "Terima Jual Rongsokan",
            " ",
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent", children: "Harga Tinggi" }),
            " ",
            "di Denpasar Utara"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-5 text-base text-muted-foreground sm:text-lg", children: [
            "Besi tua, kardus, plastik, dan elektronik bekas — ",
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "bisa jemput ke lokasi" }),
            ". Cek harga gratis lewat WhatsApp."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-col gap-3 sm:flex-row", children: [
            /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition hover:scale-[1.02] hover:shadow-xl", children: [
              /* @__PURE__ */ jsx(WhatsAppIcon, { className: "h-5 w-5" }),
              "Chat WhatsApp Sekarang"
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#layanan", className: "inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-background px-6 py-4 text-base font-semibold text-foreground transition hover:border-primary/40", children: "Lihat Layanan" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(BadgeCheck, { className: "h-4 w-4 text-primary" }),
              " Timbangan jujur"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Truck, { className: "h-4 w-4 text-primary" }),
              " Jemput gratis"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-primary" }),
              " Respon cepat"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-accent/40 blur-2xl" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border-4 border-accent bg-white shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Ilustrasi rongsokan: kardus, besi, plastik, elektronik", width: 1280, height: 960, className: "h-auto w-full" }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -left-4 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-lg sm:-bottom-6 sm:-left-6", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-extrabold", children: "500+" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs opacity-90", children: "pelanggan puas" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "layanan", className: "mx-auto max-w-6xl px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Layanan Kami" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-extrabold sm:text-4xl", children: "Apa Saja yang Kami Terima?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Semua jenis rongsokan rumah tangga & usaha kami terima." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4", children: services.map(({
        image: Icon,
        title,
        desc,
        photo
      }) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: photo, alt: title, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-bold text-primary-foreground shadow", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" }),
          title
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: desc }) })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/60 py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Kenapa Kami" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-extrabold sm:text-4xl", children: "Pengepul Rongsok Bali yang Bisa Diandalkan" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: advantages.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-bold", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold sm:text-4xl", children: "Dokumentasi Aktivitas Kami" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Proses pengambilan, penimbangan, dan pembayaran transparan." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4", children: gallery.map((src, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden rounded-2xl border border-border bg-muted", children: /* @__PURE__ */ jsx("img", { src, alt: `Dokumentasi aktivitas rongsokan ${i + 1}`, width: 800, height: 800, loading: "lazy", className: "h-full w-full object-cover transition duration-500 hover:scale-105" }) }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-14 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 text-center", children: [
      /* @__PURE__ */ jsx(MapPin, { className: "mx-auto h-8 w-8 text-accent" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-extrabold sm:text-4xl", children: "Area Layanan Kami" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 opacity-90", children: "Gratis jemput rongsok di area berikut:" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-3", children: areas.map((a) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-accent/40 bg-primary-dark/40 px-4 py-2 text-sm font-medium", children: a }, a)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold sm:text-4xl", children: "Kata Pelanggan Kami" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl border border-border bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-accent", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4", fill: "currentColor" }, i)) }),
        /* @__PURE__ */ jsxs("blockquote", { className: "mt-3 text-foreground", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-4 text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: t.area })
        ] })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-4 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent to-[oklch(0.82_0.18_85)] p-8 text-center text-accent-foreground shadow-[var(--shadow-glow)] sm:p-14", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-extrabold leading-tight sm:text-5xl", children: [
        "Punya rongsokan?",
        /* @__PURE__ */ jsx("br", {}),
        "Hubungi kami sekarang!"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-base opacity-90 sm:text-lg", children: "Chat dulu, cek harga gratis, tim kami langsung meluncur ke lokasi Anda." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-center justify-center", children: [
        /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-3 text-lg font-extrabold text-whatsapp-foreground shadow-xl transition hover:scale-105", children: [
          /* @__PURE__ */ jsx(WhatsAppIcon, { className: "h-6 w-6" }),
          "Chat WhatsApp Sekarang"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold opacity-80", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
          " ",
          WHATSAPP_DISPLAY
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("footer", { className: "border-t border-border bg-secondary/40", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Recycle, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: BUSINESS_NAME })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Pengepul rongsok terpercaya di Bali. Harga tinggi, jujur, dan jemput ke lokasi." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-foreground", children: "Kontak" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(WhatsAppIcon, { className: "h-4 w-4 text-primary" }),
              /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: [
                "WhatsApp: ",
                WHATSAPP_DISPLAY
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary" }),
              " ",
              LOCATION
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-foreground", children: "Jam Operasional" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-1 text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("li", { children: "Senin – Miggu: 08.00 – 18.00" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-border py-4 text-center text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        BUSINESS_NAME,
        ". All rights reserved."
      ] })
    ] })
  ] });
}
export {
  Landing as component
};
