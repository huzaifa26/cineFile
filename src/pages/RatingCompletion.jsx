import React from 'react';
import { RiVideoAddLine } from "react-icons/ri";

export default function RatingCompletion() {
  return (
    <div className='mb-[92px] flex flex-col'>
      <div className='h-[250px]' style={{ backgroundImage: "url('./ratingMain.png')" }}>
        <div className='h-full w-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center'>
          <h1 className=''>Rating Completion</h1>
        </div>
      </div>

      <div>
        <div className='w-[542px] pt-2 m-auto'>
          <img className='w-[542px] h-[476px]' src='./ratingMoviePoster.png' />
          <div className='flex justify-between mt-[10px]'>
            <p className='text-[32px] font-[600] leading-[36px]'>Joker</p>
            <p className='text-[32px] font-[600] leading-[36px]'>Score</p>
          </div>
        </div>
      </div>

      <div className='m-auto mt-[59px]'>
        <textarea className='pl-[29px] pt-[27px] text-black resize-none w-[92.24vw] h-[406px] border-[3px] border-[red] font-[400] text-[24px] leading-[30px] tracking-[2%]' placeholder='Write Review Here....'></textarea>
      </div>
      <div className='w-[92.24vw] m-auto flex justify-center relative mt-[55px]'>
        <div className='flex items-center gap-[20px] absolute left-0'>
          <RiVideoAddLine className='w-[60px] h-[60px]'/>
          <p className='font-[600] text-[28px] leading-[32px]'>Record a Video Review</p>
        </div>

        <button className='w-[262px] place-self-center h-[68px] bg-[red] '>SUBMIT</button>
      </div>
    </div>
  )
}