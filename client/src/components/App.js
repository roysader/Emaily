import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard =  <h2>Dashboard</h2>;
const SurveyNew = <h2> The href attribute is required for an anchor to be keyboard accessible.  The href attribute is required for an anchor to be keyboard accessible.  The href attribute is required for an anchor to be keyboard accessible. </h2>;
const Landing = <h2>Landing</h2>;

// const rootElement = document.getElementById("root");

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path="/roy" element={Landing} />
            <Route exact path="/surveys" element={Dashboard } />
            <Route path="/surveys/new" element={SurveyNew} />
            {/* <Route path="/header" element={<Header />} /> */}
            <Route exact path="*" element={<h2>404 NOT FOUND YA HAJJ</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
