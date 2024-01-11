import axios from 'axios'
axios.defaults.withCredentials = true;

import React from 'react'
import { Container, Footer, NavBar } from '../../components';

const GuestLayout = () => {
  return (
    <>
    <NavBar/>
    <Container />
    <Footer/>
    </>
  )
}

export default GuestLayout