import type { Metadata } from "next";
import SectionHeading from "../../components/SectionHeading";
import { events } from "../../data/events";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const metadata: Metadata = {
  title: "Wydarzenia",
  description: "Przykładowe wydarzenia hackerspace i społeczności tech w Kielcach.",
};

export default function Wydarzenia() {
  return (
    <>
      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Wydarzenia"
          title="Spotkania, warsztaty i techniczne wieczory w Kielcach"
        />

        <div className="mt-10 grid gap-6">
          {events.length === 0 ? (
            <p className="text-slate-400">Brak nadchodzących wydarzeń.</p>
          ) : (
            events.map((event) => {
              const slug = slugify(event.title);
              return (
                <article
                  id={slug}
                  key={slug}
                  className="panel grid gap-6 p-6 md:grid-cols-[220px_1fr] md:p-8"
                >
                  <div className="rounded-2xl border border-white/10 bg-base-900/80 p-5">
                    <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent-soft">{event.date}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{event.time}</p>
                    <p className="mt-4 text-sm leading-6 text-steel">{event.location}</p>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-3">
                      <a
                        href={`/wydarzenia#${slug}`}
                        className="inline-flex items-center gap-3 text-2xl font-semibold text-white hover:text-accent-soft"
                        aria-label={`Permalink to ${event.title}`}
                      >
                        <span>{event.title}</span>
                      </a>
                    </h3>
                    <p className="mt-4 max-w-3xl leading-7 text-slate-300">{event.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="tag">otwarte spotkanie</span>
                      <span className="tag">Kielce</span>
                      <span className="tag">społeczność tech</span>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      <section className="shell py-16 pb-24">
        <div className="panel p-8 sm:p-10">
          <h2 className="text-3xl font-semibold text-white">Pomysł na kolejne formaty</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
              Lightning talks o AI, DevOps, hardware i bezpieczeństwie.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
              Otwarte wieczory projektowe dla osób, które chcą popracować razem na miejscu.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
              Warsztaty lutowania, ESP32, Raspberry Pi i prototypowania urządzeń.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
              Spotkania integrujące lokalne osoby z branży, uczelni i niezależnych twórców.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
