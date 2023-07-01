import React from 'react';


const Header = () => {
  return ( 
    <header className='py-8'>
    {/* <div className='bg-violet-700'>Header</div> */}
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
        <h1 className='font-semibold text-[60px] uppercase'>sv</h1>
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
    </header>
  )};

export default Header;
