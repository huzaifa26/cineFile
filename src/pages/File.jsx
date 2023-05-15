import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function File() {

  const queryClient = useQueryClient();
  const [user, setUser] = useState(queryClient.getQueryData(['user']));
  const [ratedMovie, setRatedMovie] = useState();
  const [wantToWatch, setWantToWatch] = useState();

  useEffect(() => {
    setUser(queryClient.getQueryData(["user"]));
  }, [queryClient])

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      setRatedMovie(() => {
        let user = queryClient.getQueryData(["user"])
        let movieArr = queryClient.getQueryData(['movies'])?.filter((movie) => {
          if (user?.reviewed.includes(movie.id)) {
            return movie
          }
        })
        return movieArr
      })

      setWantToWatch(() => {
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

    setRatedMovie(() => {
      let user = queryClient.getQueryData(["user"])
      let movieArr = queryClient.getQueryData(['movies'])?.filter((movie) => {
        if (user?.reviewed.includes(movie.id)) {
          return movie
        }
      })
      return movieArr
    })

    setWantToWatch(() => {
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
  }, [location.pathname, queryClient])

  const [recentSeeAll, setRecentSeeAll] = useState(false);
  const [sugestedSeeAll, setSugestedSeeAll] = useState(false);

  return (
    <div className='w-[92%] m-auto pb-[54px]'>
      <div>
        <div className='flex justify-between mt-[70px] mb-[30px]'>
          <h1 className='font-[700] text-[32px] h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Rated Movies</h1>
          <p onClick={()=>setRecentSeeAll(!recentSeeAll)} className='cursor-pointer font-[700] text-[32px] leading-[36px] tracking-[2%] text-[red] h-[40px] border-[red] border-b-[5px] select-none'>{recentSeeAll?'See less':'See all'}</p>
        </div>
        <div className='grid grid-cols-3 gap-[73px]'>
          {ratedMovie?.map((movie) => {
            var minutes = movie?.movieTime;
            var hours = Math.floor(minutes / 60);
            var remainingMinutes = minutes % 60;

            return (
              <Link to={'/rating'} state={movie}>
                <div className='w-[542px]'>
                  <img className='w-[28.229vw] object-cover' src={movie.image} />
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
          <h1 className='font-[700] text-[32px] h-[59px] leading-[36px] tracking-[2%] text-white border-[red] border-b-[5px]'>Want to Watch</h1>
          <p onClick={()=>setSugestedSeeAll(!sugestedSeeAll)} className='cursor-pointer font-[700] text-[32px] leading-[36px] tracking-[2%] text-[red] h-[40px] border-[red] border-b-[5px] select-none'>{sugestedSeeAll?'See less':'See all'}</p>
        </div>
        <div className='grid grid-cols-3 gap-[73px] mt-[30px]'>
          {wantToWatch?.map((movie) => {
            var minutes = movie?.movieTime;
            var hours = Math.floor(minutes / 60);
            var remainingMinutes = minutes % 60;

            return (
              <div className='w-[542px]'>
                <img className='w-[28.229vw] object-cover' src={movie.image} />
                <div className='flex justify-between mt-[22px] mb-[10px]'>
                  <h3 className='font-[600] text-[28px] leading-[32px] tracking-[2%]'>{movie.name}</h3>
                  <p className='font-[600] text-[28px] leading-[32px] tracking-[2%]' >{`${movie.rating} (${movie.numOfRating})`}</p>
                </div>
                <p className='text-[rgba(149,149,149,1)]'>{`${hours}hr ${remainingMinutes}min | ${movie.releaseDate}`}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
