/* eslint-disable import/extensions */
import React, { useEffect, useState, createRef } from 'react';
import {
  CircularProgress, Typography,
} from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';
import useStyles from './style.js';
import PlaceDetails from '../placeDetails/placeDetails';
import { getPlaces } from '../../actions';

function List({
  type, setType, rating, setRating, childClicked,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const bounds = useSelector((state) => state.coordinates.bounds);
  const [elRefs, setElRefs] = useState([]);

  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    dispatch(getPlaces(bounds.sw, bounds.ne));
    if (places.length >= 1) {
      setIsLoading(false);
    }
  }, [bounds]);

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      {/* <Typography variant="h4">Food & Dining around you</Typography> */}
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
          <Typography variant="h6">Restaurants Loading </Typography>
          <Typography variant="subtitle1">(if problem persists, it&apos;s most likely at monthly request limit) </Typography>
        </div>
      ) : (
        <>
          {/* <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type"
              value={type}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl> */}
          <div className={classes.list}>
            {places?.map((place, i) => (
              <div ref={elRefs[i]}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    places: reduxState.places.data,
    coordinates: reduxState.coordinates,
  };
}

export default connect(mapStateToProps, { getPlaces })(List);
