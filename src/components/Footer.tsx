import SocialLinks from "./SocialLinks";

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
          <SocialLinks />
          <p className="mt-5 text-sm text-slate-400">Kielce, Polska •</p>
        </div>
      </div>
    </footer>
  );
}
