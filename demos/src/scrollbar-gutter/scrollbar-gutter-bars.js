const updateUI = () => {
	const $bars = document.querySelectorAll('.bar');
	$bars.forEach(($bar) => {
		const width = Math.round($bar.clientWidth);
		$bar.querySelector('.size').innerText = width;
	});
};

const init = (autoTick = 0) => {
	updateUI();
	window.addEventListener('resize', (e) => {
		updateUI();
	});

	if (autoTick) {
		setInterval(updateUI, autoTick);
	}
};
export { init };
