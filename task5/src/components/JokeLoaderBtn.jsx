import React from 'react'

const JokeLoaderBtn = ({loadNewJoke}) => {
  return (
    <button className='bg-teal-500 p-2 rounded-xl' onClick={loadNewJoke}>
      Load New Joke
    </button>
  )
}

export default JokeLoaderBtn