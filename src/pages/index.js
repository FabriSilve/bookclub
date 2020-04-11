import React from "react"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from '../components/layouts/Section';

import useMatches from '../hooks/useMatches';
import useLeagues from '../hooks/useLeagues';

import getLeaguesResult from '../utils/getLeaguesResult';
import formatTeamName from '../utils/formatTeamName';
import formatDate from '../utils/formatDate';


const StyledCel = styled.span`
  padding: 0.5rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledRow = styled.div`
  margin: 0.1rem;
  border: 1px black solid;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${StyledRow}:first-child {
    font-weight: bold;
  }

  ${StyledRow}:nth-child(2n) {
    background-color: rgba(100, 100, 100, 0.3);
  }

  ${StyledCel} {
    display: none;
    width: 15%;
  }

  ${StyledCel}:nth-child(-n+4) {
    display: flex;
  }

  ${StyledCel}:nth-child(2) {
    width: 50%;
  }

  @media (min-width: ${650 / 16}em) {
    ${StyledCel} {
      display: flex;
      width: 5%;
    }

    ${StyledCel}:nth-child(2) {
      width: 30%;
    }
  }

  ${StyledCel}:first-child {
    width: 3%;
    display: flex;
  }
`;

const StyledTitle = styled.h1`
  width: 100%;
  margin: 1rem 0;
  text-transform: uppercase;
  text-align: center;
`;

const StyledStart = styled.h4`
  width: 100%;
  margin: 0.5rem 0;
  text-align: center;
  font-weight: 400;
`;


const IndexPage = () => {
  const leagues = useLeagues();
  const matches = useMatches();
  const results = getLeaguesResult(leagues, matches);
  return (
    <Layout>
      <SEO title="Home" />
      {results.map((result) => (
        <Section key={result.name}>
          <StyledTitle>Torneo: {result.name}</StyledTitle>
          <StyledGrid>
            <StyledRow>
              <StyledCel>№</StyledCel>
              <StyledCel>Squadra</StyledCel>
              <StyledCel>Punti</StyledCel>
              <StyledCel>Partite</StyledCel>
              <StyledCel>Vint.</StyledCel>
              <StyledCel>Pare.</StyledCel>
              <StyledCel>Pers.</StyledCel>
              <StyledCel>GF</StyledCel>
              <StyledCel>GS</StyledCel>
            </StyledRow>
            {result.ladder.map((team, index) => (
              <StyledRow key={team.team}>
                <StyledCel><strong>{index + 1}°</strong></StyledCel>
                <StyledCel>{formatTeamName(team.team)}</StyledCel>
                <StyledCel>{team.points}</StyledCel>
                <StyledCel>{team.nMatches}</StyledCel>
                <StyledCel>{team.wins}</StyledCel>
                <StyledCel>{team.draws}</StyledCel>
                <StyledCel>{team.losts}</StyledCel>
                <StyledCel>{team.gDone}</StyledCel>
                <StyledCel>{team.gReceived}</StyledCel>
              </StyledRow>
            ))}
          </StyledGrid>
          <StyledStart>Data d'inizio: {formatDate(result.start)}</StyledStart>
        </Section>
      ))}
    </Layout>
  );
};

export default IndexPage
