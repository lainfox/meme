import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux'
import dataURLtoBlob from 'blueimp-canvas-to-blob';
import GA from "react-ga";
import * as slugify  from 'url-slug';
// import {slugify} from 'transliteration';
import shortId from 'shortid';
import {postToImgur} from '../actions/imgur';

import {resetFile} from '../actions/upload';
import FontSwitch from '../components/FontSwitch'
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './MemeEditor.css';

// CORS 에러로 안되는 이미지들
// const imageUrl = 'http://event.leagueoflegends.co.kr/star-guardian-2017/img/star_guardian_miss_fortune_wp.jpg';
// const imageUrl = 'http://www.dogdrip.net/dvs/b/i/17/10/23/78/593/888/142/b3d1fd0208c6aa79ed51862877aa6af7.jpg';

// 얘는 됨
// const imageUrl = 'https://i.imgur.com/AD3MbBi.jpg';

const FONT_FAMILY = 'Noto Sans KR'; //'gungsuh, 'Droid Serif', serif' // 'Nanum Gothic';
const FONT_SIZE_ARRAY = [20,25,30,35,40,50,60,70,80,90,100,120,140,160,200,240,300];
const FONT_SIZE_DEFAULT_INDEX = 3;
const WATER_MARK_AREA = 30;
const CANVAS_MAX_WIDTH = (window.outerWidth < 600) ? window.outerWidth : 600;
const LINE_HEIGHT = 1.2;
const TOP_DEFAULT_TEXT = 'Top text';
const BOT_DEFAULT_TEXT = 'Bottom text';

