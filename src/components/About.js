import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section min-h-[85vh]' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex items-center flex-col gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>System engineer adn Developer with over 8 months of experience</h3>
            <p>
              Systems Engineer, with English B2 and emphasis on DevOps and frontend development, with experience in integration processes and continuous deployment and management of AWS, in addition to having knowledge in technology tools such as: Jenkins, Terraform, AWS console, Docker, Linux OS, Ansilble, HTML, CSS, JavaScript, React.js. Technical experience in programming languages such as Python, C++; relational and non-relational databases.              
            </p>
          {/* stats */}
          <div className='flex'>
            <div>
              <div className='text-[40px] font-secondary text-gradient mb-2'>
                <CountUp start={0} end={8} duration={6} />
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Months of <br/>
                Experience
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default About;
