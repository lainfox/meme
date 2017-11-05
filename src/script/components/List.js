import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './list.css';
import {getFirebase } from 'react-redux-firebase'

const List = ({memes, firebase}) => {
	if (!memes) {
		return (
			<div>Loading...</div>
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
