import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, meta } from "@/components/site";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — Seymur Abdullayev", "Get in touch with Seymur Abdullayev for animation, motion design and directing collaborations."),
  component: Contact,
});

const field = "w-full border-b border-border bg-transparent py-3 outline-none transition focus:border-ember placeholder:text-muted-foreground";

function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Hello from " + f.name)}&body=${body}`;
  };
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk" />
      <section className="mx-auto grid max-w-[1600px] gap-20 px-6 md:grid-cols-2 md:px-10">
        <form onSubmit={submit} className="space-y-8">
          <label className="block"><span className="sr-only">Name</span><input required maxLength={100} placeholder="Name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
          <label className="block"><span className="sr-only">Email</span><input required type="email" maxLength={255} placeholder="Email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
          <label className="block"><span className="sr-only">Message</span><textarea required maxLength={2000} rows={5} placeholder="Message" className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
          <button className="border border-ember px-8 py-4 font-wide text-[10px] text-ember transition hover:bg-ember hover:text-primary-foreground">Send</button>
        </form>
        <div className="space-y-6 font-serif text-2xl md:text-3xl">
          <a href={`mailto:${site.email}`} className="block break-all hover:text-ember">{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:text-ember">{site.phone}</a>
          <p className="text-muted-foreground">{site.location}</p>
          <div className="flex gap-6 pt-6">
            {site.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="font-wide text-[10px] hover:text-ember">{s.label}</a>)}
          </div>
        </div>
      </section>
    </>
  );
}
