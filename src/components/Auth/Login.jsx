import React, { useState, useSyncExternalStore } from 'react'

const Login = ({handleLogin}) => {

  const [email,setEmail]= useState('')
  const [Password,setPassword]= useState('')

  const submitHandler=(e)=>
  {
    e.preventDefault();
    handleLogin(email,Password);
    console.log('email is:', email);
    console.log('password is:', Password);

    setEmail("");
    setPassword("");
    
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-400 rounded-xl p-20'>
           <form
           onSubmit={(e)=>
           {
            submitHandler(e)
           }
           }

            className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>
            {
              setEmail(e.target.value);
              
            }
            }
             required
              className='text-white outline-none bg-transparent  border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-2' type="email" placeholder='Enter your email' />
            <input 
            value={Password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
             className='text-white outline-none bg-transparent  border-2 border-emerald-600 py-3  px-5 text-xl rounded-full mt-5'  type="password" placeholder='Enter your password' />
            
            <button 
            className='text-white outline-none  border-none bg-emerald-500 py-3 px-5 text-xl rounded-full mt-4 mb-2'>
                Login
            </button>
            </form> 
        </div>
    </div>
  )
}

export default Login
