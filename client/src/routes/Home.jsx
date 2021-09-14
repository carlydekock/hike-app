import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';
import { useAuth0 } from "@auth0/auth0-react";
import HikeFinder from '../apis/HikeFinder';

const Home = () => {

  // console.log('this is state in home', this.state);
  // const user = useAuth0();
  // console.log('this is user on home page', user);
  const { getAccessTokenSilently} = useAuth0();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchId = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await HikeFinder.get("/", {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        console.log('this is inside home route', response);
        setUserId(response.data.data.user);
      } catch (err) {
        console.log(err);
      }
    }

    fetchId(); // eslint-disable-next-line
  }, []);
  

  // //Troubleshooting authentication
  // async function callProtectedApi(){
  //   try {
  //     const token = await getAccessTokenSilently();
  //     const response = await axios.get('http://localhost:3000/protected', {
  //       headers: {
  //         authorization: `Bearer ${token}`
  //       }
  //     })
  //     console.log(response.data);
  //   } catch (err){
  //     console.log(err.message);
  //   }
  // }

  return (
    <div>
      <NavBar />
      <Header />
      <Image />
        {/* <button type="button" className="btn btn-primary" onClick={callProtectedApi}>Call Protected API</button> */}
      <AddHike userId={userId}/>
      <HikesList />
    </div>
  )
};

export default Home;