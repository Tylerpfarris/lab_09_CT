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

const updatedMezcal = {
  brand: 'Smell Maguey',
  name: 'PETA',
  agave: 'Festadin',
  singleAgave: false,
  producer: 'ur mom',
  abv: 69,
}

const DbUpdatedMezcal = {
  ...updatedMezcal,
  id: '1'
}

const deleteMezcal = {
  ...updatedMezcal
}

const dbDeletedMezcal = {
  ...deleteMezcal,
  id: '1'
}

describe('mezcal test routes', () => {
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

  it('updates a mezcal selected by id', async () => {
    Mezcal.insert(newMezcal);
    const res = await request(app)
      .put('/api/v1/mezcal/1')
      .send(updatedMezcal);
    
    expect(res.body).toEqual(DbUpdatedMezcal)
  })

  it('deletes a mezcal from the db by id', async () => {
    Mezcal.insert(deleteMezcal);
    const res = await request(app)
      .delete(`/api/v1/mezcal/1`)
    
    expect(res.body).toEqual(dbDeletedMezcal)
  })
});
