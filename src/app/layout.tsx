import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "Hackerspace Kielce",
    template: "%s | Hackerspace Kielce",
  },
  description: "Społeczność hackerspace w Kielcach dla programistów, makerów, osób od AI, robotyki, elektroniki i cyberbezpieczeństwa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:42px_42px] opacity-30"></div>
          <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
