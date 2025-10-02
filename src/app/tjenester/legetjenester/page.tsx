import Image from "next/image";
import Link from "next/link";

export default function Legetjenester() {
  return (
    <>
        <section id="legetjenester-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/8">
                <img src="/bg-legetjenester2.png" className="absolute w-full h-full object-cover mix-blend-overlay" />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Legetjenester
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-green-50" id="steg1" aria-label="Steg 1">
            <div>
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">H&aring;kon Tr&oslash;nnes, som startet MediWeb Solutions, er utdannet anestesilege - og det er derfor vi kan tilby den litt unike
                    kombinasjonen av tjenester som vi gj&oslash;r. I tillegg til &aring; kunne stille med anestesilege, kan vi ogs&aring; tilby anestesisykepleier(e) eller intensivsykepleier etter behov.
                    Med over 20 &aring;rs erfaring som anestesilege fra det offentlige og det private, kan vi tilby &quot;det meste&quot; av legetjenester. Vi g&aring;r gjennom noen av dem her.
                </p>
            </div>
            
            <div className="pt-8 pb-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Anestesi</h2> 
                </div>
            </div>
            <div>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">Anestesitjenester</p>
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi jobber sammen med et velrennomert firma for tilbud om anestesivirksomhet rundt omkring i hele Norge. 
                    Vi kan (evt i samarbeid med dem) tilby anestesitjenester tilpasset deres behov, for eksempel til tannlegekontor og liknende. 
                    Vi har ogs&aring; erfaring fra det private helsevesenet (eks. Aleris og Volvat), og kan tilby tjenester til private klinikker og sykehus.</p>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Ta kontakt med oss for en uforpliktende prat om deres behov, og vi vil komme tilbake til dere med et tilbud.</p>
            </div>
            <Image 
            src="/anestesi-illustrasjon.jpg" 
            alt="Illustrasjon av anestesilege som gir anestesi"
            width={550}
            height={350} 
            className="my-12 rounded-md shadow-md mx-auto" />
        </section>

        <section className="py-20 z-5 bg-blue-50" id="steg2" aria-label="Steg 2">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Medic</h2> 
                </div>
            </div>
             <div>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">Idrettsarrangement eller annen event</h3>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Mange arrangementer, konserter eller andre eventer setter krav til at det er helsepersonell til stede. 
                    Vi kan tilby alt fra &eacute;n (anestesi-)lege til en lege og en sykepleier. Ved spesielle behov har vi mulighet til &aring; innhente forsterkninger fra kompetente folk og utvide teamet enda mer.</p> 

                <Image 
                    src="/medic-illustration.jpg" 
                    alt="Illustrasjon: Legetjenester på arrangement"
                    width={550}
                    height={350} 
                    className="my-12 rounded-md shadow-md mx-auto" />

                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Dersom du har behov for legetjenester til idrettsarrangement, konsert, festival eller liknende, <Link href="/kontakt">ta kontakt med oss</Link> s&aring; jobber vi derfra!</p>
            </div>
        </section>

        <section className="py-20 z-5 bg-green-50" id="steg3" aria-label="Steg 3">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Annet</h2> 
                </div>
            </div>
             <div>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">Andre legetjenester</h3>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Dersom du ikke finner det du har bruk for her, s&aring; vil vi gjerne at du tar kontakt. 
                    Vi jobber med &aring; utvikle flere tilbud, men de er ikke lagt ut p&aring; hjemmesiden enn&aring;. Kanskje kan vi likevel hjelpe deg?</p>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto"><Link href="/kontakt" className="hover:underline text-blue-800">La oss h&oslash;re fra deg</Link>!</p>
            </div>
        </section>
    </>
  );
}
