import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Box from '@material-ui/core/Box'

const zoomInAnimation = keyframes`
  from {
		opacity: 0;
		transform: scale3d(0.3, 0.3, 0.3);
	}
	to {
		opacity: 1
	}
`

const zoomIn = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity:0;
  }
`
const ZoomInAnimationContainer = styled(Box)<ZoomInAnimationProps>`
  animation-delay: 200ms;
  animation-duration: 600ms;
  animation-fill-mode: both;
  animation-name: ${zoomIn};

  ${({ isInitialized }) =>
    isInitialized &&
    css`
      animation-name: ${zoomInAnimation};
    `}
`

interface ZoomInAnimationProps {
  isInitialized?: boolean
}
const ZoomInAnimation: React.FC<ZoomInAnimationProps> = ({ isInitialized, children }) => (
  <ZoomInAnimationContainer isInitialized={isInitialized}>{children}</ZoomInAnimationContainer>
)

export default ZoomInAnimation
