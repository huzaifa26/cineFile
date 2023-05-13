import { useQuery, useQueryClient } from '@tanstack/react-query'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebase';
import { Link } from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState();
  const queryClient = useQueryClient();

  useEffect(() => {
    setUser(queryClient.getQueryData(["user"]));
  }, [queryClient])

  const moviesQuery = useQuery(['movies'], fetchData);

  async function fetchData() {
    let result = await getDocs(collection(db, "movies"))
    result = result.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    console.log(result);

    return result
  }

  return (
    <div className='w-[92%] m-auto pb-[54px]'>
      <div>
        <div className='flex justify-between mt-[70px] mb-[30px]'>
          <h1 className='font-[700] text-[32px] h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Recently Watched Movies</h1>
          <p className='font-[700] text-[32px] leading-[36px] tracking-[2%] text-[red] h-[40px] border-[red] border-b-[5px]'>See all</p>
        </div>
        <div className='flex gap-[73px]'>

          {moviesQuery?.data?.map((movie) => {
            var minutes = movie?.movieTime;
            var hours = Math.floor(minutes / 60);
            var remainingMinutes = minutes % 60;

            return (
              <Link to={'/rating'} state={movie}>
                <div className='w-[542px]'>
                  <img className='aspect-[10px]' src={movie.image} />
                  <div className='flex justify-between mt-[22px] mb-[10px]'>
                    <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>{movie.name}</h3>
                    <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]' >{`${movie.rating} (${movie.numOfRating})`}</p>
                  </div>
                  <p className='text-[rgba(149,149,149,1)]'>{`${hours}hr ${remainingMinutes}min | ${movie.releaseDate}`}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div>
        <div className='flex justify-between mt-[54px]'>
          <h1 className='font-[700] text-[32px] h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Movies Suggestions</h1>
          <p className='font-[700] text-[32px] leading-[36px] tracking-[2%] text-[red] h-[40px] underline'>See all</p>
        </div>
        <div className='flex gap-[73px] mt-[30px]'>
          <div className='w-[542px]'>
            <img src='./homeSuggestion1.png' />
            <div className='flex justify-between mt-[22px] mb-[10px]'>
              <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>Movie Name</h3>
              <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]'  >Score</p>
            </div>
            <p className='text-[rgba(149,149,149,1)]'>1hr 15min  |  23 mar, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}
