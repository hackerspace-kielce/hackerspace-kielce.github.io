interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
}

export default function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p>}
    </div>
  );
}
