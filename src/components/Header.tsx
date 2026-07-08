"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", label: "Start" },
  { path: "/o-nas", label: "O nas" },
  { path: "/wydarzenia", label: "Wydarzenia" },
  { path: "/dolacz", label: "Dołącz" },
  { path: "/kontakt", label: "Kontakt" }
];

const normalizePath = (value: string) => {
  if (value === "/") return "/";
  return value.replace(/\/+$/, "");
};

export default function Header() {
  const pathname = usePathname();
  const normalizedPath = normalizePath(pathname || "/");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base-950/85 backdrop-blur-xl">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label="Hackerspace Kielce - strona główna">
          <img
            src="/logo.png"
            alt="Logo Hackerspace Kielce"
            className="h-12 w-12 rounded-2xl border border-accent/30 bg-base-900 object-cover shadow-glow"
          />
          <span>
            <span className="block text-lg font-semibold">Hackerspace Kielce</span>
            <span className="block text-sm text-steel">Kod, hardware, społeczność</span>
          </span>
        </Link>

        <nav aria-label="Główna nawigacja">
          <ul className="flex flex-wrap items-center justify-end gap-2 text-sm sm:gap-3">
            {links.map((link) => {
              const active = normalizedPath === normalizePath(link.path);

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`rounded-full px-4 py-2 transition-colors duration-200 ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
