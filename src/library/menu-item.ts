import { dropdown } from './dropdown';

interface IMenuProps {
	title: string;
	subItems: string[];
}

const menuItem = ({ title, subItems }: IMenuProps): HTMLElement => {
	const menu = document.createElement('a');
	menu.className = 'menu-item';
	menu.href = '#';

	menu.addEventListener('click', function () {
		if (!this.classList.contains('show')) {
			closeAllMenus();
		}
		this.classList.toggle('show');
	});

	const label = document.createElement('div');
	label.className = 'menu-label';
	label.innerText = title;

	menu.appendChild(label);
	menu.appendChild(dropdown({ items: subItems }));

	return menu;
};

function closeAllMenus(): void {
	const items = document.querySelectorAll('.menu-item');
	items.forEach((item) => {
		item.classList.remove('show');
	});
}

export { menuItem, IMenuProps, closeAllMenus };
