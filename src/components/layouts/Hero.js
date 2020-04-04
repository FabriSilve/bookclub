import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.section`
  width: 100%;
  height: 70vh;
  max-height: 30rem;
  background-color: darkgreen;
`;

const Hero = () => (
  <StyledHero>
    <h1>Book Club</h1>
  </StyledHero>
);

export default Hero;
