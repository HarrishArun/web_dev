import React from 'react'
import html from"../assets/html.png";
import css from"../assets/css.png";
import javascript from"../assets/javascript.png";

import github from"../assets/github.png";
import tailwind from"../assets/tailwind.png";
import flutter from"../assets/flutter.png";
import firebase from"../assets/firebase.png";
import figma from"../assets/figma.png";
import dart from"../assets/dart.png";
import python from"../assets/python.png";
import c from"../assets/c.png";
import react from"../assets/react.png";
import cpp from"../assets/cpp.png";
import bootstrap from"../assets/bootstrap.png";
const Experiance = () => {
    const techs=[
        {
            id:1,
            src:flutter,
            title:'Flutter',
            style:'shadow-blue-500'
        },
        {
            id:2,
            src:react,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:dart,
            title:'Dart',
            style:'shadow-cyan-500'
        },
        {
            id:4,
            src:html,
            title:'HTML',
            style:'shadow-orange-600'
        },
        {
            id:5,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },   {
            id:7,
            src:c,
            title:'C',
            style:'shadow-blue-500'
        },  {
            id:9,
            src:python,
            title:'Python',
            style:'shadow-yellow-500'
        },
        {
            id:8,
            src:cpp,
            title:'C++',
            style:'shadow-blue-500'
        },
      
        {
            id:10,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        },
  
        {
            id:8,
            src:bootstrap,
            title:'Bootstrap',
            style:'shadow-violet-500'
        }, {
            id:7,
            src:firebase,
            title:'Firebase',
            style:'shadow-yellow-500'
        },
        {
            id:9,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-cyan-500'
        },
        {
            id:10,
            src:figma,
            title:'Figma',
            style:'shadow-gray-500'
        }

    ]
  return (
    <div name='experience' className='bg-gradient-to-b to-gray-800 from-black w-full '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div >
            <p className='text-[#02ecff] text-2xl sm:text-4xl font-bold border-b-4 border-gray-500 inline'>
                Skills</p>
            {/* <p className='py-6'>These are my profiecient technologies</p> */}
        </div>
        <div className='w-full grid grid-cols-2  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs.map(({id,src,title,style})=>( <div key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}> 
          
                <img src={src} alt='skills'className='w-20 mx-auto'/>
                 <p className='mt-4'>{title}</p></div>

                ))
            }
         
        </div>
        </div>
        </div>
  )
}

export default Experiance