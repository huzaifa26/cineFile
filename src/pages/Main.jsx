import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div style={{ background: "url(./MainBackground.png)" }} className='w-full h-screen '>
      <div className='w-full h-full bg-[rgba(7,7,7,0.9)] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <img src='./MainLogo.svg' className='w-[27.34375vw] min-w-[300px]' />
          <p className='mb-[49px] mt-[20px] xsm:min-w-[100%] sm:min-w-[100%] max-w-[35.833333333333336vw] text-center text-custom-24 leading-[28.13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget elementum erat,  ac gravida odio. Nulla consectetur </p>
        </div>
        <div className='flex flex-col gap-[32px]'>
          <Link to="/signin">
            <button className='w-[262px] h-[48px] rounded-[4px] bg-[rgba(229,9,20,1)]  border-[1px] border-black font-[400] text-[20px] leading-[23.44px]'>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className='w-[262px] h-[48px] rounded-[4px] bg-[rgba(229,9,20,1)] border-[1px] border-black font-[400] text-[20px] leading-[23.44px]'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
