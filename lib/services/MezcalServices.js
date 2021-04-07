const Mezcal = require('../models/Mezcal');


module.exports = class MezcalServices {

    static async create({ brand, name, agave, singleAgave, producer, abv }) {
        const mezcal = await Mezcal.insert({ brand, name, agave, singleAgave, producer, abv });
        return mezcal;
    }

    static async getAllService() {
        const mezcal = await Mezcal.getAllModel();
        return mezcal;
    }

    static async getByIdService(id) {
        const mezcal = await Mezcal.getByIdModel(id);
        return mezcal;
    }

    static async updateByIdService({ brand, name, agave, singleAgave, producer, abv }, id ) {
        const mezcal = await Mezcal.updateByIdModel({
            brand, name, agave, singleAgave, producer, abv
        }, id);

        return mezcal;
    }

    static async deleteByIdService(id) {
        const mezcal = await Mezcal.deleteByIdModel(id);
        return mezcal;
    }
}

