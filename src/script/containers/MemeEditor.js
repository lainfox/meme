import React, { Component } from 'react';
import loadImage from 'blueimp-load-image';
import './MemeEditor.css';

class MemeEditor extends Component {
  constructor(props) {
    super(props);
    this.image = new Image;
    this.fontSizeArray = [20,30,40,50,60,70,80,90]
    this.topFontIndex = this.bottomFontIndex = this.fontDefaultIndex = 3;
    this.currentTopText = 'Top text';
    this.currentBottomText = 'Bottom text';
    this.textType = {top: 1, bottom: -1}
  }

  componentDidMount() {
    if (!this.image.complete) {
      this.image.onload = this.renderCanvasWithImage.bind(this);
    } else {
      this.renderCanvasWithImage()
    }

  }

  renderCanvasWithImage() {
    const canvas = this.refs.canvas;
    canvas.width = this.image.width;
    canvas.height = this.image.height;

    try {
      canvas.toDataURL()
    } 
    catch (c) {
      return this.image.src = document.location.origin + "/ie/:id".replace(":id", this.model.get("id")), !1
    }

    var d = canvas.getContext("2d");
    d.fillStyle = "white",
    d.strokeStyle = "black",
    d.lineWidth = 6,
    d.textAlign = "center";
    d.font = `700 ${this.fontSizeArray[this.fontDefaultIndex]}px Nanum Gothic`;
    d.textBaseline = 'hanging';
    d.lineJoin="miter";
    d.miterLimit = 2,
    this.drawCanvas(!0)
  }

  drawCanvas(a) {
    this.drawImage();
    this.buildText(this.currentTopText, this.textType.top);
    this.buildText(this.currentBottomText, this.textType.bottom);
  }

  drawImage() {
    var canvas = this.refs.canvas;
    canvas.getContext('2d').drawImage(this.image, 0, 0, canvas.width, canvas.height);
  }

  topTextChanged(a) {
      this.currentTopText = this.refs.topText.value;
      this.drawCanvas(!0)
  }
  bottomTextChanged(a) {
      this.currentBottomText = this.refs.bottomText.value;
      this.drawCanvas(!0)
  }

  buildText(text, which) {
    const canvas = this.refs.canvas;
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

    console.log(which, fontSize)

    const lineHeight = 1.2;

    const textList = textArr.reduce((list, item, index) => {
      list[index] = {};
      list[index].text = item;
      list[index].posX = canvas.width / 2;
      list[index].posY = (which === 1) ?
        (index * which * fontSize * lineHeight) + 20: // Top text
        (index * which * fontSize * lineHeight) + canvas.height - fontSize - 10; // Bottom text
      return list;
    }, {});

    this._setCanvasFont(fontSize);
    this.drawText(textList, which);
  }

  _setCanvasFont(fontSize, which) {
    const canvasContext = this.refs.canvas.getContext('2d');
    canvasContext.font = `700 ${fontSize}px Nanum Gothic`;
  }

  drawText(textList, which) {
    const canvas = this.refs.canvas;
    

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
    this.fontSizeArray
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

  getBase64Image(img) {
    const canvas = this.refs.canvas;

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    const dataURL = canvas.toDataURL();

    const base64 = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    console.warn(base64);
    return base64;
  }

  render() {
    // CORS 에러로 안되는 이미지들
    // const imageUrl = 'http://event.leagueoflegends.co.kr/star-guardian-2017/img/star_guardian_miss_fortune_wp.jpg';
    // const imageUrl = 'http://www.dogdrip.net/dvs/b/i/17/10/23/78/593/888/142/b3d1fd0208c6aa79ed51862877aa6af7.jpg';

    // 얘는 됨
    // const imageUrl = 'https://i.imgur.com/AD3MbBi.jpg';

    // 로컬 이미지
    // const imageUrl = '/media/welcome.png';
    const imageUrl = '/media/test-image.jpg';

    this.image.src = imageUrl;
    this.image.setAttribute("crossOrigin", "anonymous");

    return (
      <div className="blob-canvas">
        <div className="canvas-area">
          <canvas ref="canvas" />
        </div>
        <div className="canvas-caption">
          <div className="field">
            <textarea type="text" ref="topText" placeholder="Top Text" onChange={this.topTextChanged.bind(this)}></textarea>
            <ul className="segment-control font-size">
              <li><button ref={button => this.topTextDecrease = button} onClick={() => this.setFontSize('top', -1, true)}><span className="decrease-font-size">Decrease font size</span></button></li>
              <li className="seperator"><span></span></li>
              <li><button ref={button => this.topTextIncrease = button} onClick={() => this.setFontSize('top', 1, true)}><span className="increase-font-size">Increase font size</span></button></li>
            </ul>
          </div>
          <div className="field">
            <textarea type="text" ref="bottomText" placeholder="Bottom text" onChange={this.bottomTextChanged.bind(this)}></textarea>
            <ul className="segment-control font-size">
              <li><button ref={button => this.botTextDecrease = button} onClick={() => this.setFontSize('bot', -1, true)}><span className="decrease-font-size">Decrease font size</span></button></li>
              <li className="seperator"><span></span></li>
              <li><button ref={button => this.botTextIncrease = button} onClick={() => this.setFontSize('bot', 1, true)}><span className="increase-font-size">Increase font size</span></button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeEditor;
