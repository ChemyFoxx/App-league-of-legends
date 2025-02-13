async function getChampions() {
    try {
        const response = await fetch('/api');
        const data = await response.json();

        const champions = data.data;
        const championsContainer = document.getElementById('champions-container');

        // Iterar sobre los campeones y mostrarlos en la página
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
    } catch (error) {
        console.error('Error al cargar los campeones:', error);
    }
}

window.onload = getChampions;
