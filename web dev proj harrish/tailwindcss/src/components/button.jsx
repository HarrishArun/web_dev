import React from 'react'

function button({label,iconurl}) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-monsterrat text-lg leading-none
     bg-coral-red rounded-full text-white border-coral-red

    '>{label}
    <img className='ml-2 rounded-full w-5 h-5 '
    src={iconurl}/>
    </button>
  )
}

export default button