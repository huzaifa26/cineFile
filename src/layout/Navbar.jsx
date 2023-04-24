import React from 'react'
import {BsStar} from "react-icons/bs"

export default function Navbar() {
  return (
    <div>
      <div className='w-[92%] m-auto h-[180px] flex items-center justify-between'>
        <img className='w-[20vw]' src='./Logo.svg'></img>
        <div className='flex gap-[1.85vw]'>
          <img className='w-[7.23vw]' src='./profilePic.svg'></img>
          <img className='w-[1.85vw]' src='./dropDown.svg'></img>
        </div>
      </div>
      <div className='h-[155px] bg-[rgba(229,9,20,1)] flex items-center'>
        <div className='flex gap-[5.41vw]'>
          <div className='flex flex-col items-center'>
              <img src='./rating.svg'/>
              <p>Rating</p>
          </div>
          <div className='flex flex-col items-center'>
              <img src='./files.svg'/>
              <p>File</p>
          </div>
          <div className='flex flex-col items-center'>
              <img src='./theater.svg'/>
              <p>Theaters</p>
          </div>
          <div className='flex flex-col items-center'>
              <img src='./inbox.svg'/>
              <p>Inbox</p>
          </div>
          <div className='flex flex-col items-center'>
              <img src='./feeds.svg'/>
              <p>Feed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
