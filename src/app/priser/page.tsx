import Image from "next/image";
import Link from "next/link";

export default function Priser() {
  return (
    <>
        <section id="priser-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/8">
                <Image 
                    src="/bg-priser.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Priser
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-blue-50" id="priser" aria-label="Priser">

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Webutvikling</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Priser for oppdrag innen webutvikling varierer naturlig nok med kompleksiteten av oppdraget. Vi &oslash;nsker &aring; finne ut mer om dette f&oslash;r vi gir deg en pris.
                    Fram til vi har f&aring;tt det p&aring; det rene og gitt deg en pris, s&aring; er v&aring;re tjenester kostnadsfrie (bortsett fra evt reise/opphold som er n&oslash;dvendig). 
                    Vi fastsetter deretter pris basert p&aring; timeanslag for oppdraget.</p>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Legetjenester</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">P&aring; samme m&aring;te som for webutvikling, s&aring; avhenger pris p&aring; v&aring;re legetjenester av
                    varighet p&aring; oppdraget og hvor mange personer som trengs. Vi tilbyr ofte timepris + reise/opphold for kortere oppdrag, og fastpris for lengre oppdrag eller med flere teammedlemmer.
                </p>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Kurs</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">N&aring;r vi f&aring;r kurssiden v&aring;r opp, s&aring; vil pris p&aring; v&aring;re kurs vises der. 
                    I mellomtiden ber vi om at du <Link href="/kontakt" className="hover:underline text-blue-800">kontakter oss</Link> for mer info.</p>
            </div>
        </section>
    </>
  );
}