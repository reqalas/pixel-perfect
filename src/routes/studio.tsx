import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Quote, meta } from "@/components/site";
import { images } from "@/data/site";

export const Route = createFileRoute("/studio")({
  head: () => meta("Piktolix Studio — Seymur Abdullayev", "Piktolix Creative Studio, an animation studio founded in 2025 in Baku by Seymur Abdullayev."),
  component: () => (
    <>
      <PageHero eyebrow="Studio · Founded 2025" title="Piktolix" intro="An animation studio focused on original, internationally-minded creative work, built to amplify creative freedom within the Azerbaijani animation industry." />
      <img src={images.stillAnim} alt="Piktolix animation still" loading="lazy" className="aspect-[21/9] w-full object-cover" />
      <Quote>Freedom is the first frame.</Quote>
      <section className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
        {[["Crambone", "2D Animator / Character Creator"], ["Artild Creative Agency", "Project Member / Designer"]].map(([n, r]) => (
          <div key={n} className="border-t border-border pt-6">
            <p className="font-wide text-sm tracking-[0.2em]">{n}</p>
            <p className="mt-2 font-serif text-xl italic text-muted-foreground">{r}</p>
          </div>
        ))}
      </section>
    </>
  ),
});
