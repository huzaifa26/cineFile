import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection, doc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import { db } from '../utils/firebase';

export default function Survery() {
  const navigate = useNavigate();
  const [checkBox, setCheckBox] = useState([]);
  const [user, setUser] = useState();
  const queryClient = useQueryClient()

  useEffect(() => {
    setUser(queryClient.getQueryData(['user']));
  }, [])

  const formMutation = useMutation({
    mutationFn: async (data) => {
      const docRef = collection(db, 'survey');
      return await addDoc(docRef, data);
    },
    onSuccess: () => {
      toast.success('Survey submitted successfully');
      navigate("/home")
    },
    onError: () => {
      toast.error('Failed to submit survey')
    },

  })

  const formRef = useRef()
  const formhandler = (e) => {
    e.preventDefault();
    let data = {
      user: user,
      one: formRef.current.one.value,
      two: formRef.current.two.value,
      three: formRef.current.three.value,
      four: formRef.current.four.value,
      five: formRef.current.five.value,
      six: formRef.current.six.value,
      seven: checkBox,
      eight: formRef.current.eight.value,
    }

    formMutation.mutate(data);
  }

  return (
    <div className='px-[72px] py-[50px]'>
      <h1 className='text-[40px] leading-[48px]'>Cinefile Survey</h1>
      <form onSubmit={formhandler} ref={formRef}>
        <div className='mt-[25px]'>
          <p className='text-[28px] leading-[28px]'>How often do you go to the movies?</p>
          <div className='flex flex-col gap-[5px] mt-[10px]'>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='one' type='radio' value='Not often'></input>
              <label className='text-[18px]'>Not often</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='one' type='radio' value='About once a month'></input>
              <label className='text-[18px]'>About once a month</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='one' type='radio' value='About 2 time per month'></input>
              <label className='text-[18px]'>About 2 time per month</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='one' type='radio' value='3 or more times per month'></input>
              <label className='text-[18px]'>3 or more times per month</label>
            </div>
          </div>
        </div>

        <div className='mt-[50px]'>
          <p className='text-[28px] leading-[28px]'>How often do you watch movies at home</p>
          <div className='flex flex-col gap-[5px] mt-[10px]'>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='two' type='radio' value='I never watch movies at home'></input>
              <label className='text-[18px]'>I never watch movies at home</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='two' type='radio' value='about once a week'></input>
              <label className='text-[18px]'>about once a week</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='two' type='radio' value='2 times per week or more'></input>
              <label className='text-[18px]'>2 times per week or more</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='two' type='radio' value='About once per month'></input>
              <label className='text-[18px]'>About once per month</label>
            </div>
          </div>
        </div>

        <div className='mt-[50px]'>
          <p className='text-[28px] leading-[28px]'>I Usually watch movies: (choose all that apply)</p>
          <div className='flex flex-col gap-[5px] mt-[10px]'>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='three' type='radio' value='Alone'></input>
              <label className='text-[18px]'>Alone</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='three' type='radio' value='With friends'></input>
              <label className='text-[18px]'>With friends</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='three' type='radio' value='With my kids'></input>
              <label className='text-[18px]'>With my kids</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input className='rounded-full' name='three' type='radio' value='with my significant other'></input>
              <label className='text-[18px]'>with my significant other</label>
            </div>
          </div>
        </div>

        <div className='mt-[50px] w-fit flex flex-col gap-[5px]'>
          <p className='text-[28px] leading-[28px]'>What do you like about CinFile?</p>
          <input name='four' className='resize-none h-[40px] bg-transparent border-b border-[#4747474] w-full text-white outline-none' placeholder='Your answer' />
        </div>

        <div className='mt-[50px] w-fit flex flex-col gap-[5px]'>
          <p className='text-[28px] leading-[28px]'>What don't you like about Cinefile?</p>
          <input name='five' className='resize-none h-[40px] bg-transparent border-b border-[#4747474] w-full text-white outline-none' placeholder='Your answer' />
        </div>

        <div className='mt-[50px] w-fit flex flex-col gap-[5px]'>
          <p className='text-[28px] leading-[28px]'>Would you use Cinefile again? Why or why not?</p>
          <input name='six' className='resize-none h-[40px] bg-transparent border-b border-[#4747474] w-full text-white outline-none' placeholder='Your answer' />
        </div>

        <div className='mt-[50px]'>
          <p className='text-[28px] leading-[28px]'>Check all that apply</p>
          <div className='flex flex-col gap-[5px] mt-[10px]'>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='I like to go to the movies'></input>
              <label className='text-[18px]'>I like to go to the movies</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='I like to watch movies at home'></input>
              <label className='text-[18px]'>I like to watch movies at home</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='I like to talk with friends about movies after I watch them'></input>
              <label className='text-[18px]'>I like to talk with friends about movies after I watch them</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value="I like to grade movies I've watched"></input>
              <label className='text-[18px]'>I like to grade movies I've watched</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value="I like to hear other people's opinions on movies before I go see it"></input>
              <label className='text-[18px]'>I like to hear other people's opinions on movies before I go see it</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='I like to find the deeper meaning of movies I watch'></input>
              <label className='text-[18px]'>I like to find the deeper meaning of movies I watch</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='I see a lot of movie trailers'></input>
              <label className='text-[18px]'>I see a lot of movie trailers</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='I never know what movies to watch'></input>
              <label className='text-[18px]'>I never know what movies to watch</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='I need help deciding what movies to watch'></input>
              <label className='text-[18px]'>I need help deciding what movies to watch</label>
            </div>
            <div className='flex gap-[10px] items-center'>
              <input onChange={(e) => setCheckBox((prev) => { return [...prev, e.target.value] })} className='rounded-full' name='seven' type='checkbox' value='Option 12'></input>
              <label className='text-[18px]'>Option 12</label>
            </div>
          </div>

          <div className='mt-[50px] w-fit'>
            <p className='text-[28px] leading-[28px]'>What is something that would get you to use this app more often?</p>
            <input name='eight' className='resize-none h-[40px] bg-transparent border-b border-[#4747474] w-full text-white outline-none' placeholder='Your answer' />
          </div>
        </div>

        <div className='flex justify-center mt-[50px]'>
          <button className='w-[180px] h-[45px] bg-[red] text-white text-[24px]'>{formMutation.isLoading ? <img className='w-[30px] m-auto' src='./WhiteLoading.svg' /> : 'Submit'}</button>
        </div>

      </form>
    </div>
  )
}
