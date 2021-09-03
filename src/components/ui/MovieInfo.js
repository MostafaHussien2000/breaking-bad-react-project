import React from "react";

/*Import React-Icons
=============================*/
import { motion } from "framer-motion";

/*Import React-Icons
=============================*/
import { IconContext } from "react-icons/lib";
import { FiTv } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { CgDolby } from "react-icons/cg";

/*Import Styled Component
=============================*/
import styled from "styled-components";

function MovieInfo({ setTrailerShown }) {
  return (
    <IconContext.Provider
      value={{
        size: "18px",
      }}
    >
      <main>
        <StyledInfoWrapper>
          <StyledPieceWrapper>
            <StyledIconWrapper>
              <FiTv title="tv" />
            </StyledIconWrapper>
            <p>Drama Adventure</p>
          </StyledPieceWrapper>
          <StyledPieceWrapper>
            <StyledIconWrapper>
              <IoTimeOutline title="tv" />
            </StyledIconWrapper>
            <p>5 seasons</p>
          </StyledPieceWrapper>
        </StyledInfoWrapper>

        {/* Main Text
        ======================================*/}
        <motion.h1
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              x: { type: "spring", stiffness: 100 },
              duration: 1.5,
            },
          }}
          initial={{ x: 200, opacity: 0 }}
          style={{ fontSize: "70px", margin: "10px 0px 50px 0px" }}
        >
          Breaking Bad
        </motion.h1>
        <h4 style={{ color: "#E8DA0E", fontWeight: 500 }}>
          " I am not in danger. Skyler, I am the danger. "
        </h4>
        <p
          style={{
            fontSize: 15,
            opacity: 0.7,
            maxWidth: 800,
            margin: "20px 0px",
          }}
        >
          The critical favorite aired for a total of five seasons, from
          2008-2013, and told the story of Bryan Cranston's Walter White as a
          struggling high school chemistry teacher who is diagnosed with lung
          cancer and ends up teaming up with a former student to sell meth
        </p>
        <StyledInfoIcons>
          <CgDolby size="35px" title="dolby atmos" />
          <h4>4K</h4>
          <h4>DVD</h4>
          <h4>+12</h4>
        </StyledInfoIcons>
        <StyledTrailerButton
          onClick={() => {
            setTrailerShown(true);
          }}
        >
          Watch Trailer
        </StyledTrailerButton>
      </main>
    </IconContext.Provider>
  );
}

export default MovieInfo;

const StyledIconWrapper = styled.div`
  color: red;
  width: 30px;
  height: 30px;
  background: #f8e8007d;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  border-radius: 50px;
`;

const StyledPieceWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  gap: 15px;

  p {
    color: #ffffffaa;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  min-width: 400px;
  max-width: 270px;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const StyledInfoIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-top: 50px;

  * {
    height: 25px;
    padding: 2px 7px;
    background: #ffffff7a;
    border-radius: 5px;
    opacity: 0.7;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

const StyledTrailerButton = styled.button`
  padding: 10px 50px;
  margin: 35px 0px;
  border-radius: 500px;
  background: transparent;
  border: 2px solid #fff;
  box-shadow: 0px 0px 10px #17bf7f, 0px 0px 10px #17bf7f inset;
  cursor: pointer;
  transition: background 0.2s ease, border 0.2s ease;

  &:hover {
    background: #17bf7f;
    border-color: #17bf7f;
  }
`;
