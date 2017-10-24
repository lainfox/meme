import React, { Component } from 'react';
import loadImage from 'blueimp-load-image';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.image = new Image;
    this.currentTopText;
    this.currentBottomText;
    this.textType = {
      top: "t1",
      bottom: "t2"
    }
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

    var d = canvas.getContext("2d");
    d.fillStyle = "white",
    d.strokeStyle = "black",
    d.lineWidth = 4,
    d.textAlign = "center";
    var e = canvas.height / 8;
    d.font = e + "px Impact Web, Impact",
    d.miterLimit = 2,
    this.drawCanvas(!0)
  }

  drawCanvas(a) {
      this.drawImage();
      var b = this.currentTopText
        , c = this.currentBottomText;

      this.drawText(b, this.textType.top),
      this.drawText(c, this.textType.bottom)
  }

  drawImage() {
      var a = this.refs.canvas;
      console.log(this.image, 0, 0, a.width, a.height);
      a.getContext("2d").drawImage(this.image, 0, 0, a.width, a.height);
  }

  topTextChanged(a) {
      this.currentTopText = this.refs.topText.value;
      this.drawCanvas(!0)
  }
  bottomTextChanged(a) {
      this.currentBottomText = this.refs.bottomText.value;
      this.drawCanvas(!0)
  }

  drawText(a, b, c, d) {
    this.refs.canvas.getContext("2d").fillText(a, 50, 100)
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
        <input type="text" ref="topText" onChange={this.topTextChanged.bind(this)} /><br />
        <input type="text" ref="bottomText" onChange={this.bottomTextChanged.bind(this)} /><br />
        <canvas ref="canvas" />
      </div>
    );
  }
}

export default Hello;
