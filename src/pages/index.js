import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from '../components/layouts/Section';

import useMatches from '../hooks/useMatches';
import useLeagues from '../hooks/useLeagues';

import getLeaguesResult from '../utils/getLeaguesResult';


const IndexPage = (props) => {
  const leagues = useLeagues();
  const matches = useMatches();
  const results = getLeaguesResult(leagues, matches);
  console.log(results);
  return (
    <Layout>
      <SEO title="Home" />
      {results.map((result) => (
        <Section key={result.name}>
          <h1>{result.name}</h1>
          <h2>{result.start}</h2>
          <table>
            <thead>
              <tr>
                <th>Squadra</th>
                <th>Punti</th>
                <th>Partite</th>
                <th>Vint.</th>
                <th>Pare.</th>
                <th>Pers.</th>
                <th>GF</th>
                <th>GS</th>
              </tr>
            </thead>
            <tbody>
              {result.ladder.map((team) => (
                <tr key={team.team}>
                  <td>{team.team}</td>
                  <td>{team.points}</td>
                  <td>{team.nMatches}</td>
                  <td>{team.wins}</td>
                  <td>{team.draws}</td>
                  <td>{team.losts}</td>
                  <td>{team.gDone}</td>
                  <td>{team.gReceived}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      ))}
    </Layout>
  );
};

export default IndexPage
