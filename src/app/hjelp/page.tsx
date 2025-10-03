import Image from "next/image";

export default function Hjelp() {
  return (
    <>
        <section id="hjelp-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/8">
                <Image 
                    src="/bg-hjelp.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Hjelp / FAQ
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-blue-50" id="hjelp" aria-label="Hjelp">

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Hjelpeside</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Vi vil fylle inn informasjon her p&aring; hjelpesiden etterhvert som flere personer ettersp&oslash;r flere ting.</p>
            </div>
        </section>
    </>
  );
}