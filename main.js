function calculateEarnings(currentDay, daysStock, hourlyRate, hours) {
	const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВСКР'];
	let indexOfDay = days.indexOf(currentDay);
	if (indexOfDay === -1) return;
	let moneyEarned = 0;
	for (let i = 0; i < daysStock; i++) {
		if (indexOfDay === 5) {
			indexOfDay++;
		} else if (indexOfDay === 6) {
			indexOfDay = 0;
		} else {
			moneyEarned += hours * hourlyRate;
			indexOfDay++;
		}
	}
	return moneyEarned;
}

function getValue(attibuteName) {
	const selector = document.querySelector(`[name=${attibuteName}]`);
	const value = selector.value;
	return value;
}

function handleSubmitForm(event) {
	event.preventDefault();
	const daysCount = getValue('days');
	const dayOfWeek = getValue('day');
	const hours = getValue('hours');
	const hourlyRate = getValue('rate');
	
	const earnings = calculateEarnings(dayOfWeek, daysCount, hourlyRate, hours);
	showEarning(earnings);
}

function showEarning(earnings) {
	const salaryDiv = document.querySelector('.salary');
	if (!salaryDiv) {
		const div = document.createElement('div');
		div.setAttribute('class', 'salary');
		div.innerHTML = `Ваша зарплата составит <span class="salary-number">${earnings}</span> рублей`;
		const form = document.querySelector('.form-fieldset');
		form.append(div);
	} else {
		salaryDiv.innerHTML = `Ваша зарплата составит <span class="salary-number">${earnings}</span> рублей`;
	}
}