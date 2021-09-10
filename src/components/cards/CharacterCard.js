import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

function CharacterCard({ setRequestedChar, personData, name, img, id }) {
  return (
    <Link to={`/characters/${id}`}>
      <AnimatePresence>
        <StyledCard
          layoutId={`${id}-card`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.7,
            },
          }}
          onClick={() => {
            setRequestedChar(personData);
          }}
        >
          <div className="img-wrapper">
            <motion.img layoutId={`${id}-img`} src={img} alt={`${name}`} />
          </div>
          <motion.p layoutId={`${id}-name`}>{name}</motion.p>
        </StyledCard>
      </AnimatePresence>
    </Link>
  );
}

export default CharacterCard;

const StyledCard = styled(motion.div)`
  width: 120px;
  height: 170px;
  background: #afafaf;
  margin: 50px 0px;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  margin: auto;

  .img-wrapper {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0px;
    }
  }

  p {
    position: absolute;
    z-index: 5;
    bottom: -10px;
    width: 100%;
    text-align: center;
    font-size: 18px;
  }

  &::before {
    border-radius: 10px;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgb(1, 7, 3);
    background: linear-gradient(0deg, rgb(1, 7, 3) 0%, rgba(0, 0, 0, 0) 100%);
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.2s ease;
    img {
      transform: scale(1.2);
      transition: transform 0.2s ease;
    }
  }
`;
