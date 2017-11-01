import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './item.css';

const Item = ({ id, image, category }) => (
  <li className="list-item" style={{backgroundImage: `url(${image})`}}>
    <Link to={`/create/${id}`} className="item-anchor">
      <span className="item-id">{id}</span>
    </Link>
  </li>
)

Item.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default Item
