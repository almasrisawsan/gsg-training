import { useRef } from "react";

export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    console.log(listNode);
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placekitten.com/g/400/400" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/400/400" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/450/400" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  );
}
