import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { site, youtubeId, type Project } from "@/data/site";

const nav = [
  { to: "/profile", label: "Profile" },
  { to: "/films", label: "Films" },
  { to: "/originals", label: "Originals" },
  { to: "/motion", label: "Motion" },
  { to: "/design", label: "Design" },
  { to: "/studio", label: "Studio" },
  { to: "/awards", label: "Awards" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-background/90 to-transparent">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="font-wide text-[11px] leading-tight text-foreground" onClick={() => setOpen(false)}>
          Seymur<br /><span className="text-muted-foreground">Abdullayev</span>
        </Link>
        <nav className="hidden gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="font-wide text-[10px] text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "!text-ember" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="font-wide text-[10px] lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[84px] z-40 flex flex-col items-center justify-center gap-6 bg-overlay backdrop-blur lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-wide text-lg text-foreground hover:text-ember">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl italic">Stories in motion.</p>
          <p className="mt-3 text-sm text-muted-foreground">{site.location}</p>
        </div>
        <div className="space-y-2 text-sm">
          <a href={`mailto:${site.email}`} className="block hover:text-ember">{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:text-ember">{site.phone}</a>
          <div className="flex gap-5 pt-3">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="font-wide text-[10px] text-muted-foreground hover:text-ember">{s.label}</a>
            ))}
          </div>
        </div>
        <Newsletter />
      </div>
      <p className="mx-auto mt-16 max-w-[1600px] font-wide text-[9px] text-muted-foreground">© {new Date().getFullYear()} Seymur Abdullayev</p>
    </footer>
  );
}

function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <p className="font-wide text-[10px] text-muted-foreground">Stay Connected</p>
      {done ? <p className="mt-4 text-sm text-ember">Thank you — talk soon.</p> : (
        <div className="mt-4 flex border-b border-border focus-within:border-ember">
          <label htmlFor="nl" className="sr-only">Email</label>
          <input id="nl" type="email" required placeholder="Your email" className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground" />
          <button className="font-wide text-[10px] hover:text-ember">Join</button>
        </div>
      )}
    </form>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pt-48">
      <p className="font-wide text-[10px] text-ember">{eyebrow}</p>
      <h1 className="mt-6 font-wide text-3xl leading-tight tracking-[0.18em] md:text-6xl">{title}</h1>
      {intro && <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-muted-foreground md:text-3xl">{intro}</p>}
    </section>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
      <p className="font-serif text-4xl italic leading-tight md:text-6xl">“{children}”</p>
    </Reveal>
  );
}

export function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  return (
    <Link to="/films/$slug" params={{ slug: p.slug }} className="group block">
      <div className={`relative overflow-hidden bg-card ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <img src={p.thumbnail} alt={`${p.title} — still`} loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-fade opacity-70" />
        <div className="absolute bottom-0 p-5 md:p-7">
          <p className="font-wide text-[9px] text-ember">{p.role}</p>
          <h3 className="mt-2 font-wide text-sm tracking-[0.2em] md:text-base">{p.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export function YouTube({ url, title, poster }: { url: string; title: string; poster: string }) {
  const [play, setPlay] = useState(false);
  const id = youtubeId(url);
  return (
    <div className="relative aspect-video overflow-hidden bg-card">
      {play && id ? (
        <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <button onClick={() => id && setPlay(true)} className="group absolute inset-0 h-full w-full" aria-label={id ? `Play ${title}` : "Video coming soon"} disabled={!id}>
          <img src={id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : poster} alt="" loading="lazy" className="h-full w-full object-cover opacity-60" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-foreground/40 transition group-hover:scale-110 group-hover:border-ember group-hover:text-ember">
              {id ? <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current"><path d="M8 5v14l11-7z" /></svg> : <span className="font-wide text-[8px]">Soon</span>}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export function Lightbox({ items }: { items: { src: string; caption: string }[] }) {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((v) => (v! + 1) % items.length);
      if (e.key === "ArrowLeft") setI((v) => (v! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [i, items.length]);
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((it, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`group mb-4 block w-full overflow-hidden text-left ${idx % 3 === 1 ? "aspect-[3/4]" : "aspect-video"}`}>
            <img src={it.src} alt={it.caption} loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div role="dialog" aria-modal="true" aria-label={items[i]!.caption} className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-overlay p-6 page-enter" onClick={() => setI(null)}>
          <img src={items[i]!.src} alt={items[i]!.caption} className="max-h-[80vh] max-w-full object-contain" />
          <p className="mt-6 font-wide text-[10px] text-muted-foreground">{items[i]!.caption} — {i + 1}/{items.length}</p>
          <p className="mt-2 text-xs text-muted-foreground">← → to navigate · Esc to close</p>
        </div>
      )}
    </>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
