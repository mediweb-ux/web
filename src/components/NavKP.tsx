'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import
import { Button } from "./ui/button";

export function NavKP() {
  const pathname = usePathname(); // Get current path

  return (
    <header className="relative z-20 w-full shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav aria-label="Hovedmeny" className="flex flex-col sm:flex-row h-[5.5rem] items-stretch justify-between font-medium text-slate-700">
          <Link id="Kontorportalen" aria-label="MediWeb Solutions" aria-current={pathname === "/" ? "page" : undefined} className="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1" href="/">
            <Image
              src="/MediWeb_logo_crop.png"
              alt="MediWeb logo"
              width={32}
              height={32}
              className="h-8 w-8 mr-2"
            />
          </Link>
          <Button id="mobile_menu_trigger" className="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" aria-expanded="false" aria-label="Vis/skjul navigasjon">
            <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <span aria-hidden="true" className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
              <span aria-hidden="true" className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
              <span aria-hidden="true" className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
            </div>
          </Button>
          <ul role="menubar" aria-label="Velg side for navigering" className="invisible absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100">
            <li role="none" className="flex flex-col sm:flex-row items-stretch">
              <Link
                role="menuitem"
                aria-current={pathname === "/" ? "page" : undefined}
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                href="/"
              >
                <span>Hjem</span>
              </Link>
            </li>
            <li role="none" className="flex flex-col sm:flex-row items-stretch">
              <Link
                role="menuitem"
                aria-current={pathname === "/websider" ? "page" : undefined}
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                href="/websider"
              >
                <span>Websider</span>
              </Link>
            </li>
            <li role="none" className="flex flex-col sm:flex-row items-stretch">
              <Link
                role="menuitem"
                aria-current={pathname === "/elaring" ? "page" : undefined}
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                href="/elaring"
              >
                <span>E-læring</span>
              </Link>
            </li>
            <li role="none" className="flex flex-col sm:flex-row items-stretch">
              <Link
                role="menuitem"
                aria-current={pathname === "/kontakt" ? "page" : undefined}
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                href="/kontakt"
              >
                <span>Kontakt oss</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}