// eslint-disable-next-line no-unused-vars
import React from 'react'

/* eslint-disable react/prop-types */
const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
    </div>
  )
}

export default Title