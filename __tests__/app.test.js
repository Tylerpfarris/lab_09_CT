const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Mezcal = require('../lib/models/Mezcal');

const newMezcal = {
  brand: 'Del Maguey',
  name: 'Vida',
  agave: 'Espadin',
  singleAgave: true,
  producer: 'Famila Cruz Nolasco _ Paciano and son, Marcos ',
  abv: 42
};

const DbMezcal = {
  ...newMezcal,
  id: '1'
}

describe('lab_09_CT routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('inserts a new mezcal object into the db', async () => {
    const res = await request(app)
      .post('/api/v1/mezcal')
      .send(newMezcal);
    expect(res.body).toEqual(DbMezcal);

  })

  it('returns all mezcal from the db ', async () => {
    Mezcal.insert(newMezcal);
    const res = await request(app)
      .get('/api/v1/mezcal');
    
    expect(res.body).toEqual([DbMezcal]);
  })

  it('returns a mezcal selected by id', async () => {
    Mezcal.insert(newMezcal);
    const res = await request(app)
      .get('/api/v1/mezcal/1');
    
    expect(res.body).toEqual(DbMezcal)
  })
});
