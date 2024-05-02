import React from 'react'
import './List.css'
const NewTransaction = () => {
  return (
<>
<div className='flex justify-between mr-48 ml-10 -mt-28 border-2 border-[#ec8758] h-80 rounded-xl'>
      <div className='border-[#ec8758] mr-3 mt-4'>
        <div className='flex flex-col'>
            <div className="flex justify-between">
                <label className='mb-5 ml-14'>دسته‌ بندی<b className='text-red-500'>*</b></label>
                <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44"> </div>
            </div>
            <div className='flex justify-between'>
                <label className='mb-5'>نوع تراکنش <b className='text-red-500'>*</b></label>
                  <select className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44" >
                  <option> واریز </option>
                  <option> برداشت </option>
                  </select>
            </div>
            <div className='flex justify-between'>
                  <label className='mb-5'> مبلغ<b className='text-red-500'>*</b></label>
                  <input className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44" />
            </div>
            <div className='flex justify-between'>
                  <label className='mb-5'>توضیحات </label>
                  <input className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-44" />
            </div>
            </div>
            </div>
          <div className='self-end'>
          <button className='border-2 bg-gray-300 border-[#ec8758] m-10 w-20 h-9 rounded-xl'>ثبت</button>
          </div>
    </div>
</>
  )
}

export default NewTransaction
