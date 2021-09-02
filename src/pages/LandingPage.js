import React from "react";
import MovieInfo from "../components/ui/MovieInfo";

import styled from "styled-components";

function LandingPage() {
  return (
    <StyledContainer>
      <MovieInfo />
    </StyledContainer>
  );
}

export default LandingPage;

const StyledContainer = styled.main`
  width: 85%;
  margin: auto;
`;
