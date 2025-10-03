import Image from "next/image";
import Link from "next/link";

export default function Personvern() {
  return (
    <>
        <section id="personvern-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/20">
                <Image 
                    src="/bg-personvern.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Personvern
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-blue-50" id="personvern" aria-label="Personvern">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi i MediWeb Solutions tar ditt personvern på alvor. 
                    Denne personvernerklæringen forklarer hvordan vi samler inn, bruker, lagrer og beskytter dine personopplysninger i samsvar med norsk lovgivning, 
                    inkludert <Link href="https://lovdata.no/dokument/NL/lov/2018-06-15-38" target="_blank" className="hover:underline text-blue-800">personopplysningsloven</Link> og <Link href="https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng" target="_blank" className="hover:underline text-blue-800">EUs personvernforordning (GDPR)</Link>.</p>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">1. Behandlingsansvarlig</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto"><strong className="font-bold">Tr&oslash;nnes MediWeb Solutions</strong> (heretter omtalt som <em className="italic">MediWeb Solutions</em>), org.nr 924803673, er behandlingsansvarlig for personopplysningene vi behandler. 
                    Kontaktinformasjon/postadresse: Lektor Musums gate 17, 7650 Verdal. Du kan komme i kontakt med oss ved &aring; bruke <Link href="/kontakt" className="hover:underline text-blue-800">v&aring;rt kontaktskjema</Link>.</p>
            
                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">2. Hvilke opplysninger vi samler inn</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi kan samle inn følgende typer personopplysninger:</p>
                <ul className="list-disc pl-4 mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                    <li>Navn</li>
                    <li>Kontaktinformasjon (e-postadresse, telefonnummer)</li>
                    <li>Demografisk informasjon (alder, kjønn, bosted)</li>
                    <li>Brukeratferd på vår nettside (cookies/informasjonskapsler, IP-adresse)</li>
                </ul>

                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi bruker Google Analytics for &aring; se p&aring; nettrafikk, slik at vi skal kunne gi deg den beste opplevelsen p&aring; v&aring;re nettsider.
                    Derfor vil vi gjerne bruke informasjonskapsler, men det er selvf&oslash;lgelig fritt fram &aring; avvise disse. Du kan ogs&aring; <Link href="https://policies.google.com/privacy" target="blank" className="hover:underline text-blue-800">lese mer om Googles personvern</Link>.
                </p>

                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">3. Form&aring;l med behandlingen</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi behandler dine personopplysninger for følgende formål:</p>
                <ul className="list-disc pl-4 mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                    <li>For å levere våre tjenester og produkter til deg</li>
                    <li>For å forbedre våre tjenester og tilpasse brukeropplevelsen</li>
                    <li>For å sende deg relevant informasjon og markedsføring</li>
                    <li>For å overholde lovpålagte krav</li>
                </ul>

                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">4. Rettslig grunnlag for behandlingen</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Behandlingen av dine personopplysninger er basert på følgende rettslige grunnlag:</p>
                <ul className="list-disc pl-4 mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                    <li>Ditt samtykke</li>
                    <li>Oppfyllelse av en avtale</li>
                    <li>Rettslig forpliktelse</li>
                    <li>Berettiget interesse</li>
                </ul>

                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">5. Deling av personopplysninger</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi deler ikke dine personopplysninger med tredjeparter, 
                    med mindre det er nødvendig for å oppfylle en avtale med deg eller vi er lovpålagt å gjøre det.
                </p>

                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">6. Lagring av personopplysninger</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Dine personopplysninger lagres så lenge det er nødvendig for å oppfylle formålene de ble samlet inn for, 
                    eller så lenge det kreves i henhold til lovgivningen.
                </p>

                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">7. Dine rettigheter</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Du har rett til &aring;:</p>
                <ul className="list-disc pl-4 mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                    <li>Be om innsyn i dine personopplysninger</li>
                    <li>Kreve retting av uriktige opplysninger</li>
                    <li>Kreve sletting av opplysninger</li>
                    <li>Kreve begrensning av behandling</li>
                    <li>Protestere mot behandling basert på berettiget interesse</li>
                    <li>Klage til Datatilsynet</li>
                </ul>

                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">8. Endringer i personvernerklæringen</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi forbeholder oss retten til å oppdatere denne personvernerklæringen. Endringer vil bli publisert på vår nettside.
                </p>

                <h2 className="max-w-4xl mt-8 mb-4 text-xl md:text-2xl text-gray-800 lg:mx-auto">9. Kontaktinformasjon</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Dersom du har spørsmål om vår behandling av dine personopplysninger, 
                    vennligst <Link href="/kontakt" className="hover:underline text-blue-800">ta kontakt med oss</Link>.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Takk for at du stoler på MediWeb Solutions med dine personopplysninger.</p>

            </div>
        </section>
    </>
  );
}
