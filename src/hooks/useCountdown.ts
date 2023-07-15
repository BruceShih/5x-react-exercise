import { useState, useEffect, useCallback } from "react";

function format(time: number) {
  const days = Math.floor(time / 86400);
  const hours = Math.floor((time - days * 86400) / 3600);
  const minutes = Math.floor((time - days * 86400 - hours * 3600) / 60);
  const seconds = Math.floor(time - days * 86400 - hours * 3600 - minutes * 60);

  return `${days.toString().padStart(2, "0")}:${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export function useCountdown(from: number) {
  const [counter, setCounter] = useState(from - Date.now());
  const [value, setValue] = useState(format(counter / 1000));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && counter > 0) {
      const timer = window.setTimeout(() => {
        setCounter(counter - 1000);
        setValue(format(counter / 1000));
      }, 1000);
      return () => window.clearTimeout(timer);
    }
  }, [counter, isActive]);

  const onStart = useCallback(() => {
    setIsActive(true);
  }, []);

  const onStop = useCallback(() => {
    setIsActive(false);
  }, []);

  return {
    value,
    onStart,
    onStop,
    isActive,
  };
}
