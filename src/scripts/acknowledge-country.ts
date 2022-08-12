const day = 60 * 60 * 24;
function acknowledged() {
	const D = Date.now().toString(10);
	localStorage.setItem('last-acknowledgement', D);
	document.body.setAttribute('style', '');
	const ctr = document.querySelector('.aoc-container');
	ctr.setAttribute('style', 'opacity:0;');
	window.setTimeout(() => {
		ctr.setAttribute('style', 'display:none;width:0,height:0');
	}, 300);
}

const la =
	Number.parseInt(localStorage.getItem('last-acknowledgement'), 10) || 0;
const offset = Date.now() - la;
if (offset > day) {
	document.body.setAttribute('style', 'overflow:hidden;');
	const ct = document.querySelector('.aoc-container');
	ct.setAttribute('style', '');
	ct.addEventListener(
		'touchmove',
		event => {
			event.preventDefault();
		},
		{ passive: false },
	);
	console.log(`acknowledging country`);
	window.setTimeout(() => {
		const close = document.querySelector<HTMLButtonElement>('#close-aoc')!;
		close.setAttribute('style', 'opacity:1;');
		close.disabled = false;
		close.addEventListener('click', () => {
			acknowledged();
		});
	}, 3000);
}

export {};
