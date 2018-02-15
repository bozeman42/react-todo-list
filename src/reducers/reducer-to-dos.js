import {FETCH_TO_DOS} from '../actions/index';

export default (state = [],action) => {
  switch(action.type) {
    case FETCH_TO_DOS:
      return action.payload;
    default:
      return state;
  }
}