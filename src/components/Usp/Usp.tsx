import React from 'react'
import Box from '@material-ui/core/Box'
import Icon, { IconOption } from '../Icon/Icon'
import styled from 'styled-components'
import { zIndex } from '@/utils/zIndex'
import { Link } from 'gatsby'

export interface UspProps {
  title: string
  description: string
  icon: IconOption
  viewBox?: string
}

const UspText = styled.div`
  display: inline-block;
  vertical-align: bottom;
  transition: transform 200ms ease-in-out;
`

const UspImage = styled.div`
  margin-bottom: ${({ theme }) => theme.space.s}px;
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
  opacity: 1;
`

const UspTitle = styled.h4`
  min-height: 2.6em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const UspDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0;
  margin-bottom: -35px;
  transition: opacity 250ms;
`

const UspContainer = styled(Box)`
  border-radius: 5px;
  position: relative;
  margin-bottom: 30px;
  padding: ${({ theme }) => theme.space.m}px;
  padding-bottom: 0;
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
    ${UspImage} {
      opacity: 0;
      transform: translate3d(0, -67px, 0);
    }
    ${UspDescription} {
      opacity: 1;
    }
    ${UspText} {
      transform: translate3d(0, -67px, 0);
    }
  }
`

const Usp: React.FC<UspProps> = ({ title, description, icon, viewBox }) => {
  return (
    <Link to="/">
      <UspContainer>
        <UspImage>
          <Icon viewBox={viewBox} size={42} icon={icon} />
        </UspImage>
        <UspText>
          <UspTitle>{title}</UspTitle>
          <UspDescription>{description}</UspDescription>
        </UspText>
      </UspContainer>
    </Link>
  )
}

export default Usp
