(window.webpackJsonp = window.webpackJsonp || []).push([[43], {
    1028: function(t, e) {
        t.exports = '<div class="rtb-radiobutton" ng-class="{\'rtb-radiobutton--disabled\': isDisabled === true}">\n    <input type="radio"\n           ng-attr-id="ui-input-{{::id}}"\n           ng-attr-name="{{name}}"\n           ng-model="model"\n           ng-value="value"\n           ng-checked="value === model"\n           ng-disabled="isDisabled">\n    <label ng-attr-for="ui-input-{{::id}}"\n           ng-bind-html="::label"\n           ng-if="::label"></label>\n    <info-tooltip class="rtb-radiobutton__icon-wrapper" ng-if="infoTextKey" tooltip-text="infoTextKey | translate"></info-tooltip>\n</div>'
    },
    1295: function(t, e, n) {
        "use strict";
        var r, o = n(26), i = n.n(o), a = n(34), s = n(31), A = n(22), l = n(133), c = n(4407), u = n(21), f = n(54), g = n(1893), d = n(134), h = n(81), p = document.location.origin, w = n(4408).toString() + n(4409).toString(), C = ((r = {})[d.b.ABRIL_FATFACE] = n(4410).toString(),
        r[d.b.BANGERS] = n(4411).toString(),
        r[d.b.EB_GARAMOND] = n(4412).toString(),
        r[d.b.GRADUATE] = n(4413).toString(),
        r[d.b.GRAVITAS_ONE] = n(4414).toString(),
        r[d.b.FREDOKA_ONE] = n(4415).toString(),
        r[d.b.NIXIE_ONE] = n(4416).toString(),
        r[d.b.OPEN_SANS] = n(4417).toString(),
        r[d.b.PERMANENT_MARKER] = n(4418).toString(),
        r[d.b.PT_SANS] = n(4419).toString(),
        r[d.b.PT_SANS_NARROW] = n(4420).toString(),
        r[d.b.PT_SERIF] = n(4421).toString(),
        r[d.b.RAMMETTO_ONE] = n(4422).toString(),
        r[d.b.ROBOTO] = n(4423).toString(),
        r[d.b.ROBOTO_CONDENSED] = n(4424).toString(),
        r[d.b.ROBOTO_SLAB] = n(4425).toString(),
        r[d.b.CAVEAT] = n(4426).toString(),
        r[d.b.TITAN_ONE] = n(4427).toString(),
        r[d.b.LEMON_TUESDAY] = n(4428).toString(),
        r[d.b.ROBOTO_MONO] = n(4429).toString(),
        r[d.b.NOTO_SANS] = w,
        r[d.b.PLEX_SANS] = n(4430).toString(),
        r[d.b.PLEX_SERIF] = n(4431).toString(),
        r[d.b.PLEX_MONO] = n(4432).toString(),
        r);
        function m(t) {
            if (h.a.isInstalledFont(t))
                return "";
            if (!C[t])
                throw new Error("Font " + t + " is not supported!");
            return function(t) {
                var e = new RegExp("url\\((.*?)\\)","gmi");
                return (t.match(e) || []).forEach(function(e) {
                    var n = e.replace(/'/gim, "").replace(/"/gim, "").substring(4, e.length - 1).split("/").filter(function(t) {
                        return !!t
                    })
                      , r = n.pop().split(".");
                    3 === r.length && r.splice(1, 1),
                    n.unshift(p),
                    n.push(r.join(".")),
                    t = t.replace(e, 'url("' + n.join("/") + '")')
                }),
                t
            }(C[t])
        }
        function B(t) {
            if (t.fontFamily) {
                var e = h.a.getName(d.b.OPEN_SANS)
                  , n = h.a.getName(d.b.NOTO_SANS)
                  , r = t.fontFamily;
                if (r.indexOf(e) > 0 && r.indexOf(n) < 0) {
                    var o = t.fontFamilyType || h.a.getTypeByStyle(r);
                    t.fontFamily = '"' + h.a.getName(o) + '", ' + h.a.getStyle(d.b.NOTO_SANS)
                }
            }
            return t
        }
        var E, I = n(293), y = function(t) {
            function e(e, n, r) {
                var o = t.call(this, e, n, r) || this;
                return o.style = e.getStyle(),
                o
            }
            return u.d(e, t),
            e
        }(I.a), Q = function(t) {
            function e(e, n, r) {
                var o = t.call(this, e, n, r) || this;
                return o.color = f.k(o.style.lc, !0),
                o.thickness = o.style.t,
                o.points = o.widget.points,
                o
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                return this.node = "",
                1 === this.points.length ? this.drawPoint() : this.drawCurve(),
                this.node
            }
            ,
            e.prototype.drawPoint = function() {
                this.node = '<circle r="' + this.thickness / 2 + '" cx="' + this.thickness / 2 + '" cy="' + this.thickness / 2 + '" fill="' + this.color + '" transform="' + this.getTransform() + '"/>'
            }
            ,
            e.prototype.drawCurve = function() {
                this.node = '<path d="' + this.arrayToPath(this.points) + '" stroke-linecap="round" stroke-linejoin="round" stroke="' + this.color + '"\n\t\t\tstroke-width="' + this.thickness + '" width="' + this.width + '" height="' + this.height + '" fill="transparent"\n\t\t\ttransform="' + this.getTransform() + " translate(" + this.thickness / 2 + "," + this.thickness / 2 + ')" />'
            }
            ,
            e.prototype.arrayToPath = function(t) {
                var e = "M" + f.r(t[0].x) + "," + f.r(t[0].y) + " ";
                return 2 == t.length ? e += this.arrayToPathAsLine(t) : e += this.arrayToPathAsCurve(t, e),
                e.trim()
            }
            ,
            e.prototype.arrayToPathAsLine = function(t) {
                return "L" + f.r(t[1].x) + " " + f.r(t[1].y)
            }
            ,
            e.prototype.arrayToPathAsCurve = function(t, e) {
                for (var n = 1, r = t.length - 1; n < r; n++) {
                    var o = f.r(t[n - 1].x)
                      , i = f.r(t[n - 1].y)
                      , a = f.r(t[n].x)
                      , s = f.r(t[n].y)
                      , A = f.r(t[n + 1].x)
                      , l = f.r(t[n + 1].y)
                      , c = f.r((o + a) / 2)
                      , u = f.r((i + s) / 2);
                    1 == n && (e += "L" + c + " " + u + " "),
                    e += "C" + c + " " + u + ", " + a + " " + s + ", " + f.r((a + A) / 2) + " " + f.r((s + l) / 2) + " ",
                    n == r - 1 && (e += "L" + A + " " + l + " ")
                }
                return e
            }
            ,
            e
        }(y), v = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            e.prototype.asNode = function() {
                return this.getTransformedSvgImageNode(this.widget.view.getSVGBg(), 'data-frame="true" preserveAspectRatio="none"')
            }
            ,
            e
        }(I.a), b = n(48), x = n(149), S = n.n(x), k = n(636), q = n(93), T = function() {
            function t() {}
            return t.toSVG = function(t, e) {
                var n = this;
                return t.getWords().reduce(function(t, r) {
                    return t + n.getWordSvg(r, e)
                }, "") + t.getBlocks().reduce(function(t, r) {
                    return t + n.getBlockSvg(r, e)
                }, "")
            }
            ,
            t.getBlockSvg = function(t, e) {
                var n = ""
                  , r = t.attributes
                  , o = t.getBlockType()
                  , i = "";
                if (e && (r = Object.assign({}, r, e(r))),
                r && r.color && (i += 'fill="' + r.color + '"'),
                o.name === q.p)
                    switch (o.value) {
                    case q.q.BULLET:
                        n = '<circle r="2" transform="translate(17, ' + (t.y + r.fontSize / 2 + 2) + ')" ' + i + "></circle>";
                        break;
                    case q.q.ORDERED:
                        n = '<text x="25" y="' + (t.y + r.fontSize) + "\" font-family='" + r.fontFamily + "' font-size=\"" + r.fontSize + '" \n\t\t\t\t\t\tdirection="rtl">.' + r.index + "</text>"
                    }
                return n
            }
            ,
            t.getWordSvg = function(e, n) {
                var r = ""
                  , o = e.word.attributes
                  , i = e.word.text
                  , a = []
                  , s = {
                    bold: 'font-weight="bold"',
                    italic: 'font-style="italic"',
                    underline: 'text-decoration="underline"'
                };
                return i && (o.background && (r += '<rect transform="translate(' + e.x + ", " + e.y + ')" width="' + e.width + '" height="16" fill="' + o.background + '"></rect>'),
                Object.keys(o).forEach(function(t) {
                    s.hasOwnProperty(t) && a.push(s[t])
                }),
                n && (o = Object.assign({}, o, n(o))),
                r += '<text xml:space="preserve" x="' + e.x + '" y="' + (e.y + o.fontSize) + '" textLength="' + e.width + '" lengthAdjust="spacingAndGlyphs" letter-spacing="0" font-family=\'' + o.fontFamily + "' font-size=\"" + o.fontSize + '" \n\t\t\t\tfill="' + o.color + '" ' + a.join(" ") + ">" + t.getTextForSvg(i) + "</text>",
                o.link && (r = t.wrapByLink(o.link, r))),
                r
            }
            ,
            t.wrapByLink = function(e, n) {
                return '<a href="' + t.normalizeLink(e) + '" target="_blank">' + n + "</a>"
            }
            ,
            t.normalizeLink = function(t) {
                return t.replace(/&amp;/gi, "&").replace(/&/gi, "&amp;")
            }
            ,
            t.getTextForSvg = function(t) {
                var e = S()(t);
                return /\s/.test(e[e.length - 1]) && (e = e.slice(0, -1) + k.b),
                e
            }
            ,
            t
        }(), O = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                var t = this.getTransformedGroupNode(this.widget.view.getSVGBg());
                if (this.widget.hasText()) {
                    var e = this.widget.displayParams
                      , n = '<g transform="translate(' + e.left + ", " + e.top + ')">' + T.toSVG(this.widget.getRichText(), B) + "</g>";
                    t += this.getTransformedGroupNode(n)
                }
                return this.widget.hasText() && this.document.addFont(this.style[b.a.FONT_FAMILY]),
                t
            }
            ,
            e
        }(y), D = n(92), F = function(t) {
            function e(e, n, r) {
                return t.call(this, e, n, r) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                var t = this;
                return this.defIndex = this.document.tryCreateDefNode(this.url, function(e) {
                    return t.defIndex = e,
                    t.createDefNode()
                }),
                this.getNode()
            }
            ,
            e.prototype.getNode = function() {
                return null
            }
            ,
            e.prototype.createDefNode = function() {
                throw new Error("Abstract method")
            }
            ,
            Object.defineProperty(e.prototype, "url", {
                get: function() {
                    throw new Error("Abstract method")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "imgId", {
                get: function() {
                    return "IMG_" + this.defIndex
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(I.a), L = function(t) {
            function e(e, n, r) {
                var o = t.call(this, e, n, r) || this;
                return o.cropData = o.widget.widgetData.cropData,
                o.fixGeometryDataByCropData(),
                o
            }
            return u.d(e, t),
            e.prototype.getOrigin = function() {
                return location.origin
            }
            ,
            e.prototype.fixGeometryDataByCropData = function() {
                if (this.isCropDataValid()) {
                    var t = this.widget.geometry.rotationRadians
                      , e = this.widget.geometry.scale
                      , n = this.widget.fullSize.width
                      , r = this.widget.fullSize.height
                      , o = this.cropData.x * e
                      , i = this.cropData.y * e
                      , a = s.r(o, i, t, D.a.LEFT_TOP);
                    o = (n - this.cropData.x - this.cropData.width) * e,
                    i = (r - this.cropData.y - this.cropData.height) * e;
                    var A = s.r(o, i, t, D.a.RIGHT_BOTTOM)
                      , l = this.widget.geometry.x + a.x + A.x
                      , c = this.widget.geometry.y + a.y + A.y;
                    this.width = f.r(n),
                    this.height = f.r(r),
                    this.centerX = f.r(this.width / 2),
                    this.centerY = f.r(this.height / 2),
                    this.x = f.r(l - n / 2 - this.viewport.x),
                    this.y = f.r(c - r / 2 - this.viewport.y)
                }
            }
            ,
            Object.defineProperty(e.prototype, "url", {
                get: function() {
                    return this.getOrigin() + this.widget.resourceController.makeFileUrl("created")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                return this.isCropDataValid() ? (this.addClipPathAndGetItsId(),
                this.getNode()) : t.prototype.asNode.call(this)
            }
            ,
            e.prototype.getNode = function() {
                var t = 'width="' + this.widget.fullSize.width + 'px" height="' + this.widget.fullSize.height + 'px" id="' + this.imgId + '"';
                return this.isCropDataValid() && (t += ' clip-path="url(#' + this.clipPathId + ')"'),
                t = t + ' transform="' + this.getTransform() + '"',
                this.getImageNode(this.url, t)
            }
            ,
            e.prototype.isCropDataValid = function() {
                var t = this.widget.fullSize;
                return this.cropData && this.cropData.width > 0 && this.cropData.height > 0 && (this.cropData.width < t.width || this.cropData.height < t.height)
            }
            ,
            e.prototype.addClipPathAndGetItsId = function(t) {
                var e = {
                    url: this.url,
                    node: ""
                };
                return this.defIndex = this.document.addDefNode(e),
                e.node = t ? '<clipPath id="' + this.clipPathId + '">' + t + "</clipPath>" : this.createDefNode(),
                this.clipPathId
            }
            ,
            e.prototype.createDefNode = function() {
                if (this.isCropDataValid()) {
                    var t = '<rect x="' + this.cropData.x + '" y="' + this.cropData.y + '" width="' + this.cropData.width + '" height="' + this.cropData.height + '" />';
                    return '<clipPath id="' + this.clipPathId + '">' + t + "</clipPath>"
                }
                return ""
            }
            ,
            Object.defineProperty(e.prototype, "clipPathId", {
                get: function() {
                    return "clipPath" + (this.defIndex - 1)
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(F), P = n(401), N = n.n(P), R = n(346), M = n.n(R), j = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                var t = this.makeContent()
                  , e = this.makeBackground();
                return this.widget.hasText() && this.document.addFont(this.style[b.a.FONT_FAMILY]),
                e + t
            }
            ,
            e.prototype.makeContent = function() {
                var t = this.widget
                  , e = t.displayParams
                  , n = '<g transform="translate(' + e.left + ", " + e.top + ')">' + T.toSVG(t.getRichText(), B) + "</g>";
                return this.getTransformedGroupNode(n)
            }
            ,
            e.prototype.makeBackground = function() {
                var t = this.widget
                  , e = t.getStrangeStyle();
                t.displayParams.updateAttr(this.width, this.height, {
                    border: e.strokeWidth,
                    type: e.strokeType
                });
                var n = N()(this.widget.displayParams.getTemplate())(M()({}, t.size, e, this.widget.displayParams.attr));
                return this.getTransformedGroupNode(n)
            }
            ,
            e
        }(y), H = n(620), X = n.n(H), z = {
            1: {
                path: "M0 1.006C0 .45.445 0 .994 0h412.012c.55 0 .997.454 1 .998l2.987 400.004c.004.55-.44 1-.994 1.005L1 404.993c-.552.004-1-.45-1-1V1.007z",
                shadow: {
                    x: -6,
                    y: -4,
                    width: "431",
                    height: "419",
                    data: "data:image/png;base64,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"
                }
            },
            "1R": {
                path: "M1.995.996c.003-.55.444-.993 1.01-.99l685.99 3.988c.556.003 1 .453.995 1.006l-3.98 394c-.005.552-.46.997-1.01.994L1.5 396c-.5 0-1.5-1-1.5-1.5L1.995.996z",
                shadow: {
                    x: -1,
                    y: -2,
                    width: "704",
                    height: "414",
                    data: "data:image/png;base64,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"
                }
            },
            2: {
                path: "M.01 1C.004.45.444.005 1.01.01l410.98 3.98c.558.006 1.015.46 1.02 1.017l3.98 396.986c.005.556-.434 1.007-1 1.007H5.01c-.558 0-1.015-.455-1.02-1L.01 1z",
                shadow: {
                    x: -3,
                    y: 2,
                    width: "431",
                    height: "417",
                    data: "data:image/png;base64,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"
                }
            },
            "2R": {
                path: "M.008.995C.003.445.44 0 1.008.003l688.984 1.994c.557.002 1.01.446 1.013 1.01l1.99 389.987c.003.556-.435 1.006-1.002 1.006H4.007c-.556 0-1.01-.445-1.015-.995L.008.995z",
                shadow: {
                    x: 1,
                    y: 3,
                    width: "711",
                    height: "406",
                    data: "data:image/png;base64,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"
                }
            }
        }, U = ((E = {})[""] = {
            x: .44,
            y: .46
        },
        E.R = {
            x: .5,
            y: .5
        },
        E), V = "StickerShadowFilter", G = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                var t = this.makeContent();
                this.setWidgetOffset();
                var e = this.makeBackground();
                return this.widget.hasText() && this.document.addFont(d.b.NOTO_SANS),
                e + t
            }
            ,
            e.prototype.makeContent = function() {
                var t = this.widget
                  , e = t.getSizesObject().innerOffset
                  , n = '<g transform="translate(' + e.left + ", " + e.top + ')">' + T.toSVG(t.getRichText(), B) + "</g>";
                return this.getTransformedGroupNode(n) + this.getTagsAsSvgText()
            }
            ,
            e.prototype.makeBackground = function() {
                var t = X()(1, 2)
                  , e = this.widget.shapeType ? "R" : ""
                  , n = U[e]
                  , r = t + e
                  , o = z[r]
                  , i = r + "Path"
                  , a = "StickerType" + r + "Path"
                  , s = "StickerType" + r
                  , A = z[r].path
                  , l = f.k(this.style[b.a.STICKER_BACKGROUND_COLOR], !0)
                  , c = '<use xlink:href="#' + s + '" transform="' + this.getTransform() + " scale(" + n.x + ", " + n.y + ')" fill="' + l + '"/>';
                return this.document.tryCreateDefNode("StickerFilter", _),
                this.document.tryCreateDefNode("#" + i, function(t, e) {
                    return function() {
                        return '<path id="' + t + '" d="' + e + '"/>'
                    }
                }(a, A)),
                this.document.tryCreateDefNode("#" + s, function(t, e, n, r, o) {
                    return function() {
                        var i = o > .8 ? '<path d="' + n + '" fill-opacity=".12" fill="#000" filter="url(#' + V + ')" transform="translate(1, 3)" />' : '<image xlink:href="' + r.shadow.data + '" width="' + r.shadow.width + 'px" height="' + r.shadow.height + 'px" transform="translate(' + r.shadow.x + ", " + r.shadow.y + ')" />';
                        return '<g id="' + e + '" fill-rule="evenodd">\n\t\t\t\t\t' + i + '\n\t\t\t\t\t<g><use fill="inherit" xlink:href="#' + t + '"/></g>\n\t\t\t\t</g>'
                    }
                }(a, s, A, o, this.getTransformObject().scale)),
                c
            }
            ,
            e.prototype.setWidgetOffset = function() {
                var t = this.widget.getSizesObject()
                  , e = t.innerOffset
                  , n = t.outerOffset;
                this.x += (e.left - n.left) * this.scale,
                this.y += (e.top - n.left) * this.scale
            }
            ,
            e
        }(y);
        function _() {
            return '<filter x="-50%" y="-50%" width="200%" height="200%" id="StickerShadowFilter">\n\t\t\t\t<feOffset result="offOut" in="SourceGraphic" dx="1" dy="3" />\n      \t\t\t<feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />\n\t\t\t</filter>'
        }
        var J = n(228)
          , Y = function(t) {
            function e(e, n, r) {
                var o = t.call(this, e, n, r) || this
                  , i = Object(J.yc)(o.widget.mockupType);
                return "TABLE" !== i && "CHART" !== i || o.listenToGeometryChangedOnce(),
                o
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                var t = this;
                return this.widget.getSvg().then(function() {
                    return t.getTransformedSvgImageNode(t.widget.svg)
                })
            }
            ,
            e.prototype.listenToGeometryChangedOnce = function() {
                var t = this
                  , e = this.widget.geometryChanged.add(function(n) {
                    t.width = f.r(n.width),
                    t.height = f.r(n.height),
                    e.detach()
                })
            }
            ,
            e
        }(I.a)
          , W = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            e.prototype.asNode = function() {
                return t.prototype.asNode.call(this),
                '<use xlink:href="#' + this.imgId + '" transform="' + this.getTransform() + '"/>'
            }
            ,
            e.prototype.createDefNode = function() {
                var t = this.getImageNode(this.url, 'width="' + this.width + 'px" height="' + this.height + 'px"');
                return '<g id="' + this.imgId + '"><rect fill="black" height="' + this.height + 'px" width="' + this.width + 'px" />' + t + "</g>"
            }
            ,
            Object.defineProperty(e.prototype, "url", {
                get: function() {
                    return this.widget.visual.imageUrl
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(F)
          , K = n(4433)
          , Z = n(547)
          , $ = (n(281),
        .25)
          , tt = .2
          , et = 0;
        function nt(t, e) {
            return t / 100 * e
        }
        var rt = 2;
        function ot(t) {
            var e = t.getSize()
              , n = function(t) {
                var e = t.textVisual
                  , n = t.geometry
                  , r = s.B(e.position.x, e.position.y, n.rotationRadians)
                  , o = t.canvasVisual.position.clone().add(r)
                  , i = "scale(" + n.scale + ")"
                  , a = "rotate(" + n.rotation + ")";
                return "translate(" + o.x + ", " + o.y + ") " + i + " " + a
            }(t)
              , r = function(t) {
                return T.toSVG(t.textVisual, B)
            }(t);
            return '<g width="' + e.width + '" height="' + e.height + '" transform="' + n + '">' + r + " </g>"
        }
        function it(t) {
            var e = t.textVisual
              , n = t.geometry
              , r = t.getSize()
              , o = n.rotationRadians
              , a = n.scale
              , A = s.B(e.position.x, e.position.y, o);
            return function(t, e, n, r) {
                var o = e.width * n - e.width
                  , a = e.height * n - e.height
                  , A = new i.a.Rectangle(t.x - rt,t.y - rt,e.width + o + rt,e.height + a + rt)
                  , l = A.leftTop
                  , c = A.rightTop
                  , u = A.rightBottom
                  , f = A.leftBottom;
                return c = s.B(c.x, c.y, r, l),
                u = s.B(u.x, u.y, r, l),
                f = s.B(f.x, f.y, r, l),
                [l, c, u, f]
            }(t.canvasVisual.position.clone().add(A), r, a, o)
        }
        var at, st, At = n(128), lt = ((at = {})[Z.a.NONE] = null,
        at[Z.a.OPEN_ARROW] = "drawOpenArrow",
        at[Z.a.ARROW] = "drawArrow",
        at[Z.a.FILLED_ARROW] = "drawFilledArrow",
        at[Z.a.FILLED_RHOMBUS] = "drawFilledRhombus",
        at[Z.a.RHOMBUS] = "drawRhombus",
        at[Z.a.CIRCLE] = "drawCircle",
        at[Z.a.FILLED_CIRCLE] = "drawFilledCircle",
        at[Z.a.ARC_ARROW] = "drawFilledArrow",
        at), ct = function(t) {
            function e(e, n, r) {
                var o = t.call(this, e, n, r) || this;
                o.additional = "",
                o.type = o.style.lt,
                o.color = f.k(o.widget.linkLine.lineParams.color, !0),
                o.rotation = o.widget.geometry.rotation,
                o.thickness = o.widget.linkLine.lineParams.thick;
                var i = o.widget.linkLine.lineParams.dashArray;
                return 2 == i.length && (o.additional = ' stroke-dasharray="' + i[0] + "," + i[1] + '" '),
                o.additional += 'stroke-linecap="' + o.widget.linkLine.lineParams.cap + '" ',
                o.x1 = o.widget.getPointX(0) - n.x,
                o.y1 = o.widget.getPointY(0) - n.y,
                o.x2 = o.widget.x - o.widget.width / 2 - n.x,
                o.y2 = o.widget.y - o.widget.height / 2 - n.y,
                o
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                this.node = "";
                var t = this.widget.linkLine
                  , e = "LineHeadMask" + Object(At.a)(6)
                  , n = this.widget.captionLayer.captionsCount > 0;
                return (t.size.width || t.size.height) && (t.isSketchArrow ? this.drawSketchArrow() : (this.drawCurve(this.widget, n ? e : ""),
                this.drawHead(this.widget.end0, t.lineParams.thick),
                this.drawHead(this.widget.end1, t.lineParams.thick))),
                n && (this.document.addFont(d.b.NOTO_SANS),
                this.drawCaptions(e)),
                this.node = this.getTransformedGroupNode(this.node),
                this.node
            }
            ,
            e.prototype.drawCaptions = function(t) {
                var e = this
                  , n = ""
                  , r = ""
                  , o = "";
                if (this.widget.captionLayer.forEachCaption(function(t) {
                    n += e.getHeadPath(t),
                    r += ot(t)
                }),
                n) {
                    var i = this.getDocSize()
                      , a = -1 * this.thickness
                      , s = i.width
                      , A = -1 * this.thickness
                      , l = i.height;
                    o = '<clipPath id="' + t + '">\n\t\t\t\t<path d="' + (n = "M " + a + " " + A + n + (" M " + a + " " + A + " L " + s + " " + A + " L " + s + " " + l + " L " + a + " " + l)) + '" fill-rule="evenodd" clip-rule="evenodd" />\n\t\t\t</clipPath>'
                }
                this.node += o + r
            }
            ,
            e.prototype.drawSketchArrow = function() {
                var t = function(t) {
                    var e = Math.max(16, t * $)
                      , n = Math.max(16, t * tt)
                      , r = Math.max(2, .1 * e)
                      , o = Math.max(8, e, r)
                      , i = .5 * o
                      , a = [{
                        c: "M",
                        x: t - nt(n, 85),
                        y: nt(o, 5)
                    }, {
                        c: "L",
                        x: t - r / 2,
                        y: i
                    }, {
                        c: "L",
                        x: t - nt(n, 85),
                        y: nt(o, 95)
                    }, {
                        c: "L",
                        x: t - nt(n, 70),
                        y: i
                    }, {
                        c: "M",
                        x: t - nt(n, 75),
                        y: i + nt(o, 20)
                    }, {
                        c: "L",
                        x: r / 2,
                        y: i
                    }, {
                        c: "L",
                        x: t - nt(n, 75),
                        y: i - nt(o, 20)
                    }];
                    return o,
                    t,
                    et = r,
                    a
                }(this.widget.length)
                  , e = t.splice(0, 4);
                this.thickness = et,
                this.drawSketchArrowPart(e),
                this.drawSketchArrowPart(t)
            }
            ,
            e.prototype.drawSketchArrowPart = function(t) {
                var e = t.map(function(t, e) {
                    return t.c + t.x + "," + t.y
                }).join(" ") + " z";
                this.node += '<path d="' + e + '" fill="' + this.color + '" stroke="' + this.color + '"\n\t\t\tstroke-linejoin="round" stroke-width="' + this.thickness + '" />'
            }
            ,
            e.prototype.drawHead = function(t, e) {
                var n = lt[t.type];
                if (n) {
                    var r = t.globalX - this.viewport.x - this.x2
                      , o = t.globalY - this.viewport.y - this.y2
                      , a = t.actualVisualLength
                      , s = t.actualVisualThickness
                      , A = t.visual.rotation * i.a.RAD_TO_DEG;
                    this[n](r, o, A, a, s, e)
                }
            }
            ,
            e.prototype.getDocSize = function() {
                var t = this.document.getSize()
                  , e = this.getScaledSize()
                  , n = this.getTransformObject()
                  , r = t.height
                  , o = t.width;
                return e.height > r && (r = e.height + Math.abs(n.translate.x)),
                e.width > o && (o = e.width + Math.abs(n.translate.y)),
                {
                    height: r,
                    width: o
                }
            }
            ,
            e.prototype.getHeadPath = function(t) {
                for (var e = "", n = it(t), r = 0; r < n.length; r++) {
                    var o = this.checkUPoint(n[r]);
                    e += 0 === r ? " M " + o.x + " " + o.y : " L " + o.x + " " + o.y
                }
                return e
            }
            ,
            e.prototype.checkUPoint = function(t) {
                var e = -1 * this.thickness
                  , n = t.clone();
                return n.x < e && (n.x = e),
                n.y < e && (n.y = e),
                n
            }
            ,
            e.prototype.getPath = function(t) {
                for (var e = t.curves, n = "", r = 0, o = e.length; r < o; r++) {
                    var i = e[r]
                      , a = i.p0.clone()
                      , s = i.c0 ? i.c0.clone() : null
                      , A = i.c1 ? i.c1.clone() : null
                      , l = i.p1.clone();
                    0 == r && (n += "M " + a.x + " " + a.y),
                    n += A ? " C " + s.x + " " + s.y + " " + A.x + " " + A.y : s ? " Q " + s.x + " " + s.y : " L",
                    n += " " + l.x + " " + l.y
                }
                return n
            }
            ,
            e.prototype.drawCurve = function(t, e) {
                var n = this.getPath(t)
                  , r = e ? 'clip-path="url(#' + e + ')"' : "";
                this.node += "<path " + this.additional + ' \n\t\t\tstroke="' + this.color + '" stroke-width="' + this.thickness + '" fill="transparent"\n\t\t\td="' + n + '" ' + r + "/>"
            }
            ,
            e.prototype.drawOpenArrow = function(t, e, n, r, o, i) {
                var a = "LineHeadOpenArrow" + i;
                this.addHeadNodeOpenArrow(a, r, o),
                this.node += this.getEmptyHeadChunk(a, t, e, n, "transparent")
            }
            ,
            e.prototype.drawArrow = function(t, e, n, r, o, i) {
                var a = "LineHeadArrow" + i;
                this.addHeadNodeArrow(a, r, o),
                this.node += this.getEmptyHeadChunk(a, t, e, n)
            }
            ,
            e.prototype.drawFilledArrow = function(t, e, n, r, o, i) {
                var a = "LineHeadArrow" + i;
                this.addHeadNodeArrow(a, r, o),
                this.node += this.getFilledHeadChunk(a, t, e, n)
            }
            ,
            e.prototype.drawRhombus = function(t, e, n, r, o, i) {
                var a = "LineHeadRhombus" + i;
                this.addHeadNodeRhombus(a, r, o),
                this.node += this.getEmptyHeadChunk(a, t, e, n)
            }
            ,
            e.prototype.drawFilledRhombus = function(t, e, n, r, o, i) {
                var a = "LineHeadRhombus" + i;
                this.addHeadNodeRhombus(a, r, o),
                this.node += this.getFilledHeadChunk(a, t, e, n)
            }
            ,
            e.prototype.drawCircle = function(t, e, n, r, o, i) {
                var a = "LineHeadCircle" + i;
                this.addHeadNodeCircle(a, r, o),
                this.node += this.getEmptyHeadChunk(a, t, e, n)
            }
            ,
            e.prototype.drawFilledCircle = function(t, e, n, r, o, i) {
                var a = "LineHeadCircle" + i;
                this.addHeadNodeCircle(a, r, o),
                this.node += this.getFilledHeadChunk(a, t, e, n)
            }
            ,
            e.prototype.getEmptyHeadChunk = function(t, e, n, r, o) {
                return void 0 === o && (o = "white"),
                ' <use xlink:href="#' + t + '" stroke="' + this.color + '"\n\t\t\tstroke-width="' + this.thickness + '" fill="' + o + '"\n\t\t\t' + this.getTransformChunk(e, n, r, !0) + " /> "
            }
            ,
            e.prototype.getFilledHeadChunk = function(t, e, n, r) {
                return ' <use xlink:href="#' + t + '" fill="' + this.color + '"\n\t\t\t' + this.getTransformChunk(e, n, r, !1) + " /> "
            }
            ,
            e.prototype.getTransformChunk = function(t, e, n, r) {
                var o = ""
                  , i = "";
                return r && (i += "scale(0.9,0.9)",
                o += "translate(" + -this.thickness / .9 + ",0)"),
                ' transform="translate(' + t + ", " + e + ") " + i + " rotate(" + n + ") " + o + '" '
            }
            ,
            e.prototype.addHeadNodeArrow = function(t, e, n) {
                this.document.tryCreateDefNode(t, function() {
                    return '<path id="' + t + '" d="M' + -e + "," + -n / 2 + " L0,0 L" + -e + "," + n / 2 + ' Z"></path>'
                })
            }
            ,
            e.prototype.addHeadNodeOpenArrow = function(t, e, n) {
                this.document.tryCreateDefNode(t, function() {
                    return '<path id="' + t + '" d="M' + -e + "," + -n / 2 + " L0,0 L" + -e + "," + n / 2 + " M" + -e + ',0 L0,0"></path>'
                })
            }
            ,
            e.prototype.addHeadNodeCircle = function(t, e, n) {
                this.document.tryCreateDefNode(t, function() {
                    return '<ellipse id="' + t + '" cx="' + -e / 2 + '" cy="0" rx="' + e / 2 + '" ry="' + n / 2 + '"></ellipse>'
                })
            }
            ,
            e.prototype.addHeadNodeRhombus = function(t, e, n) {
                this.document.tryCreateDefNode(t, function() {
                    return '<path id="' + t + '" d="M' + -e + ",0 L" + -e / 2 + "," + -n / 2 + " L0,0 L" + -e / 2 + "," + n / 2 + ' Z"></path>'
                })
            }
            ,
            e
        }(y), ut = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                return '<rect fill="#ffffff" width="' + this.width + '" height="' + this.height + '" transform="' + this.getTransform() + '"/>' + this.getTransformedGroupNode(this.widget.getSVG())
            }
            ,
            e
        }(I.a), ft = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                return '<rect fill="#cccccc" width="' + this.width + '" height="' + this.height + '" transform="' + this.getTransform() + '"/>' + this.getTransformedGroupNode(this.widget.getSVG())
            }
            ,
            e
        }(I.a), gt = n(4434), dt = n(4435), ht = n(4436), pt = n(243), wt = n(71), Ct = n(216), mt = n(99), Bt = d.b.NOTO_SANS, Et = q.f, It = h.a.getStyle(Bt), yt = h.a.getLineHeight(Bt), Qt = yt * Et, vt = mt.a.intColorToHEX(Ct.s), bt = mt.a.intColorToHEX(Ct.r), xt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                this.document.addFont(d.b.NOTO_SANS);
                var t = this.makeBackground()
                  , e = this.makeSwimlanes()
                  , n = this.getUsmTitle(this.widget.width, this.widget.getFileName());
                return this.getTransformedGroupNode(n + t + e)
            }
            ,
            e.prototype.getUsmTitle = function(t, e) {
                var n = bt;
                e || (e = Ct.x,
                n = vt);
                var r = this.makeNameLabel(e, t, Ct.w, n);
                return this.getGroupNode(r, 'transform="translate(0 ' + 2 * -Qt + ')"')
            }
            ,
            e.prototype.makeBackground = function() {
                return '<rect x="0" y="0" width="' + this.widget.width + '" height="' + this.widget.height + '" stroke="#ebebeb" fill="#ffffff" opacity="1" />'
            }
            ,
            e.prototype.makeSwimlanes = function() {
                var t = this
                  , e = this.widget.bounds
                  , n = this.widget.template.swimlanes;
                return this.widget.template.swimlanesView.map(function(r, o) {
                    var i = n[o]
                      , a = r.position.y - e.top + 8
                      , s = i.cardsCount.toString()
                      , A = t.getWidth(s, Et) + Ct.n
                      , l = Object(wt.j)(r.name)
                      , c = t.widget.width - 2 * Ct.y - A - Ct.n
                      , u = t.getWidth(Object(wt.j)(l), Et, c)
                      , f = t.makeNameLabel(l, c, Et)
                      , g = t.makeCardsCountLabel(s, Math.min(u, c) + Ct.n)
                      , d = t.curriedMakeSwimlane()
                      , h = t.getGroupNode(f + g, 'transform="translate(' + Ct.y + " " + Qt + ')"');
                    return t.getGroupNode(d + h, 'transform="translate(0 ' + a + ')"')
                }, []).join("")
            }
            ,
            e.prototype.curriedMakeSwimlane = function() {
                return '<line x1="0" y1="0" x2="' + this.widget.width + '" y2="0" stroke="#ebebeb" />'
            }
            ,
            e.prototype.getWidth = function(t, e, n) {
                return pt.a.getInstance().getWidth(t, e, Bt, yt, n)
            }
            ,
            e.prototype.makeNameLabel = function(t, e, n, r) {
                void 0 === r && (r = bt);
                var o = Object(wt.j)(t)
                  , i = this.getWidth(o, n, e);
                return i > e && (i = e,
                o = Object(wt.f)(o, i, n + "px " + It)),
                '<text dy="' + Qt + "\" style='font: " + n + "px " + It + "; fill: " + r + ";' textLength=\"" + i + '" lengthAdjust="spacingAndGlyphs">' + S()(o) + "</text>"
            }
            ,
            e.prototype.makeCardsCountLabel = function(t, e) {
                var n = '<text dy="' + Qt + '" x="' + (e + Ct.n) + "\" style='font: " + Et + "px " + It + ";'>" + t + "</text>"
                  , r = '<line x1="' + e + '" y1="' + Ct.b + '" x2="' + e + '" y2="' + Ct.j + '" stroke="#ebebeb" />';
                return this.getGroupNode(r + n, "")
            }
            ,
            e
        }(I.a), St = n(242), kt = d.b.NOTO_SANS, qt = St.o, Tt = h.a.getLineHeight(kt), Ot = h.a.getStyle(kt), Dt = "font: " + qt + "px " + Ot + ";", Ft = qt, Lt = mt.a.intColorToHEX(St.q), Pt = mt.a.intColorToHEX(St.n), Nt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.d(e, t),
            Object.defineProperty(e.prototype, "isScalable", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.asNode = function() {
                this.document.addFont(kt);
                var t = this.widget.getViewModel()
                  , e = this.makeBackground(t)
                  , n = this.makeSwimlanes(t)
                  , r = this.makeColumns(t)
                  , o = this.getKanbanTitle(t.rect.width, t.title);
                return this.getTransformedGroupNode(o + e + n + r)
            }
            ,
            e.prototype.getKanbanTitle = function(t, e) {
                var n = Pt;
                e || (e = St.z,
                n = Lt);
                var r = this.makeNameLabel(e, t, n);
                return this.getGroupNode(r, 'transform="translate(0 ' + 2 * -Ft + ')"')
            }
            ,
            e.prototype.makeBackground = function(t) {
                var e = t.columns.length - 1
                  , n = this.widget.height;
                return t.columns.map(function(t, r) {
                    var o = r != e ? St.g : 0
                      , i = t.rect.width - o;
                    return '<rect x="' + t.rect.x + '" y="0" width="' + i + '" height="' + n + '" rx="' + St.d + '" ry="' + St.d + '" stroke="' + Lt + '" fill="#ffffff" opacity="1" />'
                }).join("")
            }
            ,
            e.prototype.makeSwimlanes = function(t) {
                var e = this
                  , n = t.columns[0] && t.columns[0].rect.width;
                return n = t.columns.length > 1 ? n - St.g : n,
                t.swimlanes.map(function(r, o) {
                    var i = r.rect.y
                      , a = r.cardsCount
                      , s = e.makeTitle(r.title, a, n, St.f)
                      , A = t.columns.length - 1
                      , l = t.columns.map(function(t, e) {
                        var n = t.rect
                          , r = n.x
                          , i = r + n.width - (e != A ? St.g : 0) - St.f
                          , a = 0 === o ? t.color : Lt
                          , s = 0 === o ? -1 : 0
                          , l = 0 === o ? 2 : 1;
                        return '<line x1="' + (r + St.f) + '" y1="' + s + '" x2="' + i + '" y2="' + s + '" stroke="' + a + '" stroke-width="' + l + '"/>'
                    }).join("");
                    return e.getGroupNode(s + l, 'transform="translate(0 ' + i + ')"')
                }).concat("")
            }
            ,
            e.prototype.makeColumns = function(t) {
                var e = this;
                return t.columns.map(function(t) {
                    var n = t.rect.x
                      , r = t.subColumns.reduce(function(t, e) {
                        return e.items.length + t
                    }, 0)
                      , o = e.makeTitle(t.title, r, t.rect.width, St.f);
                    return e.getGroupNode(o, 'transform="translate(' + n + ' 0)"')
                }).concat("")
            }
            ,
            e.prototype.makeTitle = function(t, e, n, r, o) {
                void 0 === o && (o = Ft);
                var i = e.toString()
                  , a = n - 2 * r - (this.getWidth(i) + St.i) - St.i
                  , s = this.getWidth(Object(wt.j)(t), a)
                  , A = this.makeNameLabel(t, a)
                  , l = this.makeCardsCountLabel(i, Math.min(s, a) + St.i);
                return this.getGroupNode(A + l, 'transform="translate(' + r + " " + o + ')"')
            }
            ,
            e.prototype.getWidth = function(t, e) {
                return pt.a.getInstance().getWidth(t, qt, kt, Tt, e)
            }
            ,
            e.prototype.makeNameLabel = function(t, e, n) {
                void 0 === n && (n = Pt);
                var r = Object(wt.j)(t)
                  , o = this.getWidth(r, e);
                return o > e && (o = e,
                r = Object(wt.f)(r, o, qt + "px " + Ot)),
                '<text dy="' + Ft + "\" style='" + Dt + "; fill: " + n + ";' textLength=\"" + o + '" lengthAdjust="spacingAndGlyphs">' + S()(r) + "</text>"
            }
            ,
            e.prototype.makeCardsCountLabel = function(t, e, n) {
                void 0 === n && (n = Pt);
                var r = '<text dy="' + Ft + '" x="' + (e + St.i) + "\" style='" + Dt + "; fill: " + n + ";'>" + t + "</text>"
                  , o = '<line x1="' + e + '" y1="2" x2="' + e + '" y2="' + St.m + '" stroke="' + Lt + '" />';
                return this.getGroupNode(o + r, "")
            }
            ,
            e
        }(I.a), Rt = 842, Mt = 525, jt = ((st = {})[a.a.CURVE] = Q,
        st[a.a.DOCUMENT] = K.a,
        st[a.a.MOCKUP] = Y,
        st[a.a.FRAME] = v,
        st[a.a.SHAPE] = O,
        st[a.a.STICKER] = G,
        st[a.a.TEXT] = j,
        st[a.a.LINE] = ct,
        st[a.a.IMAGE] = L,
        st[a.a.WEBSCREEN] = L,
        st[a.a.VIDEO] = W,
        st[a.a.PREVIEW] = ut,
        st[a.a.EMBED] = ft,
        st[a.a.JIRACARD] = gt.a,
        st[a.a.RALLYCARD] = dt.a,
        st[a.a.CARD] = ht.a,
        st[a.a.USM] = xt,
        st[a.a.KANBAN] = Nt,
        st), Ht = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = !1);
                var o = t.call(this) || this;
                return o.nodes = [],
                o.defNodes = [],
                o.fontFacesType = [],
                o.fontFaces = {},
                o.viewport = e,
                o.startView = n,
                o.useOriginScale = r,
                o.pixelRatio = A.pixiCanvas.pixelRatio,
                o.calcScale(),
                o
            }
            return u.d(e, t),
            e.prototype.getScale = function() {
                return this.scale
            }
            ,
            e.prototype.getSize = function() {
                return {
                    width: f.r(this.viewport.width * this.scale),
                    height: f.r(this.viewport.height * this.scale)
                }
            }
            ,
            e.prototype.getSvgWidgetType = function(t) {
                return jt[t]
            }
            ,
            e.prototype.addWidget = function(t) {
                var e = this.getSvgWidgetType(t.widgetType);
                if (e) {
                    var n = new e(t,this.viewport,this).asNode();
                    n instanceof Object ? this.addNodePromise(n) : this.addNode(n)
                }
            }
            ,
            e.prototype.addFont = function(t) {
                this.fontFacesType.includes(t) || (this.fontFacesType.push(t),
                this.fontFaces[t] = m(t))
            }
            ,
            e.prototype.addDefNode = function(t) {
                return this.defNodes.push(t) - 1
            }
            ,
            e.prototype.tryCreateDefNode = function(t, e) {
                if (!t)
                    return null;
                var n;
                if (!this.defNodes.some(function(e, r) {
                    return e.url === t && (n = r,
                    !0)
                })) {
                    var r = {
                        url: t,
                        node: ""
                    };
                    n = this.addDefNode(r),
                    r.node = e(n)
                }
                return n
            }
            ,
            e.prototype.getDefNode = function(t) {
                return this.defNodes[t]
            }
            ,
            e.prototype.addNode = function(t) {
                return this.nodes.push(t) - 1
            }
            ,
            e.prototype.addNodePromise = function(t) {
                var e = this
                  , n = this.addNode("loading");
                t.then(function(t) {
                    e.nodes[n] = t
                }),
                this.addPromise(t)
            }
            ,
            e.prototype.getResult = function() {
                var t = this
                  , e = [];
                e.push('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'),
                e.push(this.getSVGHeader()),
                e.push("<defs>");
                var n = Object.keys(this.fontFaces).reduce(function(e, n) {
                    var r = t.fontFaces[n];
                    return r && (e += "<![CDATA[" + r + "]]>"),
                    e
                }, "");
                return n && e.push('<style xmlns="http://www.w3.org/2000/svg" type="text/css">' + n + "</style>"),
                this.defNodes.forEach(function(t) {
                    e.push(t.node)
                }),
                e.push("</defs>"),
                e = e.concat(this.nodes),
                this.startView && e.push("<metadata>\n\t\t\t\t\t\t\t<sv>\n\t\t\t\t\t\t\t\t<x>" + this.startView.x + "</x>\n\t\t\t\t\t\t\t\t<y>" + this.startView.y + "</y>\n\t\t\t\t\t\t\t\t<width>" + this.startView.width + "</width>\n\t\t\t\t\t\t\t\t<height>" + this.startView.height + "</height>\n\t\t\t\t\t\t\t</sv>\n\t\t\t\t\t\t</metadata>"),
                e.push("</svg>"),
                e.join("")
            }
            ,
            e.prototype.getSVGHeader = function() {
                var t = this.getSize();
                return '<svg width="' + t.width + 'px" height="' + t.height + 'px"\n\t\tstyle="background-color:#FFFFFF;transform-origin: 0px 0px 0px;" version="1.1"\n\t\txmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
            }
            ,
            e.prototype.calcScale = function() {
                var t = 1;
                this.useOriginScale || (t = this.viewport.width > this.viewport.height ? Rt * this.pixelRatio / this.viewport.width : Mt * this.pixelRatio / this.viewport.height);
                this.scale = t
            }
            ,
            e
        }(g.a);
        n.d(e, "b", function() {
            return Ut
        }),
        n.d(e, "c", function() {
            return Vt
        }),
        n.d(e, "d", function() {
            return Gt
        }),
        n.d(e, "a", function() {
            return _t
        });
        var Xt, zt = "outside_snapshot";
        function Ut(t, e, n, r) {
            var o = new c.a
              , a = A.pixiCanvas.pixelRatio;
            return Jt({
                viewports: t,
                getDoc: function() {
                    return o
                },
                convertDocData: function(t, o) {
                    var s = e[o] * a
                      , l = t.width * s
                      , c = t.height * s
                      , u = new i.a.RenderTexture(1,1);
                    A.canvasLayers.setLayersPositionScale(-t.x * s, -t.y * s, s),
                    u.resize(l, c, !0),
                    u.textureBuffer.context.setTransform(1, 0, 0, 1, 0, 0),
                    u.textureBuffer.context.save(),
                    u.render(A.pixiCanvas.mainContainer, null, !1),
                    u.textureBuffer.context.restore(),
                    r && r(u, l, c);
                    try {
                        return u.textureBuffer.canvas.toDataURL(n)
                    } catch (t) {
                        console.error(t)
                    }
                    return ""
                },
                convertResultData: function(t) {
                    return t
                }
            }).then(function(t) {
                return t
            }, function(t) {
                throw console.error(t),
                new Error(t)
            })
        }
        function Vt(t, e, n) {
            var r = A.pixiCanvas.pixelRatio
              , o = e / n
              , c = e / t.width
              , u = n / t.height
              , f = t.width
              , g = t.height
              , d = 0;
            c < u ? (d = u,
            f = g * o) : (d = c,
            g = f / o);
            var h = new i.a.Rectangle(t.x,t.y,f,g);
            d *= r,
            A.canvasLayers.setLayersPositionScale(-t.x * d, -t.y * d, d),
            A.canvasLayers.setNonSnapshottableLayersVisible(!1),
            Xt = [];
            var p = []
              , w = [];
            !function(t, e, n) {
                var r = !Object(l.a)().getVisible();
                A.quadTree.allObjects.forEach(function(o) {
                    r && o.widgetType === a.a.FRAME || !t.intersects(o.geometry.bounds) || e.push(o),
                    o.isHidden() || (o.setHidden(zt, !0),
                    n.push(o))
                })
            }(h, p, w);
            var C = p.filter(function(t) {
                return t.widgetType === a.a.FRAME
            });
            p = A.widgetController.sortWidgetsByZIndex(p),
            (p = C.concat(p)).forEach(function(t) {
                s.a(Xt, t) && t.setSnapshotMode(!0)
            });
            var m = new i.a.RenderTexture(e * r,n * r);
            return m.textureBuffer.context.setTransform(1, 0, 0, 1, 0, 0),
            m.textureBuffer.context.save(),
            m.render(A.pixiCanvas.mainContainer, null, !1),
            m.textureBuffer.context.restore(),
            Yt(),
            w.forEach(function(t) {
                return t.setHidden(zt, !1)
            }),
            m
        }
        function Gt(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            return Jt({
                viewports: t,
                getDoc: function(t) {
                    return new Ht(t,e,n)
                },
                convertDocData: function(t, e, n) {
                    return {
                        index: e,
                        page: n
                    }
                },
                convertResultData: function(t) {
                    return t.map(function(t) {
                        return t.page
                    })
                }
            })
        }
        function _t() {
            !0,
            Yt()
        }
        function Jt(t) {
            return new Promise(function(e, n) {
                Xt = [],
                function(t) {
                    return new Promise(function(e, n) {
                        var r = [];
                        t.viewports.forEach(function(o, i) {
                            var c = t.getDoc(o, t.startView)
                              , u = function(t) {
                                var e = A.quadTree.allObjects.filter(function(e) {
                                    return e.widgetType != a.a.FRAME && t.intersects(e.geometry.bounds)
                                })
                                  , n = A.widgetController.sortWidgetsByZIndex(e);
                                if (!Object(l.a)().getVisible())
                                    return n;
                                return Object(l.a)().framesList.items.filter(function(e) {
                                    return t.intersects(e.geometry.bounds)
                                }).concat(n)
                            }(o);
                            u.forEach(function(t) {
                                s.a(Xt, t),
                                c.addWidget(t)
                            }),
                            c.prepare().then(function(n) {
                                r[i] = n,
                                Object.keys(r).length === t.viewports.length && e(r)
                            }).fail(function(t) {
                                console.error("processViewports prepare fail", t),
                                ErrorsTracker.warning("Export error: ", t),
                                n(t)
                            })
                        })
                    }
                    )
                }(t).then(function(n) {
                    var r = [];
                    A.canvasLayers.setNonSnapshottableLayersVisible(!1),
                    Xt.forEach(function(t) {
                        return t.setSnapshotMode(!0)
                    }),
                    t.viewports.forEach(function(e, o) {
                        r[o] = t.convertDocData(e, o, n[o])
                    });
                    var o = t.convertResultData(r);
                    Yt(),
                    e(o)
                }).catch(function(t) {
                    Yt(),
                    n(t)
                })
            }
            )
        }
        function Yt() {
            Xt && (A.canvasLayers.setLayersPositionScale(A.canvasController.canvasX, A.canvasController.canvasY, A.canvasController.canvasScale),
            A.canvasLayers.setNonSnapshottableLayersVisible(!0),
            Xt.forEach(function(t) {
                return t.setSnapshotMode(!1)
            }),
            Xt = [])
        }
    },
    1892: function(t, e, n) {
        "use strict";
        (function(t, r) {
            var o, i = n(26), a = n.n(i), s = n(38), A = n(1295), l = n(37), c = n(110), u = n(113), f = n(509), g = n(849), d = n(588), h = n(107), p = s.b(), w = l.b(), C = u.a(u.b.SVG), m = n(4437), B = function() {
                function e() {}
                return e.prototype.start = function() {
                    var t = this;
                    this.isHighQualityExportAvailable() ? this.export() : function() {
                        o || (o = new Promise(function(t, e) {
                            var n = a.a.Texture.fromImage(m, !1, a.a.scaleModes.DEFAULT);
                            n.onLoadError(function() {
                                return e()
                            }),
                            n.onLoad(function(e) {
                                return t(e)
                            })
                        }
                        ));
                        return o
                    }().then(function(e) {
                        return t.export(e)
                    }).catch(function() {
                        return t.showError()
                    })
                }
                ,
                e.prototype.isHighQualityExportAvailable = function() {
                    return p().currentBoard.hasFeature(c.a.HIGH_QUALITY_EXPORT)
                }
                ,
                e.prototype.export = function(e) {
                    var n = this;
                    h.c(),
                    this.downloadLinkDeferred = t.Deferred();
                    var r = {
                        aborted: !1
                    }
                      , o = this.downloadLinkDeferred.promise();
                    d.a.start(o, function() {
                        h.a(),
                        n.closeModal()
                    }, function() {
                        r.aborted = !0,
                        r.request && r.request.abort(),
                        A.a()
                    }),
                    setTimeout(function() {
                        return n.makeSnapshots(r, e)
                    }, 100)
                }
                ,
                e.prototype.makeSnapshots = function(t, e, n) {
                    var r, o, i = this;
                    void 0 === n && (n = !0);
                    var s = this.getExportData();
                    if (s.quality !== g.a.VECTOR) {
                        r = A.b(s.viewports, s.scales, "image/jpeg", function(t, n, r) {
                            if (e) {
                                var o = new a.a.DisplayObjectContainer
                                  , i = n / 64
                                  , s = 3 * i
                                  , A = new a.a.Sprite(e);
                                A.scale = s / A.width,
                                A.position.set(n - A.width - i, r - A.height - i),
                                o.addChild(A),
                                t.render(o, null, !1)
                            }
                            t.textureBuffer.context.globalCompositeOperation = "destination-over",
                            t.textureBuffer.context.setTransform(1, 0, 0, 1, 0, 0),
                            t.textureBuffer.context.fillStyle = "#FFFFFF",
                            t.textureBuffer.context.fillRect(0, 0, n, r)
                        }),
                        o = function(t) {
                            var e = i.dataUrlsToBlob(t);
                            i.resolveDownloadLinkDeferred(e, n)
                        }
                    } else
                        r = A.d(s.viewports),
                        o = function(e) {
                            i.convertVectorDataToPDF(e, t)
                        }
                        ;
                    r.then(function(e) {
                        t.aborted || o(e)
                    }).catch(function() {
                        t.aborted || i.rejectDownloadLinkDeferred()
                    })
                }
                ,
                e.prototype.getExportData = function() {
                    throw new Error("Abstract method")
                }
                ,
                e.prototype.dataUrlsToBlob = function(t) {
                    throw new Error("Abstract method")
                }
                ,
                e.prototype.closeModal = function() {
                    throw new Error("Abstract method")
                }
                ,
                e.prototype.convertVectorDataToPDF = function(e, n) {
                    var o = this;
                    if (C)
                        return function(t) {
                            var e = document.createElement("div");
                            e.style.position = "absolute",
                            e.style.height = "100%",
                            e.style.width = "100%",
                            e.style.overflow = "auto",
                            e.style.top = "0",
                            e.style.left = "0",
                            e.style.background = "#0002",
                            e.style.zIndex = "9999";
                            var n = document.createElement("button");
                            n.innerText = "Close",
                            n.onclick = function() {
                                e.remove()
                            }
                            ,
                            e.appendChild(n);
                            var r = document.createElement("iframe");
                            r.style.display = "block",
                            r.style.width = "100%",
                            r.style.height = "100%",
                            e.appendChild(r),
                            document.getElementById("widgetsOverlay").appendChild(e);
                            var o = t.reduce(function(t, e) {
                                return t + "<div>" + e + "</div>"
                            }, "");
                            r.contentDocument.write("<html><body>" + o + "</body></html>")
                        }(e),
                        void this.rejectDownloadLinkDeferred();
                    var i = new FormData;
                    e.forEach(function(t, e) {
                        i.append(e.toString(), t)
                    }),
                    i.append("document-name", this.getFullFileName()),
                    n.request = t.ajax({
                        url: rtb.config.app.pdfGenerationServiceUrl,
                        crossDomain: !0,
                        type: "POST",
                        data: i,
                        cache: !1,
                        contentType: !1,
                        processData: !1
                    }),
                    n.request.done(function(t, e, n) {
                        if (4 !== n.readyState)
                            r.log("export", "SendData failed with error: " + JSON.stringify(n)),
                            o.rejectDownloadLinkDeferred();
                        else {
                            var i = JSON.parse(t);
                            if (i.error)
                                o.rejectDownloadLinkDeferred(),
                                console.info(i.error),
                                ErrorsTracker.debug("export failed", {
                                    error: i.error
                                });
                            else {
                                var a = f.d(rtb.config.app.pdfGenerationServiceDownloadUrl, "document", i.document);
                                o.resolveDownloadLinkDeferred(a)
                            }
                        }
                    }).fail(function(t) {
                        "abort" !== t.statusText && (r.log("export", "SendData failed with error: " + JSON.stringify(t)),
                        o.rejectDownloadLinkDeferred())
                    })
                }
                ,
                e.prototype.resolveDownloadLinkDeferred = function(t, e) {
                    void 0 === e && (e = !0),
                    this.downloadLinkDeferred.resolve({
                        urlOrBlob: t,
                        attrs: {
                            download: this.getFullFileName()
                        }
                    })
                }
                ,
                e.prototype.rejectDownloadLinkDeferred = function() {
                    this.downloadLinkDeferred.reject(),
                    this.showError()
                }
                ,
                e.prototype.getFullFileName = function() {
                    return this.getFileName() + this.getFileExt()
                }
                ,
                e.prototype.getFileName = function() {
                    return p().currentBoard.boardInfo.title
                }
                ,
                e.prototype.getFileExt = function() {
                    throw new Error("Abstract method")
                }
                ,
                e.prototype.showError = function() {
                    w().showError(this.getErrorText())
                }
                ,
                e.prototype.getErrorText = function() {
                    throw new Error("Abstract method")
                }
                ,
                e
            }();
            e.a = B
        }
        ).call(this, n(35), n(29))
    },
    1893: function(t, e, n) {
        "use strict";
        (function(t) {
            var n = function() {
                function e() {
                    this.documentPromise = t.Deferred(),
                    this.promises = []
                }
                return e.prototype.prepare = function() {
                    var e = this;
                    return t.when.apply(t, this.promises).then(function() {
                        return e.documentPromise.resolve(e.getResult())
                    }).fail(function(t) {
                        return e.documentPromise.reject(t)
                    }),
                    this.documentPromise.promise()
                }
                ,
                e.prototype.addWidget = function(t) {
                    throw new Error("Abstract method")
                }
                ,
                e.prototype.addPromise = function(t) {
                    this.promises.push(t)
                }
                ,
                e.prototype.getResult = function() {
                    return null
                }
                ,
                e
            }();
            e.a = n
        }
        ).call(this, n(35))
    },
    1894: function(t, e, n) {
        "use strict";
        var r = n(21)
          , o = n(4438)
          , i = n(45)
          , a = n(43)
          , s = n(59)
          , A = n(450);
        e.a = function(t) {
            return Object(s.a)(),
            Object(A.a)(),
            n(4439),
            i.a(a.a.EXPORT_QUALITY_SETTINGS, o.a, n(4441), r.a({
                centered: !1
            }, t))
        }
    },
    293: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(54)
              , o = n(1069)
              , i = n(1501)
              , a = n(1074)
              , s = n(149)
              , A = n.n(s);
            function l(t, e, n, r) {
                return '<foreignObject width="' + e + '" height="' + n + '" transform="' + r + '">\n\t\t\t<div xmlns="http://www.w3.org/1999/xhtml" width="' + e + '" height="' + n + '">\n\t\t\t\t<html xmlns="http://www.w3.org/1999/xhtml"><body style="padding:0;margin:0;">' + t + "</body></html>\n\t\t\t</div>\n\t\t</foreignObject>"
            }
            var c = function() {
                function e(t, e, n) {
                    this.widget = t,
                    this.viewport = e,
                    this.document = n,
                    this.svgScale = n.getScale(),
                    this.scale = t.geometry.scale,
                    this.rotate = t.geometry.rotation,
                    this.x = t.geometry.x - t.geometry.width / 2 - e.x,
                    this.y = t.geometry.y - t.geometry.height / 2 - e.y,
                    this.width = r.r(t.geometry.width),
                    this.height = r.r(t.geometry.height),
                    this.centerX = this.width / 2,
                    this.centerY = this.height / 2
                }
                return Object.defineProperty(e.prototype, "isScalable", {
                    get: function() {
                        return !1
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.getTransformObject = function() {
                    var t = this.scale
                      , e = {
                        x: this.centerX,
                        y: this.centerY
                    };
                    return this.isScalable ? t *= this.svgScale : (e.x *= this.svgScale,
                    e.y *= this.svgScale),
                    {
                        scale: t,
                        rotate: this.rotate,
                        rotationPoint: e,
                        translate: {
                            x: this.translateX,
                            y: this.translateY
                        }
                    }
                }
                ,
                e.prototype.getTransform = function() {
                    var t = this.getTransformObject()
                      , e = "scale(" + t.scale + ")"
                      , n = "rotate(" + this.rotate + ", " + t.rotationPoint.x + ", " + t.rotationPoint.y + ")";
                    return "translate(" + t.translate.x + ", " + t.translate.y + ")" + " " + e + " " + n
                }
                ,
                Object.defineProperty(e.prototype, "translateX", {
                    get: function() {
                        return r.r((this.x + -this.centerX * (this.scale - 1)) * this.svgScale)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "translateY", {
                    get: function() {
                        return r.r((this.y + -this.centerY * (this.scale - 1)) * this.svgScale)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.getTransformedSvgImageNode = function(t, e) {
                    return this.getTransformedImageNode(this.getUrlForSvg(t), e)
                }
                ,
                e.prototype.getTransformedGroupNode = function(t, e) {
                    return this.getGroupNode(t, this.getWrappedAttributes(e))
                }
                ,
                e.prototype.getTransformedImageNode = function(t, e) {
                    return void 0 === e && (e = ""),
                    this.getImageNode(t, this.getWrappedAttributes(e))
                }
                ,
                e.prototype.getWrappedAttributes = function(t) {
                    void 0 === t && (t = "");
                    var e = this.getScaledSize();
                    return 'width="' + e.width + 'px" height="' + e.height + 'px" ' + t + ' transform="' + this.getTransform() + '"'
                }
                ,
                e.prototype.getTransformedRectNode = function(t) {
                    var e = this.getTransform()
                      , n = this.getScaledSize();
                    return '<rect transform="' + e + '" width="' + n.width + '" height="' + n.height + '" ' + t + "></rect>"
                }
                ,
                e.prototype.getImageNode = function(t, e) {
                    return void 0 === e && (e = ""),
                    '<image xlink:href="' + A()(t) + '" ' + e + " />"
                }
                ,
                e.prototype.getResourceNode = function(e, n, r) {
                    void 0 === n && (n = ""),
                    void 0 === r && (r = "image/png");
                    var o = t.Deferred();
                    return new Promise(function(t, n) {
                        var o = new XMLHttpRequest;
                        o.open("GET", e, !0),
                        o.responseType = "arraybuffer",
                        o.onload = function(e) {
                            var n = new Blob([o.response],{
                                type: r
                            })
                              , i = new window.FileReader;
                            i.readAsDataURL(n),
                            i.onloadend = function() {
                                var e = i.result;
                                t(e)
                            }
                        }
                        ,
                        o.send()
                    }
                    ).then(function(t) {
                        o.resolve('<image xlink:href="' + t + '" ' + n + " />")
                    }, o.reject),
                    o.promise()
                }
                ,
                e.prototype.getGroupNode = function(t, e) {
                    return void 0 === e && (e = ""),
                    "<g " + e + ">" + t + "</g>"
                }
                ,
                e.prototype.getScaledSize = function() {
                    var t = this.width
                      , e = this.height;
                    return this.isScalable || (t *= this.svgScale,
                    e *= this.svgScale),
                    {
                        width: t,
                        height: e
                    }
                }
                ,
                e.prototype.getUrlForSvg = function(t) {
                    return "data:image/svg+xml;utf8," + encodeURIComponent(t)
                }
                ,
                e.prototype.getTagsAsSvgText = function() {
                    var t = this;
                    return this.widget.tagsLayer.visuals.reduce(function(e, n) {
                        return e + n.reduce(function(e, n) {
                            return e + t.baseTagVisualToSvgText(n)
                        }, "")
                    }, "")
                }
                ,
                e.prototype.baseTagVisualToSvgText = function(t) {
                    return t instanceof i.a ? this.emojiVisualToSvgText(t) : t instanceof a.a ? this.labelVisualToSvgText(t) : ""
                }
                ,
                e.prototype.emojiVisualToSvgText = function(t) {
                    this.document.addFont(o.k);
                    var e = r.r(this.scale * this.svgScale)
                      , n = r.r(this.translateX + t.x * e)
                      , i = r.r(this.translateY + t.y * e)
                      , a = o.c
                      , s = t.bgSize
                      , A = r.r(s.width)
                      , c = r.r(s.height)
                      , u = '<rect rx="' + a + '" ry="' + a + '" transform="translate(' + n + ", " + i + ") scale(" + e + ')" width="' + A + '" height="' + c + '" ' + (t.emoji.selectedByMe ? ' fill="' + o.h + '" ' : ' stroke="' + o.d + '" fill="none" stroke-width="' + o.e + '" ') + "></rect>"
                      , f = t.iconRect
                      , g = n + f.x * e
                      , d = i + f.y * e
                      , h = f.width
                      , p = f.height
                      , w = '<image xlink:href="' + t.getImageData() + '" width="' + h + '" height="' + p + '" transform="translate(' + g + ", " + d + ") scale(" + e + ')"></image>'
                      , C = t.textPoint
                      , m = C.x
                      , B = C.y;
                    return u + w + l('<div style="width:' + A + "px;height:" + c + "px;font:" + (o.j + "px " + o.i + ";") + ";color:" + o.n + ";box-sizing:border-box;padding:" + B + "px 0 0 " + m + 'px;">\n\t\t\t' + t.emoji.users.length + "\n\t\t</div>", A, c, "translate(" + n + ", " + i + ") scale(" + e + ")")
                }
                ,
                e.prototype.labelVisualToSvgText = function(t) {
                    this.document.addFont(o.r);
                    var e = r.r(this.scale * this.svgScale)
                      , n = t.textPoint
                      , i = n.x
                      , a = n.y
                      , s = r.r(this.translateX + t.x * e)
                      , c = r.r(this.translateY + t.y * e)
                      , u = o.o
                      , f = t.bgSize
                      , g = r.r(f.width)
                      , d = r.r(f.height)
                      , h = o.q + "px " + o.p;
                    return l('<div style="border-radius:' + u + "px;background:" + t.tag.colorStr + ";width:" + g + "px;height:" + d + "px;font:" + h + ";color:" + o.s + ";box-sizing:border-box;padding:" + a + "px 0 0 " + i + 'px;">' + A()(t.text) + "</div>", g, d, "translate(" + s + "," + c + ") scale(" + e + ")")
                }
                ,
                e
            }();
            e.a = c
        }
        ).call(this, n(35))
    },
    4405: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            n.d(e, "EXPORTERS", function() {
                return y
            });
            var r = n(26)
              , o = n.n(r)
              , i = n(4406)
              , a = n(4443)
              , s = n(5144)
              , A = n(4444)
              , l = n(198)
              , c = n(37)
              , u = n(133)
              , f = n(27)
              , g = n(38)
              , d = n(251)
              , h = n(44)
              , p = n(1295)
              , w = n(4445)
              , C = n(212)
              , m = n(407)
              , B = n(22)
              , E = n(31)
              , I = n(588)
              , y = {
                exporterPdf: new i.a,
                exporterImg: new a.a,
                exporterCsv: new s.a,
                exporterEmbed: new A.a
            }
              , Q = function() {
                function e() {
                    Object(C.a)().registerCommand("board.api.export", "makeVector", this.makeVector.bind(this))
                }
                return e.prototype.saveBoardAsCSV = function() {
                    var t = y.exporterCsv.getViewportCSV(Object(d.a)().getContentDimensions())
                      , e = Object(g.a)().currentBoard.boardInfo.title;
                    f.Hh(),
                    this.downloadCSV(t, e)
                }
                ,
                e.prototype.saveFrameAsCSV = function(t) {
                    var e = y.exporterCsv.getViewportCSV(t.bounds)
                      , n = Object(g.a)().currentBoard.boardInfo.title + " - " + t.text;
                    f.Df(),
                    this.downloadCSV(e, n)
                }
                ,
                e.prototype.saveSelectionAsCSV = function(t) {
                    var e = y.exporterCsv.getWidgetsCSV(t)
                      , n = Object(g.a)().currentBoard.boardInfo.title;
                    f.Jh(t.length),
                    this.downloadCSV(e, n)
                }
                ,
                e.prototype.saveAsPDF = function(t) {
                    void 0 === t && (t = Object(u.a)().framesList.items),
                    y.exporterPdf.exportFrames(t)
                }
                ,
                e.prototype.saveAsImage = function(t, e) {
                    y.exporterImg.start(t, e)
                }
                ,
                e.prototype.saveAsEmbed = function() {
                    return y.exporterEmbed.start()
                }
                ,
                e.prototype.getImage = function(t) {
                    return y.exporterImg.getImage(t)
                }
                ,
                e.prototype.makePreview = function(t, e, n) {
                    return p.c(t, e, n)
                }
                ,
                e.prototype.makeBoardPreview = function(e, n) {
                    var r = this
                      , o = new Promise(function(o, i) {
                        if (n.width > n.height) {
                            var a = n.width - n.height;
                            n.width = n.height,
                            n.x = n.x + a / 2
                        }
                        if (n.width < n.height) {
                            a = n.height - n.width;
                            n.height = n.width,
                            n.y = n.y + a / 2
                        }
                        r.getImage(n).then(function(n) {
                            var r;
                            r = t.safari || t.ios || t.msedge || t.msie ? n : new File([n],"preview.png"),
                            Object(l.a)().then(function(t) {
                                return t.updateBoardPicture(e, r)
                            }).then(o).catch(i)
                        }).catch(i)
                    }
                    );
                    Object(c.a)().processPromise({
                        promise: o,
                        waitingMessage: "Generating preview...",
                        successMessage: "Board preview was generated"
                    })
                }
                ,
                e.prototype.makeVector = function(t) {
                    var e;
                    if (t)
                        e = Array.isArray(t) ? t : [t];
                    else {
                        var n = B.mySelection.selection;
                        if (n && n.length) {
                            var r = n.map(function(t) {
                                return t.bounds
                            });
                            e = [E.d(r)]
                        } else
                            e = [Object(d.a)().getContentDimensions()]
                    }
                    var i = Object(m.a)().getView()
                      , a = new o.a.Rectangle(i.x - e[0].x,i.y - e[0].y,i.width,i.height);
                    return new Promise(function(t, n) {
                        p.d(e, a).then(function(e) {
                            e.length ? t(e[0]) : t("")
                        }, n)
                    }
                    )
                }
                ,
                e.prototype.showExportEmptyFramesWarningModal = function() {
                    Object(h.a)().show(Object(w.a)())
                }
                ,
                e.prototype.downloadCSV = function(t, e) {
                    if (t && t !== s.a.PREFIX) {
                        var n = {
                            urlOrBlob: t,
                            attrs: {
                                download: this.getCSVDownloadFilename(e)
                            }
                        };
                        I.a.start(n)
                    } else
                        Object(c.a)().show("Sorry, there is no data to export to CSV. Please select objects that contain text.")
                }
                ,
                e.prototype.getCSVDownloadFilename = function(t) {
                    return t.endsWith(".csv") ? t : t + ".csv"
                }
                ,
                e
            }();
            e.default = new Q
        }
        .call(this, n(0))
    },
    4406: function(t, e, n) {
        "use strict";
        (function(t) {
            var r, o = n(21), i = n(27), a = n(22), s = n(1892), A = n(44), l = n(849), c = n(1894), u = n(110), f = n(38), g = n(4442), d = "p", h = "l", p = ((r = {})[l.a.LOW] = "Small file size",
            r[l.a.VECTOR] = "Best quality",
            r), w = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o.d(e, t),
                e.prototype.exportFrames = function(t) {
                    this.frames = t,
                    this.start()
                }
                ,
                e.prototype.start = function() {
                    var e = this
                      , n = {
                        caption: "Export PDF in",
                        mediumQualityHidden: !0,
                        highQualityHidden: !0,
                        upgradePlanTextOption: "in best quality"
                    };
                    setTimeout(function() {
                        e.qualityModal = Object(A.a)().show(Object(c.a)({
                            enableCloseByBackground: !1,
                            showLockLayer: !1,
                            config: n,
                            qualityOptions: C(),
                            downloadClickListener: function(n) {
                                e.quality = n,
                                t.prototype.start.call(e)
                            }
                        }))
                    }, 10)
                }
                ,
                e.prototype.getExportData = function() {
                    var t = this
                      , e = this.frames;
                    if (this.quality === l.a.VECTOR)
                        this.viewports = e.map(function(t) {
                            return t.bounds
                        }),
                        this.scales = [];
                    else {
                        var n = e.reduce(function(t, e) {
                            return Math.max(t, e.width)
                        }, 0)
                          , r = e.reduce(function(t, e) {
                            return Math.max(t, n * e.height * (n / e.width))
                        }, 0);
                        r > 1e6 && (n *= Math.sqrt(1e6 / r)),
                        this.viewports = [],
                        this.scales = [],
                        e.forEach(function(e) {
                            var r = e.bounds;
                            t.viewports.push(r),
                            t.scales.push(n / r.width)
                        })
                    }
                    return {
                        quality: this.quality,
                        viewports: this.viewports,
                        scales: this.scales
                    }
                }
                ,
                e.prototype.closeModal = function() {
                    this.qualityModal && this.qualityModal.controller.submit()
                }
                ,
                e.prototype.resolveDownloadLinkDeferred = function(e) {
                    i.Gh(),
                    t.prototype.resolveDownloadLinkDeferred.call(this, e)
                }
                ,
                e.prototype.getFileExt = function() {
                    return ".pdf"
                }
                ,
                e.prototype.dataUrlsToBlob = function(t) {
                    var e = this;
                    this.document = null;
                    var n = a.pixiCanvas.pixelRatio;
                    return t.forEach(function(t, r) {
                        var o = e.viewports[r]
                          , i = e.scales[r] * n
                          , a = o.width * i * .75
                          , s = o.height * i * .75;
                        e.addPageToDoc(t, a, s)
                    }),
                    this.document.output("blob")
                }
                ,
                e.prototype.addPageToDoc = function(t, e, n) {
                    var r = e >= n ? h : d
                      , o = [n, e];
                    this.document ? this.document.addPage(o, r) : this.document = g(r, "pt", o),
                    this.document.addImage(t, "JPEG", 0, 0, e, n)
                }
                ,
                e.prototype.getErrorText = function() {
                    return "Sorry, something went wrong while generating the PDF document"
                }
                ,
                e
            }(s.a);
            function C() {
                var e, n = Object(f.a)().currentBoard.hasFeature(u.a.HIGH_QUALITY_EXPORT), r = t.safari || t.ios || t.msedge || t.msie;
                return (e = {})[l.a.LOW] = {
                    caption: p[l.a.LOW],
                    disabled: r
                },
                e[l.a.VECTOR] = {
                    caption: p[l.a.VECTOR],
                    disabled: !n
                },
                e
            }
            e.a = w
        }
        ).call(this, n(0))
    },
    4407: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(21)
              , o = n(34)
              , i = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.d(n, e),
                n.prototype.addWidget = function(t) {
                    var e = this.getPromiseForWidget(t);
                    e && this.addPromise(e)
                }
                ,
                n.prototype.getPromiseForWidget = function(e) {
                    if (e.widgetType === o.a.DOCUMENT) {
                        var n = t.Deferred();
                        return e.loadFullResource().then(n.resolve, n.reject),
                        n.promise()
                    }
                    if (e.widgetType === o.a.IMAGE || e.widgetType === o.a.WEBSCREEN) {
                        n = t.Deferred();
                        return e.visual.loadFullImage().then(n.resolve).catch(n.reject),
                        n.promise()
                    }
                    return null
                }
                ,
                n
            }(n(1893).a);
            e.a = i
        }
        ).call(this, n(35))
    },
    4408: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* noto-sans-regular - latin-ext_greek_cyrillic_cyrillic-ext_greek-ext_latin_vietnamese_devanagari */\n@font-face {\n  font-family: 'Noto Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Noto Sans'), local('NotoSans'),\n  url(" + r(n(983)) + ") format('woff2'), \n  url(" + r(n(984)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* noto-sans-italic - latin-ext_greek_cyrillic_cyrillic-ext_greek-ext_latin_vietnamese_devanagari */\n@font-face {\n  font-family: 'Noto Sans';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Noto Sans Italic'), local('NotoSans-Italic'),\n  url(" + r(n(985)) + ") format('woff2'), \n  url(" + r(n(986)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* noto-sans-700 - latin-ext_greek_cyrillic_cyrillic-ext_greek-ext_latin_vietnamese_devanagari */\n@font-face {\n  font-family: 'Noto Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Noto Sans Bold'), local('NotoSans-Bold'),\n  url(" + r(n(987)) + ") format('woff2'), \n  url(" + r(n(988)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* noto-sans-700italic - latin-ext_greek_cyrillic_cyrillic-ext_greek-ext_latin_vietnamese_devanagari */\n@font-face {\n  font-family: 'Noto Sans';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Noto Sans Bold Italic'), local('NotoSans-BoldItalic'),\n  url(" + r(n(989)) + ") format('woff2'), \n  url(" + r(n(990)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4409: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/*\n* Noto Sans Japanese (japanese) http://www.google.com/fonts/earlyaccess\n */\n@font-face {\n  font-family: 'Noto Sans Japanese';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Noto Sans Japanese Regular'), local('Noto Sans Japanese-Regular'),\n  url(" + r(n(991)) + ") format('woff2'),\n  url(" + r(n(992)) + ") format('woff');\n}\n\n@font-face {\n  font-family: 'Noto Sans Japanese';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Noto Sans Japanese Bold'), local('Noto Sans Japanese-Bold'),\n  url(" + r(n(993)) + ") format('woff2'),\n  url(" + r(n(994)) + ") format('woff');\n}", ""])
    },
    4410: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* abril-fatface-regular - latin_latin-ext */\n@font-face {\n  font-family: 'Abril Fatface';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Abril Fatface'), local('AbrilFatface-Regular'),\n  url(" + r(n(913)) + ") format('woff2'), \n  url(" + r(n(914)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4411: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* bangers-regular - latin_latin-ext_vietnamese */\n@font-face {\n  font-family: 'Bangers';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Bangers Regular'), local('Bangers-Regular'),\n  url(" + r(n(915)) + ") format('woff2'), \n  url(" + r(n(916)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4412: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* eb-garamond-regular - latin_cyrillic_latin-ext_cyrillic-ext_vietnamese */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond'), local('EBGaramond'),\n  url(" + r(n(917)) + ") format('woff2'), \n  url(" + r(n(918)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4413: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* graduate-regular - latin */\n@font-face {\n  font-family: 'Graduate';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Graduate'), local('Graduate-Regular'),\n  url(" + r(n(919)) + ") format('woff2'), \n  url(" + r(n(920)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4414: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* gravitas-one-regular - latin */\n@font-face {\n  font-family: 'Gravitas One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Gravitas One'), local('GravitasOne'),\n  url(" + r(n(921)) + ") format('woff2'), \n  url(" + r(n(922)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4415: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* fredoka-one-regular - latin */\n@font-face {\n  font-family: 'Fredoka One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fredoka One'), local('FredokaOne-Regular'),\n  url(" + r(n(923)) + ") format('woff2'), \n  url(" + r(n(924)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4416: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* nixie-one-regular - latin */\n@font-face {\n  font-family: 'Nixie One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nixie One'), local('NixieOne-Regular'),\n  url(" + r(n(925)) + ") format('woff2'), \n  url(" + r(n(926)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4417: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "//*\u0417\u0430\u0447\u0435\u043c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043f\u043e\u043a OpenSans?*\n//---\n//\n//\u0412 \u0440\u0435\u043a\u0432\u0435\u0441\u0442\u0435 RTB-29062 \u0431\u044b\u043b \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d \u0448\u0440\u0438\u0444\u0442 OpenSans, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430\u0447\u0435\u0440\u0442\u0430\u043d\u0438\u0435 latin-ext\n//\u0412\u0441\u0435 \u043d\u043e\u0432\u044b\u0435 \u0448\u0440\u0438\u0444\u0442\u044b \u043b\u0435\u0436\u0430\u0442 \u0432 \u043f\u0430\u043f\u043a\u0435 OpenSans/ \u0441\u0442\u0438\u043b\u0438 \u0432 open-sans.less\n//---\n//\n//\u0421\u0442\u0430\u0440\u044b\u0435 \u043f\u0430\u043f\u043a\u0438 OpenSansBold, OpenSansRegular ... \u043d\u0443\u0436\u043d\u044b \u0442.\u043a. \u0441\u0442\u0430\u0440\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0438\u043c\u043f\u043e\u0440\u0442\u0430 svg \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043f\u0440\u044f\u043c\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u044d\u0442\u0438 \u0444\u0430\u0439\u043b\u044b\n\n\n/* open-sans-300 - latin_cyrillic_latin-ext */\n@font-face {\n\tfont-family: 'OpenSans';\n\tfont-style: normal;\n\tfont-weight: 300;\n\tsrc: local('Open Sans Light'), local('OpenSans-Light'),\n\turl(" + r(n(899)) + ") format('woff2'),  url(" + r(n(900)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* open-sans-regular - latin_cyrillic_latin-ext */\n@font-face {\n\tfont-family: 'OpenSans';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: local('Open Sans Regular'), local('OpenSans-Regular'),\n\turl(" + r(n(901)) + ") format('woff2'),  url(" + r(n(902)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* open-sans-italic - latin_cyrillic_latin-ext */\n@font-face {\n\tfont-family: 'OpenSans';\n\tfont-style: italic;\n\tfont-weight: 400;\n\tsrc: local('Open Sans Italic'), local('OpenSans-Italic'),\n\turl(" + r(n(903)) + ") format('woff2'),  url(" + r(n(904)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* open-sans-600 - latin_cyrillic_latin-ext */\n@font-face {\n\tfont-family: 'OpenSans';\n\tfont-style: normal;\n\tfont-weight: 600;\n\tsrc: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n\turl(" + r(n(905)) + ") format('woff2'),  url(" + r(n(906)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* open-sans-700 - latin_cyrillic_latin-ext */\n@font-face {\n\tfont-family: 'OpenSans';\n\tfont-style: normal;\n\tfont-weight: 700;\n\tsrc: local('Open Sans Bold'), local('OpenSans-Bold'),\n\turl(" + r(n(907)) + ") format('woff2'),  url(" + r(n(908)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* open-sans-700italic - latin_cyrillic_latin-ext */\n@font-face {\n\tfont-family: 'OpenSans';\n\tfont-style: italic;\n\tfont-weight: 700;\n\tsrc: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'),\n\turl(" + r(n(909)) + ") format('woff2'),  url(" + r(n(910)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* open-sans-800 - latin_cyrillic_latin-ext */\n@font-face {\n\tfont-family: 'OpenSans';\n\tfont-style: normal;\n\tfont-weight: 800;\n\tsrc: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),\n\turl(" + r(n(911)) + ") format('woff2'),  url(" + r(n(912)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4418: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* permanent-marker-regular - latin */\n@font-face {\n  font-family: 'Permanent Marker';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Permanent Marker'), local('PermanentMarker'),\n  url(" + r(n(927)) + ") format('woff2'), \n  url(" + r(n(928)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4419: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* pt-sans-regular - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('PT Sans'), local('PTSans-Regular'),\n  url(" + r(n(929)) + ") format('woff2'), \n  url(" + r(n(930)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* pt-sans-italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 400;\n  src: local('PT Sans Italic'), local('PTSans-Italic'),\n  url(" + r(n(931)) + ") format('woff2'), \n  url(" + r(n(932)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* pt-sans-700 - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local('PT Sans Bold'), local('PTSans-Bold'),\n  url(" + r(n(933)) + ") format('woff2'), \n  url(" + r(n(934)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* pt-sans-700italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 700;\n  src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'),\n  url(" + r(n(935)) + ") format('woff2'), \n  url(" + r(n(936)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4420: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* pt-sans-narrow-regular - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Sans Narrow';\n  font-style: normal;\n  font-weight: 400;\n  src: local('PT Sans Narrow'), local('PTSans-Narrow'),\n  url(" + r(n(937)) + ") format('woff2'), \n  url(" + r(n(938)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* pt-sans-narrow-700 - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Sans Narrow';\n  font-style: normal;\n  font-weight: 700;\n  src: local('PT Sans Narrow Bold'), local('PTSans-NarrowBold'),\n  url(" + r(n(939)) + ") format('woff2'), \n  url(" + r(n(940)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4421: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* pt-serif-regular - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Serif';\n  font-style: normal;\n  font-weight: 400;\n  src: local('PT Serif'), local('PTSerif-Regular'),\n  url(" + r(n(941)) + ") format('woff2'), \n  url(" + r(n(942)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* pt-serif-700 - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Serif';\n  font-style: normal;\n  font-weight: 700;\n  src: local('PT Serif Bold'), local('PTSerif-Bold'),\n  url(" + r(n(943)) + ") format('woff2'), \n  url(" + r(n(944)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* pt-serif-italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Serif';\n  font-style: italic;\n  font-weight: 400;\n  src: local('PT Serif Italic'), local('PTSerif-Italic'),\n  url(" + r(n(945)) + ") format('woff2'), \n  url(" + r(n(946)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* pt-serif-700italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'PT Serif';\n  font-style: italic;\n  font-weight: 700;\n  src: local('PT Serif Bold Italic'), local('PTSerif-BoldItalic'),\n  url(" + r(n(947)) + ") format('woff2'), \n  url(" + r(n(948)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4422: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* rammetto-one-regular - latin_latin-ext */\n@font-face {\n  font-family: 'Rammetto One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Rammetto One Regular'), local('RammettoOne-Regular'),\n  url(" + r(n(949)) + ") format('woff2'), \n  url(" + r(n(950)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4423: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* roboto-italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'),\n  url(" + r(n(951)) + ") format('woff2'), \n  url(" + r(n(952)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* roboto-regular - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n  url(" + r(n(953)) + ") format('woff2'), \n  url(" + r(n(954)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* roboto-700italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),\n  url(" + r(n(955)) + ") format('woff2'), \n  url(" + r(n(956)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* roboto-700 - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'),\n  url(" + r(n(957)) + ") format('woff2'), \n  url(" + r(n(958)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4424: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* roboto-condensed-regular - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto Condensed';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'),\n  url(" + r(n(959)) + ") format('woff2'), \n  url(" + r(n(960)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* roboto-condensed-italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto Condensed';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Condensed Italic'), local('RobotoCondensed-Italic'),\n  url(" + r(n(961)) + ") format('woff2'), \n  url(" + r(n(962)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* roboto-condensed-700 - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Condensed Bold'), local('RobotoCondensed-Bold'),\n  url(" + r(n(963)) + ") format('woff2'), \n  url(" + r(n(964)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* roboto-condensed-700italic - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto Condensed';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Condensed Bold Italic'), local('RobotoCondensed-BoldItalic'),\n  url(" + r(n(965)) + ") format('woff2'), \n  url(" + r(n(966)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4425: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* roboto-slab-regular - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'),\n  url(" + r(n(967)) + ") format('woff2'), \n  url(" + r(n(968)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* roboto-slab-700 - latin_cyrillic_latin-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Slab Bold'), local('RobotoSlab-Bold'),\n  url(" + r(n(969)) + ") format('woff2'), \n  url(" + r(n(970)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4426: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* caveat-regular - latin_latin-ext */\n@font-face {\n  font-family: 'Caveat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Caveat'), local('Caveat-Regular'),\n  url(" + r(n(971)) + ") format('woff2'), \n  url(" + r(n(972)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* caveat-700 - latin_latin-ext */\n@font-face {\n  font-family: 'Caveat';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Caveat Bold'), local('Caveat-Bold'),\n  url(" + r(n(973)) + ") format('woff2'), \n  url(" + r(n(974)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4427: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* titan-one-regular - latin_latin-ext */\n@font-face {\n  font-family: 'Titan One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Titan One'), local('TitanOne'),\n  url(" + r(n(975)) + ") format('woff2'), \n  url(" + r(n(976)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4428: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* gravitas-one-regular - latin */\n@font-face {\n  font-family: 'Lemon Tuesday';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lemon Tuesday'), local('LemonTuesday'),\n  url(" + r(n(977)) + ") format('woff2'), \n  url(" + r(n(978)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4429: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* roboto-mono-regular - cyrillic_latin_latin-ext */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Mono'), local('RobotoMono-Regular'),\n  url(" + r(n(979)) + ") format('woff2'), \n  url(" + r(n(980)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* roboto-mono-700 - cyrillic_latin_latin-ext */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Mono Bold'), local('RobotoMono-Bold'),\n  url(" + r(n(981)) + ") format('woff2'), \n  url(" + r(n(982)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4430: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* ibm-plex-sans-regular - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('IBM Plex Sans'), local('IBMPlexSans'),\n  url(" + r(n(995)) + ") format('woff2'), \n  url(" + r(n(996)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-sans-italic - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Sans';\n  font-style: italic;\n  font-weight: 400;\n  src: local('IBM Plex Sans Italic'), local('IBMPlexSans-Italic'),\n  url(" + r(n(997)) + ") format('woff2'), \n  url(" + r(n(998)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-sans-700 - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'),\n  url(" + r(n(999)) + ") format('woff2'), \n  url(" + r(n(1e3)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-sans-700italic - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Sans';\n  font-style: italic;\n  font-weight: 700;\n  src: local('IBM Plex Sans Bold Italic'), local('IBMPlexSans-BoldItalic'),\n  url(" + r(n(1001)) + ") format('woff2'), \n  url(" + r(n(1002)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4431: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* ibm-plex-serif-regular - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Serif';\n  font-style: normal;\n  font-weight: 400;\n  src: local('IBM Plex Serif'), local('IBMPlexSerif'),\n  url(" + r(n(1003)) + ") format('woff2'), \n  url(" + r(n(1004)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-serif-italic - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Serif';\n  font-style: italic;\n  font-weight: 400;\n  src: local('IBM Plex Serif Italic'), local('IBMPlexSerif-Italic'),\n  url(" + r(n(1005)) + ") format('woff2'), \n  url(" + r(n(1006)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-serif-700 - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Serif';\n  font-style: normal;\n  font-weight: 700;\n  src: local('IBM Plex Serif Bold'), local('IBMPlexSerif-Bold'),\n  url(" + r(n(1007)) + ") format('woff2'), \n  url(" + r(n(1008)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-serif-700italic - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Serif';\n  font-style: italic;\n  font-weight: 700;\n  src: local('IBM Plex Serif Bold Italic'), local('IBMPlexSerif-BoldItalic'),\n  url(" + r(n(1009)) + ") format('woff2'), \n  url(" + r(n(1010)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4432: function(t, e, n) {
        var r = n(79);
        (t.exports = n(23)(!1)).push([t.i, "/* ibm-plex-mono-italic - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Mono';\n  font-style: italic;\n  font-weight: 400;\n  src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),\n  url(" + r(n(1011)) + ") format('woff2'), \n  url(" + r(n(1012)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-mono-regular - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: local('IBM Plex Mono'), local('IBMPlexMono'),\n  url(" + r(n(1013)) + ") format('woff2'), \n  url(" + r(n(1014)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-mono-700 - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),\n  url(" + r(n(1015)) + ") format('woff2'), \n  url(" + r(n(1016)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* ibm-plex-mono-700italic - latin-ext_latin_cyrillic */\n@font-face {\n  font-family: 'IBM Plex Mono';\n  font-style: italic;\n  font-weight: 700;\n  src: local('IBM Plex Mono Bold Italic'), local('IBMPlexMono-BoldItalic'),\n  url(" + r(n(1017)) + ") format('woff2'), \n  url(" + r(n(1018)) + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}", ""])
    },
    4433: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(21)
              , o = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.d(n, e),
                Object.defineProperty(n.prototype, "isScalable", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype.asNode = function() {
                    var e = this
                      , n = t.Deferred();
                    return this.widget.makePageUrl().then(function(t) {
                        var r = e.getTransformedRectNode('fill="#ffffff"')
                          , o = e.getTransformedImageNode(t);
                        n.resolve(r + o)
                    }, n.reject),
                    n.promise()
                }
                ,
                n
            }(n(293).a);
            e.a = o
        }
        ).call(this, n(35))
    },
    4434: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(21)
              , o = n(293)
              , i = n(308)
              , a = n(54)
              , s = new RegExp("avatarId=([0-9]*)","gi")
              , A = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.d(n, e),
                Object.defineProperty(n.prototype, "isScalable", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "cardFillColor", {
                    get: function() {
                        return a.k(i.e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "cardBorderFillCOlor", {
                    get: function() {
                        return a.k(i.d)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "typeColor", {
                    get: function() {
                        return a.k(this.widget.visual.color.getNumber())
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "typeNode", {
                    get: function() {
                        var t = "JiraCardTypeIco_" + this.widget.issueTypeId;
                        return this.createImageDefNode(t, this.widget.visual.type.texture),
                        this.getTransformedGroupNode('<use x="' + i.H + '" y="' + i.I + '" xlink:href="#' + t + '"/>')
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "priorityNode", {
                    get: function() {
                        var t = "";
                        if (this.widget.priorityId) {
                            var e = "JiraCardPriorityIco_" + this.widget.priorityId;
                            this.createImageDefNode(e, this.widget.visual.priority.texture),
                            t = this.getTransformedGroupNode('<use x="' + i.q + '" y="' + i.r + '" xlink:href="#' + e + '"/>')
                        }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "avatarNode", {
                    get: function() {
                        var t = this
                          , e = this.avatarX
                          , n = this.avatarY
                          , r = ("JiraCardAvatarIco_" + this.widget.avatarUrl).match(s)
                          , o = "defaultJiraCardAvatarId";
                        return r && r[0] && (o = r[0]),
                        this.document.tryCreateDefNode(o, function() {
                            var e = t.widget.visual.avatar.texture.baseTexture.imageUrl;
                            return e.startsWith("data:image/svg+xml;utf8,") ? (e = e.replace("data:image/svg+xml;utf8,", "")).replace("<svg", '<svg id="' + o + '" clip-path="url(#JiraCardAvaMask)" ') : '<image xlink:href="' + e + '" height="32" width="32" id="' + o + '" clip-path="url(#JiraCardAvaMask)" />'
                        }),
                        this.getTransformedGroupNode('<use x="' + e + '" y="' + n + '" xlink:href="#' + o + '" />')
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "avatarMask", {
                    get: function() {
                        return '<clipPath id="JiraCardAvaMask"><circle r="16" cx="16" cy="16"/></clipPath>'
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "avatarX", {
                    get: function() {
                        return i.h - i.c - i.a
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "avatarY", {
                    get: function() {
                        return i.b
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype.asNode = function() {
                    var e = this
                      , n = t.Deferred();
                    return this.widget.whenReady.then(function() {
                        e.document.tryCreateDefNode("JiraCardAvaMask", function() {
                            return e.avatarMask
                        });
                        var t = '<rect fill="' + e.cardFillColor + '" width="' + e.width + '" height="' + e.height + '" stroke="' + e.cardBorderFillCOlor + '" transform="' + e.getTransform() + '"/>'
                          , r = '<rect fill="' + e.typeColor + '" width="' + i.B + '" height="' + e.height + '" transform="' + e.getTransform() + '"></rect>'
                          , o = e.getTransformedGroupNode(e.widget.getSVG(), 'x="60" y="41"')
                          , a = e.typeNode
                          , s = e.priorityNode
                          , A = e.avatarNode;
                        n.resolve(t + r + a + s + A + o)
                    }, function() {
                        n.resolve("")
                    }),
                    n.promise()
                }
                ,
                n.prototype.createImageDefNode = function(t, e) {
                    this.document.tryCreateDefNode(t, function() {
                        var n = e.baseTexture.imageUrl;
                        return n.startsWith("data:image/svg+xml;utf8,") ? n.replace("data:image/svg+xml;utf8,", "").replace("<svg", '<svg id="' + t + '" ') : '<image xlink:href="' + n + '" height="16" width="16" id="' + t + '" />'
                    })
                }
                ,
                n
            }(o.a);
            e.a = A
        }
        ).call(this, n(35))
    },
    4435: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(21)
              , o = n(293)
              , i = n(1773)
              , a = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.d(n, e),
                Object.defineProperty(n.prototype, "isScalable", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype.asNode = function() {
                    var e = this
                      , n = t.Deferred();
                    return this.widget.ready.then(function() {
                        e.createImageDefNode("rally-widget-style"),
                        n.resolve(e.getTransformedGroupNode(e.widget.getSVG()))
                    }),
                    n.promise()
                }
                ,
                n.prototype.createImageDefNode = function(t) {
                    this.document.tryCreateDefNode(t, function() {
                        return '<style type="text/css">' + Object(i.a)() + "</style>"
                    })
                }
                ,
                n
            }(o.a);
            e.a = a
        }
        ).call(this, n(35))
    },
    4436: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(21)
              , o = n(293)
              , i = n(134)
              , a = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.d(n, e),
                Object.defineProperty(n.prototype, "isScalable", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype.asNode = function() {
                    var e = this
                      , n = t.Deferred()
                      , r = this.getTransformedGroupNode(this.widget.getSVG());
                    return this.document.addFont(i.b.OPEN_SANS),
                    this.document.tryCreateDefNode("card-widget-styles", function() {
                        return "<style type='text/css'>" + e.widget.getSvgCssStyle() + "</style>"
                    }),
                    n.resolve(r),
                    n.promise()
                }
                ,
                n
            }(o.a);
            e.a = a
        }
        ).call(this, n(35))
    },
    4437: function(t, e, n) {
        t.exports = n.p + "60fd722e6e5de708f020e3fa4502aec9.svg"
    },
    4438: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(21)
              , o = n(47)
              , i = n(74)
              , a = n(117)
              , s = n(38)
              , A = n(110)
              , l = n(33)
              , c = n(36)
              , u = n(49)
              , f = n(27)
              , g = n(150)
              , d = n(67)
              , h = n(198)
              , p = n(107)
              , w = n(62)
              , C = n(849)
              , m = n(206)
              , B = i.b()
              , E = s.b()
              , I = c.b()
              , y = function(e) {
                function n() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.loading = !1,
                    t
                }
                return r.d(n, e),
                Object.defineProperty(n.prototype, "trialDuration", {
                    get: function() {
                        return Object(m.a)(this.currentAccount)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype.init = function() {
                    var e = this;
                    this.config = this.params.config;
                    var n = E().currentBoard.hasFeature(A.a.HIGH_QUALITY_EXPORT);
                    this.canEditBoard = E().currentBoard.hasPermission(g.a.EDIT_BOARD_PARAMS);
                    var r = t.safari || t.ios || t.msedge || t.msie;
                    this.showNoMobileIcon = n && t.mobile,
                    this.showImageUpgradeButton = !n && !r && !t.mobile && d.a.upgradeIsSupported,
                    this.hasActiveTeam = l.A(I().accounts),
                    this.currentAccount = E().currentBoard.boardInfo.account,
                    this.isCurrentAccountIsPersonal = l.ob(this.currentAccount),
                    this.quality = r ? C.a.VECTOR : C.a.LOW,
                    B().setMode(a.a.NAVIGATION_ONLY),
                    E().currentBoard.permissionsChanged.addOnce(this.init, this),
                    this.windowInstance.closed.addOnce(function() {
                        E().currentBoard.permissionsChanged.remove(e.init, e)
                    })
                }
                ,
                n.prototype.setQuality = function(t) {
                    this.quality = t
                }
                ,
                n.prototype.upgrade = function() {
                    var t = this
                      , e = E().currentBoard.boardInfo.account;
                    Object(m.c)(this.currentAccount) ? (f.o.trialChose("upgrade_window"),
                    Object(w.f)().then(function(e) {
                        return e.showStartTrialModal(t.currentAccount)
                    })) : (f.f.clickUpgrade({
                        Click_upgrade_from: f.f.StatFeatureList.hi_res_export,
                        User_role: e && e.currentUserPermission.role || "",
                        Plan: e && e.type || "",
                        Account_id: e && e.id || ""
                    }),
                    p.c(),
                    Object(w.f)().then(function(e) {
                        return e.buyExistingTeam(t.currentAccount)
                    }).catch(function() {
                        return p.a()
                    }))
                }
                ,
                n.prototype.submit = function() {
                    e.prototype.submit.call(this),
                    B().setMode(a.a.NORMAL)
                }
                ,
                n.prototype.cancel = function() {
                    e.prototype.cancel.call(this),
                    B().setMode(a.a.NORMAL)
                }
                ,
                n.prototype.download = function() {
                    this.loading = !0,
                    this.params.downloadClickListener(this.quality)
                }
                ,
                n.prototype.moveBoard = function() {
                    var t = this
                      , e = E().currentBoard.boardInfo.id;
                    Object(h.a)().then(function(n) {
                        n.showMoveToAccountModal(e).submitted.addOnce(function() {
                            return t.onMoveBoard()
                        })
                    })
                }
                ,
                n.prototype.onMoveBoard = function() {
                    E().currentBoard.updateUserPermissions()
                }
                ,
                r.c([Object(u.a)("ExportQualitySettingsMC.onMoveBoard")], n.prototype, "onMoveBoard", null),
                n
            }(o.b);
            e.a = y
        }
        ).call(this, n(0))
    },
    4439: function(t, e, n) {
        var r = n(4440);
        "string" === typeof r && (r = [[t.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(24)(r, o);
        r.locals && (t.exports = r.locals)
    },
    4440: function(t, e, n) {
        (t.exports = n(23)(!1)).push([t.i, ".export-quality-settings-modal {\n  position: fixed;\n  height: auto;\n  width: auto;\n  top: 8px;\n  left: 8px;\n  transform: translateX(0) translateY(0);\n}\n.export-quality-settings-modal .rtb-modal-title__text {\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.export-quality-settings-modal .rtb-modal-content {\n  padding: 21px 24px 32px 24px;\n  width: 320px;\n  font-size: 14px;\n}\n.export-quality-settings-modal .rtb-modal-content__body {\n  margin-top: 15px;\n}\n.export-quality-settings-modal .rtb-modal-content__actions {\n  margin-top: 12px;\n}\n.export-quality-settings-modal .export-options__row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: start;\n      align-items: start;\n  height: 32px;\n  cursor: pointer;\n}\n.export-quality-settings-modal .export-options__row .rtb-radiobutton--export {\n  width: auto;\n  min-width: 111px;\n  margin-bottom: 8px;\n}\n.export-quality-settings-modal .export-options__row .rtb-radiobutton--export label {\n  padding-left: 32px;\n}\n.export-quality-settings-modal .export-options__row:hover:not(.export-options__row--disabled) .rtb-radiobutton label:before {\n  border-color: #6d86ff;\n}\n.export-quality-settings-modal .export-options__row--disabled {\n  cursor: default;\n}\n.export-quality-settings-modal .export-options__row--disabled .export-options__extension,\n.export-quality-settings-modal .export-options__row--disabled .export-options__size {\n  opacity: 0.4;\n}\n.export-quality-settings-modal .export-options__extension {\n  min-width: 50px;\n}\n.export-quality-settings-modal .export-options__size {\n  color: rgba(5, 0, 56, 0.4);\n}\n.export-quality-settings-modal .android {\n  position: absolute;\n  left: 131px;\n  top: 101px;\n}\n.export-quality-settings-modal .need-upgrade__text {\n  margin: 8px 0 24px 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n", ""])
    },
    4441: function(t, e) {
        t.exports = '<rtb-modal class="export-quality-settings-modal">\n    <div class="rtb-modal-container__content rtb-modal-content">\n        <div class="rtb-modal-content__header rtb-modal-header">\n            <div class="rtb-modal-header__title rtb-modal-title">\n                <div class="rtb-modal-title__text">\n                    {{ modal.config.caption }}\n                </div>\n            </div>\n        </div>\n        <div class="rtb-modal-content__body rtb-modal-body">\n            <div class="export-options">\n                <div class="export-options__row"\n                     hm-tap="options.disabled || modal.setQuality(+quality)"\n                     ng-class="{\'export-options__row--disabled\': options.disabled || modal.loading}"\n                     ng-repeat="(quality, options) in modal.params.qualityOptions">\n                    <rtb-radiobutton\n                            class="rtb-radiobutton--medium rtb-radiobutton--export"\n                            is-disabled="options.disabled || modal.loading"\n                            label="options.caption"\n                            value="+quality"\n                            model="modal.quality"\n                            hm-tap="modal.setQuality(+quality)"></rtb-radiobutton>\n                    <span class="export-options__extension">{{options.extension}}</span>\n                    <span class="export-options__size">{{options.size}}</span>\n                </div>\n            </div>\n            <div class="android" ng-show="modal.showNoMobileIcon">\n                <icon icon-name="\'application--export-no-mobile\'"></icon>\n            </div>\n            <div class="need-upgrade" ng-show="modal.showImageUpgradeButton">\n                <div class="need-upgrade__text" ng-if="modal.canEditBoard && modal.isCurrentAccountIsPersonal && modal.hasActiveTeam">\n                    <span class="rtb-link rtb-link--primary" hm-tap="modal.moveBoard()">Move this board</span>\n                    to Team account to\n                    <br/>\n                    export it\n                    {{modal.config.upgradePlanTextOption}}.\n                </div>\n                <div class="need-upgrade__text" ng-if="!modal.isCurrentAccountIsPersonal">\n                    <span class="rtb-link rtb-link--primary" hm-tap="modal.upgrade()" ng-if="!modal.isTrialAvailable">Upgrade your plan</span>\n                    <span class="rtb-link rtb-link--primary" hm-tap="modal.upgrade()" ng-if="modal.isTrialAvailable">Start {{modal.trialDuration}} trial</span>\n                    to export this board\n                    <br/>\n                    {{modal.config.upgradePlanTextOption}}.\n                </div>\n            </div>\n        </div>\n        <div class="rtb-modal-content__actions rtb-modal-actions">\n            <button class="rtb-btn rtb-btn--primary rtb-btn--small"\n                    ng-class="{\'rtb-btn--loading\': modal.loading}"\n                    hm-tap="modal.download()">\n                Export\n            </button>\n            <button class="rtb-btn rtb-btn--secondary rtb-btn--small"\n                    ng-class="{\'rtb-btn--disabled\': modal.loading}"\n                    hm-tap="modal.cancel()">\n                Cancel\n            </button>\n        </div>\n    </div>\n</rtb-modal>\n'
    },
    4442: function(t, e) {
        var n, r, o = function(t) {
            "use strict";
            var e = "1.3"
              , n = {
                a0: [2383.94, 3370.39],
                a1: [1683.78, 2383.94],
                a2: [1190.55, 1683.78],
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [419.53, 595.28],
                a6: [297.64, 419.53],
                a7: [209.76, 297.64],
                a8: [147.4, 209.76],
                a9: [104.88, 147.4],
                a10: [73.7, 104.88],
                b0: [2834.65, 4008.19],
                b1: [2004.09, 2834.65],
                b2: [1417.32, 2004.09],
                b3: [1000.63, 1417.32],
                b4: [708.66, 1000.63],
                b5: [498.9, 708.66],
                b6: [354.33, 498.9],
                b7: [249.45, 354.33],
                b8: [175.75, 249.45],
                b9: [124.72, 175.75],
                b10: [87.87, 124.72],
                c0: [2599.37, 3676.54],
                c1: [1836.85, 2599.37],
                c2: [1298.27, 1836.85],
                c3: [918.43, 1298.27],
                c4: [649.13, 918.43],
                c5: [459.21, 649.13],
                c6: [323.15, 459.21],
                c7: [229.61, 323.15],
                c8: [161.57, 229.61],
                c9: [113.39, 161.57],
                c10: [79.37, 113.39],
                dl: [311.81, 623.62],
                letter: [612, 792],
                "government-letter": [576, 756],
                legal: [612, 1008],
                "junior-legal": [576, 360],
                ledger: [1224, 792],
                tabloid: [792, 1224],
                "credit-card": [153, 243]
            };
            function r(e) {
                var n = {};
                this.subscribe = function(t, e, r) {
                    if ("function" !== typeof e)
                        return !1;
                    n.hasOwnProperty(t) || (n[t] = {});
                    var o = Math.random().toString(35);
                    return n[t][o] = [e, !!r],
                    o
                }
                ,
                this.unsubscribe = function(t) {
                    for (var e in n)
                        if (n[e][t])
                            return delete n[e][t],
                            !0;
                    return !1
                }
                ,
                this.publish = function(r) {
                    if (n.hasOwnProperty(r)) {
                        var o = Array.prototype.slice.call(arguments, 1)
                          , i = [];
                        for (var a in n[r]) {
                            var s = n[r][a];
                            try {
                                s[0].apply(e, o)
                            } catch (e) {
                                t.console && console.error("jsPDF PubSub Error", e.message, e)
                            }
                            s[1] && i.push(a)
                        }
                        i.length && i.forEach(this.unsubscribe)
                    }
                }
            }
            function o(a, s, A, l) {
                var c = {};
                "object" === typeof a && (a = (c = a).orientation,
                s = c.unit || s,
                A = c.format || A,
                l = c.compress || c.compressPdf || l),
                s = s || "mm",
                A = A || "a4",
                a = ("" + (a || "P")).toLowerCase();
                ("" + A).toLowerCase();
                var u, f, g, d, h, p, w, C, m, B, E = !!l && "function" === typeof Uint8Array, I = c.textColor || "0 g", y = c.drawColor || "0 G", Q = c.fontSize || 16, v = c.lineHeight || 1.15, b = c.lineWidth || .200025, x = 2, S = !1, k = [], q = {}, T = {}, O = 0, D = [], F = {}, L = [], P = 0, N = 0, R = 0, M = {
                    title: "",
                    subject: "",
                    author: "",
                    keywords: "",
                    creator: ""
                }, j = {}, H = new r(j), X = function(t) {
                    return t.toFixed(2)
                }, z = function(t) {
                    return t.toFixed(3)
                }, U = function(t) {
                    return ("0" + parseInt(t)).slice(-2)
                }, V = function(t) {
                    S ? D[d].push(t) : (R += t.length + 1,
                    L.push(t))
                }, G = function() {
                    return k[++x] = R,
                    V(x + " 0 obj"),
                    x
                }, _ = function(t) {
                    V("stream"),
                    V(t),
                    V("endstream")
                }, J = function() {
                    for (var t in V("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
                    V("/Font <<"),
                    q)
                        q.hasOwnProperty(t) && V("/" + t + " " + q[t].objectNumber + " 0 R");
                    V(">>"),
                    V("/XObject <<"),
                    H.publish("putXobjectDict"),
                    V(">>")
                }, Y = function() {
                    !function() {
                        for (var t in q)
                            q.hasOwnProperty(t) && ((e = q[t]).objectNumber = G(),
                            V("<</BaseFont/" + e.PostScriptName + "/Type/Font"),
                            "string" === typeof e.encoding && V("/Encoding/" + e.encoding),
                            V("/Subtype/Type1>>"),
                            V("endobj"));
                        var e
                    }(),
                    H.publish("putResources"),
                    k[2] = R,
                    V("2 0 obj"),
                    V("<<"),
                    J(),
                    V(">>"),
                    V("endobj"),
                    H.publish("postPutResources")
                }, W = function(t, e, n) {
                    T.hasOwnProperty(e) || (T[e] = {}),
                    T[e][n] = t
                }, K = function(t, e, n, r) {
                    var o = "F" + (Object.keys(q).length + 1).toString(10)
                      , i = q[o] = {
                        id: o,
                        PostScriptName: t,
                        fontName: e,
                        fontStyle: n,
                        encoding: r,
                        metadata: {}
                    };
                    return W(o, e, n),
                    H.publish("addFont", i),
                    o
                }, Z = function(t, e) {
                    return function(t, e) {
                        var n, r, o, i, a, s, A, l, c;
                        if (o = (e = e || {}).sourceEncoding || "Unicode",
                        a = e.outputEncoding,
                        (e.autoencode || a) && q[u].metadata && q[u].metadata[o] && q[u].metadata[o].encoding && (i = q[u].metadata[o].encoding,
                        !a && q[u].encoding && (a = q[u].encoding),
                        !a && i.codePages && (a = i.codePages[0]),
                        "string" === typeof a && (a = i[a]),
                        a)) {
                            for (A = !1,
                            s = [],
                            n = 0,
                            r = t.length; n < r; n++)
                                (l = a[t.charCodeAt(n)]) ? s.push(String.fromCharCode(l)) : s.push(t[n]),
                                s[n].charCodeAt(0) >> 8 && (A = !0);
                            t = s.join("")
                        }
                        for (n = t.length; void 0 === A && 0 !== n; )
                            t.charCodeAt(n - 1) >> 8 && (A = !0),
                            n--;
                        if (!A)
                            return t;
                        for (s = e.noBOM ? [] : [254, 255],
                        n = 0,
                        r = t.length; n < r; n++) {
                            if ((c = (l = t.charCodeAt(n)) >> 8) >> 8)
                                throw new Error("Character at position " + n + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                            s.push(c),
                            s.push(l - (c << 8))
                        }
                        return String.fromCharCode.apply(void 0, s)
                    }(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
                }, $ = function() {
                    (function(t, e) {
                        var r = "string" === typeof e && e.toLowerCase();
                        if ("string" === typeof t) {
                            var o = t.toLowerCase();
                            n.hasOwnProperty(o) && (t = n[o][0] / f,
                            e = n[o][1] / f)
                        }
                        if (Array.isArray(t) && (e = t[1],
                        t = t[0]),
                        r) {
                            switch (r.substr(0, 1)) {
                            case "l":
                                e > t && (r = "s");
                                break;
                            case "p":
                                t > e && (r = "s")
                            }
                            "s" === r && (g = t,
                            t = e,
                            e = g)
                        }
                        S = !0,
                        D[++O] = [],
                        F[O] = {
                            width: Number(t) || h,
                            height: Number(e) || p
                        },
                        tt(O)
                    }
                    ).apply(this, arguments),
                    V(X(b * f) + " w"),
                    V(y),
                    0 !== P && V(P + " J"),
                    0 !== N && V(N + " j"),
                    H.publish("addPage", {
                        pageNumber: O
                    })
                }, tt = function(t) {
                    t > 0 && t <= O && (d = t,
                    h = F[t].width,
                    p = F[t].height)
                }, et = function(t, e) {
                    var n;
                    t = void 0 !== t ? t : q[u].fontName,
                    e = void 0 !== e ? e : q[u].fontStyle;
                    try {
                        n = T[t][e]
                    } catch (t) {}
                    if (!n)
                        throw new Error("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts.");
                    return n
                }, nt = function() {
                    S = !1,
                    x = 2,
                    L = [],
                    k = [],
                    V("%PDF-" + e),
                    function() {
                        var e, n, r, a, s, A, l, c, u;
                        for (l = t.adler32cs || o.adler32cs,
                        E && "undefined" === typeof l && (E = !1),
                        e = 1; e <= O; e++) {
                            if (G(),
                            c = (h = F[e].width) * f,
                            u = (p = F[e].height) * f,
                            V("<</Type /Page"),
                            V("/Parent 1 0 R"),
                            V("/Resources 2 0 R"),
                            V("/MediaBox [0 0 " + X(c) + " " + X(u) + "]"),
                            V("/Contents " + (x + 1) + " 0 R>>"),
                            V("endobj"),
                            n = D[e].join("\n"),
                            G(),
                            E) {
                                for (r = [],
                                a = n.length; a--; )
                                    r[a] = n.charCodeAt(a);
                                A = l.from(n),
                                (s = new i(6)).append(new Uint8Array(r)),
                                n = s.flush(),
                                (r = new Uint8Array(n.length + 6)).set(new Uint8Array([120, 156])),
                                r.set(n, 2),
                                r.set(new Uint8Array([255 & A, A >> 8 & 255, A >> 16 & 255, A >> 24 & 255]), n.length + 2),
                                n = String.fromCharCode.apply(null, r),
                                V("<</Length " + n.length + " /Filter [/FlateDecode]>>")
                            } else
                                V("<</Length " + n.length + ">>");
                            _(n),
                            V("endobj")
                        }
                        k[1] = R,
                        V("1 0 obj"),
                        V("<</Type /Pages");
                        var g = "/Kids [";
                        for (a = 0; a < O; a++)
                            g += 3 + 2 * a + " 0 R ";
                        V(g + "]"),
                        V("/Count " + O),
                        V(">>"),
                        V("endobj")
                    }(),
                    Y(),
                    G(),
                    V("<<"),
                    function() {
                        for (var t in V("/Producer (jsPDF " + o.version + ")"),
                        M)
                            M.hasOwnProperty(t) && M[t] && V("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + Z(M[t]) + ")");
                        var e = new Date
                          , n = e.getTimezoneOffset()
                          , r = n < 0 ? "+" : "-"
                          , i = Math.floor(Math.abs(n / 60))
                          , a = Math.abs(n % 60)
                          , s = [r, U(i), "'", U(a), "'"].join("");
                        V(["/CreationDate (D:", e.getFullYear(), U(e.getMonth() + 1), U(e.getDate()), U(e.getHours()), U(e.getMinutes()), U(e.getSeconds()), s, ")"].join(""))
                    }(),
                    V(">>"),
                    V("endobj"),
                    G(),
                    V("<<"),
                    function() {
                        switch (V("/Type /Catalog"),
                        V("/Pages 1 0 R"),
                        C || (C = "fullwidth"),
                        C) {
                        case "fullwidth":
                            V("/OpenAction [3 0 R /FitH null]");
                            break;
                        case "fullheight":
                            V("/OpenAction [3 0 R /FitV null]");
                            break;
                        case "fullpage":
                            V("/OpenAction [3 0 R /Fit]");
                            break;
                        case "original":
                            V("/OpenAction [3 0 R /XYZ null null 1]");
                            break;
                        default:
                            var t = "" + C;
                            "%" === t.substr(t.length - 1) && (C = parseInt(C) / 100),
                            "number" === typeof C && V("/OpenAction [3 0 R /XYZ null null " + X(C) + "]")
                        }
                        switch (m || (m = "continuous"),
                        m) {
                        case "continuous":
                            V("/PageLayout /OneColumn");
                            break;
                        case "single":
                            V("/PageLayout /SinglePage");
                            break;
                        case "two":
                        case "twoleft":
                            V("/PageLayout /TwoColumnLeft");
                            break;
                        case "tworight":
                            V("/PageLayout /TwoColumnRight")
                        }
                        w && V("/PageMode /" + w),
                        H.publish("putCatalog")
                    }(),
                    V(">>"),
                    V("endobj");
                    var n, r = R, a = "0000000000";
                    for (V("xref"),
                    V("0 " + (x + 1)),
                    V(a + " 65535 f "),
                    n = 1; n <= x; n++)
                        V((a + k[n]).slice(-10) + " 00000 n ");
                    return V("trailer"),
                    V("<<"),
                    V("/Size " + (x + 1)),
                    V("/Root " + x + " 0 R"),
                    V("/Info " + (x - 1) + " 0 R"),
                    V(">>"),
                    V("startxref"),
                    V(r),
                    V("%%EOF"),
                    S = !0,
                    L.join("\n")
                }, rt = function(t) {
                    var e = "S";
                    return "F" === t ? e = "f" : "FD" === t || "DF" === t ? e = "B" : "f" !== t && "f*" !== t && "B" !== t && "B*" !== t || (e = t),
                    e
                }, ot = function() {
                    for (var t = nt(), e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n); e--; )
                        r[e] = t.charCodeAt(e);
                    return n
                }, it = function() {
                    return new Blob([ot()],{
                        type: "application/pdf"
                    })
                }, at = ((B = function(e, n) {
                    var r = "dataur" === ("" + e).substr(0, 6) ? "data:application/pdf;base64," + btoa(nt()) : 0;
                    switch (e) {
                    case void 0:
                        return nt();
                    case "save":
                        if (navigator.getUserMedia && (void 0 === t.URL || void 0 === t.URL.createObjectURL))
                            return j.output("dataurlnewwindow");
                        saveAs(it(), n),
                        "function" === typeof saveAs.unload && t.setTimeout && setTimeout(saveAs.unload, 911);
                        break;
                    case "arraybuffer":
                        return ot();
                    case "blob":
                        return it();
                    case "bloburi":
                    case "bloburl":
                        return t.URL && t.URL.createObjectURL(it()) || void 0;
                    case "datauristring":
                    case "dataurlstring":
                        return r;
                    case "dataurlnewwindow":
                        var o = t.open(r);
                        if (o || "undefined" === typeof safari)
                            return o;
                    case "datauri":
                    case "dataurl":
                        return t.document.location.href = r;
                    default:
                        throw new Error('Output type "' + e + '" is not supported.')
                    }
                }
                ).foo = function() {
                    try {
                        return B.apply(this, arguments)
                    } catch (r) {
                        var e = r.stack || "";
                        ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
                        var n = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + r.message;
                        if (!t.console)
                            throw new Error(n);
                        t.console.error(n, r),
                        t.alert && alert(n)
                    }
                }
                ,
                B.foo.bar = B,
                B.foo);
                switch (s) {
                case "pt":
                    f = 1;
                    break;
                case "mm":
                    f = 72 / 25.4;
                    break;
                case "cm":
                    f = 72 / 2.54;
                    break;
                case "in":
                    f = 72;
                    break;
                case "px":
                    f = 96 / 72;
                    break;
                case "pc":
                case "em":
                    f = 12;
                    break;
                case "ex":
                    f = 6;
                    break;
                default:
                    throw "Invalid unit: " + s
                }
                for (var st in j.internal = {
                    pdfEscape: Z,
                    getStyle: rt,
                    getFont: function() {
                        return q[et.apply(j, arguments)]
                    },
                    getFontSize: function() {
                        return Q
                    },
                    getLineHeight: function() {
                        return Q * v
                    },
                    write: function(t) {
                        V(1 === arguments.length ? t : Array.prototype.join.call(arguments, " "))
                    },
                    getCoordinateString: function(t) {
                        return X(t * f)
                    },
                    getVerticalCoordinateString: function(t) {
                        return X((p - t) * f)
                    },
                    collections: {},
                    newObject: G,
                    putStream: _,
                    events: H,
                    scaleFactor: f,
                    pageSize: {
                        get width() {
                            return h
                        },
                        get height() {
                            return p
                        }
                    },
                    output: function(t, e) {
                        return at(t, e)
                    },
                    getNumberOfPages: function() {
                        return D.length - 1
                    },
                    pages: D
                },
                j.addPage = function() {
                    return $.apply(this, arguments),
                    this
                }
                ,
                j.setPage = function() {
                    return tt.apply(this, arguments),
                    this
                }
                ,
                j.setDisplayMode = function(t, e, n) {
                    return C = t,
                    m = e,
                    w = n,
                    this
                }
                ,
                j.text = function(t, e, n, r, o) {
                    function i(t) {
                        return t = t.split("\t").join(Array(c.TabLen || 9).join(" ")),
                        Z(t, r)
                    }
                    "number" === typeof t && (g = n,
                    n = e,
                    e = t,
                    t = g),
                    "string" === typeof t && t.match(/[\n\r]/) && (t = t.split(/\r\n|\r|\n/g)),
                    "number" === typeof r && (o = r,
                    r = null);
                    var a, s = "", A = "Td";
                    if (o) {
                        o *= Math.PI / 180;
                        var l = Math.cos(o)
                          , d = Math.sin(o);
                        s = [X(l), X(d), X(-1 * d), X(l), ""].join(" "),
                        A = "Tm"
                    }
                    if ("noBOM"in (r = r || {}) || (r.noBOM = !0),
                    "autoencode"in r || (r.autoencode = !0),
                    "string" === typeof t)
                        t = i(t);
                    else {
                        if (!(t instanceof Array))
                            throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                        for (var h = t.concat(), w = [], C = h.length; C--; )
                            w.push(i(h.shift()));
                        var m = Math.ceil((p - n) * f / (Q * v));
                        0 <= m && m < w.length + 1 && (a = w.splice(m - 1)),
                        t = w.join(") Tj\nT* (")
                    }
                    return V("BT\n/" + u + " " + Q + " Tf\n" + Q * v + " TL\n" + I + "\n" + s + X(e * f) + " " + X((p - n) * f) + " " + A + "\n(" + t + ") Tj\nET"),
                    a && (this.addPage(),
                    this.text(a, e, 1.7 * Q / f)),
                    this
                }
                ,
                j.lstext = function(t, e, n, r) {
                    for (var o = 0, i = t.length; o < i; o++,
                    e += r)
                        this.text(t[o], e, n)
                }
                ,
                j.line = function(t, e, n, r) {
                    return this.lines([[n - t, r - e]], t, e)
                }
                ,
                j.clip = function() {
                    V("W"),
                    V("S")
                }
                ,
                j.lines = function(t, e, n, r, o, i) {
                    var a, s, A, l, c, u, d, h, w, C, m;
                    for ("number" === typeof t && (g = n,
                    n = e,
                    e = t,
                    t = g),
                    r = r || [1, 1],
                    V(z(e * f) + " " + z((p - n) * f) + " m "),
                    a = r[0],
                    s = r[1],
                    l = t.length,
                    C = e,
                    m = n,
                    A = 0; A < l; A++)
                        2 === (c = t[A]).length ? (C = c[0] * a + C,
                        m = c[1] * s + m,
                        V(z(C * f) + " " + z((p - m) * f) + " l")) : (u = c[0] * a + C,
                        d = c[1] * s + m,
                        h = c[2] * a + C,
                        w = c[3] * s + m,
                        C = c[4] * a + C,
                        m = c[5] * s + m,
                        V(z(u * f) + " " + z((p - d) * f) + " " + z(h * f) + " " + z((p - w) * f) + " " + z(C * f) + " " + z((p - m) * f) + " c"));
                    return i && V(" h"),
                    null !== o && V(rt(o)),
                    this
                }
                ,
                j.rect = function(t, e, n, r, o) {
                    rt(o);
                    return V([X(t * f), X((p - e) * f), X(n * f), X(-r * f), "re"].join(" ")),
                    null !== o && V(rt(o)),
                    this
                }
                ,
                j.triangle = function(t, e, n, r, o, i, a) {
                    return this.lines([[n - t, r - e], [o - n, i - r], [t - o, e - i]], t, e, [1, 1], a, !0),
                    this
                }
                ,
                j.roundedRect = function(t, e, n, r, o, i, a) {
                    var s = 4 / 3 * (Math.SQRT2 - 1);
                    return this.lines([[n - 2 * o, 0], [o * s, 0, o, i - i * s, o, i], [0, r - 2 * i], [0, i * s, -o * s, i, -o, i], [2 * o - n, 0], [-o * s, 0, -o, -i * s, -o, -i], [0, 2 * i - r], [0, -i * s, o * s, -i, o, -i]], t + o, e, [1, 1], a),
                    this
                }
                ,
                j.ellipse = function(t, e, n, r, o) {
                    var i = 4 / 3 * (Math.SQRT2 - 1) * n
                      , a = 4 / 3 * (Math.SQRT2 - 1) * r;
                    return V([X((t + n) * f), X((p - e) * f), "m", X((t + n) * f), X((p - (e - a)) * f), X((t + i) * f), X((p - (e - r)) * f), X(t * f), X((p - (e - r)) * f), "c"].join(" ")),
                    V([X((t - i) * f), X((p - (e - r)) * f), X((t - n) * f), X((p - (e - a)) * f), X((t - n) * f), X((p - e) * f), "c"].join(" ")),
                    V([X((t - n) * f), X((p - (e + a)) * f), X((t - i) * f), X((p - (e + r)) * f), X(t * f), X((p - (e + r)) * f), "c"].join(" ")),
                    V([X((t + i) * f), X((p - (e + r)) * f), X((t + n) * f), X((p - (e + a)) * f), X((t + n) * f), X((p - e) * f), "c"].join(" ")),
                    null !== o && V(rt(o)),
                    this
                }
                ,
                j.circle = function(t, e, n, r) {
                    return this.ellipse(t, e, n, n, r)
                }
                ,
                j.setProperties = function(t) {
                    for (var e in M)
                        M.hasOwnProperty(e) && t[e] && (M[e] = t[e]);
                    return this
                }
                ,
                j.setFontSize = function(t) {
                    return Q = t,
                    this
                }
                ,
                j.setFont = function(t, e) {
                    return u = et(t, e),
                    this
                }
                ,
                j.setFontStyle = j.setFontType = function(t) {
                    return u = et(void 0, t),
                    this
                }
                ,
                j.getFontList = function() {
                    var t, e, n, r = {};
                    for (t in T)
                        if (T.hasOwnProperty(t))
                            for (e in r[t] = n = [],
                            T[t])
                                T[t].hasOwnProperty(e) && n.push(e);
                    return r
                }
                ,
                j.setLineWidth = function(t) {
                    return V((t * f).toFixed(2) + " w"),
                    this
                }
                ,
                j.setDrawColor = function(t, e, n, r) {
                    var o;
                    return o = void 0 === e || void 0 === r && t === e === n ? "string" === typeof t ? t + " G" : X(t / 255) + " G" : void 0 === r ? "string" === typeof t ? [t, e, n, "RG"].join(" ") : [X(t / 255), X(e / 255), X(n / 255), "RG"].join(" ") : "string" === typeof t ? [t, e, n, r, "K"].join(" ") : [X(t), X(e), X(n), X(r), "K"].join(" "),
                    V(o),
                    this
                }
                ,
                j.setFillColor = function(t, e, n, r) {
                    var o;
                    return o = void 0 === e || void 0 === r && t === e === n ? "string" === typeof t ? t + " g" : X(t / 255) + " g" : void 0 === r ? "string" === typeof t ? [t, e, n, "rg"].join(" ") : [X(t / 255), X(e / 255), X(n / 255), "rg"].join(" ") : "string" === typeof t ? [t, e, n, r, "k"].join(" ") : [X(t), X(e), X(n), X(r), "k"].join(" "),
                    V(o),
                    this
                }
                ,
                j.setTextColor = function(t, e, n) {
                    if ("string" === typeof t && /^#[0-9A-Fa-f]{6}$/.test(t)) {
                        var r = parseInt(t.substr(1), 16);
                        t = r >> 16 & 255,
                        e = r >> 8 & 255,
                        n = 255 & r
                    }
                    return I = 0 === t && 0 === e && 0 === n || "undefined" === typeof e ? z(t / 255) + " g" : [z(t / 255), z(e / 255), z(n / 255), "rg"].join(" "),
                    this
                }
                ,
                j.CapJoinStyles = {
                    0: 0,
                    butt: 0,
                    but: 0,
                    miter: 0,
                    1: 1,
                    round: 1,
                    rounded: 1,
                    circle: 1,
                    2: 2,
                    projecting: 2,
                    project: 2,
                    square: 2,
                    bevel: 2
                },
                j.setLineCap = function(t) {
                    var e = this.CapJoinStyles[t];
                    if (void 0 === e)
                        throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                    return P = e,
                    V(e + " J"),
                    this
                }
                ,
                j.setLineJoin = function(t) {
                    var e = this.CapJoinStyles[t];
                    if (void 0 === e)
                        throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                    return N = e,
                    V(e + " j"),
                    this
                }
                ,
                j.output = at,
                j.save = function(t) {
                    j.output("save", t)
                }
                ,
                o.API)
                    o.API.hasOwnProperty(st) && ("events" === st && o.API.events.length ? function(t, e) {
                        var n, r, o;
                        for (o = e.length - 1; -1 !== o; o--)
                            n = e[o][0],
                            r = e[o][1],
                            t.subscribe.apply(t, [n].concat("function" === typeof r ? [r] : r))
                    }(H, o.API.events) : j[st] = o.API[st]);
                return function() {
                    for (var t = [["Helvetica", "helvetica", "normal"], ["Helvetica-Bold", "helvetica", "bold"], ["Helvetica-Oblique", "helvetica", "italic"], ["Helvetica-BoldOblique", "helvetica", "bolditalic"], ["Courier", "courier", "normal"], ["Courier-Bold", "courier", "bold"], ["Courier-Oblique", "courier", "italic"], ["Courier-BoldOblique", "courier", "bolditalic"], ["Times-Roman", "times", "normal"], ["Times-Bold", "times", "bold"], ["Times-Italic", "times", "italic"], ["Times-BoldItalic", "times", "bolditalic"]], e = 0, n = t.length; e < n; e++) {
                        var r = K(t[e][0], t[e][1], t[e][2], "StandardEncoding")
                          , o = t[e][0].split("-");
                        W(r, o[0], o[1] || "")
                    }
                    H.publish("addFonts", {
                        fonts: q,
                        dictionary: T
                    })
                }(),
                u = "F1",
                $(A, a),
                H.publish("initialized"),
                j
            }
            return o.API = {
                events: []
            },
            o.version = "1.0.272-debug 2014-09-29T15:09:diegocr",
            "function" === typeof define && define.amd ? define("jsPDF", function() {
                return o
            }) : t.jsPDF = o,
            o
        }("undefined" !== typeof self && self || "undefined" !== typeof window && window || this);
        !function(t) {
            "use strict";
            o.API.addHTML = function(t, e, n, r, o) {
                if ("undefined" === typeof html2canvas && "undefined" === typeof rasterizeHTML)
                    throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
                "number" !== typeof e && (r = e,
                o = n),
                "function" === typeof r && (o = r,
                r = null);
                var i = this.internal
                  , a = i.scaleFactor
                  , s = i.pageSize.width
                  , A = i.pageSize.height;
                if ((r = r || {}).onrendered = function(t) {
                    e = parseInt(e) || 0,
                    n = parseInt(n) || 0;
                    var i = r.dim || {}
                      , l = i.h || 0
                      , c = i.w || Math.min(s, t.width / a) - e
                      , u = "JPEG";
                    if (r.format && (u = r.format),
                    t.height > A && r.pagesplit) {
                        var f = function() {
                            for (var r = 0; ; ) {
                                var i = document.createElement("canvas");
                                i.width = Math.min(s * a, t.width),
                                i.height = Math.min(A * a, t.height - r),
                                i.getContext("2d").drawImage(t, 0, r, t.width, i.height, 0, 0, i.width, i.height);
                                var l = [i, e, r ? 0 : n, i.width / a, i.height / a, u, null, "SLOW"];
                                if (this.addImage.apply(this, l),
                                (r += i.height) >= t.height)
                                    break;
                                this.addPage()
                            }
                            o(c, r, null, l)
                        }
                        .bind(this);
                        if ("CANVAS" === t.nodeName) {
                            var g = new Image;
                            g.onload = f,
                            g.src = t.toDataURL("image/png"),
                            t = g
                        } else
                            f()
                    } else {
                        var d = Math.random().toString(35)
                          , h = [t, e, n, c, l, u, d, "SLOW"];
                        this.addImage.apply(this, h),
                        o(c, l, d, h)
                    }
                }
                .bind(this),
                "undefined" !== typeof html2canvas && !r.rstz)
                    return html2canvas(t, r);
                if ("undefined" !== typeof rasterizeHTML) {
                    var l = "drawDocument";
                    return "string" === typeof t && (l = /^http/.test(t) ? "drawURL" : "drawHTML"),
                    r.width = r.width || s * a,
                    rasterizeHTML[l](t, void 0, r).then(function(t) {
                        r.onrendered(t.image)
                    }, function(t) {
                        o(null, t)
                    })
                }
                return null
            }
        }(),
        function(t) {
            "use strict";
            var e = ["jpeg", "jpg", "png"]
              , n = function(t) {
                var e = this.internal.newObject()
                  , r = this.internal.write
                  , o = this.internal.putStream;
                if (t.n = e,
                r("<</Type /XObject"),
                r("/Subtype /Image"),
                r("/Width " + t.w),
                r("/Height " + t.h),
                t.cs === this.color_spaces.INDEXED ? r("/ColorSpace [/Indexed /DeviceRGB " + (t.pal.length / 3 - 1) + " " + ("smask"in t ? e + 2 : e + 1) + " 0 R]") : (r("/ColorSpace /" + t.cs),
                t.cs === this.color_spaces.DEVICE_CMYK && r("/Decode [1 0 1 0 1 0 1 0]")),
                r("/BitsPerComponent " + t.bpc),
                "f"in t && r("/Filter /" + t.f),
                "dp"in t && r("/DecodeParms <<" + t.dp + ">>"),
                "trns"in t && t.trns.constructor == Array) {
                    for (var i = "", a = 0, s = t.trns.length; a < s; a++)
                        i += t.trns[a] + " " + t.trns[a] + " ";
                    r("/Mask [" + i + "]")
                }
                if ("smask"in t && r("/SMask " + (e + 1) + " 0 R"),
                r("/Length " + t.data.length + ">>"),
                o(t.data),
                r("endobj"),
                "smask"in t) {
                    var A = "/Predictor 15 /Colors 1 /BitsPerComponent " + t.bpc + " /Columns " + t.w
                      , l = {
                        w: t.w,
                        h: t.h,
                        cs: "DeviceGray",
                        bpc: t.bpc,
                        dp: A,
                        data: t.smask
                    };
                    "f"in t && (l.f = t.f),
                    n.call(this, l)
                }
                t.cs === this.color_spaces.INDEXED && (this.internal.newObject(),
                r("<< /Length " + t.pal.length + ">>"),
                o(this.arrayBufferToBinaryString(new Uint8Array(t.pal))),
                r("endobj"))
            }
              , r = function() {
                var t = this.internal.collections.addImage_images;
                for (var e in t)
                    n.call(this, t[e])
            }
              , o = function() {
                var t, e = this.internal.collections.addImage_images, n = this.internal.write;
                for (var r in e)
                    n("/I" + (t = e[r]).i, t.n, "0", "R")
            }
              , i = function(t) {
                return "object" === typeof t && 1 === t.nodeType
            }
              , a = function(t, e) {
                var n;
                if (e)
                    for (var r in e)
                        if (t === e[r].alias) {
                            n = e[r];
                            break
                        }
                return n
            };
            t.color_spaces = {
                DEVICE_RGB: "DeviceRGB",
                DEVICE_GRAY: "DeviceGray",
                DEVICE_CMYK: "DeviceCMYK",
                CAL_GREY: "CalGray",
                CAL_RGB: "CalRGB",
                LAB: "Lab",
                ICC_BASED: "ICCBased",
                INDEXED: "Indexed",
                PATTERN: "Pattern",
                SEPERATION: "Seperation",
                DEVICE_N: "DeviceN"
            },
            t.decode = {
                DCT_DECODE: "DCTDecode",
                FLATE_DECODE: "FlateDecode",
                LZW_DECODE: "LZWDecode",
                JPX_DECODE: "JPXDecode",
                JBIG2_DECODE: "JBIG2Decode",
                ASCII85_DECODE: "ASCII85Decode",
                ASCII_HEX_DECODE: "ASCIIHexDecode",
                RUN_LENGTH_DECODE: "RunLengthDecode",
                CCITT_FAX_DECODE: "CCITTFaxDecode"
            },
            t.image_compression = {
                NONE: "NONE",
                FAST: "FAST",
                MEDIUM: "MEDIUM",
                SLOW: "SLOW"
            },
            t.sHashCode = function(t) {
                return Array.prototype.reduce && t.split("").reduce(function(t, e) {
                    return (t = (t << 5) - t + e.charCodeAt(0)) & t
                }, 0)
            }
            ,
            t.isString = function(t) {
                return "string" === typeof t
            }
            ,
            t.extractInfoFromBase64DataURI = function(t) {
                return /^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t)
            }
            ,
            t.supportsArrayBuffer = function() {
                return "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array
            }
            ,
            t.isArrayBuffer = function(t) {
                return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer
            }
            ,
            t.isArrayBufferView = function(t) {
                return !!this.supportsArrayBuffer() && ("undefined" !== typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" !== typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array))
            }
            ,
            t.binaryStringToUint8Array = function(t) {
                for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++)
                    n[r] = t.charCodeAt(r);
                return n
            }
            ,
            t.arrayBufferToBinaryString = function(t) {
                this.isArrayBuffer(t) && (t = new Uint8Array(t));
                for (var e = "", n = t.byteLength, r = 0; r < n; r++)
                    e += String.fromCharCode(t[r]);
                return e
            }
            ,
            t.arrayBufferToBase64 = function(t) {
                for (var e, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = new Uint8Array(t), i = o.byteLength, a = i % 3, s = i - a, A = 0; A < s; A += 3)
                    n += r[(16515072 & (e = o[A] << 16 | o[A + 1] << 8 | o[A + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e];
                return 1 == a ? n += r[(252 & (e = o[s])) >> 2] + r[(3 & e) << 4] + "==" : 2 == a && (n += r[(64512 & (e = o[s] << 8 | o[s + 1])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="),
                n
            }
            ,
            t.createImageInfo = function(t, e, n, r, o, i, a, s, A, l, c, u) {
                var f = {
                    alias: s,
                    w: e,
                    h: n,
                    cs: r,
                    bpc: o,
                    i: a,
                    data: t
                };
                return i && (f.f = i),
                A && (f.dp = A),
                l && (f.trns = l),
                c && (f.pal = c),
                u && (f.smask = u),
                f
            }
            ,
            t.addImage = function(n, s, A, l, c, u, f, g, d) {
                if ("string" !== typeof s) {
                    var h = u;
                    u = c,
                    c = l,
                    l = A,
                    A = s,
                    s = h
                }
                if ("object" === typeof n && !i(n) && "imageData"in n) {
                    var p = n;
                    n = p.imageData,
                    s = p.format || s,
                    A = p.x || A || 0,
                    l = p.y || l || 0,
                    c = p.w || c,
                    u = p.h || u,
                    f = p.alias || f,
                    g = p.compression || g,
                    d = p.rotation || p.angle || d
                }
                if (isNaN(A) || isNaN(l))
                    throw console.error("jsPDF.addImage: Invalid coordinates", arguments),
                    new Error("Invalid coordinates passed to jsPDF.addImage");
                var w, C, m, B, E, I = function() {
                    var t = this.internal.collections.addImage_images;
                    return t || (this.internal.collections.addImage_images = t = {},
                    this.internal.events.subscribe("putResources", r),
                    this.internal.events.subscribe("putXobjectDict", o)),
                    t
                }
                .call(this);
                if (!(w = a(n, I)) && (i(n) && (n = function(t, e, n) {
                    if ("IMG" === t.nodeName && t.hasAttribute("src")) {
                        var r = "" + t.getAttribute("src");
                        if (!n && 0 === r.indexOf("data:image/"))
                            return r;
                        !e && /\.png(?:[?#].*)?$/i.test(r) && (e = "png")
                    }
                    if ("CANVAS" === t.nodeName)
                        var o = t;
                    else {
                        (o = document.createElement("canvas")).width = t.clientWidth || t.width,
                        o.height = t.clientHeight || t.height;
                        var i = o.getContext("2d");
                        if (!i)
                            throw "addImage requires canvas to be supported by browser.";
                        if (n) {
                            var a, s, A, l, c, u, f, g, d = Math.PI / 180;
                            "object" === typeof n && (a = n.x,
                            s = n.y,
                            A = n.bg,
                            n = n.angle),
                            g = n * d,
                            l = Math.abs(Math.cos(g)),
                            c = Math.abs(Math.sin(g)),
                            u = o.width,
                            f = o.height,
                            o.width = f * c + u * l,
                            o.height = f * l + u * c,
                            isNaN(a) && (a = o.width / 2),
                            isNaN(s) && (s = o.height / 2),
                            i.clearRect(0, 0, o.width, o.height),
                            i.fillStyle = A || "white",
                            i.fillRect(0, 0, o.width, o.height),
                            i.save(),
                            i.translate(a, s),
                            i.rotate(g),
                            i.drawImage(t, -u / 2, -f / 2),
                            i.rotate(-g),
                            i.translate(-a, -s),
                            i.restore()
                        } else
                            i.drawImage(t, 0, 0, o.width, o.height)
                    }
                    return o.toDataURL("png" == ("" + e).toLowerCase() ? "image/png" : "image/jpeg")
                }(n, s, d)),
                ("undefined" === typeof (E = f) || null === E) && (f = "string" === typeof (B = n) && t.sHashCode(B)),
                !(w = a(f, I)))) {
                    if (this.isString(n)) {
                        var y = this.extractInfoFromBase64DataURI(n);
                        y ? (s = y[2],
                        n = atob(y[3])) : 137 === n.charCodeAt(0) && 80 === n.charCodeAt(1) && 78 === n.charCodeAt(2) && 71 === n.charCodeAt(3) && (s = "png")
                    }
                    if (s = (s || "JPEG").toLowerCase(),
                    m = s,
                    -1 === e.indexOf(m))
                        throw new Error("addImage currently only supports formats " + e + ", not '" + s + "'");
                    if (function(e) {
                        return "function" !== typeof t["process" + e.toUpperCase()]
                    }(s))
                        throw new Error("please ensure that the plugin for '" + s + "' support is added");
                    if (this.supportsArrayBuffer() && (C = n,
                    n = this.binaryStringToUint8Array(n)),
                    !(w = this["process" + s.toUpperCase()](n, function(t) {
                        var e = 0;
                        return t && (e = Object.keys ? Object.keys(t).length : function(t) {
                            var e = 0;
                            for (var n in t)
                                t.hasOwnProperty(n) && e++;
                            return e
                        }(t)),
                        e
                    }(I), f, function(e) {
                        return e && "string" === typeof e && (e = e.toUpperCase()),
                        e in t.image_compression ? e : t.image_compression.NONE
                    }(g), C)))
                        throw new Error("An unkwown error occurred whilst processing the image")
                }
                return function(t, e, n, r, o, i, a) {
                    var s = function(t, e, n) {
                        return t || e || (t = -96,
                        e = -96),
                        t < 0 && (t = -1 * n.w * 72 / t / this.internal.scaleFactor),
                        e < 0 && (e = -1 * n.h * 72 / e / this.internal.scaleFactor),
                        0 === t && (t = e * n.w / n.h),
                        0 === e && (e = t * n.h / n.w),
                        [t, e]
                    }
                    .call(this, n, r, o)
                      , A = this.internal.getCoordinateString
                      , l = this.internal.getVerticalCoordinateString;
                    n = s[0],
                    r = s[1],
                    a[i] = o,
                    this.internal.write("q", A(n), "0 0", A(r), A(t), l(e + r), "cm /I" + o.i, "Do Q")
                }
                .call(this, A, l, c, u, w, w.i, I),
                this
            }
            ;
            var s = function(t, e) {
                return t.subarray(e, e + 5)
            };
            t.processJPEG = function(t, e, n, r, o) {
                var i, a = this.color_spaces.DEVICE_RGB, A = this.decode.DCT_DECODE;
                return this.isString(t) ? (i = function(t) {
                    var e;
                    if (255 === !t.charCodeAt(0) || 216 === !t.charCodeAt(1) || 255 === !t.charCodeAt(2) || 224 === !t.charCodeAt(3) || !t.charCodeAt(6) === "J".charCodeAt(0) || !t.charCodeAt(7) === "F".charCodeAt(0) || !t.charCodeAt(8) === "I".charCodeAt(0) || !t.charCodeAt(9) === "F".charCodeAt(0) || 0 === !t.charCodeAt(10))
                        throw new Error("getJpegSize requires a binary string jpeg file");
                    for (var n = 256 * t.charCodeAt(4) + t.charCodeAt(5), r = 4, o = t.length; r < o; ) {
                        if (r += n,
                        255 !== t.charCodeAt(r))
                            throw new Error("getJpegSize could not find the size of the image");
                        if (192 === t.charCodeAt(r + 1) || 193 === t.charCodeAt(r + 1) || 194 === t.charCodeAt(r + 1) || 195 === t.charCodeAt(r + 1) || 196 === t.charCodeAt(r + 1) || 197 === t.charCodeAt(r + 1) || 198 === t.charCodeAt(r + 1) || 199 === t.charCodeAt(r + 1))
                            return e = 256 * t.charCodeAt(r + 5) + t.charCodeAt(r + 6),
                            [256 * t.charCodeAt(r + 7) + t.charCodeAt(r + 8), e, t.charCodeAt(r + 9)];
                        r += 2,
                        n = 256 * t.charCodeAt(r) + t.charCodeAt(r + 1)
                    }
                }(t),
                this.createImageInfo(t, i[0], i[1], 1 == i[3] ? this.color_spaces.DEVICE_GRAY : a, 8, A, e, n)) : (this.isArrayBuffer(t) && (t = new Uint8Array(t)),
                this.isArrayBufferView(t) ? (i = function(t) {
                    if (65496 !== (t[0] << 8 | t[1]))
                        throw new Error("Supplied data is not a JPEG");
                    for (var e, n = t.length, r = (t[4] << 8) + t[5], o = 4; o < n; ) {
                        if (r = ((e = s(t, o += r))[2] << 8) + e[3],
                        (192 === e[1] || 194 === e[1]) && 255 === e[0] && r > 7)
                            return {
                                width: ((e = s(t, o + 5))[2] << 8) + e[3],
                                height: (e[0] << 8) + e[1],
                                numcomponents: e[4]
                            };
                        o += 2
                    }
                    throw new Error("getJpegSizeFromBytes could not find the size of the image")
                }(t),
                t = o || this.arrayBufferToBinaryString(t),
                this.createImageInfo(t, i.width, i.height, 1 == i.numcomponents ? this.color_spaces.DEVICE_GRAY : a, 8, A, e, n)) : null)
            }
            ,
            t.processJPG = function() {
                return this.processJPEG.apply(this, arguments)
            }
        }(o.API),
        function(t) {
            "use strict";
            o.API.autoPrint = function() {
                var t;
                return this.internal.events.subscribe("postPutResources", function() {
                    t = this.internal.newObject(),
                    this.internal.write("<< /S/Named /Type/Action /N/Print >>", "endobj")
                }),
                this.internal.events.subscribe("putCatalog", function() {
                    this.internal.write("/OpenAction " + t + " 0 R")
                }),
                this
            }
        }(),
        function(t) {
            "use strict";
            var e, n, r, o, i = {
                x: void 0,
                y: void 0,
                w: void 0,
                h: void 0,
                ln: void 0
            }, a = 1, s = function(t, e, n, r, o) {
                i = {
                    x: t,
                    y: e,
                    w: n,
                    h: r,
                    ln: o
                }
            }, A = function() {
                return i
            }, l = {
                left: 0,
                top: 0,
                bottom: 0
            };
            t.setHeaderFunction = function(t) {
                o = t
            }
            ,
            t.getTextDimensions = function(t) {
                e = this.internal.getFont().fontName,
                n = this.table_font_size || this.internal.getFontSize(),
                r = this.internal.getFont().fontStyle;
                var o, i;
                return (i = document.createElement("font")).id = "jsPDFCell",
                i.style.fontStyle = r,
                i.style.fontName = e,
                i.style.fontSize = n + "pt",
                i.textContent = t,
                document.body.appendChild(i),
                o = {
                    w: (i.offsetWidth + 1) * (19.049976 / 25.4),
                    h: (i.offsetHeight + 1) * (19.049976 / 25.4)
                },
                document.body.removeChild(i),
                o
            }
            ,
            t.cellAddPage = function() {
                var t = this.margins || l;
                this.addPage(),
                s(t.left, t.top, void 0, void 0),
                a += 1
            }
            ,
            t.cellInitialize = function() {
                i = {
                    x: void 0,
                    y: void 0,
                    w: void 0,
                    h: void 0,
                    ln: void 0
                },
                a = 1
            }
            ,
            t.cell = function(t, e, n, r, o, i, a) {
                var c = A();
                if (void 0 !== c.ln)
                    if (c.ln === i)
                        t = c.x + c.w,
                        e = c.y;
                    else {
                        var u = this.margins || l;
                        c.y + c.h + r + 13 >= this.internal.pageSize.height - u.bottom && (this.cellAddPage(),
                        this.printHeaders && this.tableHeaderRow && this.printHeaderRow(i, !0)),
                        e = A().y + A().h
                    }
                if (void 0 !== o[0])
                    if (this.printingHeaderRow ? this.rect(t, e, n, r, "FD") : this.rect(t, e, n, r),
                    "right" === a) {
                        if (o instanceof Array)
                            for (var f = 0; f < o.length; f++) {
                                var g = o[f]
                                  , d = this.getStringUnitWidth(g) * this.internal.getFontSize();
                                this.text(g, t + n - d - 3, e + this.internal.getLineHeight() * (f + 1))
                            }
                    } else
                        this.text(o, t + 3, e + this.internal.getLineHeight());
                return s(t, e, n, r, i),
                this
            }
            ,
            t.arrayMax = function(t, e) {
                var n, r, o, i = t[0];
                for (n = 0,
                r = t.length; n < r; n += 1)
                    o = t[n],
                    e ? -1 === e(i, o) && (i = o) : o > i && (i = o);
                return i
            }
            ,
            t.table = function(e, n, r, o, s) {
                if (!r)
                    throw "No data for PDF table";
                var A, c, u, f, g, d, h, p, w, C, m = [], B = [], E = {}, I = {}, y = [], Q = [], v = !1, b = !0, x = 12, S = l;
                if (S.width = this.internal.pageSize.width,
                s && (!0 === s.autoSize && (v = !0),
                !1 === s.printHeaders && (b = !1),
                s.fontSize && (x = s.fontSize),
                s.margins && (S = s.margins)),
                this.lnMod = 0,
                i = {
                    x: void 0,
                    y: void 0,
                    w: void 0,
                    h: void 0,
                    ln: void 0
                },
                a = 1,
                this.printHeaders = b,
                this.margins = S,
                this.setFontSize(x),
                this.table_font_size = x,
                void 0 === o || null === o)
                    m = Object.keys(r[0]);
                else if (o[0] && "string" !== typeof o[0]) {
                    for (c = 0,
                    u = o.length; c < u; c += 1)
                        A = o[c],
                        m.push(A.name),
                        B.push(A.prompt),
                        I[A.name] = A.width * (19.049976 / 25.4)
                } else
                    m = o;
                if (v)
                    for (C = function(t) {
                        return t[A]
                    }
                    ,
                    c = 0,
                    u = m.length; c < u; c += 1) {
                        for (E[A = m[c]] = r.map(C),
                        y.push(this.getTextDimensions(B[c] || A).w),
                        h = 0,
                        f = (d = E[A]).length; h < f; h += 1)
                            g = d[h],
                            y.push(this.getTextDimensions(g).w);
                        I[A] = t.arrayMax(y)
                    }
                if (b) {
                    var k = this.calculateLineHeight(m, I, B.length ? B : m);
                    for (c = 0,
                    u = m.length; c < u; c += 1)
                        A = m[c],
                        Q.push([e, n, I[A], k, String(B.length ? B[c] : A)]);
                    this.setTableHeaderRow(Q),
                    this.printHeaderRow(1, !1)
                }
                for (c = 0,
                u = r.length; c < u; c += 1) {
                    for (p = r[c],
                    k = this.calculateLineHeight(m, I, p),
                    h = 0,
                    w = m.length; h < w; h += 1)
                        A = m[h],
                        this.cell(e, n, I[A], k, p[A], c + 2, A.align)
                }
                return this.lastCellPos = i,
                this.table_x = e,
                this.table_y = n,
                this
            }
            ,
            t.calculateLineHeight = function(t, e, n) {
                for (var r, o = 0, i = 0; i < t.length; i++) {
                    n[r = t[i]] = this.splitTextToSize(String(n[r]), e[r] - 3);
                    var a = this.internal.getLineHeight() * n[r].length + 3;
                    a > o && (o = a)
                }
                return o
            }
            ,
            t.setTableHeaderRow = function(t) {
                this.tableHeaderRow = t
            }
            ,
            t.printHeaderRow = function(t, e) {
                if (!this.tableHeaderRow)
                    throw "Property tableHeaderRow does not exist.";
                var n, r, i, A;
                if (this.printingHeaderRow = !0,
                void 0 !== o) {
                    var l = o(this, a);
                    s(l[0], l[1], l[2], l[3], -1)
                }
                this.setFontStyle("bold");
                var c = [];
                for (i = 0,
                A = this.tableHeaderRow.length; i < A; i += 1)
                    this.setFillColor(200, 200, 200),
                    n = this.tableHeaderRow[i],
                    e && (n[1] = this.margins && this.margins.top || 0,
                    c.push(n)),
                    r = [].concat(n),
                    this.cell.apply(this, r.concat(t));
                c.length > 0 && this.setTableHeaderRow(c),
                this.setFontStyle("normal"),
                this.printingHeaderRow = !1
            }
        }(o.API),
        function(t) {
            var e, n, r, o, i, a, s, A, l, c, u, f, g, d, h, p, w, C, m;
            e = function() {
                return function(e) {
                    return t.prototype = e,
                    new t
                }
                ;
                function t() {}
            }(),
            l = function(t) {
                var e, n, r, o, i, a, s;
                for (n = 0,
                r = t.length,
                e = void 0,
                o = !1,
                a = !1; !o && n !== r; )
                    (e = t[n] = t[n].trimLeft()) && (o = !0),
                    n++;
                for (n = r - 1; r && !a && -1 !== n; )
                    (e = t[n] = t[n].trimRight()) && (a = !0),
                    n--;
                for (i = /\s+$/g,
                s = !0,
                n = 0; n !== r; )
                    e = t[n].replace(/\s+/g, " "),
                    s && (e = e.trimLeft()),
                    e && (s = i.test(e)),
                    t[n] = e,
                    n++;
                return t
            }
            ,
            u = function(t) {
                var e, n, o;
                for (e = void 0,
                n = (o = t.split(",")).shift(); !e && n; )
                    e = r[n.trim().toLowerCase()],
                    n = o.shift();
                return e
            }
            ,
            f = function(t) {
                var e;
                return (t = "auto" === t ? "0px" : t).indexOf("em") > -1 && !isNaN(Number(t.replace("em", ""))) && (t = 18.719 * Number(t.replace("em", "")) + "px"),
                t.indexOf("pt") > -1 && !isNaN(Number(t.replace("pt", ""))) && (t = 1.333 * Number(t.replace("pt", "")) + "px"),
                void 0,
                16,
                (e = g[t]) ? e : void 0 !== (e = {
                    "xx-small": 9,
                    "x-small": 11,
                    small: 13,
                    medium: 16,
                    large: 19,
                    "x-large": 23,
                    "xx-large": 28,
                    auto: 0
                }[{
                    css_line_height_string: t
                }]) ? g[t] = e / 16 : (e = parseFloat(t)) ? g[t] = e / 16 : 3 === (e = t.match(/([\d\.]+)(px)/)).length ? g[t] = parseFloat(e[1]) / 16 : g[t] = 1
            }
            ,
            A = function(t) {
                var e, n, r;
                return r = function(e) {
                    var n;
                    return n = function(t) {
                        return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(t, null) : t.currentStyle ? t.currentStyle : t.style
                    }(t),
                    function(t) {
                        return t = t.replace(/-\D/g, function(t) {
                            return t.charAt(1).toUpperCase()
                        }),
                        n[t]
                    }
                }(),
                n = void 0,
                (e = {})["font-family"] = u(r("font-family")) || "times",
                e["font-style"] = o[r("font-style")] || "normal",
                e["text-align"] = TextAlignMap[r("text-align")] || "left",
                "bold" === (n = i[r("font-weight")] || "normal") && ("normal" === e["font-style"] ? e["font-style"] = n : e["font-style"] = n + e["font-style"]),
                e["font-size"] = f(r("font-size")) || 1,
                e["line-height"] = f(r("line-height")) || 1,
                e.display = "inline" === r("display") ? "inline" : "block",
                n = "block" === e.display,
                e["margin-top"] = n && f(r("margin-top")) || 0,
                e["margin-bottom"] = n && f(r("margin-bottom")) || 0,
                e["padding-top"] = n && f(r("padding-top")) || 0,
                e["padding-bottom"] = n && f(r("padding-bottom")) || 0,
                e["margin-left"] = n && f(r("margin-left")) || 0,
                e["margin-right"] = n && f(r("margin-right")) || 0,
                e["padding-left"] = n && f(r("padding-left")) || 0,
                e["padding-right"] = n && f(r("padding-right")) || 0,
                e.float = a[r("cssFloat")] || "none",
                e.clear = s[r("clear")] || "none",
                e
            }
            ,
            d = function(t, e, n) {
                var r, o, i, a;
                if (i = !1,
                o = void 0,
                a = void 0,
                void 0,
                r = n["#" + t.id])
                    if ("function" === typeof r)
                        i = r(t, e);
                    else
                        for (o = 0,
                        a = r.length; !i && o !== a; )
                            i = r[o](t, e),
                            o++;
                if (r = n[t.nodeName],
                !i && r)
                    if ("function" === typeof r)
                        i = r(t, e);
                    else
                        for (o = 0,
                        a = r.length; !i && o !== a; )
                            i = r[o](t, e),
                            o++;
                return i
            }
            ,
            m = function(t, e) {
                var n, r, o, i, a, s, A, l, c;
                for (n = [],
                r = [],
                o = 0,
                c = t.rows[0].cells.length,
                A = t.clientWidth; o < c; )
                    l = t.rows[0].cells[o],
                    r[o] = {
                        name: l.textContent.toLowerCase().replace(/\s+/g, ""),
                        prompt: l.textContent.replace(/\r?\n/g, ""),
                        width: l.clientWidth / A * e.pdf.internal.pageSize.width
                    },
                    o++;
                for (o = 1; o < t.rows.length; ) {
                    for (s = t.rows[o],
                    a = {},
                    i = 0; i < s.cells.length; )
                        a[r[i].name] = s.cells[i].textContent.replace(/\r?\n/g, ""),
                        i++;
                    n.push(a),
                    o++
                }
                return {
                    rows: n,
                    headers: r
                }
            }
            ;
            var B = {
                SCRIPT: 1,
                STYLE: 1,
                NOSCRIPT: 1,
                OBJECT: 1,
                EMBED: 1,
                SELECT: 1
            }
              , E = 1;
            n = function(t, e, r) {
                var o, i, a, s, l, c, u, f;
                for (i = t.childNodes,
                o = void 0,
                (l = "block" === (a = A(t)).display) && (e.setBlockBoundary(),
                e.setBlockStyle(a)),
                19.049976 / 25.4,
                s = 0,
                c = i.length; s < c; ) {
                    if ("object" === typeof (o = i[s])) {
                        if (e.executeWatchFunctions(o),
                        1 === o.nodeType && "HEADER" === o.nodeName) {
                            var g = o
                              , p = e.pdf.margins_doc.top;
                            e.pdf.internal.events.subscribe("addPage", function(t) {
                                e.y = p,
                                n(g, e, r),
                                e.pdf.margins_doc.top = e.y + 10,
                                e.y += 10
                            }, !1)
                        }
                        if (8 === o.nodeType && "#comment" === o.nodeName)
                            ~o.textContent.indexOf("ADD_PAGE") && (e.pdf.addPage(),
                            e.y = e.pdf.margins_doc.top);
                        else if (1 !== o.nodeType || B[o.nodeName])
                            if (3 === o.nodeType) {
                                var w = o.nodeValue;
                                if (o.nodeValue && "LI" === o.parentNode.nodeName)
                                    if ("OL" === o.parentNode.parentNode.nodeName)
                                        w = E++ + ". " + w;
                                    else {
                                        var C = 16 * a["font-size"]
                                          , I = 2;
                                        C > 20 && (I = 3),
                                        f = function(t, e) {
                                            this.pdf.circle(t, e, I, "FD")
                                        }
                                    }
                                e.addText(w, a)
                            } else
                                "string" === typeof o && e.addText(o, a);
                        else {
                            var y;
                            if ("IMG" === o.nodeName) {
                                var Q = o.getAttribute("src");
                                y = h[e.pdf.sHashCode(Q) || Q]
                            }
                            if (y) {
                                e.pdf.internal.pageSize.height - e.pdf.margins_doc.bottom < e.y + o.height && e.y > e.pdf.margins_doc.top && (e.pdf.addPage(),
                                e.y = e.pdf.margins_doc.top,
                                e.executeWatchFunctions(o));
                                var v = A(o)
                                  , b = e.x
                                  , x = 12 / e.pdf.internal.scaleFactor
                                  , S = (v["margin-left"] + v["padding-left"]) * x
                                  , k = (v["margin-right"] + v["padding-right"]) * x
                                  , q = (v["margin-top"] + v["padding-top"]) * x
                                  , T = (v["margin-bottom"] + v["padding-bottom"]) * x;
                                void 0 !== v.float && "right" === v.float ? b += e.settings.width - o.width - k : b += S,
                                e.pdf.addImage(y, b, e.y + q, o.width, o.height),
                                y = void 0,
                                "right" === v.float || "left" === v.float ? (e.watchFunctions.push(function(t, n, r, o) {
                                    return e.y >= n ? (e.x += t,
                                    e.settings.width += r,
                                    !0) : !!(o && 1 === o.nodeType && !B[o.nodeName] && e.x + o.width > e.pdf.margins_doc.left + e.pdf.margins_doc.width) && (e.x += t,
                                    e.y = n,
                                    e.settings.width += r,
                                    !0)
                                }
                                .bind(this, "left" === v.float ? -o.width - S - k : 0, e.y + o.height + q + T, o.width)),
                                e.watchFunctions.push(function(t, n, r) {
                                    return !(e.y < t && n === e.pdf.internal.getNumberOfPages()) || 1 === r.nodeType && "both" === A(r).clear && (e.y = t,
                                    !0)
                                }
                                .bind(this, e.y + o.height, e.pdf.internal.getNumberOfPages())),
                                e.settings.width -= o.width + S + k,
                                "left" === v.float && (e.x += o.width + S + k)) : e.y += o.height + T
                            } else if ("TABLE" === o.nodeName)
                                u = m(o, e),
                                e.y += 10,
                                e.pdf.table(e.x, e.y, u.rows, u.headers, {
                                    autoSize: !1,
                                    printHeaders: !0,
                                    margins: e.pdf.margins_doc
                                }),
                                e.y = e.pdf.lastCellPos.y + e.pdf.lastCellPos.h + 20;
                            else if ("OL" === o.nodeName || "UL" === o.nodeName)
                                E = 1,
                                d(o, e, r) || n(o, e, r),
                                e.y += 10;
                            else if ("LI" === o.nodeName) {
                                var O = e.x;
                                e.x += "UL" === o.parentNode.nodeName ? 22 : 10,
                                e.y += 3,
                                d(o, e, r) || n(o, e, r),
                                e.x = O
                            } else
                                "BR" === o.nodeName ? e.y += a["font-size"] * e.pdf.internal.scaleFactor : d(o, e, r) || n(o, e, r)
                        }
                    }
                    s++
                }
                if (l)
                    return e.setBlockBoundary(f)
            }
            ,
            h = {},
            p = function(t, e, n, r) {
                var o, i = t.getElementsByTagName("img"), a = i.length, s = 0;
                function A() {
                    e.pdf.internal.events.publish("imagesLoaded"),
                    r(o)
                }
                function l(t, n, r) {
                    if (t) {
                        var i = new Image;
                        o = ++s,
                        i.crossOrigin = "",
                        i.onerror = i.onload = function() {
                            if (i.complete && (0 === i.src.indexOf("data:image/") && (i.width = n || i.width || 0,
                            i.height = r || i.height || 0),
                            i.width + i.height)) {
                                var o = e.pdf.sHashCode(t) || t;
                                h[o] = h[o] || i
                            }
                            --s || A()
                        }
                        ,
                        i.src = t
                    }
                }
                for (; a--; )
                    l(i[a].getAttribute("src"), i[a].width, i[a].height);
                return s || A()
            }
            ,
            w = function(t, e, r) {
                var o = t.getElementsByTagName("footer");
                if (o.length > 0) {
                    o = o[0];
                    var i = e.pdf.internal.write
                      , a = e.y;
                    e.pdf.internal.write = function() {}
                    ,
                    n(o, e, r);
                    var s = Math.ceil(e.y - a) + 5;
                    e.y = a,
                    e.pdf.internal.write = i,
                    e.pdf.margins_doc.bottom += s;
                    for (var A = function(t) {
                        var i = void 0 !== t ? t.pageNumber : 1
                          , a = e.y;
                        e.y = e.pdf.internal.pageSize.height - e.pdf.margins_doc.bottom,
                        e.pdf.margins_doc.bottom -= s;
                        for (var A = o.getElementsByTagName("span"), l = 0; l < A.length; ++l)
                            (" " + A[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") > -1 && (A[l].innerHTML = i),
                            (" " + A[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 && (A[l].innerHTML = "###jsPDFVarTotalPages###");
                        n(o, e, r),
                        e.pdf.margins_doc.bottom += s,
                        e.y = a
                    }, l = o.getElementsByTagName("span"), c = 0; c < l.length; ++c)
                        (" " + l[c].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 && e.pdf.internal.events.subscribe("htmlRenderingFinished", e.pdf.putTotalPages.bind(e.pdf, "###jsPDFVarTotalPages###"), !0);
                    e.pdf.internal.events.subscribe("addPage", A, !1),
                    A(),
                    B.FOOTER = 1
                }
            }
            ,
            C = function(t, e, r, o, i, a) {
                if (!e)
                    return !1;
                "string" === typeof e || e.parentNode || (e = "" + e.innerHTML),
                "string" === typeof e && (e = function(t) {
                    var e, n, r;
                    return r = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0),
                    "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",
                    (n = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",
                    n.innerHTML = '<iframe style="height:1px;width:1px" name="' + r + '" />',
                    document.body.appendChild(n),
                    (e = window.frames[r]).document.body.innerHTML = t,
                    e.document.body
                }(e.replace(/<\/?script[^>]*?>/gi, "")));
                var s, A = new c(t,r,o,i);
                return p.call(this, e, A, i.elementHandlers, function(t) {
                    w(e, A, i.elementHandlers),
                    n(e, A, i.elementHandlers),
                    A.pdf.internal.events.publish("htmlRenderingFinished"),
                    s = A.dispose(),
                    "function" === typeof a ? a(s) : t && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")
                }),
                s || {
                    x: A.x,
                    y: A.y
                }
            }
            ,
            (c = function(t, e, n, r) {
                return this.pdf = t,
                this.x = e,
                this.y = n,
                this.settings = r,
                this.watchFunctions = [],
                this.init(),
                this
            }
            ).prototype.init = function() {
                return this.paragraph = {
                    text: [],
                    style: []
                },
                this.pdf.internal.write("q")
            }
            ,
            c.prototype.dispose = function() {
                return this.pdf.internal.write("Q"),
                {
                    x: this.x,
                    y: this.y,
                    ready: !0
                }
            }
            ,
            c.prototype.executeWatchFunctions = function(t) {
                var e = !1
                  , n = [];
                if (this.watchFunctions.length > 0) {
                    for (var r = 0; r < this.watchFunctions.length; ++r)
                        !0 === this.watchFunctions[r](t) ? e = !0 : n.push(this.watchFunctions[r]);
                    this.watchFunctions = n
                }
                return e
            }
            ,
            c.prototype.splitFragmentsIntoLines = function(t, n) {
                var r, o, i, a, s, A, l, c, u, f, g, d, h, p;
                for (12,
                f = this.pdf.internal.scaleFactor,
                a = {},
                o = void 0,
                u = void 0,
                i = void 0,
                s = void 0,
                p = void 0,
                c = void 0,
                l = void 0,
                A = void 0,
                d = [g = []],
                r = 0,
                h = this.settings.width; t.length; )
                    if (s = t.shift(),
                    p = n.shift(),
                    s)
                        if ((i = a[(o = p["font-family"]) + (u = p["font-style"])]) || (i = this.pdf.internal.getFont(o, u).metadata.Unicode,
                        a[o + u] = i),
                        c = {
                            widths: i.widths,
                            kerning: i.kerning,
                            fontSize: 12 * p["font-size"],
                            textIndent: r
                        },
                        r + (l = this.pdf.getStringUnitWidth(s, c) * c.fontSize / f) > h) {
                            for (A = this.pdf.splitTextToSize(s, h, c),
                            g.push([A.shift(), p]); A.length; )
                                g = [[A.shift(), p]],
                                d.push(g);
                            r = this.pdf.getStringUnitWidth(g[0][0], c) * c.fontSize / f
                        } else
                            g.push([s, p]),
                            r += l;
                if (void 0 !== p["text-align"] && ("center" === p["text-align"] || "right" === p["text-align"] || "justify" === p["text-align"]))
                    for (var w = 0; w < d.length; ++w) {
                        var C = this.pdf.getStringUnitWidth(d[w][0][0], c) * c.fontSize / f;
                        w > 0 && (d[w][0][1] = e(d[w][0][1]));
                        var m = h - C;
                        if ("right" === p["text-align"])
                            d[w][0][1]["margin-left"] = m;
                        else if ("center" === p["text-align"])
                            d[w][0][1]["margin-left"] = m / 2;
                        else if ("justify" === p["text-align"]) {
                            var B = d[w][0][0].split(" ").length - 1;
                            d[w][0][1]["word-spacing"] = m / B,
                            w === d.length - 1 && (d[w][0][1]["word-spacing"] = 0)
                        }
                    }
                return d
            }
            ,
            c.prototype.RenderTextFragment = function(t, e) {
                var n, r;
                r = 0,
                this.pdf.internal.pageSize.height - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"),
                this.pdf.addPage(),
                this.y = this.pdf.margins_doc.top,
                this.pdf.internal.write("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"),
                r = Math.max(r, e["line-height"], e["font-size"]),
                this.pdf.internal.write(0, (-12 * r).toFixed(2), "Td")),
                n = this.pdf.internal.getFont(e["font-family"], e["font-style"]),
                void 0 !== e["word-spacing"] && e["word-spacing"] > 0 && this.pdf.internal.write(e["word-spacing"].toFixed(2), "Tw"),
                this.pdf.internal.write("/" + n.id, (12 * e["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t) + ") Tj"),
                void 0 !== e["word-spacing"] && this.pdf.internal.write(0, "Tw")
            }
            ,
            c.prototype.renderParagraph = function(t) {
                var e, n, r, o, i, a, s, A, c, u, f, g, d, h;
                if (r = l(this.paragraph.text),
                d = this.paragraph.style,
                e = this.paragraph.blockstyle,
                g = this.paragraph.blockstyle || {},
                this.paragraph = {
                    text: [],
                    style: [],
                    blockstyle: {},
                    priorblockstyle: e
                },
                r.join("").trim()) {
                    s = this.splitFragmentsIntoLines(r, d),
                    a = void 0,
                    A = void 0,
                    12,
                    n = 12 / this.pdf.internal.scaleFactor,
                    f = (Math.max((e["margin-top"] || 0) - (g["margin-bottom"] || 0), 0) + (e["padding-top"] || 0)) * n,
                    u = ((e["margin-bottom"] || 0) + (e["padding-bottom"] || 0)) * n,
                    c = this.pdf.internal.write,
                    o = void 0,
                    i = void 0,
                    this.y += f,
                    c("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
                    for (var p = 0; s.length; ) {
                        for (A = 0,
                        o = 0,
                        i = (a = s.shift()).length; o !== i; )
                            a[o][0].trim() && (A = Math.max(A, a[o][1]["line-height"], a[o][1]["font-size"]),
                            h = 7 * a[o][1]["font-size"]),
                            o++;
                        var w = 0;
                        for (void 0 !== a[0][1]["margin-left"] && a[0][1]["margin-left"] > 0 && (wantedIndent = this.pdf.internal.getCoordinateString(a[0][1]["margin-left"]),
                        w = wantedIndent - p,
                        p = wantedIndent),
                        c(w, (-12 * A).toFixed(2), "Td"),
                        o = 0,
                        i = a.length; o !== i; )
                            a[o][0] && this.RenderTextFragment(a[o][0], a[o][1]),
                            o++;
                        if (this.y += A * n,
                        this.executeWatchFunctions(a[0][1]) && s.length > 0) {
                            var C = []
                              , m = [];
                            s.forEach(function(t) {
                                for (var e = 0, n = t.length; e !== n; )
                                    t[e][0] && (C.push(t[e][0] + " "),
                                    m.push(t[e][1])),
                                    ++e
                            }),
                            s = this.splitFragmentsIntoLines(l(C), m),
                            c("ET", "Q"),
                            c("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td")
                        }
                    }
                    return t && "function" === typeof t && t.call(this, this.x - 9, this.y - h / 2),
                    c("ET", "Q"),
                    this.y += u
                }
            }
            ,
            c.prototype.setBlockBoundary = function(t) {
                return this.renderParagraph(t)
            }
            ,
            c.prototype.setBlockStyle = function(t) {
                return this.paragraph.blockstyle = t
            }
            ,
            c.prototype.addText = function(t, e) {
                return this.paragraph.text.push(t),
                this.paragraph.style.push(e)
            }
            ,
            r = {
                helvetica: "helvetica",
                "sans-serif": "helvetica",
                "times new roman": "times",
                serif: "times",
                times: "times",
                monospace: "courier",
                courier: "courier"
            },
            i = {
                100: "normal",
                200: "normal",
                300: "normal",
                400: "normal",
                500: "bold",
                600: "bold",
                700: "bold",
                800: "bold",
                900: "bold",
                normal: "normal",
                bold: "bold",
                bolder: "bold",
                lighter: "normal"
            },
            o = {
                normal: "normal",
                italic: "italic",
                oblique: "italic"
            },
            TextAlignMap = {
                left: "left",
                right: "right",
                center: "center",
                justify: "justify"
            },
            a = {
                none: "none",
                right: "right",
                left: "left"
            },
            s = {
                none: "none",
                both: "both"
            },
            g = {
                normal: 1
            },
            t.fromHTML = function(t, e, n, r, o, i) {
                "use strict";
                return this.margins_doc = i || {
                    top: 0,
                    bottom: 0
                },
                r || (r = {}),
                r.elementHandlers || (r.elementHandlers = {}),
                C(this, t, isNaN(e) ? 4 : e, isNaN(n) ? 4 : n, r, o)
            }
        }(o.API),
        function(t) {
            "use strict";
            var e, n, r;
            o.API.addJS = function(t) {
                return r = t,
                this.internal.events.subscribe("postPutResources", function(t) {
                    e = this.internal.newObject(),
                    this.internal.write("<< /Names [(EmbeddedJS) " + (e + 1) + " 0 R] >>", "endobj"),
                    n = this.internal.newObject(),
                    this.internal.write("<< /S /JavaScript /JS (", r, ") >>", "endobj")
                }),
                this.internal.events.subscribe("putCatalog", function() {
                    void 0 !== e && void 0 !== n && this.internal.write("/Names <</JavaScript " + e + " 0 R>>")
                }),
                this
            }
        }(),
        function(t) {
            "use strict";
            var e = function() {
                var t = "function" === typeof i;
                if (!t)
                    throw new Error("requires deflate.js for compression");
                return t
            }
              , n = function(e, n, s, A) {
                var g = 5
                  , d = c;
                switch (A) {
                case t.image_compression.FAST:
                    g = 3,
                    d = l;
                    break;
                case t.image_compression.MEDIUM:
                    g = 6,
                    d = u;
                    break;
                case t.image_compression.SLOW:
                    g = 9,
                    d = f
                }
                e = a(e, n, s, d);
                var h = new Uint8Array(r(g))
                  , p = o(e)
                  , w = new i(g)
                  , C = w.append(e)
                  , m = w.flush()
                  , B = h.length + C.length + m.length
                  , E = new Uint8Array(B + 4);
                return E.set(h),
                E.set(C, h.length),
                E.set(m, h.length + C.length),
                E[B++] = p >>> 24 & 255,
                E[B++] = p >>> 16 & 255,
                E[B++] = p >>> 8 & 255,
                E[B++] = 255 & p,
                t.arrayBufferToBinaryString(E)
            }
              , r = function(t, e) {
                var n = Math.LOG2E * Math.log(32768) - 8 << 4 | 8
                  , r = n << 8;
                return r |= Math.min(3, (e - 1 & 255) >> 1) << 6,
                r |= 0,
                [n, 255 & (r += 31 - r % 31)]
            }
              , o = function(t, e) {
                for (var n, r = 1, o = 0, i = t.length, a = 0; i > 0; ) {
                    i -= n = i > e ? e : i;
                    do {
                        o += r += t[a++]
                    } while (--n);r %= 65521,
                    o %= 65521
                }
                return (o << 16 | r) >>> 0
            }
              , a = function(t, e, n, r) {
                for (var o, i, a, s = t.length / e, A = new Uint8Array(t.length + s), l = d(), c = 0; c < s; c++) {
                    if (a = c * e,
                    o = t.subarray(a, a + e),
                    r)
                        A.set(r(o, n, i), a + c);
                    else {
                        for (var u = 0, f = l.length, g = []; u < f; u++)
                            g[u] = l[u](o, n, i);
                        var p = h(g.concat());
                        A.set(g[p], a + c)
                    }
                    i = o
                }
                return A
            }
              , A = function(t, e, n) {
                var r = Array.apply([], t);
                return r.unshift(0),
                r
            }
              , l = function(t, e, n) {
                var r, o = [], i = 0, a = t.length;
                for (o[0] = 1; i < a; i++)
                    r = t[i - e] || 0,
                    o[i + 1] = t[i] - r + 256 & 255;
                return o
            }
              , c = function(t, e, n) {
                var r, o = [], i = 0, a = t.length;
                for (o[0] = 2; i < a; i++)
                    r = n && n[i] || 0,
                    o[i + 1] = t[i] - r + 256 & 255;
                return o
            }
              , u = function(t, e, n) {
                var r, o, i = [], a = 0, s = t.length;
                for (i[0] = 3; a < s; a++)
                    r = t[a - e] || 0,
                    o = n && n[a] || 0,
                    i[a + 1] = t[a] + 256 - (r + o >>> 1) & 255;
                return i
            }
              , f = function(t, e, n) {
                var r, o, i, a, s = [], A = 0, l = t.length;
                for (s[0] = 4; A < l; A++)
                    r = t[A - e] || 0,
                    o = n && n[A] || 0,
                    i = n && n[A - e] || 0,
                    a = g(r, o, i),
                    s[A + 1] = t[A] - a + 256 & 255;
                return s
            }
              , g = function(t, e, n) {
                var r = t + e - n
                  , o = Math.abs(r - t)
                  , i = Math.abs(r - e)
                  , a = Math.abs(r - n);
                return o <= i && o <= a ? t : i <= a ? e : n
            }
              , d = function() {
                return [A, l, c, u, f]
            }
              , h = function(t) {
                for (var e, n, r, o = 0, i = t.length; o < i; )
                    ((e = p(t[o].slice(1))) < n || !n) && (n = e,
                    r = o),
                    o++;
                return r
            }
              , p = function(t) {
                for (var e = 0, n = t.length, r = 0; e < n; )
                    r += Math.abs(t[e++]);
                return r
            };
            t.processPNG = function(r, o, i, a, A) {
                var l, c, u, f, g, d, h = this.color_spaces.DEVICE_RGB, p = this.decode.FLATE_DECODE, w = 8;
                if (this.isArrayBuffer(r) && (r = new Uint8Array(r)),
                this.isArrayBufferView(r)) {
                    if ("function" !== typeof PNG || "function" !== typeof s)
                        throw new Error("PNG support requires png.js and zlib.js");
                    if (r = (l = new PNG(r)).imgData,
                    w = l.bits,
                    h = l.colorSpace,
                    f = l.colors,
                    -1 !== [4, 6].indexOf(l.colorType)) {
                        if (8 === l.bits)
                            for (var C, m = (q = new (0,
                            window["Uint" + l.pixelBitlength + "Array"])(l.decodePixels().buffer)).length, B = new Uint8Array(m * l.colors), E = new Uint8Array(m), I = l.pixelBitlength - l.bits, y = 0, Q = 0; y < m; y++) {
                                for (v = q[y],
                                C = 0; C < I; )
                                    B[Q++] = v >>> C & 255,
                                    C += l.bits;
                                E[y] = v >>> C & 255
                            }
                        if (16 === l.bits) {
                            m = (q = new Uint32Array(l.decodePixels().buffer)).length,
                            B = new Uint8Array(m * (32 / l.pixelBitlength) * l.colors),
                            E = new Uint8Array(m * (32 / l.pixelBitlength));
                            for (var v, b = l.colors > 1, x = (y = 0,
                            Q = 0,
                            0); y < m; )
                                v = q[y++],
                                B[Q++] = v >>> 0 & 255,
                                b && (B[Q++] = v >>> 16 & 255,
                                v = q[y++],
                                B[Q++] = v >>> 0 & 255),
                                E[x++] = v >>> 16 & 255;
                            w = 8
                        }
                        a !== t.image_compression.NONE && e() ? (r = n(B, l.width * l.colors, l.colors, a),
                        d = n(E, l.width, 1, a)) : (r = B,
                        d = E,
                        p = null)
                    }
                    if (3 === l.colorType && (h = this.color_spaces.INDEXED,
                    g = l.palette,
                    l.transparency.indexed)) {
                        var S = l.transparency.indexed
                          , k = 0;
                        for (y = 0,
                        m = S.length; y < m; ++y)
                            k += S[y];
                        if ((k /= 255) === m - 1 && -1 !== S.indexOf(0))
                            u = [S.indexOf(0)];
                        else if (k !== m) {
                            var q = l.decodePixels();
                            for (E = new Uint8Array(q.length),
                            y = 0,
                            m = q.length; y < m; y++)
                                E[y] = S[q[y]];
                            d = n(E, l.width, 1)
                        }
                    }
                    return c = p === this.decode.FLATE_DECODE ? "/Predictor 15 /Colors " + f + " /BitsPerComponent " + w + " /Columns " + l.width : "/Colors " + f + " /BitsPerComponent " + w + " /Columns " + l.width,
                    (this.isArrayBuffer(r) || this.isArrayBufferView(r)) && (r = this.arrayBufferToBinaryString(r)),
                    (d && this.isArrayBuffer(d) || this.isArrayBufferView(d)) && (d = this.arrayBufferToBinaryString(d)),
                    this.createImageInfo(r, l.width, l.height, h, w, p, o, i, c, u, g, d)
                }
                throw new Error("Unsupported PNG image data, try using JPEG instead.")
            }
        }(o.API),
        function(t) {
            "use strict";
            o.API.addSVG = function(t, e, n, r, o) {
                if (void 0 === e || void 0 === n)
                    throw new Error("addSVG needs values for 'x' and 'y'");
                function i(t) {
                    for (var e = parseFloat(t[1]), n = parseFloat(t[2]), r = [], o = 3, i = t.length; o < i; )
                        "c" === t[o] ? (r.push([parseFloat(t[o + 1]), parseFloat(t[o + 2]), parseFloat(t[o + 3]), parseFloat(t[o + 4]), parseFloat(t[o + 5]), parseFloat(t[o + 6])]),
                        o += 7) : "l" === t[o] ? (r.push([parseFloat(t[o + 1]), parseFloat(t[o + 2])]),
                        o += 3) : o += 1;
                    return [e, n, r]
                }
                var a = function(t, e) {
                    var n = (e.contentWindow || e.contentDocument).document;
                    return n.write(t),
                    n.close(),
                    n.getElementsByTagName("svg")[0]
                }(t, function(t) {
                    var e = t.createElement("iframe");
                    return function(t, e) {
                        var n = e.createElement("style");
                        n.type = "text/css",
                        n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(e.createTextNode(t)),
                        e.getElementsByTagName("head")[0].appendChild(n)
                    }(".jsPDF_sillysvg_iframe {display:none;position:absolute;}", t),
                    e.name = "childframe",
                    e.setAttribute("width", 0),
                    e.setAttribute("height", 0),
                    e.setAttribute("frameborder", "0"),
                    e.setAttribute("scrolling", "no"),
                    e.setAttribute("seamless", "seamless"),
                    e.setAttribute("class", "jsPDF_sillysvg_iframe"),
                    t.body.appendChild(e),
                    e
                }(document))
                  , s = [1, 1]
                  , A = parseFloat(a.getAttribute("width"))
                  , l = parseFloat(a.getAttribute("height"));
                A && l && (r && o ? s = [r / A, o / l] : r ? s = [r / A, r / A] : o && (s = [o / l, o / l]));
                var c, u, f, g, d = a.childNodes;
                for (c = 0,
                u = d.length; c < u; c++)
                    (f = d[c]).tagName && "PATH" === f.tagName.toUpperCase() && ((g = i(f.getAttribute("d").split(" ")))[0] = g[0] * s[0] + e,
                    g[1] = g[1] * s[1] + n,
                    this.lines.call(this, g[2], g[0], g[1], s));
                return this
            }
        }(),
        function(t) {
            "use strict";
            var e = t.getCharWidthsArray = function(t, e) {
                e || (e = {});
                var n, r, o, i = e.widths ? e.widths : this.internal.getFont().metadata.Unicode.widths, a = i.fof ? i.fof : 1, s = e.kerning ? e.kerning : this.internal.getFont().metadata.Unicode.kerning, A = s.fof ? s.fof : 1, l = 0, c = i[0] || a, u = [];
                for (n = 0,
                r = t.length; n < r; n++)
                    o = t.charCodeAt(n),
                    u.push((i[o] || c) / a + (s[o] && s[o][l] || 0) / A),
                    l = o;
                return u
            }
              , n = function(t) {
                for (var e = t.length, n = 0; e; )
                    n += t[--e];
                return n
            }
              , r = t.getStringUnitWidth = function(t, r) {
                return n(e.call(this, t, r))
            }
              , o = function(t, e, n, r) {
                for (var o = [], i = 0, a = t.length, s = 0; i !== a && s + e[i] < n; )
                    s += e[i],
                    i++;
                o.push(t.slice(0, i));
                var A = i;
                for (s = 0; i !== a; )
                    s + e[i] > r && (o.push(t.slice(A, i)),
                    s = 0,
                    A = i),
                    s += e[i],
                    i++;
                return A !== i && o.push(t.slice(A, i)),
                o
            }
              , i = function(t, i, a) {
                a || (a = {});
                var s, A, l, c, u, f, g = [], d = [g], h = a.textIndent || 0, p = 0, w = 0, C = t.split(" "), m = e(" ", a)[0];
                if (f = -1 === a.lineIndent ? C[0].length + 2 : a.lineIndent || 0) {
                    var B = Array(f).join(" ")
                      , E = [];
                    C.map(function(t) {
                        (t = t.split(/\s*\n/)).length > 1 ? E = E.concat(t.map(function(t, e) {
                            return (e && t.length ? "\n" : "") + t
                        })) : E.push(t[0])
                    }),
                    C = E,
                    f = r(B, a)
                }
                for (l = 0,
                c = C.length; l < c; l++) {
                    var I = 0;
                    if (s = C[l],
                    f && "\n" == s[0] && (s = s.substr(1),
                    I = 1),
                    A = e(s, a),
                    h + p + (w = n(A)) > i || I) {
                        if (w > i) {
                            for (u = o(s, A, i - (h + p), i),
                            g.push(u.shift()),
                            g = [u.pop()]; u.length; )
                                d.push([u.shift()]);
                            w = n(A.slice(s.length - g[0].length))
                        } else
                            g = [s];
                        d.push(g),
                        h = w + f,
                        p = m
                    } else
                        g.push(s),
                        h += p + w,
                        p = m
                }
                if (f)
                    var y = function(t, e) {
                        return (e ? B : "") + t.join(" ")
                    };
                else
                    y = function(t) {
                        return t.join(" ")
                    }
                    ;
                return d.map(y)
            };
            t.splitTextToSize = function(t, e, n) {
                n || (n = {});
                var r, o = n.fontSize || this.internal.getFontSize(), a = function(t) {
                    var e = {
                        0: 1
                    }
                      , n = {};
                    if (t.widths && t.kerning)
                        return {
                            widths: t.widths,
                            kerning: t.kerning
                        };
                    var r = this.internal.getFont(t.fontName, t.fontStyle);
                    return r.metadata.Unicode ? {
                        widths: r.metadata.Unicode.widths || e,
                        kerning: r.metadata.Unicode.kerning || n
                    } : {
                        widths: e,
                        kerning: n
                    }
                }
                .call(this, n);
                r = Array.isArray(t) ? t : t.split(/\r?\n/);
                var s = 1 * this.internal.scaleFactor * e / o;
                a.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / o : 0,
                a.lineIndent = n.lineIndent;
                var A, l, c = [];
                for (A = 0,
                l = r.length; A < l; A++)
                    c = c.concat(i(r[A], s, a));
                return c
            }
        }(o.API),
        function(t) {
            "use strict";
            var e = function(t) {
                for (var e = {}, n = 0; n < "klmnopqrstuvwxyz".length; n++)
                    e["klmnopqrstuvwxyz"[n]] = "0123456789abcdef"[n];
                var r, o, i, a, s = {}, A = 1, l = s, c = [], u = "", f = "", g = t.length - 1;
                for (n = 1; n != g; )
                    a = t[n],
                    n += 1,
                    "'" == a ? r ? (i = r.join(""),
                    r = void 0) : r = [] : r ? r.push(a) : "{" == a ? (c.push([l, i]),
                    l = {},
                    i = void 0) : "}" == a ? ((o = c.pop())[0][o[1]] = l,
                    i = void 0,
                    l = o[0]) : "-" == a ? A = -1 : void 0 === i ? e.hasOwnProperty(a) ? (u += e[a],
                    i = parseInt(u, 16) * A,
                    A = 1,
                    u = "") : u += a : e.hasOwnProperty(a) ? (f += e[a],
                    l[i] = parseInt(f, 16) * A,
                    A = 1,
                    i = void 0,
                    f = "") : f += a;
                return s
            }
              , n = {
                codePages: ["WinAnsiEncoding"],
                WinAnsiEncoding: e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
            }
              , r = {
                Unicode: {
                    Courier: n,
                    "Courier-Bold": n,
                    "Courier-BoldOblique": n,
                    "Courier-Oblique": n,
                    Helvetica: n,
                    "Helvetica-Bold": n,
                    "Helvetica-BoldOblique": n,
                    "Helvetica-Oblique": n,
                    "Times-Roman": n,
                    "Times-Bold": n,
                    "Times-BoldItalic": n,
                    "Times-Italic": n
                }
            }
              , o = {
                Unicode: {
                    "Courier-Oblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-BoldItalic": e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                    "Helvetica-Bold": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                    Courier: e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Courier-BoldOblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-Bold": e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                    Helvetica: e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                    "Helvetica-BoldOblique": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                    "Courier-Bold": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-Italic": e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                    "Times-Roman": e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                    "Helvetica-Oblique": e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
                }
            };
            t.events.push(["addFonts", function(t) {
                var e, n, i, a, s;
                for (n in t.fonts)
                    t.fonts.hasOwnProperty(n) && (e = t.fonts[n],
                    (i = o.Unicode[e.PostScriptName]) && ((a = e.metadata.Unicode ? e.metadata.Unicode : e.metadata.Unicode = {}).widths = i.widths,
                    a.kerning = i.kerning),
                    (s = r.Unicode[e.PostScriptName]) && ((a = e.metadata.Unicode ? e.metadata.Unicode : e.metadata.Unicode = {}).encoding = s,
                    s.codePages && s.codePages.length && (e.encoding = s.codePages[0])))
            }
            ])
        }(o.API),
        function(t) {
            "use strict";
            o.API.putTotalPages = function(t) {
                for (var e = new RegExp(t,"g"), n = 1; n <= this.internal.getNumberOfPages(); n++)
                    for (var r = 0; r < this.internal.pages[n].length; r++)
                        this.internal.pages[n][r] = this.internal.pages[n][r].replace(e, this.internal.getNumberOfPages());
                return this
            }
        }(),
        function(t) {
            "use strict";
            if (t.URL = t.URL || t.webkitURL,
            t.Blob && t.URL)
                try {
                    return void new Blob
                } catch (t) {}
            var e = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || function(t) {
                var e = function(t) {
                    return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]
                }
                  , n = function() {
                    this.data = []
                }
                  , r = function(t, e, n) {
                    this.data = t,
                    this.size = t.length,
                    this.type = e,
                    this.encoding = n
                }
                  , o = n.prototype
                  , i = r.prototype
                  , a = t.FileReaderSync
                  , s = function(t) {
                    this.code = this[this.name = t]
                }
                  , A = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" ")
                  , l = A.length
                  , c = t.URL || t.webkitURL || t
                  , u = c.createObjectURL
                  , f = c.revokeObjectURL
                  , g = c
                  , d = t.btoa
                  , h = t.atob
                  , p = t.ArrayBuffer
                  , w = t.Uint8Array
                  , C = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
                for (r.fake = i.fake = !0; l--; )
                    s.prototype[A[l]] = l + 1;
                return c.createObjectURL || (g = t.URL = function(t) {
                    var e, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                    return n.href = t,
                    "origin"in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null : (e = t.match(C),
                    n.origin = e && e[1])),
                    n
                }
                ),
                g.createObjectURL = function(t) {
                    var e, n = t.type;
                    return null === n && (n = "application/octet-stream"),
                    t instanceof r ? (e = "data:" + n,
                    "base64" === t.encoding ? e + ";base64," + t.data : "URI" === t.encoding ? e + "," + decodeURIComponent(t.data) : d ? e + ";base64," + d(t.data) : e + "," + encodeURIComponent(t.data)) : u ? u.call(c, t) : void 0
                }
                ,
                g.revokeObjectURL = function(t) {
                    "data:" !== t.substring(0, 5) && f && f.call(c, t)
                }
                ,
                o.append = function(t) {
                    var n = this.data;
                    if (w && (t instanceof p || t instanceof w)) {
                        for (var o = "", i = new w(t), A = 0, l = i.length; A < l; A++)
                            o += String.fromCharCode(i[A]);
                        n.push(o)
                    } else if ("Blob" === e(t) || "File" === e(t)) {
                        if (!a)
                            throw new s("NOT_READABLE_ERR");
                        var c = new a;
                        n.push(c.readAsBinaryString(t))
                    } else
                        t instanceof r ? "base64" === t.encoding && h ? n.push(h(t.data)) : "URI" === t.encoding ? n.push(decodeURIComponent(t.data)) : "raw" === t.encoding && n.push(t.data) : ("string" !== typeof t && (t += ""),
                        n.push(unescape(encodeURIComponent(t))))
                }
                ,
                o.getBlob = function(t) {
                    return arguments.length || (t = null),
                    new r(this.data.join(""),t,"raw")
                }
                ,
                o.toString = function() {
                    return "[object BlobBuilder]"
                }
                ,
                i.slice = function(t, e, n) {
                    var o = arguments.length;
                    return o < 3 && (n = null),
                    new r(this.data.slice(t, o > 1 ? e : this.data.length),n,this.encoding)
                }
                ,
                i.toString = function() {
                    return "[object Blob]"
                }
                ,
                i.close = function() {
                    this.size = 0,
                    delete this.data
                }
                ,
                n
            }(t);
            t.Blob = function(t, n) {
                var r = n && n.type || ""
                  , o = new e;
                if (t)
                    for (var i = 0, a = t.length; i < a; i++)
                        o.append(t[i]);
                return o.getBlob(r)
            }
        }("undefined" !== typeof self && self || "undefined" !== typeof window && window || this.content || this),
        n = o,
        r = function() {
            var t = "function" === typeof ArrayBuffer && "function" === typeof Uint8Array
              , e = null
              , n = function() {
                if (!t)
                    return function() {
                        return !1
                    }
                    ;
                try {
                    var n = require("buffer");
                    "function" === typeof n.Buffer && (e = n.Buffer)
                } catch (t) {}
                return function(t) {
                    return t instanceof ArrayBuffer || null !== e && t instanceof e
                }
            }()
              , r = null !== e ? function(t) {
                return new e(t,"utf8").toString("binary")
            }
            : function(t) {
                return unescape(encodeURIComponent(t))
            }
              , o = function(t, e) {
                for (var n = 65535 & t, r = t >>> 16, o = 0, i = e.length; o < i; o++)
                    r = (r + (n = (n + (255 & e.charCodeAt(o))) % 65521)) % 65521;
                return (r << 16 | n) >>> 0
            }
              , i = function(t, e) {
                for (var n = 65535 & t, r = t >>> 16, o = 0, i = e.length; o < i; o++)
                    r = (r + (n = (n + e[o]) % 65521)) % 65521;
                return (r << 16 | n) >>> 0
            }
              , a = {}
              , s = a.Adler32 = function() {
                var e, a, A, l = function(t) {
                    if (!(this instanceof l))
                        throw new TypeError("Constructor cannot called be as a function.");
                    if (!isFinite(t = null == t ? 1 : +t))
                        throw new Error("First arguments needs to be a finite number.");
                    this.checksum = t >>> 0
                }, c = l.prototype = {};
                return c.constructor = l,
                l.from = ((e = function(t) {
                    if (!(this instanceof l))
                        throw new TypeError("Constructor cannot called be as a function.");
                    if (null == t)
                        throw new Error("First argument needs to be a string.");
                    this.checksum = o(1, t.toString())
                }
                ).prototype = c,
                e),
                l.fromUtf8 = ((a = function(t) {
                    if (!(this instanceof l))
                        throw new TypeError("Constructor cannot called be as a function.");
                    if (null == t)
                        throw new Error("First argument needs to be a string.");
                    var e = r(t.toString());
                    this.checksum = o(1, e)
                }
                ).prototype = c,
                a),
                t && (l.fromBuffer = ((A = function(t) {
                    if (!(this instanceof l))
                        throw new TypeError("Constructor cannot called be as a function.");
                    if (!n(t))
                        throw new Error("First argument needs to be ArrayBuffer.");
                    var e = new Uint8Array(t);
                    return this.checksum = i(1, e)
                }
                ).prototype = c,
                A)),
                c.update = function(t) {
                    if (null == t)
                        throw new Error("First argument needs to be a string.");
                    return t = t.toString(),
                    this.checksum = o(this.checksum, t)
                }
                ,
                c.updateUtf8 = function(t) {
                    if (null == t)
                        throw new Error("First argument needs to be a string.");
                    var e = r(t.toString());
                    return this.checksum = o(this.checksum, e)
                }
                ,
                t && (c.updateBuffer = function(t) {
                    if (!n(t))
                        throw new Error("First argument needs to be ArrayBuffer.");
                    var e = new Uint8Array(t);
                    return this.checksum = i(this.checksum, e)
                }
                ),
                c.clone = function() {
                    return new s(this.checksum)
                }
                ,
                l
            }();
            return a.from = function(t) {
                if (null == t)
                    throw new Error("First argument needs to be a string.");
                return o(1, t.toString())
            }
            ,
            a.fromUtf8 = function(t) {
                if (null == t)
                    throw new Error("First argument needs to be a string.");
                var e = r(t.toString());
                return o(1, e)
            }
            ,
            t && (a.fromBuffer = function(t) {
                if (!n(t))
                    throw new Error("First argument need to be ArrayBuffer.");
                var e = new Uint8Array(t);
                return i(1, e)
            }
            ),
            a
        }
        ,
        "object" === typeof t ? t.exports = r() : n.adler32cs = r();
        var i = function(t) {
            var e = 15
              , n = 30
              , r = 19
              , o = 256
              , i = o + 1 + 29
              , a = 2 * i + 1
              , s = 256
              , A = 16
              , l = 17
              , c = 18
              , u = 16
              , f = -1
              , g = 1
              , d = 2
              , h = 0
              , p = 0
              , w = 1
              , C = 3
              , m = 4
              , B = 0
              , E = 1
              , I = 2
              , y = -2
              , Q = -3
              , v = -5
              , b = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
            function x() {
                var t = this;
                function n(t, e) {
                    var n = 0;
                    do {
                        n |= 1 & t,
                        t >>>= 1,
                        n <<= 1
                    } while (--e > 0);return n >>> 1
                }
                t.build_tree = function(r) {
                    var o, i, s, A = t.dyn_tree, l = t.stat_desc.static_tree, c = t.stat_desc.elems, u = -1;
                    for (r.heap_len = 0,
                    r.heap_max = a,
                    o = 0; o < c; o++)
                        0 !== A[2 * o] ? (r.heap[++r.heap_len] = u = o,
                        r.depth[o] = 0) : A[2 * o + 1] = 0;
                    for (; r.heap_len < 2; )
                        A[2 * (s = r.heap[++r.heap_len] = u < 2 ? ++u : 0)] = 1,
                        r.depth[s] = 0,
                        r.opt_len--,
                        l && (r.static_len -= l[2 * s + 1]);
                    for (t.max_code = u,
                    o = Math.floor(r.heap_len / 2); o >= 1; o--)
                        r.pqdownheap(A, o);
                    s = c;
                    do {
                        o = r.heap[1],
                        r.heap[1] = r.heap[r.heap_len--],
                        r.pqdownheap(A, 1),
                        i = r.heap[1],
                        r.heap[--r.heap_max] = o,
                        r.heap[--r.heap_max] = i,
                        A[2 * s] = A[2 * o] + A[2 * i],
                        r.depth[s] = Math.max(r.depth[o], r.depth[i]) + 1,
                        A[2 * o + 1] = A[2 * i + 1] = s,
                        r.heap[1] = s++,
                        r.pqdownheap(A, 1)
                    } while (r.heap_len >= 2);r.heap[--r.heap_max] = r.heap[1],
                    function(n) {
                        var r, o, i, s, A, l, c = t.dyn_tree, u = t.stat_desc.static_tree, f = t.stat_desc.extra_bits, g = t.stat_desc.extra_base, d = t.stat_desc.max_length, h = 0;
                        for (s = 0; s <= e; s++)
                            n.bl_count[s] = 0;
                        for (c[2 * n.heap[n.heap_max] + 1] = 0,
                        r = n.heap_max + 1; r < a; r++)
                            (s = c[2 * c[2 * (o = n.heap[r]) + 1] + 1] + 1) > d && (s = d,
                            h++),
                            c[2 * o + 1] = s,
                            o > t.max_code || (n.bl_count[s]++,
                            A = 0,
                            o >= g && (A = f[o - g]),
                            l = c[2 * o],
                            n.opt_len += l * (s + A),
                            u && (n.static_len += l * (u[2 * o + 1] + A)));
                        if (0 !== h) {
                            do {
                                for (s = d - 1; 0 === n.bl_count[s]; )
                                    s--;
                                n.bl_count[s]--,
                                n.bl_count[s + 1] += 2,
                                n.bl_count[d]--,
                                h -= 2
                            } while (h > 0);for (s = d; 0 !== s; s--)
                                for (o = n.bl_count[s]; 0 !== o; )
                                    (i = n.heap[--r]) > t.max_code || (c[2 * i + 1] != s && (n.opt_len += (s - c[2 * i + 1]) * c[2 * i],
                                    c[2 * i + 1] = s),
                                    o--)
                        }
                    }(r),
                    function(t, r, o) {
                        var i, a, s, A = [], l = 0;
                        for (i = 1; i <= e; i++)
                            A[i] = l = l + o[i - 1] << 1;
                        for (a = 0; a <= r; a++)
                            0 !== (s = t[2 * a + 1]) && (t[2 * a] = n(A[s]++, s))
                    }(A, t.max_code, r.bl_count)
                }
            }
            function S(t, e, n, r, o) {
                this.static_tree = t,
                this.extra_bits = e,
                this.extra_base = n,
                this.elems = r,
                this.max_length = o
            }
            x._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28],
            x.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0],
            x.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576],
            x.d_code = function(t) {
                return t < 256 ? b[t] : b[256 + (t >>> 7)]
            }
            ,
            x.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            x.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            x.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            x.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            S.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8],
            S.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5],
            S.static_l_desc = new S(S.static_ltree,x.extra_lbits,o + 1,i,e),
            S.static_d_desc = new S(S.static_dtree,x.extra_dbits,0,n,e),
            S.static_bl_desc = new S(null,x.extra_blbits,0,r,7);
            var k = 9
              , q = 8;
            function T(t, e, n, r, o) {
                this.good_length = t,
                this.max_lazy = e,
                this.nice_length = n,
                this.max_chain = r,
                this.func = o
            }
            var O = 0
              , D = 1
              , F = 2
              , L = [new T(0,0,0,0,O), new T(4,4,8,4,D), new T(4,5,16,8,D), new T(4,6,32,32,D), new T(4,4,16,16,F), new T(8,16,32,32,F), new T(8,16,128,128,F), new T(8,32,128,256,F), new T(32,128,258,1024,F), new T(32,258,258,4096,F)]
              , P = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""]
              , N = 0
              , R = 1
              , M = 2
              , j = 3
              , H = 32
              , X = 42
              , z = 113
              , U = 666
              , V = 8
              , G = 0
              , _ = 1
              , J = 2
              , Y = 3
              , W = 258
              , K = W + Y + 1;
            function Z(t, e, n, r) {
                var o = t[2 * e]
                  , i = t[2 * n];
                return o < i || o == i && r[e] <= r[n]
            }
            function $() {
                var t, e, a, b, T, $, tt, et, nt, rt, ot, it, at, st, At, lt, ct, ut, ft, gt, dt, ht, pt, wt, Ct, mt, Bt, Et, It, yt, Qt, vt, bt, xt, St, kt, qt, Tt, Ot, Dt, Ft, Lt = this, Pt = new x, Nt = new x, Rt = new x;
                function Mt() {
                    var t;
                    for (t = 0; t < i; t++)
                        Qt[2 * t] = 0;
                    for (t = 0; t < n; t++)
                        vt[2 * t] = 0;
                    for (t = 0; t < r; t++)
                        bt[2 * t] = 0;
                    Qt[2 * s] = 1,
                    Lt.opt_len = Lt.static_len = 0,
                    kt = Tt = 0
                }
                function jt(t, e) {
                    var n, r, o = -1, i = t[1], a = 0, s = 7, u = 4;
                    for (0 === i && (s = 138,
                    u = 3),
                    t[2 * (e + 1) + 1] = 65535,
                    n = 0; n <= e; n++)
                        r = i,
                        i = t[2 * (n + 1) + 1],
                        ++a < s && r == i || (a < u ? bt[2 * r] += a : 0 !== r ? (r != o && bt[2 * r]++,
                        bt[2 * A]++) : a <= 10 ? bt[2 * l]++ : bt[2 * c]++,
                        a = 0,
                        o = r,
                        0 === i ? (s = 138,
                        u = 3) : r == i ? (s = 6,
                        u = 3) : (s = 7,
                        u = 4))
                }
                function Ht(t) {
                    Lt.pending_buf[Lt.pending++] = t
                }
                function Xt(t) {
                    Ht(255 & t),
                    Ht(t >>> 8 & 255)
                }
                function zt(t, e) {
                    var n, r = e;
                    Ft > u - r ? (Xt(Dt |= (n = t) << Ft & 65535),
                    Dt = n >>> u - Ft,
                    Ft += r - u) : (Dt |= t << Ft & 65535,
                    Ft += r)
                }
                function Ut(t, e) {
                    var n = 2 * t;
                    zt(65535 & e[n], 65535 & e[n + 1])
                }
                function Vt(t, e) {
                    var n, r, o = -1, i = t[1], a = 0, s = 7, u = 4;
                    for (0 === i && (s = 138,
                    u = 3),
                    n = 0; n <= e; n++)
                        if (r = i,
                        i = t[2 * (n + 1) + 1],
                        !(++a < s && r == i)) {
                            if (a < u)
                                do {
                                    Ut(r, bt)
                                } while (0 !== --a);
                            else
                                0 !== r ? (r != o && (Ut(r, bt),
                                a--),
                                Ut(A, bt),
                                zt(a - 3, 2)) : a <= 10 ? (Ut(l, bt),
                                zt(a - 3, 3)) : (Ut(c, bt),
                                zt(a - 11, 7));
                            a = 0,
                            o = r,
                            0 === i ? (s = 138,
                            u = 3) : r == i ? (s = 6,
                            u = 3) : (s = 7,
                            u = 4)
                        }
                }
                function Gt() {
                    16 == Ft ? (Xt(Dt),
                    Dt = 0,
                    Ft = 0) : Ft >= 8 && (Ht(255 & Dt),
                    Dt >>>= 8,
                    Ft -= 8)
                }
                function _t(t, e) {
                    var r, i, a;
                    if (Lt.pending_buf[qt + 2 * kt] = t >>> 8 & 255,
                    Lt.pending_buf[qt + 2 * kt + 1] = 255 & t,
                    Lt.pending_buf[xt + kt] = 255 & e,
                    kt++,
                    0 === t ? Qt[2 * e]++ : (Tt++,
                    t--,
                    Qt[2 * (x._length_code[e] + o + 1)]++,
                    vt[2 * x.d_code(t)]++),
                    0 === (8191 & kt) && Bt > 2) {
                        for (r = 8 * kt,
                        i = dt - ct,
                        a = 0; a < n; a++)
                            r += vt[2 * a] * (5 + x.extra_dbits[a]);
                        if (r >>>= 3,
                        Tt < Math.floor(kt / 2) && r < Math.floor(i / 2))
                            return !0
                    }
                    return kt == St - 1
                }
                function Jt(t, e) {
                    var n, r, i, a, A = 0;
                    if (0 !== kt)
                        do {
                            n = Lt.pending_buf[qt + 2 * A] << 8 & 65280 | 255 & Lt.pending_buf[qt + 2 * A + 1],
                            r = 255 & Lt.pending_buf[xt + A],
                            A++,
                            0 === n ? Ut(r, t) : (Ut((i = x._length_code[r]) + o + 1, t),
                            0 !== (a = x.extra_lbits[i]) && zt(r -= x.base_length[i], a),
                            n--,
                            Ut(i = x.d_code(n), e),
                            0 !== (a = x.extra_dbits[i]) && zt(n -= x.base_dist[i], a))
                        } while (A < kt);Ut(s, t),
                    Ot = t[2 * s + 1]
                }
                function Yt() {
                    Ft > 8 ? Xt(Dt) : Ft > 0 && Ht(255 & Dt),
                    Dt = 0,
                    Ft = 0
                }
                function Wt(t, e, n) {
                    zt((G << 1) + (n ? 1 : 0), 3),
                    function(t, e, n) {
                        Yt(),
                        Ot = 8,
                        n && (Xt(e),
                        Xt(~e)),
                        Lt.pending_buf.set(et.subarray(t, t + e), Lt.pending),
                        Lt.pending += e
                    }(t, e, !0)
                }
                function Kt(t, e, n) {
                    var o, i, a = 0;
                    Bt > 0 ? (Pt.build_tree(Lt),
                    Nt.build_tree(Lt),
                    a = function() {
                        var t;
                        for (jt(Qt, Pt.max_code),
                        jt(vt, Nt.max_code),
                        Rt.build_tree(Lt),
                        t = r - 1; t >= 3 && 0 === bt[2 * x.bl_order[t] + 1]; t--)
                            ;
                        return Lt.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                        t
                    }(),
                    o = Lt.opt_len + 3 + 7 >>> 3,
                    (i = Lt.static_len + 3 + 7 >>> 3) <= o && (o = i)) : o = i = e + 5,
                    e + 4 <= o && -1 != t ? Wt(t, e, n) : i == o ? (zt((_ << 1) + (n ? 1 : 0), 3),
                    Jt(S.static_ltree, S.static_dtree)) : (zt((J << 1) + (n ? 1 : 0), 3),
                    function(t, e, n) {
                        var r;
                        for (zt(t - 257, 5),
                        zt(e - 1, 5),
                        zt(n - 4, 4),
                        r = 0; r < n; r++)
                            zt(bt[2 * x.bl_order[r] + 1], 3);
                        Vt(Qt, t - 1),
                        Vt(vt, e - 1)
                    }(Pt.max_code + 1, Nt.max_code + 1, a + 1),
                    Jt(Qt, vt)),
                    Mt(),
                    n && Yt()
                }
                function Zt(e) {
                    Kt(ct >= 0 ? ct : -1, dt - ct, e),
                    ct = dt,
                    t.flush_pending()
                }
                function $t() {
                    var e, n, r, o;
                    do {
                        if (0 === (o = nt - pt - dt) && 0 === dt && 0 === pt)
                            o = T;
                        else if (-1 == o)
                            o--;
                        else if (dt >= T + T - K) {
                            et.set(et.subarray(T, T + T), 0),
                            ht -= T,
                            dt -= T,
                            ct -= T,
                            r = e = at;
                            do {
                                n = 65535 & ot[--r],
                                ot[r] = n >= T ? n - T : 0
                            } while (0 !== --e);r = e = T;
                            do {
                                n = 65535 & rt[--r],
                                rt[r] = n >= T ? n - T : 0
                            } while (0 !== --e);o += T
                        }
                        if (0 === t.avail_in)
                            return;
                        e = t.read_buf(et, dt + pt, o),
                        (pt += e) >= Y && (it = ((it = 255 & et[dt]) << lt ^ 255 & et[dt + 1]) & At)
                    } while (pt < K && 0 !== t.avail_in)
                }
                function te(t) {
                    var e, n, r = Ct, o = dt, i = wt, a = dt > T - K ? dt - (T - K) : 0, s = yt, A = tt, l = dt + W, c = et[o + i - 1], u = et[o + i];
                    wt >= It && (r >>= 2),
                    s > pt && (s = pt);
                    do {
                        if (et[(e = t) + i] == u && et[e + i - 1] == c && et[e] == et[o] && et[++e] == et[o + 1]) {
                            o += 2,
                            e++;
                            do {} while (et[++o] == et[++e] && et[++o] == et[++e] && et[++o] == et[++e] && et[++o] == et[++e] && et[++o] == et[++e] && et[++o] == et[++e] && et[++o] == et[++e] && et[++o] == et[++e] && o < l);if (n = W - (l - o),
                            o = l - W,
                            n > i) {
                                if (ht = t,
                                i = n,
                                n >= s)
                                    break;
                                c = et[o + i - 1],
                                u = et[o + i]
                            }
                        }
                    } while ((t = 65535 & rt[t & A]) > a && 0 !== --r);return i <= pt ? i : pt
                }
                function ee(t) {
                    return t.total_in = t.total_out = 0,
                    t.msg = null,
                    Lt.pending = 0,
                    Lt.pending_out = 0,
                    e = z,
                    b = p,
                    Pt.dyn_tree = Qt,
                    Pt.stat_desc = S.static_l_desc,
                    Nt.dyn_tree = vt,
                    Nt.stat_desc = S.static_d_desc,
                    Rt.dyn_tree = bt,
                    Rt.stat_desc = S.static_bl_desc,
                    Dt = 0,
                    Ft = 0,
                    Ot = 8,
                    Mt(),
                    function() {
                        var t;
                        for (nt = 2 * T,
                        ot[at - 1] = 0,
                        t = 0; t < at - 1; t++)
                            ot[t] = 0;
                        mt = L[Bt].max_lazy,
                        It = L[Bt].good_length,
                        yt = L[Bt].nice_length,
                        Ct = L[Bt].max_chain,
                        dt = 0,
                        ct = 0,
                        pt = 0,
                        ut = wt = Y - 1,
                        gt = 0,
                        it = 0
                    }(),
                    B
                }
                Lt.depth = [],
                Lt.bl_count = [],
                Lt.heap = [],
                Qt = [],
                vt = [],
                bt = [],
                Lt.pqdownheap = function(t, e) {
                    for (var n = Lt.heap, r = n[e], o = e << 1; o <= Lt.heap_len && (o < Lt.heap_len && Z(t, n[o + 1], n[o], Lt.depth) && o++,
                    !Z(t, r, n[o], Lt.depth)); )
                        n[e] = n[o],
                        e = o,
                        o <<= 1;
                    n[e] = r
                }
                ,
                Lt.deflateInit = function(t, e, n, r, o, i) {
                    return r || (r = V),
                    o || (o = q),
                    i || (i = h),
                    t.msg = null,
                    e == f && (e = 6),
                    o < 1 || o > k || r != V || n < 9 || n > 15 || e < 0 || e > 9 || i < 0 || i > d ? y : (t.dstate = Lt,
                    tt = (T = 1 << ($ = n)) - 1,
                    At = (at = 1 << (st = o + 7)) - 1,
                    lt = Math.floor((st + Y - 1) / Y),
                    et = new Uint8Array(2 * T),
                    rt = [],
                    ot = [],
                    St = 1 << o + 6,
                    Lt.pending_buf = new Uint8Array(4 * St),
                    a = 4 * St,
                    qt = Math.floor(St / 2),
                    xt = 3 * St,
                    Bt = e,
                    Et = i,
                    255 & r,
                    ee(t))
                }
                ,
                Lt.deflateEnd = function() {
                    return e != X && e != z && e != U ? y : (Lt.pending_buf = null,
                    ot = null,
                    rt = null,
                    et = null,
                    Lt.dstate = null,
                    e == z ? Q : B)
                }
                ,
                Lt.deflateParams = function(t, e, n) {
                    var r = B;
                    return e == f && (e = 6),
                    e < 0 || e > 9 || n < 0 || n > d ? y : (L[Bt].func != L[e].func && 0 !== t.total_in && (r = t.deflate(w)),
                    Bt != e && (mt = L[Bt = e].max_lazy,
                    It = L[Bt].good_length,
                    yt = L[Bt].nice_length,
                    Ct = L[Bt].max_chain),
                    Et = n,
                    r)
                }
                ,
                Lt.deflateSetDictionary = function(t, n, r) {
                    var o, i = r, a = 0;
                    if (!n || e != X)
                        return y;
                    if (i < Y)
                        return B;
                    for (i > T - K && (a = r - (i = T - K)),
                    et.set(n.subarray(a, a + i), 0),
                    dt = i,
                    ct = i,
                    it = ((it = 255 & et[0]) << lt ^ 255 & et[1]) & At,
                    o = 0; o <= i - Y; o++)
                        it = (it << lt ^ 255 & et[o + (Y - 1)]) & At,
                        rt[o & tt] = ot[it],
                        ot[it] = o;
                    return B
                }
                ,
                Lt.deflate = function(n, r) {
                    var o, i, A, l, c, u;
                    if (r > m || r < 0)
                        return y;
                    if (!n.next_out || !n.next_in && 0 !== n.avail_in || e == U && r != m)
                        return n.msg = P[I - y],
                        y;
                    if (0 === n.avail_out)
                        return n.msg = P[I - v],
                        v;
                    if (t = n,
                    l = b,
                    b = r,
                    e == X && (i = V + ($ - 8 << 4) << 8,
                    (A = (Bt - 1 & 255) >> 1) > 3 && (A = 3),
                    i |= A << 6,
                    0 !== dt && (i |= H),
                    e = z,
                    Ht((u = i += 31 - i % 31) >> 8 & 255),
                    Ht(255 & u)),
                    0 !== Lt.pending) {
                        if (t.flush_pending(),
                        0 === t.avail_out)
                            return b = -1,
                            B
                    } else if (0 === t.avail_in && r <= l && r != m)
                        return t.msg = P[I - v],
                        v;
                    if (e == U && 0 !== t.avail_in)
                        return n.msg = P[I - v],
                        v;
                    if (0 !== t.avail_in || 0 !== pt || r != p && e != U) {
                        switch (c = -1,
                        L[Bt].func) {
                        case O:
                            c = function(e) {
                                var n, r = 65535;
                                for (r > a - 5 && (r = a - 5); ; ) {
                                    if (pt <= 1) {
                                        if ($t(),
                                        0 === pt && e == p)
                                            return N;
                                        if (0 === pt)
                                            break
                                    }
                                    if (dt += pt,
                                    pt = 0,
                                    n = ct + r,
                                    (0 === dt || dt >= n) && (pt = dt - n,
                                    dt = n,
                                    Zt(!1),
                                    0 === t.avail_out))
                                        return N;
                                    if (dt - ct >= T - K && (Zt(!1),
                                    0 === t.avail_out))
                                        return N
                                }
                                return Zt(e == m),
                                0 === t.avail_out ? e == m ? M : N : e == m ? j : R
                            }(r);
                            break;
                        case D:
                            c = function(e) {
                                for (var n, r = 0; ; ) {
                                    if (pt < K) {
                                        if ($t(),
                                        pt < K && e == p)
                                            return N;
                                        if (0 === pt)
                                            break
                                    }
                                    if (pt >= Y && (it = (it << lt ^ 255 & et[dt + (Y - 1)]) & At,
                                    r = 65535 & ot[it],
                                    rt[dt & tt] = ot[it],
                                    ot[it] = dt),
                                    0 !== r && (dt - r & 65535) <= T - K && Et != d && (ut = te(r)),
                                    ut >= Y)
                                        if (n = _t(dt - ht, ut - Y),
                                        pt -= ut,
                                        ut <= mt && pt >= Y) {
                                            ut--;
                                            do {
                                                it = (it << lt ^ 255 & et[++dt + (Y - 1)]) & At,
                                                r = 65535 & ot[it],
                                                rt[dt & tt] = ot[it],
                                                ot[it] = dt
                                            } while (0 !== --ut);dt++
                                        } else
                                            dt += ut,
                                            ut = 0,
                                            it = ((it = 255 & et[dt]) << lt ^ 255 & et[dt + 1]) & At;
                                    else
                                        n = _t(0, 255 & et[dt]),
                                        pt--,
                                        dt++;
                                    if (n && (Zt(!1),
                                    0 === t.avail_out))
                                        return N
                                }
                                return Zt(e == m),
                                0 === t.avail_out ? e == m ? M : N : e == m ? j : R
                            }(r);
                            break;
                        case F:
                            c = function(e) {
                                for (var n, r, o = 0; ; ) {
                                    if (pt < K) {
                                        if ($t(),
                                        pt < K && e == p)
                                            return N;
                                        if (0 === pt)
                                            break
                                    }
                                    if (pt >= Y && (it = (it << lt ^ 255 & et[dt + (Y - 1)]) & At,
                                    o = 65535 & ot[it],
                                    rt[dt & tt] = ot[it],
                                    ot[it] = dt),
                                    wt = ut,
                                    ft = ht,
                                    ut = Y - 1,
                                    0 !== o && wt < mt && (dt - o & 65535) <= T - K && (Et != d && (ut = te(o)),
                                    ut <= 5 && (Et == g || ut == Y && dt - ht > 4096) && (ut = Y - 1)),
                                    wt >= Y && ut <= wt) {
                                        r = dt + pt - Y,
                                        n = _t(dt - 1 - ft, wt - Y),
                                        pt -= wt - 1,
                                        wt -= 2;
                                        do {
                                            ++dt <= r && (it = (it << lt ^ 255 & et[dt + (Y - 1)]) & At,
                                            o = 65535 & ot[it],
                                            rt[dt & tt] = ot[it],
                                            ot[it] = dt)
                                        } while (0 !== --wt);if (gt = 0,
                                        ut = Y - 1,
                                        dt++,
                                        n && (Zt(!1),
                                        0 === t.avail_out))
                                            return N
                                    } else if (0 !== gt) {
                                        if ((n = _t(0, 255 & et[dt - 1])) && Zt(!1),
                                        dt++,
                                        pt--,
                                        0 === t.avail_out)
                                            return N
                                    } else
                                        gt = 1,
                                        dt++,
                                        pt--
                                }
                                return 0 !== gt && (n = _t(0, 255 & et[dt - 1]),
                                gt = 0),
                                Zt(e == m),
                                0 === t.avail_out ? e == m ? M : N : e == m ? j : R
                            }(r)
                        }
                        if (c != M && c != j || (e = U),
                        c == N || c == M)
                            return 0 === t.avail_out && (b = -1),
                            B;
                        if (c == R) {
                            if (r == w)
                                zt(_ << 1, 3),
                                Ut(s, S.static_ltree),
                                Gt(),
                                1 + Ot + 10 - Ft < 9 && (zt(_ << 1, 3),
                                Ut(s, S.static_ltree),
                                Gt()),
                                Ot = 7;
                            else if (Wt(0, 0, !1),
                            r == C)
                                for (o = 0; o < at; o++)
                                    ot[o] = 0;
                            if (t.flush_pending(),
                            0 === t.avail_out)
                                return b = -1,
                                B
                        }
                    }
                    return r != m ? B : E
                }
            }
            function tt() {
                this.next_in_index = 0,
                this.next_out_index = 0,
                this.avail_in = 0,
                this.total_in = 0,
                this.avail_out = 0,
                this.total_out = 0
            }
            return tt.prototype = {
                deflateInit: function(t, n) {
                    return this.dstate = new $,
                    n || (n = e),
                    this.dstate.deflateInit(this, t, n)
                },
                deflate: function(t) {
                    return this.dstate ? this.dstate.deflate(this, t) : y
                },
                deflateEnd: function() {
                    if (!this.dstate)
                        return y;
                    var t = this.dstate.deflateEnd();
                    return this.dstate = null,
                    t
                },
                deflateParams: function(t, e) {
                    return this.dstate ? this.dstate.deflateParams(this, t, e) : y
                },
                deflateSetDictionary: function(t, e) {
                    return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : y
                },
                read_buf: function(t, e, n) {
                    var r = this.avail_in;
                    return r > n && (r = n),
                    0 === r ? 0 : (this.avail_in -= r,
                    t.set(this.next_in.subarray(this.next_in_index, this.next_in_index + r), e),
                    this.next_in_index += r,
                    this.total_in += r,
                    r)
                },
                flush_pending: function() {
                    var t = this.dstate.pending;
                    t > this.avail_out && (t = this.avail_out),
                    0 !== t && (this.next_out.set(this.dstate.pending_buf.subarray(this.dstate.pending_out, this.dstate.pending_out + t), this.next_out_index),
                    this.next_out_index += t,
                    this.dstate.pending_out += t,
                    this.total_out += t,
                    this.avail_out -= t,
                    this.dstate.pending -= t,
                    0 === this.dstate.pending && (this.dstate.pending_out = 0))
                }
            },
            function(t) {
                var e = new tt
                  , n = p
                  , r = new Uint8Array(512);
                "undefined" == typeof t && (t = f),
                e.deflateInit(t),
                e.next_out = r,
                this.append = function(t, o) {
                    var i, a = [], s = 0, A = 0, l = 0;
                    if (t.length) {
                        e.next_in_index = 0,
                        e.next_in = t,
                        e.avail_in = t.length;
                        do {
                            if (e.next_out_index = 0,
                            e.avail_out = 512,
                            e.deflate(n) != B)
                                throw "deflating: " + e.msg;
                            e.next_out_index && (512 == e.next_out_index ? a.push(new Uint8Array(r)) : a.push(new Uint8Array(r.subarray(0, e.next_out_index)))),
                            l += e.next_out_index,
                            o && e.next_in_index > 0 && e.next_in_index != s && (o(e.next_in_index),
                            s = e.next_in_index)
                        } while (e.avail_in > 0 || 0 === e.avail_out);return i = new Uint8Array(l),
                        a.forEach(function(t) {
                            i.set(t, A),
                            A += t.length
                        }),
                        i
                    }
                }
                ,
                this.flush = function() {
                    var t, n, o = [], i = 0, a = 0;
                    do {
                        if (e.next_out_index = 0,
                        e.avail_out = 512,
                        (t = e.deflate(m)) != E && t != B)
                            throw "deflating: " + e.msg;
                        512 - e.avail_out > 0 && o.push(new Uint8Array(r.subarray(0, e.next_out_index))),
                        a += e.next_out_index
                    } while (e.avail_in > 0 || 0 === e.avail_out);return e.deflateEnd(),
                    n = new Uint8Array(a),
                    o.forEach(function(t) {
                        n.set(t, i),
                        i += t.length
                    }),
                    n
                }
            }
        }();
        !function(t) {
            var e;
            e = function() {
                var e, n, r;
                function o(t) {
                    var e, n, r, o, i, a, s, A, l, c, u, f, g, d;
                    for (this.data = t,
                    this.pos = 8,
                    this.palette = [],
                    this.imgData = [],
                    this.transparency = {},
                    this.animation = null,
                    this.text = {},
                    a = null; ; ) {
                        switch (e = this.readUInt32(),
                        l = function() {
                            var t, e;
                            for (e = [],
                            t = 0; t < 4; ++t)
                                e.push(String.fromCharCode(this.data[this.pos++]));
                            return e
                        }
                        .call(this).join("")) {
                        case "IHDR":
                            this.width = this.readUInt32(),
                            this.height = this.readUInt32(),
                            this.bits = this.data[this.pos++],
                            this.colorType = this.data[this.pos++],
                            this.compressionMethod = this.data[this.pos++],
                            this.filterMethod = this.data[this.pos++],
                            this.interlaceMethod = this.data[this.pos++];
                            break;
                        case "acTL":
                            this.animation = {
                                numFrames: this.readUInt32(),
                                numPlays: this.readUInt32() || 1 / 0,
                                frames: []
                            };
                            break;
                        case "PLTE":
                            this.palette = this.read(e);
                            break;
                        case "fcTL":
                            a && this.animation.frames.push(a),
                            this.pos += 4,
                            a = {
                                width: this.readUInt32(),
                                height: this.readUInt32(),
                                xOffset: this.readUInt32(),
                                yOffset: this.readUInt32()
                            },
                            i = this.readUInt16(),
                            o = this.readUInt16() || 100,
                            a.delay = 1e3 * i / o,
                            a.disposeOp = this.data[this.pos++],
                            a.blendOp = this.data[this.pos++],
                            a.data = [];
                            break;
                        case "IDAT":
                        case "fdAT":
                            for ("fdAT" === l && (this.pos += 4,
                            e -= 4),
                            t = (null != a ? a.data : void 0) || this.imgData,
                            f = 0; 0 <= e ? f < e : f > e; 0 <= e ? ++f : --f)
                                t.push(this.data[this.pos++]);
                            break;
                        case "tRNS":
                            switch (this.transparency = {},
                            this.colorType) {
                            case 3:
                                if (r = this.palette.length / 3,
                                this.transparency.indexed = this.read(e),
                                this.transparency.indexed.length > r)
                                    throw new Error("More transparent colors than palette size");
                                if ((c = r - this.transparency.indexed.length) > 0)
                                    for (g = 0; 0 <= c ? g < c : g > c; 0 <= c ? ++g : --g)
                                        this.transparency.indexed.push(255);
                                break;
                            case 0:
                                this.transparency.grayscale = this.read(e)[0];
                                break;
                            case 2:
                                this.transparency.rgb = this.read(e)
                            }
                            break;
                        case "tEXt":
                            s = (u = this.read(e)).indexOf(0),
                            A = String.fromCharCode.apply(String, u.slice(0, s)),
                            this.text[A] = String.fromCharCode.apply(String, u.slice(s + 1));
                            break;
                        case "IEND":
                            return a && this.animation.frames.push(a),
                            this.colors = function() {
                                switch (this.colorType) {
                                case 0:
                                case 3:
                                case 4:
                                    return 1;
                                case 2:
                                case 6:
                                    return 3
                                }
                            }
                            .call(this),
                            this.hasAlphaChannel = 4 === (d = this.colorType) || 6 === d,
                            n = this.colors + (this.hasAlphaChannel ? 1 : 0),
                            this.pixelBitlength = this.bits * n,
                            this.colorSpace = function() {
                                switch (this.colors) {
                                case 1:
                                    return "DeviceGray";
                                case 3:
                                    return "DeviceRGB"
                                }
                            }
                            .call(this),
                            void (this.imgData = new Uint8Array(this.imgData));
                        default:
                            this.pos += e
                        }
                        if (this.pos += 4,
                        this.pos > this.data.length)
                            throw new Error("Incomplete or corrupt PNG file")
                    }
                }
                o.load = function(t, e, n) {
                    var r;
                    return "function" === typeof e && (n = e),
                    (r = new XMLHttpRequest).open("GET", t, !0),
                    r.responseType = "arraybuffer",
                    r.onload = function() {
                        var t;
                        return t = new o(new Uint8Array(r.response || r.mozResponseArrayBuffer)),
                        "function" === typeof (null != e ? e.getContext : void 0) && t.render(e),
                        "function" === typeof n ? n(t) : void 0
                    }
                    ,
                    r.send(null)
                }
                ,
                o.prototype.read = function(t) {
                    var e, n;
                    for (n = [],
                    e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)
                        n.push(this.data[this.pos++]);
                    return n
                }
                ,
                o.prototype.readUInt32 = function() {
                    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
                }
                ,
                o.prototype.readUInt16 = function() {
                    return this.data[this.pos++] << 8 | this.data[this.pos++]
                }
                ,
                o.prototype.decodePixels = function(t) {
                    var e, n, r, o, i, a, A, l, c, u, f, g, d, h, p, w, C, m, B, E, I, y, Q;
                    if (null == t && (t = this.imgData),
                    0 === t.length)
                        return new Uint8Array(0);
                    for (t = (t = new s(t)).getBytes(),
                    w = (g = this.pixelBitlength / 8) * this.width,
                    d = new Uint8Array(w * this.height),
                    a = t.length,
                    p = 0,
                    h = 0,
                    n = 0; h < a; ) {
                        switch (t[h++]) {
                        case 0:
                            for (o = B = 0; B < w; o = B += 1)
                                d[n++] = t[h++];
                            break;
                        case 1:
                            for (o = E = 0; E < w; o = E += 1)
                                e = t[h++],
                                i = o < g ? 0 : d[n - g],
                                d[n++] = (e + i) % 256;
                            break;
                        case 2:
                            for (o = I = 0; I < w; o = I += 1)
                                e = t[h++],
                                r = (o - o % g) / g,
                                C = p && d[(p - 1) * w + r * g + o % g],
                                d[n++] = (C + e) % 256;
                            break;
                        case 3:
                            for (o = y = 0; y < w; o = y += 1)
                                e = t[h++],
                                r = (o - o % g) / g,
                                i = o < g ? 0 : d[n - g],
                                C = p && d[(p - 1) * w + r * g + o % g],
                                d[n++] = (e + Math.floor((i + C) / 2)) % 256;
                            break;
                        case 4:
                            for (o = Q = 0; Q < w; o = Q += 1)
                                e = t[h++],
                                r = (o - o % g) / g,
                                i = o < g ? 0 : d[n - g],
                                0 === p ? C = m = 0 : (C = d[(p - 1) * w + r * g + o % g],
                                m = r && d[(p - 1) * w + (r - 1) * g + o % g]),
                                A = i + C - m,
                                l = Math.abs(A - i),
                                u = Math.abs(A - C),
                                f = Math.abs(A - m),
                                c = l <= u && l <= f ? i : u <= f ? C : m,
                                d[n++] = (e + c) % 256;
                            break;
                        default:
                            throw new Error("Invalid filter algorithm: " + t[h - 1])
                        }
                        p++
                    }
                    return d
                }
                ,
                o.prototype.decodePalette = function() {
                    var t, e, n, r, o, i, a, s, A;
                    for (n = this.palette,
                    i = this.transparency.indexed || [],
                    o = new Uint8Array((i.length || 0) + n.length),
                    r = 0,
                    n.length,
                    t = 0,
                    e = a = 0,
                    s = n.length; a < s; e = a += 3)
                        o[r++] = n[e],
                        o[r++] = n[e + 1],
                        o[r++] = n[e + 2],
                        o[r++] = null != (A = i[t++]) ? A : 255;
                    return o
                }
                ,
                o.prototype.copyToImageData = function(t, e) {
                    var n, r, o, i, a, s, A, l, c, u, f;
                    if (r = this.colors,
                    c = null,
                    n = this.hasAlphaChannel,
                    this.palette.length && (c = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(),
                    r = 4,
                    n = !0),
                    l = (o = t.data || t).length,
                    a = c || e,
                    i = s = 0,
                    1 === r)
                        for (; i < l; )
                            A = c ? 4 * e[i / 4] : s,
                            u = a[A++],
                            o[i++] = u,
                            o[i++] = u,
                            o[i++] = u,
                            o[i++] = n ? a[A++] : 255,
                            s = A;
                    else
                        for (; i < l; )
                            A = c ? 4 * e[i / 4] : s,
                            o[i++] = a[A++],
                            o[i++] = a[A++],
                            o[i++] = a[A++],
                            o[i++] = n ? a[A++] : 255,
                            s = A
                }
                ,
                o.prototype.decode = function() {
                    var t;
                    return t = new Uint8Array(this.width * this.height * 4),
                    this.copyToImageData(t, this.decodePixels()),
                    t
                }
                ;
                try {
                    n = t.document.createElement("canvas"),
                    r = n.getContext("2d")
                } catch (t) {
                    return -1
                }
                return e = function(t) {
                    var e;
                    return r.width = t.width,
                    r.height = t.height,
                    r.clearRect(0, 0, t.width, t.height),
                    r.putImageData(t, 0, 0),
                    (e = new Image).src = n.toDataURL(),
                    e
                }
                ,
                o.prototype.decodeFrames = function(t) {
                    var n, r, o, i, a, s, A, l;
                    if (this.animation) {
                        for (l = [],
                        r = a = 0,
                        s = (A = this.animation.frames).length; a < s; r = ++a)
                            n = A[r],
                            o = t.createImageData(n.width, n.height),
                            i = this.decodePixels(new Uint8Array(n.data)),
                            this.copyToImageData(o, i),
                            n.imageData = o,
                            l.push(n.image = e(o));
                        return l
                    }
                }
                ,
                o.prototype.renderFrame = function(t, e) {
                    var n, r, o;
                    return n = (r = this.animation.frames)[e],
                    o = r[e - 1],
                    0 === e && t.clearRect(0, 0, this.width, this.height),
                    1 === (null != o ? o.disposeOp : void 0) ? t.clearRect(o.xOffset, o.yOffset, o.width, o.height) : 2 === (null != o ? o.disposeOp : void 0) && t.putImageData(o.imageData, o.xOffset, o.yOffset),
                    0 === n.blendOp && t.clearRect(n.xOffset, n.yOffset, n.width, n.height),
                    t.drawImage(n.image, n.xOffset, n.yOffset)
                }
                ,
                o.prototype.animate = function(t) {
                    var e, n, r, o, i, a, s = this;
                    return n = 0,
                    a = this.animation,
                    o = a.numFrames,
                    r = a.frames,
                    i = a.numPlays,
                    (e = function() {
                        var a, A;
                        if (a = n++ % o,
                        A = r[a],
                        s.renderFrame(t, a),
                        o > 1 && n / o < i)
                            return s.animation._timeout = setTimeout(e, A.delay)
                    }
                    )()
                }
                ,
                o.prototype.stopAnimation = function() {
                    var t;
                    return clearTimeout(null != (t = this.animation) ? t._timeout : void 0)
                }
                ,
                o.prototype.render = function(t) {
                    var e, n;
                    return t._png && t._png.stopAnimation(),
                    t._png = this,
                    t.width = this.width,
                    t.height = this.height,
                    e = t.getContext("2d"),
                    this.animation ? (this.decodeFrames(e),
                    this.animate(e)) : (n = e.createImageData(this.width, this.height),
                    this.copyToImageData(n, this.decodePixels()),
                    e.putImageData(n, 0, 0))
                }
                ,
                o
            }(),
            t.PNG = e
        }("undefined" !== typeof window && window || this);
        var a = function() {
            function t() {
                this.pos = 0,
                this.bufferLength = 0,
                this.eof = !1,
                this.buffer = null
            }
            return t.prototype = {
                ensureBuffer: function(t) {
                    var e = this.buffer
                      , n = e ? e.byteLength : 0;
                    if (t < n)
                        return e;
                    for (var r = 512; r < t; )
                        r <<= 1;
                    for (var o = new Uint8Array(r), i = 0; i < n; ++i)
                        o[i] = e[i];
                    return this.buffer = o
                },
                getByte: function() {
                    for (var t = this.pos; this.bufferLength <= t; ) {
                        if (this.eof)
                            return null;
                        this.readBlock()
                    }
                    return this.buffer[this.pos++]
                },
                getBytes: function(t) {
                    var e = this.pos;
                    if (t) {
                        this.ensureBuffer(e + t);
                        for (var n = e + t; !this.eof && this.bufferLength < n; )
                            this.readBlock();
                        var r = this.bufferLength;
                        n > r && (n = r)
                    } else {
                        for (; !this.eof; )
                            this.readBlock();
                        n = this.bufferLength
                    }
                    return this.pos = n,
                    this.buffer.subarray(e, n)
                },
                lookChar: function() {
                    for (var t = this.pos; this.bufferLength <= t; ) {
                        if (this.eof)
                            return null;
                        this.readBlock()
                    }
                    return String.fromCharCode(this.buffer[this.pos])
                },
                getChar: function() {
                    for (var t = this.pos; this.bufferLength <= t; ) {
                        if (this.eof)
                            return null;
                        this.readBlock()
                    }
                    return String.fromCharCode(this.buffer[this.pos++])
                },
                makeSubStream: function(t, e, n) {
                    for (var r = t + e; this.bufferLength <= r && !this.eof; )
                        this.readBlock();
                    return new Stream(this.buffer,t,e,n)
                },
                skip: function(t) {
                    t || (t = 1),
                    this.pos += t
                },
                reset: function() {
                    this.pos = 0
                }
            },
            t
        }()
          , s = function() {
            if ("undefined" !== typeof Uint32Array) {
                var t = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
                  , e = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258])
                  , n = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545])
                  , r = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9]
                  , o = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
                return s.prototype = Object.create(a.prototype),
                s.prototype.getBits = function(t) {
                    for (var e, n = this.codeSize, r = this.codeBuf, o = this.bytes, a = this.bytesPos; n < t; )
                        "undefined" == typeof (e = o[a++]) && i("Bad encoding in flate stream"),
                        r |= e << n,
                        n += 8;
                    return e = r & (1 << t) - 1,
                    this.codeBuf = r >> t,
                    this.codeSize = n -= t,
                    this.bytesPos = a,
                    e
                }
                ,
                s.prototype.getCode = function(t) {
                    for (var e = t[0], n = t[1], r = this.codeSize, o = this.codeBuf, a = this.bytes, s = this.bytesPos; r < n; ) {
                        var A;
                        "undefined" == typeof (A = a[s++]) && i("Bad encoding in flate stream"),
                        o |= A << r,
                        r += 8
                    }
                    var l = e[o & (1 << n) - 1]
                      , c = l >> 16
                      , u = 65535 & l;
                    return (0 == r || r < c || 0 == c) && i("Bad encoding in flate stream"),
                    this.codeBuf = o >> c,
                    this.codeSize = r - c,
                    this.bytesPos = s,
                    u
                }
                ,
                s.prototype.generateHuffmanTable = function(t) {
                    for (var e = t.length, n = 0, r = 0; r < e; ++r)
                        t[r] > n && (n = t[r]);
                    for (var o = 1 << n, i = new Uint32Array(o), a = 1, s = 0, A = 2; a <= n; ++a,
                    s <<= 1,
                    A <<= 1)
                        for (var l = 0; l < e; ++l)
                            if (t[l] == a) {
                                var c = 0
                                  , u = s;
                                for (r = 0; r < a; ++r)
                                    c = c << 1 | 1 & u,
                                    u >>= 1;
                                for (r = c; r < o; r += A)
                                    i[r] = a << 16 | l;
                                ++s
                            }
                    return [i, n]
                }
                ,
                s.prototype.readBlock = function() {
                    function a(t, e, n, r, o) {
                        for (var i = t.getBits(n) + r; i-- > 0; )
                            e[d++] = o
                    }
                    var s = this.getBits(3);
                    if (1 & s && (this.eof = !0),
                    0 != (s >>= 1)) {
                        var A, l;
                        if (1 == s)
                            A = r,
                            l = o;
                        else if (2 == s) {
                            for (var c = this.getBits(5) + 257, u = this.getBits(5) + 1, f = this.getBits(4) + 4, g = Array(t.length), d = 0; d < f; )
                                g[t[d++]] = this.getBits(3);
                            for (var h = this.generateHuffmanTable(g), p = 0, w = (d = 0,
                            c + u), C = new Array(w); d < w; ) {
                                var m = this.getCode(h);
                                16 == m ? a(this, C, 2, 3, p) : 17 == m ? a(this, C, 3, 3, p = 0) : 18 == m ? a(this, C, 7, 11, p = 0) : C[d++] = p = m
                            }
                            A = this.generateHuffmanTable(C.slice(0, c)),
                            l = this.generateHuffmanTable(C.slice(c, w))
                        } else
                            i("Unknown block type in flate stream");
                        for (var B = (O = this.buffer) ? O.length : 0, E = this.bufferLength; ; ) {
                            var I = this.getCode(A);
                            if (I < 256)
                                E + 1 >= B && (B = (O = this.ensureBuffer(E + 1)).length),
                                O[E++] = I;
                            else {
                                if (256 == I)
                                    return void (this.bufferLength = E);
                                var y = (I = e[I -= 257]) >> 16;
                                y > 0 && (y = this.getBits(y));
                                p = (65535 & I) + y;
                                I = this.getCode(l),
                                (y = (I = n[I]) >> 16) > 0 && (y = this.getBits(y));
                                var Q = (65535 & I) + y;
                                E + p >= B && (B = (O = this.ensureBuffer(E + p)).length);
                                for (var v = 0; v < p; ++v,
                                ++E)
                                    O[E] = O[E - Q]
                            }
                        }
                    } else {
                        var b, x = this.bytes, S = this.bytesPos;
                        "undefined" == typeof (b = x[S++]) && i("Bad block header in flate stream");
                        var k = b;
                        "undefined" == typeof (b = x[S++]) && i("Bad block header in flate stream"),
                        k |= b << 8,
                        "undefined" == typeof (b = x[S++]) && i("Bad block header in flate stream");
                        var q = b;
                        "undefined" == typeof (b = x[S++]) && i("Bad block header in flate stream"),
                        (q |= b << 8) != (65535 & ~k) && i("Bad uncompressed block length in flate stream"),
                        this.codeBuf = 0,
                        this.codeSize = 0;
                        var T = this.bufferLength
                          , O = this.ensureBuffer(T + k)
                          , D = T + k;
                        this.bufferLength = D;
                        for (var F = T; F < D; ++F) {
                            if ("undefined" == typeof (b = x[S++])) {
                                this.eof = !0;
                                break
                            }
                            O[F] = b
                        }
                        this.bytesPos = S
                    }
                }
                ,
                s
            }
            function i(t) {
                throw new Error(t)
            }
            function s(t) {
                var e = 0
                  , n = t[e++]
                  , r = t[e++];
                -1 != n && -1 != r || i("Invalid header in flate stream"),
                8 != (15 & n) && i("Unknown compression method in flate stream"),
                ((n << 8) + r) % 31 != 0 && i("Bad FCHECK in flate stream"),
                32 & r && i("FDICT bit set in flate stream"),
                this.bytes = t,
                this.bytesPos = 2,
                this.codeSize = 0,
                this.codeBuf = 0,
                a.call(this)
            }
        }();
        !function(t) {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            "undefined" === typeof t.btoa && (t.btoa = function(t) {
                var n, r, o, i, a, s = 0, A = 0, l = "", c = [];
                if (!t)
                    return t;
                do {
                    n = (a = t.charCodeAt(s++) << 16 | t.charCodeAt(s++) << 8 | t.charCodeAt(s++)) >> 18 & 63,
                    r = a >> 12 & 63,
                    o = a >> 6 & 63,
                    i = 63 & a,
                    c[A++] = e.charAt(n) + e.charAt(r) + e.charAt(o) + e.charAt(i)
                } while (s < t.length);l = c.join("");
                var u = t.length % 3;
                return (u ? l.slice(0, u - 3) : l) + "===".slice(u || 3)
            }
            ),
            "undefined" === typeof t.atob && (t.atob = function(t) {
                var n, r, o, i, a, s, A = 0, l = 0, c = [];
                if (!t)
                    return t;
                t += "";
                do {
                    n = (s = e.indexOf(t.charAt(A++)) << 18 | e.indexOf(t.charAt(A++)) << 12 | (i = e.indexOf(t.charAt(A++))) << 6 | (a = e.indexOf(t.charAt(A++)))) >> 16 & 255,
                    r = s >> 8 & 255,
                    o = 255 & s,
                    c[l++] = 64 == i ? String.fromCharCode(n) : 64 == a ? String.fromCharCode(n, r) : String.fromCharCode(n, r, o)
                } while (A < t.length);return c.join("")
            }
            ),
            Array.prototype.map || (Array.prototype.map = function(t) {
                if (void 0 === this || null === this || "function" !== typeof t)
                    throw new TypeError;
                for (var e = Object(this), n = e.length >>> 0, r = new Array(n), o = arguments.length > 1 ? arguments[1] : void 0, i = 0; i < n; i++)
                    i in e && (r[i] = t.call(o, e[i], i, e));
                return r
            }
            ),
            Array.isArray || (Array.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ),
            Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
                "use strict";
                if (void 0 === this || null === this || "function" !== typeof t)
                    throw new TypeError;
                for (var n = Object(this), r = n.length >>> 0, o = 0; o < r; o++)
                    o in n && t.call(e, n[o], o, n)
            }
            ),
            Object.keys || (Object.keys = function() {
                "use strict";
                var t = Object.prototype.hasOwnProperty
                  , e = !{
                    toString: null
                }.propertyIsEnumerable("toString")
                  , n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
                  , r = n.length;
                return function(o) {
                    if ("object" !== typeof o && ("function" !== typeof o || null === o))
                        throw new TypeError;
                    var i, a, s = [];
                    for (i in o)
                        t.call(o, i) && s.push(i);
                    if (e)
                        for (a = 0; a < r; a++)
                            t.call(o, n[a]) && s.push(n[a]);
                    return s
                }
            }()),
            String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            }
            ),
            String.prototype.trimLeft || (String.prototype.trimLeft = function() {
                return this.replace(/^\s+/g, "")
            }
            ),
            String.prototype.trimRight || (String.prototype.trimRight = function() {
                return this.replace(/\s+$/g, "")
            }
            )
        }("undefined" !== typeof self && self || "undefined" !== typeof window && window || this),
        t.exports = o
    },
    4443: function(t, e, n) {
        "use strict";
        (function(t, r) {
            var o, i, a, s = n(21), A = n(27), l = n(51), c = n(22), u = n(31), f = n(1892), g = n(813), d = n(44), h = n(849), p = n(1894), w = n(110), C = n(38), m = ((o = {})[h.a.LOW] = 1,
            o[h.a.MEDIUM] = 4,
            o[h.a.HIGH] = 7,
            o), B = ((i = {})[h.a.LOW] = "Small",
            i[h.a.MEDIUM] = "Medium",
            i[h.a.HIGH] = "Large",
            i[h.a.VECTOR] = "Vector",
            i), E = ((a = {})[h.a.LOW] = "JPG",
            a[h.a.MEDIUM] = "JPG",
            a[h.a.HIGH] = "JPG",
            a[h.a.VECTOR] = "PDF",
            a), I = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.d(n, e),
                n.prototype.start = function(t, n) {
                    var r = this;
                    this.additionalFileName = n,
                    t = t ? u.n(t) : null,
                    g.d(t);
                    var o = {
                        caption: "Export image as",
                        upgradePlanTextOption: "in higher resolution"
                    };
                    setTimeout(function() {
                        var t = v(g.a());
                        r.qualityModal = Object(d.a)().show(Object(p.a)({
                            enableCloseByBackground: !1,
                            showLockLayer: !1,
                            config: o,
                            qualityOptions: t,
                            downloadClickListener: function(t) {
                                r.quality = t,
                                g.c.remove(n),
                                e.prototype.start.call(r)
                            }
                        }));
                        var n = function(t) {
                            r.qualityModal.controller.params.qualityOptions = v(t),
                            r.qualityModal.controller.$scope.safeApply()
                        };
                        r.qualityModal.canceled.addOnce(function() {
                            g.b(),
                            g.c.remove(n)
                        }),
                        g.c.add(n)
                    }, 10)
                }
                ,
                n.prototype.getImage = function(e) {
                    var n = this;
                    return g.d(e ? u.n(e) : null),
                    new Promise(function(e, r) {
                        n.quality = h.a.LOW,
                        n.downloadLinkDeferred = t.Deferred(),
                        n.makeSnapshots({}, void 0, !1),
                        n.downloadLinkDeferred.done(function(t) {
                            return e(t.urlOrBlob)
                        }).fail(r)
                    }
                    )
                }
                ,
                n.prototype.getExportData = function() {
                    g.b();
                    var t = g.a()
                      , e = {
                        quality: this.quality,
                        viewports: [t]
                    };
                    return this.quality !== h.a.VECTOR && (e.scales = [y(t) * Q(m[this.quality])]),
                    e
                }
                ,
                n.prototype.closeModal = function() {
                    this.qualityModal && this.qualityModal.controller.submit()
                }
                ,
                n.prototype.dataUrlsToBlob = function(t) {
                    return l.d(t[0])
                }
                ,
                n.prototype.resolveDownloadLinkDeferred = function(t, n) {
                    void 0 === n && (n = !0),
                    n && A.Fh(this.quality),
                    e.prototype.resolveDownloadLinkDeferred.call(this, t)
                }
                ,
                n.prototype.getFileName = function() {
                    var t = e.prototype.getFileName.call(this);
                    return this.additionalFileName && (t += " - " + this.additionalFileName),
                    t
                }
                ,
                n.prototype.getFileExt = function() {
                    return this.quality === h.a.VECTOR ? ".pdf" : ".jpg"
                }
                ,
                n.prototype.getErrorText = function() {
                    return "Sorry, something went wrong while generating the image"
                }
                ,
                n
            }(f.a);
            function y(t) {
                var e = t.width * t.height / 1e6;
                return 1 / Math.sqrt(e)
            }
            function Q(t) {
                return c.pixiCanvas.pixelRatio > 1 && t > 2 ? t / 2 : t
            }
            function v(t) {
                var e, n = Object(C.a)().currentBoard.hasFeature(w.a.HIGH_QUALITY_EXPORT), o = r.safari || r.ios || r.msedge || r.msie;
                return (e = {})[h.a.LOW] = {
                    caption: B[h.a.LOW],
                    extension: E[h.a.LOW],
                    disabled: o,
                    size: b(t, h.a.LOW)
                },
                e[h.a.MEDIUM] = {
                    caption: B[h.a.MEDIUM],
                    extension: E[h.a.MEDIUM],
                    disabled: o || !n || r.mobile,
                    size: b(t, h.a.MEDIUM)
                },
                e[h.a.HIGH] = {
                    caption: B[h.a.HIGH],
                    extension: E[h.a.HIGH],
                    disabled: o || !n || r.mobile,
                    size: b(t, h.a.HIGH)
                },
                e[h.a.VECTOR] = {
                    caption: B[h.a.VECTOR],
                    extension: E[h.a.VECTOR],
                    disabled: !n,
                    size: "\u221e"
                },
                e
            }
            function b(t, e) {
                var n = c.pixiCanvas.pixelRatio
                  , r = y(t) * Q(m[e]) * n;
                return (t.width * r | 0) + "\xd7" + (t.height * r | 0) + " px"
            }
            e.a = I
        }
        ).call(this, n(35), n(0))
    },
    4444: function(t, e, n) {
        "use strict";
        var r = n(26)
          , o = n.n(r)
          , i = n(22)
          , a = n(407)
          , s = n(133)
          , A = n(1295)
          , l = n(51)
          , c = n(100)
          , u = n(1788)
          , f = n(541)
          , g = a.b()
          , d = s.b()
          , h = function() {
            function t() {}
            return t.prototype.start = function() {
                return this.makeSnapshots()
            }
            ,
            t.prototype.getExportData = function() {
                switch (Object(l.g)("previewType")) {
                case "widget":
                    return this.getExportDataForWidget(Object(l.g)("widgetId"));
                case "area":
                    return this.getExportDataForRect(this.getNumericParam("minLeft"), this.getNumericParam("minTop"), this.getNumericParam("maxRight"), this.getNumericParam("maxBottom"));
                default:
                    return this.getExportDataForBoard()
                }
            }
            ,
            t.prototype.getExportDataForBoard = function() {
                var t = 0
                  , e = 0
                  , n = -Number.MAX_VALUE
                  , r = -Number.MAX_VALUE
                  , o = d().framesList.items;
                return i.widgetController.existingWidgets.concat(o).forEach(function(o) {
                    t = o.bounds.x < t ? o.bounds.x : t,
                    e = o.bounds.y < e ? o.bounds.y : e;
                    var i = o.bounds.x + o.bounds.width
                      , a = o.bounds.y + o.bounds.height;
                    n = i > n ? i : n,
                    r = a > r ? a : r
                }),
                this.getExportDataForRect(t - 200, e - 200, n + 200, r + 200)
            }
            ,
            t.prototype.getExportDataForWidget = function(e) {
                var n = this.getNumericParam("viewportWidth") || t.defaultWidth
                  , r = this.getNumericParam("viewportHeight") || t.defaultHeight
                  , o = i.objectsRegistry.getObjectById(c.a.fromString(String(e)))
                  , a = Math.round(o.bounds.x + o.bounds.width / 2 - n / 2)
                  , s = Math.round(o.bounds.y + o.bounds.height / 2 - r / 2)
                  , A = Math.round(o.bounds.x + o.bounds.width / 2 + n / 2)
                  , l = Math.round(o.bounds.y + o.bounds.height / 2 + r / 2)
                  , g = this.getExportDataForRect(a, s, A, l);
                return Object(f.c)(o) && (g.forcedIcon = Object(u.b)(o.color, o.resolved)),
                g
            }
            ,
            t.prototype.getExportDataForRect = function(t, e, n, r) {
                var i = [new o.a.Rectangle(t,e,n - t,r - e)]
                  , a = g().getView();
                return {
                    viewports: i,
                    startView: new o.a.Rectangle(a.x - i[0].x,a.y - i[0].y,a.width,a.height),
                    forcedIcon: ""
                }
            }
            ,
            t.prototype.makeJpg = function(t) {
                var e = this.getNumericParam("screenWidth") || t.viewports[0].width
                  , n = this.getNumericParam("screenHeight") || t.viewports[0].height;
                return A.b(t.viewports, t.viewports.map(function(t) {
                    return e / t.width
                }), "image/jpeg", function(r, i, a) {
                    if (r.textureBuffer.context.save(),
                    r.textureBuffer.context.globalCompositeOperation = "destination-over",
                    r.textureBuffer.context.fillStyle = "#F2F2F2",
                    r.textureBuffer.context.fillRect(0, 0, i, a),
                    r.textureBuffer.context.restore(),
                    t.forcedIcon) {
                        var s = new o.a.Sprite(o.a.Texture.fromImage(t.forcedIcon));
                        s.anchor.x = .5,
                        s.anchor.y = 1,
                        r.textureBuffer.context.save(),
                        r.render(s, (new o.a.Matrix).translate(e / 2, n / 2), !1),
                        r.textureBuffer.context.restore()
                    }
                }).then(function(t) {
                    return t[0].replace(/^data:image\/\w+;base64,/, "")
                })
            }
            ,
            t.prototype.makeSnapshots = function() {
                var t = this.getExportData();
                switch (Object(l.g)("exportFormat")) {
                case "jpg":
                    return this.makeJpg(t);
                default:
                    return A.d(t.viewports, t.startView, !0).then(function(t) {
                        return t[0]
                    })
                }
            }
            ,
            t.prototype.getNumericParam = function(t) {
                return Number(String(Object(l.g)(t)))
            }
            ,
            t.defaultWidth = 1200,
            t.defaultHeight = 600,
            t
        }();
        e.a = h
    },
    4445: function(t, e, n) {
        "use strict";
        var r = n(21)
          , o = n(367)
          , i = n(423)
          , a = n(45)
          , s = n(43)
          , A = n(53)
          , l = n(175)
          , c = n(57);
        e.a = function(t) {
            return void 0 === t && (t = {}),
            a.a(s.a.EXPORT_EMPTY_FRAMES_WARNING, o.a, i.a(), r.a({
                iconURL: n(4446),
                caption: "Export PDF",
                headerColorClass: "primary",
                text: "To export your board as a PDF, you need to create at least one frame. Each frame will become a separate page in the exported PDF document.",
                submitButtonCaption: "Create a frame",
                submitCallback: function() {
                    Object(A.a)().activateToolbarPlugin(Object(l.a)().getPluginExtensionPoints(c.a.FRAMES).toolBar)
                },
                showNewStyleForButtons: !0
            }, t))
        }
    },
    4446: function(t, e, n) {
        t.exports = n.p + "src/lazy-modules/board/lazy-modules/export/modals/exportemptyframeswarning/frames.dfec00.png"
    },
    450: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return l
        });
        var r = n(30)
          , o = n(128)
          , i = n(25)
          , a = n(148)
          , s = n(521)
          , A = n(1028);
        function l() {
            return n(1027),
            Object(i.b)().directive("rtbRadiobutton", c),
            Object(i.b)().component("rtbRadioButtonReact", Object(a.b)(s.a, ["className", "isDisabled", "name", "checked", "value", "label", "tooltipText", "onChange"])),
            A
        }
        function c() {
            return Object(r.a)({
                restrict: "E",
                template: A,
                scope: {
                    name: "=",
                    value: "=",
                    model: "=",
                    label: "=",
                    checked: "=",
                    infoTextKey: "=",
                    isDisabled: "=?",
                    onClick: "&"
                },
                link: function(t) {
                    t.id = o.b()
                }
            })
        }
    },
    5144: function(t, e, n) {
        "use strict";
        var r = n(22)
          , o = n(34)
          , i = n(54)
          , a = n(71)
          , s = n(739)
          , A = function() {
            function t() {}
            return t.getCSV = function(e) {
                switch (e.widgetType) {
                case o.a.TEXT:
                case o.a.SHAPE:
                case o.a.STICKER:
                    return t.getTextCSV(e);
                case o.a.PREVIEW:
                    return t.getPreviewCSV(e);
                case o.a.JIRACARD:
                    return t.getJiraCardCSV(e);
                case o.a.RALLYCARD:
                    return t.getRallyCSV(e);
                case o.a.CARD:
                    window._JIRA= window._JIRA || {};
                    window._JIRA[e.box.widgetId] = e.data['ns:jiraCard'];
                    console.log(window._JIRA);
                    return t.getCardCSV(e)
                }
                return []
            }
            ,
            t.getTextCSV = function(e) {
                var n = t.joinText(t.processText(a.h(i.c(e.text, " ").trim())))
                  , r = t.joinText(e.getHyperlinks().map(t.processText))
                  , o = t.joinText(e.tags.map(function(e) {
                    return t.processText(e.text)
                }));
                return n || r || o ? [n, r, o] : []
            }
            ,
            t.getPreviewCSV = function(e) {
                var n = t.processText(e.title)
                  , r = t.processText(e.url);
                return n || r ? [n, r] : []
            }
            ,
            t.getJiraCardCSV = function(e) {
                var n = t.processText(e.issueKey + " " + e.summary)
                  , r = t.processText(e.externalUrl());
                return n || r ? [n, r] : []
            }
            ,
            t.getRallyCSV = function(e) {
                var n = t.processText(e.rallFormattedID + " " + e.rallyName)
                  , r = t.processText(e.externalUrl());
                return n || r ? [n, r] : []
            }
            ,
            t.processText = function(t) {
                return t && (t = s.escape(t),
                t = s.toText(t)),
                t
            }
            ,
            t.joinText = function(t) {
                var e = Array.isArray(t) ? t.join(", ") : t;
                return e ? '"' + e + '"' : ""
            }
            ,
            t.getCardCSV = function(e) {
                var n = t.joinText(t.processText(a.h(i.c(e.getText(), " ").trim())))
                  , r = t.joinText(e.getHyperlinks().map(t.processText))
                  , o = t.joinText(e.tags.map(function(e) {
                    return t.processText(e.text)
                }))
                  , s = e.getExtensionsForCSV();
                return (n || r || o ? [n, r, o] : []).concat(s)
            }
            ,
            t
        }()
          , l = n(284)
          , c = n(217)
          , u = function() {
            function t() {}
            return t.prototype.getViewportCSV = function(t) {
                return this.getCSVAsStr(this.prepareData(this.getBoundsData(t, [])))
            }
            ,
            t.prototype.getWidgetsCSV = function(t) {
                return this.getCSVAsStr(this.prepareData(this.getWidgetsData(t, [])))
            }
            ,
            t.prototype.getBoundsData = function(t, e) {
                return this.getWidgetsData(r.quadTree.getIntersectedObjects(t, l.a.TOUCH), e, t)
            }
            ,
            t.prototype.getWidgetsData = function(t, e, n) {
                var r = this;
                void 0 === e && (e = []),
                void 0 === n && (n = null);
                var i = []
                  , a = []
                  , l = [];
                return t.filter(function(t) {
                    return !e.includes(t)
                }).forEach(function(t) {
                    var e = t.widgetType;
                    e === o.a.FRAME || c.a.types.includes(e) ? a.push(t) : s.TYPES.includes(e) && l.push(t)
                }),
                this.sortWidgets(a, function(t) {
                    if (e.push(t),
                    !n || t.bounds.equals(n) || !t.bounds.containsRect(n)) {
                        var o = r.getBoundsData(t.bounds, e);
                        o.length && i.push.apply(i, [[t.text]].concat(o, [[]]))
                    }
                }),
                this.sortWidgets(l.filter(function(t) {
                    return !e.includes(t)
                }), function(t) {
                    var n = A.getCSV(t);
                    n.length && i.push(n),
                    e.push(t)
                }),
                i
            }
            ,
            t.prototype.sortWidgets = function(t, e) {
                var n = {}
                  , r = function(t, e) {
                    return parseFloat(t) - parseFloat(e)
                };
                t.forEach(function(t) {
                    var e = t.x - t.scaledWidth / 2
                      , r = t.y - t.scaledHeight / 2;
                    if (t.widgetType == o.a.TEXT) {
                        var i = t;
                        e += i.displayParams.left * t.scale,
                        r += i.displayParams.top * t.scale
                    }
                    n[r] = n[r] || {},
                    n[r][e] = n[r][e] || [],
                    n[r][e].push(t)
                }),
                Object.keys(n).sort(r).forEach(function(t) {
                    Object.keys(n[t]).sort(r).forEach(function(r) {
                        n[t][r].forEach(function(t) {
                            e(t)
                        })
                    })
                })
            }
            ,
            t.prototype.getCSVAsStr = function(e, n) {
                var r = this
                  , o = "";
                return e.forEach(function(t) {
                    o += r.joinRow(t) + "\r\n"
                }),
                t.PREFIX + encodeURIComponent(o)
            }
            ,
            t.prototype.prepareData = function(t) {
                if (t.length) {
                    var e = t[t.length - 1];
                    e && e.length || t.pop()
                }
                return t
            }
            ,
            t.prototype.joinRow = function(t, e) {
                for (var n = t.length, r = [], o = !1; n--; )
                    t[n] ? (r[n] = t[n],
                    o = !0) : o && (r[n] = "");
                return r.join(e)
            }
            ,
            t.PREFIX = "data:application/csv;charset=utf-8,\ufeff",
            t
        }();
        e.a = u
    },
    588: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(50)
              , o = function() {
                function e() {}
                return e.start = function(e, n, r) {
                    var o = this;
                    void 0 === n && (n = function() {}
                    ),
                    void 0 === r && (r = function() {}
                    ),
                    t.when(e).then(function(t) {
                        o.downloadFile(t),
                        n()
                    }, r)
                }
                ,
                e.downloadFile = function(t) {
                    var e, n, o = t.attrs || {}, i = t.urlOrBlob instanceof Blob, a = window.URL || window.webkitURL || window, s = o.download || "download";
                    i ? (e = a.createObjectURL(t.urlOrBlob),
                    n = "download-link-help") : (e = t.urlOrBlob,
                    n = "_blank"),
                    r.l(e).download(s, n),
                    i && (window.navigator.msSaveOrOpenBlob && window.navigator.msSaveOrOpenBlob(t.urlOrBlob, s),
                    setTimeout(function() {
                        return a.revokeObjectURL(e)
                    }, 1e4))
                }
                ,
                e
            }();
            e.a = o
        }
        ).call(this, n(35))
    },
    849: function(t, e, n) {
        "use strict";
        var r;
        !function(t) {
            t[t.LOW = 1] = "LOW",
            t[t.MEDIUM = 2] = "MEDIUM",
            t[t.HIGH = 3] = "HIGH",
            t[t.VECTOR = 4] = "VECTOR"
        }(r || (r = {})),
        e.a = r
    }
}]);
//# sourceMappingURL=BoardExport.ce9f9f9930e2df95efd6.js.map
