import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Link } from 'gatsby'
import Button from '../Button'

interface HeroContainerProps {
  background: string
}

const HeroContainer = styled(Box)<HeroContainerProps>`
  padding-top: 220px;
  padding-bottom: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('${({ background }) => background}');
`

const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const Hero: React.FC = () => (
  <HeroContainer background="/img/stadhuis1.jpg">
    <Container maxWidth="lg">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8}>
          <TitleContainer>
            <h2>Inspire people</h2>
            <Button variant="contained" color="primary" component={Link} to="/recent/">
              Purchase Ekko
            </Button>
          </TitleContainer>
        </Grid>
      </Grid>
    </Container>
  </HeroContainer>
)

export default Hero
