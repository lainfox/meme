import {connect} from "react-redux";
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'
import List from "../components/List";

const wrappedList = firebaseConnect([
  '/memes'
])(List)

export default connect(
  ({firebase}) => ({
    memes: dataToJS(firebase, 'memes'),
  })
)(wrappedList)

// const getCategoryList = (list, filter) => {
//   switch (filter) {
//     case 'SHOW_FUNNY':
//       return list.filter(item => item.category.contains('funny'))
//     case 'SHOW_HI':
//       return list.filter(item => item.category.contains('hi'))
//     case 'SHOW_ALL':
//     default:
//       return list
//   }
// }


// const mapStateToProps = state => {
//   return {
//     list: getCategoryList(state.list, state.category),
//     firebase: state.firebase
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch: dispatch
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(List)
