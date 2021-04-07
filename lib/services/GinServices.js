const Gin = require('../models/Gin');

module.exports = class GinServices {
    static async createService({ brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style }) {
        const gin = await Gin.insert({ brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style });
        return gin;
    }

    static async getAllService() {
        const gin = await Gin.getAllModel();
        return gin;
    }

    static async getByIdService(id) {
        const gin = await Gin.getByIdModel(id);
        return gin;
    }

    static async updateByIdService({ brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style }, id) {
        const gin = await Gin.updateByIdModel({
            brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style
        }, id);
        return gin
    }

    static async deleteByIdService(id) {
        const gin = await Gin.deleteByIdModel(id);
        return gin;
    }
}

