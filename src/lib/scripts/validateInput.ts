const validateInput = (event) => {
	let inputField = event.target;

	if (inputField.classList.contains('int')) {
		inputField.value = inputField.value.replace(/\D/g, '');
	} else if (inputField.classList.contains('float')) {
		inputField.value = inputField.value.replace(/[^0-9.]/g, '');
	}

	if (inputField.value >= 1 && inputField.value.startsWith(0))
		inputField.value = inputField.value.substring(1);
	if (inputField.value.length == 0) inputField.value = 0;
};

export default validateInput;
