import React from 'react'
import img from '../assets/d1.png'
import Banner from './shared/Banner'
function Home() {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20' id='Home'>
      <Banner banner={img}
       heading=" Enhance Your Business with Our Electronic Services"
       subheading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Error quis quae perferendis distinctio libero, 
                magnam praesentium fuga blanditiis harum pariatur!" 
                btn1="Get Started" 
                btn2="Discrount"/>
    </div>
  )
}

export default Home