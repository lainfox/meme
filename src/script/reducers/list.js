import {
  FETCH_LIST,
  SET_CATEGORY_FILTER,
} from "../actions/list";

const defaultList = [
  {
    "category" : "hi",
    "height" : 443,
    "id" : "Welcome",
    "imgur" : "https://i.imgur.com/7j2woID.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FWelcome.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "yes",
    "height" : 600,
    "id" : "Success-Kid",
    "imgur" : "https://i.imgur.com/vLOVEn0.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FSuccess-Kid.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "yes",
    "height" : 445,
    "id" : "Third-World-Success-Kids",
    "imgur" : "https://i.imgur.com/b6eoJrR.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FThird-World-Success-Kids.jpg?alt=media",
    "width" : 500
  }, {
    "category" : "what",
    "height" : 439,
    "id" : "Awkward-Moment-Seal",
    "imgur" : "https://i.imgur.com/mqikP0e.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FAwkward-Moment-Seal.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "what",
    "height" : 600,
    "id" : "Suspicious-Fry",
    "imgur" : "https://i.imgur.com/d1mg8nE.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FSuspicious-Fry.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "what",
    "height" : 600,
    "id" : "One-Does-Not-Simply",
    "imgur" : "https://i.imgur.com/5fMpArB.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FOne-Does-Not-Simply.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "what",
    "height" : 620,
    "id" : "Dont-Talk-To-Me",
    "imgur" : "https://i.imgur.com/huVesd3.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FDont-Talk-To-Me.jpg?alt=media",
    "width" : 620
  }, {
    "category" : "what",
    "height" : 600,
    "id" : "Painful-guy",
    "imgur" : "https://i.imgur.com/3rbIHKs.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FPainful-Guy.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "what",
    "height" : 680,
    "id" : "Grumpy-Cat",
    "imgur" : "https://i.imgur.com/GqdjQe3.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FGrumpy-Cat.jpg?alt=media",
    "width" : 680
  }, {
    "category" : "what",
    "height" : 600,
    "id" : "Annoying-Facebook-Girl",
    "imgur" : "https://i.imgur.com/4jN7bTY.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FAnnoying-Facebook-Girl.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "what",
    "height" : 750,
    "id" : "So-What",
    "imgur" : "https://i.imgur.com/9DcumK9.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FSo-What.jpg?alt=media",
    "width" : 498
  }, {
    "category" : "happy",
    "height" : 445,
    "id" : "Seal-of-Approval",
    "imgur" : "https://i.imgur.com/NkYwEUk.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FSeal-of-Approval.jpg?alt=media",
    "width" : 600
  }, {
    "category" : "happy",
    "height" : 493,
    "id" : "Mean-Guy",
    "imgur" : "https://i.imgur.com/ObuwKLI.jpg",
    "image" : "https://firebasestorage.googleapis.com/v0/b/meme-653c0.appspot.com/o/memes%2FMean-Guy.jpg?alt=media",
    "width" : 640
  }
];


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
