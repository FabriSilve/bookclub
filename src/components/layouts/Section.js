import React from 'react';
import styled from 'styled-components';


const StyledSection = styled.section`
  background-color: rgba(200, 200, 200, 0.7);
  padding: 1rem;
  margin: 1rem 0;
  width: 90%;
  max-width: 65rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
);

export default Section;