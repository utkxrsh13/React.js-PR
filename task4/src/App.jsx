import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [miliseconds, setMiliseconds] = useState(0)

  const formatWithLeadingZeros = (number) => {
    if (number < 10) return "0" + number;
    else return number.toString();
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setMiliseconds((miliseconds) => {
        if (miliseconds >= 99) {
          setSeconds((seconds) => {
            if (seconds >= 59) {
              setMinutes((minutes) => {
                if (minutes >= 59) {
                  setHours((prevHours) => prevHours + 1);
                  return 0;
                } else {
                  return minutes + 1;
                }
              });
              return 0;
            } else {
              seconds + 1;
            }
          });
          return 0;
        } else {
          return miliseconds + 1;
        }
      });
    }, 10);

    return () => clearInterval(interval)
  }, []);


  return (
    <div className='text-white'>
      <h2>StopWatch</h2>
      <div>
        {formatWithLeadingZeros(hours)} : {formatWithLeadingZeros(minutes)} : {formatWithLeadingZeros(seconds)} : {formatWithLeadingZeros(miliseconds)}
      </div>
    </div>
  )
}

export default App