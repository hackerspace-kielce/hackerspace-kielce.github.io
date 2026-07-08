import type { Metadata } from "next";
import SectionHeading from "../../components/SectionHeading";
import SocialLinks from "../../components/SocialLinks";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt do społeczności Hackerspace Kielce.",
};

const channels = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/kielce-hackerspace/",
    text: "Dla komunikacji zawodowej i partnerstw.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98A2.99 2.99 0 0 0 7.97 6.48 2.99 2.99 0 0 0 4.98 3.5Zm.02 4.94H2V21h3V8.44Zm7.5 0H9.5V21h3v-6.39c0-3.32 4.25-3.58 4.25 0V21h3v-7.86c0-5.17-5.56-4.99-7.75-2.44V8.44Z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.gg/sVvB8QmDkA",
    text: "Nasz Discord.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3c-.18.31-.38.72-.52 1.03-1.55-.23-3.09-.23-4.64 0-.14-.34-.35-.73-.53-1.03A19.74 19.74 0 0 0 3.675 4.37C.594 9.025-.293 13.516.047 18.001a20.08 20.08 0 0 0 6.019 3.06c.45-.61.85-1.24 1.18-1.9a13.17 13.17 0 0 1-2.08-1.02c.17-.12.34-.25.5-.38 4.87 2.24 10.15 2.24 15 0 .16.13.33.27.5.38-.64.35-1.32.66-2.02.93.35.63.75 1.25 1.2 1.86a20.07 20.07 0 0 0 6.02-3.06c.35-4.49-.51-8.98-3.59-13.63ZM8.02 15.11c-1.13 0-2.04-1.03-2.04-2.3 0-1.26.91-2.29 2.04-2.29 1.14 0 2.05 1.03 2.04 2.29 0 1.27-.91 2.3-2.04 2.3Zm7.96 0c-1.13 0-2.04-1.03-2.04-2.3 0-1.26.91-2.29 2.04-2.29 1.14 0 2.05 1.03 2.04 2.29 0 1.27-.9 2.3-2.04 2.3Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/hackerspace-kielce",
    text: "Nasze repozytoria.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.54 1.05 1.54 1.05.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

export default function Kontakt() {
  return (
    <>
      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Kontakt"
          title="Napisz, jeśli chcesz współtworzyć hackerspace w Kielcach"
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
                    <div className="flex items-center gap-3">
                      {channel.icon}
                      <span className="text-lg font-semibold text-white">{channel.name}</span>
                    </div>
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
                Discord: <a className="text-accent-soft hover:text-white" href="https://discord.gg/sVvB8QmDkA">Discord</a>
              </p>
              <p>
                Jeśli chcesz pomóc organizacyjnie, zaproponować temat warsztatu albo wesprzeć rozwój miejsca,
                odezwij się dowolnym kanałem.
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
