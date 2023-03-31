import { useState } from "react";

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const handleAddArtist = () => {
    setArtists((prev) => [...prev, { name: name }]);
  };

  console.log(artists);
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddArtist}>Add</button>
      <ul>
        {artists.map((artist, index) => (
          <li key={index}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

// State is isolated -> exmp1
// Exercises -> ex1.js, ex2.js, ex3.js
// Removing from array -> exmp2
// Transforming an array -> exmp3
// Replacing item in array -> exmp4
// Inserting into array -> exmp5
// Making changes to array -> exmp6
// Updating objects in array -> fix the issue -> exmp7
// Installing Axios and using API's to submit a form
// localStorage & sessionStorage & Cookies
// Sign up & Login
