import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Dołącz",
  description: "Dołącz do lokalnej społeczności hackerspace w Kielcach.",
};

export default function Dolacz() {
  return (
    <>
      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Dołącz"
          title="Najlepszy moment, żeby wejść do społeczności, to teraz"
          text="Jesteśmy na etapie budowania lokalnej sieci ludzi, więc łatwo wpłynąć na kierunek działań, tematy spotkań i format współpracy."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="panel p-7">
            <h3 className="text-2xl font-semibold text-white">Dla kogo</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>Programiści i programistki pracujący z webem, backendem, mobile lub narzędziami.</li>
              <li>Makerzy i osoby budujące rzeczy fizyczne: elektronika, druk 3D, embedded, IoT.</li>
              <li>Ludzie od AI, automatyzacji, danych, robotyki i bezpieczeństwa.</li>
              <li>Studenci, hobbyści i osoby zmieniające branżę, jeśli chcą działać praktycznie.</li>
            </ul>
          </div>

          <div className="panel p-7">
            <h3 className="text-2xl font-semibold text-white">Jak dołączyć</h3>
            <ol className="mt-5 space-y-4 text-slate-300">
              <li>1. Napisz krótką wiadomość przez formularz kontaktowy lub Discord.</li>
              <li>2. Wpadnij na otwarte spotkanie albo warsztat w Kielcach.</li>
              <li>3. Powiedz, co Cię interesuje i w jakich projektach chcesz działać.</li>
              <li>4. Jeśli chcesz, pomóż przy organizacji kolejnych spotkań i inicjatyw.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="shell py-16 pb-24">
        <div className="panel overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Kanały społeczności</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Zacznij od prostego kontaktu</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Nie zbieramy skomplikowanych formularzy i nie potrzebujemy backendu. Wystarczy wiadomość,
                obecność na spotkaniu i chęć współtworzenia lokalnej społeczności w Kielcach.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="button-primary" href="/kontakt">Skontaktuj się</Link>
              <a className="button-secondary" href="https://discord.gg/example" target="_blank" rel="noreferrer">
                Wejdź na Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
