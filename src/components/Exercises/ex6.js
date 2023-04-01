/**
 * This Clock component receives two props: color and time.
 * When you select a different color in the select box,
 *  the Clock component receives a different color prop from
 *  its parent component. However, for some reason,
 * the displayed color doesn’t update. Why? Fix the problem.
 */

import { useState } from "react";

export default function Clock(props) {
  const [color, setColor] = useState(props.color);
  return <h1 style={{ color: color }}>{props.time}</h1>;
}

//app.js
/**
 * import { useState, useEffect } from 'react';
import Clock from './Clock.js';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
 */
