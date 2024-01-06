import { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true;
import {Link, Outlet} from 'react-router-dom'

import React from 'react'

const GuestLayout = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to={'/create-product'}  >Create Product </Link> </li>
        <li><Link to={'/'}  >Home </Link> </li>
      </ul>
    </nav>
    <div>header</div>
    <Outlet/>
    <div>footer</div>
    </>
  )
}

export default GuestLayout