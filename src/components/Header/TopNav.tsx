import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const TopNavContainer = styled(Box)`
  height: 46px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(132, 132, 132, 0.15);
`

import PhoneIcon from '@material-ui/icons/Phone'
import PhoneIconOutlined from '@material-ui/icons/PhoneOutlined'
const TopNav: React.FC = () => (
  <TopNavContainer>
    <Container maxWidth="lg">
      <PhoneIcon color="primary" />
      <PhoneIconOutlined color="primary" />
    </Container>
  </TopNavContainer>
)

export default TopNav
