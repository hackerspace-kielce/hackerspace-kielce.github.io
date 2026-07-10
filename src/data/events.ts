export type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

export const events: Event[] = [
  {
    title: "AI Pub Meet w Kielcach! (wydarzenie zaprzyjaźnionej grupy)",
    date: "Czwartek, 23 lipca 2026",
    time: "18:00",
    location: "Hollywood Pub (ul. Wesoła 28, Kielce)",
    description:
      "Przyjdźcie porozmawiać, poznać ludzi z branży i napić się czegoś dobrego (zamówienia przy barze we własnym zakresie). Wydarzenie jest otwarte, bez rejestracji dla wszystkich zainteresowanych, niezależnie od poziomu wiedzy o AI.",
  },
];
