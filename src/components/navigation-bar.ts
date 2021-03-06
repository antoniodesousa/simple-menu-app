import { closeAllMenus, menuItem } from '../library/menu-item';
import { menuTree } from '../mocks/menu-tree';

const navigationBar = (): HTMLElement => {
	const navBar: HTMLElement = document.createElement('div');
	navBar.className = 'navigation-bar';

	for (const tree of menuTree) {
		navBar.appendChild(menuItem(tree));
	}

	window.addEventListener('click', (e: MouseEvent) => {
		const elm = e.target as HTMLElement;
		if (!elm.matches('.menu-label') && !elm.matches('.menu-item')) {
			closeAllMenus();
		}
	});

	return navBar;
};

export { navigationBar };
