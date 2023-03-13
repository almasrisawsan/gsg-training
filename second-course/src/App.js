import "./App.css";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

const App = () => {
  return (
    <div class="w3-content w3-margin-top" style={{ maxWidth: "1440px" }}>
      <div class="w3-row-padding">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default App;

/**
 * Examples 
 * 
 * //////// expressions 
 * 
 *<h1>React is {5 + 5} times better with JSX</h1>


 * /////////// if example
 
 export default function PackingList() {
   const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

  return (
    <section>
      {text}
    </section>
  );
}



 * export default function PackingList() {
  const isPacked =true;

  const checkPacked = ()=>{
    if(isPacked)
    return <li className="item">Rice ✔</li>

    else 
    return <li className="item">Rice</li>
  }
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {checkPacked()}
       
      </ul>
    </section>
  );
}
////// ternary operators 
export default function PackingList() {
  const isPacked =true;
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {isPacked?<li className="item">Rice ✔</li>:<li className="item">Rice</li>}
       
      </ul>
    </section>
  );
}

/////// example 2

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal() {
  const isGoal = true;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}


//////// Logical &&


function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 ?
        <h2>
          You have {cars.length} cars in your garage.
        </h2>:<></>
      }
    </>
  );
}


function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

 * 
 */
