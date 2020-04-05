import React from 'react';
import Layout from '../components/layout';

import Section from '../components/layouts/Section';


const Match = ({ pageContext }) => {
  return (
    <Layout>
      <Section key={`${pageContext.home.team}-${pageContext.visitor.team}`}>
        <h1>{pageContext.home.team} vs {pageContext.visitor.team}</h1>
        <h2>{pageContext.home.goals} - {pageContext.visitor.goals}</h2>
        <h4>{pageContext.date}</h4>
      </Section>
    </Layout>
  );
};

export default Match