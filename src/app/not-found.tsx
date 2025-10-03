import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
        <section id="not-found-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/20">
                <Image 
                    src="/hero-bg-light.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        404 - Siden ikke funnet
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-blue-50" id="not-found" aria-label="Siden ikke funnet">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">
                        Beklager, vi fant ikke siden du leter etter!
                    </h2>
                    <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                        Siden du prøvde å besøke eksisterer ikke eller har blitt flyttet. 
                        Dette kan skje hvis du har fulgt en utdatert lenke eller skrevet inn feil adresse.
                    </p>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link 
                            href="/" 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Gå til forsiden
                        </Link>
                        <Link 
                            href="/kontakt" 
                            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Kontakt oss
                        </Link>
                    </div>
                </div>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-12">
                <h3 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold text-center">
                    Populære sider
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <Link 
                        href="/tjenester/webutvikling" 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                    >
                        <h4 className="font-semibold text-gray-900 mb-2">Webutvikling</h4>
                        <p className="text-gray-600 text-sm">
                            Profesjonelle nettsider og webapplikasjoner
                        </p>
                    </Link>
                    
                    <Link 
                        href="/tjenester/legetjenester" 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                    >
                        <h4 className="font-semibold text-gray-900 mb-2">Legetjenester</h4>
                        <p className="text-gray-600 text-sm">
                            Medisinske tjenester og konsultasjoner
                        </p>
                    </Link>
                    
                    <Link 
                        href="/tjenester/kursvirksomhet" 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                    >
                        <h4 className="font-semibold text-gray-900 mb-2">Kursvirksomhet</h4>
                        <p className="text-gray-600 text-sm">
                            Kurs og opplæring innen våre fagområder
                        </p>
                    </Link>
                </div>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-12">
                <div className="text-center">
                    <p className="mt-4 max-w-4xl my-4 text-base text-gray-500 lg:mx-auto">
                        Hvis du mener dette er en feil, eller hvis du kom hit via en lenke på vårt nettsted, 
                        vennligst <Link href="/kontakt" className="text-blue-600 hover:underline">kontakt oss</Link> så vi kan rette opp problemet.
                    </p>
                </div>
            </div>
        </section>
    </>
  );
}