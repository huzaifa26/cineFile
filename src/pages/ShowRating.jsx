import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ShowRating() {
  const location = useLocation();
  const [movie, setMovie] = useState(location.state);
  const [review, setReview] = useState();

  const queryClient = useQueryClient()


  var minutes = movie?.movieTime;
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;

  useEffect(() => {
    movie.reviews.forEach((review) => {
      if (review.user.uid === queryClient.getQueryData(['user']).uid) {
        setReview(review);
      }
    })
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[500px] mt-[25px]'>
        <img className='w-[500px] object-fill h-[500px]' src={movie?.image} />
        <div className='flex justify-between mt-[22px] mb-[10px]'>
          <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>{movie?.name}</h3>
          <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]' >{`${movie?.rating} (${movie?.numOfRating})`}</p>
        </div>
        <p className='text-[rgba(149,149,149,1)]'>{`${hours}hr ${remainingMinutes}min | ${movie?.releaseDate}`}</p>
      </div>

      <div className='w-full px-[3.75vw] flex flex-col gap-[10px] my-[30px]'>
          <h4 className='text-[28px] leading-[34px] text-[red]'>Your Score: <span className='text-white'>{review.rating}</span></h4>
          <div>
            <h5 className='text-[28px] leading-[34px] text-[red]'>Your Feedback: <span className='text-white'>{review.feedback} </span></h5>
            <p className='text-[24px] leading-[30px]'></p>
          </div>
          {review?.categories.map((c) => {
            return (
              <div className='flex mt-[20px]'>
                <p className='w-[15.625vw] text-[24px] leading-[30px]'>{c.name}</p>
                <p className='text-[24px] leading-[30px]'>{c.rating}</p>
              </div>
            )
          })}
      </div>
      <div className='w-full px-[3.75vw] flex flex-col gap-[5px]'>

      </div>
    </div>
  )
}
