import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MemeEditor from './MemeEditor';

const CANVAS_WIDTH = 600;

class Create extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const {item} = this.props;
    const ratio = CANVAS_WIDTH / item.width;

    return (
      <div>
        <h1>{item.id}</h1>
        <MemeEditor item={item} ratio={ratio} />
      </div>
    );
  }
}

export default Create;
