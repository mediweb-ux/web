import { Logo, LogoImage, LogoText } from "@/components/logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/MediWeb_logo_crop.png",
    alt: "MediWeb Solutions",
    title: "MediWeb Solutions",
    url: "/",
  },
  tagline = "Tre unike tjenester - på samme sted!",
  menuItems = [
    {
      title: "Tjenester",
      links: [
        { text: "Webutvikling", url: "/tjenester/webutvikling" },
        { text: "Legetjenester", url: "/tjenester/legetjenester" },
        { text: "Kursvirksomhet", url: "/tjenester/kursvirksomhet" },
      ],
    },
    {
      title: "Firma",
      links: [
        { text: "Om oss", url: "/om-oss" },
        { text: "Nyheter", url: "/nyheter" },
        { text: "Priser", url: "/priser" },
        { text: "Kontakt oss", url: "/kontakt" },
      ],
    },
    {
      title: "Ressurser",
      links: [
        { text: "Hjelp", url: "/hjelp" },
        { text: "Logg inn", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 MediWeb Solutions.",
  bottomLinks = [
    { text: "Brukervilkår", url: "/brukervilkar" },
    { text: "Personvernerklæring", url: "/personvern" },
  ],
}: FooterProps) => {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-8">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="/">
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                  <LogoText className="text-2xl">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-16 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
