const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('/authors/:id should return details of a single author matching the id', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
      books: expect.any(Array)
    });
  });

  it('should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    const entryOne = {
      id: '1',
      name: 'Clayson Woffenden',
      dob: '04/30/1967', 
      pob: 'Kiel'
    };
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toEqual(entryOne);
  });

  afterAll(() => {
    pool.end();
  });
});
