import axios from 'axios'
axios.defaults.withCredentials = true;

import React from 'react'
import { Container, Footer, NavBar } from '../../components';
import FetchExpByUserId from '../../Api/ExpenseApi/FetchExpByUserId';


const AuthLayout = () => {
  

  return (
    <>
    <>
    <NavBar/>
    <FetchExpByUserId><Container /></FetchExpByUserId>
    
    <Footer/>
    </>
    </>
  )
}

export default AuthLayout