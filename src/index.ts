import './styles/index.css';
import { navigationBar } from './components/navigation-bar';
import { contentWrapper } from './components/content-wrapper';
import { footer } from './components/footer';

document.addEventListener('DOMContentLoaded', (): void => {
	const root: HTMLElement = document.getElementById('root');

	root.appendChild(navigationBar());
	root.appendChild(contentWrapper());
	root.appendChild(footer());
});
