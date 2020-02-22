import React from 'react'
import styled, { useTheme } from 'styled-components'
import { zIndex } from '@/utils/zIndex'

const HeroSeperatorContainer = styled.div`
  height: 100px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: ${zIndex.heroSeperator};

  svg {
    height: 100px;
    width: 100%;
    transform: scale(1, 1);
  }
`

const HeroSeperator: React.FC = () => {
  const theme = useTheme()
  return (
    <HeroSeperatorContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path fill={theme.colors.offWhite} d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path>
      </svg>
    </HeroSeperatorContainer>
  )
}

export default HeroSeperator
