//records whether or not the user is logged in

//surveysReducers purpose is to watch {type} in (actions/index) and return the list of surveys

//when to start the array 'state =[]' would be empty and then will be populated with all the surveys

import { FETCH_SURVEYS } from "../actions/types";

export default function(state = [], action){
  switch(action.type){
    case FETCH_SURVEYS:
      return action.payload;
      default:
        return state;
  }

}