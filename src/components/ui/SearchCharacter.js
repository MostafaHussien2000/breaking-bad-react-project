import React from "react";
import styled from "styled-components";

function SearchCharacter({ searchText, setSearchText }) {
  return (
    <StyledFrom>
      <StyledInput
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="Type character name ..."
      />
    </StyledFrom>
  );
}

export default SearchCharacter;

const StyledFrom = styled.form`
  width: 85%;
  margin: auto;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin: auto;
  max-width: 450px;
  height: 35px;
  background: #ffffff5c;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 0px 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ffffff7f;
  }
`;
