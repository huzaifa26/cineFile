import React from 'react'

export default function Footer() {
  return (
    <div className='w-full min-h-[430px] bg-[red] pt-[48px] pb-[10px]'>
      <div className='w-[92%] h-full m-auto flex flex-wrap xsm:gap-[30px] sm:gap-[30px] justify-between '>
        <div>
          <h3 className='text-[32px] font-[700] leading-[56px]'>CineFIle</h3>
          <div className='mt-[16px]'>
            <h4 className='text-[20px] font-[500] leading-[23.44px] mb-[10px]'>Address</h4>
            <p className='w-[255.36px] text-[16px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing Lorem ipsum dolor sit amet, consectetuer adipiscing </p>
          </div>
          <div className='mt-[16px]'>
            <h4 className='text-[20px] font-[500] leading-[23.44px] mb-[10px]'>Office Hour</h4>
            <p className='w-[255.36px] text-[16px]'>Monday - Sunday</p>
            <p className='w-[255.36px] text-[16px]'>10.00 - 18.00</p>
          </div>
        </div>
        <div className='pt-[20px]'>
          <h4 className='text-[24px] font-[600] leading-[23.44px] mb-[10px]'>Get in touch</h4>
          <div className='bg-white w-[60px] h-[1px] my-[14px]'></div>
          <div className='flex flex-col gap-[15px]'>
            <div className='flex'>
              <p className='w-[130px] font-[500] text-[16px] mr-[20px]'>Phone</p>
              <p>022-20277564</p>
            </div>

            <div className='flex'>
              <p className='w-[130px] font-[500] text-[16px] mr-[20px]'>Service Center</p>
              <p>0811-233-8899</p>
            </div>

            <div className='flex'>
              <p className='w-[130px] font-[500] text-[16px] mr-[20px]'>Customer Service</p>
              <p>0811-235-9988</p>
            </div>

            <div className='flex gap-[25px] xsm:justify-center'>
              <img src='./facebook.svg' />
              <img src='./Instagram.svg' />
              <img src='./Twitter.svg' />
              <img src='./Youtube.svg' />
            </div>
          </div>
        </div>
        <div className='pt-[20px]'>
          <h4 className='text-[24px] font-[600] leading-[23.44px] mb-[10px]'>Useful Link</h4>
          <div className='bg-white w-[60px] h-[1px] my-[14px]'></div>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
        </div>
        <div className='pt-[20px]'>
          <h4 className='text-[24px] font-[600] leading-[23.44px] mb-[10px]'>Campaign</h4>
          <div className='bg-white w-[60px] h-[1px] my-[14px]'></div>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
          <p className='leading-[32px]'>Lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}
