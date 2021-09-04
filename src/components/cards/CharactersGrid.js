import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

function CharactersGrid({ setShowData, setRequestedChar }) {
  const [allCharacters, setAllCharacters] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (isMounted) setAllCharacters(data);
      });

    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      <center style={{ textAlign: "center", margin: "20px 0px" }}>
        <h1
          onClick={() => {
            console.log("Clicked");
          }}
        >
          All Characters
        </h1>
      </center>
      <StyledCharactersWrapper>
        {allCharacters &&
          allCharacters.map((person) => (
            <CharacterCard
              personData={person}
              key={person.char_id}
              name={person.name}
              img={person.img}
              setRequestedChar={setRequestedChar}
              setShowData={setShowData}
            />
          ))}
      </StyledCharactersWrapper>
    </>
  );
}

export default CharactersGrid;

const StyledCharactersWrapper = styled.div`
  padding: 50px 0px;
  --auto-grid-min-size: 10rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  align-self: center;
  gap: 70px;
`;
