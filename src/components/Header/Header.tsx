// import Button from '@material-ui/core/Button'
// import { Link } from 'gatsby'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import { Link } from 'gatsby'
import React from 'react'
import Navbar from './Navbar'
import TopNav from './TopNav'
import BottomNav from './BottomNav'


const Header: React.FC = () => (
  <Navbar>
    <TopNav/>
    <BottomNav/>
  </Navbar>
)

export default Header
