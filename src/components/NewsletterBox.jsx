// eslint-disable-next-line no-unused-vars
import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <p className='text-2xl font-medium text-gray-800'>Enjoy 10% off your first order</p>
        <p className='text-gray-400 mt-3'>
        Claim your exclusive discount code when you subscribe to our emails. Terms and conditions apply
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder="Enter your email" required></input>
            <button type='submit' className='bg-black text-white text-xs px-10 py-2 focus:scale-105 transition ease-in-out'>SUBMIT</button>
        </form>
    </div>
  )
}

export default NewsletterBox