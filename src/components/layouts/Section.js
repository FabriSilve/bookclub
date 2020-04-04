import React from 'react';
import styled from 'styled-components';


const StyledSection = styled.section`
  background-color: rgba(200, 200, 200, 0.5);
  padding: 1rem;
  margin: 1rem 0;
  width: 90%;
  max-width: 60rem;
  border-radius: 10px;
`;

const Section = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
);

export default Section;