import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Item from './Item';

class List extends Component {
  static propTypes = {
    list: PropTypes.array,
  };

  render() {
    const {list} = this.props;
    return (
      <ul className="list">
        {list.map(item => 
          <Item key={item.id} {...item} />
        )}
      </ul>
    );
  }
}

export default List;
