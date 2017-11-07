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


class MemeEditor extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    uploadFile: PropTypes.string,
    ratio: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.image = new Image();
    this.image.setAttribute("crossOrigin", "anonymous");
    this.image.src = props.item.imgur;
    // this.image.src = props.item.image;

    this.fontFamily = 'Noto Sans KR'; //'gungsuh, 'Droid Serif', serif' // 'Nanum Gothic';
    this.fontSizeArray = [20,25,30,35,40,50,60,70,80,90,100,120,140,160,200,240,300]
    this.topFontIndex = this.bottomFontIndex = this.fontDefaultIndex = 3;
    this.textType = {top: 1, bottom: -1};
    this.waterMarkArea = 40;
    this.canvasMaxWidth = 600;

    this.state = {
      ratio: props.ratio,
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

  _prepareNewImageAndCanvas(newImage) {
    const newRatio = this.canvasMaxWidth / newImage.width;
    this.image = newImage;

    if (this.state.ratio !== newRatio) {
      this.setState({ratio: newRatio});
    }
    
    this._prepareCanvas()
  }

  _prepareImageAndCanvas() {
    if (!this.image.complete) {
      this.image.onload = () => this._prepareCanvas()
    } else {
      this._prepareCanvas()
    }    
  }

  _prepareCanvas() {
    this.setState({loaded: true});
    this.canvas.width = this.image.width;
    this.canvas.height = this.image.height + this.waterMarkArea;
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
    ctx.fillStyle = "#909090";
    ctx.fillRect(0, this.image.height, canvas.width, canvas.height);
    this.buildWaterMark();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.textAlign = "center";
    ctx.font = `700 ${this.fontSizeArray[this.fontDefaultIndex]}px ${this.fontFamily}`;
    ctx.textBaseline = 'alphabetic';
    ctx.lineJoin="miter";
    ctx.miterLimit = 2;
    this.drawCanvas();
  }

  drawCanvas(makeEmptyText) {
    const topText = this.topText.value || (makeEmptyText ? '' : 'Top text');
    const bottomText = this.bottomText.value || (makeEmptyText ? '' : 'Bottom text');

    this.drawImage(this.image);
    this.buildText(topText, this.textType.top);
    this.buildText(bottomText, this.textType.bottom);
  }

  drawImage(image) {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height - this.waterMarkArea);
    // sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  buildText(text, which) {
    const canvas = this.canvas;
    let textArr = text.split(/\r?\n/g);
    if (which === -1) {// Bottom
      textArr.reverse();
    }

    let additional_fontSize;
    switch(textArr.length) {
    case 0:
    case 1:
    case 2:
      additional_fontSize = 0;
      break;
    case 3:
    case 4:
    case 5:
      additional_fontSize = -1;
      break;
    case 6:
    default:
      additional_fontSize = -2;
    }

    const fontSize = (which === -1) ?
      this.fontSizeArray[this._getValidIndex(this.bottomFontIndex + additional_fontSize)] :
      this.fontSizeArray[this._getValidIndex(this.topFontIndex + additional_fontSize)];
    const textList = textArr.reduce((list, item, index) => {
      list[index] = {};
      list[index].text = item;
      list[index].posX = canvas.width / 2;
      list[index].posY = (which === 1) ?
        (index * which * fontSize ) + 15 + fontSize - (fontSize * 0.18): // Top text
        (index * which * fontSize) + canvas.height - this.waterMarkArea - 15 - (fontSize * 0.18); // Bottom text
      return list;
    }, {});

    this._setCanvasFont(fontSize);
    this.drawText(textList);
  }

  _setCanvasFont(fontSize) {
    const canvasContext = this.canvas.getContext('2d');
    canvasContext.font = `700 ${fontSize}px ${this.fontFamily}`;
  }

  drawText(textList) {
    const canvas = this.canvas;
    Object.keys(textList).forEach(index => {
      canvas.getContext('2d').strokeText(
        textList[index].text,
        textList[index].posX,
        textList[index].posY,
        canvas.width - 10
      );
      canvas.getContext('2d').fillText(
        textList[index].text,
        textList[index].posX,
        textList[index].posY,
        canvas.width - 10
      );
    })
  }

  setFontSize(which, index, doDrawCanvas) {
    // this.fontDefaultIndex = this.fontDefaultIndex + size;
    // this.fontSizeArray
    if (which === 'top' || which === 1) {
      this.topFontIndex = this.topFontIndex + index;
      this.topFontIndex = this._getValidIndex(this.topFontIndex);
    } else {
      this.bottomFontIndex = this.bottomFontIndex + index;
      this.bottomFontIndex = this._getValidIndex(this.bottomFontIndex)
    }

    if (doDrawCanvas) {
      this.drawCanvas();
    }
  }

  _getValidIndex(index) {
    if (index < 0) {
      return 0;
    } else if (index > this.fontSizeArray.length -1) {
      return this.fontSizeArray.length -1;
    } else {
      return index;
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
            <div className="field">
              <TextField label="Top Text" inputRef={input => this.topText = input} multiline rows="4" margin="normal"
                onChange={() => this.drawCanvas()} />
              <div className="handler-fontsize">
                <Button dense ref={button => this.topTextDecrease = button} onClick={() => this.setFontSize('top', -1, true)}>
                  <span className="decrease-font-size">A</span>
                </Button>
                <span className="divider"></span>
                <Button dense ref={button => this.topTextIncrease = button} onClick={() => this.setFontSize('top', 1, true)}>
                  <span className="increase-font-size">A</span>
                </Button>
              </div>
            </div>
            <div className="field">
              <TextField label="Bottom Text" inputRef={input => this.bottomText = input} multiline rows="4" margin="normal"
                onChange={() => this.drawCanvas()} />
              <div className="handler-fontsize">
                <Button dense ref={button => this.botTextDecrease = button} onClick={() => this.setFontSize('bot', -1, true)}>
                  <span className="decrease-font-size">A</span>
                </Button>
                <span className="divider"></span>
                <Button dense ref={button => this.botTextIncrease = button} onClick={() => this.setFontSize('bot', 1, true)}>
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
