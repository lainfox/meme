import React from 'react'
import {Link} from 'react-router-dom'
import Adsense from '../components/Adsense';
import './NotFound.css';

export default () => (
  <div className="container">
    <Adsense client="ca-pub-7679582849263204" slot="9204057594" />

    <div className="not-found">
	    <h1>Oooooops!!</h1>
	    
	    <Link to="/" className="item-anchor">
	      <img src="https://i.imgur.com/8uV3ZDw.jpg" alt="404 Not Found" border="0" />
	      <h2>&gt; Go to Home</h2>
	    </Link>
    </div>
  </div>
)
