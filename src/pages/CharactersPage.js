import React from "react";
import Header from "../components/ui/Header";

import styled from "styled-components";

function CharactersPage() {
  return (
    <main style={{ backgroundImage: `` }}>
      <Header />
      <StyledContainer>
        <h1>Characters Page</h1>
      </StyledContainer>
    </main>
  );
}

export default CharactersPage;

const StyledContainer = styled.main`
  width: 85%;
  margin: auto;
`;
