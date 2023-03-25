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

// Final Project preparation
// Passing functions as props with parameters -> example1
// Prevent Default / Stop Propagation
// exercise -> ex.2 & ex.3
// exercise -> install and use react-slick
// State -> example4 ... etc
// State is isolated -> ex9
// Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks.
// You can’t call Hooks inside conditions, loops, or other nested functions
// state exercise -> ex3,ex4
// localStorage & sessionStorage & Cookies
// Sign up & Login
