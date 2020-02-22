import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Box from '@material-ui/core/Box'
import { zIndex } from '@/utils/zIndex'

const TextRotatorContainer = styled(Box)`
  pointer-events: none;
  position: relative;
  z-index: ${zIndex.textRotator};
  overflow: hidden;
  pointer-events: none;
  width: 100%;
`

const TitleContainer = styled(Box)`
  min-height: 150px;
  position: relative;
`

const textRotateAnimation = keyframes`
  0% {
    transform: translate3d(0,80px,0);
    opacity: 0
  }

  20%, 80% {
    transform: translate3d(0,0,0);
    opacity: 1
  }

  100% {
    transform: translate3d(0,-80px,0);
    opacity: 0
  }
`

const Title = styled(Box)<TextRotatorProps>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 6.2rem;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  bottom: 0;
  transform: translate3d(0, 80px, 0);
  line-height: 1.3;
  letter-spacing: -0.75px;

  &:last-child {
    transition: all 500ms ease-in-out 4.25s;
  }
  
  ${({ isInitialized }) =>
    isInitialized &&
    css`
      &:nth-child(1) {
        animation: ${textRotateAnimation} 1.5s 0.5s;
      }
      &:nth-child(2) {
        animation: ${textRotateAnimation} 1.5s 1.75s;
      }
      &:nth-child(3) {
        animation: ${textRotateAnimation} 1.5s 3s;
      }

      &:last-child {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        animation: none;
      }
    `}
`

interface TextRotatorProps {
  isInitialized?: boolean
}
const TextRotator: React.FC<TextRotatorProps> = props => (
  <TextRotatorContainer>
    <TitleContainer>
      <Title {...props}>Inspire people</Title>
      <Title {...props}>Take action</Title>
      <Title {...props}>Take action</Title>
      <Title {...props}>Get involved</Title>
    </TitleContainer>
  </TextRotatorContainer>
)

export default TextRotator
