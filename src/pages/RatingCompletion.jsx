import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { RiVideoAddLine } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { toast } from 'react-toastify';


export default function RatingCompletion() {
  const location = useLocation();
  const [movie, setMovie] = useState(location.state.data);
  const [review, setReview] = useState(location.state.review);

  const navigate = useNavigate()

  const formRef = useRef();

  const [user, setUser] = useState();
  const queryClient = useQueryClient();

  useEffect(() => {
    setUser(queryClient.getQueryData(["user"]));
  }, [queryClient])

  console.log(user);

  const movieReviewMutation = useMutation({
    mutationFn: async (data) => {
      const movieRef = doc(db, 'movies', movie.id);
      const userRef = doc(db, 'users', user.uid);
      let reviewdArray = user.reviewed ? [...user.reviewed, movie.id] : [movie.id]

      await updateDoc(movieRef, {
        'reviews': data.reviews,
        'rating': data.rating,
        'numOfRating': data.numOfRating,
      });
      await updateDoc(userRef, {
        'reviewed': reviewdArray
      });
      queryClient.invalidateQueries(['movies']);
      return true
    },
    onSuccess: (data) => {
      toast.success("Review Submitted!");
      navigate("/home");
    },
    onError: (error) => {
      toast.error("Error submitting review");
    }
  })

  const formSubmitHandler = () => {
    let r = { ...review }
    r.feedback = formRef.current.feedback.value
    let d = new Date()
    r.createAt = d.getTime()
    let m = { ...movie };
    m.reviews = m.reviews ? [...m.reviews, r] : [r]
    movieReviewMutation.mutate(m);
  }

  return (
    <div className='mb-[92px] flex flex-col'>
      <div className='h-[250px] xsm:h-[80px] sm:h-[80px] sm:mb-[20px] xsm:mb-[20px]' style={{ backgroundImage: "url('./ratingMain.png')" }}>
        <div className='h-full w-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center'>
          <h1 className='text-custom-30'>Rating Completion</h1>
        </div>
      </div>

      <div>
        <div className='w-[542px] pt-2 m-auto sm:w-[80%] xsm:w-[90%]'>
          <img className='w-[542px] h-[476px]' src='./ratingMoviePoster.png' />
          <div className='flex justify-between mt-[10px] xsm:px-[10px] sm:px-[5px]'>
            <p className='text-[32px] font-[600] leading-[36px]'>Joker</p>
            <p className='text-[32px] font-[600] leading-[36px]'>Score</p>
          </div>
        </div>
      </div>

      <form onSubmit={formSubmitHandler} ref={formRef} className=' m-auto mt-[59px]'>
        <textarea name='feedback' className='pl-[29px] pt-[27px] text-black resize-none w-[92.24vw] h-[406px] border-[3px] border-[red] font-[400] text-[24px] leading-[30px] tracking-[2%]' placeholder='Write Review Here....'></textarea>
      </form>
      <div className='w-[92.24vw] m-auto flex justify-center sm:justify-end relative mt-[55px] '>
        <div className='flex items-center gap-[20px] absolute left-0'>
          <RiVideoAddLine className='w-[60px] h-[60px]' />
          <p className='font-[600] text-[28px] leading-[32px] sm:text-[16px]'>Record a Video Review</p>
        </div>
        {movieReviewMutation.isLoading ?
          <button type='submit' onClick={formSubmitHandler} className='w-[262px] place-self-center h-[68px] bg-[red] '><img className='w-[30px] m-auto' src='./WhiteLoading.svg' /></button>
          :
          <button type='submit' onClick={formSubmitHandler} className='w-[13.645833333333334vw] min-w-[100px] place-self-center  h-[68px] bg-[red] rounded-[4px]'>SUBMIT</button>
        }
      </div>
    </div>
  )
}