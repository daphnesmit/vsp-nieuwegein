import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Home</Typography>
      <Button component={Link} to="/recent/" color="inherit">
        Recent
      </Button>
    </Toolbar>
  </AppBar>
)

export default Header
