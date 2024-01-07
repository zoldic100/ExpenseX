import axios from 'axios'
axios.defaults.withCredentials = true;
import {Link, Outlet} from 'react-router-dom'

import React, { useState } from 'react'

const AuthLayout = () => {
  

  return (
    <>
    <nav>
      <ul>
        <li><Link to={'/user/create-expense'}  >Create new expense </Link> </li>
        <li><Link to={'/user'}  >Home </Link> </li>
      </ul>
    </nav>

    <Outlet/>
    </>
  )
}

export default AuthLayout