import axios from 'axios'
axios.defaults.withCredentials = true;

import React from 'react'
import { Container, Footer, NavBar } from '../../components';


const AuthLayout = () => {
  

  return (
    <>
    <>
    <NavBar/>
    <Container />
    <Footer/>
    </>
    </>
  )
}

export default AuthLayout