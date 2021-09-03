import React, { useState, useEffect } from "react";
import MovieInfo from "../components/ui/MovieInfo";

import wallpaper from "../img/LandingPageWallpaper.png";

import styled from "styled-components";
import TrailerPop from "../components/ui/TrailerPop";
import Header from "../components/ui/Header";

function LandingPage() {
  const [trailerShown, setTrailerShown] = useState(false);

  console.log(wallpaper);

  useEffect(() => {}, [trailerShown]);

  return (
    <StyledWrapper style={{ backgroundImage: `url(${wallpaper})` }}>
      <Header />
      <StyledContainer>
        {trailerShown && <TrailerPop setTrailerShown={setTrailerShown} />}
        <MovieInfo setTrailerShown={setTrailerShown} />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default LandingPage;

const StyledWrapper = styled.main`
  min-height: 100vh;
  background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${wallpaper});
`;

const StyledContainer = styled.section`
  width: 85%;
  margin: 50px auto;
`;
