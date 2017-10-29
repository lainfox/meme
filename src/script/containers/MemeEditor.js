import React, { Component } from 'react';
import dataURLtoBlob from 'blueimp-canvas-to-blob';
import FontSwitch from '../components/FontSwitch'
import Button from 'material-ui/Button';
import './MemeEditor.css';

class MemeEditor extends Component {
  constructor(props) {
    super(props);
    this.image = new Image;
    this.fontFamily = 'Noto Sans KR'; //'gungsuh, 'Droid Serif', serif' // 'Nanum Gothic';
    this.fontSizeArray = [20,25,30,35,40,50,60,70,80,90,100,120,140,160,200,240,300]
    this.topFontIndex = this.bottomFontIndex = this.fontDefaultIndex = 3;
    this.textType = {top: 1, bottom: -1};
    this.waterMarkArea = 40;
  }

  componentDidMount() {
    if (!this.image.complete) {
      this.image.onload = this.renderCanvasWithImage.bind(this);
    } else {
      this.renderCanvasWithImage()
    }
  }

  renderCanvasWithImage(image) {
    const canvas = this.canvas;
    if (image && image.complete && image.width) {
      this.image = image;
    }

    canvas.width = this.image.width;
    canvas.height = this.image.height + this.waterMarkArea;

    try {
      canvas.toDataURL()
    } 
    catch (c) {
      return this.image.src = document.location.origin + "/ie/:id".replace(":id", this.model.get("id")), !1
    }


    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, this.image.height, canvas.width, this.image.height + this.waterMarkArea);
    this.buildWaterMark();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.textAlign = "center";
    // ctx.font = `700 ${this.fontSizeArray[this.fontDefaultIndex]}px 'Noto Sans KR'`;
    ctx.font = `700 ${this.fontSizeArray[this.fontDefaultIndex]}px ${this.fontFamily}`;
    ctx.textBaseline = 'alphabetic';
    ctx.lineJoin="miter";
    ctx.miterLimit = 2;
    this.drawCanvas();
  }

  drawCanvas(makeEmptyText) {
    const topText = this.refs.topText.value || (makeEmptyText ? '' : 'Top text');
    const bottomText = this.refs.bottomText.value || (makeEmptyText ? '' : 'Bottom text');

    this.drawImage(this.image);
    this.buildText(topText, this.textType.top);
    this.buildText(bottomText, this.textType.bottom);
  }

  drawImage(image) {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, this.image.height);
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
    const lineHeight = 1.2;
    const textList = textArr.reduce((list, item, index) => {
      list[index] = {};
      list[index].text = item;
      list[index].posX = canvas.width / 2;
      list[index].posY = (which === 1) ?
        (index * which * fontSize * lineHeight) + 20: // Top text
        (index * which * fontSize * lineHeight) + canvas.height - fontSize - this.waterMarkArea - 10; // Bottom text
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
    const canvas = this.canvas;

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    const dataURL = canvas.toDataURL();

    const base64 = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    console.warn(base64);
    return base64;
  }

  readImageFromFile(input) {
    if (input.target.files && input.target.files[0]) {
      var FR = new FileReader();
      FR.onload = (ev) => {
        var img = new Image();
        img.addEventListener("load", () => {
          this.renderCanvasWithImage(img)
        });
        img.src = ev.target.result;
      };
      FR.readAsDataURL(input.target.files[0]);
    }
  }

  saveImage(ev) {
    if (!this.refs.topText.value || !this.refs.bottomText.value) {
      this.drawCanvas(true);
    }

    const blob = dataURLtoBlob(this.canvas.toDataURL('image/jpeg'));
    this.saveButton.href = URL.createObjectURL(blob);
    this.saveButton.download = "myDomain.png";

    if (!this.refs.topText.value || !this.refs.bottomText.value) {
      this.drawCanvas();
    }
  }

  buildWaterMark() {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = "#ccc";
    ctx.textAlign = "right";
    ctx.font = `400 18px Arial, Impact`;
    ctx.fillText(document.location.hostname, this.canvas.width - 10, this.canvas.height - (this.waterMarkArea/3) );
  }

  _setFontFamily(isSerifFont) {
    this.fontFamily = (isSerifFont) ?
      `gungsuh, 'Droid Serif', serif` :
      'Noto Sans KR';
    this.drawCanvas();
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
      <div className="meme-editor">
        <div className="upload-file-area">
          <input type="file" id="uploadFile" ref="uploadFile" accept="image/*"
          onChange={ev => this.readImageFromFile(ev)}
          onClick={ev => ev.target.value = null} />
        </div>
        <div className="blob-canvas">
          <div className="canvas-area">
            <div className="canvas-cover">
              <canvas ref={canvas => this.canvas = canvas} />
            </div>
          </div>
          <div className="canvas-caption">
            <FontSwitch fontFamily="sans-serif" onChangeFunc={isSerif => this._setFontFamily(isSerif)} />
            <div className="field">
              <textarea type="text" ref="topText" placeholder="Top Text" onChange={() => this.drawCanvas()}></textarea>
              <ul className="segment-control font-size">
                <li><Button ref={button => this.topTextDecrease = button} onClick={() => this.setFontSize('top', -1, true)}><span className="decrease-font-size">Decrease font size</span></Button></li>
                <li className="seperator"><span></span></li>
                <li><Button ref={button => this.topTextIncrease = button} onClick={() => this.setFontSize('top', 1, true)}><span className="increase-font-size">Increase font size</span></Button></li>
              </ul>
            </div>
            <div className="field">
              <textarea type="text" ref="bottomText" placeholder="Bottom text" onChange={() => this.drawCanvas()}></textarea>
              <ul className="segment-control font-size">
                <li><Button ref={button => this.botTextDecrease = button} onClick={() => this.setFontSize('bot', -1, true)}><span className="decrease-font-size">Decrease font size</span></Button></li>
                <li className="seperator"><span></span></li>
                <li><Button ref={button => this.botTextIncrease = button} onClick={() => this.setFontSize('bot', 1, true)}><span className="increase-font-size">Increase font size</span></Button></li>
              </ul>
            </div>
            <div className="">
              <a href="#" ref={button => this.saveButton = button} onClick={ev => this.saveImage(ev)}>Save image</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeEditor;
