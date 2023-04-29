/**
 * In this example, the external system is the browser DOM.
 * The ModalDialog component renders a <dialog> element.
 * It uses an Effect to synchronize the isOpen prop to the showModal() and close() method calls.
 */
import { useState } from "react";
import ModalDialog from "./ModalDialog.js";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open dialog</button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
    </>
  );
}
