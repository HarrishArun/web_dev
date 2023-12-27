'use client'
import clsx from 'clsx'
import Link from 'next/link'

import React from 'react'
interface DesktopItmsProps{
    label:string;
    href:string;
    icon:any;
    onClick?:()=>void;
    active?:boolean;
}
const DesktopItem :React.FC<DesktopItmsProps>= ({label,icon,href,onClick,active}) => {


    // const handleClick=()=>{
    //     if(onclick)
    // }
 
  return (
    <div>DesktopItem</div>
  )
}

export default DesktopItem