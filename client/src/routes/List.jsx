import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import MyHikesList from '../components/MyHikesList';
import NavBar from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react';

const List = () => {

  // const { getAccessTokenSilently } = useAuth0();
  // const token = getAccessTokenSilently();
  // console.log(token);
  
  return (
    <div>
      <NavBar />
      <Header />
      {/* <AddHike /> */}
      <MyHikesList />
    </div>
  )
};

export default List;