class MemeEditor extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    uploadFile: PropTypes.string,
    ratio: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.fontFamily = FONT_FAMILY;
    this.fontSizeArray = FONT_SIZE_ARRAY;
    this.topFontIndex = this.bottomFontIndex = this.fontDefaultIndex = FONT_SIZE_DEFAULT_INDEX;
    this.waterMarkArea = WATER_MARK_AREA;
    this.canvasMaxWidth = CANVAS_MAX_WIDTH;

    this.image = new Image();
    this.image.setAttribute("crossOrigin", "anonymous");
    this.image.src = props.item.imgur;
    // this.image.src = props.item.image;

    this.textType = {top: 1, bottom: -1};
    this.canvasHeight = 0;
    this.expandLineHeight = 0;

    this.state = {
      ratio: props.ratio,
      expand: false,
      loaded: false,
      saveAndUploading: false
    }
  }

  componentWillReceiveProps(nextProps) {
    // Block condition
    // if (!this.props.item.image && !nextProps.item.image && !nextProps.uploadFile) {
    //   return false;
    // }

    // History back comes from upload uri
    if (!this.props.item.image && nextProps.item.image) {
      this._prepareNewImageAndCanvas(nextProps.item.imgur)
    } else if (nextProps.uploadFile && !this.props.item.image && !nextProps.item.image) {
      this._prepareNewImageAndCanvas(nextProps.uploadFile)
    }
  }

  componentDidMount() {
    this._prepareImageAndCanvas()
    // this._imageLoadedTrigger()
  }
  componentWillUnmount() {
    this.props.dispatch(resetFile());
  }

  _setRatio() {
    const newRatio = this.canvasMaxWidth / this.image.width;
    if (this.state.ratio !== newRatio) {
      this.setState({ratio: newRatio});
    }
  }

  _prepareNewImageAndCanvas(newImage) {
    this.image.src = newImage;
    this._setupCanvas()
  }

  _prepareImageAndCanvas() {
    if (!this.image.complete) {
      this.image.onload = () => this._setupCanvas()
    } else {
      this._setupCanvas()
    }    
  }

  _setupCanvas() {
    this._setRatio();
    this.setState({loaded: true});
    this.canvas.width = this.image.width;
    this.canvas.height = this.image.height + this.waterMarkArea;
    this.canvasHeight = this.canvas.height; // Use for without expand area - buildCanvasHeight()

    // if (this.state.expand) {
    //   this.canvas.height += this.fontSizeArray[this.fontDefaultIndex] + 30;
    // }
    this.renderCanvas();
  }

  renderCanvas() {
    const canvas = this.canvas;

    try {
      canvas.toDataURL()
    } 
    catch (c) {
      return this.image.src = this.props.item.imgur, false;
    }

    var ctx = canvas.getContext("2d");

    ctx.lineJoin="miter";
    ctx.miterLimit = 2;
    this.drawCanvas();
  }

  // Excute draw canvas with BuilImage & BuildText
  drawCanvas(makeEmptyText) {
    const ctx = this.canvas.getContext('2d');
    const posX = this.canvas.width/2;
    const maxWidth = this.canvas.width - 10;

    const topTextInput = this.topText.value || (makeEmptyText ? '' : TOP_DEFAULT_TEXT);
    const topTextLines = this.wrapText(ctx, topTextInput, maxWidth, 'TOP');
    const bottomTextInput = this.bottomText.value || (makeEmptyText ? '' : BOT_DEFAULT_TEXT);
    const bottomTextLines = this.wrapText(ctx, bottomTextInput, maxWidth, 'BOT');

    const isExpanded = this.state.expand;
    this.buildCanvasHeight(ctx, isExpanded, bottomTextLines);

    this.buildImage(this.image);
    this.drawTextRightNow(ctx, topTextLines, this.canvas.width/2, 14, maxWidth, 'TOP');
    this.drawTextRightNow(ctx, bottomTextLines, this.canvas.width/2, (this.canvas.height - this.waterMarkArea) - 20, maxWidth, 'BOT', isExpanded);
    this.buildWaterMark();
  }

  buildCanvasHeight(ctx, expanded, bottomText) {
    const lineHeight = this.fontSizeArray[this.bottomFontIndex] * LINE_HEIGHT;
    this.canvas.height = (expanded) ?
      this.canvasHeight + (lineHeight * bottomText.length) + 24 :
      this.canvasHeight;

    ctx.fillStyle = "#f1f1f1";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  buildImage(image) {
    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, this.canvas.width, this.image.height);
  }

  _checkExpand(checked) {
    // console.warn(this.expandCheckbox.state.switched, checked)
    this.setState({expand: checked}, () => {
      this.drawCanvas();
    });
  }

  /* Related to TEXT */
  // TODO: 띄워쓰기 없는 경우 metrics 처리 
  wrapText(ctx, text, maxWidth, position) {
    const words = text.replace(/\n/g, " ___CRLF___ ").split(' ');
    const fontSize = (position === 'TOP') ? this.fontSizeArray[this.topFontIndex] : this.fontSizeArray[this.bottomFontIndex];
    this._setCanvasFont(fontSize);

    let lines = [];
    let line = '';

    for (let word of words) {
      let isNewLine = word === '___CRLF___';
      word = isNewLine ? '' : word;
      let currentLine = `${line}${word} `;
      let currentWidth = ctx.measureText(currentLine).width;

      if (currentWidth < maxWidth && !isNewLine) {
        line = currentLine;
      } else {
        lines.push(line);
        line = word + ' ';
      }
    }
    lines.push(line);

    return lines;
  }

  drawTextRightNow(ctx, lines, x, y, maxWidth, position, expanded) {
    const fontSize = (position === 'TOP') ? this.fontSizeArray[this.topFontIndex] : this.fontSizeArray[this.bottomFontIndex];
    const lineHeight = fontSize * LINE_HEIGHT;
    let posY = y;

    this._setCanvasFont(fontSize);

    ctx.lineWidth = 6;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";

    if (position === 'BOT') { // BOT
      if (expanded) {
        ctx.fillStyle = "black";
        ctx.strokeStyle = "transparent";
      }
      posY = posY - (lines.length - 1) * lineHeight;
      ctx.textBaseline = 'alphabetic';
    } else { // TOP
      ctx.textBaseline = 'hanging';
    }

    // Set default text as Alpha
    if (lines[0] === TOP_DEFAULT_TEXT + ' ' && !this.topText.value) {
      ctx.save();
      ctx.globalAlpha = 0.7;
    } else if (lines[0] === BOT_DEFAULT_TEXT + ' ' && !this.bottomText.value) {
      ctx.save();
      ctx.globalAlpha = 0.7;
    }

    for(let line of lines) {
      // add stroke
      ctx.strokeText(line.trim(), x, posY, maxWidth);
      ctx.fillText(line.trim(), x, posY, maxWidth);
      posY += lineHeight;
    }

    ctx.restore();
  }

  _getValidFontSizeIndex(index) {
    if (index < 0) {
      return 0;
    } else if (index > this.fontSizeArray.length -1) {
      return this.fontSizeArray.length -1;
    } else {
      return index;
    }
  }
  
  _setCanvasFont(fontSize) {
    const canvasContext = this.canvas.getContext('2d');
    canvasContext.font = `600 ${fontSize}px ${this.fontFamily}`;
  }

  setFontSize(where, addValue, doDrawCanvas) {
    // this.fontDefaultIndex = this.fontDefaultIndex + size;
    // this.fontSizeArray
    if (where === 'TOP' || where === 1) {
      this.topFontIndex = this.topFontIndex + addValue;
      this.topFontIndex = this._getValidFontSizeIndex(this.topFontIndex);
    } else {
      this.bottomFontIndex = this.bottomFontIndex + addValue;
      this.bottomFontIndex = this._getValidFontSizeIndex(this.bottomFontIndex)
    }

    if (doDrawCanvas) {
      this.drawCanvas();
    }
  }

  _getUrlSlug() {
    const title = this.topText.value || this.bottomText.value;

    if (!title) {
      return shortId.generate()
    }

    return slugify(title);
  }
  
  saveImage(ev) {
    ev.preventDefault();
    
    const title = this._getUrlSlug();
    const fileName = `${title}.jpg`;

    if (!this.topText.value || !this.bottomText.value) {
      this.drawCanvas(true);
    }

    // const blob = dataURLtoBlob(this.canvas.toDataURL('image/jpeg', 1.0));

    // if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
    //   window.navigator.msSaveOrOpenBlob(blob, fileName);
    // } else {
    //   this.saveButton.href = URL.createObjectURL(blob);
    //   this.saveButton.download = fileName;
    // }

    this.submitPostImgurl(this.getBase64Image(this.canvas),
      title,
      fileName
    );

    // postToImgur = ({image, topText, botText, memeId}, callback)

    GA.event({
      category: 'create',
      action: 'save',
      label: this.props.item.id || 'New file'
    });

    if (!this.topText.value || !this.bottomText.value) {
      this.drawCanvas();
    }
  }

  submitPostImgurl(image, title, fileName) {
    // this.props.dispatch(
    //   postToImgur({
    //     image: image,
    //     topText: this.topText.value,
    //     botText: this.bottomText.value,
    //     memeId: this.props.item.id || 'New file',
    //   }));
    // const saveButton = document.querySelector('#saveImage');
    // saveButton.disabled = true;

    this._saveAndUploading(true);

    postToImgur({
      image: image,
      topText: this.topText.value,
      botText: this.bottomText.value,
      memeId: this.props.item.id || 'New file',
    }, title, fileName,
      (response, {topText, botText, memeId}) => {
        this._saveAndUploading(false);
        
        this.props.dispatch(push({
          pathname: '/save-meme',
          state: {
            ratio: this.state.ratio,
            watermakeArea: this.waterMarkArea,
            response, 
            topText, 
            botText, 
            memeId
          }
        }))
        
    });
  }

  _saveAndUploading(isUploading) {
    this.setState({
      saveAndUploading: isUploading
    })
  }

  buildWaterMark() {
    const ctx = this.canvas.getContext('2d');
    const img = document.querySelector('.logo img');

    ctx.lineWidth = 1;
    ctx.fillStyle = "#e4e4e4";
    ctx.strokeStyle = "#909090";
    ctx.fillRect(0, this.canvas.height - this.waterMarkArea, this.canvas.width, this.canvas.height);

    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.drawImage(img, this.canvas.width - 26, this.canvas.height - this.waterMarkArea + 4, 24, 24);
    ctx.restore();

    ctx.fillStyle = "#313131";
    ctx.textAlign = "right";
    ctx.font = `600 14px Noto Sans KR`;
    ctx.fillText(`onMeme.com`, this.canvas.width - 30, this.canvas.height - (this.waterMarkArea/3) + 2);
    ctx.fillStyle = "#111";
    ctx.fillText(`Meme.com`, this.canvas.width - 30, this.canvas.height - (this.waterMarkArea/3) + 2);

    ctx.beginPath();
    if (ctx.setLineDash) ctx.setLineDash([5, 6]);
    ctx.moveTo(0, this.canvas.height - this.waterMarkArea + 1);
    ctx.lineTo(this.canvas.width, this.canvas.height - this.waterMarkArea + 1);
    ctx.stroke();
    if (ctx.setLineDash) ctx.setLineDash([]);
  }

  _setFontFamily(isSerifFont) {
    this.fontFamily = (isSerifFont) ?
      `gungsuh, 'Droid Serif', serif` :
      'Noto Sans KR';
    this.drawCanvas();
  }

  getBase64Image(canvas) {
    // const dataURL = canvas.toDataURL('image/jpeg', 1.0);
    // const base64 = dataURL.replace(/^data:image\/(png|jpeg);base64,/, "");
    // return base64;
    
    return canvas.toDataURL('image/jpeg', 1.0).split(',')[1];
  }
  
  

  render() {
    // const isNew = item.id === 'New MEME';
    // Should be re-render with ratio
    const watermarkMargin = -1 * this.state.ratio * this.waterMarkArea;
    // const watermarkMargin = 1;
    // console.warn(this.state.ratio, this.image.height)

    return (
      <div className="meme-editor">
        <div className="blob-canvas">
          <div className="canvas-area">
            <div className="canvas-cover" style={{marginBottom: `${watermarkMargin}px`}}>
              {!this.state.loaded &&
                <CircularProgress style={{ position: 'absolute', left: '50%', margin: '40px 0 0 -20px', color: 'grey' }} />
              }
              <canvas ref={canvas => this.canvas = canvas} />
            </div>
          </div>
          <div className="canvas-caption">
            <Checkbox
              className="expanded-checkbox"
              label="Expand"
              ref={checkbox => this.expandCheckbox = checkbox}
              onCheck={(ev) => this._checkExpand(ev.target.checked)}
            />
            
            <div className="field field-first">
              <textarea id="topTextField" placeholder="Top Text" ref={input => this.topText = input}
                onChange={input => this.drawCanvas()}></textarea>
              <div className="handler-fontsize">
                <FlatButton ref={button => this.topTextDecrease = button} onClick={() => this.setFontSize('TOP', -1, true)}>
                  <span className="decrease-font-size">A</span>
                </FlatButton>
                <span className="divider"></span>
                <FlatButton ref={button => this.topTextIncrease = button} onClick={() => this.setFontSize('TOP', 1, true)}>
                  <span className="increase-font-size">A</span>
                </FlatButton>
              </div>
            </div>
            <div className="field field-last">
              <textarea id="botTextField" placeholder="Bottom Text" ref={input => this.bottomText = input}
                onChange={input => this.drawCanvas()}></textarea>
              <div className="handler-fontsize">
                <FlatButton ref={button => this.botTextDecrease = button} onClick={() => this.setFontSize('BOT', -1, true)}>
                  <span className="decrease-font-size">A</span>
                </FlatButton>
                <span className="divider"></span>
                <FlatButton ref={button => this.botTextIncrease = button} onClick={() => this.setFontSize('BOT', 1, true)}>
                  <span className="increase-font-size">A</span>
                </FlatButton>
              </div>
            </div>

            <FontSwitch fontFamily="sans-serif" onChangeFunc={isSerif => this._setFontFamily(isSerif)} />
            
            <div className="generate-image">
              {this.state.saveAndUploading &&
                <CircularProgress className="saveImageProgress" style={{ position: 'absolute', zIndex: 2, left: '50%', margin: '16px 0 0 -20px', color: 'grey' }} />
              }
              <RaisedButton label="Save image" secondary={true} disabled={this.state.saveAndUploading} id="saveImage"
                className="full-button" ref={button => this.saveButton = button} onClick={ev => this.saveImage(ev)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeEditor;
