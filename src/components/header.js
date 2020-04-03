import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Navbar } from 'react-bootstrap';


const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Book Club
      </Link>
    </Navbar.Brand>
  </Navbar>
)

export default Header
