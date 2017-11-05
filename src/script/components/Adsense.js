import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Ads from 'react-adsense';
import './adsense.css';

class Adsense extends Component {
  static propTypes = {
	  client: PropTypes.string.isRequired,
	  slot: PropTypes.string.isRequired
	}

	// This code is ran when the component mounts
  // componentDidMount() {
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // }

  render() {
  	const {client, slot} = this.props;
    return (
      <div className="ads-component">
		  <Ads.Google
		  	client={client}
        slot={slot} />
    </div>
    );
  }
}

export default Adsense




 