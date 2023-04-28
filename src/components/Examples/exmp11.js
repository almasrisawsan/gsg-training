/**
 * Refs are an escape hatch. You should only use them when you have to “step outside React”. 
 * Common examples of this include managing focus, scroll position, 
 * or calling browser APIs that React does not expose.

If you stick to non-destructive actions like focusing and scrolling,
 you shouldn’t encounter any problems. However, 
 if you try to modify the DOM manually, you can risk conflicting with the changes React is making.

To illustrate this problem, this example includes a welcome message and two buttons. 
The first button toggles its presence using conditional rendering and state, 
as you would usually do in React. 
The second button uses the remove() DOM API to forcefully remove it from the DOM outside of React’s control.

Try pressing “Toggle with setState” a few times. 
The message should disappear and appear again. 
Then press “Remove from the DOM”. This will forcefully remove it. 
Finally, press “Toggle with setState”:
 */
import { useState, useRef } from "react";

export default function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}
