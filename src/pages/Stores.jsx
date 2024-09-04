// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Title text1={'STORE'} text2={'LOCATOR'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center mg:flex-row gap-10 mb-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <iframe id='map' className='col-8 h-800px' src="https://yandex.ru/map-widget/v1/?um=constructor%3A62df896408c435296682f20be62f9cb087eec6eb440ac68a9f13ec42957d6572&amp;source=constructor"/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our stores:</p>
          <ol className='list-none'>
            <hr />
            <li className='text-gray-700 mb-2'>
              <p className='text-gray-500 mb-2'><b>NOMÉ Atrium</b><br />Zemlyanoy Val St, 33, Moscow, Russia</p>
              <p className='text-gray-500 mb-2'>Opening time:<br />MON-SUN 9:00AM to 10:00PM</p>
              <p className='text-gray-500 mb-2'>Tel: 1-234-567-89-89</p>
            </li>
            <hr />
            <li className='text-gray-700'>
              <p className='text-gray-500 mb-1'><b>NOMÉ Okhotny Ryad</b><br />Kiyevsky Station Square, 2, Moscow, Russia</p>
              <p className='text-gray-500 mb-1'>Opening time:<br /> 9:00AM to 10:00PM</p>
              <p className='text-gray-500 mb-1'>Tel: 1-234-567-89-89</p>
            </li>
            <hr />
          </ol>
          <p className='font-semibold text-xl text-gray-600'>Careers at NOMÉ</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
