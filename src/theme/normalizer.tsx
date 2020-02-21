import { normalize } from 'polished'
import { css } from 'styled-components'

export const normalizer = css`
  ${normalize()}

  h1,h2,h3,h4,h4,h5,h6 {
    margin: 0px;
  }
`
