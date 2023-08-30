const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${URL}/${id}`);
        const { name, gender, origin, status, image, specie } = response.data;
        let character = {
            id,
            name,
            gender,
            origin,
            status,
            image,
            specie
        };
        return character.name ? res.json(character) : res.status(404).send('Not Found');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getCharById,
};