import React from 'react';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs, { send } from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ejzqwlz', 'template_61rlg17', form.current, 'RQFpHWpVzQ_BVZ2pd')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='pt-40' id='contact'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            <div>
              <motion.h4 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</motion.h4>
              <motion.h2
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='text-[45px] lg:text-[90px] leading-none mb-12 '>Let's work <br /> together!</motion.h2>
            </div>
          </div>
          {/* form */}
          <motion.form
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' ref={form} onSubmit={sendEmail} >
            <input type="text" className="bg-transparent border-b outline-none py-3 w-full placeholder:text-white focus:border-accent transition-all" placeholder='Your name' name='user_name'/>

            <input type="text" className="bg-transparent border-b outline-none py-3 w-full placeholder:text-white focus:border-accent transition-all" placeholder='Your email' name='user_email'/>

            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your message' name="message" id="" ></textarea>

            <button className='btn btn-lg' type='submit' value="send">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )};

export default Contact;
