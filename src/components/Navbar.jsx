import { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [visible,setVisible] = useState (false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);

    return (
    <div className={`flex items-center justify-between h-12 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] sticky-top ${sticky ? 'bg-white duration-500' : ''}`}>
        <Link to='/'><img src={assets.logoFull} className='w-[110px]' alt="" /></Link>
        <ul className='mx-3 sm:flex gap-4 text-[1rem] text-black hidden'>
          <NavLink to='/' className='flex flex-col items-center gap-1 '>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/stores' className='flex flex-col items-center gap-1'>
            <p>STORES</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
          <img onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' src={assets.search} alt="" />
            <div className='group relative'>
              <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile} alt="" /></Link>
              <div className='group-hover:block hidden absolute dropdown-menu right-0 p-0 m-0'>
                <div className='flex flex-col gap-2 py-3 px-3 bg-slate-100 text-gray-500 rounded'>
                  <Link to='/login'><p className='cursor-pointer hover:text-black'>My Profile</p></Link>
                  <Link to='/orders'><p className='cursor-pointer hover:text-black'>Orders</p></Link>
                  <Link to='/login'><p className='cursor-pointer hover:text-black'>Logout</p></Link> 
                </div>
              </div>
            </div>
            <Link to='/cart' className='relative'>
              <img src={assets.cart} className='w-6 cursor-pointer' alt="" />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu} className='w-8 cursor-pointer sm:hidden' alt=""></img>
        </div>

        {/*Sidebar for small screens*/}
        
        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden backdrop-blur-xl transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-7' src={assets.close} alt="" />
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/stores'>STORES</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar