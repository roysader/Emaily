// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
// eslint-disable-next-line 
import { fieldInputPropTypes } from 'redux-form';
import { reduxForm, Field } from 'redux-form'; // reduxForm helper is what allows reduxForm to communicate with our reduxStore
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';     
import validateEmails from '../../utils/validateEmails';               
import formFields from './formFields';
 
class SurveyForm extends Component {
  //to show label and text input
  renderFields(){ //renderFields is a helper
   return _.map(formFields, ({ label, name }) => {
    return(
          <Field 
          key={name} //we have to make sure we have a key property for react to identify the field components
          component={SurveyField} //rather than attempting to render text input itself, it should rely upon us to do it ourselves
          type="text"   //telling field we're trying to enter some text
          label={label}
          name={name}   //the name we're trying to record
        />
      );
    });
  }
  
  //handleSubmit is fnction provided by reduxForm helper at the buttom, 
  render() {
    return (
      <div>    
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
            <Link to="/surveys" className='red btn-flat white-text'>
            Cancel
            </Link>
            <button type="submit" className='teal btn-flat right white-text'>
              Next
              <i className="material-icons right">done</i> 
            </button>
        </form>
      </div>
    );
  }
}

function validate(values){ //values is an object that contains all the values coming off of our form. values has the name & values of the field. values object has body, emails, subject and title.
  const errors = {};

 errors.recipients = validateEmails(values.recipients || ''); //take the values.recipients (emails) and validate
  
 _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

 

  return errors;
}
 
export default reduxForm({
  validate,
  form: 'surveyForm',   //if the surveyForm is unmounted, then do not destroy any values
  destroyOnUnmount: false
})(SurveyForm);


// Field component is a helper provided by redux-form for rendering any type of traditional
// html form element. eg. text AuthenticatorAssertionResponse, text fieldInputPropTypes, file fieldInputPropTypes, checkboxes, radio buttons, dropdown
// they can all be rendered byt his field component
// Field is like a swiss knife


//props.handleSubmit function is provided automatically by the redux form helper that we weired up at the bottom