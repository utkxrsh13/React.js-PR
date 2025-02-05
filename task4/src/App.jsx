import React, { useState, useEffect } from "react";
import { Button } from "./components/Button";
import Lap from "./components/Lap";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatWithLeadingZeros = (number) => {
    if (typeof number !== "number") return "00";
    return number < 10 ? "0" + number : number.toString();
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleLap = () => {
    const lapTime =
      formatWithLeadingZeros(hours) +
      ":" +
      formatWithLeadingZeros(minutes) +
      ":" +
      formatWithLeadingZeros(seconds) +
      ":" +
      formatWithLeadingZeros(miliseconds);
    setLaps((prev) => [...prev, lapTime]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMiliseconds(0);
    setSeconds(0);
    setHours(0);
    setMinutes(0);
    setLaps([]);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setMiliseconds((prevMiliseconds) => {
        if (prevMiliseconds >= 99) {
          setSeconds((prevSeconds) => {
            if (prevSeconds >= 59) {
              setMinutes((prevMinutes) => {
                if (prevMinutes >= 59) {
                  setHours((prevHours) => prevHours + 1);
                  return 0;
                } else {
                  return prevMinutes + 1;
                }
              });
              return 0;
            } else {
              return prevSeconds + 1;
            }
          });
          return 0;
        } else {
          return prevMiliseconds + 1;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="text-white text-center bg-gradient-to-br from-[#EC5FC] to-[#bd95f3] p-5 flex flex-col gap-2.5 rounded-sm h-screen ">
      <h2 className="font-semibold text-4xl underline">StopWatch</h2>
      <div className="mb-2.5 bg-[#ffffff20] p-[.5em] outline-dotted outline-4 rounded-lg text-2xl text-black font-bold">
        {formatWithLeadingZeros(hours)} : {formatWithLeadingZeros(minutes)} :{" "}
        {formatWithLeadingZeros(seconds)} : {formatWithLeadingZeros(miliseconds)}
      </div>
      <div>
        <Button onClick={handleStart} text="Play" />
        <Button onClick={handlePause} disabled={!isRunning} text="Pause" />
        <Button onClick={handleLap} disabled={!isRunning} text="Lap" />
        <Button onClick={handleReset} text="Reset" />
      </div>
      <Lap laps={laps} />
    </div>
  );
};

export default App;
