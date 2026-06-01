import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Truck,
  Scale,
  BadgeCheck,
  Zap,
  MapPin,
  Phone,
  Star,
  Recycle,
  Package,
  Cpu,
  Boxes,
} from "lucide-react";
import heroImg from "@/assets/hero-rongsokan.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  BUSINESS_NAME,
  LOCATION,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";

const SEO_TITLE = "Jual Rongsok Denpasar Utara - Harga Tinggi, Jemput Lokasi";
const SEO_DESC =
  "Pengepul rongsok Bali terpercaya. Terima besi tua, kardus, plastik, elektronik bekas. Harga kompetitif, timbangan jujur, bisa jemput ke lokasi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESC },
      {
        name: "keywords",
        content:
          "jual rongsok Denpasar, pengepul rongsok Bali, rongsok terdekat, jual besi tua Denpasar, pengepul kardus Bali",
      },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
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
            addressCountry: "ID",
          },
        }),
      },
    ],
  }),
  component: Landing,
});

const services = [
  { icon: Boxes, title: "Besi Tua", desc: "Plat, pipa, kawat, rongsok logam" },
  { icon: Package, title: "Kardus", desc: "Karton bekas semua ukuran" },
  { icon: Recycle, title: "Plastik", desc: "Botol, ember, aneka plastik" },
  { icon: Cpu, title: "Elektronik Bekas", desc: "TV, kulkas, kabel, dll" },
];

const advantages = [
  { icon: BadgeCheck, title: "Harga Kompetitif & Transparan", desc: "Cek harga dulu lewat WhatsApp tanpa biaya." },
  { icon: Scale, title: "Timbangan Jujur", desc: "Pakai timbangan tera, hasil sesuai berat asli." },
  { icon: Truck, title: "Bisa Jemput ke Lokasi", desc: "Gratis jemput area Denpasar & sekitarnya." },
  { icon: Zap, title: "Respon Cepat", desc: "Balas chat & datang ke lokasi di hari yang sama." },
];

const testimonials = [
  {
    name: "Pak Wayan",
    area: "Peguyangan, Denpasar Utara",
    text: "Cepat dijemput, ditimbang depan saya, langsung dibayar cash. Recommended!",
  },
  {
    name: "Ibu Putu",
    area: "Ubung, Denpasar",
    text: "Harga lebih bagus dari pengepul lain. Orangnya ramah dan jujur.",
  },
  {
    name: "Bli Ketut",
    area: "Mengwi, Badung",
    text: "Kardus toko saya menumpuk, tinggal chat langsung diangkut semua. Mantap.",
  },
];

const areas = ["Denpasar Utara", "Denpasar Kota", "Denpasar Selatan", "Denpasar Barat", "Badung", "Sekitarnya"];

const gallery = [gallery1, gallery2, gallery3, gallery4];

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <WhatsAppFloat />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Recycle className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold leading-tight sm:text-base">
              Lapak Rongsokan<br className="sm:hidden" />
              <span className="text-muted-foreground sm:ml-1 sm:font-medium">Denpasar Utara</span>
            </span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-sm transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" fill="currentColor" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--accent)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--primary)_25%,transparent)_0%,transparent_55%)] opacity-60" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark">
              <MapPin className="h-3.5 w-3.5" /> Melayani Denpasar & Sekitarnya
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Terima Jual Rongsokan{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Harga Tinggi
              </span>{" "}
              di Denpasar Utara
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Besi tua, kardus, plastik, dan elektronik bekas — <strong className="text-foreground">bisa jemput ke lokasi</strong>. Cek harga gratis lewat WhatsApp.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition hover:scale-[1.02] hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" fill="currentColor" />
                Chat WhatsApp Sekarang
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-background px-6 py-4 text-base font-semibold text-foreground transition hover:border-primary/40"
              >
                Lihat Layanan
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> Timbangan jujur</span>
              <span className="inline-flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Jemput gratis</span>
              <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> Respon cepat</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/40 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border-4 border-accent bg-white shadow-[var(--shadow-soft)]">
              <img
                src={heroImg}
                alt="Ilustrasi rongsokan: kardus, besi, plastik, elektronik"
                width={1280}
                height={960}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-lg sm:-bottom-6 sm:-left-6">
              <div className="text-2xl font-extrabold">500+</div>
              <div className="text-xs opacity-90">pelanggan puas</div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Apa Saja yang Kami Terima?</h2>
          <p className="mt-3 text-muted-foreground">Semua jenis rongsokan rumah tangga & usaha kami terima.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Kenapa Kami</span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Pengepul Rongsok Bali yang Bisa Diandalkan</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Dokumentasi Aktivitas Kami</h2>
          <p className="mt-3 text-muted-foreground">Proses pengambilan, penimbangan, dan pembayaran transparan.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src={src}
                alt={`Dokumentasi aktivitas rongsokan ${i + 1}`}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* AREA */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <MapPin className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Area Layanan Kami</h2>
          <p className="mt-2 opacity-90">Gratis jemput rongsok di area berikut:</p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-3">
            {areas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-accent/40 bg-primary-dark/40 px-4 py-2 text-sm font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Kata Pelanggan Kami</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-bold">{t.name}</div>
                <div className="text-muted-foreground">{t.area}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent to-[oklch(0.82_0.18_85)] p-8 text-center text-accent-foreground shadow-[var(--shadow-glow)] sm:p-14">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Punya rongsokan?<br />Hubungi kami sekarang!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base opacity-90 sm:text-lg">
            Chat dulu, cek harga gratis, tim kami langsung meluncur ke lokasi Anda.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-5 text-lg font-extrabold text-whatsapp-foreground shadow-xl transition hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" fill="currentColor" />
            Chat WhatsApp Sekarang
          </a>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold opacity-80">
            <Phone className="h-4 w-4" /> {WHATSAPP_DISPLAY}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Recycle className="h-5 w-5" />
              </span>
              <span className="font-bold">{BUSINESS_NAME}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Pengepul rongsok terpercaya di Bali. Harga tinggi, jujur, dan jemput ke lokasi.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Kontak</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {LOCATION}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Jam Operasional</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>Senin – Sabtu: 08.00 – 18.00</li>
              <li>Minggu: by appointment</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
