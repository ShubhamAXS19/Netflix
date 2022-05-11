import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import HomeScreen from './HomeScreen';
import './App.css';

function App() {
  return (
    <div className="app">
     <HomeScreen/>
    </div>
  );
}

export default App;
