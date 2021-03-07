const footer = (): HTMLElement => {
	const container = document.createElement('div');
	container.className = 'footer';
	container.innerText = 'Developed by Antonio de Sousa';

	return container;
};

export { footer };
