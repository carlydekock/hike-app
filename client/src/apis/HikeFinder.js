import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api/v1/hikes',
});

// export default axios.create({
//   baseURL: 'https://hike-finder-server.herokuapp.com/api/v1/hikes',
// });