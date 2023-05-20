import { useQuery, useQueryClient } from '@tanstack/react-query'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebase';
import { Link } from 'react-router-dom';

export default function Home() {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(queryClient.getQueryData(['user']));
  const [recentMovie, setRecentMovie] = useState();
  const [sugestedMovie, setSugestedMovie] = useState();

  useEffect(() => {
    setUser(queryClient.getQueryData(["user"]));
  }, [queryClient, location.pathname])

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      setRecentMovie(() => {
        let user = queryClient.getQueryData(["user"])
        let movieArr = queryClient.getQueryData(['movies'])?.filter((movie) => {
          if (user?.reviewed?.includes(movie.id)) {
            return movie
          }
        })
        return movieArr
      })

      setSugestedMovie(() => {
        let mov = queryClient.getQueryData(['movies']) || [];
        const m = [...mov]

        m?.sort((a, b) => {
          if (a.rating !== b.rating) {
            return b.rating - a.rating;
          } else {
            return b.numOfRatings - a.numOfRatings;
          }
        });
        return m
      })
    });

    setRecentMovie(() => {
      let user = queryClient.getQueryData(["user"])
      let movieArr = queryClient.getQueryData(['movies'])?.filter((movie) => {
        if (user?.reviewed?.includes(movie.id)) {
          return movie
        }
      })
      return movieArr
    })

    setSugestedMovie(() => {
      let mov = queryClient.getQueryData(['movies']) || [];
      const m = [...mov]

      m?.sort((a, b) => {
        if (a.rating !== b.rating) {
          return b.rating - a.rating;
        } else {
          return b.numOfRatings - a.numOfRatings;
        }
      });
      return m
    })

    return () => {
      unsubscribe();
    };
  }, [queryClient, user])

  const [recentSeeAll, setRecentSeeAll] = useState(false);
  const [sugestedSeeAll, setSugestedSeeAll] = useState(false);

  return (
    <div className='w-[92%] m-auto pb-[54px]'>
      <div>
        <div className='flex justify-between mt-[70px] items-center mb-[30px]'>
          <h1 className='font-[700] text-custom-32 h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Recently Watched Movies</h1>
          <p onClick={() => setRecentSeeAll(!recentSeeAll)} className='cursor-pointer font-[700] text-custom-32 leading-[36px] tracking-[2%] text-[red] h-[40px] border-[red] border-b-[5px]'>{recentSeeAll ? 'See less' : 'See all'}</p>
        </div>
        <div className='grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xsm:gap-y-[20px] xsm:px-[10px] gap-[73px]'>
          {recentMovie?.map((movie, index) => {
            if (index > 2 && recentSeeAll === false) {
              return
            }
            var minutes = movie?.movieTime;
            var hours = Math.floor(minutes / 60);
            var remainingMinutes = minutes % 60;

            return (
              <Link className='w-fit' to={'/show-rating'} state={movie}>
                <div>
                  <img className='w-[500px] object-fill h-[500px]' src={movie.image} />
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
        <div className='flex justify-between items-center mt-[54px]'>
          <h1 className='font-[700] text-custom-32 h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Movies Suggestions</h1>
          <p onClick={() => setSugestedSeeAll(!sugestedSeeAll)} className='cursor-pointer font-[700] text-custom-32 leading-[36px] tracking-[2%] text-[red] h-[40px] border-[red] border-b-[5px]'>{sugestedSeeAll ? 'See less' : 'See all'}</p>
        </div>
        <div className='grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xsm:gap-y-[20px] xsm:px-[10px] gap-[73px] mt-[30px]'>
          {sugestedMovie?.map((movie, index) => {
            if (index > 2 && sugestedSeeAll === false) {
              return null
            }
            var minutes = movie?.movieTime;
            var hours = Math.floor(minutes / 60);
            var remainingMinutes = minutes % 60;

            return (
              <Link className='w-fit' to={'/rating'} state={movie}>
                <div className='max-w-[500px]'>
                  <img className='w-[500px] object-fill h-[500px]' src={movie.image} />
                  <div className='flex justify-between mt-[22px] mb-[10px] max-w-[500px]'>
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
    </div>
  )
}
