// js/app.js
async function getChampions() {
    // Hacemos una solicitud al endpoint del backend (api/index.js)
    const response = await fetch('/api');
    const data = await response.json();

    // Accedemos a los campeones y los mostramos en la página
    const champions = data.data;
    const championsContainer = document.getElementById('champions-container');

    // Iteramos sobre cada campeón
    for (let champion in champions) {
        const champ = champions[champion];
        const champCard = document.createElement('div');
        champCard.classList.add('champion-card');

        champCard.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg" alt="${champ.name}">
            <h3>${champ.name}</h3>
        `;

        championsContainer.appendChild(champCard);
    }
}

// Llamamos a la función cuando se cargue la página
window.onload = getChampions;