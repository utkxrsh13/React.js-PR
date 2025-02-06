import React from 'react'

const JokeCard = ({joke, removeJoke}) => {
  return (
    <div className='text-white bg-[#e5373740] rounded-xl m-5 shadow-2xl'>
      <div className='flex p-2 justify-around text-2xl'>
        <p className='text-2xl font-semibold'>Type: {joke.type}</p>
      </div>
      <div className='p-1'>
      <p>Setup: {joke.setup}</p>
      <p>Punchline: {joke.punchline}</p>
      </div>
      <div>
        <button className='m-[1em] rounded-3xl bg-[#ffffff70] p-3 font-semibold text-xl' onClick={removeJoke}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default JokeCard