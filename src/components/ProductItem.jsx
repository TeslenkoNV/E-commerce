import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

/* eslint-disable react/prop-types */
const ProductItem = ({id,image,name,price}) => {

const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-105 transition ease-in-out' src={image[0]} alt="Card photo" />
        </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
