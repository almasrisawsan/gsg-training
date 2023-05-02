import Router from "./route";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  );
}

export default App;
// useEffect
/**
 * useEffect(() => {
  // This runs after every render
}); ----> exmp13

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []); ---> exmp14

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]); ----> exmp15
 */
// usage:
// 1- Connecting to external system --> exmp12
// 2- Listening to browser event --> exmp16
// 3- Triggering animation --> exmp17
// 4- Controlling modal dialog --> exmp18
// 5- fetching data -> product example dummy api
/**
 * // Race condition: two different requests “raced” against each other and came in a different order than you expected 
 * -> search example
 * 
 * function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then(json => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
 */
//6- Sending analytics
/**
 * useEffect(() => {
  logVisit(url); // Sends a POST request
}, [url]);
 */
// example --> examp19
// exercises -> ex9, ex10, ex11, ex12
