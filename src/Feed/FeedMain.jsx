import React from 'react'
import PostCard from './PostCard'

export default function FeedMain() {
  return (
    <div>
      <div className='px-[73px] flex gap-[50px] bg-white pt-[15px]'> 
        <img className='w-[70px] self-start' src='./feedPic.png'></img>
        <div className='flex-1'>
          <input placeholder='What’s in your mind....' className='w-full h-[70px] bg-[#D9D9D9] pl-[22px] text-[18px] leading-[24px]'></input>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[100px] my-[15px]'>
              <div className='flex gap-[18px] items-center'>
                <svg width="50" height="50" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.6247 52.6667H36.208V42.7917H46.083V36.2084H36.208V26.3334H29.6247V36.2084H19.7497V42.7917H29.6247V52.6667ZM6.58301 65.8334V13.1667H59.2497V34.5626L72.4163 21.3959V57.6042L59.2497 44.4376V65.8334H6.58301ZM13.1663 59.2501H52.6663V19.7501H13.1663V59.2501Z" fill="#E50914" />
                </svg>
                <p className='text-black font-[600] text-[20px] leading-[24px]'>Post Video</p>
              </div>
              <div className='flex gap-[18px] items-center'>
                <svg width="50" height="50" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.4997 57.6042C43.6143 57.6042 47.1122 56.1646 49.9935 53.2855C52.8726 50.4042 54.3122 46.9063 54.3122 42.7917C54.3122 38.6771 52.8726 35.1791 49.9935 32.2978C47.1122 29.4187 43.6143 27.9792 39.4997 27.9792C35.3851 27.9792 31.8871 29.4187 29.0058 32.2978C26.1267 35.1791 24.6872 38.6771 24.6872 42.7917C24.6872 46.9063 26.1267 50.4042 29.0058 53.2855C31.8871 56.1646 35.3851 57.6042 39.4997 57.6042ZM39.4997 51.0208C37.1955 51.0208 35.2479 50.2253 33.657 48.6344C32.066 47.0434 31.2705 45.0958 31.2705 42.7917C31.2705 40.4875 32.066 38.5399 33.657 36.949C35.2479 35.358 37.1955 34.5625 39.4997 34.5625C41.8038 34.5625 43.7514 35.358 45.3424 36.949C46.9334 38.5399 47.7288 40.4875 47.7288 42.7917C47.7288 45.0958 46.9334 47.0434 45.3424 48.6344C43.7514 50.2253 41.8038 51.0208 39.4997 51.0208ZM13.1663 69.125C11.3559 69.125 9.80665 68.4809 8.51851 67.1928C7.22817 65.9025 6.58301 64.3521 6.58301 62.5417V23.0417C6.58301 21.2313 7.22817 19.682 8.51851 18.3938C9.80665 17.1035 11.3559 16.4583 13.1663 16.4583H23.5351L29.6247 9.875H49.3747L55.4643 16.4583H65.833C67.6434 16.4583 69.1938 17.1035 70.4841 18.3938C71.7723 19.682 72.4163 21.2313 72.4163 23.0417V62.5417C72.4163 64.3521 71.7723 65.9025 70.4841 67.1928C69.1938 68.4809 67.6434 69.125 65.833 69.125H13.1663ZM65.833 62.5417V23.0417H52.5018L46.4945 16.4583H32.5049L26.4976 23.0417H13.1663V62.5417H65.833Z" fill="#E50914" />
                </svg>
                <p className='text-black font-[600] text-[20px] leading-[24px]'>Post Video</p>
              </div>
            </div>
            <button className='bg-[red] h-[50px] w-[180px] font-[400] text-[20px] leading-[32px]'>Post</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[20px] pb-[70px] pt-[20px]'>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    </div>
  )
}
