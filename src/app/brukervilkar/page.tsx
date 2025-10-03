import Image from "next/image";
import Link from "next/link";

export default function Brukervilkar() {
  return (
    <>
        <section id="brukervilkar-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/20">
                <Image 
                    src="/bg-brukervilkar.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Brukervilk&aring;r
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-blue-50" id="brukervilkar" aria-label="Brukervilkår">

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Introduksjon</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Disse vilkårene gjelder for alle tjenestene levert av Tr&oslash;nnes MediWeb Solutions («MediWeb Solutions», &ldquo;MediWeb&rdquo;, &ldquo;vi&rdquo;, &ldquo;vår&rdquo;) og på nettsiden www.mediweb.no.
                    Ved å akseptere disse vilkårene, inngår du en avtale med Tr&oslash;nnes MediWeb Solutions, org.nr. 924803673, Lektor Musums gate 17, 7650 Verdal, og aksepterer samtidig vår behandling av personopplysninger som beskrevet i <Link href="/personvern" className="hover:underline text-blue-800">personvernerklæringen</Link>.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Disse vilkårene og betingelsene (&ldquo;Avtale&rdquo;) angir de generelle vilkårene for din bruk av mediweb.no (&ldquo;Nettstedet&rdquo; eller &ldquo;Tjenesten&rdquo;) og alle dets relaterte produkter og tjenester (samlet &ldquo;Tjenester&rdquo;). 
                    Denne avtalen er juridisk bindende mellom deg (&ldquo;Bruker&rdquo;, &ldquo;deg&rdquo; eller &ldquo;din&rdquo;) og MediWeb Solutions (&ldquo;mediweb.no&rdquo;, &ldquo;vi&rdquo;, &ldquo;oss&rdquo; eller &ldquo;vår&rdquo;). 
                    Ved å få tilgang til å bruke nettstedet og tjenestene, erkjenner du at du har lest, forstått og godtar å være bundet av vilkårene i denne avtalen.</p>
                 <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Hvis du inngår denne avtalen på vegne av en virksomhet eller annen juridisk enhet, representerer du at du har myndighet til å binde denne enheten til denne avtalen. I så fall vil begrepene &ldquo;Bruker&rdquo;, &ldquo;du&rdquo; eller &ldquo;din&rdquo; referere til en slik enhet. 
                    Hvis du ikke har slik myndighet, eller hvis du ikke godtar vilkårene i denne avtalen, vil du ikke få tilgang til å bruke nettstedet og tjenestene.
                    Du erkjenner at denne avtalen er en kontrakt mellom deg og MediWeb Solutions, selv om den er elektronisk og ikke er fysisk signert av deg, og den styrer din bruk av nettstedet og tjenestene.</p>
            
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Kontoer og medlemsskap</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Hvis du oppretter en konto på nettstedet, er du ansvarlig for å opprettholde sikkerheten til kontoen din, og du er fullt ansvarlig for alle aktiviteter som skjer under kontoen og andre handlinger som er utført i forbindelse med den. 
                    Vi kan, men har ingen forpliktelse til, å overvåke og gjennomgå nye kontoer før du kan logge deg på og begynne å bruke tjenestene. 
                    Å oppgi falsk kontaktinformasjon av noe slag kan føre til at kontoen din avsluttes.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Du må umiddelbart varsle oss om uautorisert bruk av kontoen din eller andre brudd på sikkerheten. 
                    Vi vil ikke være ansvarlig for handlinger eller unnlatelser fra deg, inkludert skader av enhver art som oppstår som følge av slike handlinger eller unnlatelser. 
                    Vi kan suspendere, deaktivere eller slette kontoen din (eller deler av den) hvis vi finner ut at du har brutt noen av bestemmelsene i denne avtalen, eller at din oppførsel eller innhold vil skade vårt omdømme og vår velvilje. 
                    Hvis vi sletter kontoen din av de ovennevnte årsakene, kan du ikke registrere deg på nytt for tjenestene våre. Vi kan blokkere e-postadressen din og IP-adressen for å forhindre ytterligere registrering.</p>
            
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Lenker til andre ressurser</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Nettstedet og tjenestene kan linke til andre ressurser (for eksempel nettsteder, mobilapplikasjoner osv.), men det innebærer ikke at vi har noen assosiasjon, tilknytning, sponsoravtale eller affiliate-avtale med en nevnt ressurs, med mindre det er spesifikt angitt. 
                    I de tilfellene der mediweb.no benytter annonselenker og annonsebannere til eksterne samarbeidspartnere, vil dette merkes med &quot;Annonse&quot;.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi er ikke ansvarlige for å undersøke,  evaluere eller garantere innholdet i eksterne ressurser. 
                Vi påtar oss ikke noe ansvar for handlinger, produkter, tjenester og innhold fra andre tredjeparter. 
                Du bør gjennomgå de juridiske uttalelsene og andre vilkår for bruk av ressurser du får tilgang til via en lenke på nettstedet og tjenestene. 
                Din tilknytning til andre ressurser utenfor nettstedet er på egen risiko.</p>    
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Immatrielle rettigheter</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">&quot;Intellektuell eiendomsrett&quot; (immaterialrett) betyr alle nåværende og fremtidige rettigheter gitt ved lov eller i forbindelse med opphavsrett og relaterte rettigheter.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Denne avtalen overfører ikke intellektuell eiendom som eies av mediweb.no eller tredjeparter til deg, og alle rettigheter og interesser i og til slik eiendom vil forbli (som mellom partene) utelukkende hos MediWeb. 
                    Alle varemerker, servicemerker, grafikk og logoer som brukes i forbindelse med nettstedet og tjenestene, er &aring;ndsverk av MediWeb Solutions. 
                    Din bruk av nettstedet og tjenestene gir deg ingen rett eller lisens til å reprodusere eller på annen måte bruke MediWeb's eller tredjeparts varemerker.</p>    
            </div>

             <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Ansvarsavklaring</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">MediWeb jobber for å holde tjenestene oppdaterte og feilfrie. Feil, mangler og driftsstans gir likevel ikke grunnlag for krav om prisavslag, skadeserstatning eller andre misligholdsbeføyelser mot MediWeb Solutions, utgiver, redaktør, samarbeidspartnere, forfattere/ bidragsytere eller andre som har utført arbeid vedrørende innhold og funksjoner. 
                    MediWeb videreutvikler kontinuerlig tjenestene. Det vil forekomme at vi tilføyer, avvikler og endrer innhold og funksjonalitet, uten at disse endringene vil gi deg rett til kompensasjon. Dersom du blir oppmerksom på feil i tjenestene, håper vi du <Link href="/kontakt" className="hover:underline text-blue-800">gir oss beskjed om feilen</Link>. 
                    For å sikre en god brukeropplevelse, bør du benytte en oppdatert nettleser som MediWeb støtter.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">I den utstrekning det er tillatt av gjeldende lov, vil MediWeb Solutions, dets ansatte, konsulenter, leverandører eller lisensgivere ikke under noen omstendigheter være ansvarlig overfor noen person eller organisasjon for indirekte eller direkte skade, eller følgeskader 
                    (inkludert, men ikke begrenset til, skader for tapt fortjeneste, inntekter m.v.). Dette inkluderer, uten begrensning, kontrakt, garanti, brudd på lovpålagte plikter, uaktsomhet eller på annen måte, selv om den ansvarlige er blitt informert om muligheten for slike skader eller kunne ha forutsett slike skader.</p>    
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Endring og revisjon</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi forbeholder oss retten til å kunne endre denne avtalen eller dens vilkår knyttet til nettstedet og tjenestene. 
                    Endringer i brukervilk&aring;rene som ikke innskrenker rettighetene dine, kan utføres uten at du varsles og uttrykkelig samtykker til endringen. 
                    Andre endringer vil bli publisert p&aring; nettsiden, med virkning fra publisering av en oppdatert versjon av denne avtalen på nettstedet foreligger. 
                    Når vi gjør det, vil vi revidere den oppdaterte datoen nederst på denne siden. 
                    Fortsatt bruk av nettstedet og tjenestene etter slike endringer betyr at du samtykker til disse endringene.</p>    
            </div>

             <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Aksept av brukervilk&aring;rene</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Ved &aring; benytte denne nettsiden og tjenestene til MediWeb Solutions, erkjenner du at du har lest denne avtalen og godtar alle vilkårene og betingelsene. 
                    Hvis du ikke godtar vilkårene i denne avtalen, ber vi om at du ikke bruker denne nettsiden eller v&aring;re tjenester.</p>    
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <p className="mt-8 max-w-4xl text-lg md:text-xl text-gray-600 lg:mx-auto"><em className="italic">Denne siden ble sist oppdatert 27.09.2025.</em></p>    
            </div>
        </section>
    </>
  );
}
