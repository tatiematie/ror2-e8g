const calculateValues = (event, procChance) => {
	const calculator = document.querySelector('#calc') as HTMLInputElement,
		calcInput = document.querySelector('#calc-input') as HTMLInputElement,
		calcModifier = document.querySelector('#calc-modifier') as HTMLInputElement,
		calcOutput = document.querySelector('#calc-output') as HTMLInputElement;

	const itemCount = calcInput.value,
		cloverCount = calcModifier ? calcModifier.value : '0';

	if (calculator.classList.contains('hyperbolic')) {
		let result = ((1 - 1 / (procChance * parseInt(itemCount) + 1)) * 100).toFixed(0);
		calcOutput.value = `${result}%`;
	} else {
		let result = Math.min(
			(1 - Math.pow(1 - parseInt(itemCount) * procChance, parseInt(cloverCount) + 1)) * 100,
			100
		).toFixed(0);
		if (parseInt(result) < 0 || result == '-Infinity' || parseInt(result) == 99) result = '100';
		calcOutput.value = `${result}%`;
	}
};

export default calculateValues;
