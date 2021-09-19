'use strict';
// const { Pool } = require('pg');
process.env.NODE_ENV = 'test';
const db = require('../db');
const request = require('supertest');
const app = require('../app.js');
require('dotenv').config();
const sub = process.env.SUB;

beforeAll(async () => {
  await db.query('CREATE TABLE users (id SERIAL PRIMARY KEY, auth_id VARCHAR(255) UNIQUE, first_name VARCHAR(255), last_name VARCHAR(255), email_address VARCHAR(255) UNIQUE);');
  await db.query('CREATE TABLE hikes_list (id SERIAL PRIMARY KEY, user_id INT NOT NULL, name VARCHAR(255) NOT NULL, description TEXT NOT NULL, length VARCHAR(255) NOT NULL, elevation_gain VARCHAR(255), time VARCHAR(255), keywords VARCHAR(255), latitude DECIMAL NOT NULL, longitude DECIMAL NOT NULL);');
  await db.query('CREATE TABLE trip_reports (id SERIAL PRIMARY KEY, hike_id INT NOT NULL, user_id INT NOT NULL, name VARCHAR(255), title VARCHAR(255) NOT NULL, description TEXT NOT NULL, hiked_at VARCHAR(255))');
});

beforeEach(async () => {
  await db.query('INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ($1, $2, $3, $4)', [`${sub}`, 'Carly', 'Test', 'carly@gmail.com']);
  await db.query('INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [1, 'hike1', 'Testing description', '5 miles', '1000 ft', '5 hours', 'mountain', 1.000, 1.500]);
});

afterEach(async () => {
  await db.query('DELETE FROM hikes_list');
  await db.query('DELETE FROM users');
});

afterAll(async () => {
  await db.query('DROP TABLE trip_reports');
  await db.query('DROP TABLE hikes_list');
  await db.query('DROP TABLE users');

  db.end();
});

describe('server and postgres database tests', () => {
  it('GET /hikes/:id -> should get detail for a hike', async () => {
    const response = await request(app).get('/api/v1/hikes/1');

    expect(response.status).toEqual(200);
  });

  it('POST /hikes -> should post detail for a hike', async () => {
    const response = await request(app).post('/api/v1/hikes').send({
      user: {
        'sub': `${sub}`,
      },
      name: 'hike2',
      description: 'hike2 description',
      length: '1000 m',
      elevation_gain: '5000 ft',
      time: '3 hours',
      keywords: 'hike2 keywords',
      latitude: 1.000,
      longitude: 1.500,
    });

    expect(response.status).toEqual(201);
  });

  it('POST /hikes/:id/addreport -> should add a trip report', async () => {
    const response = await request(app).post('/api/v1/hikes/1/addreport').send({
      user: {
        'sub': `${sub}`,
      },
      name: 'Carly',
      title: 'Trip report test',
      description: 'Great day for this hike!',
      date: 'Sept 17',
    });
    expect(response.status).toEqual(201);
  });


  it('PUT /hikes/:id -> should update detail for a hike', async () => {
    const response = await request(app).put('/api/v1/hikes/2').send(
      {
        name: 'hike2 test',
        description: 'hike2 description edit test',
        length: '1000 m',
        elevation_gain: '5000 ft',
        time: '3 hours',
        keywords: 'testing edit',
        latitude: 1.000,
        longitude: 1.500,
      });

    expect(response.status).toEqual(200);
  });

  it('DELETE /hikes/:id -> should delete the specified hike', async () => {
    const response = await request(app).delete('/api/v1/hikes/2');

    expect(response.status).toEqual(204);
  });
});
