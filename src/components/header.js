import { Link } from "gatsby"
import React from "react"


const Header = () => (
  <header bg="dark" variant="dark">
    <span>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Book Club
      </Link>
    </span>
  </header>
)

export default Header
