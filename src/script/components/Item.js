import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './item.css';

const Item = ({firebase, id, image, category }) => {
	// console.warn(firebase.storage())
	// var imageRef = firebase.storage().refFromURL(image).getDownloadURL()
	// console.warn(imageRef)
	const memeTitle = id.replace(/\-/g, ' ');

	return (
	  <li className="list-item" style={{backgroundImage: `url(${image})`}}>
	    <Link to={`/create/${id}`} className="item-anchor">
	      <span className="item-id">{memeTitle}</span>
	    </Link>
	  </li>
	)
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default Item
