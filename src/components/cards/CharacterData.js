import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

import { FiChevronLeft } from "react-icons/fi";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

function CharacterData({ pathId, requestedChar }) {
  useEffect(() => {
    console.table(requestedChar);
  }, [requestedChar]);

  console.log(typeof pathId);

  return (
    <PopShadow layoutId={`${pathId}-card`}>
      <Pop>
        <Link to="/characters" style={{ color: "#ccc", pointerEvents: "all" }}>
          <span className="back-icon">
            <FiChevronLeft />
          </span>
        </Link>

        <motion.h1 layoutId={`${pathId}-name`}>{requestedChar.name}</motion.h1>
        {requestedChar.name !== requestedChar.nickname && (
          <span>{`Also knows as " ${requestedChar.nickname} "`}</span>
        )}
        <p>{requestedChar.occupation.join(" - ")}</p>
        <p>Played by : {requestedChar.portrayed}</p>
        <motion.img layoutId={`${pathId}-img`} src={requestedChar.img} alt="" />
        <h3>Was in action in seasons :</h3>
        {requestedChar.appearance.map((s) => (
          <span className="season" key={s}>
            {s}
          </span>
        ))}
        <p style={{ margin: "18px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolor, natus obcaecati nostrum mollitia, laborum voluptatum, autem
          illo nam sint nihil expedita corporis officiis ipsa ab nobis in ea
          repudiandae.
        </p>
      </Pop>
    </PopShadow>
  );
}

export default CharacterData;

const PopShadow = styled(motion.div)`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: #0000007d;
  z-index: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(41, 124, 73);
    border-radius: 20px;
  }
`;

const Pop = styled(motion.section)`
  min-height: 90vh;
  padding: 40px 40px;
  border-radius: 20px;
  background: #fff;
  width: 90%;
  margin: auto;
  transition-delay: 0.2s;
  pointer-events: none;
  max-width: 650px;

  h1 {
    color: #222;
    bottom: 40px;
    font-size: 50px;
    @media screen and (max-width: 500px) {
      font-size: 30px;
    }
  }
  span {
    color: #555555;
    font-size: 20px;

    font-weight: 300;
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }

    &.back-icon {
      display: inline-flex;
      width: 20px;
      height: 20px;
      padding: 0px;
      justify-content: center;
      align-items: center;
      background: #cfcfcf;
      border-radius: 20px;
      transform: scale(1.2);
      margin: 10px 0px;
    }

    &.season {
      color: #222;
      width: 30px;
      height: 30px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #e2e2e2;
      border-radius: 50px;
      margin-right: 10px;
    }
  }

  p {
    margin: 7px 0px;
    color: #888888;
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }

  h3 {
    color: #222;
    font-weight: 400;
    margin: 10px 0px;
  }

  img {
    width: 100%;
    max-width: 320px;
    display: block;
    margin: 10px 0px;
    object-fit: cover;
    border-radius: 20px;
    max-height: 80vh;
  }
`;
