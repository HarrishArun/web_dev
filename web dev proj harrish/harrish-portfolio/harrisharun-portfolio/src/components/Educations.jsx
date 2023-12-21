import React from 'react'
import { FaSchool } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
   <div className='bg-white h-full w-full bg-gradient-to-b from-gray-800 to-black '>
   <div className='max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full text-white pl-2 '>
     <div className='pb-6 w-full mt-12'>
            <p className=' text-[#02ecff] text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-400 '>
                Education</p></div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center pb-8 px-12 sm:px-0'>
                  <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 border border-gray-600'><div className='flex justify-center items-center flex-col py-6 gap-y-3'>
                    <IoSchoolSharp className='text-[#02ecff] text-3xl'/>
                    <p className='font-bold text-2xl'>SRM University,Chennai</p>
                    <p className='text-sm'>B.Tech Computer Science Engineering</p>
                    <p className='font-bold font-sans text-base'>9.54 CGPA</p>
                    
                    
                    </div>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 border border-gray-600'><div className='flex justify-center items-center flex-col py-6 gap-y-3'>
                    <FaSchool className='text-[#02ecff] text-3xl'/>
                    <p className='font-bold text-2xl'>Senthil Matric School</p>
                    <p className='text-sm'>Class XII</p>
                    <p className='font-bold font-sans text-base'>92.16 %</p>
                    
                    
                    </div>
                    </div>  <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 border border-gray-600'><div className='flex justify-center items-center flex-col py-6 gap-y-3'>
                    <FaSchool className='text-[#02ecff] text-3xl'/>
                    <p className='font-bold text-2xl'>Senthil Matric School</p>
                    <p className='text-sm'>Class-x</p>
                    <p className='font-bold font-sans text-base'>91 %</p>
                    
                    
                    </div>
                    </div>
                </div>
                
                
                
                
                </div></div>
  )
}

export default Education