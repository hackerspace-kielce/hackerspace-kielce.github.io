import type { Metadata } from "next";
import SectionHeading from "../../components/SectionHeading";
import { events } from "../../data/events";

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
          text="Poniżej przykładowy kalendarz wydarzeń. Docelowo może służyć jako prosta, statyczna tablica dla lokalnej społeczności bez potrzeby stawiania backendu."
        />

        <div className="mt-10 grid gap-6">
          {events.map((event) => (
            <article key={event.title} className="panel grid gap-6 p-6 md:grid-cols-[220px_1fr] md:p-8">
              <div className="rounded-2xl border border-white/10 bg-base-900/80 p-5">
                <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent-soft">{event.date}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{event.time}</p>
                <p className="mt-4 text-sm leading-6 text-steel">{event.location}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{event.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="tag">otwarte spotkanie</span>
                  <span className="tag">Kielce</span>
                  <span className="tag">społeczność tech</span>
                </div>
              </div>
            </article>
          ))}
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
