import React, { useState, useEffect } from "react";
import MovieInfo from "../components/ui/MovieInfo";

import styled from "styled-components";
import TrailerPop from "../components/ui/TrailerPop";

function LandingPage() {
  const [trailerShown, setTrailerShown] = useState(false);

  useEffect(() => {}, [trailerShown]);

  return (
    <StyledContainer>
      {trailerShown && <TrailerPop setTrailerShown={setTrailerShown} />}
      <MovieInfo setTrailerShown={setTrailerShown} />
    </StyledContainer>
  );
}

export default LandingPage;

const StyledContainer = styled.main`
  width: 85%;
  margin: 50px auto;
`;
