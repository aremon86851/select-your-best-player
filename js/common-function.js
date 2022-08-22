function selectedPlayer(playerId, btnId) {
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