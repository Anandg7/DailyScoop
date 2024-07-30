import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App=()=> {
   const apiKey=process.env.REACT_APP_NEWS_API;
  const[progress,setProgress]=useState(0);
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/" ><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} category="general"/></Route>
          <Route exact path="/bussiness"><News setProgress={setProgress} apiKey={apiKey} key="bussiness" pageSize={6} category="bussiness"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} category="health"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} category="sports"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science"pageSize={6} category="science"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} category="general"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
}

export default App

