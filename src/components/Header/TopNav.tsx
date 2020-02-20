import React from 'react'
// import styled from 'styled-components'
import Box from '@material-ui/core/Box'
// import Icon from '../Icon'
// import Icon from '../Icon'
// const Nav = styled.nav`
//   position: fixed;
//   width: 100%;
//   top:0;
//   TopNav
// `

import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIconOutlined from '@material-ui/icons/PhoneOutlined';
const TopNav: React.FC = () => (
  <Box>
    <PhoneIcon color="primary" />
    <PhoneIconOutlined color="primary" />
  </Box>
)

export default TopNav
