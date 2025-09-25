import ContactForm from "@/components/contact-form";
import Image from "next/image";
import Link from "next/link";

export default function Kontakt() {
  return (
    <>
        <section id="kontakt-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/20">
                <img src="/bg-kontakt.png" className="absolute w-full h-full object-cover mix-blend-overlay" />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Kontakt oss
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-green-50" id="kontakt" aria-label="Kontaktskjema">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <ContactForm />
            </div>
        </section>
    </>
  );
}
