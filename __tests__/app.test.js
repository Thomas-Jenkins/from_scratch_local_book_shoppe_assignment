const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('should return a list of books', async () => {
    const res = await request(app).get('/books');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(Number)
    });
  });
  
  afterAll(() => {
    pool.end();
  });
});
