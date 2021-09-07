import React, { useEffect, useState } from "react";
import styled from "styled-components";
import wallpaper from "../img/QuotesPageWallpaper.png";

import Header from "../components/ui/Header";
import QuoteCard from "../components/cards/QuoteCard";

function QuotesPage() {
  const [quote, setQuote] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [click, setClick] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(`https://breakingbadapi.com/api/quote/random`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setQuote(data[0]);
          setIsLoading(false);
          console.table(quote);
        }
      });
  }, [click]);

  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <QuoteCard quote={quote} isLoading={isLoading} />
        <StyledRandomQuoteButton
          onClick={() => {
            setClick(!click);
            setQuote([]);
          }}
        >
          Get Random Quote
        </StyledRandomQuoteButton>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default QuotesPage;

const StyledContainer = styled.main`
  width: 85%;
  margin: auto;
`;

const StyledWrapper = styled.main`
  min-height: 100vh;
  background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-image: url(${wallpaper});
`;

const StyledRandomQuoteButton = styled.button`
  padding: 10px 50px;
  display: block;
  margin: 35px auto;
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
