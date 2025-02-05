export default function Lap({ laps }) {
  const calculateTimeDifference = (t1, t2) => {
    const [h1, m1, s1, ms1] = t1.split(":").map(Number);
    const [h2, m2, s2, ms2] = t2.split(":").map(Number);
    const time1 = h1 * 3600000 + m1 * 60000 + s1 * 1000 + ms1;
    const time2 = h2 * 3600000 + m2 * 60000 + s2 * 1000 + ms2;

    const diff = Math.abs(time1 - time2);
    const hours = Math.floor(diff / 3600000).toString().padStart(2, "0");
    const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, "0");
    const milliseconds = Math.floor(diff % 1000).toString().padStart(3, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={{display:laps.length?"block":"none"}}>
      <h4 className="flex justify-evenly">
        <span>Lap</span>
        <span>Time Difference</span>
        <span>Total Time</span>
      </h4>
      <ul>
        {laps.map((lap, index) => (
          <li key={index} className="flex justify-evenly bg-[#00000060] rounded-full p-2.5 mt-2 ">
            <span>{`Lap ${index + 1}`}</span>
            <span>
              {index !== 0
                ? calculateTimeDifference(lap, laps[index - 1])
                : lap}
            </span>
            <span>{lap}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
