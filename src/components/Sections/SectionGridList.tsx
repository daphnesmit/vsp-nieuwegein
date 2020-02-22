import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box, { BoxProps } from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Masonry from '../Masonry'
import UspImage from '../UspImage'
import Img from '../Img'

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
    author: 'author',
    cols: 2,
  },
  {
    img: '/img/hal.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: '/img/stadhuis1.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: '/img/stadhuis2.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: '/img/stadhuis3.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
]
const SectionGridList: React.FC<SectionGridListProps & BoxProps> = ({ ...rest }) => {
  return (
    <Box component="section" {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Box height="620px">
              <Masonry>
                {tileData.map((tile, i) => (
                  <Img
                    key={tile.title}
                    alt={tile.title}
                    src={tile.img}
                    width={i > 0 ? '200px' : undefined}
                    height={i > 0 ? '200px' : undefined}
                  />
                ))}
              </Masonry>
            </Box>
            {/* <GridList cellHeight={380} cols={3}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SectionGridList
