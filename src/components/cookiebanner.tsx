// components/cookiebanner.tsx

'use client';

import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect (() => {
        // Only run on client side to avoid hydration mismatch
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedCookieConsent);
        setIsLoaded(true);
    }, []);

    
    useEffect(() => {
        // Only update gtag if cookieConsent is not null (has been set)
        if (cookieConsent !== null && isLoaded) {
            const newValue = cookieConsent ? 'granted' : 'denied';

            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag("consent", 'update', {
                    'analytics_storage': newValue
                });
            }

            setLocalStorage("cookie_consent", cookieConsent);

            //For Testing
            console.log("Cookie Consent: ", cookieConsent);
        }
    }, [cookieConsent, isLoaded]);

    // Don't render anything until loaded and only show if consent hasn't been given
    if (!isLoaded || cookieConsent !== null) {
        return null;
    }

    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-md
                        fixed bottom-0 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}>

            <div className='text-center'>
                <Link href="/personvern"><p className='text-white'>Vi bruker <span className='font-bold text-sky-400'>cookies / informasjonskapsler</span> p&aring; MediWeb sine nettsider for &aring; gj&oslash;re din opplevelse best mulig.</p></Link>
            </div>

            
            <div className='flex gap-2'>
                <button 
                    className='px-5 py-2 text-gray-300 rounded-md border-gray-900 cursor-pointer' 
                    onClick={() => setCookieConsent(false)}
                >
                    Avsl&aring;
                </button>
                <button 
                    className='bg-gray-900 px-5 py-2 text-white rounded-lg cursor-pointer' 
                    onClick={() => setCookieConsent(true)}
                >
                    Tillat
                </button>
            </div>
        </div>
    )
}