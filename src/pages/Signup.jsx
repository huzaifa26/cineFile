import React from 'react'

export default function Signup() {
  return (
    <div style={{ background: "url(./SignupMain.png)",backgroundSize:"cover" }} className='w-full h-screen '>
      <div className='w-full h-full bg-[rgba(7,7,7,0.4)] flex flex-col items-center justify-center'>
        <div className='w-[1344px] h-[813px] bg-[rgba(0,0,0,0.6)]'>
          <div className='flex flex-col items-center justify-center mt-[61px]'>
            <img className='w-[304px]' src='./MainLogo.svg' />
          </div>

          <div className='flex flex-col items-center mt-[47px]'>
            <h1 className='font-[700] text-[36px] leading-[42.19px]'>Create Your Account</h1>
            <form className='flex flex-col items-center'>
              <div className='flex flex-col items-center gap-[15px] mt-[69px]'>
                <div className='flex gap-[88px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>First Name</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Last Name</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                </div>

                <div className='flex gap-[88px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Date of Birth</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Location</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                </div>

                <div className='flex gap-[88px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Contact Number</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Email Address</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                </div>

                <div className='flex gap-[88px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Username</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                  <div className='flex flex-col gap-[9px]'>
                    <label className='font-[16.41px] text-[14px] leading-[16.41px]'>Password</label>
                    <input className='w-[368px] h-[38px] rounded-[4px] bg-white border-[1px] border-[red] ' />
                  </div>
                </div>
              </div>
              <div>
                <button className='w-[262px] h-[48px] rounded-[4px] bg-[rgba(229,9,20,1)] text-white border-[1px] border-black font-[400] text-[20px] leading-[23.44px] mt-[47px]'>Sign Up</button>
                <p className='text-[14px] text-center leading-[16.41px] font-[400] mt-[18px]'>Already have an account? <span className='text-[red]'>Login</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
