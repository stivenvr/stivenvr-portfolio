import React from 'react';

// import Image from '../assets/avatar.svg'
import Image from '../assets/avatarSF.png'
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (

  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* TEXT */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            STIVEN <span>VALENCIA</span>
          </motion.h1>
          <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
                'System engineer', 4000,
                'Devops engineer', 4000,
                'Developer', 4000,
              ]}
              speed={26}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
          </motion.div>
          <motion.p
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Empathetic, dynamic professional with communication and conflict resolution skills, committed to teamwork.
          </motion.p>
          <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className="btn btn-lg">Contact me</button>
            <a href="#" className="text-gradient btn-link">
              My portfolio
            </a>
          </motion.div>
          <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="#">
              <FaGithub /> 
            </a>
            <a href="#">
              <FaPhone /> 
            </a>
            <a href="#">
              <FaEnvelope /> 
            </a>
          </motion.div>
        </div>
        {/* img */}
        <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img className='avatar' src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Banner
