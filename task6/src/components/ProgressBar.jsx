import React, { useState } from 'react'
import Test from './test';

const ProgressBar = () => {
  const [activeSteps, setActiveSteps] = useState(0);
  const steps = ['step 1','step 2','step 3','step 4','step 5',]
  return (
    <div>
      <h2 className='text-2xl'>Step Progress Bar!!</h2>
      <Test setActiveSteps={setActiveSteps} steps={steps} activeSteps={activeSteps} />
    </div>
  )
}

export default ProgressBar