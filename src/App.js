import "./App.css";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Shop from "./components/Shop";
import Badge from "./components/Badge";
import Label from "./components/Label";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <>
      <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>{" "}
    </>
  );
};

export default App;

// Keeping components pure
//   It minds its own business. It does not change any objects or variables that existed before it was called.
//   Same inputs, same output. Given the same inputs, a pure function should always return the same result.
// Installing Modules -> https://github.com/brillout/awesome-react-components // button

// localStorage & sessionStorage
// Adding event handlers
// Passing functions as props
// exercise -> react-slick
// Material UI
