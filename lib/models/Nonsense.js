const pool = require("../utils/pool");

module.exports = class Nonsense {
    id;
    farts;
    giggles;
    stubbedToes;
    lateNightSnack;

    constructor(row) {
        this.id = row.id;
        this.farts = row.farts;
        this.giggles = row.giggles;
        this.stubbedToes = row.stubbed_toes;
        this.lateNightSnack = row.late_night_snack;
    }

    static async insert({ farts, giggles, stubbedToes, lateNightSnack }) {
        const { rows } =
            await pool.query(`
            INSERT INTO nonsense (farts, giggles, stubbed_toes, late_night_snack)
            VALUES($1, $2, $3, $4)
            RETURNING *
        `,
                [farts, giggles, stubbedToes, lateNightSnack]);
        return new Nonsense(rows[0]);
    }

    static async getAllModel() {
        const { rows } =
            await pool.query(`
        SELECT *
        From nonsense
        `);
        return rows.map(row => {
            return new Nonsense(row)
        });
    }

    static async getByIdModel(id) {
        const { rows } =
            await pool.query(`
        SELECT *
        FROM nonsense
        WHERE id = $1
        `, [id]);
        return new Nonsense(rows[0]);
    }

    static async updateByIdModel({ farts, giggles, stubbedToes, lateNightSnack }, id) {
        const { rows } =
            await pool.query(`
            UPDATE nonsense
            SET farts=$1, giggles=$2, stubbed_toes=$3, late_night_snack=$4
            WHERE id=$5
            RETURNING *
        `,
                [farts, giggles, stubbedToes, lateNightSnack, id]);
        return new Nonsense(rows[0]);
    }

    static async deleteByIdModel(id) {
        const { rows } =
            await pool.query(`
        DELETE
        FROM nonsense
        WHERE id=$1
        RETURNING *
        `, [id]);
        if (!rows[0]) throw new Error(`no gin with the id ${id} found`);
        return new Nonsense(rows[0]);
    }
}