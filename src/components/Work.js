import React from 'react';

import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import Img1 from '../assets/front.jpg';
import Img2 from '../assets/Dev.jpg';
import Img3 from '../assets/PS.jpg';




const Work = () => {
  return(
  <section className='flex items-center section' id='work'>
    <div className='container mx-auto'>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='items-center gap-x-10'>
        {/* text */}
        <h2 className='h2 leading-tight text-accent'>My latest <br /> work</h2>
        <p className='mb-8'>In my professional career I have had the opportunity to participate in different projects, which have allowed me to develop my skills in the frontend software development and DevOps areas.</p>

        <div className='grid justify-center lg:grid-cols-2 gap-8'>

          {/* img */}
          <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='row-span-2 group relative overflow-hidden border-2 border-white/50 rounded-xl' >
            {/* overlay */}
            <div className='bg-black/30 group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='object-cover h-full lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-12 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>Frontend Developer at Jidoka Community</span>
            </div>
            {/* Title */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-lg text-white'>Dispatcher</span>
            </div>
          </motion.div>

          {/* img2 */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
              
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img2} alt="" />
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-12 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>DevOps Engineer at Softserve Academy</span>
            </div>
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-lg text-white'>DevOps Project Lab Colombia</span>
            </div>
          </motion.div>

          {/* img3 */}

          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className=' group relative overflow-hidden border-2 border-white/50 rounded-xl' >
                
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img3} alt="" />
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-12 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>Test Engineer</span>
            </div>
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-lg text-white'></span>
            </div>
          </motion.div>
        </div>

        {/* <div className='flex-1 flex flex-col gap-y-10'>
           
           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
              
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img1} alt="" />
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>DevOps Engineer at Softserve Academy</span>
            </div>
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-3xl text-white'>DevOps Project Lab Colombia</span>
            </div>
          </div>
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
              
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img1} alt="" />
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>Test Engineer</span>
            </div>
            
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-3xl text-white'></span>
            </div>
          </div>
        </div> */}
      </motion.div>
    </div>
  </section>
  )};

export default Work;
