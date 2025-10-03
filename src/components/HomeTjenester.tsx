import {
  Book,
  Earth,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface HomeTjenesterProps {
  heading?: string;
  reasons?: Reason[];
}

const HomeTjenester = ({
  heading = "Våre tjenester",
  reasons = [
    {
      title: "Webutvikling",
      description:
        "Vi har drevet med webutvikling siden Lynx var en av de kuleste nettleserne. Vi har vært med på utviklingen og er klar til å ta ditt prosjekt til neste steg!",
      icon: <Earth className="size-6 text-white" />,
      href: "/tjenester/webutvikling",
    },
    {
      title: "Legetjenester",
      description:
        "Vi kan tilby over 20 års erfaring som anestesilege fra både sykehus og det private. Vi kan tilby ulike legetjenester tilpasset ditt behov, ta kontakt for nærmere avtale!",
      icon: <Stethoscope className="size-6 text-white" />,
      href: "/tjenester/legetjenester",
    },
    {
      title: "Kursvirksomhet",
      description:
        "Vi har samlet denne erfaringen og kan tilby ulike kurs, både som e-læring og som instruktørledede kurs. Våre instruktører har lang erfaring på det de underviser om!",
      icon: <Book className="size-6 text-white" />,
      href: "/tjenester/kursvirksomhet",
    },
  ],
}: HomeTjenesterProps) => {
  return (
    <section className="py-32" aria-label="Våre tjenester">
      <div className="container mx-auto px-8">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {reason.icon}
              </div>
              <Link href={reason.href} className="hover:underline hover:transform-stroke hover:transition-transform underline-offset-3"><h3 className="mb-2 text-xl font-semibold">{reason.title}</h3></Link>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HomeTjenester };