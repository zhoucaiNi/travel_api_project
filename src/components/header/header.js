import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import {
  AppBar, Toolbar, Typography, InputBase, Box,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// eslint-disable-next-line import/extensions
import useStyles from './styles.js';

function Header({ onPlaceChanged, onLoad }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Restaurants In Your Area
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new placess
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="feature coming soon.." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
