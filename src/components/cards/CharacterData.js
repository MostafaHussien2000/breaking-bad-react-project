import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

function CharacterData({ setShowData, showData, requestedChar }) {
  useEffect(() => {
    console.table(requestedChar);
  }, [requestedChar]);

  return (
    <PopWrapper
      style={{ transform: `translateY(${showData ? "0%" : "100%"})` }}
      onClick={() => setShowData(false)}
    >
      <Pop></Pop>
    </PopWrapper>
  );
}

export default CharacterData;

const PopWrapper = styled.section`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Pop = styled.section``;
