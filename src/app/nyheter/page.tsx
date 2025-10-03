import Link from "next/link";

export default function Nyheter() {
  return (
    <>
        <section id="nyheter-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/8">
                <img src="/bg-nyheter.png" className="absolute w-full h-full object-cover mix-blend-overlay" />
                <div className="py-44">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                        Nyheter
                    </h1>
                </div> 
            </div>
        </section>
        
        <section className="py-20 z-5 bg-blue-50" id="nyheter" aria-label="Nyheter">

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">Nyheter og blogg</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Her kommer det etterhvert en egen side med  diverse nyheter. F&oslash;lg med!</p>
            </div>
        </section>
    </>
  );
}