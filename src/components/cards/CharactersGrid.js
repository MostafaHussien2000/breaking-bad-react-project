import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import CharacterCard from "./CharacterCard";

function CharactersGrid() {
  const [allCharacters, setAllCharacters] = useState(null);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllCharacters(data);
        console.table(allCharacters);
      });
  }, []);

  return (
    <div>
      <CharacterCard />
    </div>
  );
}

export default CharactersGrid;
