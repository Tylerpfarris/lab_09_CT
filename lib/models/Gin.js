const pool = require('../utils/pool');

module.exports = class Gin {
    id;
    brand;
    name;
    origin;
    botanicals;
    numberOfBotanicals;
    baseSpirit;
    barrelAged;
    typeOfStill;
    style;

    constructor(row) {
        this.id = row.id;
        this.brand = row.brand;
        this.name = row._name;
        this.origin = row.origin;
        this.botanicals = row.botanicals;
        this.numberOfBotanicals = row.number_of_botanicals;
        this.baseSpirit = row.base_spirit;
        this.barrelAged = row.barrel_aged;
        this.typeOfStill = row.type_of_still;
        this.style = row.style;
    }

    static async insert({ brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style }) {
        const { rows } =
            await pool.query(`
        INSERT INTO gin (brand, _name, origin, botanicals, number_of_botanicals, base_spirit, barrel_aged, type_of_still, style)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *
            `,
                [brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style]);
        return new Gin(rows[0]);
    }

    static async getAllModel() {
        const { rows } =
            await pool.query(`
        SELECT *
        FROM gin
        `);
        return rows.map(row => {
            return new Gin(row);
        })
    }

    static async getByIdModel(id) {
        const { rows } =
            await pool.query(`
        SELECT *
        FROM gin
        WHERE id=$1`,
                [id]);
        return new Gin(rows[0]);
    }

    static async updateByIdModel({ brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style }, id) {
        const { rows } =
            await pool.query(`
        UPDATE gin
        SET brand=$1, _name=$2, origin=$3, botanicals=$4, number_of_botanicals=$5, base_spirit=$6, barrel_aged=$7, type_of_still=$8, style=$9
        WHERE id=$10
        RETURNING *
        `,
                [brand, name, origin, botanicals, numberOfBotanicals, baseSpirit, barrelAged, typeOfStill, style, id]);
        return new Gin(rows[0]);
    }

    static async deleteByIdModel(id) {
        const { rows } =
            await pool.query(`
        DELETE
        FROM gin
        WHERE id=$1
        RETURNING *
        `,
                [id]);
        if (!rows[0]) throw new Error(`no gin with the id ${id} found`);
        return new Gin(rows[0]);
    }
}