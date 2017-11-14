import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Adsense from '../components/Adsense';
import RaisedButton from 'material-ui/RaisedButton';
import copyUrl from 'copy-to-clipboard';
import './SaveMeme.css';

class SaveMeme extends Component {
  static propTypes = {
    imgurDeleteHash: PropTypes.string.isRequired,
    imgurId: PropTypes.string.isRequired,
    imgurLink: PropTypes.string.isRequired,
    memeId: PropTypes.string.isRequired,
    topText: PropTypes.string,
    botText: PropTypes.string,
  };

  copyToClipboard(url) {
    copyUrl(url)
  }

  renderResult() {
    const {imgurDeleteHash, imgurId, imgurLink, imgurHeight, ratio, watermakeArea, memeId, topText, botText} = this.props;
    if (!imgurId) {
      return (
        <div className="uploaded-component">
          No
        </div>
      )
    } 

    const watermarkMargin = -1 * ratio * watermakeArea;

    return (
      <div className="uploaded-component">
        <h2>Save your meme.</h2>

        <p>ID: {imgurId}</p>
        <div className="save-image-area">
          <div className="save-image-cover" style={{marginBottom: `${watermarkMargin}px`}}>
            <img src={imgurLink} alt={`${memeId} - ${imgurId}`} />
          </div>
        </div>

        <h3>Direct image link</h3>
        <div className="copywrapper">
          <input type="text" ref={input => this.imageUrl = input} value={imgurLink} className="input-imageUrl" readOnly onClick={ev => ev.target.select()} />
          <RaisedButton className="button-imageUrl-copy" label="Copy URL" primary={true} onClick={() => this.copyToClipboard(this.imageUrl.value)} />
        </div>

        <h3>How to use: </h3>
        <ul>
          <li>Right mouse click on the images → Select "Download image to disk." or "Save this image as."</li>
          <li>Click "COPY URL" to copy URL → Paste URL in comments.</li>
        </ul>
        <div className="hidden">
          <p>DeleteHash: {imgurDeleteHash}</p>
          <p>{memeId}</p>
          <p>{topText}</p>
          <p>{botText}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <Adsense client="ca-pub-7679582849263204" slot="9204057594" />
        {this.renderResult()}
      </div>
    );
  }
}

export default SaveMeme;
