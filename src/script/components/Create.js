import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Adsense from '../components/Adsense';
import MemeEditor from './MemeEditor';

const CANVAS_WIDTH = 600;

class Create extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const {item, uploadFile, dispatch} = this.props;
    const ratio = CANVAS_WIDTH / item.width;
    const memeTitle = item.id.replace(/\-/g, ' ');

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
