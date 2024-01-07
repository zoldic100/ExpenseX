import axios from 'axios'
axios.defaults.withCredentials = true;
import {Link, Outlet} from 'react-router-dom'

import React, { useState } from 'react'
import { NavBar } from '../../components';

const AuthLayout = () => {
  

  return (
    <>
    <NavBar/>


    <Outlet/>
    </>
  )
}

export default AuthLayout