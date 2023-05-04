import React from 'react'

export default function Signin() {
  return (
    <div style={{ background: "url(./LoginMain.png)",backgroundSize:"cover" }} className='w-full h-screen '>
      <div className='w-full h-full bg-[rgba(7,7,7,0.85)] flex flex-col items-center justify-center'>
        <div className='w-[964px] h-[722px] bg-[rgba(0,0,0,0.6)]'>
          <div className='flex flex-col items-center justify-center mt-[102px]'>
            <img className='w-[304px]' src='./MainLogo.svg' />
          </div>

          <div className='flex flex-col items-center mt-[52px]'>
            <h1 className='font-[700] text-[36px] leading-[42.19px]'>Welcome Back!</h1>
            <form className='flex flex-col items-center'>
              <div className='flex items-center gap-[15px] mt-[69px]'>
                <div className='flex flex-col gap-[15px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Email</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Password</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center w-[368px] mt-[9.74px]'>
                <div className='flex gap-[4px]'>
                  <label class="relative inline-flex items-center cursor-pointer w-[31.32px] h-[14.04px]">
                    <input type="checkbox" value="" class="sr-only peer"/>
                      <div class="w-[31.32px] h-[14.04px] bg-white border-[1px] border-[red] outline-none peer-focus:outline-none peer-focus:ring-4 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-red-500 after:border-red-500 after:border after:rounded-full after:h-[14.04px] after:w-[14.04px] after:transition-all  peer-checked:bg-white  peer-checked:border-red-500"></div>
                  </label>
                  <p className='font-[400] text-[14px] leading-[16.41px]'>Remember Me</p>
                </div>
                <p className='font-[600] text-[14px] leading-[16.41px] text-[red]'>Forgot Password?</p>
              </div>

              <div>
                <button className='w-[262px] h-[48px] rounded-[4px] bg-[rgba(229,9,20,1)] text-white border-[1px] border-black font-[400] text-[20px] leading-[23.44px] mt-[19.22px]'>Sign In</button>
                <p className='text-[14px] text-center leading-[16.41px] font-[400] mt-[18px]'>Don’t have an account? <span className='text-[red]'>Sign Up</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
