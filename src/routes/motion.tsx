import { createFileRoute } from "@tanstack/react-router";
import { Lightbox, PageHero, meta } from "@/components/site";
import { motionWork } from "@/data/site";

export const Route = createFileRoute("/motion")({
  head: () => meta("Motion Design & Broadcast — Seymur Abdullayev", "Promos, titles and broadcast packages for Anewz TV (with CIBC) and Xezer TV."),
  component: () => (
    <>
      <PageHero eyebrow="Motion Design & Broadcast" title="Motion" intro="Promos, titles and broadcast packages for Anewz TV (in collaboration with CIBC) and Xezer TV." />
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {motionWork.length > 0 ? (
          <Lightbox items={motionWork} />
        ) : (
          <p className="font-wide text-[10px] text-muted-foreground">Gallery coming soon.</p>
        )}
      </div>
    </>
  ),
});
