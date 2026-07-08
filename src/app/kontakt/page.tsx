import type { Metadata } from "next";
import SectionHeading from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt do społeczności Hackerspace Kielce.",
};

const channels = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/example",
    text: "Placeholder dla komunikacji zawodowej i partnerstw."
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/example",
    text: "Placeholder dla lokalnych ogłoszeń i wydarzeń społecznościowych."
  },
  {
    name: "Discord",
    href: "https://discord.gg/example",
    text: "Placeholder dla codziennej komunikacji, pytań i organizacji spotkań."
  },
  {
    name: "GitHub",
    href: "https://github.com/example",
    text: "Placeholder dla projektów open-source, dokumentacji i eksperymentów."
  }
];

export default function Kontakt() {
  return (
    <>
      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Kontakt"
          title="Napisz, jeśli chcesz współtworzyć hackerspace w Kielcach"
          text="Ta wersja strony jest w pełni statyczna, omijamy backendowy formularz i podajemy proste kanały kontaktu. Możesz później podmienić placeholdery na realne profile i adresy."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="panel p-7">
            <h3 className="text-2xl font-semibold text-white">Kanały</h3>
            <div className="mt-6 grid gap-4">
              {channels.map((channel) => (
                <a
                  key={channel.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-accent/40 hover:bg-white/10"
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-white">{channel.name}</span>
                    <span className="font-mono text-sm text-accent-soft">link</span>
                  </div>
                  <p className="mt-3 leading-7 text-slate-300">{channel.text}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="panel p-7">
            <h3 className="text-2xl font-semibold text-white">Kontakt lokalny</h3>
            <div className="mt-5 space-y-4 leading-7 text-slate-300">
              <p>
                Miasto: <span className="text-white">Kielce, Polska</span>
              </p>
              <p>
                E-mail placeholder: <a className="text-accent-soft hover:text-white" href="mailto:kontakt@example.com">kontakt@example.com</a>
              </p>
              <p>
                Jeśli chcesz pomóc organizacyjnie, zaproponować temat warsztatu albo wesprzeć rozwój miejsca,
                odezwij się dowolnym kanałem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 pb-24">
        <div className="panel p-8 sm:p-10">
          <p className="eyebrow">Bez backendu</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Prosty kontakt, prosty deployment</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Strona jest przygotowana jako statyczny serwis Next.js. Dzięki temu można ją wdrożyć na GitHub
            Pages, Netlify, Cloudflare Pages lub dowolny hosting plików statycznych bez utrzymywania serwera.
          </p>
        </div>
      </section>
    </>
  );
}
