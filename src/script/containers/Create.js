import {connect} from "react-redux";
import Create from "../components/Create";

const mapStateToProps = (state, ownProps) => {
  const memeId = ownProps.match.params.memeId;
  const item = state.list.filter(item => item.id === memeId)[0] || {
    id: 'New MEME',
    image: '',
    width: 600,
    height: 600,
    category: ''
  };
  
  return {
    uploadFile: state.upload.file,
    location: ownProps.match.url,
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
