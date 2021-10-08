'use strict';

const express = require('express');
const db = require('./db/index.js');
const cors = require('cors');
const helmet = require('helmet');
const axios = require('axios');
const { checkJwt } = require('./auth/check-jwt');

require('dotenv').config();
const domain = process.env.REACT_APP_AUTH0_DOMAIN;

const app = express();
//Middelware - sits between request and response, has access to both
app.use(cors()); //allows access from any origin to server resources
app.use(helmet()); //helps to secure express apps by setting http headers
app.use(express.json()); //takes info in body of request and attaches to request object under body property
app.use(express.urlencoded({ extended: true })); //parses incoming requests with urlencoded payloads

//Get all hikes
app.get('/api/v1/hikes', checkJwt, getHikes); //auth to get to home page
//Get for list page
app.get('/api/v1/hikes/list', checkJwt, getMyHikes); //auth to view users hikes
//Search functionality
app.post('/api/v1/hikes/search', searchForHikes);
//Get an individual hike info
app.get('/api/v1/hikes/:id', getHikeInfo);
//Crud operations for /hikes to save, update, and delete
app.post('/api/v1/hikes', saveHike);
app.put('/api/v1/hikes/:id', updateHike);
app.delete('/api/v1/hikes/:id', deleteHike);
//Post a new trip report for a specified hike
app.post('/api/v1/hikes/:id/addreport', saveReport);


//Route callback functions
//Get all hikes callback - GET
//Auth route - check for token, query db to see if user exists, if so get hikes, if not add to db and get hikes
async function getHikes(req, res){
  try{
    const accessToken = req.headers.authorization.split(' ')[1];
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = response.data;
    const user = await db.query('SELECT id FROM users WHERE auth_id=$1', [userInfo.sub]);
    let userId = user;
    if(user.rows.length === 0){
      let name = userInfo.name.split(' ');
      let userInfoArray = [userInfo.sub, name[0], name[1], userInfo.nickname];
      const newUser = await db.query('INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ($1, $2, $3, $4) RETURNING *;', userInfoArray);
      userId = newUser.rows[0].id;
    }
    if(typeof userId === 'object'){
      userId = user.rows[0].id;
    }
    const results = await db.query('SELECT * FROM hikes_list;');
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        hikes: results.rows,
        user: userId,
      },
    });
  } catch(err){
    console.log(err);
  }
}


//Get one callback - GET
//Get hike id from params, query db for hike detail
async function getHikeInfo(req, res){
  try{
    const hikes = await db.query('SELECT * FROM hikes_list WHERE id = $1;', [req.params.id]);
    const reports = await db.query('SELECT * FROM trip_reports WHERE hike_id = $1;', [req.params.id]);
    res.status(200).json({
      status: 'success',
      data: {
        hike: hikes.rows[0],
        reports: reports.rows,
      },
    });
  } catch(err){
    console.log(err);
  }
}

//Create hike callback - POST
//Query db for userId from sub (auth0 property in usercontext), insert new hike details into db
async function saveHike(req, res){
  try{
    const userSubFromAuth0 = req.body.user.sub;
    const user = await db.query('SELECT id FROM users WHERE auth_id=$1', [userSubFromAuth0]);
    const userId = user.rows[0].id;
    const array = [userId, req.body.name, req.body.description, req.body.length, req.body.elevation_gain, req.body.time, req.body.keywords, req.body.latitude, req.body.longitude];
    const results = await db.query('INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;', array);
    res.status(201).json({
      status: 'success',
      data: {
        hike: results.rows[0],
      },
    });
  } catch(err){
    console.log(err);
  }
}

//Create a new trip report - POST
//Query db for userId from sub, insert new trip report info
async function saveReport(req, res){
  try {
    const userSubFromAuth0 = req.body.user.sub;
    const user = await db.query('SELECT id FROM users WHERE auth_id=$1', [userSubFromAuth0]);
    const userId = user.rows[0].id;
    const array = [req.params.id, userId, req.body.name, req.body.title, req.body.description, req.body.date];
    const results = await db.query('INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;', array);
    res.status(201).json({
      status: 'success',
      data: {
        report: results.rows[0],
      },
    });
  } catch(err){
    console.log(err);
  }
}

//Get user's hikes they have contributed - GET
//Auth route - check for access token, query db for userId, then query db for hikes for that user
async function getMyHikes(req, res){
  try{
    const accessToken = req.headers.authorization.split(' ')[1];
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = response.data;

    const user = await db.query('SELECT id FROM users WHERE auth_id=$1', [userInfo.sub]);
    const userId = user.rows[0].id;
    const results = await db.query('SELECT * FROM hikes_list WHERE user_id=$1', [userId]);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        hikes: results.rows,
      },
    });
  } catch(err){
    console.log(err);
    res.send(err.message);
  }
}

//Update hike callback - PUT
//Get hike_id from params, update hikes_list for that hike id
async function updateHike(req, res){
  try{
    const array = [req.body.name, req.body.description, req.body.length, req.body.elevation_gain, req.body.time, req.body.keywords, req.body.latitude, req.body.longitude, req.params.id];
    const results = await db.query('UPDATE hikes_list SET name=$1, description=$2, length=$3, elevation_gain=$4, time=$5, keywords=$6, latitude=$7, longitude=$8 WHERE id=$9 RETURNING *;', array);
    res.status(200).json({
      status: 'success',
      data: {
        hike: results.rows[0],
      },
    });
  } catch(err){
    console.log(err);
  }
}

//Delete hike callback - DELETE
//Get hike_id from params, delete from hikes_list for that id
async function deleteHike(req, res){
  try{
    await db.query('DELETE FROM hikes_list WHERE id=$1;', [req.params.id]);
    res.status(204).json({
      status: 'success',
    });
  } catch(err){
    console.log(err);
  }
}

//GET - hikes based on search input
//Get input from request, search DB and return hikes that match input
//Note this could a match be from name, description, keywords, etc
async function searchForHikes(req, res){
  console.log(req.body);
  try{
    //db query with search words
    const array = [req.body.searchTerms];
    const searchTypeString = req.body.searchType;
    const updatedSearch = searchTypeString.replace(/^'(.*)'$/, '$1'); //this cannot have '' for query to work
    const results = await db.query(`SELECT * FROM hikes_list WHERE to_tsvector(${updatedSearch}) @@ to_tsquery($1);`, array); //need to ensure the first query parameter is not a string, as it is reference to a table in db
    res.status(201).json({
      status: 'success',
      data: {
        hikes: results.rows,
      },
    });
  } catch(err){
    console.log(err);
  }
}

module.exports = app;
