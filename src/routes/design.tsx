import { createFileRoute } from "@tanstack/react-router";
import { Lightbox, PageHero, meta } from "@/components/site";
import { designWork } from "@/data/site";

export const Route = createFileRoute("/design")({
  head: () => meta("Design & Character Art — Seymur Abdullayev", "Character design, storyboards, vector backgrounds and graphic design by Seymur Abdullayev."),
  component: () => (
    <>
      <PageHero eyebrow="Design & Character Art" title="Design" intro="Characters, storyboards, backgrounds and graphic work." />
      <div className="mx-auto max-w-[1600px] px-6 md:px-10"><Lightbox items={designWork} /></div>
    </>
  ),
});
