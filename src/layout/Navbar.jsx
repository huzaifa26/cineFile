import React from 'react'
import { BsStar } from "react-icons/bs"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className='w-[92%] xsm:w-[99%] m-auto h-[100px] flex items-center justify-between'>
        <img className='w-[180px]' src='./Logo.svg'></img>
        <div className='flex gap-[1.85vw]'>
          <img className='w-[60px]' src='./profilePic.svg'></img>
          <img className='w-[20px]' src='./dropDown.svg'></img>
        </div>
      </div>
      <div className='h-[80px] bg-[red] flex items-center'>
        <div className='w-[92%] m-auto flex justify-between items-center'>
          <div className='flex xsm:w-full sm:w-full xsm:justify-between sm:justify-between gap-[5.41vw] xsm:gap-[1vw]'>
            <NavLink to={'/home'} className={({ isActive }) => isActive ? "text-[#002B73]" : "text-white"}>
              <div className='flex flex-col items-center justify-center'>
                <svg className='fill-current w-[1.823vw] min-w-[27px]'  viewBox="0 0 59 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7566 44.5625L29.5003 39.8125L37.2441 44.625L35.216 35.625L42.0378 29.625L33.0649 28.8125L29.5003 20.3125L25.9357 28.75L16.9628 29.5625L23.7847 35.625L21.7566 44.5625ZM14.3201 55L18.3149 37.4375L4.91699 25.625L22.617 24.0625L29.5003 7.5L36.3837 24.0625L54.0837 25.625L40.6857 37.4375L44.6805 55L29.5003 45.6875L14.3201 55Z" />
                </svg>
                <p className='text-white'>Rating</p>
              </div>
            </NavLink>
            <div className='flex flex-col items-center justify-center'>
              <svg className='w-[1.823vw] min-w-[27px]' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 13.125C10.6875 13.125 5.625 18.1875 5.625 24.375C5.625 28.095 7.45687 31.4062 10.2544 33.4575C5.31 35.91 1.875 40.995 1.875 46.875H5.625C5.625 40.6425 10.6425 35.625 16.875 35.625C23.1075 35.625 28.125 40.6425 28.125 46.875H31.875C31.875 40.6425 36.8925 35.625 43.125 35.625C49.3575 35.625 54.375 40.6425 54.375 46.875H58.125C58.125 40.9931 54.69 35.91 49.7456 33.4575C51.1772 32.4144 52.3425 31.0482 53.1469 29.4701C53.9513 27.8919 54.372 26.1463 54.375 24.375C54.375 18.1875 49.3125 13.125 43.125 13.125C36.9375 13.125 31.875 18.1875 31.875 24.375C31.875 28.095 33.7069 31.4062 36.5044 33.4575C33.7649 34.8044 31.4973 36.9491 30 39.6094C28.5027 36.9491 26.2351 34.8044 23.4956 33.4575C24.9272 32.4144 26.0925 31.0482 26.8969 29.4701C27.7013 27.8919 28.122 26.1463 28.125 24.375C28.125 18.1875 23.0625 13.125 16.875 13.125ZM16.875 16.875C21.0431 16.875 24.375 20.2069 24.375 24.375C24.375 28.5431 21.0431 31.875 16.875 31.875C12.7069 31.875 9.375 28.5431 9.375 24.375C9.375 20.2069 12.7069 16.875 16.875 16.875ZM43.125 16.875C47.2931 16.875 50.625 20.2069 50.625 24.375C50.625 28.5431 47.2931 31.875 43.125 31.875C38.9569 31.875 35.625 28.5431 35.625 24.375C35.625 20.2069 38.9569 16.875 43.125 16.875Z" fill="white" />
              </svg>
              <p>Friends</p>
            </div>

            <NavLink to={'/file'} className={({ isActive }) => isActive ? "text-[#002B73]" : "text-white"}>
              <div className='flex flex-col items-center justify-center'>
                <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.9375 42.5625L40 32.5L29.9375 22.4375L26.4375 25.9375L30.5 30H20V35H30.5L26.4375 39.0625L29.9375 42.5625ZM10 50C8.625 50 7.44833 49.5108 6.47 48.5325C5.49 47.5525 5 46.375 5 45V15C5 13.625 5.49 12.4483 6.47 11.47C7.44833 10.49 8.625 10 10 10H25L30 15H50C51.375 15 52.5525 15.49 53.5325 16.47C54.5108 17.4483 55 18.625 55 20V45C55 46.375 54.5108 47.5525 53.5325 48.5325C52.5525 49.5108 51.375 50 50 50H10ZM10 15V45H50V20H27.9375L22.9375 15H10Z" />
                </svg>
                <p className='text-white'>File</p>
              </div>
            </NavLink>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-[30px]' src='./theater.svg' />
              <p>Theaters</p>
            </div>
            <div className='flex flex-col items-center justify-center '>
              <img className='w-[30px]' src='./inbox.svg' />
              <p>Inbox</p>
            </div>
            <NavLink to={'/feed'} className={({ isActive }) => isActive ? "text-[#002B73]" : "text-white"}>
              <div className='flex flex-col items-center justify-center'>
                <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 42.5H27.5V37.5H15V42.5ZM40 42.5H45V37.5H40V42.5ZM15 32.5H27.5V27.5H15V32.5ZM40 32.5H45V17.5H40V32.5ZM15 22.5H27.5V17.5H15V22.5ZM10 52.5C8.625 52.5 7.44833 52.0108 6.47 51.0325C5.49 50.0525 5 48.875 5 47.5V12.5C5 11.125 5.49 9.9475 6.47 8.9675C7.44833 7.98917 8.625 7.5 10 7.5H50C51.375 7.5 52.5525 7.98917 53.5325 8.9675C54.5108 9.9475 55 11.125 55 12.5V47.5C55 48.875 54.5108 50.0525 53.5325 51.0325C52.5525 52.0108 51.375 52.5 50 52.5H10ZM10 47.5H50V12.5H10V47.5Z" />
                </svg>
                <p>Feed</p>
              </div>
            </NavLink>

          </div>
          <div className='relative xsm:hidden sm:hidden flex'>
            <input className='min-w-[200px] h-[40px] w-[23.18vw] px-[24px] rounded-[6px] text-black' placeholder='Search...'></input>
            <img className='absolute right-[23px] top-[50%] translate-y-[-50%] w-[25px] cursor-pointer' src='./search.svg' />
          </div>
        </div>
      </div>
    </div >
  )
}
