import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux'
import dataURLtoBlob from 'blueimp-canvas-to-blob';
import {resetFile} from '../actions/upload';
import FontSwitch from '../components/FontSwitch'
import {CircularProgress} from 'material-ui/Progress';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './MemeEditor.css';

// CORS 에러로 안되는 이미지들
// const imageUrl = 'http://event.leagueoflegends.co.kr/star-guardian-2017/img/star_guardian_miss_fortune_wp.jpg';
// const imageUrl = 'http://www.dogdrip.net/dvs/b/i/17/10/23/78/593/888/142/b3d1fd0208c6aa79ed51862877aa6af7.jpg';

// 얘는 됨
// const imageUrl = 'https://i.imgur.com/AD3MbBi.jpg';

const FONT_FAMILY = 'Noto Sans KR'; //'gungsuh, 'Droid Serif', serif' // 'Nanum Gothic';
const FONT_SIZE_ARRAY = [20,25,30,35,40,50,60,70,80,90,100,120,140,160,200,240,300];
const FONT_SIZE_DEFAULT_INDEX = 3;
const WATER_MARK_AREA = 40;
const CANVAS_MAX_WIDTH = (window.outerWidth < 600) ? window.outerWidth : 600;
const LINE_HEIGHT = 1.2;

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
    this.expandLineHeight = 0;

    this.state = {
      ratio: props.ratio,
      expand: true,
      loaded: false
    }
  }

  componentWillReceiveProps(nextProps) {
    // Block condition
    // if (!this.props.item.image && !nextProps.item.image && !nextProps.uploadFile) {
    //   return false;
    // }

    // History back comes from upload uri
    if (!this.props.item.image && nextProps.item.image) {
      this.image.src = nextProps.item.imgur
      this._prepareNewImageAndCanvas(this.image)
    } else if (nextProps.uploadFile && !this.props.item.image && !nextProps.item.image) {
      this.image.src = nextProps.uploadFile;
      this._prepareNewImageAndCanvas(this.image)
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
    this.image = newImage;
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

    // WaterMark Area 
    this.buildWaterMark();

    // ctx.fillStyle = "white";
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 6;
    // ctx.textAlign = "center";
    // ctx.font = `600 ${this.fontSizeArray[this.fontDefaultIndex]}px ${this.fontFamily}`;
    // ctx.textBaseline = 'alphabetic';
    ctx.lineJoin="miter";
    ctx.miterLimit = 2;
    this.drawCanvas();
  }

  // Excute draw canvas with BuilImage & BuildText
  drawCanvas(makeEmptyText) {
    const ctx = this.canvas.getContext('2d');
    this.buildImage(this.image);

    const topTextInput = this.topText.value || (makeEmptyText ? '' : 'Top text');
    const bottomTextInput = this.bottomText.value || (makeEmptyText ? '' : 'Bottom text');

    this.wrapText(ctx, topTextInput, this.canvas.width/2, 14, this.canvas.width - 10, 'TOP');
    this.wrapText(ctx, bottomTextInput, this.canvas.width/2, (this.canvas.height - this.waterMarkArea) - 20, this.canvas.width - 10, 'BOT');
    this.buildWaterMark();
  }

  buildImage(image) {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    
    // 600, 488
    // ctx.drawImage(image, 0, 0, canvas.width, canvas.height - this.waterMarkArea);
    ctx.drawImage(image, 0, 0, canvas.width, this.image.height * this.state.ratio);
    // sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  /* Related to TEXT */

  // TODO: 띄워쓰기 없는 경우 metrics 처리 
  wrapText(ctx, text, x, y, maxWidth, position) {
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

    this.drawTextRightNow(ctx, lines, x, y, maxWidth, position);
  }

  drawTextRightNow(ctx, lines, x, y, maxWidth, position) {
    const fontSize = (position === 'TOP') ? this.fontSizeArray[this.topFontIndex] : this.fontSizeArray[this.bottomFontIndex];
    const lineHeight = fontSize * LINE_HEIGHT;

    this._setCanvasFont(fontSize);

    ctx.textBaseline = (position === 'TOP') ? 'hanging' : 'alphabetic';
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.textAlign = "center";
    
    // const fontSize = parseFloat(ctx.font);
    let posY = y;

    if (position === 'BOT') {
      posY = posY - (lines.length - 1) * lineHeight;
    }

    for(let line of lines) {
      // add stroke
      ctx.strokeText(line.trim(), x, posY, maxWidth);
      ctx.fillText(line.trim(), x, posY, maxWidth);
      posY += lineHeight;
    }
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

  saveImage(ev) {
    const fileName = this.props.item.id;
    
    if (!this.topText.value || !this.bottomText.value) {
      this.drawCanvas(true);
    }

    const blob = dataURLtoBlob(this.canvas.toDataURL('image/jpeg'));
    this.saveButton.href = URL.createObjectURL(blob);
    this.saveButton.download = fileName;

    if (!this.topText.value || !this.bottomText.value) {
      this.drawCanvas();
    }
  }

  buildWaterMark() {
    const ctx = this.canvas.getContext('2d');
    const img = document.querySelector('.logo img');

    ctx.lineWidth = 1;
    ctx.fillStyle = "#909090";
    ctx.fillRect(0, this.image.height, this.canvas.width, this.canvas.height);

    ctx.drawImage(img, this.canvas.width - 40, this.canvas.height - this.waterMarkArea + 5, 30, 30);
    ctx.fillStyle = "#313131";
    ctx.textAlign = "right";
    ctx.font = `600 14px Noto Sans KR`;
    ctx.fillText(`onMeme.com`, this.canvas.width - 50, this.canvas.height - (this.waterMarkArea/3) );
    ctx.fillStyle = "#111";
    ctx.fillText(`Meme.com`, this.canvas.width - 50, this.canvas.height - (this.waterMarkArea/3) );

    ctx.beginPath();
    ctx.setLineDash([5, 10]);
    ctx.moveTo(0, this.canvas.height - this.waterMarkArea + 1);
    ctx.lineTo(this.canvas.width, this.canvas.height - this.waterMarkArea + 1);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  _setFontFamily(isSerifFont) {
    this.fontFamily = (isSerifFont) ?
      `gungsuh, 'Droid Serif', serif` :
      'Noto Sans KR';
    this.drawCanvas();
  }

  // getBase64Image(img) {
  //   const canvas = this.canvas;

  //   // Get the data-URL formatted image
  //   // Firefox supports PNG and JPEG. You could check img.src to
  //   // guess the original format, but be aware the using "image/jpg"
  //   // will re-encode the image.
  //   const dataURL = canvas.toDataURL();

  //   const base64 = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  //   console.warn(base64);
  //   return base64;
  // }
  // 
  // 

  render() {
    // const isNew = item.id === 'New MEME';
    // Should be re-render with ratio
    const watermarkMargin = -1 * this.state.ratio * this.waterMarkArea;
    // const watermarkMargin = 1;

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
            <FontSwitch fontFamily="sans-serif" onChangeFunc={isSerif => this._setFontFamily(isSerif)} />
            <div className="field field-first">
              <TextField label="Top Text" inputRef={input => this.topText = input} multiline rows="4" margin="normal"
                onChange={input => this.drawCanvas()} />
              <div className="handler-fontsize">
                <Button dense ref={button => this.topTextDecrease = button} onClick={() => this.setFontSize('TOP', -1, true)}>
                  <span className="decrease-font-size">A</span>
                </Button>
                <span className="divider"></span>
                <Button dense ref={button => this.topTextIncrease = button} onClick={() => this.setFontSize('TOP', 1, true)}>
                  <span className="increase-font-size">A</span>
                </Button>
              </div>
            </div>
            <div className="field field-last">
              <TextField label="Bottom Text" inputRef={input => this.bottomText = input} multiline rows="4" margin="normal"
                onChange={input => this.drawCanvas()} />
              <div className="handler-fontsize">
                <Button dense ref={button => this.botTextDecrease = button} onClick={() => this.setFontSize('BOT', -1, true)}>
                  <span className="decrease-font-size">A</span>
                </Button>
                <span className="divider"></span>
                <Button dense ref={button => this.botTextIncrease = button} onClick={() => this.setFontSize('BOT', 1, true)}>
                  <span className="increase-font-size">A</span>
                </Button>
              </div>
            </div>
            <div className="generate-image">
              <a href="#" ref={button => this.saveButton = button} onClick={ev => this.saveImage(ev)}>
                <Button raised color="accent" className="full-button">
                Save image
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeEditor;
