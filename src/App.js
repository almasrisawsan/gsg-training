import "./App.css";
import Carousel from "./components/Exercises/Carousel";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Shop from "./components/Shop";
import Cart from "./components/Exercises/Cart";
import Badge from "./components/Badge";
import Label from "./components/Label";

const App = () => {
  return (
    <>
      <Badge />
      <Label />
    </>
  );
};

export default App;

// Keeping components pure
//   It minds its own business. It does not change any objects or variables that existed before it was called.
//   Same inputs, same output. Given the same inputs, a pure function should always return the same result.
// Installing Modules -> https://github.com/brillout/awesome-react-components
