import React from 'react';
import {render} from 'react-dom';
import Root from "./script/containers/Root";
import registerServiceWorker from './script/registerServiceWorker';
import GA from "react-ga";
import './script/index.css';

GA.initialize('UA-109352121-1');

render(
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
