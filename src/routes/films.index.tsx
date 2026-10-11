import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ProjectCard, Reveal, meta } from "@/components/site";
import { categories, projects } from "@/data/site";

export const Route = createFileRoute("/films/")({
  head: () => meta("Films — Seymur Abdullayev", "Animation, documentary and international film projects by Seymur Abdullayev."),
  component: Films,
});

function Films() {
  return (
    <>
      <PageHero eyebrow="Films" title="The Work" intro="Animation, documentary and international productions." />
      <div className="mx-auto max-w-[1600px] space-y-28 px-6 md:px-10">
        {categories.map((c) => (
          <section key={c.id} id={c.id}>
            <h2 className="mb-10 font-wide text-[11px] text-ember">{c.label}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {projects.filter((p) => p.category === c.id).map((p) => (
                <Reveal key={p.slug}><ProjectCard p={p} /></Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
