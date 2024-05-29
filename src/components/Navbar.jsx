import React, { useContext, useEffect, useState } from 'react'

// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(()=> {

   const handleScroll = () => {

    if(window.scrollY > 100){
      setIsSticky(true);
    }else {
      setIsSticky(false);
    }

   }
    window.addEventListener("scroll",handleScroll);
    
    return ()=> {
      window.addEventListener("scroll",handleScroll);

    }

  },[]);

  // nav items

  const navItems = [
    {link: "Overview", path: "Home"},
    {link: "Feature", path: "feature"},
    {link: "About", path: "about"}, 
  ]

  return (
    <header className='w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky  gradientBg shadow-lg top-0 right-0 left-0" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>

          {/* logo */}
          <Link to={"/"} className='text-2xl font-bold text-purple-700 items-center flex gap-2'><FaBlog className='inline-block'/>Kaaftoon</Link>

          {/* nav items for large devices */}
          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({link, path})=> 
              <Link key={link} to={path} spy={true} activeClass='active' smooth={true} offset={-70} className='block text-base uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
            }
          </ul>

          {/* btn for lg devices */}
          <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
            {/* {
              user? user.email:""
            } */}

          </div>

          {/* menu btn for mobile devices */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {isMenuOpen ? <FaXmark className='w-5 h-5'/>: <FaBarsStaggered/>}
            </button>
          </div>
        </div>

          {/* nav items for sm devices */}
          <div className={`space-y-4 px-4 mt-16 py-7 gradientBg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
            {
              navItems.map(({link, path})=> 
              <Link key={link} to={path} spy={true} activeClass='active' smooth={true} offset={-70}
              onClick={toggleMenu}
               className='block  text-white text-base uppercase cursor-pointer'>{link}</Link>)
            }
          </div>
      </nav>
    </header>
  
  )
}

export default Navbar