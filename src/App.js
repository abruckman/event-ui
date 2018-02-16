import React, { Component } from 'react';
import './App.css';
import Index from './Events'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Index />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
