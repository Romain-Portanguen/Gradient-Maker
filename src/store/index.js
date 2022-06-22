/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable default-param-last */
/* eslint-disable no-else-return */

import { createStore } from 'redux';

export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
export const CHANGE_DIRECTION_TO_LEFT = 'CHANGE_DIRECTION_TO_LEFT';
export const CHANGE_DIRECTION_TO_RIGHT = 'CHANGE_DIRECTION_TO_RIGHT';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DIRECTION_TO_LEFT:
      return {
        ...state,
        direction: '270deg',
      };
    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        direction: '90deg',
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
