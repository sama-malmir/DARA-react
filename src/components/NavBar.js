import React from 'react'
import Account from './Account'
const NavBar = ({name, balance}) => {
  return (
   <>
   <Account  name={name} balance ={balance}/>
   </>
  )
}

export default NavBar
