import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'
import React from 'react'
// import styled from 'styled-components'

// const Nav = styled.nav`
//   position: fixed;
//   width: 100%;
//   top:0;
//   BottomNav
// `

const BottomNav: React.FC = () => (
  <div>
    <Button component={Link} to="/recent/" color="inherit">
      Recent
    </Button>
  </div>
)

export default BottomNav
