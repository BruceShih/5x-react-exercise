'use client'

import MyButton from "@/components/MyButton";
import { useCountdown } from "@/hooks/useCountdown";

const DAY = 24 * 60 * 60 * 1000;

export default function Home() {
  // 這隻通通都不能改
  const { value, onStart, onStop, isActive } = useCountdown(Date.now() + DAY);

  return (
    <div className="App">
      <div className="example">
        <img src="/img/example.gif" alt="" />
      </div>
      <h1>{value}</h1>
      <button onClick={onStart} disabled={isActive}>
        start
      </button>
      <button onClick={onStop} disabled={!isActive}>
        stop
      </button>
      <MyButton onClick={onStop} disabled={!isActive}>
        stop
      </MyButton>
    </div>
  );
}
