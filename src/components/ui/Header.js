import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";

/*Import Styled Component
=============================*/
import styled from "styled-components";

/*Import React-Icons
=============================*/
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

/*Import React Router NavLink
=============================*/
import { NavLink } from "react-router-dom";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  window.addEventListener("resize", () => {
    setMenuToggle(false);
  });

  useEffect(() => {}, [menuToggle]);

  return (
    <StyledHeader>
      <NavLink exact to="/">
        <img src={logo} alt="Breaking Bad Logo" height="70px" />
      </NavLink>

      {window.innerWidth <= 950 && (
        <FiMenu
          size="40px"
          title="Menu Icon"
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50px",
          }}
          onClick={() => {
            setMenuToggle(true);
          }}
        />
      )}

      <StyledNavigation className={`navigation ${menuToggle ? "active" : ""}`}>
        {window.innerWidth <= 950 && menuToggle && (
          <li>
            <IoCloseOutline
              size="30px"
              style={{ margin: 20, cursor: "pointer" }}
              onClick={() => {
                setMenuToggle(false);
              }}
            />
          </li>
        )}
        <li>
          <NavLink
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
            activeClassName="active-nav-link"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
            activeClassName="active-nav-link"
            exact
            to="/characters"
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
            activeClassName="active-nav-link"
            exact
            to="/episodes"
          >
            Episodes
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
            activeClassName="active-nav-link"
            exact
            to="/quotes"
          >
            Quotes
          </NavLink>
        </li>
      </StyledNavigation>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
  padding: 10px;
  position: relative;
  min-height: 15vh;

  @media screen and (max-width: 950px) {
    ul {
      position: fixed;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      top: 0px;
      left: 0px;
      height: 100vh;
      padding: 20px 0px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 80px rgba(0, 0, 0, 0.377);
      transform: translateX(-120%);
      transition: all 500ms cubic-bezier(0.49, 1.65, 0.24, 0.825);
      z-index: 500000;

      @media screen and (max-width: 950px) and (min-width: 500px) {
        transition: all 800ms cubic-bezier(0.49, 1.65, 0.24, 0.825);
      }

      &.active {
        transform: translateX(0px);
      }
    }
  }
`;
const StyledNavigation = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
