// lib/storageHelper.ts

import "client-only";

export function getLocalStorage(key: string, defaultValue: unknown) {
    try {
        if (typeof window === 'undefined') {
            return defaultValue;
        }
        
        const stickyValue = localStorage.getItem(key);
        
        return (stickyValue !== null && stickyValue !== 'undefined')
            ? JSON.parse(stickyValue)
            : defaultValue;
    } catch (error) {
        console.warn('Error reading from localStorage:', error);
        return defaultValue;
    }
}

export function setLocalStorage(key: string, value: unknown) {
    try {
        if (typeof window === 'undefined') {
            return;
        }
        
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('Error writing to localStorage:', error);
    }
}