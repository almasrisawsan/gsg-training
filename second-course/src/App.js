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
 
 * export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
////////////////////////////////////
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
/////////////////////////////////////
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

 * 
 */
