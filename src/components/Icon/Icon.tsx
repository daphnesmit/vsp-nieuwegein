import React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
// import styled from 'styled-components'

import { Phone } from './icons'

export type IconOption = keyof typeof icons

export const icons = {
  Phone,
}
interface IconOwnProps {
  icon: IconOption
}

export type IconProps = SvgIconProps & IconOwnProps
const Icon: React.FC<IconProps> = ({ icon, ...rest }) => {
  const IconComponent = icons[icon]
  return (
    <SvgIcon {...rest}>
      <IconComponent />
    </SvgIcon>
  )
}

export default Icon
