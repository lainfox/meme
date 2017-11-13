import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import routes from '../config/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Upload from '../components/Upload';
import Adsense from '../components/Adsense';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Link className="logo" to="/">
              <img src={logo} className="app-logo" alt="onMEME logo" ref="logo" />
              <span className="logo-text"><span className="hidden-text">o</span>n MEME</span>
            </Link>
            <Upload ref="uploadFile" />
          </div>
        </header>
        <main>
          {routes}
        </main>
        <footer className="App-footer">
          <Adsense client="ca-pub-7679582849263204" slot="7907287795" />
          <ul className="container footer-link">
            <li className="copyright"><em>on</em>MEME &copy; 2017</li>
          </ul>
        </footer>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App
