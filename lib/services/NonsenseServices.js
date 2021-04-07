const Nonsense = require("../models/Nonsense")

module.exports = class NonsenseServices {
    static async createService({ farts, giggles, stubbedToes, lateNightSnack }) {
        const nonsense = await Nonsense.insert({ farts, giggles, stubbedToes, lateNightSnack });
        return nonsense;
    }

    static async getAllService() {
        const nonsense = await Nonsense.getAllModel();
        return nonsense;
    }

    static async getByIdService(id) {
        const nonsense = await Nonsense.getByIdModel(id);
        return nonsense;
    }

    static async updateByIdService({ farts, giggles, stubbedToes, lateNightSnack }, id) {
        const nonsense = await Nonsense.updateByIdModel({ farts, giggles, stubbedToes, lateNightSnack }, id);
        return nonsense;
    }

    static async deleteByIdService(id) {
        const nonsense = await Nonsense.deleteByIdModel(id);
        return nonsense;
    }
  
}