import React from 'react'
import { BsStar } from "react-icons/bs"

export default function Navbar() {
  return (
    <div>
      <div className='w-[92%] m-auto h-[100px] flex items-center justify-between'>
        <img className='w-[180px]' src='./Logo.svg'></img>
        <div className='flex gap-[1.85vw]'>
          <img className='w-[60px]' src='./profilePic.svg'></img>
          <img className='w-[20px]' src='./dropDown.svg'></img>
        </div>
      </div>
      <div className='h-[80px] bg-[rgba(229,9,20,1)] flex items-center'>
        <div className='w-[92%] m-auto flex justify-between items-center'>
          <div className='flex gap-[5.41vw]'>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-[35px]' src='./rating.svg' />
              <p>Rating</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-[30px]' src='./files.svg' />
              <p>File</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-[30px]' src='./theater.svg' />
              <p>Theaters</p>
            </div>
            <div className='flex flex-col items-center justify-center '>
              <img className='w-[30px]' src='./inbox.svg' />
              <p>Inbox</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-[30px]' src='./feeds.svg' />
              <p>Feed</p>
            </div>
          </div>
          <div className='relative'>
            <input className='h-[40px] w-[23.18vw] px-[24px] rounded-[6px] text-black' placeholder='Search...'></input>
            <img className='absolute right-[23px] top-[50%] translate-y-[-50%] w-[25px] cursor-pointer' src='./search.svg'/>
          </div>
        </div>
      </div>
    </div>
  )
}
