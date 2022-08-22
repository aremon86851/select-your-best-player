document.getElementById('lionel-messi').addEventListener('click', function () {
    selectedPlayer('lionel-messi-heading', 'lionel-messi');
})

document.getElementById('jr-neymar').addEventListener('click', function () {
    selectedPlayer('jr-neymar-heading', 'jr-neymar');
})
document.getElementById('vitor-machabo').addEventListener('click', function () {
    selectedPlayer('vitor-machado-heading', 'vitor-machabo');
})
document.getElementById('mbappe').addEventListener('click', function () {
    selectedPlayer('mabppe-heading', 'mbappe');
})
document.getElementById('mauro-icardi').addEventListener('click', function () {
    selectedPlayer('mauro-icardi-heading', 'mauro-icardi');
})
document.getElementById('sergio-ramos').addEventListener('click', function () {
    selectedPlayer('segio-ramos-heading', 'sergio-ramos');
})
document.getElementById('angle-de-maria').addEventListener('click', function () {
    selectedPlayer('angle-de-maria-heading', 'angle-de-maria');
})
document.getElementById('edinson-cavani').addEventListener('click', function () {
    selectedPlayer('edinson-cavani-heading', 'edinson-cavani');
})
document.getElementById('renato-sanches').addEventListener('click', function () {
    selectedPlayer('renato-sanches-heading', 'renato-sanches');

})
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerPriceContainer = document.getElementById('per-player-price-id');
    const perPlayerPriceString = perPlayerPriceContainer.value;
    const perPlayerPrice = parseFloat(perPlayerPriceString);
    const countElement = document.querySelectorAll('li');
    const countElementLength = countElement.length;
    if (countElementLength == '5') {
        alert('You are selected alreay 5')
    }
    const totalExpenses = perPlayerPrice * countElementLength;
    const totalExpensesContainer = document.getElementById('total-expenses');
    totalExpensesContainer.innerText = totalExpenses;
})
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const totalExpensesContainers = document.getElementById('total-expenses');
    const totalExpensesNumber = totalExpensesContainers.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesNumber);

    const managerSalaryContainer = document.getElementById('manager-salary-id');
    const managerSalaryString = managerSalaryContainer.value;
    const managerSalary = parseFloat(managerSalaryString);

    const coachSalaryContainer = document.getElementById('coach-salary-id');
    const coachSalaryString = coachSalaryContainer.value;
    const coachSalary = parseFloat(coachSalaryString);

    const inTotalExpensesContainer = document.getElementById('total-expenses-amount');
    const inTotalExpenses = totalExpensesAmount + managerSalary + coachSalary;
    inTotalExpensesContainer.innerText = inTotalExpenses;
})
