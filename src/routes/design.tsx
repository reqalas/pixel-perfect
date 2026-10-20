import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlateGrid, meta } from "@/components/site";
import { designWork } from "@/data/site";

export const Route = createFileRoute("/design")({
  head: () => meta("Design & Character Art — Seymur Abdullayev", "Character design, storyboards, backgrounds and graphic design by Seymur Abdullayev."),
  component: () => (
    <>
      <PageHero eyebrow="Design & Character Art" title="Design" intro="Characters, storyboards, backgrounds and graphic work." />
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {designWork.length > 0 ? (
          <PlateGrid items={designWork} />
        ) : (
          <p className="font-wide text-[10px] text-muted-foreground">Gallery coming soon.</p>
        )}
      </div>
    </>
  ),
});
