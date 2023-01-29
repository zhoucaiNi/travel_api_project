/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  shiba: null,
};

const ShibaReducer = produce((draftState, action = {}) => {
  switch (action.type) {
  case ActionTypes.FETCH_SHIBA:
    draftState.shiba = action.payload;
    break;
  default:
    console.log(action.type);
    break;
  }
}, initialState);

export default ShibaReducer;
