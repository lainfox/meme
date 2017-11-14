import 'whatwg-fetch';
import imgur, {processStatus, parseJson} from '../../vendor/imgur';

/*
 * action types
 */
export const POST_TO_IMGUR = 'POST_TO_IMGUR'

/*
 * action creators
 */
export const postToImgur = ({image, topText, botText, memeId}, title, fileName, callback) => {
  const response = imgur.post(image, title, fileName).then(res => {
    console.warn(res);
    callback(res, {topText, botText, memeId})
  });

  return {
    type: POST_TO_IMGUR,
    payload: {
      response,
      topText,
      botText,
      memeId
    }
  }
}
