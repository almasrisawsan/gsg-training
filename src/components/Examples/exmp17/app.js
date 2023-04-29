/**
 * In this example, the external system is the animation library in animation.js.
 * It provides a JavaScript class called FadeInAnimation that takes a DOM node as an argument and exposes start() and stop() methods
 * to control the animation. This component uses a ref to access the underlying DOM node.
 * The Effect reads the DOM node from the ref and automatically starts the animation for that node when the component appears.
 *
 */
import { useState, useEffect, useRef } from "react";
import { FadeInAnimation } from "./animation.js";

function Welcome() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(1000);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      Welcome
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Show"}</button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
