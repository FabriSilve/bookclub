import React from "react"
import styled from 'styled-components';

import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from "../components/layouts/Section"

import getEmblem from '../utils/getEmblems';

import useMatches from '../hooks/useMatches';


const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  text-decoration: none;

  img {
    max-height: 5rem;
  }

  h1 {
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 1.5rem;
  }

  @media (min-width: ${750 / 16}em) {
    max-width: 10rem;

    img {
      max-width: 10rem;
      max-height: 10rem;
    }
  }
`;

const StyledMatch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (min-width: ${750 / 16}em) {
    flex-direction: row;
    width: 90%;
  }
`;

const StyledScore = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 2rem;

  h1 {
    font-size: 4rem;
    white-space: nowrap;
    margin: 0;
  }

  @media (min-width: ${750 / 16}em) {
    h1 {
      font-size: 8rem;
    }
  }
`;

const StyledLinkContainer = styled.div`
  * {
    text-decoration: none;
    color: black;
    color: inherit;
    cursor: pointer;
  }
  padding: 0.5rem 1rem;
  border: 2px solid gray;
  border-radius: 5px;
`;



const Matches = () => {
  const matches = useMatches();
  return (
    <Layout>
      <SEO title="Partite" />
      {matches.map(({ node }) => (
        <Section key={`${node.frontmatter.home.team}-${node.frontmatter.visitor.team}`}>
          <h4>{node.frontmatter.date}</h4>
          <StyledMatch>
            <StyledTeam>
              <img src={getEmblem(node.frontmatter.home.team)} alt="emblem"/>
              <h1>{node.frontmatter.home.team}</h1>
            </StyledTeam>
            <StyledScore>
              <h1>{node.frontmatter.home.goals} - {node.frontmatter.visitor.goals}</h1>
            </StyledScore>
            <StyledTeam>
              <img src={getEmblem(node.frontmatter.visitor.team)} alt="emblem"/>
              <h1>{node.frontmatter.visitor.team}</h1>
            </StyledTeam>
          </StyledMatch>
          <StyledLinkContainer>
            <Link to={`match/${node.frontmatter.home.team}-vs-${node.frontmatter.visitor.team}`}>detagli partita</Link>
          </StyledLinkContainer>
        </Section>
      ))}
    </Layout>
  );
};

export default Matches
