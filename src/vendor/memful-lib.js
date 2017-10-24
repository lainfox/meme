/*! memeful 22-06-2017 */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length
          , c = fa.type(a);
        return "function" === c || fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (fa.isFunction(b))
            return fa.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return fa.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (na.test(b))
                return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a, function(a) {
            return fa.inArray(a, b) >= 0 !== c
        })
    }
    function e(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    function f(a) {
        var b = va[a] = {};
        return fa.each(a.match(ua) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        pa.addEventListener ? (pa.removeEventListener("DOMContentLoaded", h, !1),
        a.removeEventListener("load", h, !1)) : (pa.detachEvent("onreadystatechange", h),
        a.detachEvent("onload", h))
    }
    function h() {
        (pa.addEventListener || "load" === event.type || "complete" === pa.readyState) && (g(),
        fa.ready())
    }
    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(Aa, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : za.test(c) ? fa.parseJSON(c) : c
                } catch (e) {}
                fa.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !fa.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function k(a, b, c, d) {
        if (fa.acceptData(a)) {
            var e, f, g = fa.expando, h = a.nodeType, i = h ? fa.cache : a, j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)
                return j || (j = h ? a[g] = W.pop() || fa.guid++ : g),
                i[j] || (i[j] = h ? {} : {
                    toJSON: fa.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (d ? i[j] = fa.extend(i[j], b) : i[j].data = fa.extend(i[j].data, b)),
                f = i[j],
                d || (f.data || (f.data = {}),
                f = f.data),
                void 0 !== c && (f[fa.camelCase(b)] = c),
                "string" == typeof b ? (e = f[b],
                null == e && (e = f[fa.camelCase(b)])) : e = f,
                e
        }
    }
    function l(a, b, c) {
        if (fa.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? fa.cache : a, h = f ? a[fa.expando] : fa.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    fa.isArray(b) ? b = b.concat(fa.map(b, fa.camelCase)) : b in d ? b = [b] : (b = fa.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    for (; e--; )
                        delete d[b[e]];
                    if (c ? !j(d) : !fa.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                j(g[h]))) && (f ? fa.cleanData([a], !0) : da.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    function m() {
        return !0
    }
    function n() {
        return !1
    }
    function o() {
        try {
            return pa.activeElement
        } catch (a) {}
    }
    function p(a) {
        var b = La.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length; )
                c.createElement(b.pop());
        return c
    }
    function q(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== ya ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== ya ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || fa.nodeName(d, b) ? f.push(d) : fa.merge(f, q(d, b));
        return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], f) : f
    }
    function r(a) {
        Fa.test(a.type) && (a.defaultChecked = a.checked)
    }
    function s(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function t(a) {
        return a.type = (null !== fa.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function u(a) {
        var b = Wa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            fa._data(c, "globalEval", !b || fa._data(b[d], "globalEval"))
    }
    function w(a, b) {
        if (1 === b.nodeType && fa.hasData(a)) {
            var c, d, e, f = fa._data(a), g = fa._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        fa.event.add(b, c, h[c][d])
            }
            g.data && (g.data = fa.extend({}, g.data))
        }
    }
    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !da.noCloneEvent && b[fa.expando]) {
                e = fa._data(b);
                for (d in e.events)
                    fa.removeEvent(b, d, e.handle);
                b.removeAttribute(fa.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text,
            u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            da.html5Clone && a.innerHTML && !fa.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Fa.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    function y(b, c) {
        var d = fa(c.createElement(b)).appendTo(c.body)
          , e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : fa.css(d[0], "display");
        return d.detach(),
        e
    }
    function z(a) {
        var b = pa
          , c = ab[a];
        return c || (c = y(a, b),
        "none" !== c && c || (_a = (_a || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (_a[0].contentWindow || _a[0].contentDocument).document,
        b.write(),
        b.close(),
        c = y(a, b),
        _a.detach()),
        ab[a] = c),
        c
    }
    function A(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function B(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = nb.length; e--; )
            if (b = nb[e] + c,
            b in a)
                return b;
        return d
    }
    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = fa._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && Da(d) && (f[g] = fa._data(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = Da(d),
            (c && "none" !== c || !e) && fa._data(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function D(a, b, c) {
        var d = jb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += fa.css(a, c + Ca[f], !0, e)),
            d ? ("content" === c && (g -= fa.css(a, "padding" + Ca[f], !0, e)),
            "margin" !== c && (g -= fa.css(a, "border" + Ca[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Ca[f], !0, e),
            "padding" !== c && (g += fa.css(a, "border" + Ca[f] + "Width", !0, e)));
        return g
    }
    function F(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = bb(a)
          , g = da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = cb(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            eb.test(e))
                return e;
            d = g && (da.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function G(a, b, c, d, e) {
        return new G.prototype.init(a,b,c,d,e)
    }
    function H() {
        return setTimeout(function() {
            ob = void 0
        }),
        ob = fa.now()
    }
    function I(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = Ca[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function J(a, b, c) {
        for (var d, e = (ub[b] || []).concat(ub["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Da(a), p = fa._data(a, "fxshow");
        c.queue || (h = fa._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                fa.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
        j = fa.css(a, "display"),
        k = z(a.nodeName),
        "none" === j && (j = k),
        "inline" === j && "none" === fa.css(a, "float") && (da.inlineBlockNeedsLayout && "inline" !== k ? n.zoom = 1 : n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        da.shrinkWrapBlocks() || l.always(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            qb.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || fa.style(a, d)
            }
        if (!fa.isEmptyObject(m)) {
            p ? "hidden"in p && (o = p.hidden) : p = fa._data(a, "fxshow", {}),
            f && (p.hidden = !o),
            o ? fa(a).show() : l.done(function() {
                fa(a).hide()
            }),
            l.done(function() {
                var b;
                fa._removeData(a, "fxshow");
                for (b in m)
                    fa.style(a, b, m[b])
            });
            for (d in m)
                g = J(o ? p[d] : 0, d, l),
                d in p || (p[d] = g.start,
                o && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fa.camelCase(c),
            e = b[d],
            f = a[c],
            fa.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = fa.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function M(a, b, c) {
        var d, e, f = 0, g = tb.length, h = fa.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = ob || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: fa.extend({}, b),
            opts: fa.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ob || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++)
            if (d = tb[f].call(j, a, k, j.opts))
                return d;
        return fa.map(k, J, j),
        fa.isFunction(j.opts.start) && j.opts.start.call(a, j),
        fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function N(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(ua) || [];
            if (fa.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            fa.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                e(j),
                !1)
            }),
            i
        }
        var f = {}
          , g = a === Sb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function P(a, b) {
        var c, d, e = fa.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && fa.extend(!0, a, c),
        a
    }
    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function R(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function S(a, b, c, d) {
        var e;
        if (fa.isArray(b))
            fa.each(b, function(b, e) {
                c || Wb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== fa.type(b))
            d(a, b);
        else
            for (e in b)
                S(a + "[" + e + "]", b[e], c, d)
    }
    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function V(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var W = []
      , X = W.slice
      , Y = W.concat
      , Z = W.push
      , $ = W.indexOf
      , _ = {}
      , aa = _.toString
      , ba = _.hasOwnProperty
      , ca = "".trim
      , da = {}
      , ea = "1.11.0"
      , fa = function(a, b) {
        return new fa.fn.init(a,b)
    }
      , ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ha = /^-ms-/
      , ia = /-([\da-z])/gi
      , ja = function(a, b) {
        return b.toUpperCase()
    };
    fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function(a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return fa.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(fa.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    },
    fa.extend = fa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || fa.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (fa.isPlainObject(c) || (b = fa.isArray(c))) ? (b ? (b = !1,
                    f = a && fa.isArray(a) ? a : []) : f = a && fa.isPlainObject(a) ? a : {},
                    g[d] = fa.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === fa.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === fa.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== fa.type(a) || a.nodeType || fa.isWindow(a))
                return !1;
            try {
                if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (da.ownLast)
                for (b in a)
                    return ba.call(a, b);
            for (b in a)
                ;
            return void 0 === b || ba.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && fa.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(ha, "ms-").replace(ia, ja)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d),
                        e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]),
                e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]),
                    e === !1)
                        break;
            return a
        },
        trim: ca && !ca.call("\ufeff ") ? function(a) {
            return null == a ? "" : ca.call(a)
        }
        : function(a) {
            return null == a ? "" : (a + "").replace(ga, "")
        }
        ,
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if ($)
                    return $.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; )
                a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d]; )
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            return Y.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b],
            b = a,
            a = e),
            fa.isFunction(a) ? (c = X.call(arguments, 2),
            d = function() {
                return a.apply(b || this, c.concat(X.call(arguments)))
            }
            ,
            d.guid = a.guid = a.guid || fa.guid++,
            d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: da
    }),
    fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });
    var ka = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, o, p, q;
            if ((b ? b.ownerDocument || b : O) !== G && F(b),
            b = b || G,
            c = c || [],
            !a || "string" != typeof a)
                return c;
            if (1 !== (h = b.nodeType) && 9 !== h)
                return [];
            if (I && !d) {
                if (e = sa.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g),
                            !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f),
                                c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f),
                            c
                    } else {
                        if (e[2])
                            return _.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)
                            return _.apply(c, b.getElementsByClassName(g)),
                            c
                    }
                if (x.qsa && (!J || !J.test(a))) {
                    if (o = l = N,
                    p = b,
                    q = 9 === h && a,
                    1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a),
                        (l = b.getAttribute("id")) ? o = l.replace(ua, "\\$&") : b.setAttribute("id", o),
                        o = "[id='" + o + "'] ",
                        i = j.length; i--; )
                            j[i] = o + n(j[i]);
                        p = ta.test(a) && k(b.parentNode) || b,
                        q = j.join(",")
                    }
                    if (q)
                        try {
                            return _.apply(c, p.querySelectorAll(q)),
                            c
                        } catch (r) {} finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return v(a.replace(ia, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > y.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                y.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }
        function l() {}
        function m(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = y.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = ka.exec(h)) && (d = e.shift(),
                f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }),
                h = h.slice(d.length));
                for (g in y.filter)
                    !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                    f.push({
                        value: d,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function o(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}),
                            (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = d || u(b || "*", h.nodeType ? [h] : h, []), r = !a || !d && b ? p : q(p, m, a, h, i), s = c ? f || (d ? a : o || e) ? [] : g : r;
                if (c && c(r, s, h, i),
                e)
                    for (j = q(s, n),
                    e(j, [], h, i),
                    k = j.length; k--; )
                        (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [],
                            k = s.length; k--; )
                                (l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--; )
                            (l = s[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    s = q(s === g ? s.splice(o, s.length) : s),
                    f ? f(null, g, s, i) : _.apply(g, s)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b
            }, g, !0), j = o(function(a) {
                return ba.call(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }
            ]; e > h; h++)
                if (c = y.relative[a[h].type])
                    k = [o(p(k), c)];
                else {
                    if (c = y.filter[a[h].type].apply(null, a[h].matches),
                    c[N]) {
                        for (d = ++h; e > d && !y.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
            return p(k)
        }
        function t(a, c) {
            var e = c.length > 0
              , f = a.length > 0
              , g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && y.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--,
                    d && p.push(k))
                }
                if (n += o,
                e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Z.call(i));
                        r = q(r)
                    }
                    _.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u,
                C = s),
                p
            };
            return e ? d(g) : g
        }
        function u(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0),
                f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
                    if (b = (y.find.ID(g.matches[0].replace(va, wa), b) || [])[0],
                    !b)
                        return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                !y.relative[h = g.type]); )
                    if ((i = y.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1),
                        a = d.length && n(f),
                        !a)
                            return _.apply(c, d),
                            c;
                        break
                    }
            }
            return B(a, j)(d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
            c
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0),
            0
        }, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, aa = Y.slice, ba = Y.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", da = "[\\x20\\t\\r\\n\\f]", ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fa = ea.replace("w", "w#"), ga = "\\[" + da + "*(" + ea + ")" + da + "*(?:([*^$|!~]?=)" + da + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fa + ")|)|)" + da + "*\\]", ha = ":(" + ea + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ga.replace(3, 8) + ")*)|.*)\\)|)", ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$","g"), ja = new RegExp("^" + da + "*," + da + "*"), ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"), la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]","g"), ma = new RegExp(ha), na = new RegExp("^" + fa + "$"), oa = {
            ID: new RegExp("^#(" + ea + ")"),
            CLASS: new RegExp("^\\.(" + ea + ")"),
            TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ga),
            PSEUDO: new RegExp("^" + ha),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ca + ")$","i"),
            needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)","i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)","ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            _.apply(Y = aa.call(O.childNodes), O.childNodes),
            Y[O.childNodes.length].nodeType
        } catch (xa) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, aa.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        x = b.support = {},
        A = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c,
            H = c.documentElement,
            I = !A(c),
            d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })),
            x.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            x.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }),
            x.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !c.getElementsByName || !c.getElementsByName(N).length
            }),
            x.getById ? (y.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            y.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete y.find.ID,
            y.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            y.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            y.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }
            ,
            K = [],
            J = [],
            (x.qsa = ra.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>",
                a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"),
                a.querySelectorAll(":checked").length || J.push(":checked")
            }),
            e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })),
            (x.matchesSelector = ra.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                x.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", ha)
            }),
            J = J.length && new RegExp(J.join("|")),
            K = K.length && new RegExp(K.join("|")),
            b = ra.test(H.compareDocumentPosition),
            M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            U = b ? function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (d = a; d = d.parentNode; )
                    i.unshift(d);
                for (d = b; d = d.parentNode; )
                    j.unshift(d);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }
            ,
            c) : G
        }
        ,
        b.matches = function(a, c) {
            return b(a, null, null, c)
        }
        ,
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a),
            c = c.replace(la, "='$1']"),
            x.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }
        ,
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        }
        ,
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = y.attrHandle[b.toLowerCase()]
              , d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }
        ,
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !x.detectDuplicates,
            D = !x.sortStable && a.slice(0),
            a.sort(U),
            E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null,
            a
        }
        ,
        z = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += z(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += z(b);
            return c
        }
        ,
        y = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa),
                    a[3] = (a[4] || a[5] || "").replace(va, wa),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && ma.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "",
                        "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                for (k = q[N] || (q[N] = {}),
                                j = k[a] || [],
                                n = j[0] === P && j[1],
                                m = j[0] === P && j[2],
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                l !== b)); )
                                    ;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                    y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = ba.call(a, e[g]),
                            a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }
                    ) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = []
                      , c = []
                      , e = B(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(va, wa).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !y.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        y.pseudos.nth = y.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            y.pseudos[w] = h(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            y.pseudos[w] = i(w);
        return l.prototype = y.filters = y.pseudos,
        y.setFilters = new l,
        B = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)),
                c = b.length; c--; )
                    f = s(b[c]),
                    f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        }
        ,
        x.sortStable = N.split("").sort(U).join("") === N,
        x.detectDuplicates = !!E,
        F(),
        x.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        x.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ca, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        b
    }(a);
    fa.find = ka,
    fa.expr = ka.selectors,
    fa.expr[":"] = fa.expr.pseudos,
    fa.unique = ka.uniqueSort,
    fa.text = ka.getText,
    fa.isXMLDoc = ka.isXML,
    fa.contains = ka.contains;
    var la = fa.expr.match.needsContext
      , ma = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , na = /^.[^:#\[\.,]*$/;
    fa.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    fa.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(fa(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (fa.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                fa.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fa.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && la.test(a) ? fa(a) : a || [], !1).length
        }
    });
    var oa, pa = a.document, qa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ra = fa.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : qa.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || oa).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof fa ? b[0] : b,
                fa.merge(this, fa.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : pa, !0)),
                ma.test(c[1]) && fa.isPlainObject(b))
                    for (c in b)
                        fa.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = pa.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return oa.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = pa,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : fa.isFunction(a) ? "undefined" != typeof oa.ready ? oa.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        fa.makeArray(a, this))
    }
    ;
    ra.prototype = fa.fn,
    oa = fa(pa);
    var sa = /^(?:parents|prev(?:Until|All))/
      , ta = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fa.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !fa(e).is(c)); )
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    fa.fn.extend({
        has: function(a) {
            var b, c = fa(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (fa.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = la.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fa.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? fa.inArray(this[0], fa(a)) : fa.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(fa.unique(fa.merge(this.get(), fa(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    fa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return fa.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return fa.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return fa.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return fa.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return fa.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return fa.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return fa.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return fa.sibling(a.firstChild)
        },
        contents: function(a) {
            return fa.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fa.merge([], a.childNodes)
        }
    }, function(a, b) {
        fa.fn[a] = function(c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = fa.filter(d, e)),
            this.length > 1 && (ta[a] || (e = fa.unique(e)),
            sa.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var ua = /\S+/g
      , va = {};
    fa.Callbacks = function(a) {
        a = "string" == typeof a ? va[a] || f(a) : fa.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (c = a.memory && f,
            d = !0,
            g = h || 0,
            h = 0,
            e = i.length,
            b = !0; i && e > g; g++)
                if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }, l = {
            add: function() {
                if (i) {
                    var d = i.length;
                    !function f(b) {
                        fa.each(b, function(b, c) {
                            var d = fa.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    b ? e = i.length : c && (h = d,
                    k(c))
                }
                return this
            },
            remove: function() {
                return i && fa.each(arguments, function(a, c) {
                    for (var d; (d = fa.inArray(c, i, d)) > -1; )
                        i.splice(d, 1),
                        b && (e >= d && e--,
                        g >= d && g--)
                }),
                this
            },
            has: function(a) {
                return a ? fa.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                e = 0,
                this
            },
            disable: function() {
                return i = j = c = void 0,
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = void 0,
                c || l.disable(),
                this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, c) {
                return !i || d && !j || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? j.push(c) : k(c)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return l
    }
    ,
    fa.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return fa.Deferred(function(c) {
                        fa.each(b, function(b, f) {
                            var g = fa.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? fa.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            fa.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fa.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? X.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); g > e; e++)
                    f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var wa;
    fa.fn.ready = function(a) {
        return fa.ready.promise().done(a),
        this
    }
    ,
    fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fa.readyWait++ : fa.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--fa.readyWait : !fa.isReady) {
                if (!pa.body)
                    return setTimeout(fa.ready);
                fa.isReady = !0,
                a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(pa, [fa]),
                fa.fn.trigger && fa(pa).trigger("ready").off("ready"))
            }
        }
    }),
    fa.ready.promise = function(b) {
        if (!wa)
            if (wa = fa.Deferred(),
            "complete" === pa.readyState)
                setTimeout(fa.ready);
            else if (pa.addEventListener)
                pa.addEventListener("DOMContentLoaded", h, !1),
                a.addEventListener("load", h, !1);
            else {
                pa.attachEvent("onreadystatechange", h),
                a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && pa.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!fa.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        g(),
                        fa.ready()
                    }
                }()
            }
        return wa.promise(b)
    }
    ;
    var xa, ya = "undefined";
    for (xa in fa(da))
        break;
    da.ownLast = "0" !== xa,
    da.inlineBlockNeedsLayout = !1,
    fa(function() {
        var a, b, c = pa.getElementsByTagName("body")[0];
        c && (a = pa.createElement("div"),
        a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        b = pa.createElement("div"),
        c.appendChild(a).appendChild(b),
        typeof b.style.zoom !== ya && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
        (da.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)),
        c.removeChild(a),
        a = b = null)
    }),
    function() {
        var a = pa.createElement("div");
        if (null == da.deleteExpando) {
            da.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                da.deleteExpando = !1
            }
        }
        a = null
    }(),
    fa.acceptData = function(a) {
        var b = fa.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
    ;
    var za = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Aa = /([A-Z])/g;
    fa.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? fa.cache[a[fa.expando]] : a[fa.expando],
            !!a && !j(a)
        },
        data: function(a, b, c) {
            return k(a, b, c)
        },
        removeData: function(a, b) {
            return l(a, b)
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return l(a, b, !0)
        }
    }),
    fa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = fa.data(f),
                1 === f.nodeType && !fa._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--; )
                        d = g[c].name,
                        0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)),
                        i(f, d, e[d]));
                    fa._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                fa.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                fa.data(this, a, b)
            }) : f ? i(f, a, fa.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                fa.removeData(this, a)
            })
        }
    }),
    fa.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = fa._data(a, b),
            c && (!d || fa.isArray(c) ? d = fa._data(a, b, fa.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fa.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = fa._queueHooks(a, b)
              , g = function() {
                fa.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return fa._data(a, c) || fa._data(a, c, {
                empty: fa.Callbacks("once memory").add(function() {
                    fa._removeData(a, b + "queue"),
                    fa._removeData(a, c)
                })
            })
        }
    }),
    fa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = fa.queue(this, a, b);
                fa._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                fa.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = fa.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx"; g--; )
                c = fa._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var Ba = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ca = ["Top", "Right", "Bottom", "Left"]
      , Da = function(a, b) {
        return a = b || a,
        "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
    }
      , Ea = fa.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === fa.type(c)) {
            e = !0;
            for (h in c)
                fa.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        fa.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(fa(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , Fa = /^(?:checkbox|radio)$/i;
    !function() {
        var a = pa.createDocumentFragment()
          , b = pa.createElement("div")
          , c = pa.createElement("input");
        if (b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
        da.leadingWhitespace = 3 === b.firstChild.nodeType,
        da.tbody = !b.getElementsByTagName("tbody").length,
        da.htmlSerialize = !!b.getElementsByTagName("link").length,
        da.html5Clone = "<:nav></:nav>" !== pa.createElement("nav").cloneNode(!0).outerHTML,
        c.type = "checkbox",
        c.checked = !0,
        a.appendChild(c),
        da.appendChecked = c.checked,
        b.innerHTML = "<textarea>x</textarea>",
        da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        a.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        da.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            da.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null == da.deleteExpando) {
            da.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                da.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function() {
        var b, c, d = pa.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (da[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            da[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Ga = /^(?:input|select|textarea)$/i
      , Ha = /^key/
      , Ia = /^(?:mouse|contextmenu)|click/
      , Ja = /^(?:focusinfocus|focusoutblur)$/
      , Ka = /^([^.]*)(?:\.(.+)|)$/;
    fa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = fa._data(a);
            if (q) {
                for (c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = fa.guid++),
                (g = q.events) || (g = q.events = {}),
                (k = q.handle) || (k = q.handle = function(a) {
                    return typeof fa === ya || a && fa.event.triggered === a.type ? void 0 : fa.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(ua) || [""],
                h = b.length; h--; )
                    f = Ka.exec(b[h]) || [],
                    n = p = f[1],
                    o = (f[2] || "").split(".").sort(),
                    n && (j = fa.event.special[n] || {},
                    n = (e ? j.delegateType : j.bindType) || n,
                    j = fa.event.special[n] || {},
                    l = fa.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && fa.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i),
                    (m = g[n]) || (m = g[n] = [],
                    m.delegateCount = 0,
                    j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                    fa.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = fa.hasData(a) && fa._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ua) || [""],
                j = b.length; j--; )
                    if (h = Ka.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        for (l = fa.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = k[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = m.length; f--; )
                            g = m[f],
                            !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle),
                        delete k[n])
                    } else
                        for (n in k)
                            fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(k) && (delete q.handle,
                fa._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || pa], n = ba.call(b, "type") ? b.type : b, o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || pa,
            3 !== d.nodeType && 8 !== d.nodeType && !Ja.test(n + fa.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
            n = o.shift(),
            o.sort()),
            g = n.indexOf(":") < 0 && "on" + n,
            b = b[fa.expando] ? b : new fa.Event(n,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = o.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : fa.makeArray(c, [b]),
            j = fa.event.special[n] || {},
            e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !fa.isWindow(d)) {
                    for (i = j.delegateType || n,
                    Ja.test(i + n) || (h = h.parentNode); h; h = h.parentNode)
                        m.push(h),
                        k = h;
                    k === (d.ownerDocument || pa) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); )
                    b.type = l > 1 ? i : j.bindType || n,
                    f = (fa._data(h, "events") || {})[b.type] && fa._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && fa.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = n,
                !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && fa.acceptData(d) && g && d[n] && !fa.isWindow(d)) {
                    k = d[g],
                    k && (d[g] = null),
                    fa.event.triggered = n;
                    try {
                        d[n]()
                    } catch (p) {}
                    fa.event.triggered = void 0,
                    k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = fa.event.fix(a);
            var b, c, d, e, f, g = [], h = X.call(arguments), i = (fa._data(this, "events") || {})[a.type] || [], j = fa.event.special[a.type] || {};
            if (h[0] = a,
            a.delegateTarget = this,
            !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = fa.event.handlers.call(this, a, i),
                b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                    f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d,
                        a.data = d.data,
                        c = ((fa.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? fa(c, this).index(i) >= 0 : fa.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[fa.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ia.test(e) ? this.mouseHooks : Ha.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new fa.Event(f),
            b = d.length; b--; )
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || pa),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || pa,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== o() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return fa.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    fa.removeEvent = pa.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === ya && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    fa.Event = function(a, b) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? m : n) : this.type = a,
        b && fa.extend(this, b),
        this.timeStamp = a && a.timeStamp || fa.now(),
        void (this[fa.expando] = !0)) : new fa.Event(a,b)
    }
    ,
    fa.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = m,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = m,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m,
            this.stopPropagation()
        }
    },
    fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    da.submitBubbles || (fa.event.special.submit = {
        setup: function() {
            return fa.nodeName(this, "form") ? !1 : void fa.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = fa.nodeName(b, "input") || fa.nodeName(b, "button") ? b.form : void 0;
                c && !fa._data(c, "submitBubbles") && (fa.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                fa._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && fa.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return fa.nodeName(this, "form") ? !1 : void fa.event.remove(this, "._submit")
        }
    }),
    da.changeBubbles || (fa.event.special.change = {
        setup: function() {
            return Ga.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fa.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            fa.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                fa.event.simulate("change", this, a, !0)
            })),
            !1) : void fa.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Ga.test(b.nodeName) && !fa._data(b, "changeBubbles") && (fa.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || fa.event.simulate("change", this.parentNode, a, !0)
                }),
                fa._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return fa.event.remove(this, "._change"),
            !Ga.test(this.nodeName)
        }
    }),
    da.focusinBubbles || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            fa.event.simulate(b, a.target, fa.event.fix(a), !0)
        };
        fa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = fa._data(d, b);
                e || d.addEventListener(a, c, !0),
                fa._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = fa._data(d, b) - 1;
                e ? fa._data(d, b, e) : (d.removeEventListener(a, c, !0),
                fa._removeData(d, b))
            }
        }
    }),
    fa.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = n;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return fa().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = fa.guid++)),
            this.each(function() {
                fa.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = n),
            this.each(function() {
                fa.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fa.event.trigger(a, b, c, !0) : void 0
        }
    });
    var La = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Ma = / jQuery\d+="(?:null|\d+)"/g
      , Na = new RegExp("<(?:" + La + ")[\\s/>]","i")
      , Oa = /^\s+/
      , Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Qa = /<([\w:]+)/
      , Ra = /<tbody/i
      , Sa = /<|&#?\w+;/
      , Ta = /<(?:script|style|link)/i
      , Ua = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Va = /^$|\/(?:java|ecma)script/i
      , Wa = /^true\/(.*)/
      , Xa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Ya = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: da.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Za = p(pa)
      , $a = Za.appendChild(pa.createElement("div"));
    Ya.optgroup = Ya.option,
    Ya.tbody = Ya.tfoot = Ya.colgroup = Ya.caption = Ya.thead,
    Ya.th = Ya.td,
    fa.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = fa.contains(a.ownerDocument, a);
            if (da.html5Clone || fa.isXMLDoc(a) || !Na.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : ($a.innerHTML = a.outerHTML,
            $a.removeChild(f = $a.firstChild)),
            !(da.noCloneEvent && da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                for (d = q(f),
                h = q(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && x(e, d[g]);
            if (b)
                if (c)
                    for (h = h || q(a),
                    d = d || q(f),
                    g = 0; null != (e = h[g]); g++)
                        w(e, d[g]);
                else
                    w(a, f);
            return d = q(f, "script"),
            d.length > 0 && v(d, !i && q(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                if (f = a[o],
                f || 0 === f)
                    if ("object" === fa.type(f))
                        fa.merge(n, f.nodeType ? [f] : f);
                    else if (Sa.test(f)) {
                        for (h = h || m.appendChild(b.createElement("div")),
                        i = (Qa.exec(f) || ["", ""])[1].toLowerCase(),
                        k = Ya[i] || Ya._default,
                        h.innerHTML = k[1] + f.replace(Pa, "<$1></$2>") + k[2],
                        e = k[0]; e--; )
                            h = h.lastChild;
                        if (!da.leadingWhitespace && Oa.test(f) && n.push(b.createTextNode(Oa.exec(f)[0])),
                        !da.tbody)
                            for (f = "table" !== i || Ra.test(f) ? "<table>" !== k[1] || Ra.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length; e--; )
                                fa.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                        for (fa.merge(n, h.childNodes),
                        h.textContent = ""; h.firstChild; )
                            h.removeChild(h.firstChild);
                        h = m.lastChild
                    } else
                        n.push(b.createTextNode(f));
            for (h && m.removeChild(h),
            da.appendChecked || fa.grep(q(n, "input"), r),
            o = 0; f = n[o++]; )
                if ((!d || -1 === fa.inArray(f, d)) && (g = fa.contains(f.ownerDocument, f),
                h = q(m.appendChild(f), "script"),
                g && v(h),
                c))
                    for (e = 0; f = h[e++]; )
                        Va.test(f.type || "") && c.push(f);
            return h = null,
            m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = fa.expando, i = fa.cache, j = da.deleteExpando, k = fa.event.special; null != (c = a[g]); g++)
                if ((b || fa.acceptData(c)) && (e = c[h],
                f = e && i[e])) {
                    if (f.events)
                        for (d in f.events)
                            k[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e],
                    j ? delete c[h] : typeof c.removeAttribute !== ya ? c.removeAttribute(h) : c[h] = null,
                    W.push(e))
                }
        }
    }),
    fa.fn.extend({
        text: function(a) {
            return Ea(this, function(a) {
                return void 0 === a ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pa).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || fa.cleanData(q(c)),
                c.parentNode && (b && fa.contains(c.ownerDocument, c) && v(q(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && fa.cleanData(q(a, !1)); a.firstChild; )
                    a.removeChild(a.firstChild);
                a.options && fa.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return fa.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ea(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(Ma, "") : void 0;
                if ("string" == typeof a && !Ta.test(a) && (da.htmlSerialize || !Na.test(a)) && (da.leadingWhitespace || !Oa.test(a)) && !Ya[(Qa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Pa, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (fa.cleanData(q(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                fa.cleanData(q(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = fa.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !da.checkClone && Ua.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (j && (h = fa.buildFragment(a, this[0].ownerDocument, !1, this),
            c = h.firstChild,
            1 === h.childNodes.length && (h = c),
            c)) {
                for (f = fa.map(q(h, "script"), t),
                e = f.length; j > i; i++)
                    d = h,
                    i !== l && (d = fa.clone(d, !0, !0),
                    e && fa.merge(f, q(d, "script"))),
                    b.call(this[i], d, i);
                if (e)
                    for (g = f[f.length - 1].ownerDocument,
                    fa.map(f, u),
                    i = 0; e > i; i++)
                        d = f[i],
                        Va.test(d.type || "") && !fa._data(d, "globalEval") && fa.contains(g, d) && (d.src ? fa._evalUrl && fa._evalUrl(d.src) : fa.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Xa, "")));
                h = c = null
            }
            return this
        }
    }),
    fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fa.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = fa(a), g = f.length - 1; g >= d; d++)
                c = d === g ? this : this.clone(!0),
                fa(f[d])[b](c),
                Z.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var _a, ab = {};
    !function() {
        var a, b, c = pa.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = c.getElementsByTagName("a")[0],
        a.style.cssText = "float:left;opacity:.5",
        da.opacity = /^0.5/.test(a.style.opacity),
        da.cssFloat = !!a.style.cssFloat,
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        da.clearCloneStyle = "content-box" === c.style.backgroundClip,
        a = c = null,
        da.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = pa.getElementsByTagName("body")[0],
                !a)
                    return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = pa.createElement("div"),
                e = pa.createElement("div"),
                a.appendChild(c).appendChild(e),
                b = !1,
                typeof e.style.zoom !== ya && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1",
                e.innerHTML = "<div></div>",
                e.firstChild.style.width = "5px",
                b = 3 !== e.offsetWidth),
                a.removeChild(c),
                a = c = e = null
            }
            return b
        }
    }();
    var bb, cb, db = /^margin/, eb = new RegExp("^(" + Ba + ")(?!px)[a-z%]+$","i"), fb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (bb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }
    ,
    cb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || bb(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)),
        eb.test(g) && db.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : pa.documentElement.currentStyle && (bb = function(a) {
        return a.currentStyle
    }
    ,
    cb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || bb(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        eb.test(g) && !fb.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    ),
    function() {
        function b() {
            var b, c, d = pa.getElementsByTagName("body")[0];
            d && (b = pa.createElement("div"),
            c = pa.createElement("div"),
            b.style.cssText = j,
            d.appendChild(b).appendChild(c),
            c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
            fa.swap(d, null != d.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e = 4 === c.offsetWidth
            }),
            f = !0,
            g = !1,
            h = !0,
            a.getComputedStyle && (g = "1%" !== (a.getComputedStyle(c, null) || {}).top,
            f = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width),
            d.removeChild(b),
            c = d = null)
        }
        var c, d, e, f, g, h, i = pa.createElement("div"), j = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", k = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        c = i.getElementsByTagName("a")[0],
        c.style.cssText = "float:left;opacity:.5",
        da.opacity = /^0.5/.test(c.style.opacity),
        da.cssFloat = !!c.style.cssFloat,
        i.style.backgroundClip = "content-box",
        i.cloneNode(!0).style.backgroundClip = "",
        da.clearCloneStyle = "content-box" === i.style.backgroundClip,
        c = i = null,
        fa.extend(da, {
            reliableHiddenOffsets: function() {
                if (null != d)
                    return d;
                var a, b, c, e = pa.createElement("div"), f = pa.getElementsByTagName("body")[0];
                if (f)
                    return e.setAttribute("className", "t"),
                    e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    a = pa.createElement("div"),
                    a.style.cssText = j,
                    f.appendChild(a).appendChild(e),
                    e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    b = e.getElementsByTagName("td"),
                    b[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                    c = 0 === b[0].offsetHeight,
                    b[0].style.display = "",
                    b[1].style.display = "none",
                    d = c && 0 === b[0].offsetHeight,
                    f.removeChild(a),
                    e = f = null,
                    d
            },
            boxSizing: function() {
                return null == e && b(),
                e
            },
            boxSizingReliable: function() {
                return null == f && b(),
                f
            },
            pixelPosition: function() {
                return null == g && b(),
                g
            },
            reliableMarginRight: function() {
                var b, c, d, e;
                if (null == h && a.getComputedStyle) {
                    if (b = pa.getElementsByTagName("body")[0],
                    !b)
                        return;
                    c = pa.createElement("div"),
                    d = pa.createElement("div"),
                    c.style.cssText = j,
                    b.appendChild(c).appendChild(d),
                    e = d.appendChild(pa.createElement("div")),
                    e.style.cssText = d.style.cssText = k,
                    e.style.marginRight = e.style.width = "0",
                    d.style.width = "1px",
                    h = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight),
                    b.removeChild(c)
                }
                return h
            }
        })
    }(),
    fa.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var gb = /alpha\([^)]*\)/i
      , hb = /opacity\s*=\s*([^)]*)/
      , ib = /^(none|table(?!-c[ea]).+)/
      , jb = new RegExp("^(" + Ba + ")(.*)$","i")
      , kb = new RegExp("^([+-])=(" + Ba + ")","i")
      , lb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , mb = {
        letterSpacing: 0,
        fontWeight: 400
    }
      , nb = ["Webkit", "O", "Moz", "ms"];
    fa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = cb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": da.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fa.camelCase(b), i = a.style;
                if (b = fa.cssProps[h] || (fa.cssProps[h] = B(i, h)),
                g = fa.cssHooks[b] || fa.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = kb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(fa.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || fa.cssNumber[h] || (c += "px"),
                da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = "",
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = fa.camelCase(b);
            return b = fa.cssProps[h] || (fa.cssProps[h] = B(a.style, h)),
            g = fa.cssHooks[b] || fa.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = cb(a, b, d)),
            "normal" === f && b in mb && (f = mb[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || fa.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    fa.each(["height", "width"], function(a, b) {
        fa.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && ib.test(fa.css(a, "display")) ? fa.swap(a, lb, function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && bb(a);
                return D(a, c, d ? E(a, b, d, da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    da.opacity || (fa.cssHooks.opacity = {
        get: function(a, b) {
            return hb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = fa.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === fa.trim(f.replace(gb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = gb.test(f) ? f.replace(gb, e) : f + " " + e)
        }
    }),
    fa.cssHooks.marginRight = A(da.reliableMarginRight, function(a, b) {
        return b ? fa.swap(a, {
            display: "inline-block"
        }, cb, [a, "marginRight"]) : void 0
    }),
    fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + Ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        db.test(a) || (fa.cssHooks[a + b].set = D)
    }),
    fa.fn.extend({
        css: function(a, b) {
            return Ea(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (fa.isArray(b)) {
                    for (d = bb(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = fa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Da(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }),
    fa.Tween = G,
    G.prototype = {
        constructor: G,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (fa.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = G.propHooks[this.prop];
            return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : G.propHooks._default.set(this),
            this
        }
    },
    G.prototype.init.prototype = G.prototype,
    G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    fa.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    fa.fx = G.prototype.init,
    fa.fx.step = {};
    var ob, pb, qb = /^(?:toggle|show|hide)$/, rb = new RegExp("^(?:([+-])=|)(" + Ba + ")([a-z%]*)$","i"), sb = /queueHooks$/, tb = [K], ub = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = rb.exec(b)
              , f = e && e[3] || (fa.cssNumber[a] ? "" : "px")
              , g = (fa.cssNumber[a] || "px" !== f && +d) && rb.exec(fa.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    fa.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    fa.Animation = fa.extend(M, {
        tweener: function(a, b) {
            fa.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                ub[c] = ub[c] || [],
                ub[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? tb.unshift(a) : tb.push(a)
        }
    }),
    fa.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fa.extend({}, a) : {
            complete: c || !c && b || fa.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fa.isFunction(b) && b
        };
        return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            fa.isFunction(d.old) && d.old.call(this),
            d.queue && fa.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    fa.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Da).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = fa.isEmptyObject(a)
              , f = fa.speed(b, c, d)
              , g = function() {
                var b = M(this, fa.extend({}, a), f);
                (e || fa._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = fa.timers
                  , g = fa._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && sb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && fa.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = fa._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fa.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                fa.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    fa.each(["toggle", "show", "hide"], function(a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
        }
    }),
    fa.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fa.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    fa.timers = [],
    fa.fx.tick = function() {
        var a, b = fa.timers, c = 0;
        for (ob = fa.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || fa.fx.stop(),
        ob = void 0
    }
    ,
    fa.fx.timer = function(a) {
        fa.timers.push(a),
        a() ? fa.fx.start() : fa.timers.pop()
    }
    ,
    fa.fx.interval = 13,
    fa.fx.start = function() {
        pb || (pb = setInterval(fa.fx.tick, fa.fx.interval))
    }
    ,
    fa.fx.stop = function() {
        clearInterval(pb),
        pb = null
    }
    ,
    fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    fa.fn.delay = function(a, b) {
        return a = fa.fx ? fa.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e = pa.createElement("div");
        e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = e.getElementsByTagName("a")[0],
        c = pa.createElement("select"),
        d = c.appendChild(pa.createElement("option")),
        b = e.getElementsByTagName("input")[0],
        a.style.cssText = "top:1px",
        da.getSetAttribute = "t" !== e.className,
        da.style = /top/.test(a.getAttribute("style")),
        da.hrefNormalized = "/a" === a.getAttribute("href"),
        da.checkOn = !!b.value,
        da.optSelected = d.selected,
        da.enctype = !!pa.createElement("form").enctype,
        c.disabled = !0,
        da.optDisabled = !d.disabled,
        b = pa.createElement("input"),
        b.setAttribute("value", ""),
        da.input = "" === b.getAttribute("value"),
        b.value = "t",
        b.setAttribute("type", "radio"),
        da.radioValue = "t" === b.value,
        a = b = c = d = e = null
    }();
    var vb = /\r/g;
    fa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = fa.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)
            }
        }
    }),
    fa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = fa.find.attr(a, "value");
                    return null != b ? b : fa.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--; )
                        if (d = e[g],
                        fa.inArray(fa.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    fa.each(["radio", "checkbox"], function() {
        fa.valHooks[this] = {
            set: function(a, b) {
                return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) >= 0 : void 0
            }
        },
        da.checkOn || (fa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var wb, xb, yb = fa.expr.attrHandle, zb = /^(?:checked|selected)$/i, Ab = da.getSetAttribute, Bb = da.input;
    fa.fn.extend({
        attr: function(a, b) {
            return Ea(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                fa.removeAttr(this, a)
            })
        }
    }),
    fa.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === ya ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(),
                d = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? xb : wb)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = fa.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void fa.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(ua);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = fa.propFix[c] || c,
                    fa.expr.match.bool.test(c) ? Bb && Ab || !zb.test(c) ? a[d] = !1 : a[fa.camelCase("default-" + c)] = a[d] = !1 : fa.attr(a, c, ""),
                    a.removeAttribute(Ab ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    xb = {
        set: function(a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : Bb && Ab || !zb.test(c) ? a.setAttribute(!Ab && fa.propFix[c] || c, c) : a[fa.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = yb[b] || fa.find.attr;
        yb[b] = Bb && Ab || !zb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = yb[b],
            yb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            yb[b] = f),
            e
        }
        : function(a, b, c) {
            return c ? void 0 : a[fa.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    Bb && Ab || (fa.attrHooks.value = {
        set: function(a, b, c) {
            return fa.nodeName(a, "input") ? void (a.defaultValue = b) : wb && wb.set(a, b, c)
        }
    }),
    Ab || (wb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    yb.id = yb.name = yb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    fa.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: wb.set
    },
    fa.attrHooks.contenteditable = {
        set: function(a, b, c) {
            wb.set(a, "" === b ? !1 : b, c)
        }
    },
    fa.each(["width", "height"], function(a, b) {
        fa.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    da.style || (fa.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Cb = /^(?:input|select|textarea|button|object)$/i
      , Db = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function(a, b) {
            return Ea(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = fa.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    fa.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !fa.isXMLDoc(a),
                f && (b = fa.propFix[b] || b,
                e = fa.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = fa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Cb.test(a.nodeName) || Db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    da.hrefNormalized || fa.each(["href", "src"], function(a, b) {
        fa.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    da.optSelected || (fa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fa.propFix[this.toLowerCase()] = this
    }),
    da.enctype || (fa.propFix.enctype = "encoding");
    var Eb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (fa.isFunction(a))
                return this.each(function(b) {
                    fa(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(ua) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = fa.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (fa.isFunction(a))
                return this.each(function(b) {
                    fa(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(ua) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? fa.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function(c) {
                fa(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = fa(this), f = a.match(ua) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === ya || "boolean" === c) && (this.className && fa._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : fa._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    fa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Fb = fa.now()
      , Gb = /\?/
      , Hb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fa.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = fa.trim(b + "");
        return e && !fa.trim(e.replace(Hb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : fa.error("Invalid JSON: " + b)
    }
    ,
    fa.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b),
        c
    }
    ;
    var Ib, Jb, Kb = /#.*$/, Lb = /([?&])_=[^&]*/, Mb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ob = /^(?:GET|HEAD)$/, Pb = /^\/\//, Qb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Rb = {}, Sb = {}, Tb = "*/".concat("*");
    try {
        Jb = location.href
    } catch (Ub) {
        Jb = pa.createElement("a"),
        Jb.href = "",
        Jb = Jb.href
    }
    Ib = Qb.exec(Jb.toLowerCase()) || [],
    fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Jb,
            type: "GET",
            isLocal: Nb.test(Ib[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? P(P(a, fa.ajaxSettings), b) : P(fa.ajaxSettings, a)
        },
        ajaxPrefilter: N(Rb),
        ajaxTransport: N(Sb),
        ajax: function(a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2,
                h && clearTimeout(h),
                j = void 0,
                g = d || "",
                v.readyState = a > 0 ? 4 : 0,
                e = a >= 200 && 300 > a || 304 === a,
                c && (s = Q(l, v, c)),
                s = R(l, s, v, e),
                e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                u && (fa.lastModified[f] = u),
                u = v.getResponseHeader("etag"),
                u && (fa.etag[f] = u)),
                204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                k = s.data,
                r = s.error,
                e = !r)) : (r = w,
                (a || !w) && (w = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || w) + "",
                e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                v.statusCode(q),
                q = void 0,
                i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]),
                p.fireWith(m, [v, w]),
                i && (n.trigger("ajaxComplete", [v, l]),
                --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var d, e, f, g, h, i, j, k, l = fa.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? fa(m) : fa.event, o = fa.Deferred(), p = fa.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!k)
                            for (k = {}; b = Mb.exec(g); )
                                k[b[1].toLowerCase()] = b[2];
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return j && j.abort(b),
                    c(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            l.url = ((a || l.url || Jb) + "").replace(Kb, "").replace(Pb, Ib[1] + "//"),
            l.type = b.method || b.type || l.method || l.type,
            l.dataTypes = fa.trim(l.dataType || "*").toLowerCase().match(ua) || [""],
            null == l.crossDomain && (d = Qb.exec(l.url.toLowerCase()),
            l.crossDomain = !(!d || d[1] === Ib[1] && d[2] === Ib[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ib[3] || ("http:" === Ib[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = fa.param(l.data, l.traditional)),
            O(Rb, l, b, v),
            2 === t)
                return v;
            i = l.global,
            i && 0 === fa.active++ && fa.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Ob.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Gb.test(f) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = Lb.test(f) ? f.replace(Lb, "$1_=" + Fb++) : f + (Gb.test(f) ? "&" : "?") + "_=" + Fb++)),
            l.ifModified && (fa.lastModified[f] && v.setRequestHeader("If-Modified-Since", fa.lastModified[f]),
            fa.etag[f] && v.setRequestHeader("If-None-Match", fa.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Tb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[e](l[e]);
            if (j = O(Sb, l, b, v)) {
                v.readyState = 1,
                i && n.trigger("ajaxSend", [v, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1,
                    j.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return fa.get(a, void 0, b, "script")
        }
    }),
    fa.each(["get", "post"], function(a, b) {
        fa[b] = function(a, c, d, e) {
            return fa.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            fa.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        fa.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    fa._evalUrl = function(a) {
        return fa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    fa.fn.extend({
        wrapAll: function(a) {
            if (fa.isFunction(a))
                return this.each(function(b) {
                    fa(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = fa(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = fa(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = fa.isFunction(a);
            return this.each(function(c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    fa.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !da.reliableHiddenOffsets() && "none" === (a.style && a.style.display || fa.css(a, "display"))
    }
    ,
    fa.expr.filters.visible = function(a) {
        return !fa.expr.filters.hidden(a)
    }
    ;
    var Vb = /%20/g
      , Wb = /\[\]$/
      , Xb = /\r?\n/g
      , Yb = /^(?:submit|button|image|reset|file)$/i
      , Zb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = fa.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional),
        fa.isArray(a) || a.jquery && !fa.isPlainObject(a))
            fa.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                S(c, a[c], b, e);
        return d.join("&").replace(Vb, "+")
    }
    ,
    fa.fn.extend({
        serialize: function() {
            return fa.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && Zb.test(this.nodeName) && !Yb.test(a) && (this.checked || !Fa.test(a))
            }).map(function(a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Xb, "\r\n")
                }
            }).get()
        }
    }),
    fa.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    }
    : T;
    var $b = 0
      , _b = {}
      , ac = fa.ajaxSettings.xhr();
    a.ActiveXObject && fa(a).on("unload", function() {
        for (var a in _b)
            _b[a](void 0, !0)
    }),
    da.cors = !!ac && "withCredentials"in ac,
    ac = da.ajax = !!ac,
    ac && fa.ajaxTransport(function(a) {
        if (!a.crossDomain || da.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++$b;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete _b[g],
                            b = void 0,
                            f.onreadystatechange = fa.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = _b[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }),
    fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fa.globalEval(a),
                a
            }
        }
    }),
    fa.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    fa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = pa.head || fa("head")[0] || pa.documentElement;
            return {
                send: function(d, e) {
                    b = pa.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var bc = []
      , cc = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = bc.pop() || fa.expando + "_" + Fb++;
            return this[a] = !0,
            a
        }
    }),
    fa.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (cc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(cc, "$1" + e) : b.jsonp !== !1 && (b.url += (Gb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || fa.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            bc.push(e)),
            g && fa.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    fa.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || pa;
        var d = ma.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e),
        e && e.length && fa(e).remove(),
        fa.merge([], d.childNodes))
    }
    ;
    var dc = fa.fn.load;
    fa.fn.load = function(a, b, c) {
        if ("string" != typeof a && dc)
            return dc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length),
        a = a.slice(0, h)),
        fa.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && fa.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    fa.expr.filters.animated = function(a) {
        return fa.grep(fa.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var ec = a.document.documentElement;
    fa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"), l = fa(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = fa.css(a, "top"),
            i = fa.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && fa.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            fa.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    fa.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    fa.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                fa.contains(b, e) ? (typeof e.getBoundingClientRect !== ya && (d = e.getBoundingClientRect()),
                c = V(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === fa.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                fa.nodeName(a[0], "html") || (c = a.offset()),
                c.top += fa.css(a[0], "borderTopWidth", !0),
                c.left += fa.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - fa.css(d, "marginTop", !0),
                    left: b.left - c.left - fa.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || ec; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position"); )
                    a = a.offsetParent;
                return a || ec
            })
        }
    }),
    fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        fa.fn[a] = function(d) {
            return Ea(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? fa(f).scrollLeft() : e, c ? e : fa(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null)
        }
    }),
    fa.each(["top", "left"], function(a, b) {
        fa.cssHooks[b] = A(da.pixelPosition, function(a, c) {
            return c ? (c = cb(a, b),
            eb.test(c) ? fa(a).position()[b] + "px" : c) : void 0
        })
    }),
    fa.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        fa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            fa.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Ea(this, function(b, c, d) {
                    var e;
                    return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    fa.fn.size = function() {
        return this.length
    }
    ,
    fa.fn.andSelf = fa.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return fa
    });
    var fc = a.jQuery
      , gc = a.$;
    return fa.noConflict = function(b) {
        return a.$ === fa && (a.$ = gc),
        b && a.jQuery === fa && (a.jQuery = fc),
        fa
    }
    ,
    typeof b === ya && (a.jQuery = a.$ = fa),
    fa
}),
function() {
    var a = this
      , b = a._
      , c = {}
      , d = Array.prototype
      , e = Object.prototype
      , f = Function.prototype
      , g = d.push
      , h = d.slice
      , i = d.concat
      , j = e.toString
      , k = e.hasOwnProperty
      , l = d.forEach
      , m = d.map
      , n = d.reduce
      , o = d.reduceRight
      , p = d.filter
      , q = d.every
      , r = d.some
      , s = d.indexOf
      , t = d.lastIndexOf
      , u = Array.isArray
      , v = Object.keys
      , w = f.bind
      , x = function(a) {
        return a instanceof x ? a : this instanceof x ? void (this._wrapped = a) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x),
    exports._ = x) : a._ = x,
    x.VERSION = "1.5.2";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a)
            if (l && a.forEach === l)
                a.forEach(b, d);
            else if (a.length === +a.length) {
                for (var e = 0, f = a.length; f > e; e++)
                    if (b.call(d, a[e], e, a) === c)
                        return
            } else
                for (var g = x.keys(a), e = 0, f = g.length; f > e; e++)
                    if (b.call(d, a[g[e]], g[e], a) === c)
                        return
    }
    ;
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d.push(b.call(c, a, e, f))
        }),
        d)
    }
    ;
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []),
        n && a.reduce === n)
            return d && (b = x.bind(b, d)),
            e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a,
            e = !0)
        }),
        !e)
            throw new TypeError(z);
        return c
    }
    ,
    x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []),
        o && a.reduceRight === o)
            return d && (b = x.bind(b, d)),
            e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f,
            e ? c = b.call(d, c, a[i], i, j) : (c = a[i],
            e = !0)
        }),
        !e)
            throw new TypeError(z);
        return c
    }
    ,
    x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a,
            !0) : void 0
        }),
        d
    }
    ,
    x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && d.push(a)
        }),
        d)
    }
    ,
    x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e)
        }, c)
    }
    ,
    x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }),
        !!e)
    }
    ;
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }),
        !!e)
    }
    ;
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b
        })
    }
    ,
    x.invoke = function(a, b) {
        var c = h.call(arguments, 2)
          , d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c)
        })
    }
    ,
    x.pluck = function(a, b) {
        return x.map(a, function(a) {
            return a[b]
        })
    }
    ,
    x.where = function(a, b, c) {
        return x.isEmpty(b) ? c ? void 0 : [] : x[c ? "find" : "filter"](a, function(a) {
            for (var c in b)
                if (b[c] !== a[c])
                    return !1;
            return !0
        })
    }
    ,
    x.findWhere = function(a, b) {
        return x.where(a, b, !0)
    }
    ,
    x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)
            return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a))
            return -(1 / 0);
        var d = {
            computed: -(1 / 0),
            value: -(1 / 0)
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g > d.computed && (d = {
                value: a,
                computed: g
            })
        }),
        d.value
    }
    ,
    x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)
            return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a))
            return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            })
        }),
        d.value
    }
    ,
    x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++),
            d[c - 1] = d[b],
            d[b] = a
        }),
        d
    }
    ,
    x.sample = function(a, b, c) {
        return arguments.length < 2 || c ? a[x.random(a.length - 1)] : x.shuffle(a).slice(0, Math.max(0, b))
    }
    ;
    var B = function(a) {
        return x.isFunction(a) ? a : function(b) {
            return b[a]
        }
    };
    x.sortBy = function(a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria
              , d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c)
                    return 1;
                if (d > c || void 0 === d)
                    return -1
            }
            return a.index - b.index
        }), "value")
    }
    ;
    var C = function(a) {
        return function(b, c, d) {
            var e = {}
              , f = null == c ? x.identity : B(c);
            return y(b, function(c, g) {
                var h = f.call(d, c, g, b);
                a(e, h, c)
            }),
            e
        }
    };
    x.groupBy = C(function(a, b, c) {
        (x.has(a, b) ? a[b] : a[b] = []).push(c)
    }),
    x.indexBy = C(function(a, b, c) {
        a[b] = c
    }),
    x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++ : a[b] = 1
    }),
    x.sortedIndex = function(a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }
    ,
    x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    }
    ,
    x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    }
    ,
    x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    }
    ,
    x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }
    ,
    x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }
    ,
    x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }
    ,
    x.compact = function(a) {
        return x.filter(a, x.identity)
    }
    ;
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }),
        c)
    };
    x.flatten = function(a, b) {
        return D(a, b, [])
    }
    ,
    x.without = function(a) {
        return x.difference(a, h.call(arguments, 1))
    }
    ,
    x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c,
        c = b,
        b = !1);
        var e = c ? x.map(a, c, d) : a
          , f = []
          , g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c),
            f.push(a[d]))
        }),
        f
    }
    ,
    x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    }
    ,
    x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.indexOf(b, a) >= 0
            })
        })
    }
    ,
    x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a)
        })
    }
    ,
    x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++)
            b[c] = x.pluck(arguments, "" + c);
        return b
    }
    ,
    x.object = function(a, b) {
        if (null == a)
            return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++)
            b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }
    ,
    x.indexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = 0
          , e = a.length;
        if (c) {
            if ("number" != typeof c)
                return d = x.sortedIndex(a, b),
                a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s)
            return a.indexOf(b, c);
        for (; e > d; d++)
            if (a[d] === b)
                return d;
        return -1
    }
    ,
    x.lastIndexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t)
            return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; )
            if (a[e] === b)
                return e;
        return -1
    }
    ,
    x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0,
        a = 0),
        c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; )
            f[e++] = a,
            a += c;
        return f
    }
    ;
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w)
            return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a))
            throw new TypeError;
        return c = h.call(arguments, 2),
        d = function() {
            if (!(this instanceof d))
                return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E;
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e
        }
    }
    ,
    x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(h.call(arguments)))
        }
    }
    ,
    x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length)
            throw new Error("bindAll must be passed function names");
        return y(b, function(b) {
            a[b] = x.bind(a[b], a)
        }),
        a
    }
    ,
    x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity),
        function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }
    ,
    x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }
    ,
    x.defer = function(a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }
    ,
    x.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : new Date,
            g = null,
            f = a.apply(d, e)
        };
        return function() {
            var j = new Date;
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this,
            e = arguments,
            0 >= k ? (clearTimeout(g),
            g = null,
            h = j,
            f = a.apply(d, e)) : g || c.trailing === !1 || (g = setTimeout(i, k)),
            f
        }
    }
    ,
    x.debounce = function(a, b, c) {
        var d, e, f, g, h;
        return function() {
            f = this,
            e = arguments,
            g = new Date;
            var i = function() {
                var j = new Date - g;
                b > j ? d = setTimeout(i, b - j) : (d = null,
                c || (h = a.apply(f, e)))
            }
              , j = c && !d;
            return d || (d = setTimeout(i, b)),
            j && (h = a.apply(f, e)),
            h
        }
    }
    ,
    x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0,
            b = a.apply(this, arguments),
            a = null,
            b)
        }
    }
    ,
    x.wrap = function(a, b) {
        return function() {
            var c = [a];
            return g.apply(c, arguments),
            b.apply(this, c)
        }
    }
    ,
    x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--)
                b = [a[c].apply(this, b)];
            return b[0]
        }
    }
    ,
    x.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }
    ,
    x.keys = v || function(a) {
        if (a !== Object(a))
            throw new TypeError("Invalid object");
        var b = [];
        for (var c in a)
            x.has(a, c) && b.push(c);
        return b
    }
    ,
    x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++)
            d[e] = a[b[e]];
        return d
    }
    ,
    x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++)
            d[e] = [b[e], a[b[e]]];
        return d
    }
    ,
    x.invert = function(a) {
        for (var b = {}, c = x.keys(a), d = 0, e = c.length; e > d; d++)
            b[a[c[d]]] = c[d];
        return b
    }
    ,
    x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a)
            x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }
    ,
    x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b)
                for (var c in b)
                    a[c] = b[c]
        }),
        a
    }
    ,
    x.pick = function(a) {
        var b = {}
          , c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c])
        }),
        b
    }
    ,
    x.omit = function(a) {
        var b = {}
          , c = i.apply(d, h.call(arguments, 1));
        for (var e in a)
            x.contains(c, e) || (b[e] = a[e]);
        return b
    }
    ,
    x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b)
                for (var c in b)
                    void 0 === a[c] && (a[c] = b[c])
        }),
        a
    }
    ,
    x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }
    ,
    x.tap = function(a, b) {
        return b(a),
        a
    }
    ;
    var F = function(a, b, c, d) {
        if (a === b)
            return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)
            return a === b;
        a instanceof x && (a = a._wrapped),
        b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b))
            return !1;
        switch (e) {
        case "[object String]":
            return a == String(b);
        case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
        case "[object Date]":
        case "[object Boolean]":
            return +a == +b;
        case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)
            return !1;
        for (var f = c.length; f--; )
            if (c[f] == a)
                return d[f] == b;
        var g = a.constructor
          , h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h))
            return !1;
        c.push(a),
        d.push(b);
        var i = 0
          , k = !0;
        if ("[object Array]" == e) {
            if (i = a.length,
            k = i == b.length)
                for (; i-- && (k = F(a[i], b[i], c, d)); )
                    ;
        } else {
            for (var l in a)
                if (x.has(a, l) && (i++,
                !(k = x.has(b, l) && F(a[l], b[l], c, d))))
                    break;
            if (k) {
                for (l in b)
                    if (x.has(b, l) && !i--)
                        break;
                k = !i
            }
        }
        return c.pop(),
        d.pop(),
        k
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], [])
    }
    ,
    x.isEmpty = function(a) {
        if (null == a)
            return !0;
        if (x.isArray(a) || x.isString(a))
            return 0 === a.length;
        for (var b in a)
            if (x.has(a, b))
                return !1;
        return !0
    }
    ,
    x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }
    ,
    x.isArray = u || function(a) {
        return "[object Array]" == j.call(a)
    }
    ,
    x.isObject = function(a) {
        return a === Object(a)
    }
    ,
    y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]"
        }
    }),
    x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"))
    }
    ),
    "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a
    }
    ),
    x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }
    ,
    x.isNaN = function(a) {
        return x.isNumber(a) && a != +a
    }
    ,
    x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }
    ,
    x.isNull = function(a) {
        return null === a
    }
    ,
    x.isUndefined = function(a) {
        return void 0 === a
    }
    ,
    x.has = function(a, b) {
        return k.call(a, b)
    }
    ,
    x.noConflict = function() {
        return a._ = b,
        this
    }
    ,
    x.identity = function(a) {
        return a
    }
    ,
    x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++)
            d[e] = b.call(c, e);
        return d
    }
    ,
    x.random = function(a, b) {
        return null == b && (b = a,
        a = 0),
        a + Math.floor(Math.random() * (b - a + 1))
    }
    ;
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]","g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")","g")
    };
    x.each(["escape", "unescape"], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(H[a], function(b) {
                return G[a][b]
            })
        }
    }),
    x.result = function(a, b) {
        if (null == a)
            return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }
    ,
    x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [this._wrapped];
                return g.apply(a, arguments),
                M.call(this, c.apply(x, a))
            }
        })
    }
    ;
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b : b
    }
    ,
    x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/
      , K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        " ": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$","g")
          , f = 0
          , g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L, function(a) {
                return "\\" + K[a]
            }),
            c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"),
            d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"),
            e && (g += "';\n" + e + "\n__p+='"),
            f = h + b.length,
            b
        }),
        g += "';\n",
        c.variable || (g = "with(obj||{}){\n" + g + "}\n"),
        g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj","_",g)
        } catch (h) {
            throw h.source = g,
            h
        }
        if (b)
            return d(b, x);
        var i = function(a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}",
        i
    }
    ,
    x.chain = function(a) {
        return x(a).chain()
    }
    ;
    var M = function(a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x),
    y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments),
            "shift" != a && "splice" != a || 0 !== c.length || delete c[0],
            M.call(this, c)
        }
    }),
    y(["concat", "join", "slice"], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }),
    x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    })
}
.call(this),
function() {
    var a, b = this, c = b.Backbone, d = [], e = (d.push,
    d.slice);
    d.splice;
    a = "undefined" != typeof exports ? exports : b.Backbone = {},
    a.VERSION = "1.1.0";
    var f = b._;
    f || "undefined" == typeof require || (f = require("underscore")),
    a.$ = b.jQuery || b.Zepto || b.ender || b.$,
    a.noConflict = function() {
        return b.Backbone = c,
        this
    }
    ,
    a.emulateHTTP = !1,
    a.emulateJSON = !1;
    var g = a.Events = {
        on: function(a, b, c) {
            if (!i(this, "on", a, [b, c]) || !b)
                return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }),
            this
        },
        once: function(a, b, c) {
            if (!i(this, "once", a, [b, c]) || !b)
                return this;
            var d = this
              , e = f.once(function() {
                d.off(a, e),
                b.apply(this, arguments)
            });
            return e._callback = b,
            this.on(a, e, c)
        },
        off: function(a, b, c) {
            var d, e, g, h, j, k, l, m;
            if (!this._events || !i(this, "off", a, [b, c]))
                return this;
            if (!a && !b && !c)
                return this._events = {},
                this;
            for (h = a ? [a] : f.keys(this._events),
            j = 0,
            k = h.length; k > j; j++)
                if (a = h[j],
                g = this._events[a]) {
                    if (this._events[a] = d = [],
                    b || c)
                        for (l = 0,
                        m = g.length; m > l; l++)
                            e = g[l],
                            (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) && d.push(e);
                    d.length || delete this._events[a]
                }
            return this
        },
        trigger: function(a) {
            if (!this._events)
                return this;
            var b = e.call(arguments, 1);
            if (!i(this, "trigger", a, b))
                return this;
            var c = this._events[a]
              , d = this._events.all;
            return c && j(c, b),
            d && j(d, arguments),
            this
        },
        stopListening: function(a, b, c) {
            var d = this._listeningTo;
            if (!d)
                return this;
            var e = !b && !c;
            c || "object" != typeof b || (c = this),
            a && ((d = {})[a._listenId] = a);
            for (var g in d)
                a = d[g],
                a.off(b, c, this),
                (e || f.isEmpty(a._events)) && delete this._listeningTo[g];
            return this
        }
    }
      , h = /\s+/
      , i = function(a, b, c, d) {
        if (!c)
            return !0;
        if ("object" == typeof c) {
            for (var e in c)
                a[b].apply(a, [e, c[e]].concat(d));
            return !1
        }
        if (h.test(c)) {
            for (var f = c.split(h), g = 0, i = f.length; i > g; g++)
                a[b].apply(a, [f[g]].concat(d));
            return !1
        }
        return !0
    }
      , j = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
        case 0:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx);
            return;
        case 1:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f);
            return;
        case 2:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g);
            return;
        case 3:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g, h);
            return;
        default:
            for (; ++d < e; )
                (c = a[d]).callback.apply(c.ctx, b)
        }
    }
      , k = {
        listenTo: "on",
        listenToOnce: "once"
    };
    f.each(k, function(a, b) {
        g[b] = function(b, c, d) {
            var e = this._listeningTo || (this._listeningTo = {})
              , g = b._listenId || (b._listenId = f.uniqueId("l"));
            return e[g] = b,
            d || "object" != typeof c || (d = this),
            b[a](c, d, this),
            this
        }
    }),
    g.bind = g.on,
    g.unbind = g.off,
    f.extend(a, g);
    var l = a.Model = function(a, b) {
        var c = a || {};
        b || (b = {}),
        this.cid = f.uniqueId("c"),
        this.attributes = {},
        b.collection && (this.collection = b.collection),
        b.parse && (c = this.parse(c, b) || {}),
        c = f.defaults({}, c, f.result(this, "defaults")),
        this.set(c, b),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    f.extend(l.prototype, g, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(a) {
            return f.clone(this.attributes)
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return f.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, c) {
            var d, e, g, h, i, j, k, l;
            if (null == a)
                return this;
            if ("object" == typeof a ? (e = a,
            c = b) : (e = {})[a] = b,
            c || (c = {}),
            !this._validate(e, c))
                return !1;
            g = c.unset,
            i = c.silent,
            h = [],
            j = this._changing,
            this._changing = !0,
            j || (this._previousAttributes = f.clone(this.attributes),
            this.changed = {}),
            l = this.attributes,
            k = this._previousAttributes,
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            for (d in e)
                b = e[d],
                f.isEqual(l[d], b) || h.push(d),
                f.isEqual(k[d], b) ? delete this.changed[d] : this.changed[d] = b,
                g ? delete l[d] : l[d] = b;
            if (!i) {
                h.length && (this._pending = !0);
                for (var m = 0, n = h.length; n > m; m++)
                    this.trigger("change:" + h[m], this, l[h[m]], c)
            }
            if (j)
                return this;
            if (!i)
                for (; this._pending; )
                    this._pending = !1,
                    this.trigger("change", this, c);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(a, b) {
            return this.set(a, void 0, f.extend({}, b, {
                unset: !0
            }))
        },
        clear: function(a) {
            var b = {};
            for (var c in this.attributes)
                b[c] = void 0;
            return this.set(b, f.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !f.isEmpty(this.changed) : f.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a)
                return this.hasChanged() ? f.clone(this.changed) : !1;
            var b, c = !1, d = this._changing ? this._previousAttributes : this.attributes;
            for (var e in a)
                f.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
            return c
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return f.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? f.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = this
              , c = a.success;
            return a.success = function(d) {
                return b.set(b.parse(d, a), a) ? (c && c(b, d, a),
                void b.trigger("sync", b, d, a)) : !1
            }
            ,
            K(this, a),
            this.sync("read", this, a)
        },
        save: function(a, b, c) {
            var d, e, g, h = this.attributes;
            if (null == a || "object" == typeof a ? (d = a,
            c = b) : (d = {})[a] = b,
            c = f.extend({
                validate: !0
            }, c),
            d && !c.wait) {
                if (!this.set(d, c))
                    return !1
            } else if (!this._validate(d, c))
                return !1;
            d && c.wait && (this.attributes = f.extend({}, h, d)),
            void 0 === c.parse && (c.parse = !0);
            var i = this
              , j = c.success;
            return c.success = function(a) {
                i.attributes = h;
                var b = i.parse(a, c);
                return c.wait && (b = f.extend(d || {}, b)),
                f.isObject(b) && !i.set(b, c) ? !1 : (j && j(i, a, c),
                void i.trigger("sync", i, a, c))
            }
            ,
            K(this, c),
            e = this.isNew() ? "create" : c.patch ? "patch" : "update",
            "patch" === e && (c.attrs = d),
            g = this.sync(e, this, c),
            d && c.wait && (this.attributes = h),
            g
        },
        destroy: function(a) {
            a = a ? f.clone(a) : {};
            var b = this
              , c = a.success
              , d = function() {
                b.trigger("destroy", b, b.collection, a)
            };
            if (a.success = function(e) {
                (a.wait || b.isNew()) && d(),
                c && c(b, e, a),
                b.isNew() || b.trigger("sync", b, e, a)
            }
            ,
            this.isNew())
                return a.success(),
                !1;
            K(this, a);
            var e = this.sync("delete", this, a);
            return a.wait || d(),
            e
        },
        url: function() {
            var a = f.result(this, "urlRoot") || f.result(this.collection, "url") || J();
            return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        isValid: function(a) {
            return this._validate({}, f.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate)
                return !0;
            a = f.extend({}, this.attributes, a);
            var c = this.validationError = this.validate(a, b) || null;
            return c ? (this.trigger("invalid", this, c, f.extend(b, {
                validationError: c
            })),
            !1) : !0
        }
    });
    var m = ["keys", "values", "pairs", "invert", "pick", "omit"];
    f.each(m, function(a) {
        l.prototype[a] = function() {
            var b = e.call(arguments);
            return b.unshift(this.attributes),
            f[a].apply(f, b)
        }
    });
    var n = a.Collection = function(a, b) {
        b || (b = {}),
        b.model && (this.model = b.model),
        void 0 !== b.comparator && (this.comparator = b.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        a && this.reset(a, f.extend({
            silent: !0
        }, b))
    }
      , o = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , p = {
        add: !0,
        remove: !1
    };
    f.extend(n.prototype, g, {
        model: l,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        add: function(a, b) {
            return this.set(a, f.extend({
                merge: !1
            }, b, p))
        },
        remove: function(a, b) {
            var c = !f.isArray(a);
            a = c ? [a] : f.clone(a),
            b || (b = {});
            var d, e, g, h;
            for (d = 0,
            e = a.length; e > d; d++)
                h = a[d] = this.get(a[d]),
                h && (delete this._byId[h.id],
                delete this._byId[h.cid],
                g = this.indexOf(h),
                this.models.splice(g, 1),
                this.length--,
                b.silent || (b.index = g,
                h.trigger("remove", h, this, b)),
                this._removeReference(h));
            return c ? a[0] : a
        },
        set: function(a, b) {
            b = f.defaults({}, b, o),
            b.parse && (a = this.parse(a, b));
            var c = !f.isArray(a);
            a = c ? a ? [a] : [] : f.clone(a);
            var d, e, g, h, i, j, k, m = b.at, n = this.model, p = this.comparator && null == m && b.sort !== !1, q = f.isString(this.comparator) ? this.comparator : null, r = [], s = [], t = {}, u = b.add, v = b.merge, w = b.remove, x = !p && u && w ? [] : !1;
            for (d = 0,
            e = a.length; e > d; d++) {
                if (i = a[d],
                g = i instanceof l ? h = i : i[n.prototype.idAttribute],
                j = this.get(g))
                    w && (t[j.cid] = !0),
                    v && (i = i === h ? h.attributes : i,
                    b.parse && (i = j.parse(i, b)),
                    j.set(i, b),
                    p && !k && j.hasChanged(q) && (k = !0)),
                    a[d] = j;
                else if (u) {
                    if (h = a[d] = this._prepareModel(i, b),
                    !h)
                        continue;
                    r.push(h),
                    h.on("all", this._onModelEvent, this),
                    this._byId[h.cid] = h,
                    null != h.id && (this._byId[h.id] = h)
                }
                x && x.push(j || h)
            }
            if (w) {
                for (d = 0,
                e = this.length; e > d; ++d)
                    t[(h = this.models[d]).cid] || s.push(h);
                s.length && this.remove(s, b)
            }
            if (r.length || x && x.length)
                if (p && (k = !0),
                this.length += r.length,
                null != m)
                    for (d = 0,
                    e = r.length; e > d; d++)
                        this.models.splice(m + d, 0, r[d]);
                else {
                    x && (this.models.length = 0);
                    var y = x || r;
                    for (d = 0,
                    e = y.length; e > d; d++)
                        this.models.push(y[d])
                }
            if (k && this.sort({
                silent: !0
            }),
            !b.silent) {
                for (d = 0,
                e = r.length; e > d; d++)
                    (h = r[d]).trigger("add", h, this, b);
                (k || x && x.length) && this.trigger("sort", this, b)
            }
            return c ? a[0] : a
        },
        reset: function(a, b) {
            b || (b = {});
            for (var c = 0, d = this.models.length; d > c; c++)
                this._removeReference(this.models[c]);
            return b.previousModels = this.models,
            this._reset(),
            a = this.add(a, f.extend({
                silent: !0
            }, b)),
            b.silent || this.trigger("reset", this, b),
            a
        },
        push: function(a, b) {
            return this.add(a, f.extend({
                at: this.length
            }, b))
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a),
            b
        },
        unshift: function(a, b) {
            return this.add(a, f.extend({
                at: 0
            }, b))
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a),
            b
        },
        slice: function() {
            return e.apply(this.models, arguments)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[a.id] || this._byId[a.cid] || this._byId[a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, b) {
            return f.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c))
                        return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}),
            f.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(f.bind(this.comparator, this)),
            a.silent || this.trigger("sort", this, a),
            this
        },
        pluck: function(a) {
            return f.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? f.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = a.success
              , c = this;
            return a.success = function(d) {
                var e = a.reset ? "reset" : "set";
                c[e](d, a),
                b && b(c, d, a),
                c.trigger("sync", c, d, a)
            }
            ,
            K(this, a),
            this.sync("read", this, a)
        },
        create: function(a, b) {
            if (b = b ? f.clone(b) : {},
            !(a = this._prepareModel(a, b)))
                return !1;
            b.wait || this.add(a, b);
            var c = this
              , d = b.success;
            return b.success = function(a, b, e) {
                e.wait && c.add(a, e),
                d && d(a, b, e)
            }
            ,
            a.save(null, b),
            a
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(a, b) {
            if (a instanceof l)
                return a.collection || (a.collection = this),
                a;
            b = b ? f.clone(b) : {},
            b.collection = this;
            var c = new this.model(a,b);
            return c.validationError ? (this.trigger("invalid", this, c.validationError, b),
            !1) : c
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection,
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d),
            b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)],
            null != b.id && (this._byId[b.id] = b)),
            this.trigger.apply(this, arguments))
        }
    });
    var q = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    f.each(q, function(a) {
        n.prototype[a] = function() {
            var b = e.call(arguments);
            return b.unshift(this.models),
            f[a].apply(f, b)
        }
    });
    var r = ["groupBy", "countBy", "sortBy"];
    f.each(r, function(a) {
        n.prototype[a] = function(b, c) {
            var d = f.isFunction(b) ? b : function(a) {
                return a.get(b)
            }
            ;
            return f[a](this.models, d, c)
        }
    });
    var s = a.View = function(a) {
        this.cid = f.uniqueId("view"),
        a || (a = {}),
        f.extend(this, f.pick(a, u)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    }
      , t = /^(\S+)\s*(.*)$/
      , u = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    f.extend(s.prototype, g, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(b, c) {
            return this.$el && this.undelegateEvents(),
            this.$el = b instanceof a.$ ? b : a.$(b),
            this.el = this.$el[0],
            c !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(a) {
            if (!a && !(a = f.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var b in a) {
                var c = a[b];
                if (f.isFunction(c) || (c = this[a[b]]),
                c) {
                    var d = b.match(t)
                      , e = d[1]
                      , g = d[2];
                    c = f.bind(c, this),
                    e += ".delegateEvents" + this.cid,
                    "" === g ? this.$el.on(e, c) : this.$el.on(e, g, c)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(f.result(this, "el"), !1);
            else {
                var b = f.extend({}, f.result(this, "attributes"));
                this.id && (b.id = f.result(this, "id")),
                this.className && (b["class"] = f.result(this, "className"));
                var c = a.$("<" + f.result(this, "tagName") + ">").attr(b);
                this.setElement(c, !1)
            }
        }
    }),
    a.sync = function(b, c, d) {
        var e = w[b];
        f.defaults(d || (d = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON
        });
        var g = {
            type: e,
            dataType: "json"
        };
        if (d.url || (g.url = f.result(c, "url") || J()),
        null != d.data || !c || "create" !== b && "update" !== b && "patch" !== b || (g.contentType = "application/json",
        g.data = JSON.stringify(d.attrs || c.toJSON(d))),
        d.emulateJSON && (g.contentType = "application/x-www-form-urlencoded",
        g.data = g.data ? {
            model: g.data
        } : {}),
        d.emulateHTTP && ("PUT" === e || "DELETE" === e || "PATCH" === e)) {
            g.type = "POST",
            d.emulateJSON && (g.data._method = e);
            var h = d.beforeSend;
            d.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", e),
                h ? h.apply(this, arguments) : void 0
            }
        }
        "GET" === g.type || d.emulateJSON || (g.processData = !1),
        "PATCH" === g.type && v && (g.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        var i = d.xhr = a.ajax(f.extend(g, d));
        return c.trigger("request", c, i, d),
        i
    }
    ;
    var v = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
      , w = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments)
    }
    ;
    var x = a.Router = function(a) {
        a || (a = {}),
        a.routes && (this.routes = a.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , y = /\((.*?)\)/g
      , z = /(\(\?)?:\w+/g
      , A = /\*\w+/g
      , B = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    f.extend(x.prototype, g, {
        initialize: function() {},
        route: function(b, c, d) {
            f.isRegExp(b) || (b = this._routeToRegExp(b)),
            f.isFunction(c) && (d = c,
            c = ""),
            d || (d = this[c]);
            var e = this;
            return a.history.route(b, function(f) {
                var g = e._extractParameters(b, f);
                d && d.apply(e, g),
                e.trigger.apply(e, ["route:" + c].concat(g)),
                e.trigger("route", c, g),
                a.history.trigger("route", e, c, g)
            }),
            this
        },
        navigate: function(b, c) {
            return a.history.navigate(b, c),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = f.result(this, "routes");
                for (var a, b = f.keys(this.routes); null != (a = b.pop()); )
                    this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(B, "\\$&").replace(y, "(?:$1)?").replace(z, function(a, b) {
                return b ? a : "([^/]+)"
            }).replace(A, "(.*?)"),
            new RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            var c = a.exec(b).slice(1);
            return f.map(c, function(a) {
                return a ? decodeURIComponent(a) : null
            })
        }
    });
    var C = a.History = function() {
        this.handlers = [],
        f.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , D = /^[#\/]|\s+$/g
      , E = /^\/+|\/+$/g
      , F = /msie [\w.]+/
      , G = /\/$/
      , H = /[?#].*$/;
    C.started = !1,
    f.extend(C.prototype, g, {
        interval: 50,
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = this.location.pathname;
                    var c = this.root.replace(G, "");
                    a.indexOf(c) || (a = a.slice(c.length))
                } else
                    a = this.getHash();
            return a.replace(D, "")
        },
        start: function(b) {
            if (C.started)
                throw new Error("Backbone.history has already been started");
            C.started = !0,
            this.options = f.extend({
                root: "/"
            }, this.options, b),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var c = this.getFragment()
              , d = document.documentMode
              , e = F.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(E, "/"),
            e && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,
            this.navigate(c)),
            this._hasPushState ? a.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !e ? a.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = c;
            var g = this.location
              , h = g.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !h)
                    return this.fragment = this.getFragment(null, !0),
                    this.location.replace(this.root + this.location.search + "#" + this.fragment),
                    !0;
                this._hasPushState && h && g.hash && (this.fragment = this.getHash().replace(D, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment + g.search));
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            clearInterval(this._checkUrlInterval),
            C.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function(a) {
            var b = this.getFragment();
            return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))),
            b === this.fragment ? !1 : (this.iframe && this.navigate(b),
            void this.loadUrl())
        },
        loadUrl: function(a) {
            return a = this.fragment = this.getFragment(a),
            f.any(this.handlers, function(b) {
                return b.route.test(a) ? (b.callback(a),
                !0) : void 0
            })
        },
        navigate: function(a, b) {
            if (!C.started)
                return !1;
            b && b !== !0 || (b = {
                trigger: !!b
            });
            var c = this.root + (a = this.getFragment(a || ""));
            if (a = a.replace(H, ""),
            this.fragment !== a) {
                if (this.fragment = a,
                "" === a && "/" !== c && (c = c.slice(0, -1)),
                this._hasPushState)
                    this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace),
                    this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, a, b.replace))
                }
                return b.trigger ? this.loadUrl(a) : void 0
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else
                a.hash = "#" + b
        }
    }),
    a.history = new C;
    var I = function(a, b) {
        var c, d = this;
        c = a && f.has(a, "constructor") ? a.constructor : function() {
            return d.apply(this, arguments)
        }
        ,
        f.extend(c, d, b);
        var e = function() {
            this.constructor = c
        };
        return e.prototype = d.prototype,
        c.prototype = new e,
        a && f.extend(c.prototype, a),
        c.__super__ = d.prototype,
        c
    };
    l.extend = n.extend = x.extend = s.extend = C.extend = I;
    var J = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , K = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b),
            a.trigger("error", a, d, b)
        }
    }
}
.call(this);
