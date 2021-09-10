import React, { useState, useEffect } from "react";
import MovieInfo from "../components/ui/MovieInfo";

import wallpaper from "../img/LandingPageWallpaper.png";

import styled from "styled-components";
import TrailerPop from "../components/ui/TrailerPop";
import Header from "../components/ui/Header";

import { motion } from "framer-motion";

function LandingPage() {
  const [trailerShown, setTrailerShown] = useState(false);

  useEffect(() => {}, [trailerShown]);

  return (
    <StyledWrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      }}
      exit={{
        x: -100,
      }}
    >
      <Header />
      <StyledContainer>
        {trailerShown && <TrailerPop setTrailerShown={setTrailerShown} />}
        <MovieInfo setTrailerShown={setTrailerShown} />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default LandingPage;

const StyledWrapper = styled(motion.main)`
  min-height: 100vh;
  background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-image: url(${wallpaper});
  background-attachment: fixed;
`;

const StyledContainer = styled.section`
  width: 85%;
  margin: 50px auto;
`;
