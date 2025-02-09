import React, { act } from 'react'

const Test = ({ steps, activeSteps, setActiveSteps }) => {

  function handlePreviousStep() {
    setActiveSteps(prev => Math.max(prev - 1, 0));
  }
  function handleNextStep() {
    setActiveSteps(prev => Math.min(prev + 1, steps.length - 1));
  }

  function calculateCurrentwidth() {
    return `${100 / (steps.length - 1) * activeSteps}%`
  }


  return (
    <div>
      <div className='flex justify-between w-[89%] m-auto items-center'>
        {steps && steps.length > 0 ?
          steps.map((stepitem, index) => <div className={` bg-white text-black active:bg-red-200 rounded-2xl ${index <= activeSteps ? 'active:bg-amber-600':''}`} style={{ width: calculateCurrentwidth() }} key={index}>{stepitem}</div>) : null
        }
      </div>
      <div className='m-2'>
        <button className='bg-pink-800 rounded-2xl p-2 mr-2' disabled={activeSteps===0} onClick={handlePreviousStep}>Previous Step</button>
        <button className='bg-pink-800 rounded-2xl p-2' disabled={activeSteps === steps.length-1} onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  )
}

export default Test