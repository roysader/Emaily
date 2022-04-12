// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import * as actions from '../../actions';

    //const navigate = useNavigate();

//const SurveyFormReview = ({ onCancel, formValues, submitSurvey, navigate }) => {
const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}>
          Back
      </button>
      <button
      //onClick={() => submitSurvey(formValues, navigate)}
        onClick={() => submitSurvey(formValues)} //submitSurvey is an action creator
        className="green btn-flat right white-text">
          Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
//state = redux
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values }; //returning the body,emails,subject,title inside component
  //whenever we call or whenever we define map state ot props and pass it to the connect function,
  //whatever we return will show up as props to our components.

}
//we user connect fnct to pull values out of our redux store
export default connect(mapStateToProps, actions)(SurveyFormReview);
//export default connect(mapStateToProps, actions)(navigate(SurveyFormReview)); temporarily remove "navigate" 
//export default navigate(connect(mapStateToProps, actions)(SurveyFormReview)); suggested 
