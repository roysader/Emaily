import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


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

  render(){
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/surveys" element = { Dashboard } />
            <Route path="/surveys/new" element = { SurveyNew } />
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
