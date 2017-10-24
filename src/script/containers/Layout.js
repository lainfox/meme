import React, {Component} from "react";
import PropTypes from 'prop-types';

class Layout extends Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.node.isRequired,
  }

  render() {
    const {location} = this.props;

    return (
      <div className="layout">
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
