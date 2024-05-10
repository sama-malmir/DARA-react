import React, { useEffect, useState } from 'react'
const FinancialTransaction = () => {
  const [transactions,setTransactions]=useState([])
  useEffect(()=>{
    fetch('http://5.42.94.18:3000/api/v1/wallet/1/wallet_transaction')
    .then((response)=>response.json())
    .then((transactions)=>{
      setTransactions(transactions.data)
    })
    .catch((error)=> console.log(error))
  },[])
  const FinancialTransaction = transactions.map((i) => 
           <div key={i.id}>
          {i.amount > 0 ?
          <div className='flex-col mr-48 ml-10 -mt-28 mb-32 border-4 bg-[#7ec0c0]  border-[#1a5d5d] h-52 rounded-xl'>
          <div className='mt-4 w-full flex justify-around'>
           <div className="inline-flex  flex-col">
                <label className='mb-5'>دسته‌بندی</label>
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">{i.category.name} </div>
          </div>
          <div className="inline-flex flex-col ">
              <label className='mb-5'>نوع تراکنش</label>
              {i.amount > 0 ?
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">   واریز </div>:
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">  برداشت  </div>
              }
          </div>
          <div className="inline-flex flex-col">
              <label className='mb-5'>تاریخ</label>
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36"> {i.at_date}  </div>
          </div>
          <div className="inline-flex flex-col">
              <label className='mb-5'>مبلغ</label>
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">  {i.amount} </div>
          </div>
          <div className="inline-flex flex-col">
              <label className='mb-5'>توضیحات</label>
              <div className="border-2 text-center bg-white border-[#ec8758] h-9 rounded-xl items-center w-36">  {i.description} </div>
          </div>
          </div>
          <div className='flex justify-center m-8 '>
            <button className='border-2 bg-gray-300 border-[#ec8758] m-4 w-14 h-9 rounded-xl'>ویرایش</button>
            <button className='border-2 bg-gray-300 border-[#ec8758] m-4 w-14 h-9 rounded-xl'>حذف</button>
        </div>
          </div>
          :
          <div className='flex-col mr-48 ml-10 -mt-28 mb-32 border-4 bg-[#f0a786]  border-[#bd5a2d] h-52 rounded-xl'>
          <div className='mt-4 w-full flex justify-around'>
           <div className="inline-flex  flex-col">
                <label className='mb-5'>دسته‌بندی</label>
              <div className="border-2 text-center bg-white border-[#59aaaa] h-9 rounded-xl items-center w-32">{i.category.name} </div>
          </div>
          <div className="inline-flex flex-col ">
              <label className='mb-5'>نوع تراکنش</label>
              {i.amount > 0 ?
              <div className="border-2 text-center bg-white border-[#59aaaa] h-9 rounded-xl items-center w-32">   واریز </div>:
              <div className="border-2 text-center bg-white border-[#59aaaa] h-9 rounded-xl items-center w-32">  برداشت  </div>
            }
          </div>
          <div className="inline-flex flex-col">
              <label className='mb-5'>تاریخ</label>
              <div className="border-2 text-center bg-white border-[#59aaaa] h-9 rounded-xl items-center w-32"> {i.at_date}  </div>
          </div>
          <div className="inline-flex flex-col">
              <label className='mb-5'>مبلغ</label>
              <div className="border-2 text-center bg-white border-[#59aaaa] h-9 rounded-xl items-center w-32">  {i.amount} </div>
          </div>
          <div className="inline-flex flex-col">
              <label className='mb-5'>توضیحات</label>
              <div className="border-2 text-center bg-white border-[#59aaaa] h-9 rounded-xl items-center w-32">  {i.description} </div>
          </div>
          </div>
          <div className='flex justify-center m-8 '>
            <button className='border-2 bg-gray-300 border-[#59aaaa] m-3 w-14 h-9 rounded-xl'>ویرایش</button>
            <button className='border-2 bg-gray-300 border-[#59aaaa] m-3 w-14 h-9 rounded-xl'>حذف</button>
        </div>
          </div>
          }
           </div>
  )

  return (
           <>
            {FinancialTransaction}
          </>
  )
}

export default FinancialTransaction
