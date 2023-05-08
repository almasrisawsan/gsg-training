import { LevelContext } from "./LevelContext.js";
import { useContext } from "react";

export default function Section({ children }) {
  const level = useContext(LevelContext); //1
  // level+1
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
