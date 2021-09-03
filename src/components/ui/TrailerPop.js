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
          style={{ margin: 20, cursor: "pointer" }}
          onClick={() => {
            setTrailerShown(false);
          }}
        />
        <h1>Breaking Bad Trailer</h1>
        <video src="https://youtu.be/HhesaQXLuRY"></video>
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
  align-items: flex-start;
  flex-direction: column;
  backdrop-filter: blur(8px);
  padding: 50px;

  h1 {
    text-align: center;
    width: 100%;
    font-weight: 800;
    letter-spacing: 1px;
  }
`;
