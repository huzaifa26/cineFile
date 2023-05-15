import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Feed() {
  return (
    <div>
      <div  className='px-[5.729vw] flex justify-between py-[25px]'>
        <NavLink to={'/feed'} end className={({isActive})=> isActive?"border-b-[3px] border-[red]":""}>
          <p className='font-[700] text-[24px] xsm:text-[18px] leading-[32px]'>Feed</p>
        </NavLink>
        <NavLink to={'/feed/news'} className={({isActive})=> isActive?"border-b-[3px] border-[red]":""}>
          <p className='font-[700] text-[24px] xsm:text-[18px] leading-[32px]'>Movie News</p>
        </NavLink>
        <NavLink to={'/feed/preview'} className={({isActive})=> isActive?"border-b-[3px] border-[red]":""}>
          <p className='font-[700] text-[24px] xsm:text-[18px] leading-[32px]'>Movie Preview</p>
        </NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
