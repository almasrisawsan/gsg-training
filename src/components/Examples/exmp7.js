import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen, index) {
    const myNextList = [...myList];
    const artwork = myNextList.find((a) => a.id === artworkId);
    const newArtwork = { ...artwork, seen: nextSeen };
    myNextList.splice(index, 1, newArtwork);
    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId, nextSeen, index) {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find((a) => a.id === artworkId);
    const newArtwork = { ...artwork, seen: nextSeen };
    yourNextList.splice(index, 1, newArtwork);
    setYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork, index) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked, index);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
