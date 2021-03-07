import './styles/index.css';
import { navigationBar } from './components/navigation-bar';
import { contentWrapper } from './components/content-wrapper';

document.addEventListener('DOMContentLoaded', (): void => {
	const root: HTMLElement = document.getElementById('root');
	root.appendChild(navigationBar());
	root.appendChild(contentWrapper());
});
