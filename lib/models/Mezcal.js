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

    static async getByIdModel(id) {
        const { rows } =
            await pool.query(`
        SELECT *
        FROM mezcal
        WHERE id=$1
            `, [id]);
        return new Mezcal(rows[0]);
    }

    static async updateByIdModel({ brand, name, agave, singleAgave, producer, abv }, id) {
        const { rows } =
            await pool.query(`
        UPDATE mezcal
        SET brand=$1, _name=$2, agave=$3, single_agave_species=$4, producer=$5, abv=$6
        WHERE id=$7
        RETURNING *
            `,
                [brand, name, agave, singleAgave, producer, abv, id]);
        return new Mezcal(rows[0]);
    }

    static async deleteByIdModel(id) {
        const { rows } =
            await pool.query(`
        DELETE
        FROM mezcal
        WHERE id=$1
        RETURNING *
            `,
                [id]);
        if (!rows[0]) throw new Error(`no mezcal with id ${id} found`);
        return new Mezcal(rows[0]);
    }
}