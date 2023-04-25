import React, { useState } from 'react'
import RangeSelector from '../components/Rating/RangeSelector'



export default function Rating() {

  return (
    <div>
      <div className='h-[250px]' style={{ backgroundImage: "url('./ratingMain.png')" }}>
        <div className='h-full w-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center'>
          <h1 className=''>Please Rate The Movie</h1>
        </div>
      </div>

      <div className='w-[92%] m-auto mt-[34px] flex justify-between'>
        <div className='flex flex-col'>
          <RangeSelector title={"Story"} />
          <RangeSelector title={"Acting"} />
          <RangeSelector title={"Pacing"} />
          <RangeSelector title={"Cinematography"} />
          <RangeSelector title={"Sound EX / Music"} />
          <RangeSelector title={"Finale"} />
          <RangeSelector title={"Feelings"} />
          <button className='text-black bg-white w-[13.64vw] rounded-[4px] h-[40px] min-w-[200px] mt-[20px] block font-[400] text-[18px]'>+ Sub categories</button>
          <button className='text-white bg-[red] w-[8.51vw] rounded-[4px] h-[48px] min-w-[160px] mt-[20px] block self-end font-[600] text-[18px]'>Calculate</button>
        </div>
        <div className='w-[28.22vw] mt-[80px]'>
          <div className='relative'>
            <input className='h-[40px] w-[100%] px-[24px] rounded-[6px] text-black' placeholder='Search Movie'></input>
            <img className='absolute right-[23px] top-[50%] translate-y-[-50%] w-[25px] cursor-pointer' src='./search.svg' />
          </div>
          <div className='flex flex-col justify-center items-center mt-[20px]'>
            <img className='w-[100%]' src='./ratingMoviePoster.png'/>
            <div className='w-full'>
              <div className='flex justify-between px-2 mt-[10px]'>
                <p className='text-[18px] font-[600] leading-[30px]'>Joker</p>
                <p className='text-[18px] font-[600] leading-[30px]'>Score</p>
              </div>
              <p className='text-[16px] text-[#959595] font-[400] leading-[30px] mt-[-5px] px-2'>1hr 15min | 23 mar,2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
