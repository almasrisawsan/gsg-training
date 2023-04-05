import { useState } from "react";

function Panel({ title, children, setActive, active }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {active ? <p>{children}</p> : <button onClick={setActive}>Show</button>}
    </section>
  );
}

export default function Accordion() {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        active={isActive === 1}
        setActive={() => setIsActive(1)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        active={isActive === 2}
        setActive={() => setIsActive(2)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
      <Panel
        title="Etymology"
        active={isActive === 3}
        setActive={() => setIsActive(3)}
      >
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

/**
 * <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
 */

// Reacting to input with state  -> exmp8, go to exp1 before
// Exercises ->  ex5.js
// Choosing the state structure ->
// -- Group related state -> exmp10
// -- Avoid contradictions in state -> exmp11
// -- Avoid redundant state -> exmp13
// -- Avoid duplication in state -> exmp14
// -- Avoid deeply nested state -> exmp15
// Exercises -> ex6.js, ex7.js, ex8.js
// Sharing state between components ->
// -- Lifting state up -> exmp16 ----> check screenshots before and after
// Exercises -> ex9.js, ex10.js
// Preserving and resetting state (using key) ->
// -- Re rendering component resets the state -> exmp18.js
// -- Same component at the same position preserves the state -> exmp19.js
// -- Different component at the same position resets the state -> exmp20.js, exmp21.js
// -- Nesting components functions is not a good practice -> exmp22.js
// -- Resetting the state at the same position -> exmp23.js
// -- Resetting state with a key -> exmp24.js
// -- Resetting state with a key -> exmp12.js
// Exercises -> ex11.js, ex12.js, ex13.js, ex14.js
// Installing Axios and using API's to submit a form
// localStorage & sessionStorage & Cookies
// Sign up & Login
