//SurveyField contains logic to render a single 
//label and text input

import React from 'react';

//reduxForm will automatically watch for changes in the input and will intercept and record the value of that event
//export default props =>{  //was before es6 destructuring 
//input looks into props object and pulls off the input property to a var called input.
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

//reduxForm is used for wiring up all the different event handlers for watching changes to this input