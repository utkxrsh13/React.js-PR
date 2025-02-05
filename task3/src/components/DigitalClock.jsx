import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
  
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return ()=>{
      clearInterval(intervalId);
    }
  },[])

  return (
    <div className='bg-black text-teal-500 flex flex-col items-center  h-[100vh]'>
      <h1 className='text-8xl mb-10 underline'>Digital clock</h1>
      <div className='bg-pink-400 flex-col translate-y-[100%]'>
        <div className='bg-gradient-to-l from-pink-300 to-red-400 text-black border-8 border-t-teal-300 gap-6 px-2 flex text-2xl items-center justify-center'>
          <span>{time.getHours().toString().padStart(2, "0")} Hours</span>:
          <span>{time.getMinutes().toString().padStart(2, "0")} min</span>:
          <span>{time.getSeconds().toString().padStart(2, "0")} sec</span>
        </div>
        <div className='text-white mt-2'>
          {time.toLocaleDateString(undefined,{
            weekday:'long',
            year:'numeric',
            month:'long',
            day:'numeric'
          })}
        </div>
      </div>
    </div>
  )
}

export default DigitalClock