// types/gtag.d.ts

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'consent' | 'event',
      targetId: string,
      config?: {
        page_path?: string;
        analytics_storage?: 'granted' | 'denied';
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

export {};