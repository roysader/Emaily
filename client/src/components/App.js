// this is where we set up all of our different routing logic for our application 
// and make sure that different components are visible on the screen.


// eslint-disable-next-line
import React, { Component } from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component{
// life cycle of react
  componentDidMount(){
    this.props.fetchUser();
  }

  // componentDidUpdate() {
  //   console.log('let me know that it updated')
  // }

  // componentWillUnmount() {
  //   console.log('')
  // }


  //"container" adds padding to the sides
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
