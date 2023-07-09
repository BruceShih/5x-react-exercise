import { useState, useEffect, useMemo } from "react";

export function useCountdown(from: number) {
  const [counter, setCounter] = useState(from - Date.now());
  const [value, setValue] = useState(format(counter / 1000));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1000);
        setValue(format(counter / 1000));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, isActive]);

  const onStart = () => {
    setIsActive(true);
  };

  const onStop = () => {
    setIsActive(false);
  };

  function format(time: number) {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time - days * 86400) / 3600);
    const minutes = Math.floor((time - days * 86400 - hours * 3600) / 60);
    const seconds = Math.floor(
      time - days * 86400 - hours * 3600 - minutes * 60
    );

    return `${days.toString().padStart(2, "0")}:${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  return {
    value,
    onStart,
    onStop,
    isActive,
  };
}
