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
    perPlayerPrices('per-player-price-id', 'total-expenses')
})
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const totalExpensesAmount = perPlayerTotal('total-expenses');
    const managerSalary = managerSalaryAmount('manager-salary-id');
    const coachSalary = coachSalaryId('coach-salary-id');

    const inTotalExpensesContainer = document.getElementById('total-expenses-amount');
    const inTotalExpenses = totalExpensesAmount + managerSalary + coachSalary;
    inTotalExpensesContainer.innerText = inTotalExpenses;
})
