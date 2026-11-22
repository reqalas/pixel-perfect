import { Film, Globe, Instagram, Menu, Palette, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { site, youtubeId, vimeoId, type DesignPlate, type Project } from "@/data/site";

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

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-4" aria-label="Social links">
      {site.socials.map((social) => {
        const name = social.label.toLowerCase();
        const Icon = name.includes("instagram") ? Instagram : name.includes("youtube") ? Youtube : name.includes("behance") ? Palette : name.includes("imdb") ? Film : Globe;
        return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label} className="social-link"><Icon size={17} strokeWidth={1.4} /></a>;
      })}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", close); };
  }, [open]);
  return (
    <header className="site-header surface-paper">
      <div className="header-inner">
        <Link to="/" className="site-name" onClick={() => setOpen(false)}>Seymur Abdullayev</Link>
        <div className="desktop-navigation">
          <nav className="flex items-center gap-[22px]" aria-label="Main">
            {nav.map((n) => <Link key={n.to} to={n.to} className="nav-link" activeProps={{ className: "nav-link is-active" }}>{n.label}</Link>)}
          </nav>
          <SocialIcons />
        </div>
        <Button variant="ghost" className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}<span>{open ? "Close" : "Menu"}</span>
        </Button>
      </div>
      {open && <div id="mobile-navigation" className="mobile-navigation surface-paper">
        <nav aria-label="Mobile" className="flex flex-col items-center gap-5">
          {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="mobile-nav-link" activeProps={{ className: "mobile-nav-link is-active" }}>{n.label}</Link>)}
        </nav>
        <div className="mt-8"><SocialIcons /></div>
      </div>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer surface-paper">
      <SocialIcons />
      <a href={`mailto:${site.email}`} className="mt-5 block break-all">{site.email}</a>
      <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-muted-foreground">
        <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a><span>{site.location}</span>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">© {new Date().getFullYear()} Seymur Abdullayev</p>
    </footer>
  );
}

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mx-auto mt-12 w-full max-w-md">
      <h2 className="newsletter-title">Stay Connected.</h2>
      {done ? <p className="mt-5">Thank you — talk soon.</p> : (
        <div className="newsletter-field surface-paper mt-5 flex">
          <label htmlFor="nl" className="sr-only">Email</label>
          <input id="nl" type="email" required placeholder="Your email" className="min-w-0 flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-muted-foreground" />
          <Button type="submit" variant="outline" className="h-auto border-y-0 border-r-0 px-6">Subscribe</Button>
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
    <section className="mx-auto max-w-[1600px] page-heading px-6 pb-16 pt-20 md:px-10 md:pt-24">
      <p className="font-label text-[10px] text-foreground">{eyebrow}</p>
      <h1 className="mt-6 font-display text-3xl leading-tight  md:text-6xl">{title}</h1>
      {intro && <p className="mt-8 max-w-2xl font-sans text-[15px] leading-relaxed text-muted-foreground">{intro}</p>}
    </section>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
      <p className="font-sans text-3xl italic leading-snug md:text-4xl">“{children}”</p>
    </Reveal>
  );
}

export function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  return (
    <Link to="/films/$slug" params={{ slug: p.slug }} className="project-card block min-w-0">
      <div className={`project-image bg-card ${large ? "aspect-video" : "aspect-[4/3]"}`}>
        {p.thumbnail ? <img src={p.thumbnail} alt={`${p.title} — still`} loading="lazy" className="h-full w-full object-contain transition-opacity duration-500" /> : <div className="h-full w-full bg-card" />}
      </div>
      <h3 className="mt-5 text-xl leading-snug md:text-2xl">{p.title}</h3>
      <p className="mt-2 text-muted-foreground">{p.role}</p>
      {p.comingSoon && <p className="mt-2 text-sm text-muted-foreground">Coming soon</p>}
    </Link>
  );
}

