import React, { useState } from 'react'

const App = () => {

  const [fullname, setFullname ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [confirm, setConfrim ] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("e");
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white rounded-xl p-6 w-96'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='text-black flex flex-col items-center gap-2'>
          <input className='w-full border-2 border-blue-300 rounded px-3' type="text" placeholder='Enter your name here' />
          <input className='w-full border-2 border-blue-300 rounded px-3' type="email" placeholder='Enter your email' />
          <input className='w-full border-2 border-blue-300 rounded px-3' type="password" placeholder='Enter your  password' />
          <input className='w-full border-2 border-blue-300 rounded px-3' type="password" placeholder='Confirm password' />
          <button className='bg-emerald-200 px-3 py-1 text-black font-semibold rounded mt-5 w-full'>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default App
