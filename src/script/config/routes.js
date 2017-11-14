import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router-dom";
import List from '../containers/List'
import About from '../containers/About'
import Create from '../containers/Create';
import SaveMeme from '../containers/SaveMeme'

import MemeEditor from '../components/MemeEditor';

export default (
  <Switch>
    <Route exact path='/' component={List}/>

    <Route exact path='/test' component={MemeEditor}/>

    <Route exact path='/create' component={Create}/>
    <Route path='/create/:memeId' component={Create}/>
    <Route path='/about-us' component={About}/>
    <Route path='/save-meme' component={SaveMeme}/>
    {/*<Route path="*" status={404} component={NotFound}/>*/}
  </Switch>
)
