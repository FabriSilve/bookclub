import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

import Section from '../components/layouts/Section';

import SEO from "../components/seo"

import StyledStart from '../components/elements/StyledStart';

import getEmblem from '../utils/getEmblems';
import formatTeamName from '../utils/formatTeamName';
import formatDate from '../utils/formatDate';


const StyledCel = styled.div`
  display: flex;
  width: 30%;
  min-width: 5rem;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
  }

  h2 {
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
  const description = `${formatTeamName(pageContext.home.team)} ${pageContext.home.goals} - ${pageContext.visitor.goals} ${formatTeamName(pageContext.visitor.team)}`
  return (
    <Layout>
      <SEO
        title="Dettagli partita"
        description={description}
      />
      <Section>
        <StyledStart>{formatDate(pageContext.date)}</StyledStart>
        <StyledGrid>
          <StyledRow>
            <StyledCel><img src={getEmblem(pageContext.home.team)} alt="emblem" /></StyledCel>
            <StyledCel></StyledCel>
            <StyledCel><img src={getEmblem(pageContext.visitor.team)} alt="emblem" /></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{formatTeamName(pageContext.home.team, false)}</h2></StyledCel>
            <StyledCel>vs</StyledCel>
            <StyledCel><h2>{formatTeamName(pageContext.visitor.team, false)}</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.goals}</h2></StyledCel>
            <StyledCel>Reti</StyledCel>
            <StyledCel><h2>{pageContext.visitor.goals}</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.possession}%</h2></StyledCel>
            <StyledCel>Possesso</StyledCel>
            <StyledCel><h2>{pageContext.visitor.possession}%</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.shots} ({pageContext.home.shotsIn})</h2></StyledCel>
            <StyledCel>Tiri (in porta)</StyledCel>
            <StyledCel><h2>{pageContext.visitor.shots} ({pageContext.visitor.shotsIn})</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.faults} ({pageContext.home.offsides})</h2></StyledCel>
            <StyledCel>Falli (fuorigioco)</StyledCel>
            <StyledCel><h2>{pageContext.visitor.faults} ({pageContext.visitor.offsides})</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.corners}</h2></StyledCel>
            <StyledCel>Calci d'angolo</StyledCel>
            <StyledCel><h2>{pageContext.visitor.corners}</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.penalties}</h2></StyledCel>
            <StyledCel>Punizioni</StyledCel>
            <StyledCel><h2>{pageContext.visitor.penalties}</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.passages} ({pageContext.home.passagesSucceded})</h2></StyledCel>
            <StyledCel>Passaggi (riusciti)</StyledCel>
            <StyledCel><h2>{pageContext.visitor.passages} ({pageContext.visitor.passagesSucceded})</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.cross}</h2></StyledCel>
            <StyledCel>Cross</StyledCel>
            <StyledCel><h2>{pageContext.visitor.cross}</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.passagesIntercepted}</h2></StyledCel>
            <StyledCel>Passaggi intercettati</StyledCel>
            <StyledCel><h2>{pageContext.visitor.passagesIntercepted}</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.tackels}</h2></StyledCel>
            <StyledCel>Contrasti</StyledCel>
            <StyledCel><h2>{pageContext.visitor.tackels}</h2></StyledCel>
          </StyledRow>
          <StyledRow>
            <StyledCel><h2>{pageContext.home.saves}</h2></StyledCel>
            <StyledCel>Parate</StyledCel>
            <StyledCel><h2>{pageContext.visitor.saves}</h2></StyledCel>
          </StyledRow>
        </StyledGrid>
      </Section>
    </Layout>
  );
};

export default Match
