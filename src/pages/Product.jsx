import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'

const Product = () => {

  const {productId} = useParams()
  const {products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState ('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex-1 sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18,7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="Main photo" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="Product image" />
          </div>
      </div>

      {/* Product Info */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star} alt="Rating star" className="w-3 5" />
                <img src={assets.star} alt="Rating star" className="w-3 5" />
                <img src={assets.star} alt="Rating star" className="w-3 5" />
                <img src={assets.star} alt="Rating star" className="w-3 5" />
                <img src={assets.star_dull} alt="Rating star" className="w-3 5" />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='text-gray-500 mt-4 w-full lg:w-3/5'>{productData.description}</p>
              <p className='mt-4 text-3xl font-medium'>{currency}{productData.price}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>{`Color: ${productData.color}`}</p> 
                <p>Size:</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index) => (
                    <button onClick={() => setSize(item)} className='border border-black px-8 py-3 text-sm focus:bg-black focus:text-white' key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button onClick={() => addToCart(productData._id,size)} className='w-full lg:w-3/5  bg-black text-white px-8 py-3 text-sm active:scale-105 transition ease-in-out'>ADD TO CART</button>
              <Accordion defaultActiveKey={['0']} flush className='mt-5 w-full lg:w-3/5 text-sm' bg>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>SIZE & FIT</Accordion.Header>
                  <Accordion.Body>
                    <ul className='list-disc text-gray-500 md:w-4/5'>
                      <li>Fits true to size, however those who are between sizes should take the smaller size</li>
                      <li>Intended for an oversized fit, cut to be worn very loose</li>
                      <li>Internal shoulder pads</li>
                      <li>Mid-weight, non-stretchy fabric</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>DETAILS & CARE</Accordion.Header>
                  <Accordion.Body>
                    <p className='text-gray-500 md:w-4/5'>Facere molestiae quaerat ipsam dolorem illo beatae veritatis odio eveniet nulla ad ea itaque, deserunt similique, perferendis quas. Quae harum cumque eaque?</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>DELIVERY & RETURNS</Accordion.Header>
                  <Accordion.Body>
                  <p className='text-gray-500 md:w-4/5'>Cash on delivery is available on this product.</p>
                  <p className='text-gray-500 md:w-4/5'>Easy return and exchange policy within 7 days.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
      </div>

      {/*Related Products*/}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
    
  ) : <div className='opacity-0'></div>
}

export default Product
