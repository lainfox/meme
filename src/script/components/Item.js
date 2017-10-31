import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Item = ({ id, image, category }) => (
  <li>
    <Link to={`/create/${id}`}>
      <img src={image} />
    </Link>
  </li>
)

Item.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default Item
