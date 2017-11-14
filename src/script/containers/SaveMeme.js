import {connect} from "react-redux";
import SaveMeme from "../components/SaveMeme";

const mapStateToProps = (state, ownProps) => {
  const payload = ownProps;
 //  {"pathname":"/save-meme","state":{"res":{"data":{"id":"jpeN4we","title":null,"description":null,"datetime":1510639869,"type":"image/jpeg","animated":false,"width":625,"height":655,"size":30174,"views":0,"bandwidth":0,"vote":null,"favorite":false,"nsfw":null,"section":null,"account_url":null,"account_id":0,"is_ad":false,"in_most_viral":false,"has_sound":false,"tags":[],"ad_type":0,"ad_url":"","in_gallery":false,"deletehash":"vJgCfW9Fea2P55X","name":"","link":"https://i.imgur.com/jpeN4we.jpg"},"success":true,"status":200},"topText":"","botText":"","memeId":"Annoying-Facebook-Girl"},"search":"","hash":"","key":"trd1ys"}
  const instanceProps = ownProps.location.state;

  if (!instanceProps) return {}

  return {
    imgurDeleteHash: instanceProps.response.data.deletehash,
    imgurId: instanceProps.response.data.id,
    imgurLink: instanceProps.response.data.link,
    imgurHeight: instanceProps.response.data.height,
    ratio: instanceProps.ratio,
    watermakeArea: instanceProps.watermakeArea,
    topText: instanceProps.topText,
    botText: instanceProps.botText,
    memeId: instanceProps.memeId,
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
)(SaveMeme)

