import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/bussiness"
              element={
                <News
                  key="bussiness"
                  pageSize={6}
                  country="in"
                  category="bussiness"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="gentertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
