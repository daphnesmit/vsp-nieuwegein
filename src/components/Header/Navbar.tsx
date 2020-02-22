
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top:0;
  z-index: 2;
`

const Navbar: React.FC = ({ children }) => <Nav>{children}</Nav>

export default Navbar
