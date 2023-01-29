/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  places: [],
};

const PlacesReducer = produce((draftState, action = {}) => {
  switch (action.type) {
  case ActionTypes.GET_PLACES:
    draftState.places = action.payload.data;
    break;
  default:
    console.log(action.type);
    break;
  }
}, initialState);

export default PlacesReducer;
