import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled, { createGlobalStyle } from "styled-components"

import Header from "./layouts/Header"
import Footer from "./layouts/Footer"


const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    padding: 0;
    background-color: black;
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('https://c1.wallpaperflare.com/preview/231/148/943/soccer-playing-field-stadium.jpg');
    background-position: right center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`

const StyledLayout = styled.main`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

// const StyledCore = styled.div`
//   width: 90%;
//   padding: 1rem;
// `;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
