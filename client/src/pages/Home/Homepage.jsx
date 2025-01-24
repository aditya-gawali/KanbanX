import React, { useState } from 'react'
import HeaderBar from './HeaderBar';
import Hero from './Hero';
// import BotumFooter from './BotumFooter';
// import Functions from './Function';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';

const Homepage = () => {

  const [userID, setUserID] = useState("");

  const getUserIdFromToken = () => {
    const token = Cookies.get('token');
    if (!token) {
      console.error('Token not found in cookies');
      return null;
    }

    try {
      const decoded = jwtDecode(token);
      return decoded.id;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  useEffect(() => {
    setUserID(getUserIdFromToken());
  }, []);




  return (
    <>
      <HeaderBar />
      <Hero />
    </>
  )
}

export default Homepage
