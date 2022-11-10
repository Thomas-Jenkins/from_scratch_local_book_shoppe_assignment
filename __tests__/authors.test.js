const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
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
