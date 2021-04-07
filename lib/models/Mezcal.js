const pool = require('../utils/pool');

module.exports = class Mezcal {
    id;
    brand;
    name;
    agave;
    singleAgave;
    producer;
    abv;

    constructor(row) {
        this.id = row.id;
        this.brand = row.brand;
        this.name = row._name;
        this.agave = row.agave;
        this.singleAgave = row.single_agave_species;
        this.producer = row.producer;
        this.abv = row.abv;
    }

    static async insert({ brand, name, agave, singleAgave, producer, abv }) {
        const { rows } =
            await pool.query(`
        INSERT INTO mezcal (brand, _name, agave, single_agave_species, producer, abv)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
            `,
                [brand, name, agave, singleAgave, producer, abv]);
        return new Mezcal(rows[0]);
    }

    static async getAllModel() {
        const { rows } =
            await pool.query(`
        SELECT *
        FROM mezcal
            `);
        return rows.map(row => {
            return new Mezcal(row);
        });
    }
}