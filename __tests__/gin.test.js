const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Gin = require('../lib/models/Gin');

const newGin = {
    brand: 'Beefeater',
    name: 'Beefeater London Dry Gin',
    origin: 'London, England',
    botanicals: 'Juniper, Orris Root, Coriander Seeds, Liquorice Root, Almonds, Lemon Peel, Seville Orange Peel, Angelica Root',
    numberOfBotanicals: 9,
    baseSpirit: '100% grain',
    barrelAged: false,
    typeOfStill: 'steam heated swan necked copper pot stills',
    style: 'Classic: London Dry'
}

const dBNewGin = {
    ...newGin,
    id: '1'
}

const updatedGin = {
     brand: 'Aviation',
    name: 'AviationGin',
    origin: 'Portland, Oregon',
    botanicals: 'Juniper, Orris Root, Coriander Seeds, Liquorice Root, Almonds, Lemon Peel, Seville Orange Peel, Angelica Root', 
    numberOfBotanicals: 9,
    baseSpirit: '100% grain',
    barrelAged: false,
    typeOfStill: 'steam heated swan necked copper pot stills',
    style: 'Contemporary: American Dry'
}

const dBUpdatedGin = {
    ...updatedGin,
    id: '1'
}

const deletedGin = {
    ...updatedGin
}

const dbDeletedGin = {
    ...deletedGin,
    id: '1'
}

describe('gin test routes', () => {
    beforeEach(() => {
        return setup(pool)
    });

    afterAll(() => pool.end())

    it('inserts a new gin object into the ginDB', async () => {
        const res = await request(app)
            .post('/api/v1/gin')
            .send(newGin);
        expect(res.body).toEqual(dBNewGin);
    })

    it('returns all items in the ginDB', async () => {
       await Gin.insert(newGin);
        const res = await request(app)
            .get('/api/v1/gin');
        expect(res.body).toEqual([dBNewGin]);
    })

    it('returns an item selected by ID from the ginDB', async () => {
        await Gin.insert(newGin);
        const res = await request(app)
            .get('/api/v1/gin/1');
        expect(res.body).toEqual(dBNewGin);
    })

    it('updates an item selected by ID in the ginDb', async () => {
        await Gin.insert(newGin);
        const res = await request(app)
            .put('/api/v1/gin/1')
            .send(updatedGin);
        expect(res.body).toEqual(dBUpdatedGin)
    })

    it('deletes an item selected by ID fro, the ginDB',
        async () => {
           await Gin.insert(deletedGin);
            const res = await request(app)
                .delete('/api/v1/gin/1')
            expect(res.body).toEqual(dbDeletedGin);
    })
})
