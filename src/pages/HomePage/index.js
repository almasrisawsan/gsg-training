import ClickCounter from "../../components/ClickCounter";
import HoverCounter from "../../components/HoverCounter";

const index = () => {
  return (
    <div className="App">
      {/*Render both of these components to the UI */}
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default index;
