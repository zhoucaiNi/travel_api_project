/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  center: {
    lat: 0,
    lng: 0,
  },
  bounds: {
    sw: { lat: 0, lng: 0 },
    ne: { lat: 0, lng: 0 },
  },
};

const CoordinateReducer = produce((draftState, action = {}) => {
  switch (action.type) {
  case ActionTypes.SET_CENTER:
    draftState.center = action.payload;
    break;
  case ActionTypes.SET_BOUNDS:
    draftState.bounds = action.payload;
    break;
  default:
    console.log(action.type);
    break;
  }
}, initialState);

export default CoordinateReducer;
