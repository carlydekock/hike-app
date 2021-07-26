import React from 'react';
import Header from '../components/Header';
import MyHikesList from '../components/MyHikesList';
import NavBar from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

const List = () => {
  const { getAccessTokenSilently } = useAuth0();

  async function callProtectedRoute(){
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get('http://localhost:3000/api/v1/hikes/list', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      console.log(response.data);
    } catch (err){
      console.log(err.message);
    }
  }


  return (
    <div>
      <NavBar />
      <Header />
      <button onClick={callProtectedRoute}>Call protected route</button>
      {/* <AddHike /> */}
      {/* <MyHikesList callSecureRoute={callProtectedRoute} /> */}
    </div>
  )
};

export default List;