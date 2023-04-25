import React, { useState } from 'react'



export default function Rating() {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  }

  console.log(rangeValue);

  const trackStyle = {
    '--progress': `${rangeValue*10}%`,
    background: `linear-gradient(to right, white, white var(--progress), #959595 var(--progress), #959595)`
  };

  return (
    <div>
      <div className='h-[250px]' style={{ backgroundImage: "url('./ratingMain.png')" }}>
        <div className='h-full w-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center'>
          <h1 className=''>Please Rate The Movie</h1>
        </div>
      </div>

      <div className='w-[92%] m-auto'>
        <div>
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
      </div>
    </div>
  )
}
