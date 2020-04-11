import React from "react"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from '../components/layouts/Section'

import useTournaments from '../hooks/useTournaments';
import useMatches from '../hooks/useMatches';

import StyledStart from '../components/elements/StyledStart';
import StyledTitle from '../components/elements/StyledTitle';

import getMatchResult from '../utils/getMatchResult';
import formatTeamName from '../utils/formatTeamName';
import formatDate from '../utils/formatDate';


const StyledCel = styled.span`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  margin-bottom: 1rem;
  background-color: rgba(200, 200, 200, 0.5);

  ${StyledRow}:first-child {
    font-weight: bold;
  }

  ${StyledRow}:nth-child(2n) {
    background-color: rgba(100, 100, 100, 0.3);
  }

  ${StyledCel} {
    width: 15%;
  }

  ${StyledCel}:first-child {
    width: 65%;
  }
`;

const Results = (props) => {
  const tournaments = useTournaments();
  const allMatches = useMatches();
  return (
    <Layout>
      <SEO title="Risultati" />
      {tournaments.map(({ node }) => (
        <Section key={node.frontmatter.name}>
          <StyledTitle>Torneo: {node.frontmatter.name}</StyledTitle>
          {node.frontmatter.days.map((matches, i) => (
            <StyledGrid key={i}>
              <StyledRow>
                <StyledCel>Giornata {i + 1}</StyledCel>
                <StyledCel>andata</StyledCel>
                <StyledCel>ritorno</StyledCel>
              </StyledRow>
              {matches.map((teams, i) => (
                <StyledRow key={i}>
                  <StyledCel>{formatTeamName(teams[0])} vs {formatTeamName(teams[1])}</StyledCel>
                  <StyledCel>{getMatchResult(teams[0], teams[1], allMatches)}</StyledCel>
                  <StyledCel>{getMatchResult(teams[1], teams[0], allMatches)}</StyledCel>
                </StyledRow>
              ))}
            </StyledGrid>
          ))}
          <StyledStart>Data d'inizio: {formatDate(node.frontmatter.date)}</StyledStart>
        </Section>
      ))}
    </Layout>
  );
}

export default Results
