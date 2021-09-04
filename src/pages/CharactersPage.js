import React, { useState } from "react";
import Header from "../components/ui/Header";

import styled from "styled-components";

import CharactersGrid from "../components/cards/CharactersGrid";
import CharacterData from "../components/cards/CharacterData";

function CharactersPage() {
  const [requestedChar, setRequestedChar] = useState(null);

  const [showData, setShowData] = useState(false);

  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <CharactersGrid
          setShowData={setShowData}
          setRequestedChar={setRequestedChar}
        />
      </StyledContainer>
      {requestedChar && (
        <CharacterData
          setShowData={setShowData}
          showData={showData}
          requestedChar={requestedChar}
        />
      )}
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
