import React, {Component} from 'react';
import { Route } from "react-router-dom"
import { Auth, Home } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path={["/", "/login"]} component={Auth}></Route>
        <Route exact path="/im"       component={Home}></Route>
      </div>
    );  
  }
    
}

export default App;
