import React from "react";
import styled from "styled-components";

function CharacterCard({
  setShowData,
  setRequestedChar,
  personData,
  name,
  img,
}) {
  return (
    <StyledCard
      onClick={() => {
        setRequestedChar(personData);
        setShowData(true);
      }}
    >
      <div className="img-wrapper">
        <img src={img} alt={`${name} pic.`} />
      </div>
      <p>{name}</p>
    </StyledCard>
  );
}

export default CharacterCard;

const StyledCard = styled.div`
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
