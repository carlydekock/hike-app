const express = require('express');
const db = require('./db/index.js');
const cors = require('cors');
const helmet = require('helmet');
const axios = require('axios');
const { checkJwt } = require('./auth/check-jwt');

require('dotenv').config();
const port = process.env.PORT || 3001;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const app = express();
//middleware that will take info in body of request and attach to request object under property called body
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TESTING AUTH
app.get('/protected', checkJwt, async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    const userInfo = response.data;
    console.log(userInfo);
    res.send(userInfo);
  } catch(err){
    res.send(err);
  }
});


//Get all hikes
app.get('/api/v1/hikes', checkJwt, getHikes);
//Get for list page
app.get('/api/v1/hikes/list', checkJwt, getMyHikes);
//Get an individual hike info
app.get('/api/v1/hikes/:id', checkJwt, getHikeInfo);
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
    const accessToken = req.headers.authorization.split(' ')[1];
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    const userInfo = response.data;
    const user = await db.query('SELECT id FROM users WHERE auth_id=$1', [userInfo.sub]);
    console.log('this is user inside server gethikes', user);
    let userId = user;
    if(user.rows.length === 0){
      let name = userInfo.name.split(' ');
      let userInfoArray = [userInfo.sub, name[0], name[1], userInfo.nickname]
      const newUser = await db.query('INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ($1, $2, $3, $4) RETURNING *;', userInfoArray);
      console.log('this is the new user back from the db', newUser);
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
        user: userId
      }
    });
  } catch(err){
      console.log(err);
  }
};



//Get one callback - GET
async function getHikeInfo(req, res){
  try{
    const accessToken = req.headers.authorization.split(' ')[1];
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    const userInfo = response.data;
    const user = await db.query('SELECT id FROM users WHERE auth_id=$1', [userInfo.sub]);
    const userId = user.rows[0].id;

    const hikes = await db.query('SELECT * FROM hikes_list WHERE id = $1;', [req.params.id]);
    const reports = await db.query('SELECT * FROM trip_reports WHERE hike_id = $1;', [req.params.id]);
    res.status(200).json({
      status: 'success',
      data: {
        hike: hikes.rows[0],
        reports: reports.rows,
        userId: userId,
      }
    });
  } catch(err){
    console.log(err);
  }
};

//Create hike callback - POST
async function saveHike(req, res){
  try{
    const array = [req.body.userId, req.body.name, req.body.description, req.body.length, req.body.elevation_gain, req.body.time, req.body.keywords, req.body.latitude, req.body.longitude];
    const results = await db.query('INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;', array);
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

//Create a new trip report - rendering dynamically with user info
async function saveReport(req, res){
  console.log('this is inside save report', req.body);
  
  try {
    const userSubFromAuth0 = req.body.user.sub;
    const user = await db.query('SELECT id FROM users WHERE auth_id=$1', [userSubFromAuth0]);
    const userId = user.rows[0].id;
    const array = [req.params.id, userId, req.body.name, req.body.title, req.body.description, req.body.date];
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

//Get user's hikes they have contributed - rendering dynamically with user id
async function getMyHikes(req, res){
  try{
    //Adding in auth part of route
    const accessToken = req.headers.authorization.split(' ')[1];
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
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
      }
    });
  } catch(err){
      console.log(err);
      res.send(err.message);
  }
};

//Update hike callback - PUT
async function updateHike(req, res){
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
