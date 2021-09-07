import React, { useEffect } from "react";
import styled from "styled-components";

function QuoteCard({ quote, isLoading }) {
  useEffect(() => {}, [isLoading, quote]);

  return (
    <StyledQuoteWrapper>
      {isLoading && (
        <span
          style={{ display: "block", textAlign: "center", fontSize: "14px" }}
        >
          Loading Quote ...
        </span>
      )}
      {quote && (
        <>
          <p>{quote.quote}</p>
          <StyledAuthorInfo>
            {quote.author && <h6>" {quote.author} "</h6>}
          </StyledAuthorInfo>
        </>
      )}
    </StyledQuoteWrapper>
  );
}

export default QuoteCard;

const StyledQuoteWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  background: red;
  margin: 100px auto;
  border-radius: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.377);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 16px;
  }
`;

const StyledAuthorInfo = styled.div`
  text-align: right;
  h6 {
    font-weight: 400;
    font-size: 15px;
    opacity: 0.7;
    margin-top: 10px;
  }
`;
