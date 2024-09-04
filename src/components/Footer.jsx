// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

        <div>
            <img src={assets.logoFull} className='mb-4 w-28' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptate. Fugiat error id quae aliquam at, doloribus voluptatem, illum quasi aut quaerat dicta suscipit ipsam eum recusandae amet odio repudiandae?
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-4'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'><li >Home</li></Link>
                <Link to='/About'><li>About us</li></Link>
                <Link to='/'><li>Shipping</li></Link>
                <Link to='/'><li>Privacy policy</li></Link>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-4'>CONTACTS</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-234-567-89-89</li>
                <li>contact@nome.com</li>
            </ul>
        </div>
      </div>
      
        <div>
          <hr />
          <p className='py-2 text-sm text-center'>Copyright 2024@ nome.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