export function VideoBackground({ url, start }: { url: string; start: number }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const id = youtubeId(url);
  const origin = "https://www.youtube.com";

  useEffect(() => {
    if (!id) return;
    const send = (func: string, args: (string | number)[] = []) => {
      frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), origin);
    };
    const connect = () => {
      frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: "home-background" }), origin);
      send("addEventListener", ["onStateChange"]);
    };
    const receive = (event: MessageEvent) => {
      if (event.origin !== origin || event.source !== frame.current?.contentWindow) return;
      let data;
      try { data = typeof event.data === "string" ? JSON.parse(event.data) : event.data; } catch { return; }
      if (data?.event === "onReady") {
        send("mute");
        send("seekTo", [start, 1]);
        send("playVideo");
      }
      if (data?.event === "onStateChange" && data.info === 1) send("mute");
      if (data?.event === "onStateChange" && data.info === 0) {
        send("seekTo", [start, 1]);
        send("playVideo");
      }
      if (data?.event === "infoDelivery") {
        if (data.info?.playerState === 1) send("mute");
        // YouTube's native loop can return to zero; keep every repeat at the chosen start.
        if (typeof data.info?.currentTime === "number" && data.info.currentTime < start - 0.5) {
          send("seekTo", [start, 1]);
        }
      }
    };
    window.addEventListener("message", receive);
    connect();
    const timer = window.setInterval(connect, 1000);
    return () => { window.clearInterval(timer); window.removeEventListener("message", receive); };
  }, [id, start]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
      {id && <iframe
        ref={frame}
        title="Seymur Abdullayev background showreel"
        src={`${origin}/embed/${id}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${id}&start=${start}&enablejsapi=1&rel=0&disablekb=1`}
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full border-0"
      />}
    </div>
  );
}

