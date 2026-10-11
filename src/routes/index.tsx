import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectCard, Quote, Reveal, meta } from "@/components/site";
import { awards, featuredSlugs, images, projects, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => meta("Seymur Abdullayev — Animator, Motion Designer & Director", "Director, 2D & 3D animator and motion designer from Baku. Award-winning animation, documentaries and original series."),
  component: Home,
});

function Home() {
  const featured = featuredSlugs.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
  return (
    <>
      <section className="relative h-[100svh] overflow-hidden">
        {site.showreelUrl ? (
          <video src={site.showreelUrl} autoPlay muted loop playsInline poster={images.hero} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <img src={images.hero} alt="Cinematic still overlooking Baku at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-fade" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
          <h1 className="font-wide text-4xl leading-[1.05] tracking-[0.2em] md:text-7xl lg:text-8xl">Seymur<br />Abdullayev</h1>
          <p className="mt-6 font-wide text-[10px] text-muted-foreground md:text-xs">{site.title}</p>
          <p className="mt-4 font-serif text-2xl italic text-ember md:text-3xl">{site.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pt-32 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-wide text-[11px] text-muted-foreground">Selected Work</h2>
          <Link to="/films" className="font-wide text-[10px] hover:text-ember">All films →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} className={i === 0 ? "md:col-span-2" : ""}><ProjectCard p={p} large={i === 0} /></Reveal>
          ))}
        </div>
      </section>

      <Quote>Animation is the art of giving silence a heartbeat.</Quote>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
          {awards.map((a) => (
            <Reveal key={a.award}>
              <p className="font-wide text-[10px] text-ember">{a.year}</p>
              <p className="mt-3 text-sm">{a.award}</p>
              <p className="mt-1 font-serif text-lg italic text-muted-foreground">{a.project}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 pt-32 md:grid-cols-2 md:px-10">
        <Reveal><img src={images.portrait} alt="Portrait of Seymur Abdullayev" loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full max-w-md object-cover" /></Reveal>
        <Reveal>
          <p className="font-serif text-3xl leading-snug md:text-4xl">Director, animator and screenwriter from Baku — founder of Piktolix, building room for creative freedom in Azerbaijani animation.</p>
          <Link to="/profile" className="mt-10 inline-block border-b border-ember pb-1 font-wide text-[10px] hover:text-ember">Profile</Link>
        </Reveal>
      </section>
    </>
  );
}
