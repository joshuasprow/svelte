/** Dispatch event on click outside of node */
export function outside(node: Node): { destroy: () => void } {
	const handleClick = (event: MouseEvent) => {
		if (
			node &&
			!node.contains(event.target as Node) &&
			!event.defaultPrevented
		) {
			node.dispatchEvent(new CustomEvent('close', { detail: node }));
		}
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (
			node &&
			!node.contains(event.target as Node) &&
			!event.defaultPrevented
		) {
			node.dispatchEvent(new CustomEvent('close', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);
	document.addEventListener('keydown', handleKeydown, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
			document.removeEventListener('keydown', handleKeydown, true);
		},
	};
}
