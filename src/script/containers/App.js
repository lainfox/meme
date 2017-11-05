import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import routes from '../config/routes';
import Upload from '../components/Upload';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Link className="logo" to="/">
              <img src={logo} className="app-logo" alt="onMEME logo" />
              <span><span className="hidden-text">o</span>n MEME</span>
            </Link>
            <Upload ref="uploadFile" />
          </div>
        </header>
        <main>
          <div className="container">
          {routes}
          </div>
        </main>
      </div>
    );
  }
}

export default App
