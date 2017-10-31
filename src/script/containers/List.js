import {connect} from "react-redux";
import List from "../components/List";

const getCategoryList = (list, filter) => {
  switch (filter) {
    case 'SHOW_FUNNY':
      return list.filter(item => item.category.contains('funny'))
    case 'SHOW_HI':
      return list.filter(item => item.category.contains('hi'))
    case 'SHOW_ALL':
    default:
      return list
  }
}


const mapStateToProps = state => {
  return {
    list: getCategoryList(state.list, state.category)
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
)(List)
