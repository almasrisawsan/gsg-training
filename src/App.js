import "./App.css";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Shop from "./components/Shop";

const App = () => {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1440px" }}>
      <div className="w3-row-padding">
        <Shop />
      </div>
    </div>
  );
};

export default App;

//Passing props to components, key-value pairs, objects, arrays, destructuring
//Specifying default values
//Sending props with spread operator
//Exercise-1 -> ProductList
//Exercise-2 -> Shop
//Exercise-3 -> Slider
//Exercise-4 -> Offers
//Passing functions/children to components -> Products
//

// module styling
// installing modules
