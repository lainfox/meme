import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
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
      <div>
        <h1>{memeTitle}</h1>
        <MemeEditor item={item} uploadFile={uploadFile} ratio={ratio} dispatch={dispatch} />
      </div>
    );
  }
}

export default Create;
