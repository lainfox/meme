import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Switch from 'material-ui/Switch';
import './fontSwitcher.css';

const styles = {
  bar: {},
  checked: {
    color: green[500],
    '& + $bar': {
      backgroundColor: green[500],
    },
  },
};

class FontSwtich extends Component {
	static propTypes = {
	  fontFamily: PropTypes.string.isRequired,
	  onChangeFunc: PropTypes.func.isRequired
	};

	state = {
    fontFamily: this.props.fontFamily === 'serif',
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
	        <Switch
	          checked={this.state.fontFamily}
	          onChange={this.handleChange('fontFamily')}
	          aria-label="fontFamily"
	        />
          <span>Serif</span>
      	</label>
      </div>
    );
  }
}

export default withStyles(styles)(FontSwtich);
// export default FontSwtich;