import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";

import styled from "styled-components";

import CharactersGrid from "../components/cards/CharactersGrid";
import CharacterData from "../components/cards/CharacterData";

import { useLocation } from "react-router-dom";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import SearchCharacter from "../components/ui/SearchCharacter";

function CharactersPage() {
  const [requestedChar, setRequestedChar] = useState(null);

  const location = useLocation();
  const path_id = location.pathname.split("/")[2];
  console.log(path_id);

  useEffect(() => {}, [location, path_id]);

  const [searchText, setSearchText] = useState("");

  return (
    <StyledWrapper>
      <Header />
      <center style={{ textAlign: "center", margin: "20px 0px" }}>
        <h1
          onClick={() => {
            console.log("Clicked");
          }}
        >
          All Characters
        </h1>
      </center>
      <SearchCharacter />
      <AnimateSharedLayout>
        <AnimatePresence>
          {requestedChar && path_id && (
            <CharacterData pathId={path_id} requestedChar={requestedChar} />
          )}
        </AnimatePresence>
        <StyledContainer>
          <CharactersGrid
            searchText={searchText}
            setSearchText={setSearchText}
            setRequestedChar={setRequestedChar}
          />
        </StyledContainer>
      </AnimateSharedLayout>
    </StyledWrapper>
  );
}

export default CharactersPage;

const StyledContainer = styled.main`
  width: 85%;
  margin: auto;
`;

const StyledWrapper = styled.main`
  min-height: 100vh;

  background: rgb(1, 7, 3);
  background: linear-gradient(
    0deg,
    rgba(1, 7, 3, 1) 95%,
    rgba(11, 74, 34, 1) 100%
  );
`;

/*
background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${wallpaper});

  */
