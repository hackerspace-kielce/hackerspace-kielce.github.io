const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/example" },
  { label: "Facebook", href: "https://www.facebook.com/example" },
  { label: "Discord", href: "https://discord.gg/example" },
  { label: "GitHub", href: "https://github.com/example" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold text-white">Hackerspace Kielce</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Lokalna społeczność dla programistów, makerów, osób od AI, robotyki, elektroniki,
            cyberbezpieczeństwa i open-source. Budujemy miejsce, w którym można razem tworzyć,
            uczyć się i testować pomysły w Kielcach.
          </p>
        </div>

        <div className="md:justify-self-end">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-steel">Znajdź nas</p>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm text-slate-300">
            {socials.map((social) => (
              <li key={social.label}>
                <a className="hover:text-accent-soft" href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-400">Kielce, Polska • statyczna strona bez backendu</p>
        </div>
      </div>
    </footer>
  );
}
