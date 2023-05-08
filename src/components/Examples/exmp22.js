function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");

    // const visibleTodos = useMemo(
    //   () => getFilteredTodos(todos, filter),
    //   [todos, filter]
    // );

    const visibleTodos = useMemo(()=>getFilteredTodos(todos, filter),[todos,filter]);
  //const [visibleTodos, setVisibleTodos] = useState([]);
  // useEffect(() => {
  //   setVisibleTodos(getFilteredTodos(todos, filter));
  // }, [todos, filter]);

  // ...

  return {
    visibleTodos.length ? visibleTodos.map(item=><>{item}</>):<>Loading</>
  };
}

// Solution -> calculate during rendering
/**
 * import { useMemo, useState } from 'react';

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');
  // ✅ Does not re-run getFilteredTodos() unless todos or filter change
  const visibleTodos = useMemo(() => getFilteredTodos(todos, filter), [todos, filter]);
  // ...
}
 */
