import { useMemo, useState, memo } from "react";
import List from "./List.js";
import { filterTodos } from "./utils.js";

const TodoList = ({ todos, theme, tab }) => {
  //const [checked, setChecked] = useState(false);
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>
      {/* <button onClick={() => setChecked(!checked)}>Click</button> */}
      <List items={visibleTodos} />
    </div>
  );
};
export default TodoList;
