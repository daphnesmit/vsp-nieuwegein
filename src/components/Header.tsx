import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

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
