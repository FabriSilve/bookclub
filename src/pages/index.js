import React from "react"
import { Link } from "gatsby"

import {
  Button,
  Jumbotron,
  Container,
} from 'react-bootstrap';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import soccerBall from '../images/soccer-ball.jpg'

const sectionStyle = {
  height: '70vh',
  maxHeigh: '30rem',
  color: 'white',
  backgroundImage: `url(${soccerBall})`,
  backgroundPosition: 'right bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron fluid style={sectionStyle}>
      <Container>
        <h1>Club Del Libro</h1>
        <h2>Un posto tranquillo in cui uomini di cultura possono confrontarsi.</h2>
      </Container>
    </Jumbotron>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button>Test Bootstrap button</Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
