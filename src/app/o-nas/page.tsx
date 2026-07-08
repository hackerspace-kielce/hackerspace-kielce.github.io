import type { Metadata } from "next";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "O nas",
  description: "Poznaj społeczność Hackerspace Kielce i obszary, które chcemy rozwijać lokalnie.",
};

const areas = [
  "programowanie i web",
  "sztuczna inteligencja i ML",
  "elektronika i embedded",
  "robotyka i automatyka",
  "cyberbezpieczeństwo",
  "open-source i self-hosting"
];

export default function ONas() {
  return (
    <>
      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="O nas"
          title="Budujemy społeczność technologiczną zakorzenioną w Kielcach"
          text="Hackerspace Kielce to inicjatywa dla osób, które chcą spotykać się lokalnie, dzielić wiedzą i tworzyć rzeczy razem: od aplikacji i automatyzacji po hardware, bezpieczeństwo i prototypowanie."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="panel p-7">
            <h3 className="text-2xl font-semibold text-white">Jak działamy</h3>
            <div className="mt-5 space-y-4 leading-7 text-slate-300">
              <p>
                Chcemy rozwijać w Kielcach miejsce, które łączy klimat meetupów, warsztatów i roboczych
                wieczorów nad projektami. Bez korporacyjnej spiny, ale z technicznym konkretem.
              </p>
              <p>
                Interesują nas zarówno początkujący, jak i doświadczeni praktycy. Wartością jest gotowość
                do dzielenia się wiedzą, eksperymentowania i wspierania innych.
              </p>
              <p>
                Ta strona jest statyczna i prosta celowo: najważniejsza jest społeczność, spotkania i
                energia ludzi z regionu świętokrzyskiego.
              </p>
            </div>
          </div>

          <div className="panel p-7">
            <h3 className="text-2xl font-semibold text-white">Obszary zainteresowań</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span key={area} className="tag">{area}</span>
              ))}
            </div>
            <p className="mt-6 leading-7 text-slate-300">
              If Twój temat nie mieści się idealnie w tej liście, to też jest okej. Hackerspace ma być
              miejscem łączenia ludzi, nie zamykania ich w szufladkach.
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-16 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="panel p-6">
            <p className="eyebrow">Misja</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Tworzyć lokalne środowisko</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Chcemy, żeby osoby techniczne z Kielc miały swoje miejsce do poznawania się i wspólnej pracy.
            </p>
          </article>
          <article className="panel p-6">
            <p className="eyebrow">Forma</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Spotkania i warsztaty</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Regularne meetupy, tematyczne sesje robocze, lightning talki i praktyczne wieczory projektowe.
            </p>
          </article>
          <article className="panel p-6">
            <p className="eyebrow">Kultura</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Otwartość i szacunek</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Szukamy ludzi ciekawych świata, którzy potrafią współpracować i budować bez gatekeepingu.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
