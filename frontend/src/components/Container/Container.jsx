import React from 'react'
import {Outlet} from 'react-router-dom'

const Container = () => {
  return (
    <>
        <main className='bg-gray-100 min-h-96  container mx-auto md:p-6 sm:p-3' >
        <Outlet/>
    </main>
    </>
  )
}

export default Container