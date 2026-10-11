import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site";
import { awards, press } from "@/data/site";

export const Route = createFileRoute("/awards")({
  head: () => meta("Awards & Recognition — Seymur Abdullayev", "Festival wins and awards: ANIMA Festival, Netty Award, MilliNet Award and Animafilm."),
  component: () => (
    <>
      <PageHero eyebrow="Recognition" title="Awards" />
      <ul className="mx-auto max-w-5xl px-6">
        {awards.map((a) => (
          <li key={a.award} className="grid gap-2 border-t border-border py-8 md:grid-cols-[120px_1fr_1fr]">
            <span className="font-wide text-[10px] text-ember">{a.year}</span>
            <span className="text-lg">{a.award}</span>
            <span className="font-serif text-xl italic text-muted-foreground">{a.project}</span>
          </li>
        ))}
      </ul>
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="font-wide text-[11px] text-muted-foreground">Press & Media</h2>
        {press.length ? (
          <ul className="mt-6 space-y-3">{press.map((p) => <li key={p.href}><a href={p.href} className="hover:text-ember">{p.title}</a></li>)}</ul>
        ) : <p className="mt-6 font-serif text-xl italic text-muted-foreground">Coming soon.</p>}
      </section>
    </>
  ),
});
