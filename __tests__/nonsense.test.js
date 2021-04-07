const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Nonsense = require('../lib/models/Nonsense');

const newNonsense = {
    farts: true,
    giggles: 420,
    stubbedToes: false,
    lateNightSnack: 'B.L.T.'
}
const dbNewNonsense = {
    ...newNonsense,
    id: '1'
}
const updatedNonsense = {
    farts: false,
    giggles: 666,
    stubbedToes: true,
    lateNightSnack: 'A.B.L.T.'
}
const dbUpdatedNonsense = {
    ...updatedNonsense,
    id: '1'
}
const deleteNonsense = {
    ...newNonsense
}
const dbDeleteNonsense = {
    ...deleteNonsense,
    id: '1'
}

describe('nonsense test routs', () => {
    beforeEach(() => {
        return setup(pool)
    });

    afterAll(() => pool.end())

    it('inserts a new nonsense into the nonsenseDB', async () => {
        const res = await request(app)
            .post('/api/v1/nonsense')
            .send(newNonsense);
        expect(res.body).toEqual(dbNewNonsense);
    })
    
    it('gets all items from the nonsenseDB', async () => {
        await Nonsense.insert(newNonsense);
        const res = await request(app)
            .get('/api/v1/nonsense');
        expect(res.body).toEqual([dbNewNonsense]);
        
    })

    it('gets an item selected by id from nonsenseDB', async () => {
        await Nonsense.insert(newNonsense);
        const res = await request(app)
            .get('/api/v1/nonsense/1')
        expect(res.body).toEqual(dbNewNonsense);
    })

    it('updates an item selected by ID from the nonsenseDB', async () => {
        await Nonsense.insert(newNonsense);
        const res = await request(app)
            .put('/api/v1/nonsense/1')
            .send(updatedNonsense);
        expect(res.body).toEqual(dbUpdatedNonsense);
    })

    it('deletes an item selected by ID from the nonsenseDB', async () => {
        await Nonsense.insert(deleteNonsense);
        const res = await request(app)
            .delete('/api/v1/nonsense/1')
        expect(res.body).toEqual(dbDeleteNonsense);
    })
    
})