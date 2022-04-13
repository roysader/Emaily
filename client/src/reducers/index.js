import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer, //'auth' is a key, redux form has to asigned to a key//the key will be stored in our "state" object by redux
  form: reduxForm //'form' is a key
});
