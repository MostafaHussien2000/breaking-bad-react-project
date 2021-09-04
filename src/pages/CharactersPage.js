import React from "react";
import Header from "../components/ui/Header";

import styled from "styled-components";

import wallpaper from "../img/CharactersPageWallpaper.png";
import CharactersGrid from "../components/cards/CharactersGrid";

function CharactersPage() {
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <CharactersGrid />
      </StyledContainer>
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
  background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${wallpaper});
`;
