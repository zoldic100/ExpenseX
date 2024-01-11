import React from 'react'
import logo  from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
        <footer className='bg-gray-900 text-white py-8 text-center max-h-fit'>
      <div className='container mx-auto flex justify-center items-center'>
        <img src={logo} alt='Logo' className='max-h-16' />
        <div className='ml-4'>
          <p className='text-lg font-bold'>Your Company Name</p>
          <p className='text-sm'>Address | Phone | Email</p>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-sm'>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
    </>
  )
}

export default Footer