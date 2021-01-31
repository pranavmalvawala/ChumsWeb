import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import {Routing} from "./Routing";

const App: React.FC = () => {
  return (
    <Router>
      <Routing />
    </Router>
  );
}
export default App;

