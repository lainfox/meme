// 더이상 이녀석 안쓸거 같아. firebase database 로 대체하고 있으니
// 나중에 생각해 그대로 놔둘지 말지 생각해보자.


import {
  FETCH_LIST,
  SET_CATEGORY_FILTER,
} from "../actions/list";

const defaultList = [
  {
    id: 'Welcome',
    image: '/media/Welcome.jpg',
    width: 600,
    height: 443,
    category: 'hi'
  },
  {
    id: 'Success-Kid',
    image: '/media/Success-Kid.jpg',
    width: 600,
    height: 600,
    category: 'yes'
  },
  {
    id: 'Third-World-Success-Kids',
    image: '/media/Third-World-Success-Kids.jpg',
    width: 500,
    height: 445,
    category: 'yes'
  },
  {
    id: 'Awkward-Moment-Seal',
    image: '/media/Awkward-Moment-Seal.jpg',
    width: 600,
    height: 439,
    category: 'what'
  },
  {
    id: 'Suspicious-Fry',
    image: '/media/Suspicious-Fry.jpg',
    width: 600,
    height: 600,
    category: 'what'
  },
  {
    id: 'One-Does-Not-Simply',
    image: '/media/One-Does-Not-Simply.jpg',
    width: 600,
    height: 600,
    category: 'what'
  },
  {
    id: 'Dont-Talk-To-Me',
    image: '/media/Dont-Talk-To-Me.jpg',
    width: 620,
    height: 620,
    category: 'what'
  },
  {
    id: 'Painful-guy',
    image: '/media/Painful-Guy.jpg',
    width: 600,
    height: 600,
    category: 'what'
  },
  {
    id: 'Annoying-Facebook-Girl',
    image: '/media/Annoying-Facebook-Girl.jpg',
    width: 600,
    height: 600,
    category: 'what'
  },
  {
    id: 'Seal-of-Approval',
    image: '/media/Seal-of-Approval.jpg',
    width: 600,
    height: 445,
    category: 'happy'
  }
]

export const list = (state = defaultList, action) => {
  switch (action.type) {
  case FETCH_LIST:
    return [
      ...state,
      action
    ]
  default:
    return state
  }
}

export const categoryFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.filter
    default:
      return state
  }
}
