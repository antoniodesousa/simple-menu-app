import { loremIpsum } from '../mocks/lorem-ipsum';

const contentWrapper = (): HTMLElement => {
	const pageContent: HTMLElement = document.createElement('div');
	pageContent.className = 'content-wrapper';

	const paragraph1 = generateContent();
	const paragraph2 = generateContent();

	pageContent.innerHTML = `<p>${paragraph1}</p><p>${paragraph2}</p>`;

	return pageContent;
};

function generateContent(): string {
	const text = [];
	let x = 20;

	while (--x) {
		text.push(loremIpsum[Math.floor(Math.random() * loremIpsum.length)]);
	}

	return text.join(' ');
}

export { contentWrapper };
