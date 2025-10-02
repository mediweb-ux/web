import Link from "next/link";

export default function OmOss() {
  return (
    <>
        <section id="omoss-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/8">
                <img src="/bg-omoss.png" className="absolute w-full h-full object-cover mix-blend-overlay" />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Om oss
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-blue-50" id="omoss" aria-label="Om oss">

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Introduksjon</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Historien om MediWeb Solutions er spennende og strekker seg egentlig over mange &aring;r, selv om firmaet i seg selv ikke er s&aring; gammelt. 
                    Vi vil her fors&oslash;ke &aring; gjengi noe av det som har skapt MediWeb slik det foreligger i dag!</p>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Den spede begynnelsen</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Som for mange andre, startet reisen p&aring; gutterommet til grunnlegger H&aring;kon Tr&oslash;nnes. 
                    Som 12-&aring;ring begynte han med programmering i BASIC, og laget sitt f&oslash;rste spill (til eget bruk) et par &aring;r senere.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Etter som &aring;rene gikk, ble programmeringsspr&aring;k ogs&aring; utvidet. B&aring;de PHP og C# har v&aelig;rt mye i bruk i diverse prosjekter. 
                    Og samtidig oppsto behovet for &aring; l&aelig;re SQL for &aring; h&aring;ndtere databaseSom for mange andre, startet reisen p&aring; gutterommet til grunnlegger H&aring;kon Tr&oslash;nnes. 
                    Som 12-&aring;ring begynte han med programmering i BASIC, og laget sitt f&oslash;rste spill (til eget bruk) et par &aring;r senere.</p>

            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Lenker til andre ressurser</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Nettstedet og tjenestene kan linke til andre ressurser (for eksempel nettsteder, mobilapplikasjoner osv.), men det innebærer ikke at vi har noen assosiasjon, tilknytning, sponsoravtale eller affiliate-avtale med en nevnt ressurs, med mindre det er spesifikt angitt. 
                    I de tilfellene der mediweb.no benytter annonselenker og annonsebannere til eksterne samarbeidspartnere, vil dette merkes med “Annonse”.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi er ikke ansvarlige for å undersøke,  evaluere eller garantere innholdet i eksterne ressurser. 
                Vi påtar oss ikke noe ansvar for handlinger, produkter, tjenester og innhold fra andre tredjeparter. 
                Du bør gjennomgå de juridiske uttalelsene og andre vilkår for bruk av ressurser du får tilgang til via en lenke på nettstedet og tjenestene. 
                Din tilknytning til andre ressurser utenfor nettstedet er på egen risiko.</p>    
            </div>

            
        </section>
    </>
  );
}