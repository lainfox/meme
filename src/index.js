import React from 'react';
import {render} from 'react-dom';
import Root from "./script/containers/Root";
import registerServiceWorker from './script/registerServiceWorker';
import './script/index.css';

render(
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
