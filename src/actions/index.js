// keys for actiontypes
import axios from 'axios';

const ROOT_URL = 'http://shibe.online/api/shibes';
const TRAVEL_URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const ActionTypes = {
  FETCH_SHIBA: 'FETCH_SHIBA',
  GET_PLACES: 'GET_PLACES',
  SET_CENTER: 'SET_CENTER',
  SET_BOUNDS: 'SET_BOUNDS',
};

export function fetchShiba() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_SHIBA, payload: response.data });
        console.log('hi');
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function getPlaces(sw, ne) {
  return (dispatch) => {
    axios.get(TRAVEL_URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    })
      .then((response) => {
        dispatch({ type: ActionTypes.GET_PLACES, payload: response.data });
        console.log('hi');
      })
      .catch((error) => {
        console.log('failed');
        dispatch({ type: ActionTypes.ERROR_SET, error });
        console.log('failed');
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function setCenter(data) {
  return {
    type: ActionTypes.SET_CENTER,
    payload: data,
  };
}

export function setBounds(data) {
  return {
    type: ActionTypes.SET_BOUNDS,
    payload: data,
  };
}
