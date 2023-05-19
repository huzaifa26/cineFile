import React from 'react'

export default function Profile() {
  return (
    <div className='flex flex-col items-center px-[3.958vw]'>
      <div className='w-[20.781vw] mt-[25px] flex flex-col gap-[15px]'>
        <img className='w-[20.781vw]' src='./ProfilePP.png'></img>
        <div className='flex justify-between'>
          <p className='text-[28px] leading-[34px]'>Score:</p>
          <p className='text-[28px] leading-[34px]'>125</p>
        </div>
      </div>

      <div className='w-full bg-white border-2 border-[red] px-[2.031vw] py-[30px] mt-[50px]'>
        <h3 className='text-[red] underline text-[32px] leading-[36px] font-bold mb-[15px]'>Score Activity</h3>
        <div className='flex gap-[5.208vw]'>
          <p className='text-[24px] leading-[30px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed</p>
          <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
        </div>
        <div className='flex gap-[5.208vw]'>
          <p className='text-[24px] leading-[30px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed</p>
          <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
        </div>
        <div className='flex gap-[5.208vw]'>
          <p className='text-[24px] leading-[30px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed</p>
          <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
        </div>
        <div className='flex gap-[5.208vw]'>
          <p className='text-[24px] leading-[30px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed</p>
          <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
        </div>
        <div className='flex gap-[5.208vw]'>
          <p className='text-[24px] leading-[30px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed</p>
          <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
        </div>
      </div>

      <div className='w-full bg-white border-2 border-[red] px-[2.031vw] py-[30px] mt-[50px]'>
        <h3 className='text-[red] underline text-[32px] leading-[36px] font-bold mb-[15px]'>Challenges</h3>
        <div className='flex justify-between flex-wrap'>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
            <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
            <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
            <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
            <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
            <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
            <p className='text-[red] text-[24px] leading-[30px]'>+20</p>
          </div>
        </div>
      </div>

      <div className='w-full bg-white border-2 border-[red] px-[2.031vw] py-[30px] mt-[50px] mb-[50px]'>
        <h3 className='text-[red] underline text-[32px] leading-[36px] font-bold mb-[15px]'>Completed Challenges</h3>
        <div className='flex justify-between flex-wrap'>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <img className='w-[245.61px]' src='./profileChallenges.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
