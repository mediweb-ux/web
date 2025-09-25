import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const HomeHero = ({
  heading = "Velkommen til MediWeb Solutions",
  description = "Hos oss finner du en unik kombinasjon av medisinsk ekspertise og teknologisk innovasjon. Vi er dedikert til å levere skreddersydde digitale løsninger på web, vi kan levere anestesilegetjenster og vi har en økende kursvirksomhet.",
  button = {
    text: "Les mer om oss",
    url: "/om-oss",
  },
}: HeroProps) => {
  return (
    <section id="hero" aria-label="Hjemmeside introduksjon">
      <div className="relative w-full h-full bg-blue-800/5">
        <div className="py-44 text-center">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-balance lg:text-lg mt-10">
            {description}
          </p>

          <Button asChild size="lg" className="mt-20 mx-auto hover:bg-gray-700">
          <Link href={button.url}>{button.text}</Link>
        </Button>
        </div>
      </div> 
    </section>
  );
};

export { HomeHero };