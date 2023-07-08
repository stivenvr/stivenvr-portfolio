import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';



const Work = () => {
  return(
  <section className='section min-h-[85vh]' id='work'>
    <div className='container mx-auto'>
      <div className='items-center gap-x-10'>
        {/* text */}
        <h2 className='h2 leading-tight text-accent'>My latest <br /> work</h2>
        <p className='mb-8 sm:mb-8 md:mb-8 lg:mb-0 xl:mb-16'>En mi carrera profesional he tenido la oportunidad de participar en diferentes proyectos, que me han permitido desarrollar mis habildiades en el area de desarrolo de software frontend y en areas DevOps.</p>

        <div className='flex flex-row lg:gap-y-8 mb-10 lg:mb-0 '>
          {/* img */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>Frontend Developer at Jidoka Community</span>
            </div>
            {/* Title */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-3xl text-white'>Dispatcher</span>
            </div>
          </div>
          {/* img2 */}
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
      </div>
    </div>
  </section>
  )};

export default Work;
