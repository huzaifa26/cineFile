import React, { useRef, useState } from 'react'
import { ImCross } from 'react-icons/im'

export default function SubCategoryModal({ hideSubCategoryModal, getValue, dropDownValues }) {

  const formRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    getValue(formRef.current.category.value);
    hideSubCategoryModal();
  }

  return (
    <div onClick={hideSubCategoryModal} className='w-[100vw] h-full z-[100] fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-[4px] flex justify-center items-center'>
      <div onClick={(e) => e.stopPropagation()} className='w-[56vw] xsm:w-[90%] sm:w-[80%] h-[480px] bg-white'>
        <div className='relative w-full h-[90px] bg-[rgba(229,9,20,0.2)] flex items-center justify-center'>
          <p className='text-black font-[600] text-[24px]'>Add Sub Category</p>
          <ImCross onClick={hideSubCategoryModal} className='absolute right-[6%] top-[50%] translate-y-[-50%] text-[red] text-2xl cursor-pointer' />
        </div>
        <form onSubmit={formHandler} ref={formRef}>
          <select name='category' className='border-[1px] border-[red] text-[18px] text-[#959595] min-w-[262px] w-[24.5vw] h-[45px] rounded-[4px] relative left-[50%] translate-x-[-50%] top-[10vh]'>
            <option disabled selected value={'null'}>Select Sub-category *</option>
            {dropDownValues.map((value) => {
              if (value === undefined) {
                return
              }
              return (
                <option value={value}>{value}</option>
              )
            })}
          </select>
          <button className='text-white bg-[red] w-[262px] rounded-[4px] h-[48px] min-w-[160px] mt-[20px] block self-end font-[600] text-[18px] relative left-[50%] translate-x-[-50%] top-[25vh]'>Add</button>
        </form>
      </div>
    </div>
  )
}
