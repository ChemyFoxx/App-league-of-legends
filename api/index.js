// api/index.js
module.exports = async (req, res) => {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.24.1/data/es_ES/champion.json');
    const data = await response.json();
    res.status(200).json(data);
};
