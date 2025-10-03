import Image from "next/image";
import Link from "next/link";

export default function Kursvirksomhet() {
  return (
    <>
        <section id="kursvirksomhet-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/20">
                <Image 
                    src="/bg-kursvirksomhet.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Kursvirksomhet
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-green-50" id="forstehjelp" aria-label="Førstehjelp">
            <div>
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi har lang erfaring med kursvirksomhet av ulik slag. H&aring;kon Tr&oslash;nnes, som startet MediWeb Solutions, har drevet undervisning for R&oslash;de Kors og internt p&aring; sykehuset, og han
                    har mange &aring;rs erfaring som instrukt&oslash;r/fasilitator ved medisinsk simulering.</p> 
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Han har gjennomg&aring;tt sertifisering som Certified Healthcare Simulation Educator (CHSE) og som anestesilege har han blant annet v&aelig;rt delaktig i oppl&aelig;ring i avansert hjerte-lunge-redning (AHLR) for helsepersonell.
                    Vi &oslash;nsker n&aring; &aring; bringe denne erfaringen ut til dere!
                </p>
            </div>
            
            <div className="pt-8 pb-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">F&oslash;rstehjelp</h2> 
                </div>
            </div>
            <div>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">Grunnkurs i f&oslash;rstehjelp</p>
                <p className="mt-8 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi jobber med &aring; utarbeide et helt eget kurskonsept for grunnkurs i f&oslash;rstehjelp.
                    Det finnes utallige tilbydere av kurs i f&oslash;rstehjelp i Norge, vi &oslash;nsker &aring; v&aelig;re annerledes ved &aring; tilby kurs der du f&aring;r h&oslash;re det du trenger.</p>
                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi har troen p&aring; at man b&aring;de l&aelig;rer og husker bedre n&aring;r kunnskapen blir <em className="italic">satt i en sammenheng</em>. 
                    Vi bringer derfor erfaringen fra et liv som anestesilege, som inkluderer arbeid i ambulansetjenesten og i Luftambulansen, inn i kurset.</p>
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
                    Vi kan tilby alt fra &eacute;n enkelt (anestesi-)lege til et team best&aring;ende av en lege og en sykepleier. Ved spesielle behov har vi mulighet til &aring; innhente forsterkninger fra kompetente folk og utvide teamet enda mer.</p> 

                <Image 
                    src="/medic-illustration.jpg" 
                    alt="Illustrasjon: Legetjenester på arrangement"
                    width={550}
                    height={350} 
                    className="my-12 rounded-md shadow-md mx-auto" />

                <p className="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Dersom du har behov for legetjenester til idrettsarrangement, konsert, festival eller liknende, <Link href="/kontakt" className="hover:underline text-blue-800">ta kontakt med oss</Link>, s&aring; jobber vi derfra!</p>
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
