import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
// import Icon from '../Icon'
// import Icon from '../Icon'
const TopNavContainer = styled(Box)`
  height: 46px;
  display: flex;
  align-items: center;
`

import PhoneIcon from '@material-ui/icons/Phone'
import PhoneIconOutlined from '@material-ui/icons/PhoneOutlined'
const TopNav: React.FC = () => (
  <Container maxWidth="lg">
    <TopNavContainer>
      <PhoneIcon color="primary" />
      <PhoneIconOutlined color="primary" />
    </TopNavContainer>
  </Container>
)

export default TopNav
