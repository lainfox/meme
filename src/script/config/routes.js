import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router-dom";
import Home from '../containers/Home'
import About from '../containers/About'
import MemeEditor from '../containers/MemeEditor';

/*
<Route component={Layout}>
  <IndexRoute component={HomeContainer}/>
  <Route path="skins">
    <IndexRoute component={SkinsContainer}/>
    <Route path=":itemId" component={ItemDetailContainer}/>
  </Route>
</Route>
<Route path="*" status={404} component={NotFound} page="static-information"/>



<Route path="/about" component={About}/>
<Route path="/topics" component={Topics}/>
 */
export default (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      {/* <Route exact path='/create' component={MemeEditor}/> */}
      <Route path='/create/:memeId' component={MemeEditor}/>
      <Route path='/about-us' component={About}/>
    </Switch>
  </main>
)
