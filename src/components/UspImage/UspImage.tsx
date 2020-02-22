import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'
import { zIndex } from '@/utils/zIndex'
import { Link } from 'gatsby'
import Img from '../Img'

export interface UspImageProps {
  img: string
  alt: string
  width?: string
  height?: string
}

const UspContainer = styled(Box)`
  border-radius: 5px;
  position: relative;
  margin-bottom: 30px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  transition: 0.2s;
  overflow: hidden;
  cursor: pointer;
  z-index: ${zIndex.usp};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 44px 98px 0 rgba(0, 0, 0, 0.12);
    z-index: 100;
  }
`

const UspImage: React.FC<UspImageProps> = ({ img, alt, width, height }) => {
  return (
    <Link to="/">
      <UspContainer>
        <Img src={img} width={width} height={height} alt={alt} />
      </UspContainer>
    </Link>
  )
}

export default UspImage
