import React from 'react'
import FinancialTransaction from './FinancialTransaction'
import NewTransaction from './NewTransaction'
import { Link, Route,Routes } from 'react-router-dom'
import './List.css'
const List = () => {
   
  return (
    <>
    <div >
        <ul className='list order-first w-44'>
            <li className='styleList'><Link to='/financial-transaction'> تراکنش های مالی </Link></li>
            <li className='styleList'><Link to='/new-transaction'> تراکنش جدید </Link></li>
        </ul>
    </div>
    <Routes>
    <Route path='/financial-transaction' element={<FinancialTransaction />} />
    <Route path='/new-transaction' element={<NewTransaction />} />
   </Routes>
    </>
  )
}

export default List
