import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Link } from 'gatsby'
import Button from '../Button'
import TextRotator from '../TextRotator'
import { useBackgroundImage } from '@/utils/hooks/useBackgroundImage'
import ZoomInAnimation from '../ZoomInAnimation'
import HeroSeperator from './HeroSeperator'

interface HeroContainerProps {
  background: string
}

const HeroContainer = styled.section<HeroContainerProps>`
  padding-top: 220px;
  padding-bottom: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('${({ background }) => background}');
  position: relative;

  &::before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(9,24,42,0.4);
  }
`

const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Hero: React.FC = () => {
  const { source, loaded } = useBackgroundImage('/img/stadhuis2.jpg')
  return (
    <HeroContainer background={source}>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={10} md={8}>
            <TitleContainer>
              <TextRotator isInitialized={loaded} />
              <ZoomInAnimation isInitialized={loaded}>
                <Button component={Link} to="/recent/">
                  Purchase Ekko
                </Button>
              </ZoomInAnimation>
            </TitleContainer>
          </Grid>
        </Grid>
      </Container>
      <HeroSeperator />
    </HeroContainer>
  )
}

export default Hero
