import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {//its a Functional Component  //When the Action Creater is called,
  const res = await axios.get('/api/current_user');   //it will return a function. redux-thunk will see that we returned a fnct and will call it with the Dispatch
       dispatch({ type: FETCH_USER, payload: res.data });
};
  //in surveyRoutes, "res.send(user)" sends back the updated user model, the header can update and reflect the new number of credits
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
  
//action creator
//export const submitSurvey = (values, navigate) => async (dispatch) => {  
//this is a post request and then redirect to '/surveys'

export const submitSurvey = (values) => async dispatch => {  
  const res = await axios.post('/api/surveys', values);   //value; data we want to send to the back end, so we pass along the value object
 // navigate('/surveys');   
  dispatch({ type: FETCH_USER, payload: res.data });

  //we're gonna take the "res" (response) and Dispatch an action of type FETCH_USER to update our local User Model
};



