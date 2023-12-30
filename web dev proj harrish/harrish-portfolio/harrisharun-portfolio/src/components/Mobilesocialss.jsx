import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { BiLogoPlayStore } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
const Mobilesocial = () => {
  const links=[
    {
      id: 1,
      child:(
        <><FaLinkedin size={25}/></>
      ),
      href:"https://www.linkedin.com/in/harrish-arun-1a8890227/",
      style:'tounded-tr-md'
    },
    {
      id: 2,
      child:(
        <><BiLogoPlayStore size={25}/></>
      ),
      href:"https://play.google.com/store/apps/developer?id=HarrishArun",
      style:'tounded-tr-md'
    },
    {
      id: 3,
      child:(
        <><FaGithub size={25}/></>
      ),
      href:"https://github.com/HarrishArun",
      
    },
 
   
    {
      id: 4,
      child:(
        <><FaDownload size={25}/></>
      ),
      href:"/resume.pdf",
      style:'tounded-br-md',
      download:true,
    },
    {
      id: 5,
      child:(
        <><RiTwitterXLine size={25}/></>
      ),
      href:"https://twitter.com/Harrisharun2",
      style:'tounded-tr-md'
    },
  ]
 
return(
<div className="flex justify-start items-center  my-3 "><div className="rounded-full "><ul>

{links.map(({ id, child, href, download }) => (
      <li
        key={id}
       className=" inline-block p-2 m-1  rounded-xl border border-[#02ecff] shadow-sm shadow-[#02ecff]  hover:scale-105 duration-500 hover:border-white hover:shadow-white"  >
     <a
          href={href}
          className="flex justify-between items-center w-full text-[#02ecff] hover:text-white "
          download={download}
          target="_blank"
          rel="noreferrer"
        >
    {child}
    </a>     
  </li>

  ))}

</ul></div></div>
);}

export default Mobilesocial;