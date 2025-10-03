import Image from "next/image";
import Link from "next/link";

export default function Webutvikling() {
  return (
    <>
        <section id="webutvikling-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/15">
                <Image 
                    src="/bg-webutviklin.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Webutvikling
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-green-50" id="steg1" aria-label="Steg 1">
            <div>
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Noe av det vi har gjort lengst, er utvikling av websider. 
                    Vi har holdt på med dette siden midten av 1990-tallet, s&aring; vi har fulgt utviklingen av webteknologier og -standarder i mange &aring;r. 
                    Vi har programmert nettsider ment for bruk i nettleseren <Link href="https://lynx.invisible-island.net/" target="_blank" className="hover:underline text-blue-800">Lynx</Link>,
                    vi har vært med på overgangen fra statiske HTML-sider til dynamiske sider og vi har vært med på å &quot;style&quot; nettsider ved &aring; bruke tabelloppsett, før CSS ble en ting. 
                    Kort og godt, vi har fulgt utviklingen av HTML, CSS, JavaScript og andre teknologier som har kommet og gått i løpet av disse årene.
                </p>
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Når vi bygger nettsider, følger vi en (her forenklet) tretrinns prosess. Vi vil gjerne forklare den nærmere.</p>
            </div>
            
            <div className="pt-8 pb-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Steg 1</h2> 
                </div>
            </div>
            <div>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">Innsamling av informasjon</p>
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Utvikling av websider handler om veldig mye mer enn bare &aring; finne og 
                    sette sammen riktig informasjon - som du kan lime inn i et program for publisering.
                    I hvert fall ikke etter vår mening!</p>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">N&aring;r du velger MediWeb Solutions, s&aring; vil vi i stedet følge dere gjennom hele prosessen videre, fra starten til dere har en ferdig nettside.</p> 
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Men vi bruker stort sett lengst tid p&aring; <em className="italic">Steg 1</em>, som faktisk er &aring; samle inn all informasjon som vi trenger for &aring; kunne hjelpe dere p&aring; best mulig m&aring;te.
                    Typiske spørsmål dere får i denne delen av prosessen er: Hva/hvem er målgruppen for hjemmesiden deres? Hvilken funksjonalitet ønsker dere på hjemmesiden? Trenger dere interaktive elementer eller for eksempel nettbutikk med mulighet for å kjøpe varer/tjenester? Hvilken design ser dere for dere? Er det en spesiell merkevare eller en designfilosofi dere vil f&oslash;lge?</p>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi hjelper dere gjennom hele denne prosessen, og sørger for at vi sammen finner de beste løsningene for deres behov.</p>
            </div>
            <Image 
            src="/boy-looks-at-information-on-the-plate.jpg" 
            alt="Boy looking at information on a board"
            width={550}
            height={350} 
            className="my-12 rounded-md shadow-md mx-auto" />
            <div>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">I tillegg vil vi vite mest mulig om dere! 
                    Hvem er dere, og hva vil dere fortelle med nettsiden? Jo mer vi vet om dere, jo lettere er det &aring; legge opp nettsider som best mulig reflekterer dere p&aring; nett.</p> 
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Det er ogs&aring; i Steg 1 vi trenger alt dere har av bilder, logoer, aktuelle farger, typografi og profilprogram som skal brukes p&aring; nettsiden - eller som vi vil bruke n&aring;r vi bygger for dere. 
                    Eier dere ikke et domenenavn enn&aring;, eller skal dere ha webhotell og tilsvarende tekniske ting? Slike ting er viktig i Steg 1, og m&aring;let er at vi skal ha alt vi trenger for &aring; bygge i Steg 2.</p>
            </div>
        </section>

        <section className="py-20 z-5 bg-blue-50" id="steg2" aria-label="Steg 2">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Steg 2</h2> 
                </div>
            </div>
             <div>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">F&oslash;rste utkast</h3>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Basert på det vi har av informasjon som beskrevet i Steg 1, kan vi begynne &aring; bygge et f&oslash;rste utkast av nettsiden deres. 
                    Vi holder kontakten med dere som kunde underveis i prosessen, og dere vil f&aring; tilgang til v&aring;rt byggeomr&aring;de, slik at dere etter hvert kan se hvordan arbeidet g&aring;r.</p> 

                <Image 
                    src="/wireframe-layout.jpg" 
                    alt="Illustrasjon: Tegning av en wireframe-layout"
                    width={550}
                    height={350} 
                    className="my-12 rounded-md shadow-md mx-auto" />

                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Normalt regner vi med &aring; bruke ca en m&aring;neds tid p&aring; Steg 2, noe avhengig av andre oppdrag vi har p&aring; samme tid. 
                    Vi velger imdidlertid &aring; bruke en del tid ogs&aring; p&aring; Steg 2, 
                    slik at vi er sikre p&aring; at nettsidene fungerer slik dere &oslash;nsker, og det er viktig for oss &aring; kunne yte det lille ekstra i denne fasen. 
                    Vi vil heller bruke litt lengre tid enn &aring; hoppe bukk til Steg 3 og levere en nettside som ikke oppfyller deres behov!</p>
            </div>
        </section>

        <section className="py-20 z-5 bg-green-50" id="steg3" aria-label="Steg 3">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Steg 3</h2> 
                </div>
            </div>
             <div>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">Publisering av nettsiden</h3>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Når dere er fornøyd med utseende og funksjonalitet for nettsiden, er vi klare for siste steg. 
                    Før nettsiden publiseres, går vi gjennom elementene og sørger for at den er tilgjengelig for personer med funksjonshemminger. 
                    Dette siste er viktig, og er et krav for alle nye nettsider som lages i dag.</p> 
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Med nettsider bygd opp etter WCAG-standard, er vi klare for å publisere dem til deres domene. Dere har kanskje allerede publisert en lanseringsdato, og vi ønsker å kunne levere til riktig tid. Til slutt er alt klart for første besøkende til deres nettside.</p>
            </div>
        </section>
    </>
  );
}
