import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Switch from 'material-ui/Switch';

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
    const {fontFamily} = this.props;

    return (
      <div>
      	<label>
	      	<span>sans serif</span>
	        <Switch
	          checked={this.state.fontFamily}
	          onChange={this.handleChange('fontFamily')}
	          aria-label="fontFamily"
	        />
	      	<span>serif</span>
      	</label>
      </div>
    );
  }
}

export default withStyles(styles)(FontSwtich);
// export default FontSwtich;