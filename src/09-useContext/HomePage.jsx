import React , { useContext }from 'react';
import { UserContext } from './context/UserContext';

const HomePage = () => {
  const {user }  = useContext( UserContext);
  return (
    <>
    <h1>Home Page {user?.name}</h1>
    <hr/>
    </>
  )
}

export default HomePage
