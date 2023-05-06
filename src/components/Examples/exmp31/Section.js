import { LevelContext } from "./LevelContext.js";

export default function Section({ level, children }) {
  //const level = useContext(LevelContext);
  // level+1
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
