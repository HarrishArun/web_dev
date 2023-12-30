import React from 'react';
import HeroImage from '../assets/HeroImage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
import {useState } from 'react';
import Mobilesocial from './Mobilesocialss';
import { Link as ScrollLink } from 'react-scroll';
const Home = () => {
  const [ nav,setNav] = useState(false);
  const blueStyle = {
    color: '#02ecff',
  
    display: 'inline-block'
  };
  const links = [
    {
      id: 1,
      link: 'portfolio',
    },

  ];


  const closeNav = () => {
    setNav(false);
  };

  return (
    <div name="home" className="w-full bg-gradient-to-b from-black via-black to-gray-800  pl-5 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  h-full md:flex-row  justify-between">
        <div className="flex flex-col justify-center h-full pr-6 text-justify w-full  ">
          <h2 className="text-3xl md:text-4xl sm:text-5xl font-bold text-white ">
            <span style={{ color: '#fff' }}>I'm</span> a {' '}
            <TypeAnimation
              sequence={[
                'Flutter Developer',
                1000,
                'Web Developer ',
                1000,
                'UI/UX Designer',
                1000,
                'AI&ML Enthusiast',
                1000,
                'Geeky',
                1000,
                'Full-Stack Dev',
                1000,
                'App Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={blueStyle}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-200 py-4 max-w text-sm sm:text-2xl mr-3">
            Hello!, I'm Harrish Arun, a Computer Science Engineering student pursuing B.Tech at SRM Institute of Science and Technology. My academic journey has been marked by diverse explorations in Development, Design, Leadership, and Management. I specialize in App and Web development, UI/UX design, and AI/ML. Beyond my skill set, I've excelled academically, securing over 91% throughout my schooling and attaining a remarkable 9.54 GPA in my degree program
          </p>
          <div class='text-sm sm:text-lg font-mono font-bold text-white bg-gray-800 p-4 rounded-md'>
    <p>Email: <a href='mailto:harrisharun2003@gmail.com' class='text-blue-300'>harrisharun2003@gmail.com</a></p>
    <p>Contact no: <span class='text-blue-300'>7010946183</span></p>
</div>
          <Mobilesocial/>
         
           
            {links.map(({ id, link }) => (  <div><button  className="group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
           
              <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
              Projects
              </ScrollLink>
              <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} /></span>
            </button></div>
          ))} 
          
        </div>
        <div className='px-24 pt-3 sm:p-5 shadow-gray-300 '>
          <img  src={HeroImage} alt="my profile" className="rounded-2xl  border border-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
