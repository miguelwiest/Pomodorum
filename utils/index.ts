export const scrollToElement = (selector: string) => {
	const ellement: HTMLElement | null = document.querySelector(selector);
	const mg = window.matchMedia('max-width: 639px');

	if (ellement && mg.matches) {
		ellement.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		});
	}
};

export const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min);
};

export const splitValue = (value: number | string, padSize: number = 2) =>
	`${value}`.padStart(padSize, '0').split('');

export const playAudio = (path: string) => new Audio(path).play();

export const sendNotification = (title: string, options: object) => new Notification(title, options);
