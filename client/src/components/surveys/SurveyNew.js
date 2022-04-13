// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

      //shows SurveyForm on False
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })} 
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

//
export default reduxForm({
  form: 'surveyForm'
 }) (SurveyNew); //end of SurveyForm //if this component (surveyNew) gets unmounted, dump all values inside//if cancelled is pressed, delete all values


// export default reduxForm({
//   form: 'surveyForm'
// })(SurveyNew);