export function YouTube({ url, title, poster }: { url: string; title: string; poster: string }) {
  const [play, setPlay] = useState(false);
  const yid = youtubeId(url);
  const vid = vimeoId(url);
  const id = yid || vid;
  const src = yid ? `https://www.youtube-nocookie.com/embed/${yid}?autoplay=1&rel=0` : `https://player.vimeo.com/video/${vid}?autoplay=1`;
  return (
    <div className="surface-cinema relative aspect-video overflow-hidden bg-card text-foreground">
      {play && id ? (
        <iframe className="absolute inset-0 h-full w-full" src={src} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <Button variant="ghost" onClick={() => id && setPlay(true)} className="player-trigger group absolute inset-0 h-full w-full" aria-label={id ? `Play ${title}` : "Video coming soon"} disabled={!id}>
          <img src={yid ? `https://i.ytimg.com/vi/${yid}/maxresdefault.jpg` : poster} alt={`${title} video cover`} loading="lazy" className="h-full w-full object-contain" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center border border-foreground/40 transition-opacity group-hover:opacity-60">
              {id ? <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current"><path d="M8 5v14l11-7z" /></svg> : <span className="font-label text-[8px]">Soon</span>}
            </span>
          </span>
        </Button>
      )}
    </div>
  );
}

type GalleryItem = { src: string; caption: string };

/** Arrow keys page through an open gallery; Esc closes it. */
function useGalleryKeys(items: GalleryItem[], i: number | null, setI: Dispatch<SetStateAction<number | null>>) {
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((v) => ((v ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setI((v) => ((v ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [i, items.length, setI]);
}

function GalleryModal({ items, i, onClose }: { items: GalleryItem[]; i: number; onClose: () => void }) {
  const item = items[i];
  if (!item) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={item.caption} className="gallery-modal fixed inset-0 z-[60] flex flex-col items-center justify-center bg-overlay p-6 page-enter" onClick={onClose}>
      <img src={item.src} alt={item.caption} className="max-h-[80vh] max-w-full object-contain" />
      <p className="mt-6 font-label text-[10px] text-muted-foreground">{item.caption} — {i + 1}/{items.length}</p>
      <p className="mt-2 text-xs text-muted-foreground">← → to navigate · Esc to close</p>
    </div>
  );
}

export function Lightbox({ items }: { items: GalleryItem[] }) {
  const [i, setI] = useState<number | null>(null);
  useGalleryKeys(items, i, setI);
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((it, idx) => (
          <Button variant="ghost" key={idx} onClick={() => setI(idx)} className={`gallery-tile group mb-4 block w-full overflow-hidden text-left ${idx % 3 === 1 ? "aspect-[3/4]" : "aspect-video"}`}>
            <img src={it.src} alt={it.caption} loading="lazy" className="h-full w-full object-contain transition-opacity duration-500 group-hover:opacity-60" />
          </Button>
        ))}
      </div>
      {i !== null && <GalleryModal items={items} i={i} onClose={() => setI(null)} />}
    </>
  );
}

/**
 * Justified plate grid. Images keep their full, uncropped framing: each row is
 * sized so every plate in it shares one height, and rows run in data order.
 * `target` is how many average-wide images fit a row before it breaks.
 */
export function PlateGrid({ items, target = 3.6 }: { items: DesignPlate[]; target?: number }) {
  const [i, setI] = useState<number | null>(null);
  useGalleryKeys(items, i, setI);

  const rows: { plate: DesignPlate; index: number; ratio: number }[][] = [];
  let row: { plate: DesignPlate; index: number; ratio: number }[] = [];
  let sum = 0;
  items.forEach((plate, index) => {
    const ratio = plate.w / plate.h;
    row.push({ plate, index, ratio });
    sum += ratio;
    if (sum >= target) { rows.push(row); row = []; sum = 0; }
  });
  if (row.length) rows.push(row);

  return (
    <>
      <div className="flex flex-col gap-4">
        {rows.map((r, ri) => {
          const fill = Math.min(1, r.reduce((a, x) => a + x.ratio, 0) / target);
          return (
            <div
              key={ri}
              className="flex flex-col gap-4 sm:max-w-[var(--fill)] sm:flex-row"
              style={{ "--fill": `${(fill * 100).toFixed(2)}%` } as CSSProperties}
            >
              {r.map(({ plate, index, ratio }) => (
                <Button variant="ghost"
                  key={index}
                  onClick={() => setI(index)}
                  aria-label={`Open ${plate.caption}`}
                  style={{ flexGrow: ratio }}
                  className="gallery-tile group basis-auto min-w-0 overflow-hidden bg-card text-left sm:basis-0"
                >
                  <div className="relative">
                    <img
                      src={plate.src}
                      alt={plate.caption}
                      width={plate.w}
                      height={plate.h}
                      loading="lazy"
                      className="h-auto w-full transition-opacity duration-500 group-hover:opacity-60"
                    />
                    
                    <span className="absolute bottom-4 left-4 font-label text-[9px] text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {plate.caption}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          );
        })}
      </div>
      {i !== null && <GalleryModal items={items} i={i} onClose={() => setI(null)} />}
    </>
  );
}

export function StudioVideoGrid({ videos }: { videos: { id: string; title: string; thumbnail: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" aria-label="Piktolix videos">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noreferrer"
          className="group block min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label={`Watch ${video.title} on YouTube`}
        >
          <div className="relative aspect-video bg-card">
            <img src={video.thumbnail} alt={video.title} width={1280} height={720} loading="lazy" className="h-full w-full object-contain transition-opacity duration-500 group-hover:opacity-80" />
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="flex h-12 w-12 items-center justify-center border border-foreground/60 bg-background/70 text-foreground transition-opacity group-hover:opacity-60">
                <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </div>
          <h3 className="studio-video-title mt-4 break-words text-sm leading-relaxed text-foreground transition-colors group-hover:opacity-60">{video.title}</h3>
        </a>
      ))}
    </div>
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
