const Mezcal = require('../models/Mezcal');


module.exports = class MezcalServices {

    static async create({ brand, name, agave, singleAgave, producer, abv }) {
        const mezcal = await Mezcal.insert({ brand, name, agave, singleAgave, producer, abv });
        return mezcal;
    }

    static async getAllService() {
        const mezcal = await Mezcal.getAllModel()
        return mezcal
    }
}