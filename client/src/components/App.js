// this is where we set up all of our different routing logic for our application 
// and make sure that different components are visible on the screen.


// eslint-disable-next-line
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  componentDidUpdate() {
    console.log('let me know that it updated')
  }

  componentWillUnmount() {
    console.log('')
  }


  //"container" adds padding to the sides
  render(){
  return (
    <div className="container"> 
      <BrowserRouter>
        <div>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/surveys" element = { <Dashboard/> } />
            <Route path="/surveys/new" element = { <SurveyNew /> } />
            {/* <Route path="/header" element = {<Header />} /> */}
            { <Route exact path="*" element = {<h2>404 NOT FOUND!</h2>} /> }
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default connect(null, actions)(App);
