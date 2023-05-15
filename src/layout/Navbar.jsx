import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false)
  const navigate = useNavigate()

  const logoutHander = () => {
    localStorage.removeItem("user");
    navigate('/')
  }

  return (
    <div>
      <div className='w-[92%] xsm:w-[99%] m-auto h-[100px] flex items-center justify-between'>
        <img className='w-[180px]' src='./Logo.svg'></img>
        <div className='flex gap-[1.85vw] relative'>
          <img className='w-[60px]' src='./profilePic.svg'></img>
          <img className='w-[20px] cursor-pointer' onClick={() => setShowOptions(!showOptions)} src='./dropDown.svg'></img>
          {showOptions &&
            <>
              <div onClick={(e) => e.stopPropagation()} className="transition-all  border-solid border-b-[#525252] border-b-[12px] border-x-transparent border-x-[12px] border-t-0 absolute z-[100000] top-[calc(100%+3px)] right-[2px]"></div>
              <div onClick={(e) => e.stopPropagation()} className='w-[18.333333333333332vw]  overflow-hidden min-w-[280px] bg-white dark:text-white text-black  dark:bg-[#525252] absolute z-[100000] rounded-[10px] top-[calc(100%+15px)] right-[-12px]'>
                <div className='m-auto divide-y-[1px] divide-[rgba(255,255,255,0.5)] flex w-full flex-col '>
                  <div className='cursor-pointer hover:font-[500] hover:bg-[#cccccc21]'>
                    <div className='py-[14.86px] text-custom-18 px-[18px]'>
                      Profile
                    </div>
                  </div>
                  <div onClick={logoutHander} className='cursor-pointer hover:font-[500] hover:bg-[#cccccc21]'>
                    <div className='py-[14.86px] text-custom-18 px-[18px]'>
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </>}
        </div>
      </div>
      <div className='h-[80px] bg-[red] flex items-center'>
        <div className='w-[92%] m-auto flex justify-between items-center'>
          <div className='flex  xsm:w-full sm:w-full xsm:justify-between sm:justify-between gap-[5.41vw] xsm:gap-[1vw]'>
            <NavLink to={'/home'} className={({ isActive }) => isActive ? "text-[#002B73]" : "text-white"}>
              <div className='flex flex-col items-center justify-center'>
                <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 59 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7566 44.5625L29.5003 39.8125L37.2441 44.625L35.216 35.625L42.0378 29.625L33.0649 28.8125L29.5003 20.3125L25.9357 28.75L16.9628 29.5625L23.7847 35.625L21.7566 44.5625ZM14.3201 55L18.3149 37.4375L4.91699 25.625L22.617 24.0625L29.5003 7.5L36.3837 24.0625L54.0837 25.625L40.6857 37.4375L44.6805 55L29.5003 45.6875L14.3201 55Z" />
                </svg>
                <p className='xsm:text-[14px] text-white text-[16px] mt-[1px]'>Rating</p>
              </div>
            </NavLink>
            <NavLink to={'/friends'} className={({ isActive }) => isActive ? "text-[#002B73]" : "text-white"}>
              <div className='flex flex-col items-center justify-center'>
                <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.875 13.125C10.6875 13.125 5.625 18.1875 5.625 24.375C5.625 28.095 7.45687 31.4062 10.2544 33.4575C5.31 35.91 1.875 40.995 1.875 46.875H5.625C5.625 40.6425 10.6425 35.625 16.875 35.625C23.1075 35.625 28.125 40.6425 28.125 46.875H31.875C31.875 40.6425 36.8925 35.625 43.125 35.625C49.3575 35.625 54.375 40.6425 54.375 46.875H58.125C58.125 40.9931 54.69 35.91 49.7456 33.4575C51.1772 32.4144 52.3425 31.0482 53.1469 29.4701C53.9513 27.8919 54.372 26.1463 54.375 24.375C54.375 18.1875 49.3125 13.125 43.125 13.125C36.9375 13.125 31.875 18.1875 31.875 24.375C31.875 28.095 33.7069 31.4062 36.5044 33.4575C33.7649 34.8044 31.4973 36.9491 30 39.6094C28.5027 36.9491 26.2351 34.8044 23.4956 33.4575C24.9272 32.4144 26.0925 31.0482 26.8969 29.4701C27.7013 27.8919 28.122 26.1463 28.125 24.375C28.125 18.1875 23.0625 13.125 16.875 13.125ZM16.875 16.875C21.0431 16.875 24.375 20.2069 24.375 24.375C24.375 28.5431 21.0431 31.875 16.875 31.875C12.7069 31.875 9.375 28.5431 9.375 24.375C9.375 20.2069 12.7069 16.875 16.875 16.875ZM43.125 16.875C47.2931 16.875 50.625 20.2069 50.625 24.375C50.625 28.5431 47.2931 31.875 43.125 31.875C38.9569 31.875 35.625 28.5431 35.625 24.375C35.625 20.2069 38.9569 16.875 43.125 16.875Z" />
                </svg>
                <p className='xsm:text-[14px] text-white text-[16px] mt-[1px]'>Friends</p>
              </div>
            </NavLink>

            <NavLink to={'/file'} className={({ isActive }) => isActive ? "text-[#002B73]" : "text-white"}>
              <div className='flex flex-col items-center justify-center'>
                <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.9375 42.5625L40 32.5L29.9375 22.4375L26.4375 25.9375L30.5 30H20V35H30.5L26.4375 39.0625L29.9375 42.5625ZM10 50C8.625 50 7.44833 49.5108 6.47 48.5325C5.49 47.5525 5 46.375 5 45V15C5 13.625 5.49 12.4483 6.47 11.47C7.44833 10.49 8.625 10 10 10H25L30 15H50C51.375 15 52.5525 15.49 53.5325 16.47C54.5108 17.4483 55 18.625 55 20V45C55 46.375 54.5108 47.5525 53.5325 48.5325C52.5525 49.5108 51.375 50 50 50H10ZM10 15V45H50V20H27.9375L22.9375 15H10Z" />
                </svg>
                <p className='xsm:text-[14px] text-white text-[16px] mt-[1px]'>File</p>
              </div>
            </NavLink>
            <div className='flex flex-col items-center justify-center'>
              <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.3335 43.75V6.25H12.5002V10.4167H16.6668V6.25H33.3335V10.4167H37.5002V6.25H41.6668V43.75H37.5002V39.5833H33.3335V43.75H16.6668V39.5833H12.5002V43.75H8.3335ZM12.5002 35.4167H16.6668V31.25H12.5002V35.4167ZM12.5002 27.0833H16.6668V22.9167H12.5002V27.0833ZM12.5002 18.75H16.6668V14.5833H12.5002V18.75ZM33.3335 35.4167H37.5002V31.25H33.3335V35.4167ZM33.3335 27.0833H37.5002V22.9167H33.3335V27.0833ZM33.3335 18.75H37.5002V14.5833H33.3335V18.75ZM20.8335 39.5833H29.1668V10.4167H20.8335V39.5833Z" />
              </svg>
              <p className='xsm:text-[14px] text-white text-[16px] mt-[2px]'>Theaters</p>
            </div>
            <div className='flex flex-col items-center justify-center '>
              <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 22.5H40M20 32.5H35M22.5 45H15C13.0109 45 11.1032 44.2098 9.6967 42.8033C8.29018 41.3968 7.5 39.4891 7.5 37.5V17.5C7.5 15.5109 8.29018 13.6032 9.6967 12.1967C11.1032 10.7902 13.0109 10 15 10H45C46.9891 10 48.8968 10.7902 50.3033 12.1967C51.7098 13.6032 52.5 15.5109 52.5 17.5V37.5C52.5 39.4891 51.7098 41.3968 50.3033 42.8033C48.8968 44.2098 46.9891 45 45 45H37.5L30 52.5L22.5 45Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill='none' />
              </svg>

              <p className='xsm:text-[14px] text-white text-[16px] mt-[1px]'>Inbox</p>
            </div>
            <NavLink to={'/feed'} className={({ isActive }) => isActive ? "text-[#002B73]" : "text-white"}>
              <div className='flex flex-col items-center justify-center'>
                <svg className='fill-current w-[1.823vw] min-w-[27px]' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 42.5H27.5V37.5H15V42.5ZM40 42.5H45V37.5H40V42.5ZM15 32.5H27.5V27.5H15V32.5ZM40 32.5H45V17.5H40V32.5ZM15 22.5H27.5V17.5H15V22.5ZM10 52.5C8.625 52.5 7.44833 52.0108 6.47 51.0325C5.49 50.0525 5 48.875 5 47.5V12.5C5 11.125 5.49 9.9475 6.47 8.9675C7.44833 7.98917 8.625 7.5 10 7.5H50C51.375 7.5 52.5525 7.98917 53.5325 8.9675C54.5108 9.9475 55 11.125 55 12.5V47.5C55 48.875 54.5108 50.0525 53.5325 51.0325C52.5525 52.0108 51.375 52.5 50 52.5H10ZM10 47.5H50V12.5H10V47.5Z" />
                </svg>
                <p className='xsm:text-[14px] text-white text-[16px] mt-[1px]'>Feed</p>
              </div>
            </NavLink>

          </div>
          <div className='relative xsm:hidden sm:hidden flex'>
            <input className='min-w-[200px] h-[40px] w-[23.18vw] px-[24px] rounded-[6px] text-black' placeholder='Search...'></input>
            <img className='absolute right-[23px] top-[50%] translate-y-[-50%] w-[25px] cursor-pointer' src='./search.svg' />
          </div>
        </div>
      </div>
    </div >
  )
}