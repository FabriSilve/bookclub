import { Link } from "gatsby"
import React from "react"

import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-bottom: 1rem;
`;

const StyledContent = styled.div`
  width: 100%;
  max-width: 65rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9);
  background-color: #171a1c;
  border-radius: 0 0 20px 20px;
`;

const StyledItem = styled.span`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  color: #ddd;
  text-decoration: none;
  margin-right: 1rem;
`;

const StyledMenuItems = styled.div`
  display: none;
  @media (min-width: ${500 / 16}em) {
    display: flex;
  }
`;


const Header = () => (
  <StyledHeader bg="dark" variant="dark">
    <StyledContent>
      <StyledItem as={Link} to="/">
        Home
      </StyledItem>
      <StyledMenuItems>
        <StyledItem as={Link} to="/results">
          Risultati
        </StyledItem>
        <StyledItem as={Link} to="/players">
          Giocatori
        </StyledItem>
        <StyledItem as={Link} to="/matches">
          Partite
        </StyledItem>
      </StyledMenuItems>
    </StyledContent>
  </StyledHeader>
)

export default Header;
