import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";

import wallpaper from "../img/CharactersPageWallpaper.png";

import styled from "styled-components";

import CharactersGrid from "../components/cards/CharactersGrid";
import CharacterData from "../components/cards/CharacterData";

import { useLocation } from "react-router-dom";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import SearchCharacter from "../components/ui/SearchCharacter";

import { motion } from "framer-motion";

function CharactersPage() {
  const [requestedChar, setRequestedChar] = useState(null);

  const location = useLocation();
  const path_id = location.pathname.split("/")[2];

  useEffect(() => {}, [location, path_id]);

  const [searchText, setSearchText] = useState("");

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
        opacity: 0,
      }}
    >
      <Header />
      <center style={{ textAlign: "center", margin: "20px 0px" }}>
        <h1>All Characters</h1>
      </center>
      <SearchCharacter searchText={searchText} setSearchText={setSearchText} />
      <AnimateSharedLayout>
        <AnimatePresence initial={false} exitBeforeEnter>
          {requestedChar && path_id && (
            <CharacterData
              layout
              pathId={path_id}
              requestedChar={requestedChar}
            />
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

const StyledContainer = styled.div`
  width: 85%;
  margin: auto;
`;

const StyledWrapper = styled(motion.main)`
  min-height: 100vh;
  background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-image: url(${wallpaper});
  background-attachment: fixed;
  transform-origin: 100%;
`;
