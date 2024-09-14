// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

const { products, search, showSearch } = useContext(ShopContext);
const [showFilter, setShowFilter] = useState(false);
const [filterProducts, setFilterProducts] = useState([]);
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState ([]);
const [color, setColor] = useState ([]);
const [sortType, setSortType] = useState ('relevant');

const toggleCategory = (e) => {
  if (category.includes(e.target.value)) {
    setCategory(prev => prev.filter(item => item !== e.target.value))
  }
  else{
    setCategory(prev => [...prev,e.target.value])
  }
}

const toggleSubCategory = (e) => {
  if (subCategory.includes(e.target.value)) {
    setSubCategory(prev => prev.filter(item => item !== e.target.value))
  }
  else{
    setSubCategory(prev => [...prev,e.target.value])
  }
}

const toggleColor = (e) => {
  if (color.includes(e.target.value)) {
    setColor(prev => prev.filter(item => item !== e.target.value))
  }
  else{
    setColor(prev => [...prev,e.target.value])
  }
}

const applyFilter = () => {
  
  let productsCopy = products.slice();

  if (showSearch && search) {
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if (category.length > 0 ) {
    productsCopy = productsCopy.filter(item => category.includes(item.category));
  }

  if(subCategory.length > 0) {
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subcategory))
  }

  if(color.length > 0) {
    productsCopy = productsCopy.filter(item => color.includes(item.color))
  }
  setFilterProducts(productsCopy)
}

const sortProduct = () => {
  let fpCopy = filterProducts.slice();
  switch (sortType) {

    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
      break;

    case 'high-low':
      setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
      break;

    default:
      applyFilter();
      break;
  }
}

useEffect(() => {
  applyFilter()
}, [category,subCategory,color,search,showSearch])

useEffect(() => {
  sortProduct();
},[sortType])

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='mb-2 text-xs sm:text-xl flex items-center cursor-pointer gap-2 leading-7'>FILTERS
          <img className={`h-3 mx-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.arrow} alt="Arrow" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 w-5/6 pl-5 py-2 mt-6 sm:block ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-1 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 w-5/6 pl-5 py-2 mt-2 sm:block ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
              <div className='flex flex-col gap-1 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Jeans'} onChange={toggleSubCategory}/> Denim
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Dresses'} onChange={toggleSubCategory}/> Dresses
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Hoodies'} onChange={toggleSubCategory}/> Hoodies
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Jackets'} onChange={toggleSubCategory}/> Jackets
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Jeans'} onChange={toggleSubCategory}/> Jeans
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Shirts'} onChange={toggleSubCategory}/> Shirts
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Shorts'} onChange={toggleSubCategory}/> Shorts
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Skirts'} onChange={toggleSubCategory}/> Skirts
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Trousers'} onChange={toggleSubCategory}/> Trousers
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={'Shirts'} onChange={toggleSubCategory}/> T-Shirts
                </p>
              </div>
        </div>
        
        {/* Color Filter */}
        <div className={`border border-gray-300 w-5/6 pl-5 py-2 mt-2 sm:block ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>COLOR</p>
          <div className='flex flex-col gap-1 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'White'} onChange={toggleColor}/> White
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Beige'} onChange={toggleColor}/> Beige
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Grey'} onChange={toggleColor}/> Grey
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Black'} onChange={toggleColor}/> Black
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Brown'} onChange={toggleColor}/> Brown
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Blue'} onChange={toggleColor}/> Blue
            </p>
          </div>
        </div>
      </div> 
      
      {/* Right Side */}
      <div className='flex-1'>
       <div className='flex justify-between text-base leading-6 sm:text-2xl sm:leading-7 mb-2'>
         <Title text1 ={'ALL'} text2={'COLLECTIONS'} />
         <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 h-10'>
            <option value="relevant">Recommended</option>
            <option value="low-high">Price Low to High</option>
            <option value="high-low">Price High to Low</option>
         </select>
       </div>

       {/* Product List */}
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
            filterProducts.map((item,index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
        }
       </div>
      </div>
  </div>

  )
}

export default Collection