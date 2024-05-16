import {useState,useEffect} from 'react'

const Account = ({name, balance}) => {
    
  return (
       <div className='flex'>
      <div className='mb-4 border-2 p-3 rounded-xl w-40 border-[#ec8758]'>
      <p>کیف پول <b>{name}</b></p>
        <p> <b>{balance}</b>  تومان</p>
      </div>
    </div>
  )
}

export default Account
