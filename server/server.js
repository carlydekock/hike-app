const express = require('express');
const db = require('./db/index.js');
require('dotenv').config();
const port = process.env.PORT || 3001;
//http request logger middleware
const morgan = require('morgan');

const app = express();
//middleware that will take info in body of request and attach to request object under property called body
app.use(express.json());

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

// //search page routes
// app.get('/api/v1/search/new', getSearch);
// app.post('/api/v1/search', makeHikeSearch);

//Route callback functions
//Get all callback - GET
async function getHikes(req, res){
  try{
    const results = await db.query('SELECT * FROM hikes_list');
    // console.log('hit the hikes route');
    console.log(results);
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
    const results = await db.query('SELECT * FROM hikes_list WHERE id = $1', [req.params.id]);
    res.status(200).json({
      status: 'success',
      data: {
        hike: results.rows[0],
      }
    });
  } catch(err){
    console.log(err);
  }
};

//Create hike callback - POST
function saveHike(req, res){
  console.log(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      'hike two': 'another hike for the list',
    }
  });
};

//Update hike callback - PUT
function updateHike(req, res){
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      'hike': 'another hike for the list',
    }
  });
};

//Delete hike callback - DELETE
function deleteHike(req, res){
  console.log(req.params.id);
  res.status(204).json({
    status: "success"
  })
}

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
