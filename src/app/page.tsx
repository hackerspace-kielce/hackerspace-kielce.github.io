import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import { events } from "../data/events";

export const metadata: Metadata = {
  title: "Hackerspace Kielce",
  description: "Społeczność hackerspace w Kielcach dla programistów, makerów, osób od AI, robotyki, elektroniki i cyberbezpieczeństwa.",
};

const highlights = [
  "Programowanie i open-source",
  "AI, automatyzacja i dane",
  "Elektronika, IoT i lutowanie",
  "Robotyka i embedded",
  "Cyberbezpieczeństwo i homelab"
];

export default function Home() {
  return (
    <>
      <section className="shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Kielce • Community • Build Together</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Miejsce dla ludzi, którzy wolą <span className="text-accent-soft">budować</span> niż tylko scrollować.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hackerspace Kielce to lokalna społeczność dla osób z miasta i regionu: programistów,
              makerów, fanów AI, robotyki, elektroniki, bezpieczeństwa i open-source. Spotykamy się,
              uczymy od siebie i wspólnie uruchamiamy projekty.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/dolacz">Dołącz do społeczności</Link>
              <Link className="button-secondary" href="/wydarzenia">Zobacz wydarzenia</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>

          <div className="panel relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-400/10"></div>
            <div className="relative">
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent-soft">Status lokalny</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-base-900/70 p-5">
                  <p className="text-sm text-steel">Miasto</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Kielce</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-base-900/70 p-5">
                  <p className="text-sm text-steel">Tryb</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Offline + online</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-base-900/70 p-5">
                  <p className="text-sm text-steel">Fokus</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Warsztaty i projekty</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-base-900/70 p-5">
                  <p className="text-sm text-steel">Atmosfera</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Przyjazna, techniczna</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-5">
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent-soft">Cel</p>
                <p className="mt-3 text-slate-100">
                  Zbudować w Kielcach aktywną, otwartą społeczność ludzi, którzy chcą razem tworzyć
                  sprzęt, software i lokalne inicjatywy technologiczne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <SectionHeading
          eyebrow="Dlaczego my"
          title="Hackerspace z energią miejskiego laboratorium"
          text="Nie musisz być ekspertem. Wystarczy ciekawość, chęć zrobienia czegoś praktycznego i gotowość do współpracy z ludźmi z Kielc i okolic."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="panel p-6">
            <h3 className="text-xl font-semibold text-white">Lokalność</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Stawiamy na spotkania w Kielcach i budowanie sieci kontaktów tu, na miejscu. To społeczność
              dla regionu, nie anonimowy serwer bez kontekstu.
            </p>
          </article>
          <article className="panel p-6">
            <h3 className="text-xl font-semibold text-white">Praktyka</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Kodujemy, lutujemy, debugujemy, drukujemy 3D, rozmawiamy o modelach AI i bezpieczeństwie.
              Mniej slajdów, więcej działania.
            </p>
          </article>
          <article className="panel p-6">
            <h3 className="text-xl font-semibold text-white">Otwartość</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Miejsce dla studentów, specjalistów, hobbystów i osób wracających do technologii po przerwie.
              Liczy się kultura współpracy.
            </p>
          </article>
        </div>
      </section>

      <section className="shell py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Najbliższe spotkania"
            title="Przykładowe wydarzenia społeczności"
            text="Startujemy od kameralnych spotkań i warsztatów, ale chcemy rozwijać regularny rytm dla całego lokalnego środowiska tech."
          />
          <Link className="button-secondary self-start sm:self-auto" href="/wydarzenia">Pełny kalendarz</Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="panel p-6">
              <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent-soft">{event.date}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{event.title}</h3>
              <p className="mt-4 text-sm text-steel">
                {event.time} • {event.location}
              </p>
              <p className="mt-4 leading-7 text-slate-300">{event.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell py-16 pb-24">
        <div className="panel overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Dołącz do nas</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Jeśli mieszkasz w Kielcach albo blisko, wpadaj na pierwsze spotkanie.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Nie potrzebujesz gotowego portfolio. Szukamy ludzi, którzy chcą uczyć się, budować i
                współtworzyć lokalną scenę technologiczną.
              </p>
            </div>
            <Link className="button-primary" href="/kontakt">Napisz do nas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
