interface IDropdownProps {
	items: string[];
}

const dropdown = ({ items }: IDropdownProps): HTMLElement => {
	const container = document.createElement('div');
	container.className = 'menu-dropdown';

	for (const item of items) {
		const anchor = document.createElement('a');
		anchor.href = '#';

		anchor.addEventListener('click', function () {
			alert(this.innerText);
		});

		anchor.innerText = item;
		container.appendChild(anchor);
	}

	return container;
};

export { dropdown, IDropdownProps };
