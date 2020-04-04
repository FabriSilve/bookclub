import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
  width: 100%;
  max-width: 65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  background-color: #171a1c;
  margin-top: 1rem;
  border-radius: 20px 20px 0 0;

  p {
    color: grey;
    font-weight: light;
    margin: 0;
    font-size: 0.8rem;
  }

  a {
    color: darkgrey;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>© {new Date().getFullYear()}, Built with ♥️ by <a href="https://github.com/FabriSilve" target="_blank" rel="noopener noreferrer">FabriSilve</a></p>
  </StyledFooter>
);

export default Footer;
