/**
 * Created by haner on 16/8/15.
 */
import * as types from '../constants/ActionTypes';

export default function demo(state = {}, action) {
  switch (action.type) {
    case types.EXAMPLE:
      return action.demo;
    default:
      return state;
  }
}
