import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class Upload extends PureComponent {
  static propTypes = {
    onChangeFunc: PropTypes.func.isRequired,
  };

  render() {
    const {onChangeFunc} = this.props;
    return (
      <input type="file" id="uploadFile" accept="image/*"
        onChange={ev => onChangeFunc(ev)}
        onClick={ev => ev.target.value = null} />
    );
  }
}

export default Upload;
