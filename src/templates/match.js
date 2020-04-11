import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

import Section from '../components/layouts/Section';

import StyledStart from '../components/elements/StyledStart';
// import StyledTitle from '../components/elements/StyledTitle';

import getEmblem from '../utils/getEmblems';
import formatTeamName from '../utils/formatTeamName';
import formatDate from '../utils/formatDate';


const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledCel = styled.div`
  display: flex;
  width: 30%;
  min-width: 5rem;
  align-items: center;
  justify-content: center;

  ${StyledTitle} {
    margin: 0.2rem;
  }

  img {
    max-height: 5rem;
  }

  @media (min-width: ${750 / 16}em) {
    img {
      max-width: 10rem;
      max-height: 10rem;
    }
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  width: 100%;
  border-bottom: 1px solid black;

  ${StyledCel}:nth-child(2) {
    order: 1;
    width: 100%;
  }
  ${StyledCel}:nth-child(1) {
    order: 2;
    width: 50%;
  }
  ${StyledCel}:nth-child(3) {
    order: 3;
    width: 50%;
  }
`;

const StyledGrid = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${StyledRow}:nth-child(2n) {
    background-color: rgba(100, 100, 100, 0.3);
  }
`;

const Match = ({ pageContext }) => {
  return (
    <Layout>
      <Section>
        <StyledStart>{formatDate(pageContext.date)}</StyledStart>
        <StyledGrid>
          <StyledRow>
            <StyledCel><img src={getEmblem(pageContext.home.team)} alt="emblem" /></StyledCel>
            <StyledCel></StyledCel>
            <StyledCel><img src={getEmblem(pageContext.visitor.team)} alt="emblem" /></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{formatTeamName(pageContext.home.team, false)}</StyledTitle></StyledCel>
            <StyledCel>vs</StyledCel>
            <StyledCel><StyledTitle>{formatTeamName(pageContext.visitor.team, false)}</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.goals}</StyledTitle></StyledCel>
            <StyledCel>Reti</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.goals}</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.possession}%</StyledTitle></StyledCel>
            <StyledCel>Possesso</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.possession}%</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.shots} ({pageContext.home.shotsIn})</StyledTitle></StyledCel>
            <StyledCel>Tiri (in porta)</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.shots} ({pageContext.visitor.shotsIn})</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.faults} ({pageContext.home.offsides})</StyledTitle></StyledCel>
            <StyledCel>Falli (fuorigioco)</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.faults} ({pageContext.visitor.offsides})</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.corners}</StyledTitle></StyledCel>
            <StyledCel>Calci d'angolo</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.corners}</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.penalties}</StyledTitle></StyledCel>
            <StyledCel>Punizioni</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.penalties}</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.passages} ({pageContext.home.passagesSucceded})</StyledTitle></StyledCel>
            <StyledCel>Passaggi (riusciti)</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.passages} ({pageContext.visitor.passagesSucceded})</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.cross}</StyledTitle></StyledCel>
            <StyledCel>Cross</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.cross}</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.passagesIntercepted}</StyledTitle></StyledCel>
            <StyledCel>Passaggi intercettati</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.passagesIntercepted}</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.tackels}</StyledTitle></StyledCel>
            <StyledCel>Contrasti</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.tackels}</StyledTitle></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><StyledTitle>{pageContext.home.saves}</StyledTitle></StyledCel>
            <StyledCel>Parate</StyledCel>
            <StyledCel><StyledTitle>{pageContext.visitor.saves}</StyledTitle></StyledCel>
          </StyledRow>
        </StyledGrid>
      </Section>
    </Layout>
  );
};

export default Match