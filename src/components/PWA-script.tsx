import Script from "next/script";

const PWAScript = () => (
    <Script 
        id="service-worker"
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
            __html: `
                const registerServiceWorker = async () => {
                    if ('serviceWorker' in navigator) {
                        try {
                            const registration = await navigator.serviceWorker.register('/service-worker.js')
                            if (registration.installing) {
                                console.log('Service worker installing')
                            } else if (registration.waiting) {
                                console.log('Service worker installed')
                            } else if (registration.active) {
                                console.log('Service worker active')
                            }
                        } catch (error) {
                            console.error('Service worker registration failed', error)
                        }
                    }
                };
                registerServiceWorker();
            `,
        }}
    />
);

export default PWAScript;