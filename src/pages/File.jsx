import React from 'react'

export default function File() {
  return (
    <div className='w-[92%] m-auto pb-[54px]'>
      <div>
        <div className='flex justify-between mt-[70px] mb-[30px]'>
          <h1 className='font-[700] text-[32px] h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Rated Movies</h1>
          <p className='font-[700] text-[32px] leading-[36px] tracking-[2%] text-[red] h-[40px] border-[red] border-b-[5px]'>See all</p>
        </div>
        <div className='flex gap-[73px]'>
          <div className='w-[542px]'>
            <img src='./homeRecent1.png'/>
            <div className='flex justify-between mt-[22px] mb-[10px]'>
              <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Movie Name</h3>
              <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Score</p>
            </div>
            <p className='text-[rgba(149,149,149,1)]'>1hr 15min  |  23 mar, 2023</p>
          </div>

          <div className='w-[542px]'>
            <img src='./homeRecent2.png'/>
            <div className='flex justify-between mt-[22px] mb-[10px]'>
              <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Movie Name</h3>
              <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]'  >Score</p>
            </div>
            <p className='text-[rgba(149,149,149,1)]'>1hr 15min  |  23 mar, 2023</p>
          </div>

          <div className='w-[542px]'>
            <img src='./homeRecent3.png'/>
            <div className='flex justify-between mt-[22px] mb-[10px]'>
              <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Movie Name</h3>
              <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]'  >Score</p>
            </div>
            <p className='text-[rgba(149,149,149,1)]'>1hr 15min  |  23 mar, 2023</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-between mt-[54px]'>
          <h1 className='font-[700] text-[32px] h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Want to Watch</h1>
          <p className='font-[700] text-[32px] leading-[36px] tracking-[2%] text-[red] h-[40px] underline'>See all</p>
        </div>
        <div className='flex gap-[73px] mt-[30px]'>
          <div className='w-[542px]'>
            <img src='./homeSuggestion1.png'/>
            <div className='flex justify-between mt-[22px] mb-[10px]'>
              <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Movie Name</h3>
              <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]'  >Score</p>
            </div>
            <p className='text-[rgba(149,149,149,1)]'>1hr 15min  |  23 mar, 2023</p>
          </div>

          <div className='w-[542px]'>
            <img src='./homeSuggestion2.png'/>
            <div className='flex justify-between mt-[22px] mb-[10px]'>
              <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Movie Name</h3>
              <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]'  >Score</p>
            </div>
            <p className='text-[rgba(149,149,149,1)]'>1hr 15min  |  23 mar, 2023</p>
          </div>

          <div className='w-[542px]'>
            <img src='./homeSuggestion3.png'/>
            <div className='flex justify-between mt-[22px] mb-[10px]'>
              <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Movie Name</h3>
              <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]'  >Score</p>
            </div>
            <p className='text-[rgba(149,149,149,1)]'>1hr 15min  |  23 mar, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}
