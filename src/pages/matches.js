import React from "react"

import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from "../components/layouts/Section"

import useMatches from '../hooks/useMatches';


const Matches = () => {
  const matches = useMatches();
  return (
    <Layout>
      <SEO title="Partite" />
      {matches.map(({ node }) => (
        <Section key={`${node.frontmatter.home.team}-${node.frontmatter.visitor.team}`}>
          <h1>{node.frontmatter.home.team} vs {node.frontmatter.visitor.team}</h1>
          <h2>{node.frontmatter.home.goals} - {node.frontmatter.visitor.goals}</h2>
          <h4>{node.frontmatter.date}</h4>
          <Link to={`match/${node.frontmatter.home.team}-vs-${node.frontmatter.visitor.team}`}>Open</Link>
        </Section>
      ))}
    </Layout>
  );
};

export default Matches
