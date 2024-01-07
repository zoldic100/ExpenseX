import { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true;
import {Link, Outlet} from 'react-router-dom'

import React from 'react'
import { NavBar } from '../../components';

const GuestLayout = () => {
  return (
    <>
    <NavBar/>
    <main className='container mx-5'>
    <div>header</div>
    <Outlet/>
    </main>
    <div>footer</div>
    </>
  )
}

export default GuestLayout