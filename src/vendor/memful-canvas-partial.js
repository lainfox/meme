!function(a) {
    memeful.EditorView = Backbone.View.extend({
        el: a("#meme-content"),
        model: memeful.Template,
        memeEditorTemplate: null,
        imageDataUrl: null,
        textType: {
            top: "t1",
            bottom: "t2"
        },
        currentTopText: "",
        currentBottomText: "",
        fontSizeFactors: {
            text1: 1,
            text2: 1
        },
        events: {
            "keyup #meme-editor-text1": "topTextChanged",
            "keyup #meme-editor-text2": "bottomTextChanged",
            "click #meme-editor-text1-increase-font-size": "increaseTopFontSize",
            "click #meme-editor-text2-increase-font-size": "increaseBottomFontSize",
            "click #meme-editor-text1-decrease-font-size": "decreaseTopFontSize",
            "click #meme-editor-text2-decrease-font-size": "decreaseBottomFontSize",
            "click #meme-editor-submit": "submitMeme"
        },
        initialize: function() {
            this.memeEditorTemplate = _.template(a("#jsid-meme-editor-template").html()),
            _.bindAll(this, "renderCanvasWithImage"),
            this.image = new Image,
            this.$el.empty(),
            this.render()
        },
        destory: function() {
            this.undelegateEvents(),
            this.$el.empty()
        },
        render: function() {
            return this.$el.html(this.memeEditorTemplate()),
            this.canvas = this.$("#meme-editor-canvas"),
            this.model.get("name") ? (document.title = this.model.get("name") + " · Memeful",
            this.$("#jsid-editor-title").html(this.model.get("name"))) : this.$("#jsid-editor-title").html("New Image"),
            document.body.scrollTop = 0,
            this.$("#meme-editor-text1") && this.$("#meme-editor-text1").focus(),
            this.model.local ? (this.image.onload = this.renderCanvasWithImage,
            void (this.image.src = this.model.file)) : (this.image.setAttribute("crossOrigin", "anonymous"),
            memeful.uaHelper.isIE() ? this.image.src = document.location.origin + "/ie/:id".replace(":id", this.model.get("id")) : this.image.src = this.model.get("file") + "?o=" + encodeURIComponent(document.location.origin),
            this.model.get("prefill_text1") && (this.currentTopText = this.model.get("prefill_text1"),
            this.$("#meme-editor-text1").val(this.currentTopText)),
            this.model.get("prefill_text2") && (this.currentBottomText = this.model.get("prefill_text2"),
            this.$("#meme-editor-text2").val(this.currentBottomText)),
            void (this.image.onload = this.renderCanvasWithImage))
        },
        submitMeme: function(b) {
            b.preventDefault(),
            b.stopPropagation();
            var c = a(b.target);
            c.addClass("loading"),
            c.prop("disabled", !0),
            this.drawCanvas(!1);
            var d = {
                template_title: this.model.get("name"),
                template_id: this.model.get("id"),
                data: this.canvas[0].toDataURL("image/jpeg"),
                top: this.$("#meme-editor-text1").val().trim(),
                bottom: this.$("#meme-editor-text2").val().trim()
            };
            a.ajax({
                type: "POST",
                url: "/upload",
                data: d,
                dataType: "json"
            }).done(function(a) {
                console.log(a),
                a.template_id,
                a.share_url ? document.location.href = a.share_url : document.location.href = "/generator"
            }).fail(function(a, b) {
                console.log("unexpected error on uploading image: " + b)
            })
        },
        topTextChanged: function(a) {
            this.currentTopText = this.$("#meme-editor-text1").val(),
            this.drawCanvas(!0)
        },
        bottomTextChanged: function(a) {
            this.currentBottomText = this.$("#meme-editor-text2").val(),
            this.drawCanvas(!0)
        },
        increaseTopFontSize: function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            this.changeFontSizeHelper(this.textType.top, .1),
            this.drawCanvas(!0)
        },
        increaseBottomFontSize: function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            this.changeFontSizeHelper(this.textType.bottom, .1),
            this.drawCanvas(!0)
        },
        decreaseTopFontSize: function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            this.changeFontSizeHelper(this.textType.top, -.1),
            this.drawCanvas(!0)
        },
        decreaseBottomFontSize: function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            this.changeFontSizeHelper(this.textType.bottom, -.1),
            this.drawCanvas(!0)
        },
        changeFontSizeHelper: function(a, b) {
            if (a == this.textType.top) {
                var c = this.fontSizeFactors.text1;
                c + b >= .1 && (this.fontSizeFactors.text1 = c + b)
            } else if (a == this.textType.bottom) {
                var c = this.fontSizeFactors.text2;
                c + b >= .1 && (this.fontSizeFactors.text2 = c + b)
            }
        },
        renderCanvasWithImage: function() {
            var a = this.canvas[0]
              , b = 600;
            a.width = b,
            a.height = this.image.height * b / this.image.width;
            try {
                a.toDataURL()
            } catch (c) {
                return this.image.src = document.location.origin + "/ie/:id".replace(":id", this.model.get("id")),
                !1
            }
            var d = a.getContext("2d");
            d.fillStyle = "white",
            d.strokeStyle = "black",
            d.lineWidth = 4,
            d.textAlign = "center";
            var e = a.height / 8;
            d.font = e + "px Impact Web, Impact",
            d.miterLimit = 2,
            this.drawCanvas(!0)
        },
        drawCanvas: function(a) {
            this.drawImage();
            var b = this.currentTopText
              , c = this.currentBottomText;
            a && "" == b && (b = "top text"),
            a && "" == c && (c = "bottom text"),
            this.drawText(b, this.textType.top),
            this.drawText(c, this.textType.bottom)
        },
        drawImage: function() {
            var a = this.canvas[0];
            a.getContext("2d").drawImage(this.image, 0, 0, a.width, a.height)
        },
        drawText: function(a, b, c, d) {
            a = a.toUpperCase();
            var e = this.canvas[0]
              , f = e.getContext("2d");
            b = b || this.textType.top;
            var g = .06
              , h = .0798
              , i = 20
              , j = 10
              , k = d;
            if (!k) {
                var l = e.width * h;
                b == this.textType.top ? k = l * this.fontSizeFactors.text1 : b == this.textType.bottom && (k = l * this.fontSizeFactors.text2)
            }
            f.font = k + "px Impact Web, Impact",
            f.miterLimit = 2;
            for (var m = e.width / 2, n = a.split(" "), o = n[0], p = 0; p < n.length; p++)
                o = n[p].length > o.length ? n[p] : o;
            var q = !1;
            if (!d && f.measureText(o).width > e.width - 36) {
                for (var p = h; p >= g; p = .9 * p)
                    if (k = .9 * k,
                    f.font = k + "px Impact Web, Impact",
                    f.measureText(o).width < e.width - 36) {
                        q = !0;
                        break
                    }
            } else
                q = d ? !1 : !0;
            if (c = "undefined" == typeof c ? k + j : c,
            b === this.textType.bottom && (c = e.height - i),
            f.measureText(a).width > e.width - 36) {
                var r = n.length;
                if (b === this.textType.top) {
                    for (var p = r, s = []; p--; ) {
                        var t = n.slice(0, p).join(" ");
                        if (-1 != t.indexOf("\n")) {
                            for (var u = a.split("\n"), v = 0; v < u.length; v++)
                                s = s.concat(this.getLines_(u[v].split(" "), e, f));
                            n = n.slice(p, n.length - (u.length - 1)),
                            p = n.length - (u.length - 1)
                        } else
                            f.measureText(t).width <= e.width - 36 ? (s.push(t),
                            n = n.slice(p, r),
                            p = r = n.length + 1,
                            a = n.slice(0, p).join(" ")) : 1 == p && n.length > 0 && (s.push(t),
                            n = n.slice(p, n.length),
                            p = n.length + 1);
                        if (0 == t.length || 0 == n.length)
                            break
                    }
                    if (s.length > 1)
                        return void this.drawLines(s, b, m, e, f, j, i, k)
                } else if (b === this.textType.bottom) {
                    for (var p = r, s = []; p--; ) {
                        var t = n.slice(0, p).join(" ");
                        if (-1 != t.indexOf("\n")) {
                            for (var u = a.split("\n"), v = 0; v < u.length; v++)
                                s = s.concat(this.getLines_(u[v].split(" "), e, f));
                            n = n.slice(p, n.length - (u.length - 1)),
                            p = n.length - (u.length - 1)
                        } else
                            f.measureText(t).width <= e.width - 36 ? (s.push(t),
                            n = n.slice(p, r),
                            p = r = n.length + 1,
                            a = n.slice(0, p).join(" ")) : 1 == p && n.length > 0 && (s.push(t),
                            n = n.slice(p, n.length),
                            p = n.length + 1);
                        if (0 == t.length || 0 == n.length)
                            break
                    }
                    if (s.length > 1)
                        return void this.drawLines(s, b, m, e, f, j, i, k)
                }
            }
            var u = a.split("\n");
            this.drawLines(u, b, m, e, f, j, i, k)
        },
        drawLines: function(a, b, c, d, e, f, g, h) {
            for (var i = 0; i < a.length; i++) {
                b === this.textType.top && (y = f + (i + 1) * h),
                b === this.textType.bottom && (y = d.height - g - Math.max(0, a.length - i - 1) * h);
                var j = a[i].trim()
                  , k = 2 * Math.round(.9 * d.width / 2);
                e.strokeText(j, c, y, k),
                e.fillText(j, c, y, .9 * d.width)
            }
        },
        getLines_: function(a, b, c) {
            var d = a.length
              , e = a.length
              , f = []
              , g = a.join(" ");
            if (1 == d || c.measureText(g).width <= b.width - 36)
                return f.push(g),
                f;
            for (; e--; ) {
                var h = a.slice(0, e).join(" ");
                if (c.measureText(h).width <= b.width - 36 ? (f.push(h),
                a = a.slice(e, d),
                e = d = a.length + 1,
                g = a.slice(0, e).join(" ")) : 1 == e && a.length > 0 && (f.push(h),
                a = a.slice(e, a.length),
                e = a.length + 1),
                0 == h.length || 0 == a.length)
                    break
            }
            return f
        }
    })
}(jQuery);