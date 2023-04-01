/**
 * In this example, the SearchBar has its own query state that controls the text input.
 * Its parent FilterableList component displays a List of items, 
 * but it doesn’t take the search query into account.

Use the filterItems(foods, query) function to filter the list according to the search query.
 To test your changes, verify that typing “s” into the input
filters down the list to “Sushi”, “Shish kebab”, and “Dim sum”.

Note that filterItems is already implemented and imported so you don’t need to write it yourself!
 */

import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  return (
    <>
      <SearchBar />
      <hr />
      <List items={foods} />
    </>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
