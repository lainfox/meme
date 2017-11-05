import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Adsense from '../components/Adsense';
import MemeEditor from './MemeEditor';

const CANVAS_WIDTH = 600;

class Create extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    uploadFile: PropTypes.string,
    location: PropTypes.string,
  };

  shouldComponentUpdate(nextProps, nextState){
    if (this.props.location !== nextProps.location) {
      return true
    } else {
      return false
    }
  }

  render() {
    const {item, uploadFile, location, dispatch} = this.props;
    const ratio = CANVAS_WIDTH / item.width;
    const memeTitle = item.id.replace(/-/g, ' ');

    return (
      <div className="container">
        <Adsense client="ca-pub-7679582849263204" slot="9204057594" />
        <div className="create-component">
          <h1>{memeTitle}</h1>
          <MemeEditor item={item} uploadFile={uploadFile} ratio={ratio} dispatch={dispatch} />
        </div>
      </div>
    );
  }
}

export default Create;
