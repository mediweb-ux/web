import Image from "next/image";
import Link from "next/link";

export default function OmOss() {
  return (
    <>
        <section id="omoss-heading" aria-label="Heading">
            <div className="relative w-full h-full bg-black/8">
                <Image 
                    src="/bg-omoss.png" 
                    alt="" 
                    fill
                    className="absolute w-full h-full object-cover mix-blend-overlay" 
                />
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
                    Rundt 12-&aring;rsalder begynte han med enkel programmering i <Link href="https://no.wikipedia.org/wiki/BASIC" target="_blank" className="hover:underline text-blue-800">BASIC</Link>, og laget sitt f&oslash;rste spill (til eget bruk) et par &aring;r senere.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Etter som &aring;rene gikk, ble mengden programmeringsspr&aring;k ogs&aring; utvidet. B&aring;de PHP og Visual C# har v&aelig;rt mye i bruk i diverse prosjekter. 
                    Og samtidig oppsto behovet for &aring; l&aelig;re SQL for &aring; h&aring;ndtere database p&aring; backend.
                    Det var uten tvil en l&aelig;rerik tid &mdash; ikke var det tusenvis av YouTube-videoer tilgjengelig, s&aring; det ble mye pr&oslash;ving og feiling!</p>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">F&oslash;rste firma</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Det som etterhvert skulle bli MediWeb startet som <em className="italic">HiTIT Consulting</em>. 
                Det varte noen &aring;r og f&oslash;rte til litt eksra inntekt under studiene, men etterhvert s&aring; ble det for mye jobb ved siden av studier og etterhvert begynnelsen p&aring; et travlere legeliv. 
                H&aring;kon valgte derfor &aring; stenge HiTIT til slutt.</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Noen tid senere ble det oppstart av <em className="italic">Kontorportalen</em> for den delen som handlet om webutvikling og delvis kursvirksomhet,
                    mens den medisinske delen levde i firmaet som het <em className="italic">Anestesi1</em>. Men begge var enkeltpersonforetak (ENK), og H&aring;kon fant etterhvert ut at det ble for komplisert med tanke p&aring; det &oslash;konomiske n&aring;r man m&aring; h&aring;ndtere to ENK.</p>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="max-w-4xl mt-8 mb-4 text-lg md:text-xl text-gray-900 lg:mx-auto font-semibold">MediWeb</h2>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Da dukket ideen opp om &aring; sl&aring; sammen disse to firmaene, slik at alt som tidligere var gjort gjennom to ulike firma, n&aring; ble til ett firma!</p>
                <p className="mt-4 max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">Ja, det f&oslash;ltes litt rart og underlig, for det er en uvanlig kombinasjon. Men jo mer man tenkte p&aring; det, jo lettere var det &aring; se det i kombinasjon.
                    S&aring; her er vi i dag, med den utrolige kombinasjonen av tjenester i ett og samme firma - MediWeb Solutions! Vi gleder oss til &aring; samarbeide med deg p&aring; alle v&aring;re omr&aring;der!
                </p>
            </div>
        </section>
    </>
  );
}