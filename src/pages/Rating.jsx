import React, { useEffect, useLayoutEffect, useState } from 'react'
import RangeSelector from '../components/Rating/RangeSelector'
import SubCategoryModal from '../components/Rating/SubCategoryModal'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';

export default function Rating() {

  const [user, setUser] = useState();
  const queryClient = useQueryClient();

  useEffect(() => {
    setUser(queryClient.getQueryData(["user"]));
  }, [queryClient])

  const location = useLocation();
  const [movie, setMovie] = useState(location.state);
  const navigate = useNavigate();

  const [dropDownValues, setDropDownValues] = useState(['Cool Factor', 'Action', 'Drama', 'Scariness', 'Excitement', 'Suspense'])
  const [categories, setCategories] = useState([
    {
      name: "Story",
      rating: 10
    },
    {
      name: "Acting",
      rating: 10
    },
    {
      name: "Pacing",
      rating: 10
    },
    {
      name: "Cinematography",
      rating: 10
    },
    {
      name: "Sound EX / Music",
      rating: 10
    },
    {
      name: "Finale",
      rating: 10
    },
    {
      name: "Feelings",
      rating: 10
    },
  ])

  const [subCategoryModal, setSubCategoryModal] = useState(false);

  const showSubCategoryModal = () => {
    setSubCategoryModal(true)
  }
  const hideSubCategoryModal = () => {
    setSubCategoryModal(false)
  }

  const getValue = (value) => {
    setDropDownValues(dropDownValues.map((v) => {
      if (v !== value) {
        return v
      }
    }))
    setCategories([...categories, { name: value, rating: 10 }]);
  }

  var minutes = movie?.movieTime;
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;

  const updateRating = (type, rating) => {
    let obj = [...categories]
    obj.forEach((value) => {
      if (value.name === type) {
        value.rating = +rating
      }
    })
    setCategories(obj);
  }

  const calculateRatingHandler = () => {
    let rating = 0
    categories.forEach((obj) => {
      console.log(obj.rating)
      rating = rating + obj.rating
    })
    rating = rating / categories.length
    const existingRating = movie.rating;
    const totalReviews = movie.numOfRating;
    const newRating = rating;

    const newTotalReviews = totalReviews + 1; // Increment the total number of reviews by 1
    const weightedSum = existingRating * totalReviews + newRating;
    const newAverageRating = weightedSum / newTotalReviews;

    let m = { ...movie }
    let review = { categories: categories, rating: rating, feedback: '', user: user }
    m.rating = newAverageRating.toFixed(1)
    m.numOfRating = movie.numOfRating + 1

    navigate('/rating-completion', { state: { data: m, review } });
  }

  // if (user?.reviewed.includes(movie.id)) {
  //   return navigate("/home");
  // }

  return (
    <>
      {subCategoryModal &&
        <SubCategoryModal dropDownValues={dropDownValues} getValue={getValue} hideSubCategoryModal={hideSubCategoryModal} />
      }
      <div className='mb-[92px] flex flex-col'>
        <div className='h-[250px] xsm:h-[80px] sm:h-[80px]' style={{ backgroundImage: "url('./ratingMain.png')" }}>
          <div className='h-full w-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center'>
            <h1 className='text-custom-30'>Please Rate The Movie</h1>
          </div>
        </div>

        <div className='w-[92%] m-auto mt-[34px] xsm:mt-0 sm:mt-0 flex xsm:flex-col-reverse xsm:items-center sm:items-center sm:flex-col-reverse xsm: justify-between'>
          <div className='flex flex-col'>
            {categories.map((category) => {
              return (
                <RangeSelector updateRating={updateRating} title={category.name} />
              )
            })}
            <button onClick={showSubCategoryModal} className='text-black bg-white w-[13.64vw] rounded-[4px] h-[40px] min-w-[200px] mt-[20px] block font-[400] text-[18px]'>+ Sub categories</button>
          </div>
          <div className='w-[28.220000000000006vw] sm:w-[80%] xsm:w-[90%] mt-[80px] xsm:mt-[20px] sm:mt-[20px]'>
            <div className='relative'>
              <input className='h-[40px] w-[100%] px-[24px] rounded-[6px] text-black' placeholder='Search Movie'></input>
              <img className='absolute right-[23px] top-[50%] translate-y-[-50%] w-[25px] cursor-pointer' src='./search.svg' />
            </div>
            <div className='flex flex-col justify-center items-center mt-[20px] xsm:mt-[30px] sm:mt-[30px]'>
              <img className='w-[100%]' src={movie.image} />
              <div className='w-full xsm:mt-[10px] sm:mt-[10px]'>
                <div className='flex justify-between px-2 mt-[10px]'>
                  <p className='text-[18px] font-[600] leading-[30px]'>{movie?.name}</p>
                  <p className='text-[18px] font-[600] leading-[30px]'>{`${movie.rating} (${movie.numOfRating})`}</p>
                </div>
                <p className='text-[16px] text-[#959595] font-[400] leading-[30px] mt-[-5px] px-2'>{`${hours}hr ${remainingMinutes}min | ${movie.releaseDate}`}</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={calculateRatingHandler} className='text-white bg-[red] w-[8.51vw] rounded-[4px] h-[48px] min-w-[160px] mt-[20px] block self-center font-[600] text-[18px]'>Calculate</button>
      </div>
    </>
  )
}
