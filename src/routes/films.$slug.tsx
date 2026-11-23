import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Quote, Reveal, YouTube, meta } from "@/components/site";
import { projects } from "@/data/site";

export const Route = createFileRoute("/films/$slug")({
  loader: ({ params }) => {
    const i = projects.findIndex((p) => p.slug === params.slug);
    const p = projects[i];
    const next = projects[(i + 1) % projects.length];
    if (i < 0 || !p || !next) throw notFound();
    return { p, next };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { ...meta("Film not found — Seymur Abdullayev", "The requested film could not be found."), meta: [...meta("Film not found — Seymur Abdullayev", "The requested film could not be found.").meta, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.p.title} — Seymur Abdullayev`;
    return {
      meta: [
        ...meta(t, loaderData.p.description).meta.filter((tag) => !("property" in tag && tag.property === "og:type")),
        { property: "og:type", content: "video.other" },
        { property: "og:url", content: `/films/${params.slug}` },
        ...(loaderData.p.thumbnail.startsWith("https://") ? [
          { property: "og:image", content: loaderData.p.thumbnail },
          { name: "twitter:image", content: loaderData.p.thumbnail },
        ] : []),
      ],
      links: [{ rel: "canonical", href: `/films/${params.slug}` }],
    };
  },
  notFoundComponent: () => <div className="px-6 pt-24 text-center"><h1>Film not found</h1></div>,
  component: Film,
});

function Film() {
  const { p, next } = Route.useLoaderData();
  const poster = !p.thumbnail;
  // The video player already shows the cover, and a still that repeats it adds nothing.
  const extraStills = p.stills.filter((s) => s !== p.thumbnail);
  return (
    <article>
      <header className="film-heading">
        <p className="text-muted-foreground">{poster && p.comingSoon ? "Coming soon" : p.year}</p>
        <h1>{p.title}</h1>
        {p.original && <p className="text-xl italic text-muted-foreground">{p.original}</p>}
        <p className="film-description">{p.description}</p>
        <p className="mt-5 text-muted-foreground">My role — <span className="text-foreground">{p.role}</span></p>
        {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 inline-block border-b border-foreground pb-1">View project ↗</a>}
        {p.awards.length > 0 && <ul className="mt-6 space-y-1">{p.awards.map((a) => <li key={a} className="italic">✦ {a}</li>)}</ul>}
      </header>
      {p.youtubeUrl && <section className="film-media"><YouTube url={p.youtubeUrl} title={p.title} poster={p.thumbnail} /></section>}
      {!p.youtubeUrl && !poster && <div className="film-media mt-6"><img src={p.thumbnail} alt={`${p.title} cover`} className="film-cover" /></div>}
      {p.quote && <Quote>{p.quote}</Quote>}
      {extraStills.length > 0 && (
        <section className="mx-auto mt-6 grid max-w-[1600px] gap-3 px-6 md:grid-cols-2 md:px-10">
          {extraStills.map((s, i) => (
            <Reveal key={i} className={i === 0 ? "md:col-span-2" : ""}>
              <img src={s} alt={`${p.title} still ${i + 1}`} loading="lazy" className="h-auto w-full object-contain transition-opacity hover:opacity-60" />
            </Reveal>
          ))}
        </section>
      )}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <h2>Credits</h2>
        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <dt className="text-muted-foreground">{p.role}</dt><dd>Seymur Abdullayev</dd>
          {p.credits?.map((c) => [<dt key={c.label + "t"} className="text-muted-foreground">{c.label}</dt>, <dd key={c.label + "d"}>{c.value}</dd>])}
        </dl>
      </section>
      <Link to="/films/$slug" params={{ slug: next.slug }} className="mx-auto mt-24 block max-w-5xl border-t border-border px-6 pt-12">
        <p className="text-muted-foreground">Next project</p>
        <p className="film-next-title mt-4 text-2xl md:text-4xl">{next.title} →</p>
      </Link>
    </article>
  );
}
