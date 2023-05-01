import React from 'react'

export default function Main() {
  return (
    <div style={{ background: "url(./MainBackground.png)" }} className='w-full h-screen '>
      <div className='w-full h-full bg-[rgba(7,7,7,0.9)] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <img src='./MainLogo.svg' />
          <p className='mb-[49px] mt-[20px] w-[688px] text-center text-[24px] leading-[28.13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget elementum erat,  ac gravida odio. Nulla consectetur </p>
        </div>

        <div className='flex flex-col gap-[32px]'>
          <button className='w-[262px] h-[48px] rounded-[4px] bg-[rgba(229,9,20,1)] text-white border-[1px] border-black font-[400] text-[20px] leading-[23.44px]'>Sign In</button>
          <button className='w-[262px] h-[48px] rounded-[4px] bg-[rgba(229,9,20,1)] text-white border-[1px] border-black font-[400] text-[20px] leading-[23.44px]'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
