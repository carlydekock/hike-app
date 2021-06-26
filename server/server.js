const express = require('express');
const db = require('./db/index.js');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3001;
const helmet = require('helmet');
// const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');
// const bodyParser = require('body-parser');
//http request logger middleware
// const morgan = require('morgan');

const app = express();
//middleware that will take info in body of request and attach to request object under property called body
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(morgan('dev'));
// app.use((req, res, next) => {
//   console.log('middleware ran');
//   next();
// })

//Get all hikes
app.get('/api/v1/hikes', getHikes);
//Get an individual hike info
app.get('/api/v1/hikes/:id', getHikeInfo);

//Crud operations for /hikes to save, update, and delete
app.post('/api/v1/hikes', saveHike);
app.put('/api/v1/hikes/:id', updateHike);
app.delete('/api/v1/hikes/:id', deleteHike);
app.post('/api/v1/hikes/:id/addreport', saveReport);

// //search page routes
// app.get('/api/v1/search/new', getSearch);
// app.post('/api/v1/search', makeHikeSearch);

//Route callback functions
//Get all callback - GET
async function getHikes(req, res){
  try{
    const results = await db.query('SELECT * FROM hikes_list;');
    // console.log('hit the hikes route');
    // console.log(results);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        hikes: results.rows,
      }
    });
  } catch(err){
      console.log(err);
  }
};

//Get one callback - GET
async function getHikeInfo(req, res){
  console.log(req.params.id);
  try{
    const hikes = await db.query('SELECT * FROM hikes_list WHERE id = $1;', [req.params.id]);
    const reports = await db.query('SELECT * FROM trip_reports WHERE hike_id = $1;', [req.params.id]);
    res.status(200).json({
      status: 'success',
      data: {
        hike: hikes.rows[0],
        reports: reports.rows,
      }
    });
  } catch(err){
    console.log(err);
  }
};

//Create hike callback - POST
async function saveHike(req, res){
  console.log(req.body);
  try{
    const array = [req.body.name, req.body.description, req.body.length, req.body.elevation_gain, req.body.time, req.body.keywords, req.body.latitude, req.body.longitude];
    const results = await db.query('INSERT INTO hikes_list (name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;', array);
    res.status(201).json({
      status: 'success',
      data: {
        hike: results.rows[0]
      }
    })
  } catch(err){
    console.log(err);
  }
};

//TODO: This needs dynamic user id from login
async function saveReport(req, res){
  console.log(req.body);
  try {
    const array = [req.params.id, '1', req.body.name, req.body.title, req.body.description, req.body.date];
    const results = await db.query('INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;', array);
    console.log(results)
    res.status(201).json({
      status: 'success',
      data: {
        report: results.rows[0]
      }
    })
  } catch(err){
    console.log(err);
  }
}


//Update hike callback - PUT
async function updateHike(req, res){
  console.log(req.params.id);
  console.log(req.body);
  try{
    const array = [req.body.name, req.body.description, req.body.length, req.body.elevation_gain, req.body.time, req.body.keywords, req.body.latitude, req.body.longitude, req.params.id];
    const results = await db.query('UPDATE hikes_list SET name=$1, description=$2, length=$3, elevation_gain=$4, time=$5, keywords=$6, latitude=$7, longitude=$8 WHERE id=$9 RETURNING *;', array);
    res.status(200).json({
      status: 'success',
      data: {
        hike: results.rows[0],
      }
    })
  } catch(err){
    console.log(err);
  }
};

//Delete hike callback - DELETE
async function deleteHike(req, res){
  console.log(req.params.id);
  try{
    const results = await db.query('DELETE FROM hikes_list WHERE id=$1;', [req.params.id]);
    res.status(204).json({
      status: 'success',
    })
  } catch(err){
    console.log(err);
  }
}


app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
