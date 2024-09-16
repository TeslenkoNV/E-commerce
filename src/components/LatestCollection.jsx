import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

   const { products } = useContext(ShopContext);
   const [latestProducts, setLatestProducts] = useState([]);
   
    useEffect(() => {
        setLatestProducts(products.slice(0,8));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'NEW'} text2={'COLLECTION'} />
            <p className='w-3/4 m-auto text-xs dm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto minus corrupti fuga necessitatibus dolorem, voluptatem inventore impedit iste, vitae consequatur, porro nihil recusandae. Nobis eum exercitationem quia reiciendis dolorum!
            </p>
        </div>

        <div className='grid grid-cols-2 dm:grid-cols-3 md:grid-cols-4 lgLgrid-col-5 gap-4 pag-y-6'>
            {
                latestProducts.map((item,index) => (
                    <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection;
