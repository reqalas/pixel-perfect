import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Reveal, meta } from "@/components/site";
import { originals } from "@/data/site";

export const Route = createFileRoute("/originals")({
  head: () => meta("Originals — In Development | Seymur Abdullayev", "Original animated series written and directed by Seymur Abdullayev, currently in development."),
  component: Originals,
});

function Originals() {
  return (
    <>
      <PageHero eyebrow="Originals — In Development" title="Coming Soon" intro="Original series I write and direct. Not yet released." />
      <div className="space-y-32">
        {originals.map((o, i) => (
          <Reveal key={o.title}>
            <section className={`mx-auto grid max-w-[1600px] items-center gap-12 px-6 md:grid-cols-2 md:px-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative overflow-hidden">
                <img src={o.image} alt={`${o.title} key art`} loading="lazy" className="aspect-square w-full object-contain" />
                <span className="absolute left-5 top-5 border border-foreground px-3 py-1 font-label text-[15px] text-foreground">Coming Soon</span>
              </div>
              <div>
                <span className="font-label text-[15px] text-muted-foreground">Status · <span className="text-foreground">{o.status}</span></span>
                <h2 className="mt-6 font-label text-3xl  md:text-5xl">{o.title}</h2>
                {o.subtitle && <p className="mt-3 font-sans text-2xl italic text-muted-foreground">{o.subtitle}</p>}
                <p className="mt-8 font-sans text-2xl leading-snug">{o.logline}</p>
                <p className="mt-6 font-label text-[15px] text-muted-foreground">{o.role}</p>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
      <div className="mt-32 text-center">
        <p className="font-sans text-3xl italic">Interested in collaborating or partnering?</p>
        <Link to="/contact" className="mt-8 inline-block border border-foreground px-8 py-4 font-label text-[15px] text-foreground transition hover:opacity-60">Get in touch</Link>
      </div>
    </>
  );
}
