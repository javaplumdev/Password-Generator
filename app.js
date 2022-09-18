const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');
const lenEl = document.getElementById('len');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`=';

const getUpperCase = () => {
	return uppercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
};

const getLowerCase = () => {
	return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
};

const getNumberCase = () => {
	return numbers[Math.floor(Math.random() * numbers.length)];
};

const getSymbolsCase = () => {
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
	const len = lenEl.value;

	let password = '';

	if (uppercaseEl.checked) {
		password += getUpperCase();
	}

	if (lowercaseEl.checked) {
		password += getLowerCase();
	}

	if (numberEl.checked) {
		password += getNumberCase();
	}

	if (symbolsEl.checked) {
		password += getSymbolsCase();
	}

	for (let i = password.length; i < len; i++) {
		const x = generateX();
		password += x;
	}

	resultEl.innerText = password;
};

const generateX = () => {
	const xs = [];

	if (uppercaseEl.checked) {
		xs.push(getUpperCase());
	}

	if (lowercaseEl.checked) {
		xs.push(getLowerCase());
	}

	if (numberEl.checked) {
		xs.push(getNumberCase());
	}

	if (symbolsEl.checked) {
		xs.push(getSymbolsCase());
	}

	if (xs.length === 0) return '';

	return xs[Math.floor(Math.random() * xs.length)];
};

generateEl.addEventListener('click', generatePassword);

const copyText = () => {
	const textarea = document.createElement('textarea');

	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;

	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();

	alert('Password copied');
};

clipboardEl.addEventListener('click', copyText);
