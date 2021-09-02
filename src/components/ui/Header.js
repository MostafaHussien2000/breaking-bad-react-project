import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";

import styled from "styled-components";

import { Menu } from "react-ionicons";

import { NavLink } from "react-router-dom";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {}, [menuToggle]);

  return (
    <StyledHeader>
      <NavLink exact to="/">
        <img src={logo} alt="Breaking Bad Logo" height="70px" />
      </NavLink>

      <Menu
        size="large"
        style={{ cursor: "pointer", padding: "0px", transform: "scale(1.2)" }}
        title="Menu Icon"
        cssClasses="menu-icon"
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
      />

      <StyledNavigation className={`navigation ${menuToggle ? "active" : ""}`}>
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

  @media screen and (max-width: 950px) {
    ul {
      position: absolute;
      flex-direction: column;
      justify-content: space-evenly;
      width: 110%;
      top: 100%;
      left: -5%;
      height: 85vh;
      padding: 20px 0px;
      border-radius: 25px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(3px);
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 80px rgba(0, 0, 0, 0.377);
      transform: translateX(-120%);
      transition: all 500ms cubic-bezier(0.49, 1.65, 0.24, 0.825);

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
