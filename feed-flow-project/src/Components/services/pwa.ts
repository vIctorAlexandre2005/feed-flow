import { useEffect, useState } from "react";
import { InstallPromptEvent } from "../../../utils/interface/PromptEvent";

export function usePWA() {
    const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            const beforeInstallPromptHandler = (event: Event) => {
                event.preventDefault();
                setInstallPrompt(event as InstallPromptEvent);
            };

            window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

            window.addEventListener('appinstalled', () => {
                console.log('PWA installed');
            });

            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('ServiceWorker registered with scope:', registration.scope);
                })
                .catch((err) => {
                    console.error('ServiceWorker registration failed:', err);
                });

            return () => {
                window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
            };
        }
    }, []);

    return installPrompt;
}