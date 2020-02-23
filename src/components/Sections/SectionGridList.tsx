import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box, { BoxProps } from '@material-ui/core/Box'
import { Link } from 'gatsby'
import Img from '../Img'
import Button from '../Button'
import Subtitle from '../Subtitle'

interface SectionGridListProps {}

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
  {
    img: '/img/stem-vsp-lijst-7.jpeg',
    title: 'Image',
    cols: 2,
  },
  {
    img: '/img/hal.jpg',
    title: 'Image',
    cols: 1,
  },
  {
    img: '/img/stadhuis1.jpg',
    title: 'Image',
    cols: 1,
  },
  {
    img: '/img/stadhuis2.jpg',
    title: 'Image',
    cols: 1,
  },
  {
    img: '/img/stadhuis3.jpg',
    title: 'Image',
    cols: 1,
  },
  {
    img: '/img/home-jumbotron.jpg',
    title: 'Image',
    cols: 1,
  },
]
const SectionGridList: React.FC<SectionGridListProps & BoxProps> = ({ ...rest }) => {
  return (
    <Box component="section" mt={6} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={8}>
                <h2>Investing in people and world-changing ideas</h2>
                <Subtitle>
                  Surrounded by smart, passionate people and with the best tools and approaches at
                  your disposal, you'll take giant leaps.
                </Subtitle>
                <Button component={Link} to="/">
                  Onze Missie
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4} justify="flex-end">
              <Grid item xs={12} sm={6}>
                <Img key={tileData[0].title} alt={tileData[0].title} src={tileData[0].img} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SectionGridList
