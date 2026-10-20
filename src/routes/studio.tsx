import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Quote, StudioVideoGrid, meta } from "@/components/site";
import { studio, studioVideos } from "@/data/site";

export const Route = createFileRoute("/studio")({
  head: () => meta("Piktolix Studio — Seymur Abdullayev", "Piktolix Creative Studio, an animation studio founded in 2025 in Baku by Seymur Abdullayev."),
  component: () => (
    <>
      <PageHero eyebrow="Studio · Founded 2025" title="Piktolix" intro="An animation studio focused on original, internationally-minded creative work, built to amplify creative freedom within the Azerbaijani animation industry." />
      <section className="mx-auto max-w-5xl px-6" aria-label="Piktolix Studio">
        <img src={studio.image} alt="Piktolix Studio logo" width={1920} height={1080} className="h-auto w-full" />
      </section>
      <section className="mx-auto mt-16 max-w-[1600px] px-6 md:px-10" aria-labelledby="studio-videos-title">
        <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-8">
          <h2 id="studio-videos-title" className="min-w-0 font-wide text-sm">Videos</h2>
          <a href={studio.channelUrl} target="_blank" rel="noreferrer" className="shrink-0 font-wide text-[10px] text-muted-foreground transition-colors hover:text-ember">YouTube ↗</a>
        </div>
        <StudioVideoGrid videos={studioVideos} />
      </section>
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
