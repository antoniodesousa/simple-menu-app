import './styles/index.css';

const component = (): HTMLElement => {
	const title = document.createElement('strong');
	title.innerText = 'Simple Menu App';

	return title;
};

document.addEventListener('DOMContentLoaded', (): void => {
	const root: HTMLElement = document.getElementById('root');
	root.appendChild(component());
});
