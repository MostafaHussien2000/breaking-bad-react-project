import React from "react";
import styled from "styled-components";

import { IoCloseOutline } from "react-icons/io5";

import { motion } from "framer-motion";

function TrailerPop({ setTrailerShown }) {
  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      initial={{ opacity: 0 }}
    >
      <StyledPop>
        <IoCloseOutline
          size="30px"
          style={{ margin: 20, cursor: "pointer", width: "100%" }}
          onClick={() => {
            setTrailerShown(false);
          }}
        />
        <h1>Breaking Bad Trailer</h1>
        <StyledIFrame
          src="https://www.youtube.com/embed/1JLUn2DFW4w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></StyledIFrame>
      </StyledPop>
    </motion.div>
  );
}

export default TrailerPop;

const StyledPop = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #00000097;
  left: 0px;
  top: 0px;
  z-index: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(8px);
  pointer-events: none;
  * {
    pointer-events: all;
  }
  h1 {
    text-align: center;
    width: 100%;
    font-weight: 800;
    letter-spacing: 1px;
  }
`;

const StyledIFrame = styled.iframe`
  width: 90%;
  max-width: 800px;
  min-width: 320px;
  aspect-ratio: 1.85/1;
  border: none;
  height: auto;
  display: block;
  margin: auto;
`;
