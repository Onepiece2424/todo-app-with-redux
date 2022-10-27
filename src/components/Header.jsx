import React from 'react'

// Material-UI
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: "static",
    padding: "5px",
    width: "100%"
  },
  toolbar: {
    width: "100%"
  }
}));


function Header() {

  const classes = useStyles();

    return (
        <AppBar className={classes.container}>
          <Toolbar className={classes.toolbar}>
            <Typography>ヘッダー</Typography>
            <AccountCircleOutlinedIcon />
          </Toolbar>
        </AppBar>
    )
}

export default Header
