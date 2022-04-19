//Records a list of all surveys user has created


// eslint-disable-next-line
import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) { 
    case FETCH_USER:
      return action.payload || false; //action.payload is the "user model"
    default:
      return state;
  }
}
//it will only return one of three values: null, false or the "user model"