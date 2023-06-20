/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscolumns-cssgradients-cssgrid_cssgridlegacy-flexbox-fontface-mediaqueries-svg-svgasimg-svgclippaths-svgfilters-webp-setclasses !*/ !function(e, t, n) {
    function r(e, t) {
        return typeof e === t;
    }
    function o() {
        var e, t, n, o, i, s, a;
        for(var l in b)if (b.hasOwnProperty(l)) {
            if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for(n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase());
            for(o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"));
        }
    }
    function i(e) {
        var t = T.className, n = Modernizr._config.classPrefix || "";
        if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? T.className.baseVal = t : T.className = t);
    }
    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }
    function a(e, t) {
        if ("object" == typeof e) for(var n in e)B(e, n) && a(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."), o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([
                (t && 0 != t ? "" : "no-") + r.join("-")
            ]), Modernizr._trigger(e, t);
        }
        return Modernizr;
    }
    function l() {
        var e = t.body;
        return e || (e = s(x ? "svg" : "body"), e.fake = !0), e;
    }
    function u(e, n, r, o) {
        var i, a, u, f, c = "modernizr", A = s("div"), d = l();
        if (parseInt(r, 10)) for(; r--;)u = s("div"), u.id = o ? o[r] : c + (r + 1), A.appendChild(u);
        return i = s("style"), i.type = "text/css", i.id = "s" + c, (d.fake ? d : A).appendChild(i), d.appendChild(A), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), A.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", f = T.style.overflow, T.style.overflow = "hidden", T.appendChild(d)), a = n(A, e), d.fake ? (d.parentNode.removeChild(d), T.style.overflow = f, T.offsetHeight) : A.parentNode.removeChild(A), !!a;
    }
    function f(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function c(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase();
        }).replace(/^-/, "");
    }
    function A(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    function d(e, t, n) {
        var o;
        for(var i in e)if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? A(o, n || t) : o);
        return !1;
    }
    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }
    function m(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o;
    }
    function g(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for(; o--;)if (e.CSS.supports(p(t[o]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for(var i = []; o--;)i.push("(" + p(t[o]) + ":" + r + ")");
            return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position");
            });
        }
        return n;
    }
    function h(e, t, o, i) {
        function a() {
            u && (delete V.style, delete V.modElem);
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var l = g(e, o);
            if (!r(l, "undefined")) return l;
        }
        for(var u, A, d, p, m, h = [
            "modernizr",
            "tspan",
            "samp"
        ]; !V.style && h.length;)u = !0, V.modElem = s(h.shift()), V.style = V.modElem.style;
        for(d = e.length, A = 0; d > A; A++)if (p = e[A], m = V.style[p], f(p, "-") && (p = c(p)), V.style[p] !== n) {
            if (i || r(o, "undefined")) return a(), "pfx" == t ? p : !0;
            try {
                V.style[p] = o;
            } catch (v) {}
            if (V.style[p] != m) return a(), "pfx" == t ? p : !0;
        }
        return a(), !1;
    }
    function v(e, t, n, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + P.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(a, t, o, i) : (a = (e + " " + U.join(s + " ") + s).split(" "), d(a, t, n));
    }
    function w(e, t, r) {
        return v(e, n, n, t, r);
    }
    var y = [], b = [], S = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e]);
            }, 0);
        },
        addTest: function(e, t, n) {
            b.push({
                name: e,
                fn: t,
                options: n
            });
        },
        addAsyncTest: function(e) {
            b.push({
                name: null,
                fn: e
            });
        }
    }, Modernizr = function() {};
    Modernizr.prototype = S, Modernizr = new Modernizr, Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("svgfilters", function() {
        var t = !1;
        try {
            t = "SVGFEColorMatrixElement" in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
        } catch (n) {}
        return t;
    });
    var C = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(C.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
    });
    var T = t.documentElement, _ = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [
        "",
        ""
    ];
    S._prefixes = _;
    var x = "svg" === T.nodeName.toLowerCase();
    Modernizr.addTest("cssgradients", function() {
        for(var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", o = 0, i = _.length - 1; i > o; o++)e = 0 === o ? "to " : "", r += t + _[o] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var a = s("a"), l = a.style;
        return l.cssText = r, ("" + l.backgroundImage).indexOf("gradient") > -1;
    });
    var B;
    !function() {
        var e = {}.hasOwnProperty;
        B = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined");
        } : function(t, n) {
            return e.call(t, n);
        };
    }(), S._l = {}, S.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e]);
        }, 0);
    }, S._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for(e = 0; e < n.length; e++)(r = n[e])(t);
            }, 0), delete this._l[e];
        }
    }, Modernizr._q.push(function() {
        S.addTest = a;
    }), Modernizr.addAsyncTest(function() {
        function e(e, t, n) {
            function r(t) {
                var r = t && "load" === t.type ? 1 == o.width : !1, i = "webp" === e;
                a(e, i && r ? new Boolean(r) : r), n && n(t);
            }
            var o = new Image;
            o.onerror = r, o.onload = r, o.src = t;
        }
        var t = [
            {
                uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                name: "webp"
            },
            {
                uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                name: "webp.alpha"
            },
            {
                uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                name: "webp.animation"
            },
            {
                uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                name: "webp.lossless"
            }
        ], n = t.shift();
        e(n.name, n.uri, function(n) {
            if (n && "load" === n.type) for(var r = 0; r < t.length; r++)e(t[r].name, t[r].uri);
        });
    }), Modernizr.addTest("svgasimg", t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
    var E = S.testStyles = u, R = function() {
        var e = navigator.userAgent, t = e.match(/w(eb)?osbrowser/gi), n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
        return t || n;
    }();
    R ? Modernizr.addTest("fontface", !1) : E('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"), o = r.sheet || r.styleSheet, i = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "", s = /src/i.test(i) && 0 === i.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", s);
    });
    var k = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1;
        } : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
            }), n;
        };
    }();
    S.mq = k, Modernizr.addTest("mediaqueries", k("only all"));
    var Q = "Moz O ms Webkit", P = S._config.usePrefixes ? Q.split(" ") : [];
    S._cssomPrefixes = P;
    var U = S._config.usePrefixes ? Q.toLowerCase().split(" ") : [];
    S._domPrefixes = U;
    var G = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete G.elem;
    });
    var V = {
        style: G.elem.style
    };
    Modernizr._q.unshift(function() {
        delete V.style;
    }), S.testAllProps = v, S.testAllProps = w, Modernizr.addTest("cssgridlegacy", w("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", w("grid-template-rows", "none", !0)), function() {
        Modernizr.addTest("csscolumns", function() {
            var e = !1, t = w("columnCount");
            try {
                e = !!t, e && (e = new Boolean(e));
            } catch (n) {}
            return e;
        });
        for(var e, t, n = [
            "Width",
            "Span",
            "Fill",
            "Gap",
            "Rule",
            "RuleColor",
            "RuleStyle",
            "RuleWidth",
            "BreakBefore",
            "BreakAfter",
            "BreakInside"
        ], r = 0; r < n.length; r++)e = n[r].toLowerCase(), t = w("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || w(n[r])), Modernizr.addTest("csscolumns." + e, t);
    }(), Modernizr.addTest("flexbox", w("flexBasis", "1px", !0)), o(), i(y), delete S.addTest, delete S.addAsyncTest;
    for(var z = 0; z < Modernizr._q.length; z++)Modernizr._q[z]();
    e.Modernizr = Modernizr;
}(window, document);

//# sourceMappingURL=index.6dfb5952.js.map
