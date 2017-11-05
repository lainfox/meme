import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import {getFirebase } from 'react-redux-firebase'
import { CircularProgress } from 'material-ui/Progress';
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
	  <ul className="list">
	    {memes.map(item => 
	      <Item key={item.id} firebase={firebase} {...item} />
	    )}
	  </ul>
	)
}

List.propTypes = {
  memes: PropTypes.array,
  firebase: PropTypes.object
}

export default List;
