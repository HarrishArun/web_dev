import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";


const SocialLinks = () => {
  const links=[
    {
      id: 1,
      child:(
        <>Linkedin<FaLinkedin size={30}/></>
      ),
      href:"https://www.linkedin.com/in/harrish-arun-1a8890227/",
      style:'tounded-tr-md'
    },
    {
      id: 2,
      child:(
        <>My Apps<BiLogoPlayStore size={30}/></>
      ),
      href:"https://play.google.com/store/apps/developer?id=HarrishArun",
      style:'tounded-tr-md'
    },
    {
      id: 3,
      child:(
        <>Github<FaGithub size={30}/></>
      ),
      href:"https://github.com/HarrishArun",
      
    },
 
   
    {
      id: 4,
      child:(
        <>Resume<BsFillPersonLinesFill size={30}/></>
      ),
      href:"/resume.pdf",
      style:'tounded-br-md',
      download:true,
    },
    {
      id: 5,
      child:(
        <>Mail<HiOutlineMail size={30}/></>
      ),
      href:"mailto:harrisharun2003@gmail.com",
     
    },  
  ]
 
return(
  <div className="hidden md:flex flex-col top-[23%] left-0 fixed bg-gray-700">
    <ul>

    {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700" +
              " " +
              style
            }>
         <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
        {child}
        </a>     
      </li>

      ))}
   
    </ul>
  </div>
)
};

export default SocialLinks;