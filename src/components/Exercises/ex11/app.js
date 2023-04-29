import { useState } from "react";
import Counter from "./Counter.js";

/**
 * 
 * This Counter component displays a counter that should increment every second. On mount, it calls setInterval. This causes onTick to run every second. The onTick function increments the counter.

However, instead of incrementing once per second, it increments twice. Why is that? Find the cause of the bug and fix it.
 */
export default function Form() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} counter
      </button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
