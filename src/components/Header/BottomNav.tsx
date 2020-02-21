// import Button from '@material-ui/core/Button'
// import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const BottomNavContainer = styled(Box)`
  height: 80px;
  display: flex;
  align-items: center;
`

const Logo = styled(Box)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2.5rem;
`
const BottomNav: React.FC = () => (
  <Container maxWidth="lg">
    <BottomNavContainer>
      <Logo>VSP nieuwegein</Logo>
      {/* <Button component={Link} to="/recent/" color="inherit">
      Recent
    </Button> */}
    </BottomNavContainer>
  </Container>
)

export default BottomNav
