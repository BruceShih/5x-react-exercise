import MyButton from './MyButton';
import { useCountdown } from './hooks/useCountdown';
import './App.css'

const DAY = 24 * 60 * 60 * 1000;

function App() {
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

export default App
