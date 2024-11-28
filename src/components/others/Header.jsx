import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props)=> {

  // const [username,setUsername]= useState('')
  // if (!data){
  //   setUsername('Admin')

  // }else
  // {
  //   setUsername(data.firstName)
  // }

  const logoutUser=()=>
  {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }


  return (

   
    <div className='flex item-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username </span></h1>
      <button onClick={logoutUser} className='bg-red-600 font-medium text-white px-4 py-2 rounded-sm'>LogOut</button>
    </div>
  )
}

export default Header
