import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toggle from 'material-ui/Toggle';
import './fontSwitcher.css';

class FontSwtich extends Component {
	static propTypes = {
	  fontFamily: PropTypes.string.isRequired,
	  onChangeFunc: PropTypes.func.isRequired
	};

  constructor(props) {
    super(props);
  	this.state = {
      fontFamily: props.fontFamily === 'serif',
    }
  }

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
    this.props.onChangeFunc(checked);
  };

  render() {
    return (
      <div className="font-switcher">
      	<label>
          <span>Sans Serif</span>
	        <Toggle
	          onToggle={this.handleChange('fontFamily')}
	          aria-label="fontFamily"
	        />
          <span>Serif</span>
      	</label>
      </div>
    );
  }
}

export default FontSwtich;
// export default FontSwtich;