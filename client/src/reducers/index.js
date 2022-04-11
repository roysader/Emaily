import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer, //'auth' is a key, redux form has to asigned to a key
  form: reduxForm //'form' is a key
});