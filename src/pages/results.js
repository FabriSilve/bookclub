import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from '../components/layouts/Section'

import useTournaments from '../hooks/useTournaments';
import useMatches from '../hooks/useMatches';

import getMatchResult from '../utils/getMatchResult';


const Results = (props) => {
  const tournaments = useTournaments();
  const allMatches = useMatches();
  return (
    <Layout>
      <SEO title="Risultati" />
      {tournaments.map(({ node }) => (
        <Section key={node.frontmatter.name}>
          <h1>{node.frontmatter.name}</h1>
          <h2>{node.frontmatter.date}</h2>
          {node.frontmatter.days.map((matches, i) => (
            <table key={i} style={{ width: '100%', margin: '1rem'}}>
              <thead>
                <tr>
                  <th>casa</th>
                  <th>trasferta</th>
                  <th>andata</th>
                  <th>ritorno</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((teams, i) => (
                  <tr key={i}>
                    <td>{teams[0]}</td>
                    <td>{teams[1]}</td>
                    <td>{getMatchResult(teams[0], teams[1], allMatches)}</td>
                    <td>{getMatchResult(teams[1], teams[0], allMatches)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </Section>
      ))}
    </Layout>
  );
}

export default Results
