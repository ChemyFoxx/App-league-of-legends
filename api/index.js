// api/index.js
module.exports = async (req, res) => {
    try {
        // Realizamos la solicitud para obtener los campeones
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.24.1/data/es_ES/champion.json');
        const data = await response.json();

        // Devolvemos los datos a quien haya hecho la solicitud
        res.status(200).json(data); 
    } catch (error) {
        // En caso de error, respondemos con un mensaje de error
        console.error("Error en la función API:", error);
        res.status(500).json({ message: 'Hubo un problema con la API.' });
    }
};

