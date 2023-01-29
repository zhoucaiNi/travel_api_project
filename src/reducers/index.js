// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';

import CountReducer from './count-reducer';
import ShibaReducer from './shiba-reducer';
import PlacesReducer from './places-reducer';
import CoordinateReducer from './coordinate-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  shiba: ShibaReducer,
  places: PlacesReducer,
  coordinates: CoordinateReducer,
});

export default rootReducer;
