import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';



const Work = () => {
  return(
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col lg:gap-y-8 mb-10 lg:mb-0 '>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My latest <br /> work</h2>
            <p className='max-w-sm mb-8 sm:mb-8 md:mb-8 lg:mb-0 xl:mb-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sunt natus exercitationem ea iste minima, quis rem fuga consectetur quam quaerat doloribus rerum ipsa! Ipsa, possimus? Aliquam repellendus molestias laboriosam.</p>
            {/* <button className='btn btn-sm'>Go to project</button> */}
          </div>
          {/* img */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
              {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>Project Lab DevOps</span>
            </div>
            {/* Title */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-3xl text-white'>Project Title</span>
            </div>
          </div>
        </div>

        <div className='flex-1 flex flex-col gap-y-10'>
           {/* img */}
           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
              {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>Project Lab DevOps</span>
            </div>
            {/* Title */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-3xl text-white'>Project Title</span>
            </div>
          </div>
          {/* img */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
              {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='lg:group-hover:scale-125 lg:transition-all lg:duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm text-gradient'>Project Lab DevOps</span>
            </div>
            {/* Title */}
            <div className='lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-500 lg:z-50'>
              <span className='text-sm lg:text-3xl text-white'>Project Title</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )};

export default Work;
