import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import {useState } from 'react';

import { Link as ScrollLink } from 'react-scroll';
const Footer = () => { 
    const links = [
    {
      id: 1,
      link: 'nav',
    },

  ];
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };
  return (
    <footer className="footer items-center p-4 l text-neutral-content bg-gray-800">
    <aside className="items-center grid-flow-col">
    <h1 className="text-3xl font-signature ml-2 mr-2">Harrish</h1>
      <p>Copyright ©  - All right reserved</p> <div className>  {links.map(({ id, link }) => ( <button className=' bg-white rounded-md h-8 w-8 flex items-center justify-center ml-6 px-4 ' > <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                onClick={closeNav}
              ><IoIosArrowUp className='text-black text-2xl font-bold'/></ScrollLink></button>))}</div>
    </aside> 
 
  </footer>
  )
}

export default Footer