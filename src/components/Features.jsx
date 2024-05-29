import img from '../assets/d2.png'
import {motion} from 'framer-motion'
import {FadeIn} from '../varients'


function Features() {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
       <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
         <motion.div className='lg:w-1/2'
           variants={FadeIn('right',0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
         >
          <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>
            Why we are better than others
          </h3>
          <p className='text-base text-tartiary'> 
             A simple paragraph is comprised of three major components.The first
             sentence, which is often a declarative sentence, is called the 
             "topic sentence."
          </p>
         </motion.div>
         {/* featured cards */}
         <motion.div className='w-full lg:w-3/4'
          variants={FadeIn('up',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
         
         >
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
            <div className='bg-[rgba(255, 255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-8 items-center flex
                  justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer '>
             <div>
                <img src={img} alt="" />
                <h5 className='text-xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
             </div>
           </div>
           {/* 2 */}
            <div className='bg-[rgba(255, 255,255,0.04)] rounded-[35px] h-80 shadow-3xl md:mt-16 p-8 items-center flex
                  justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer '>
             <div>
                <img src={img} alt="" />
                <h5 className='text-xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
             </div>
           </div>
           {/* 3 */}
            <div className='bg-[rgba(255, 255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-8 items-center flex
                  justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer '>
             <div>
                <img src={img} alt="" />
                <h5 className='text-xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
             </div>
           </div>
            </div>
         </motion.div>
       </div>
    </div>
  )
}

export default Features