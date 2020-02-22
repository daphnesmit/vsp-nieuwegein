import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box, { BoxProps } from '@material-ui/core/Box'
import Usp, { UspProps } from '../Usp/Usp'
import UspImage, { UspImageProps } from '../UspImage/UspImage'

interface UspsProps {
  usps: (UspProps | UspImageProps)[]
}

const Usps: React.FC<UspsProps & BoxProps> = ({ usps, ...rest }) => {
  return (
    <Box component="section" {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {usps.map((usp: UspProps | UspImageProps) => (
            <Grid item xs={12} sm={6} md={4}>
              {(usp as UspImageProps).img ? <UspImage {...usp as UspImageProps} /> : <Usp {...usp as UspProps} />}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Usps
