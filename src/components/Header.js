import React from 'react';
import { Link } from 'react-scroll';


const Header = () => {
  return ( 
    <header className='py-8'>
    {/* <div className='bg-violet-700'>Header</div> */}
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
        <h1 className='font-semibold text-[60px] uppercase'>sv</h1>
        </a>
        <Link
          to='contact'
          smooth={true}>
          <button className='btn btn-sm'>Work with me</button>
        </Link>
      </div>
    </div>
    </header>
  )};

export default Header;
