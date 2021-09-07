import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

import AOS from "aos";
import "aos/dist/aos.css";

function CharactersGrid({ searchText, setRequestedChar }) {
  const [allCharacters, setAllCharacters] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  AOS.init({ duration: 200 });

  useEffect(() => {
    let isMounted = true;

    fetch(`https://breakingbadapi.com/api/characters?name=${searchText}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setAllCharacters(data);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [searchText]);

  return (
    <>
      <StyledCharactersWrapper>
        {isLoading && <p className="loading-indicator">Loading data ...</p>}

        {allCharacters &&
          allCharacters.map((person) => (
            <CharacterCard
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              //------------------------------------------//
              personData={person}
              key={person.char_id}
              name={person.name}
              img={person.img}
              setRequestedChar={setRequestedChar}
              id={person.char_id}
            />
          ))}
      </StyledCharactersWrapper>
    </>
  );
}

export default CharactersGrid;

const StyledCharactersWrapper = styled.div`
  padding: 50px 0px;
  --auto-grid-min-size: 5rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  align-self: center;
  gap: 70px;
  width: 100%;

  .loading-indicator {
    width: 100%;
    text-align: center;
  }
`;
