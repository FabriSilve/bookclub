import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import soccerBall from '../images/soccer-ball.jpg'

// const sectionStyle = {
//   height: '70vh',
//   maxHeigh: '30rem',
//   color: 'white',
//   backgroundImage: `url(${soccerBall})`,
//   backgroundPosition: 'right bottom',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
// }

const hero = {
  backgroundImage: `url(${soccerBall})`,
  backgroundPosition: 'right center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '70vh',
  maxHeigh: '30rem',
  marginBottom: '1rem',
  display: 'flex',
  alignContent: 'center',
}

const heroContent = {
  width: '100%',
  maxWidth: '60rem',
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={hero}>
      <div style={heroContent}>
        <h1>Club Del libro</h1>
      </div>
    </section>
    {/* <Jumbotron fluid style={sectionStyle}>
        <Container>
          <h1>Club Del Libro</h1>
          <h2>Un posto tranquillo in cui uomini di cultura possono confrontarsi.</h2>
        </Container>
    </Jumbotron> */}
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
