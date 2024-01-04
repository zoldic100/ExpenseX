import { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true;
import {Outlet} from 'react-router-dom'

import React from 'react'

const GuestLayout = () => {
  return (
    <>
    <div>header</div>
    <Outlet/>
    <div>footer</div>
    </>
  )
}

export default GuestLayout