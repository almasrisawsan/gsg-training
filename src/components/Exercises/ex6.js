/**
 * Make it so that clicking the “Search” button puts focus into the field.
 */
export default function Page() {
  return (
    <>
      <nav>
        <button>Search</button>
      </nav>
      <input placeholder="Looking for something?" />
    </>
  );
}

// Solution

/**
 * import { useRef } from 'react';

export default function Page() {
  const inputRef = useRef(null);
  return (
    <>
      <nav>
        <button onClick={() => {
          inputRef.current.focus();
        }}>
          Search
        </button>
      </nav>
      <input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}

 */
