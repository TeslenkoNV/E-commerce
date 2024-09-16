import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Hero.css'
import Carousel from 'react-bootstrap/Carousel'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
     <Carousel data-bs-theme="dark" className='carouselHero'>
        <Carousel.Item data-bs-interval="2000">
        <Link to='/Collection'>
        <img className='back' src={assets.back1} alt="New collection"/>
          <Carousel.Caption>
          <div className='Hero container'>
              <h1 className='text-xl sm:py-3 lg:text-4xl leading rexaled'>NEW COLLECTION</h1>
              <p className='font-semibold text-sm md:text-base'>DISCOVER MORE</p>
          </div>
          </Carousel.Caption>
        </Link>
        </Carousel.Item>
        <Carousel.Item data-bs-interval="2000">
        <Link to='/Collection'>
        <img className='back' src={assets.back2} alt="Women's collection"/>
          <Carousel.Caption>
            <div className='Hero container'>
              <h1 className='text-xl lg:text-4xl sm:py-2 leading rexaled'>WOMEN</h1>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            </div>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item data-bs-interval="2000">
        <Link to='/Collection'>
        <img className='back' src={assets.back3} alt="Men's collection"/>
          <Carousel.Caption>
            <div className='Hero container'>
              <h1 className='text-xl lg:text-4xl sm:py-2 leading rexaled'>MEN</h1>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            </div>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item data-bs-interval="2000">
        <Link to='/Collection'>
        <img className='back' src={assets.back4} alt="kid's collection"/>
          <Carousel.Caption>
            <div className='Hero container'>
              <h1 className='text-xl lg:text-4xl sm:py-2 leading rexaled'>KIDS</h1>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            </div>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Hero