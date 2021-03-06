import './styles/index.css';
import { navigationBar } from './components/navigation-bar';

document.addEventListener('DOMContentLoaded', (): void => {
	const root: HTMLElement = document.getElementById('root');
	root.appendChild(navigationBar());
});
