import { useEffect, useState } from "react";

interface Props {
  duration: number;
}

export default function CountdownTimer({ duration }: Props): React.JSX.Element {
  const [remainingTime, setRemainingTime] = useState<number>(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [duration]);

  return <span>{(remainingTime / 1000).toFixed(2)}</span>;
}
