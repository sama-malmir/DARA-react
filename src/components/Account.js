import {useState,useEffect} from 'react'

const Account = () => {
    const [data,setData ]=useState([])
    useEffect(() =>{
        fetch('http://5.42.94.18:3000/api/v1/wallet/1')
        .then((response)=> response.json())
            .then((data)=>{
            setData(data.data)
            })
            .catch((error)=> console.log(error))
    },[])
  return (
       <div className='flex'>
      <div className='mb-4 border-2 p-3 rounded-xl w-40 border-[#ec8758]'>
        <p>کیف پول <b>{data.name}</b></p>
        <p> <b>{data.balance}</b>  تومان</p>
      </div>
    </div>
  )
  }

export default Account
