import {
  __commonJS,
  require_react
} from "./chunk-BHZAVQOK.js";

// node_modules/react-awesome-button/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-awesome-button/dist/index.js"(exports, module) {
    !function webpackUniversalModuleDefinition(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports["react-awesome-button"] = t(require_react()) : e["react-awesome-button"] = t(e.React);
    }(exports, (e) => (() => {
      var t = { 967: function(e2) {
        !function webpackUniversalModuleDefinition(t2, n2) {
          e2.exports = n2();
        }(0, () => (() => {
          "use strict";
          var e3 = { d: (t3, n2) => {
            for (var c2 in n2)
              e3.o(n2, c2) && !e3.o(t3, c2) && Object.defineProperty(t3, c2, { enumerable: true, get: n2[c2] });
          }, o: (e4, t3) => Object.prototype.hasOwnProperty.call(e4, t3), r: (e4) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
          } }, t2 = {};
          e3.r(t2), e3.d(t2, { beforeCssLayout: () => beforeCssLayout, beforeFutureCssLayout: () => beforeFutureCssLayout, frameThrower: () => frameThrower, onceAnimationEnd: () => onceAnimationEnd, onceNextCssLayout: () => onceNextCssLayout, onceTransitionEnd: () => onceTransitionEnd, recursiveAnimationFrame: () => recursiveAnimationFrame, setCssEndEvent: () => setCssEndEvent });
          var recursiveAnimationFrame = function(e4, t3) {
            window && e4 && Number.isInteger(e4) && e4 > 0 ? window.requestAnimationFrame(function() {
              recursiveAnimationFrame(e4 - 1, t3);
            }) : t3();
          };
          function setCssEndEvent(e4, t3, n2) {
            var c2 = void 0 === n2 ? {} : n2, r = c2.tolerance, o = void 0 === r ? 0 : r, i = c2.propertyName;
            return new Promise(function(n3) {
              var c3;
              if (e4) {
                var r2 = null, l = t3.charAt(0).toUpperCase() + t3.slice(1), a = 0;
                void 0 !== e4.style["Webkit".concat(l)] && (r2 = "webkit".concat(l, "End")), void 0 !== (null === (c3 = e4.style) || void 0 === c3 ? void 0 : c3.OTransition) && (r2 = "o".concat(t3, "End")), void 0 !== e4.style[t3] && (r2 = "".concat(t3, "end")), e4.clearCssEndEvent && e4.clearCssEndEvent(), e4.clearCssEndEvent = function() {
                  e4.removeEventListener(r2, end);
                }, e4.addEventListener(r2, end);
              } else
                n3(false);
              function end(t4) {
                if ((t4.srcElement || t4.target) === e4) {
                  if (a >= o) {
                    if (i && i !== t4.propertyName)
                      return;
                    e4.removeEventListener(r2, end), n3(t4);
                  }
                  a += 1;
                }
              }
            });
          }
          function beforeCssLayout(e4) {
            "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.requestAnimationFrame) || e4(), window.requestAnimationFrame(e4);
          }
          function beforeFutureCssLayout(e4, t3) {
            "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.requestAnimationFrame) || t3(), recursiveAnimationFrame(e4 + 1, t3);
          }
          function frameThrower(e4) {
            return new Promise(function(t3) {
              beforeFutureCssLayout(e4, t3);
            });
          }
          function onceNextCssLayout() {
            return new Promise(function(e4) {
              recursiveAnimationFrame(2, e4);
            });
          }
          function onceTransitionEnd(e4, t3) {
            return void 0 === t3 && (t3 = {}), new Promise(function(n2) {
              setCssEndEvent(e4, "transition", t3).then(n2);
            });
          }
          function onceAnimationEnd(e4, t3) {
            return void 0 === t3 && (t3 = {}), new Promise(function(n2) {
              setCssEndEvent(e4, "animation", t3).then(n2);
            });
          }
          return t2;
        })());
      }, 251: (e2, t2, n2) => {
        "use strict";
        var c2 = n2(787), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = c2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: true, ref: true, __self: true, __source: true };
        function q(e3, t3, n3) {
          var c3, o2 = {}, u = null, s = null;
          for (c3 in void 0 !== n3 && (u = "" + n3), void 0 !== t3.key && (u = "" + t3.key), void 0 !== t3.ref && (s = t3.ref), t3)
            i.call(t3, c3) && !a.hasOwnProperty(c3) && (o2[c3] = t3[c3]);
          if (e3 && e3.defaultProps)
            for (c3 in t3 = e3.defaultProps)
              void 0 === o2[c3] && (o2[c3] = t3[c3]);
          return { $$typeof: r, type: e3, key: u, ref: s, props: o2, _owner: l.current };
        }
        t2.jsx = q, t2.jsxs = q;
      }, 893: (e2, t2, n2) => {
        "use strict";
        e2.exports = n2(251);
      }, 787: (t2) => {
        "use strict";
        t2.exports = e;
      } }, n = {};
      function __webpack_require__(e2) {
        var c2 = n[e2];
        if (void 0 !== c2)
          return c2.exports;
        var r = n[e2] = { exports: {} };
        return t[e2].call(r.exports, r, r.exports, __webpack_require__), r.exports;
      }
      __webpack_require__.d = (e2, t2) => {
        for (var n2 in t2)
          __webpack_require__.o(t2, n2) && !__webpack_require__.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
      }, __webpack_require__.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), __webpack_require__.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var c = {};
      return (() => {
        "use strict";
        __webpack_require__.r(c), __webpack_require__.d(c, { AwesomeButton: () => components_AwesomeButton, AwesomeButtonProgress: () => components_AwesomeButtonProgress, AwesomeButtonSocial: () => components_AwesomeButtonSocial });
        var e2 = __webpack_require__(893), t2 = __webpack_require__(787), n2 = __webpack_require__(967), r = ["middle", "left", "right"];
        function serialize(e3, t3) {
          return void 0 === t3 && (t3 = "&"), Object.entries(e3).map(function(e4) {
            var t4 = e4[0], n3 = e4[1];
            return "".concat(t4, "=").concat(n3);
          }).join(t3);
        }
        function classToModules(e3, t3) {
          if (void 0 === e3 && (e3 = []), !t3)
            return e3.join(" ").trim();
          for (var n3 = [], c2 = e3.length; c2--; )
            t3[e3[c2]] && n3.push(t3[e3[c2]]);
          return n3.join(" ").trim();
        }
        function getClassName(e3, t3) {
          return void 0 === e3 && (e3 = ""), t3 && t3[e3] || e3;
        }
        function toggleMoveClasses(e3) {
          var t3, n3 = e3.element, c2 = e3.root, o2 = e3.cssModule, i2 = void 0 === o2 ? null : o2, l2 = e3.state, a2 = void 0 === l2 ? null : l2;
          if (!(null === (t3 = null == n3 ? void 0 : n3.classList) || void 0 === t3 ? void 0 : t3.remove))
            return false;
          if (!a2)
            return [classToModules(["".concat(c2, "--").concat(r[0])], i2), classToModules(["".concat(c2, "--").concat(r[1])], i2), classToModules(["".concat(c2, "--").concat(r[2])], i2)].forEach(function(e4) {
              e4 && n3.classList.remove(e4);
            }), false;
          for (var u2 = r.filter(function(e4) {
            return e4 !== a2;
          }), s2 = u2.length; s2--; ) {
            var d2 = classToModules(["".concat(c2, "--").concat(u2[s2])], i2);
            d2 && n3.classList.remove(d2);
          }
          var v = classToModules(["".concat(c2, "--").concat(a2)], i2);
          return v && n3.classList.add(v), true;
        }
        var __assign = function() {
          return __assign = Object.assign || function(e3) {
            for (var t3, n3 = 1, c2 = arguments.length; n3 < c2; n3++)
              for (var r2 in t3 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
            return e3;
          }, __assign.apply(this, arguments);
        }, o = "undefined" != typeof window, i = o && "ontouchstart" in window || o && navigator.maxTouchPoints > 0, l = t2.forwardRef(function(t3, n3) {
          return (0, e2.jsx)("a", __assign({ ref: n3 }, t3));
        }), a = t2.forwardRef(function(t3, n3) {
          return (0, e2.jsx)("button", __assign({ ref: n3 }, t3));
        });
        const components_AwesomeButton = function(c2) {
          var r2 = c2.active, u2 = void 0 !== r2 && r2, s2 = c2.after, d2 = void 0 === s2 ? null : s2, v = c2.before, f = void 0 === v ? null : v, p = c2.between, h = void 0 !== p && p, m = c2.children, w = void 0 === m ? null : m, b = c2.className, g = void 0 === b ? null : b, y = c2.containerProps, _ = void 0 === y ? {} : y, M = c2.cssModule, C = void 0 === M ? null : M, E = c2.disabled, L = void 0 !== E && E, z = c2.element, x = void 0 === z ? null : z, O = c2.extra, j = void 0 === O ? null : O, S = c2.href, k = void 0 === S ? null : S, P = c2.moveEvents, T = void 0 === P || P, R = c2.onMouseDown, N = void 0 === R ? null : R, A = c2.onMouseUp, F = void 0 === A ? null : A, H = c2.onPress, V = void 0 === H ? null : H, D = c2.onPressed, W = void 0 === D ? null : D, I = c2.onReleased, U = void 0 === I ? null : I, Y = c2.placeholder, B = void 0 === Y || Y, X = c2.ripple, G = void 0 !== X && X, $ = c2.rootElement, J = void 0 === $ ? "aws-btn" : $, K = c2.size, Q = void 0 === K ? null : K, Z = c2.style, ee = void 0 === Z ? {} : Z, te = c2.type, ne = void 0 === te ? "primary" : te, ce = c2.visible, re = void 0 === ce || ce, oe = t2.useState(null), ie = oe[0], le = oe[1], ae = t2.useRef(null), ue = t2.useRef(null), se = t2.useRef(null), de = t2.useRef(null), ve = t2.useRef(false), fe = t2.useRef(0), pe = t2.useRef(null), he = t2.useRef(0), me = x || (k ? l : a), we = { href: k }, be = t2.useMemo(function() {
            return true === B && !w || L;
          }, [B, w, L]);
          t2.useEffect(function() {
            return (null == ae ? void 0 : ae.current) && (se.current = ae.current.parentNode), function() {
              (null == pe ? void 0 : pe.current) && clearTimeout(pe.current);
            };
          }, []);
          t2.useEffect(function() {
            null !== ie && false === u2 && clearPress({ force: true });
          }, [u2]);
          var ge, clearPressCallback = function() {
            fe.current = 0, U && U(se.current);
          }, clearPress = function(e3) {
            var t3, c3 = void 0 === e3 ? {} : e3, r3 = c3.force, o2 = void 0 !== r3 && r3, i2 = c3.leave, l2 = void 0 !== i2 && i2;
            if (toggleMoveClasses({ element: se.current, root: J, cssModule: C }), true !== l2 || 0 !== fe.current) {
              var a2 = u2 && !o2 ? "".concat(J, "--active") : null;
              (null === (t3 = null == ue ? void 0 : ue.current) || void 0 === t3 ? void 0 : t3.clearCssEvent) && ue.current.clearCssEvent(), null === a2 && (null == ie ? void 0 : ie.match(/active/gim)) && (0, n2.setCssEndEvent)(ue.current, "transition", { tolerance: 1 }).then(clearPressCallback), le(a2);
            }
          }, createRipple = function(e3) {
            !function createRippleEffect(e4) {
              var t3, c3, r3 = e4.event, o2 = e4.button, i2 = e4.content, l2 = e4.className, a2 = o2.getBoundingClientRect(), u3 = window.pageYOffset || document.documentElement.scrollTop || 0, s3 = document.createElement("span"), d3 = a2.width < 50 ? 3 * a2.width : 2 * a2.width;
              r3.nativeEvent instanceof TouchEvent ? (t3 = r3.changedTouches[0].pageX, c3 = r3.changedTouches[0].pageY) : (t3 = r3.pageX, c3 = r3.pageY), s3.className = l2, s3.style.top = "-".concat(d3 / 2 - (c3 - a2.top - u3), "px"), s3.style.left = "-".concat(d3 / 2 - (t3 - a2.left), "px"), s3.style.width = "".concat(d3, "px"), s3.style.height = "".concat(d3, "px"), (0, n2.setCssEndEvent)(s3, "animation").then(function() {
                window.requestAnimationFrame(function() {
                  i2.removeChild(s3);
                });
              }), window.requestAnimationFrame(function() {
                i2.appendChild(s3);
              });
            }({ event: e3, button: ae.current, content: ue.current, className: getClassName("".concat(J, "__bubble"), C) });
          }, pressIn = function(e3) {
            true !== be && 2 !== fe.current && (fe.current = 1, (0, n2.setCssEndEvent)(ue.current, "transition", { tolerance: 1 }).then(function() {
              return W && W(e3);
            }), le("".concat(J, "--active")));
          }, pressOut = function(e3) {
            if (true !== be && 1 === fe.current) {
              if (pe.current && clearTimeout(pe.current), true === G && createRipple(e3), o && ae.current) {
                var t3 = new Event("btn-press");
                ae.current.dispatchEvent(t3);
              }
              handleAction(e3), true !== u2 ? clearPress() : fe.current = 2;
            }
          }, handleAction = function(e3) {
            se.current && V && V(e3);
          };
          return (0, e2.jsx)(me, __assign({ style: ee, className: t2.useMemo(function() {
            var e3 = [J, ne && "".concat(J, "--").concat(ne), Q && "".concat(J, "--").concat(Q), re && "".concat(J, "--visible"), h && "".concat(J, "--between"), B && !w && "".concat(J, "--placeholder") || null];
            return true === be && e3.push("".concat(J, "--disabled")), ie && e3.push(ie), g && e3.push.apply(e3, g.split(" ")), C && C["aws-btn"] ? classToModules(e3, C) : e3.join(" ").trim().replace(/[\s]+/gi, " ");
          }, [J, ne, Q, re, h, B, w, be, ie, g, C]), role: "button", ref: se }, _, we, (ge = { onClick: function(e3) {
            k && be && e3.preventDefault();
          } }, i ? (ge.onTouchStart = function(e3) {
            var t3, n3;
            N && N(e3), he.current = null === (n3 = null === (t3 = null == e3 ? void 0 : e3.changedTouches) || void 0 === t3 ? void 0 : t3[0]) || void 0 === n3 ? void 0 : n3.clientY, pressIn(e3);
          }, ge.onTouchEnd = function(e3) {
            var t3, n3;
            F && F(e3), (he.current && (null === (n3 = null === (t3 = null == e3 ? void 0 : e3.changedTouches) || void 0 === t3 ? void 0 : t3[0]) || void 0 === n3 ? void 0 : n3.clientY) ? Math.abs(he.current - e3.changedTouches[0].clientY) : 0) > ae.current.offsetHeight ? clearPress({ force: true }) : pressOut(e3);
          }, ge) : (ge.onMouseLeave = function() {
            ve.current = false, true !== u2 || 2 === fe.current ? clearPress({ leave: true }) : clearPress({ force: true });
          }, ge.onMouseDown = function(e3) {
            var t3;
            N && N(e3), 0 === (null === (t3 = null == e3 ? void 0 : e3.nativeEvent) || void 0 === t3 ? void 0 : t3.button) && pressIn(e3);
          }, ge.onMouseUp = function(e3) {
            F && F(e3), true !== be ? pressOut(e3) : e3.preventDefault();
          }, true === T ? (ge.onMouseMove = function(e3) {
            if (true !== be) {
              ve.current = true;
              var t3 = ae.current, n3 = t3.getBoundingClientRect().left, c3 = t3.offsetWidth, r3 = e3.pageX < n3 + 0.3 * c3 ? "left" : e3.pageX > n3 + 0.65 * c3 ? "right" : "middle";
              toggleMoveClasses({ element: se.current, root: J, cssModule: C, state: r3 });
            }
          }, ge) : (ge.onMouseEnter = function() {
            ve.current = true, toggleMoveClasses({ element: se.current, root: J, cssModule: C, state: "middle" });
          }, ge))), { children: (0, e2.jsxs)("span", __assign({ ref: ae, className: getClassName("".concat(J, "__wrapper"), C) }, { children: [(0, e2.jsxs)("span", __assign({ ref: ue, className: getClassName("".concat(J, "__content"), C) }, { children: [f, (0, e2.jsx)("span", __assign({ ref: de }, { children: w })), d2] })), j] })) }));
        };
        var sharer_assign = function() {
          return sharer_assign = Object.assign || function(e3) {
            for (var t3, n3 = 1, c2 = arguments.length; n3 < c2; n3++)
              for (var r2 in t3 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
            return e3;
          }, sharer_assign.apply(this, arguments);
        };
        function Sharer(e3) {
          var t3 = e3.url, n3 = e3.message, c2 = e3.title, r2 = e3.image, o2 = e3.user, i2 = e3.type, l2 = e3.phone, a2 = e3.width, u2 = e3.height, s2 = {}, d2 = {};
          switch (i2) {
            case "facebook":
              d2.u = encodeURIComponent(t3), s2.url = "https://www.facebook.com/sharer.php?".concat(serialize(d2, "&")), s2.title = "Facebook Sharer";
              break;
            case "twitter":
              d2.text = n3, d2.url = t3, s2.height = 250, s2.url = "https://twitter.com/share?".concat(serialize(d2, "&")), s2.title = "Twitter Sharer";
              break;
            case "pinterest":
              d2.url = t3, r2 && (d2.media = r2), s2.url = "https://pinterest.com/pin/create/button/?".concat(serialize(d2, "&")), s2.title = "Pinterest Sharer";
              break;
            case "google":
            case "gplus":
              d2.url = t3, s2.url = "https://plus.google.com/share?".concat(serialize(d2, "&")), s2.title = "Google+ Sharer", s2.width = 400;
              break;
            case "linkedin":
              d2.mini = true, d2.url = t3, d2.title = n3 || c2, s2.url = "https://www.linkedin.com/shareArticle?".concat(serialize(d2, "&")), s2.title = "Linkedin Sharer";
              break;
            case "reddit":
              d2.url = t3, d2.title = n3 || c2, s2.url = "https://www.reddit.com/submit?".concat(serialize(d2, "&")), s2.title = "", s2.width = 850;
              break;
            case "whatsapp":
              d2.phone = null == l2 ? void 0 : l2.replace(/\+|(|)/gim, ""), d2.title = n3 || c2, s2.url = "https://api.whatsapp.com/send?".concat(serialize(d2, "&")), s2.title = "Whatsapp Message", s2.width = 850;
              break;
            case "messenger":
              s2.url = "https://m.me/".concat(o2), s2.title = "Messenger Message", s2.width = 850;
              break;
            case "mail":
              s2.url = "mailto:".concat(t3), s2.title = "_self";
              break;
            case "instagram":
              s2.url = t3, s2.title = "_self";
              break;
            default:
              return s2;
          }
          return s2.extra = serialize(sharer_assign({ width: "".concat(s2.width || a2, "px"), height: "".concat(s2.height || u2, "px") }, function centerWindow(e4, t4) {
            if ("undefined" == typeof window)
              return { top: 0, left: 0 };
            var n4 = window.screenLeft, c3 = void 0 === n4 ? 0 : n4, r3 = window.screenTop, o3 = void 0 === r3 ? 0 : r3, i3 = window.innerWidth, l3 = window.innerHeight, a3 = i3 || (document.documentElement.clientWidth ? document.documentElement.clientWidth : 0);
            return { top: (l3 || (document.documentElement.clientHeight ? document.documentElement.clientHeight : 0)) / 2 - t4 / 2 + o3, left: a3 / 2 - e4 / 2 + c3 };
          }(s2.width || a2, s2.height || u2)), ","), s2;
        }
        var icons_assign = function() {
          return icons_assign = Object.assign || function(e3) {
            for (var t3, n3 = 1, c2 = arguments.length; n3 < c2; n3++)
              for (var r2 in t3 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
            return e3;
          }, icons_assign.apply(this, arguments);
        }, u = { youtube: "M38.1,23H11.9c-4.1,0-7.6,3.4-7.6,7.6v6.1c0,4.1,3.4,7.6,7.6,7.6h26.3c4.1,0,7.6-3.4,7.6-7.6v-6.1C45.8,26.4,42.4,23,38.1,23z M17.4,27.7h-2.5v12.2h-2.4V27.7h-2.5v-2h7.3V27.7z M24.3,39.9h-2.1v-1.2c-0.4,0.4-0.8,0.8-1.2,0.9c-0.4,0.3-0.8,0.3-1.2,0.3c-0.5,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.3-0.8-0.3-1.4v-8.6h2.1v8c0,0.3,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.6-0.3c0.3-0.2,0.4-0.3,0.7-0.6v-7.9h2.1v10.6H24.3z M31.9,37.7c0,0.8-0.2,1.4-0.5,1.7C31,39.8,30.5,40,29.9,40c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.6-0.4-0.9-0.7v0.8h-2.1V25.7h2.1v4.6c0.3-0.3,0.6-0.6,0.9-0.8c0.3-0.2,0.7-0.3,0.9-0.3c0.7,0,1.2,0.3,1.5,0.7s0.5,1.1,0.5,1.9L31.9,37.7L31.9,37.7z M39.2,34.9h-4v1.9c0,0.6,0.1,0.9,0.2,1.2c0.2,0.3,0.3,0.3,0.7,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.2-0.6,0.2-1.2v-0.5h2.2v0.5c0,1.1-0.3,1.9-0.8,2.5c-0.5,0.5-1.3,0.8-2.4,0.8c-0.9,0-1.7-0.3-2.2-0.8C33.3,38.8,33,38,33,37v-4.7c0-0.9,0.3-1.7,0.9-2.2c0.6-0.6,1.4-0.8,2.3-0.8c0.9,0,1.7,0.3,2.2,0.8c0.5,0.5,0.8,1.3,0.8,2.3V34.9z M36.1,30.9c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.9v1.1H37v-1.1c0-0.4-0.1-0.8-0.3-0.9C36.6,31.1,36.4,30.9,36.1,30.9z M28.8,30.9c-0.2,0-0.3,0-0.4,0.1c-0.2,0.1-0.3,0.2-0.4,0.3v6.5c0.2,0.2,0.3,0.3,0.5,0.3c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.4-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8v-5.4c0-0.3-0.1-0.6-0.3-0.8C29.4,31,29.1,30.9,28.8,30.9z M15.3,19.4h2.6v-6.5l3.1-9.1h-2.7L16.7,10h-0.2l-1.7-6.3h-2.7l3.2,9.5V19.4z M24.6,19.6c1.1,0,1.9-0.3,2.5-0.8s0.9-1.4,0.9-2.4v-6c0-0.8-0.3-1.6-0.9-2.2s-1.4-0.8-2.4-0.8c-1.1,0-1.9,0.3-2.5,0.8c-0.7,0.5-0.9,1.3-0.9,2.1v6c0,1,0.3,1.8,0.9,2.4C22.8,19.4,23.6,19.6,24.6,19.6z M23.7,10.3c0-0.3,0.1-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.3,0.3,0.6v6.3c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.8,0.3s-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.3-0.8L23.7,10.3L23.7,10.3z M31.6,19.5c0.4,0,0.9-0.1,1.4-0.3c0.5-0.3,0.9-0.6,1.4-1.1v1.3h2.4V7.8h-2.4v8.8c-0.3,0.3-0.4,0.4-0.8,0.6c-0.3,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6V7.8h-2.4v9.6c0,0.7,0.2,1.2,0.4,1.5C30.7,19.4,31.1,19.5,31.6,19.5z", mail: "M4.9,14L25,30.5L45.1,14v-3.7H4.9V14z M4.9,36.4l9.9-11l-9.9-8.9C4.9,16.6,4.9,36.4,4.9,36.4zM45.1,36.7L34.9,25.5L45,16.7L45.1,36.7L45.1,36.7z M25,33.7l-8.2-6.8L4.9,39.6h40.2L33.2,26.8L25,33.7z", facebook: "M31.6,44.5V25.7h8l1.3-8h-9.4v-4c0-2.7,1.3-4,4-4h4V1.5c-1.3,0-4.3,0-6.7,0c-6.7,0-9.4,4-9.4,10.7v5.4h-8v8h8v18.8L31.6,44.5L31.6,44.5z", whatsapp: "M2.5,46.6c0.6-1.9,1.2-3.6,1.8-5.4c0.6-1.7,1.1-3.5,1.8-5.2c0.3-0.9,0.2-1.5-0.2-2.3c-2.4-4.4-3.1-9.1-2.3-14c0.7-4.2,2.5-7.8,5.3-11c4.7-5.1,10.6-7.6,17.5-7.3c5.1,0.2,9.6,2.1,13.4,5.4c3.6,3.1,5.9,7,7,11.6c0.9,3.7,0.8,7.4-0.3,11.1c-1.4,4.6-4,8.5-7.8,11.4c-5.4,4.1-11.4,5.3-18,4c-2-0.4-3.9-1.1-5.6-2c-0.3-0.2-0.5-0.2-0.9-0.1c-3.4,1.1-6.7,2.2-10.1,3.2C3.7,46.2,3.2,46.4,2.5,46.6z M8.3,40.9c0.2,0,0.3-0.1,0.3-0.1c2.1-0.7,4.2-1.3,6.3-2c0.2-0.1,0.5,0,0.7,0.1c0.9,0.5,1.8,1,2.7,1.4c3.9,1.6,7.9,1.9,11.9,0.8c4.8-1.3,8.5-4.2,11-8.6c2.2-3.7,2.9-7.7,2.2-11.9C42.7,15.2,39.9,11,35.4,8c-3.9-2.6-8.3-3.5-12.9-2.7c-4,0.6-7.4,2.5-10.2,5.4c-2.4,2.5-4,5.5-4.7,8.8c-1,4.9-0.3,9.5,2.4,13.7c0.5,0.8,0.5,1.5,0.2,2.3C9.5,37.3,8.9,39.1,8.3,40.9z M36.8,29.8c0,1.7-0.9,3.1-2.5,3.9c-1.6,0.8-3.3,1-5,0.4c-1.5-0.6-3.1-1.2-4.6-1.9c-2-1-3.6-2.4-5-4c-1.6-1.8-3-3.7-4.1-5.9c-0.8-1.5-1.3-3.1-1.1-4.8c0.2-1.8,1-3.3,2.5-4.4c0.3-0.2,0.7-0.3,1.1-0.4c0.5,0,1,0,1.4,0.1c0.4,0,0.6,0.3,0.8,0.6c0.4,0.9,0.7,1.7,1,2.6c0.2,0.6,0.4,1.2,0.7,1.8c0.3,0.7,0.1,1.3-0.3,1.8c-0.4,0.5-0.8,0.9-1.2,1.3C20,21.2,20,21.6,20.2,22c1,1.9,2.3,3.5,4,4.9c1.1,0.9,2.3,1.5,3.6,2.2c0.4,0.2,0.7,0.2,1-0.2c0.6-0.7,1.3-1.4,1.9-2.1c0.4-0.5,0.6-0.6,1.1-0.3c1.5,0.8,3.1,1.6,4.6,2.4C36.8,29,36.9,29.3,36.8,29.8z", messenger: "M27.5,30l-5.4-5.7L11.7,30l11.5-12.2l5.5,5.7L39,17.8L27.5,30z M25.5,3.8c-11.6,0-21.1,8.7-21.1,19.5c0,6.1,3.1,11.6,7.9,15.2v7.4l7.2-3.9c1.9,0.5,3.9,0.8,6,0.8c11.6,0,21.1-8.7,21.1-19.5S37.1,3.8,25.5,3.8z", instagram: "M25,13.3c-5.8,0-10.6,4.7-10.6,10.6S19.1,34.6,25,34.6S35.6,29.8,35.6,24S30.8,13.3,25,13.3z M25,30.7c-3.7,0-6.8-3.1-6.8-6.8s3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8S28.7,30.7,25,30.7z M36.1,10.6c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4S34.7,10.6,36.1,10.6z M42.3,6.8c-2.2-2.2-5.2-3.4-8.7-3.4H16.4c-7.2,0-12,4.8-12,12v17c0,3.6,1.2,6.7,3.5,8.9c2.2,2.2,5.2,3.2,8.6,3.2h17c3.6,0,6.6-1.2,8.7-3.2c2.2-2.2,3.4-5.2,3.4-8.8V15.4C45.6,11.9,44.5,8.9,42.3,6.8z M42,32.6c0,2.6-0.9,4.7-2.4,6.1s-3.6,2.2-6.1,2.2h-17c-2.5,0-4.6-0.7-6.1-2.2s-2.2-3.6-2.2-6.2v-17c0-2.5,0.7-4.6,2.2-6.1C11.8,8,14,7.2,16.5,7.2h17.1c2.5,0,4.6,0.7,6.1,2.2c1.4,1.5,2.2,3.6,2.2,6v17.2H42z", twitter: "M49.3,9.1c-1.8,0.8-3.6,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.1-3.1c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C17,16.1,9.8,12.2,5,6.3c-0.8,1.4-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.3,8.1c-1.6-0.1-3.1-0.5-4.4-1.2v0.1c0,4.7,3.4,8.7,7.8,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2c1.2,3.9,4.9,6.7,9.1,6.8c-3.3,2.6-7.6,4.2-12.1,4.2c-0.8,0-1.6,0-2.3-0.1c4.3,2.8,9.5,4.4,15,4.4c18,0,27.8-14.9,27.8-27.8c0-0.4,0-0.8,0-1.3C46.4,12.7,48,11,49.3,9.1z", github: "M25,2.5C12.2,2.5,1.9,12.8,1.9,25.6c0,10.2,6.6,18.9,15.8,21.9c1.2,0.2,1.5-0.5,1.5-1.1c0-0.5,0-2.1,0-4c-6.4,1.4-7.8-3-7.8-3c-1-2.7-2.6-3.4-2.6-3.4C6.7,34.6,9,34.6,9,34.6c2.3,0.2,3.5,2.4,3.5,2.4c2.1,3.5,5.4,2.5,6.7,1.9c0.2-1.5,0.8-2.5,1.5-3.1c-5.1-0.6-10.5-2.6-10.5-11.4c0-2.5,0.9-4.6,2.4-6.2c-0.2-0.6-1-2.9,0.2-6.1c0,0,1.9-0.6,6.3,2.4c1.8-0.5,3.8-0.8,5.8-0.8s3.9,0.3,5.8,0.8c4.4-3,6.3-2.4,6.3-2.4c1.3,3.2,0.5,5.5,0.2,6.1c1.5,1.6,2.4,3.7,2.4,6.2c0,8.9-5.4,10.8-10.5,11.4c0.8,0.7,1.6,2.1,1.6,4.3c0,2.9,0,5.6,0,6.4c0,0.6,0.4,1.3,1.5,1.1C41.4,44.5,48,35.9,48,25.7C48.1,12.8,37.8,2.5,25,2.5z", linkedin: "M13.8,41.7H5.4V13.6h8.4C13.8,13.6,13.8,41.7,13.8,41.7z M44.7,41.7h-8.4v-15c0-3.9-1.4-5.9-4.2-5.9c-2.2,0-3.6,1.1-4.3,3.3c0,3.5,0,17.6,0,17.6h-8.4c0,0,0.1-25.3,0-28.1h6.7l0.5,5.6h0.2c1.7-2.8,4.5-4.7,8.3-4.7c2.9,0,5.2,0.8,7,2.8s2.7,4.7,2.7,8.5L44.7,41.7L44.7,41.7z M9.6,2.3C12,2.3,14,4.2,14,6.5s-2,4.2-4.4,4.2S5.2,8.8,5.2,6.5C5.3,4.2,7.2,2.3,9.6,2.3z", gplus: "M29.9,5.2c0,0-9.1,0-12.2,0C12.2,5.2,6.9,9.1,6.9,14c0,5,3.8,8.8,9.5,8.8c0.4,0,0.7-0.1,1.1-0.1c-0.4,0.7-0.7,1.5-0.7,2.3c0,1.4,0.7,2.5,1.7,3.4c-0.7,0-1.4,0-2.1,0c-6.9,0-12.2,4.4-12.2,8.9c0,4.5,5.9,7.4,12.7,7.4c7.9,0,12.2-4.5,12.2-8.9c0-3.6-1-5.8-4.4-8.1c-1.1-0.8-3.3-2.7-3.3-3.9c0-1.3,0.4-2,2.4-3.5c2-1.6,3.5-3.5,3.5-6.1c0-3.2-1.3-7-4-7H28L29.9,5.2z M25.8,35c0.1,0.4,0.2,0.8,0.2,1.3c0,3.6-2.3,6.5-9,6.5c-4.7,0-8.2-3-8.2-6.6c0-3.5,4.3-6.5,9-6.4c1.1,0,2.1,0.2,3.1,0.5C23.5,32,25.3,33,25.8,35z M18.2,21.5c-3.2-0.1-6.2-3.6-6.8-7.8s1.6-7.4,4.8-7.4c3.2,0.1,6.2,3.4,6.8,7.7C23.6,18.2,21.4,21.6,18.2,21.5z M39.8,21v-6h-3.9v6h-6v4h6v6h3.9v-6h6v-3.9L39.8,21L39.8,21z", pinterest: "M7.6,17.7c0,3.3,1.1,6.6,3.3,8.5c0.5,0.4,1.7,1.3,2.6,1.3c0.7,0,0.8-0.8,1-1.4c1-3.3,0.1-1.9-1.1-4.7c-1.3-2.8-0.4-7.3,1.1-9.6c2.9-4.4,6.2-6,11.6-6c3.1,0,5.4,1.1,7.1,2.6c6.1,5.2,1.9,21.8-5.6,20.9c-7.5-0.8-1.4-10-1.4-14c0-6.2-8.5-5.2-8.5,2.7c0,2.7,1.1,3.5,0.9,4.2c-1.1,3.8-1.9,8.2-2.9,12.2c-1.1,4.1-1,7.5-0.6,11.7c0,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0,0.3-0.1c2.9-2.9,4.8-7.7,5.5-10.5c0.4-1.5,0.9-3.3,1.2-4.8c0.1-0.3,0.7,0.6,1.1,1c3.1,2.8,8.4,2.2,11.8,0.1c6.6-4,9.4-15.4,5.9-22.2c-1-1.9-2-2.8-3.4-4.3C31.8-0.1,19.3,0.2,13.2,6C9.9,9.1,7.6,12.7,7.6,17.7L7.6,17.7z", reddit: "M48.9,18.6L48.9,18.6c0,0.1,0,0.2,0,0.3c0,1.2-0.4,2.4-1,3.3s-1.4,1.7-2.4,2.2c0.1,0.5,0.1,1,0.1,1.4c0,2.6-0.9,5.1-2.4,7.2l0,0l0,0c-2.8,3.8-7.2,6.1-11.6,7.2l0,0l0,0c-2.3,0.6-4.8,0.9-7.2,0.9c-3.6,0-7.2-0.7-10.6-2l0,0l0,0C10.3,37.7,7,35.4,5,32c-1.1-1.8-1.7-3.9-1.7-6.1c0-0.5,0-1,0.1-1.4c-0.9-0.5-1.7-1.3-2.3-2.1c-0.6-1-1-2.1-1.1-3.2l0,0l0,0l0,0c0-1.6,0.7-3.2,1.8-4.4s2.6-1.9,4.2-1.9h0.1c0.2,0,0.3,0,0.5,0c0.8,0,1.6,0.1,2.4,0.4l0,0l0,0c0.7,0.3,1.3,0.6,1.9,1.1c0.2-0.1,0.4-0.2,0.6-0.3c3.5-2.1,7.6-2.9,11.6-3.2c0-2,0.3-4.1,1.2-5.9c0.8-1.5,2.2-2.7,3.9-3.1l0,0l0,0c0.6-0.1,1.3-0.2,1.9-0.2c1.7,0,3.4,0.4,4.9,1c0.7-1.1,1.7-1.9,2.8-2.3l0,0l0,0c0.7-0.2,1.4-0.3,2.1-0.3c0.8,0,1.5,0.1,2.2,0.5l0,0l0,0l0,0c1,0.4,1.9,1.1,2.5,2.1c0.6,0.9,1,2,1,3.2c0,0.2,0,0.4,0,0.6l0,0l0,0c-0.1,1.5-0.9,2.8-1.9,3.7c-1.1,0.9-2.4,1.5-3.8,1.5c-0.2,0-0.4,0-0.7,0c-1.4-0.1-2.7-0.8-3.6-1.8c-1-1-1.6-2.4-1.6-3.8C34,6,34,6,34,5.9c-1.3-0.6-2.7-1.1-4.1-1.1c-0.2,0-0.4,0-0.6,0l0,0c-1,0.1-2,0.8-2.4,1.7l0,0l0,0c-0.7,1.4-0.8,3-0.9,4.6c3.9,0.3,7.9,1.2,11.4,3.2l0,0l0,0c0.1,0,0.2,0.1,0.3,0.2c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.7,2.3-1.1,3.5-1.1c0.6,0,1.1,0.1,1.6,0.2l0,0l0,0l0,0l0,0c1.3,0.3,2.4,1.1,3.3,2.1C48.2,15.9,48.8,17.2,48.9,18.6L48.9,18.6L48.9,18.6z M42.5,26c0-1.8-0.6-3.6-1.7-5c-2.1-2.9-5.2-4.8-8.5-5.8l0,0c-0.6-0.2-1.3-0.4-1.9-0.5c-1.9-0.4-3.9-0.7-5.9-0.7c-2.7,0-5.3,0.4-7.9,1.2c-3.3,1.1-6.5,2.9-8.5,5.8l0,0c-1,1.4-1.6,3.2-1.6,5c0,0.7,0.1,1.3,0.3,2l0,0c0.4,1.4,1.1,2.7,2,3.8c0.9,1.1,2.1,2.1,3.3,2.9c0.3,0.2,0.5,0.3,0.8,0.5c3.5,2,7.6,2.9,11.6,2.9c0.7,0,1.4,0,2-0.1c4.1-0.3,8.2-1.6,11.5-4l0,0c1.1-0.8,2-1.7,2.8-2.8s1.3-2.3,1.6-3.6l0,0l0,0C42.5,27,42.5,26.5,42.5,26zM37.3,5.5c0,0.1,0,0.1,0,0.2l0,0l0,0c0,0.7,0.3,1.3,0.8,1.8s1.1,0.8,1.8,0.8l0,0l0,0H40c0.7,0,1.3-0.3,1.8-0.8s0.8-1.1,0.9-1.8l0,0l0,0c0-0.1,0-0.1,0-0.2c0-0.7-0.3-1.4-0.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8c-0.2,0-0.4,0-0.7,0.1l0,0l0,0c-0.6,0.1-1.1,0.5-1.5,1C37.5,4.4,37.3,4.9,37.3,5.5z M8.2,16.2c-0.5-0.2-1.1-0.4-1.6-0.4c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.8,0-1.6,0.4-2.1,0.9c-0.6,0.5-1,1.3-1,2.1l0,0l0,0c0,0.1,0,0.1,0,0.2c0,0.5,0.2,1,0.4,1.4C3.8,20.7,4,21,4.3,21.3C5.2,19.3,6.6,17.6,8.2,16.2zM45.7,18.9c0-0.4-0.1-0.9-0.3-1.3l0,0l0,0c-0.3-0.6-0.7-1-1.3-1.4c-0.5-0.3-1.2-0.5-1.8-0.5s-1.1,0.1-1.7,0.4c1.6,1.4,3,3.1,3.9,5.1c0.3-0.3,0.5-0.6,0.7-0.9C45.6,19.9,45.7,19.4,45.7,18.9z M32.9,29.2c-0.2-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0.1-0.7,0.2c-2.1,1.1-4.6,1.7-7.1,1.7c-1.9,0-3.7-0.3-5.4-1.1l0,0l0,0c-0.3-0.1-0.5-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.5-0.2C17.3,29,17.1,29,16.9,29s-0.4,0-0.6,0.1l0,0l0,0c-0.3,0.1-0.5,0.3-0.7,0.5s-0.2,0.5-0.2,0.7s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.6,0.5c2.4,1.4,5.2,2.1,8.1,2.1c2.6,0,5.2-0.5,7.5-1.5l0,0l0,0c0.3-0.2,0.7-0.3,1.1-0.5c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6l0,0c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.4-0.1-0.5C33.3,29.5,33.1,29.3,32.9,29.2zM16.8,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C19.9,21.1,18.5,19.8,16.8,19.8z M32.1,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C35.1,21.1,33.8,19.8,32.1,19.8z" };
        const s = function getIcon(t3) {
          var n3 = t3.type, c2 = t3.width, r2 = t3.height, o2 = t3.color;
          return (0, e2.jsx)("svg", icons_assign({ version: "1.1", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 50 50", width: c2, height: r2 }, { children: (0, e2.jsx)("path", { fill: o2, d: u[n3] }) }));
        };
        var AwesomeButtonSocial_assign = function() {
          return AwesomeButtonSocial_assign = Object.assign || function(e3) {
            for (var t3, n3 = 1, c2 = arguments.length; n3 < c2; n3++)
              for (var r2 in t3 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
            return e3;
          }, AwesomeButtonSocial_assign.apply(this, arguments);
        }, __rest = function(e3, t3) {
          var n3 = {};
          for (var c2 in e3)
            Object.prototype.hasOwnProperty.call(e3, c2) && t3.indexOf(c2) < 0 && (n3[c2] = e3[c2]);
          if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
            var r2 = 0;
            for (c2 = Object.getOwnPropertySymbols(e3); r2 < c2.length; r2++)
              t3.indexOf(c2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, c2[r2]) && (n3[c2[r2]] = e3[c2[r2]]);
          }
          return n3;
        };
        const components_AwesomeButtonSocial = function(n3) {
          var c2 = n3.onPress, r2 = void 0 === c2 ? null : c2, o2 = n3.children, i2 = void 0 === o2 ? null : o2, l2 = n3.icon, a2 = void 0 === l2 || l2, u2 = n3.sharer, d2 = void 0 === u2 ? {} : u2, v = n3.dimensions, f = void 0 === v ? { width: 640, height: 480 } : v, p = n3.type, h = __rest(n3, ["onPress", "children", "icon", "sharer", "dimensions", "type"]), m = "undefined" != typeof window, w = t2.useRef(function isMobile() {
            var e3;
            return "undefined" != typeof navigator && (null === (e3 = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) || void 0 === e3 ? void 0 : e3.match(/iPhone|iPad|iPod|Android/i));
          }()).current, getMessage = function() {
            if (null == d2 ? void 0 : d2.message)
              return d2.message;
            if (m) {
              var e3 = document.querySelector("title");
              if (null == e3 ? void 0 : e3.innerHTML)
                return e3.innerHTML;
            }
            return null;
          }, getImage = function() {
            if (null == d2 ? void 0 : d2.image)
              return d2.image;
            if (null !== m) {
              var e3 = document.querySelector('meta[property="og:image"]');
              if (e3)
                return e3.getAttribute("content");
            }
            return null;
          };
          return (0, e2.jsx)(components_AwesomeButton, AwesomeButtonSocial_assign({ type: p, onPress: function(e3) {
            if (r2)
              r2(e3);
            else if (!h.href) {
              var t3 = Sharer({ height: null == f ? void 0 : f.height, width: null == f ? void 0 : f.width, url: (null == d2 ? void 0 : d2.url) ? d2.url : m ? window.location.href : null, message: getMessage(), image: getImage(), type: p, user: d2.user, phone: d2.phone });
              (null == t3 ? void 0 : t3.url) && ((null === navigator || void 0 === navigator ? void 0 : navigator.share) && w ? navigator.share({ url: t3.url, text: t3.text, title: t3.title }) : m && window.open(t3.url, t3.title, t3.extra));
            }
          } }, h, { before: a2 ? s({ type: p, width: true === a2 ? 24 : a2.width || 24, height: true === a2 ? 24 : a2.height || 24, color: h.disabled ? "rgba(255,255,255,0.35)" : "#FFF" }) : null }, { children: i2 }));
        };
        var AwesomeButtonProgress_assign = function() {
          return AwesomeButtonProgress_assign = Object.assign || function(e3) {
            for (var t3, n3 = 1, c2 = arguments.length; n3 < c2; n3++)
              for (var r2 in t3 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
            return e3;
          }, AwesomeButtonProgress_assign.apply(this, arguments);
        }, __awaiter = function(e3, t3, n3, c2) {
          return new (n3 || (n3 = Promise))(function(r2, o2) {
            function fulfilled(e4) {
              try {
                step(c2.next(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function rejected(e4) {
              try {
                step(c2.throw(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function step(e4) {
              e4.done ? r2(e4.value) : function adopt(e5) {
                return e5 instanceof n3 ? e5 : new n3(function(t4) {
                  t4(e5);
                });
              }(e4.value).then(fulfilled, rejected);
            }
            step((c2 = c2.apply(e3, t3 || [])).next());
          });
        }, __generator = function(e3, t3) {
          var n3, c2, r2, o2, i2 = { label: 0, sent: function() {
            if (1 & r2[0])
              throw r2[1];
            return r2[1];
          }, trys: [], ops: [] };
          return o2 = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
            return this;
          }), o2;
          function verb(o3) {
            return function(l2) {
              return function step(o4) {
                if (n3)
                  throw new TypeError("Generator is already executing.");
                for (; i2; )
                  try {
                    if (n3 = 1, c2 && (r2 = 2 & o4[0] ? c2.return : o4[0] ? c2.throw || ((r2 = c2.return) && r2.call(c2), 0) : c2.next) && !(r2 = r2.call(c2, o4[1])).done)
                      return r2;
                    switch (c2 = 0, r2 && (o4 = [2 & o4[0], r2.value]), o4[0]) {
                      case 0:
                      case 1:
                        r2 = o4;
                        break;
                      case 4:
                        return i2.label++, { value: o4[1], done: false };
                      case 5:
                        i2.label++, c2 = o4[1], o4 = [0];
                        continue;
                      case 7:
                        o4 = i2.ops.pop(), i2.trys.pop();
                        continue;
                      default:
                        if (!(r2 = i2.trys, (r2 = r2.length > 0 && r2[r2.length - 1]) || 6 !== o4[0] && 2 !== o4[0])) {
                          i2 = 0;
                          continue;
                        }
                        if (3 === o4[0] && (!r2 || o4[1] > r2[0] && o4[1] < r2[3])) {
                          i2.label = o4[1];
                          break;
                        }
                        if (6 === o4[0] && i2.label < r2[1]) {
                          i2.label = r2[1], r2 = o4;
                          break;
                        }
                        if (r2 && i2.label < r2[2]) {
                          i2.label = r2[2], i2.ops.push(o4);
                          break;
                        }
                        r2[2] && i2.ops.pop(), i2.trys.pop();
                        continue;
                    }
                    o4 = t3.call(e3, i2);
                  } catch (e4) {
                    o4 = [6, e4], c2 = 0;
                  } finally {
                    n3 = r2 = 0;
                  }
                if (5 & o4[0])
                  throw o4[1];
                return { value: o4[0] ? o4[1] : void 0, done: true };
              }([o3, l2]);
            };
          }
        }, AwesomeButtonProgress_rest = function(e3, t3) {
          var n3 = {};
          for (var c2 in e3)
            Object.prototype.hasOwnProperty.call(e3, c2) && t3.indexOf(c2) < 0 && (n3[c2] = e3[c2]);
          if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
            var r2 = 0;
            for (c2 = Object.getOwnPropertySymbols(e3); r2 < c2.length; r2++)
              t3.indexOf(c2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, c2[r2]) && (n3[c2[r2]] = e3[c2[r2]]);
          }
          return n3;
        }, d = "undefined" != typeof window;
        const components_AwesomeButtonProgress = function(c2) {
          var r2 = c2.onPress, o2 = void 0 === r2 ? null : r2, i2 = c2.rootElement, l2 = void 0 === i2 ? null : i2, a2 = c2.loadingLabel, u2 = void 0 === a2 ? "Wait.." : a2, s2 = c2.resultLabel, v = void 0 === s2 ? "Success!" : s2, f = (c2.disabled, c2.cssModule), p = void 0 === f ? null : f, h = c2.children, m = void 0 === h ? null : h, w = c2.size, b = void 0 === w ? null : w, g = c2.type, y = void 0 === g ? null : g, _ = c2.releaseDelay, M = void 0 === _ ? 500 : _, C = AwesomeButtonProgress_rest(c2, ["onPress", "rootElement", "loadingLabel", "resultLabel", "disabled", "cssModule", "children", "size", "type", "releaseDelay"]), E = l2 || "aws-btn", L = t2.useRef(null), z = t2.useRef(null), x = function(e3) {
            var n3 = t2.useState(e3), c3 = n3[0], r3 = n3[1], o3 = t2.useRef(e3);
            return [c3, function(e4) {
              var t3 = AwesomeButtonProgress_assign(AwesomeButtonProgress_assign({}, o3.current), e4);
              o3.current = t3, r3(t3);
            }, o3.current];
          }({ loadingEnd: false, loadingStart: false, loadingError: false, errorLabel: null, active: false }), O = (x[0], x[1]), j = x[2];
          t2.useEffect(function() {
            return function() {
              (null == L ? void 0 : L.current) && clearTimeout(L.current);
            };
          }, []);
          var S, k, P, endLoading = function(e3, t3) {
            void 0 === e3 && (e3 = true), void 0 === t3 && (t3 = null), O({ loadingEnd: true, loadingError: !e3, errorLabel: t3 });
          }, clearStagedWrapperAnimation = function() {
            L.current = setTimeout(function() {
              d && (0, n2.beforeFutureCssLayout)(2, function() {
                var e3;
                e3 = function() {
                  O({ loadingError: false, errorLabel: null });
                }, O({ loadingStart: false, loadingEnd: false, active: false }), (0, n2.beforeFutureCssLayout)(2, e3);
              });
            }, M);
          }, T = t2.useCallback(function() {
            O({ active: true });
          }, [O]), R = j.active, N = j.errorLabel;
          return (0, e2.jsx)(components_AwesomeButton, AwesomeButtonProgress_assign({ size: b, type: y, className: (S = j.loadingStart, k = j.loadingEnd, P = j.loadingError, [S && "".concat(E, "--start") || null, k && "".concat(E, "--end") || null, P && "".concat(E, "--errored") || null, "".concat(E, "--progress")].join(" ").trim().replace(/[\s]+/gi, " ")), onPress: function(e3) {
            return __awaiter(void 0, void 0, void 0, function() {
              return __generator(this, function(t3) {
                switch (t3.label) {
                  case 0:
                    return true === (null == j ? void 0 : j.loadingStart) ? [2] : ((0, n2.beforeFutureCssLayout)(4, function() {
                      O({ loadingStart: true });
                    }), [4, (0, n2.onceTransitionEnd)(z.current)]);
                  case 1:
                    return t3.sent(), o2 && o2(e3, endLoading), (0, n2.setCssEndEvent)(z.current, "transition", { tolerance: 3 }).then(clearStagedWrapperAnimation), [2];
                }
              });
            });
          }, onMouseDown: T, cssModule: p, active: R, extra: (0, e2.jsx)("span", { children: (0, e2.jsx)("span", { ref: z, "data-loading": u2 || null, "data-status": N || v || null, className: getClassName("".concat(E, "__progress"), p) }) }) }, C, { children: (0, e2.jsx)("span", { children: m }) }));
        };
      })(), c;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

react-awesome-button/dist/index.js:
  (*! For license information please see index.js.LICENSE.txt *)
*/
//# sourceMappingURL=react-awesome-button.js.map
