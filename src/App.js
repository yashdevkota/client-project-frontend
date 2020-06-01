import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ClientsList from "./components/clients-list.component";
import CreateClient from "./components/create-client.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ClientsList} />
        <Route path="/create" component={CreateClient} />
      </div>
    </Router>
  );
}

export default App;
