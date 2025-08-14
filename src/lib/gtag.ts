export const GA_MEASUREMENT_ID = 'G-HG1NK5HBQ7';

// Safely declare the global gtag function if it exists in the browser
declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
	}
}

export function sendPageview(url: string): void {
	if (typeof window === 'undefined') return;
	if (!window.gtag) return;
	window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
}


