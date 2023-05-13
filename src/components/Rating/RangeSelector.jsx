import React, { useState } from 'react'

export default function RangeSelector({ title,updateRating }) {
  const [rangeValue, setRangeValue] = useState(10);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    updateRating(title,event.target.value);
  }

  const trackStyle = {
    '--progress': `${rangeValue * 10}%`,
    background: `linear-gradient(to right, white, white var(--progress), #959595 var(--progress), #959595)`
  };

  return (
    <div className='w-[50vw] mt-[15px]'>
      <div className='flex justify-between items-center'>
        <p className='font-[600] text-[24px]'>{title}</p>
        <p className='font-[500] text-[18px]'>{`${rangeValue}/10`}</p>
      </div>
      <input
        className='w-[50vw] bg-[#959595]'
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={rangeValue}
        onChange={handleRangeChange}
        style={trackStyle}
      />
    </div>
  )
}
