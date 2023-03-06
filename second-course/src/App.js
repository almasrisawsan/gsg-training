import "./App.css";
import logo from "./logo.svg";
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
