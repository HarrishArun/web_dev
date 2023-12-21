import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-gradient-to-b from-black to-gray-800 text-white pt-5 '>

    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div>
            <p className='text-[#02ecff] text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6 text-sm sm:text-xl'>Submit the form to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/ecbb65cd-6c4a-487b-bb4a-7ec6339d900a' method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type='text' name='name' placeholder='Enter Your name'
                 className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></input>
                  <input type='text' name='email' placeholder='Enter Your E-mail'
                 className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'></input>
                 <textarea name="message" rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message here'></textarea>
           
           <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Connect with me!</button>
           
          
           </form>
        </div>
    </div>
        </div>
  )
}

export default Contact