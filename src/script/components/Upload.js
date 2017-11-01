import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button';
import {upload} from '../actions/upload';
import './upload.css';

import {push} from 'react-router-redux'


class Upload extends PureComponent {
  static propTypes = {
  };

  triggerClick() {
    this.inputFile.click();
  }

  readImageFromFile(input) {
    if (input.target.files && input.target.files[0]) {
      var FR = new FileReader();
      FR.onload = (ev) => {
        var newImage = new Image();
        newImage.addEventListener("load", () => {
          this.props.dispatch(upload(newImage.src));
          if (window.location.pathname !== '/create') {
            this.props.dispatch(push('/create'))
          }
        });
        newImage.src = ev.target.result;
      };
      FR.readAsDataURL(input.target.files[0]);
    }
  }

  render() {
    const {onChangeFunc} = this.props;
    return (
      <div className="upload-component">
        <Button raised color="accent" onClick={() => this.triggerClick()}>Upload new image</Button>
        <input type="file" ref={input => this.inputFile = input} className="upload-input" accept="image/*"
          onChange={ev => this.readImageFromFile(ev)}
          onClick={ev => ev.target.value = null} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uploadFile: state.upload
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload)
