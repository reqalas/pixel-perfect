import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectCard, Quote, Reveal, VideoBackground, Newsletter, meta } from "@/components/site";
import { awards, featuredSlugs, images, projects, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => meta("Seymur Abdullayev — Animator, Motion Designer & Director", "Director, 2D & 3D animator and motion designer from Baku. Award-winning animation, documentaries and original series."),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) => featuredSlugs.includes(p.slug)).sort((a, b) => featuredSlugs.indexOf(a.slug) - featuredSlugs.indexOf(b.slug));
  return (
    <>
      <h1 className="sr-only">Seymur Abdullayev</h1>
      <section className="home-showreel relative aspect-video overflow-hidden">
        {site.showreelUrl ? (
          <VideoBackground url={site.showreelUrl} start={site.showreelStart} />
        ) : (
          <img src={images.hero} alt="Cinematic still overlooking Baku at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-contain" />
        )}
      </section>
      <section className="home-intro mx-auto px-6 py-16 text-center md:py-20">
        <p className="home-tagline font-serif text-4xl italic md:text-5xl">{site.tagline}</p>
        <p className="mt-5 text-muted-foreground">{site.title}</p>
        <Newsletter />
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pt-32 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-label text-[11px] text-muted-foreground">Selected Work</h2>
          <Link to="/films" className="font-label text-[10px] hover:opacity-60">All films →</Link>
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
              <p className="font-label text-[10px] text-foreground">{a.year}</p>
              <p className="mt-3 text-sm">{a.award}</p>
              <p className="mt-1 font-serif text-lg italic text-muted-foreground">{a.project}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 pt-32 md:grid-cols-2 md:px-10">
        <Reveal><img src={images.portrait} alt="Portrait of Seymur Abdullayev" loading="lazy" width={1440} height={1920} className="aspect-[3/4] w-full max-w-md object-contain" /></Reveal>
        <Reveal>
          <p className="font-sans text-xl leading-relaxed md:text-2xl">Director, animator and screenwriter from Baku — founder of Piktolix, building room for creative freedom in Azerbaijani animation.</p>
          <Link to="/profile" className="mt-10 inline-block border-b border-foreground pb-1 font-label text-[10px] hover:opacity-60">Profile</Link>
        </Reveal>
      </section>
    </>
  );
}
