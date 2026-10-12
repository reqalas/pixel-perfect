import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Quote, Reveal, YouTube } from "@/components/site";
import { projects } from "@/data/site";

export const Route = createFileRoute("/films/$slug")({
  loader: ({ params }) => {
    const i = projects.findIndex((p) => p.slug === params.slug);
    if (i < 0) throw notFound();
    return { p: projects[i]!, next: projects[(i + 1) % projects.length]! };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.p.title} — Seymur Abdullayev`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.p.description },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.p.description },
        { property: "og:type", content: "video.other" },
        { property: "og:url", content: `/films/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/films/${params.slug}` }],
    };
  },
  notFoundComponent: () => <div className="px-6 pt-48 text-center font-wide text-sm">Film not found</div>,
  component: Film,
});

function Film() {
  const { p, next } = Route.useLoaderData();
  return (
    <article>
      <div className="relative h-[80svh]">
        {p.thumbnail
          ? <img src={p.thumbnail} alt={`${p.title} cover`} className="h-full w-full object-cover" />
          : <div className="absolute inset-0 bg-plate" />}
        <div className="absolute inset-0 bg-fade" />
        {p.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-wide text-[10px] text-ember">Coming soon</span>
          </div>
        )}
      </div>
      <header className="mx-auto -mt-40 max-w-5xl px-6 relative">
        <p className="font-wide text-[10px] text-ember">{p.year}</p>
        <h1 className="mt-4 font-wide text-3xl leading-tight tracking-[0.16em] md:text-5xl">{p.title}</h1>
        {p.original && <p className="mt-3 font-serif text-2xl italic text-muted-foreground">{p.original}</p>}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">{p.description}</p>
        <p className="mt-4 font-wide text-[10px] text-muted-foreground">My role — <span className="text-foreground">{p.role}</span></p>
        {p.link && (
          <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 inline-block border-b border-ember pb-1 font-wide text-[10px] text-ember hover:text-foreground">View project ↗</a>
        )}
        {p.awards.length > 0 && (
          <ul className="mt-6 space-y-1">{p.awards.map((a) => <li key={a} className="font-serif text-lg italic text-ember">✦ {a}</li>)}</ul>
        )}
      </header>
      {p.youtubeUrl && <section className="mx-auto mt-20 max-w-6xl px-6"><YouTube url={p.youtubeUrl} title={p.title} poster={p.thumbnail} /></section>}
      <Quote>{p.quote ?? p.title}</Quote>
      {p.stills.length > (p.youtubeUrl ? 0 : 1) && (
        <section className="mx-auto grid max-w-[1600px] gap-4 px-6 md:grid-cols-2 md:px-10">
          {p.stills.slice(p.youtubeUrl ? 0 : 1).map((s, i) => (
            <Reveal key={i} className={i === 0 ? "md:col-span-2" : ""}>
              <img src={s} alt={`${p.title} still ${i + 1}`} loading="lazy" className="aspect-video w-full object-cover" />
            </Reveal>
          ))}
        </section>
      )}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="font-wide text-[11px] text-muted-foreground">Credits</h2>
        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <dt className="text-muted-foreground">{p.role}</dt><dd>Seymur Abdullayev</dd>
          {p.credits?.map((c) => [<dt key={c.label + "t"} className="text-muted-foreground">{c.label}</dt>, <dd key={c.label + "d"}>{c.value}</dd>])}
        </dl>
      </section>
      <Link to="/films/$slug" params={{ slug: next.slug }} className="group mx-auto mt-32 block max-w-5xl border-t border-border px-6 pt-12">
        <p className="font-wide text-[10px] text-muted-foreground">Next project</p>
        <p className="mt-4 font-wide text-2xl tracking-[0.16em] transition group-hover:text-ember md:text-4xl">{next.title} →</p>
      </Link>
    </article>
  );
}
