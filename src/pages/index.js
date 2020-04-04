import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Section from '../components/layouts/Section';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <h1>Benvenuto al Club del Libro</h1>
      <h2>Un luogo raffinato dove uomini di cultura possono dare sfoggio del loro sapere</h2>
    </Section>
    <Section>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Section>
  </Layout>
)

export default IndexPage
