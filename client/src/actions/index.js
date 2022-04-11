import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {//its a Functional Component  //When the Action Creater is called,
  const res = await axios.get('/api/current_user');   //it will return a function. redux-thunk will see that we returned a fnct and will call it with the Dispatch
       dispatch({ type: FETCH_USER, payload: res.data });
};
  
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
  
//action creator
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
