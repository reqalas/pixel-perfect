import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, meta } from "@/components/site";
import { experience, images, languages, site, skills, software } from "@/data/site";

export const Route = createFileRoute("/profile")({
  head: () => meta("Profile — Seymur Abdullayev", "Biography, experience and skills of Seymur Abdullayev, creative director, animator and motion designer."),
  component: Profile,
});

const Tag = ({ t }: { t: string }) => <span className="border border-border px-4 py-2 text-xs tracking-wider">{t}</span>;

function Profile() {
  return (
    <>
      <PageHero eyebrow="Profile" title="Seymur Abdullayev" />
      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-[2fr_3fr] md:px-10">
        <img src={images.portrait} alt="Portrait of Seymur Abdullayev" width={1440} height={1920} className="aspect-[3/4] w-full object-cover" />
        <div className="space-y-10">
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">Seymur Abdullayev is a director, 2D & 3D animation artist, motion designer, and screenwriter based in Baku, Azerbaijan. He is the founder of Piktolix, an animation studio built to amplify creative freedom within the Azerbaijani animation industry. His years working in television, alongside the Crambone animation team, were a formative phase in shaping his artistic voice.</p>
          <p className="leading-relaxed text-muted-foreground">Creative Director, Animator & Motion Designer with 8+ years of multimedia experience. Founder of Piktolix, delivering international-standard animation and motion graphics. Contributed as an animator to multiple award-winning projects and currently leads two original animated series.</p>
          {site.cvUrl ? (
            <a href={site.cvUrl} download className="inline-block border border-ember px-6 py-3 font-wide text-[10px] text-ember hover:bg-ember hover:text-primary-foreground">Download CV</a>
          ) : (
            <span className="inline-block border border-border px-6 py-3 font-wide text-[10px] text-muted-foreground">CV — coming soon</span>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pt-32 md:px-10">
        <h2 className="font-wide text-[11px] text-muted-foreground">Experience</h2>
        <ol className="mt-10 border-l border-border">
          {experience.map((e) => (
            <Reveal key={e.company}>
              <li className="relative grid gap-2 py-6 pl-8 md:grid-cols-[200px_1fr_1fr]">
                <span className="absolute -left-[5px] top-8 h-2 w-2 rounded-full bg-ember" />
                <span className="font-wide text-[10px] text-ember">{e.period}</span>
                <span className="text-lg">{e.company}</span>
                <span className="font-serif text-lg italic text-muted-foreground">{e.role}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 pt-32 md:grid-cols-3 md:px-10">
        {[["Skills", skills], ["Software", software], ["Languages", languages]].map(([h, list]) => (
          <div key={h as string}>
            <h2 className="font-wide text-[11px] text-muted-foreground">{h as string}</h2>
            <div className="mt-6 flex flex-wrap gap-2">{(list as string[]).map((t) => <Tag key={t} t={t} />)}</div>
          </div>
        ))}
      </section>
    </>
  );
}
