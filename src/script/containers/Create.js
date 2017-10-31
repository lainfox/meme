import {connect} from "react-redux";
import Create from "../components/Create";

const mapStateToProps = (state, ownProps) => {
  const memeId = ownProps.match.params.memeId;
  const item = state.list.filter(item => item.id === memeId)[0] || {
    id: 'New MEME',
    image: '/media/new.jpg',
    width: 600,
    height: 600,
    category: ''
  };
  
  return {
    item
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
)(Create)
