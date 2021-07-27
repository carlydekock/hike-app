import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';
import { useAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

const Home = () => {
  const { getAccessTokenSilently } = useAuth0();
  // const { user } = useAuth0();
  // console.log(user);

  async function callProtectedApi(){
    try {
      const token = await getAccessTokenSilently();
      console.log('this is token on frontend', token);
      const response = await axios.get('http://localhost:3000/protected', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      console.log(response.data);
    } catch (err){
      console.log(err.message);
    }
  }
  
  // const callSecure = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();

  //     const response = await fetch(
  //       `${serverUrl}/api/v1/hikes/`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const responseData = await response.json();
  //     // console.log(user);
  //     // console.log(responseData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div>
      <NavBar />
      <Header />
      <Image />
        <button type="button" className="btn btn-primary" onClick={callProtectedApi}>Call Protected API</button>
      <AddHike />
      <HikesList />
    </div>
  )
};

export default Home;