import React from 'react';
import PropTypes from 'prop-types';
import {getFirebase } from 'react-redux-firebase'
import { CircularProgress } from 'material-ui/Progress';
import Adsense from '../components/Adsense';
import Item from './Item';
import './list.css';

const List = ({memes, firebase}) => {
	if (!memes) {
		return (
			<div className="container">
				<CircularProgress style={{ display: 'block', margin: '40px auto', color: 'grey' }} />
			</div>
		)
	}

	return (
		<div className="container">
			<Adsense client="ca-pub-7679582849263204" slot="9204057594" />
		  <ul className="list">
		    {memes.map(item => 
		      <Item key={item.id} firebase={firebase} {...item} />
		    )}
		  </ul>
		</div>
	)
}

List.propTypes = {
  memes: PropTypes.array,
  firebase: PropTypes.object
}

export default List;
