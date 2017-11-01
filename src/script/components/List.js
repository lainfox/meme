import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './list.css';

const List = ({list}) => (
  <ul className="list">
    {list.map(item => 
      <Item key={item.id} {...item} />
    )}
  </ul>
)

List.propTypes = {
  list: PropTypes.array.isRequired
}

export default List;
