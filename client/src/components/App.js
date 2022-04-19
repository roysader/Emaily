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


// we refactor the app component into a class based component so that we can easily
//call an action creator from one time to attempt to fetch our current user the instant our application
class App extends Component{
// life cycle of react
  componentDidMount(){
    this.props.fetchUser();
  }
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
