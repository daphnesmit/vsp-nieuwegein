import styled from 'styled-components'

interface MasonryDivProps {
  gap?: string
}

export const MasonryDiv = styled.div<MasonryDivProps>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap || `1em`};
`

export const Col = styled.div<MasonryDivProps>`
  display: grid;
  grid-gap: ${props => props.gap || `1em`};
`
