import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress} from 'material-ui/Progress';
import Adsense from '../components/Adsense';
import Item from './Item';
import './list.css';

const List = ({list}) => {
	if (!list) {
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
		    {list.map(item => 
		      <Item key={item.id} {...item} />
		    )}
		  </ul>
		</div>
	)
}

List.propTypes = {
  list: PropTypes.array,
  firebase: PropTypes.object
}

export default List;
