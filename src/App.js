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
// exercises -> ex9, ex10, ex11, ex12 -> on google classroom
// Cases where useEffect is NOT needed:
// 1- Updating state based on props or state --> exmp20
// 2- Resetting all state when a prop changes --> exmp21
// 3- Caching expensive calculations --> exmp22
// 5- Sharing logic between event handlers --> exmp23
// 6- Sending a POST request -->exmp24
// exercise -> ex13
