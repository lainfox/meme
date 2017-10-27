import React, { Component } from 'react';
import loadImage from 'blueimp-load-image';
import './MemeEditor.css';

class MemeEditor extends Component {
  constructor(props) {
    super(props);
    this.image = new Image;
    this.fontSize = 50;
    this.currentTopText = 'Top text';
    this.currentBottomText = 'Bottom text';
    this.textType = {top: 1, bottom: -1}
  }

  componentDidMount() {
    this.image.onload = this.renderCanvasWithImage();
  }

  renderCanvasWithImage() {
    const canvas = this.refs.canvas;
    canvas.width = 500;
    canvas.height = 500;

    try {
      canvas.toDataURL()
    } 
    catch (c) {
      return this.image.src = document.location.origin + "/ie/:id".replace(":id", this.model.get("id")), !1
    }

    setTimeout(() => {
      var d = canvas.getContext("2d");
      d.fillStyle = "white",
      d.strokeStyle = "black",
      d.lineWidth = 6,
      d.textAlign = "center";
      var e = this.fontSize;
      d.font = `700 ${e}px Nanum Gothic`,
      d.lineJoin="miter";
      d.miterLimit = 2,
      this.drawCanvas(!0)
    }, 500)
  }

  drawCanvas(a) {
      this.drawImage();
      const topText = this.currentTopText;
      const bottomText = this.currentBottomText;

      this.buildText(topText, this.textType.top),
      this.buildText(bottomText, this.textType.bottom)
  }

  drawImage() {
      var canvas = this.refs.canvas;
      // console.log(this.image, 0, 0, a.width, a.height);
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

  buildText(text, posType) {
    const canvas = this.refs.canvas;
    let textArr = text.split(/\r?\n/g);
    if (posType === -1) {// Bottom
      textArr.reverse();
    }

    const textList = textArr.reduce((list, item, index) => {
      list[index] = {};
      list[index].text = item;
      list[index].posX = canvas.width / 2;
      list[index].posY = (posType === 1) ?
        (index * posType * this.fontSize) + this.fontSize : // Top text
        canvas.height + (index * posType * this.fontSize) - this.fontSize + 40; // Bottom text
      return list;
    }, {});

    this.drawText(textList);
  }

  setFontSize(size) {
    this.fontSize = this.fontSize + 5;
  }

  drawText(textList) {
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
    // const imageUrl = 'http://event.leagueoflegends.co.kr/star-guardian-2017/img/star_guardian_miss_fortune_wp.jpg';
    // const imageUrl = 'http://www.dogdrip.net/dvs/b/i/17/10/23/78/593/888/142/b3d1fd0208c6aa79ed51862877aa6af7.jpg';
    const imageUrl = 'https://i.imgur.com/AD3MbBi.jpg';
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
          </div>
          <div className="field">
            <textarea type="text" ref="bottomText" placeholder="Bottom text" onChange={this.bottomTextChanged.bind(this)}></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeEditor;
