import {FETCH_USER} from "../action/types";

export default function (state = {}, action) {
  // console.log(action.payload);

  switch (action.type){

    case FETCH_USER:
      return action.payload || false;

    default:
      return state;
  }
}