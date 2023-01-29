/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { setCenter, setBounds } from '../../actions';
import useStyles from './styles.js';

function Map({ setChildClicked }) {
  const center = useSelector((state) => state.coordinates.center);
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      dispatch(setCenter({ lat: latitude, lng: longitude }));
    });
  }, []);

  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_KEY }}
        defaultCenter={coordinates}
        center={center}
        margin={[50, 50, 50, 50]}
        defaultZoom={14}
        onChange={(e) => {
          dispatch(setCenter({ lat: e.center.lat, lng: e.center.lng }));
          dispatch(setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }));
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
              <img
                className={classes.pointer}
                alt="nice"
                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
              />
              <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
            </Paper>

          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    coordinates: reduxState.coordinates,
  };
}

export default connect(mapStateToProps, { setCenter })(Map);
