import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs 
    sm:text-sm md:text-base text-gray-700 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>  
        <div>
            <img src={assets.shipping} className='w-13 m-auto mb-3' alt="" />
            <p className='font-semibold'>Free Shipping</p>
            <p className='text-gray-400'>For orders over 100 USD</p>
        </div>
        <div>
            <img src={assets.easyReturn} className='w-13 m-auto mb-3' alt="" />
            <p className='font-semibold'>Easy Returns</p>
            <p className='text-gray-400'>Free returns within 7 days after delivery</p>
        </div>
        <div>
            <img src={assets.payment} className='w-13 m-auto mb-3' alt="" />
            <p className='font-semibold'>Secure Payment</p>
            <p className='text-gray-400'>Safe & hassle free checkout</p>
        </div>
    </div>
  )
}

export default OurPolicy
