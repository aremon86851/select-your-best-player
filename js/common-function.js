function selectedPlayer(playerId, btnId) {
    const countElement = document.querySelectorAll('li');
    const countElementLength = countElement.length;
    if (countElementLength === 5) {
        alert('You are already selected five players');
        return
    }
    const playerNameContainer = document.getElementById(playerId);
    const listItemContainer = document.getElementById('list-item')
    const playerName = playerNameContainer.innerText;
    const creatListitem = document.createElement('li')
    creatListitem.innerHTML = `
    <a class="ps-3 text-decoration-none text-light" href="#">${playerName}</a>
    `;
    const selectedbtnId = document.getElementById(btnId);
    selectedbtnId.setAttribute('disabled', true);
    selectedbtnId.style.backgroundColor = "grey";
    listItemContainer.appendChild(creatListitem);
}

function perPlayerPrices(perPlayerId, totalExpensesId) {
    const perPlayerPriceContainer = document.getElementById(perPlayerId);
    const perPlayerPriceString = perPlayerPriceContainer.value;
    const perPlayerPrice = parseFloat(perPlayerPriceString);
    if (isNaN(perPlayerPrice)) {
        alert('Please! Enter a number in "PER PLAYER" field')
        return
    }
    const countElement = document.querySelectorAll('li');
    const countElementLength = countElement.length;
    const totalExpenses = perPlayerPrice * countElementLength;
    const totalExpensesContainer = document.getElementById(totalExpensesId);

    totalExpensesContainer.innerText = totalExpenses;
}

function perPlayerTotal(totalId) {
    const totalExpensesContainers = document.getElementById(totalId);
    const totalExpensesNumber = totalExpensesContainers.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesNumber);
    return totalExpensesAmount;
}
function managerSalaryAmount(managerId) {
    const managerSalaryContainer = document.getElementById(managerId);
    const managerSalaryString = managerSalaryContainer.value;
    const managerSalary = parseFloat(managerSalaryString);
    if (isNaN(managerSalary)) {
        alert('Please! Enter a number in "MANAGER" field')
        return
    }
    return managerSalary;
}
function coachSalaryId(coachId) {
    const coachSalaryContainer = document.getElementById(coachId);
    const coachSalaryString = coachSalaryContainer.value;
    const coachSalary = parseFloat(coachSalaryString);
    if (isNaN(coachSalary)) {
        alert('Please! Enter a number in "COACH" field')
        return
    }
    return coachSalary;
}