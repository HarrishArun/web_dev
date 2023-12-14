import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'><img src={imgURL} className='rounded-full object-cover w-[120px] h-[120px]'/>
    <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
    <div className='mt-3 flex justify-center items-center'><
        img src={star} height={24} width={24} className='object-contain m-0'/>
        <p className='text-xl font-monsterrat text-slate-gray'>{rating}</p></div>
        <h3 className='mt-1 font-palanquin  font-bold text-center'>{customerName}</h3></div>
  )
}

export default ReviewCard