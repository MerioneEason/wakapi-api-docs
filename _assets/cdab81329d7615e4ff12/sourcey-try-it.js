var e, t, n, r, i, a, o, s, c, l, u = {}, d = [], f = /^m(i|n|o|s|text|space)$/, p = Array.isArray, m = d.slice, h = Object.assign;
function g(e) {
	e && e.parentNode && e.remove();
}
function _(e, t, n) {
	var r, i, a, o = {}, s = arguments.length;
	for (a in t) a == "key" ? r = t[a] : a == "ref" && typeof e != "function" ? i = t[a] : o[a] = t[a];
	return s > 2 && (o.children = s > 3 ? m.call(arguments, 2) : n), v(e, o, r, i, null);
}
function v(n, r, i, a, o) {
	var s = {
		type: n,
		props: r,
		key: i,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: o || ++t,
		__i: -1,
		__u: 0
	};
	return !o && e.vnode && e.vnode(s), s;
}
function y(e) {
	return e.children;
}
function b(e, t) {
	this.props = e, this.context = t, this.__g = 0;
}
function x(e, t) {
	if (t == null) return e.__ && x(e.__, e.__i + 1);
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) && n.__e) return n.__e;
	return typeof e.type != "function" || e.props.__P ? null : x(e);
}
function S(e) {
	if ((e = e.__) && e.__c && !e.props.__P) return e.__e = null, e.__k.some(function(t) {
		return t && (e.__e = t.__e);
	}), S(e);
}
function C(t) {
	(8 & t.__g || (t.__g |= 8, n.push(t), i++)) && r == e.debounceRendering || ((r = e.debounceRendering) || queueMicrotask)(w);
}
function w() {
	var t, o, s, c, l, u, d, f, p;
	try {
		for (o = 1; n.length;) n.length > o && n.sort(a), t = n.shift(), o = n.length, 8 & t.__g && (c = void 0, l = void 0, u = (l = (s = t).__v).__e, d = [], f = [], (p = s.__P) && ((c = h({ constructor: void 0 }, l)).__v = l.__v + 1, e.vnode && e.vnode(c), A(p, c, l, s.__n, p.namespaceURI, 32 & l.__u ? [u] : null, d, u || x(l), 32 & l.__u, f), c.__v = l.__v, c.__.__k[c.__i] = c, M(d, c, f), l.__ = l.__e = null, c.__e != u && S(c)));
	} finally {
		(i = n.length) && (r || queueMicrotask)(w);
	}
}
function ee(e, t, n, r, i, a, o, s, c, l, f) {
	var p, m, h, g, _, v, y = r.__k || d, b = t.length;
	for (c = T(n, t, y, c, b), p = 0; p < b; p++) (h = n.__k[p]) != null && (m = ~h.__i && y[h.__i] || u, h.__i = p, v = A(e, h, m, i, a, o, s, c, l, f), g = h.__e, (m.ref != h.ref || 8 & m.__u) && (m.ref && N(m.ref, null, h, m), h.ref && f.push(h.ref, h.__c || g, h)), _ ||= g, 4 & h.__u ? (c = E(h, c, e, !m.__v), m.__e && (m.__e = null)) : typeof h.type == "function" && v !== void 0 ? c = v : g && (c = g.nextSibling), h.__u &= -21);
	return n.__e = _, c;
}
function T(e, t, n, r, i) {
	var a, o, s, c, l, u, d, f, m, h = n.length, g = h, _ = 0, b = 0, S = e.__k = Array(i);
	for (a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o != "object" || o.constructor == String ? o = S[a] = v(null, o) : p(o) ? o = S[a] = v(y, { children: o }) : o.constructor === void 0 && o.__b ? o = S[a] = v(o.type, o.props, o.key, o.ref, o.__v) : S[a] = o, c = a + _, o.__ = e, o.__b = e.__b + 1, s = null, ~(l = o.__i = D(o, n, c, g)) && (g--, (s = n[l]) && (s.__u |= 2)), s && s.__v ? (o.__u |= 16, l == c - 1 ? _-- : l == c + 1 ? _++ : l != c && (l > c ? _-- : _++, b = 1)) : (~l || (i > h ? _-- : i < h && _++), typeof o.type != "function" && (o.__u |= 4))) : S[a] = null;
	if (b) {
		for (u = [], d = [], a = 0; a < i; a++) if ((o = S[a]) && 16 & o.__u) {
			for (_ = 0, f = u.length; _ < f;) u[m = _ + f >> 1] < o.__i ? _ = m + 1 : f = m;
			u[_] = o.__i, d[a] = _ + 1;
		}
		for (_ = u.length; a--;) d[a] && (d[a] == _ ? _-- : S[a].__u |= 4);
	}
	if (g) for (a = 0; a < h; a++) !(s = n[a]) || 2 & s.__u || (s.__e == r && (r = x(s)), ie(s, s));
	return r;
}
function E(e, t, n, r) {
	var i, a, o, s;
	if (typeof e.type == "function") {
		if (e.props.__P) return t;
		if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && (i[a].__ = e, t = E(i[a], t, n, !1));
		return t;
	}
	for (t && !t.parentNode && (t = x(e)) && !t.parentNode && (t = null), o = e.__e, s = t; s && s.nodeType == 8;) s = s.nextSibling;
	for (o != s && (!r && n.moveBefore && o.parentNode ? n.moveBefore(o, t) : n.insertBefore(o, t || null)), t = o; (t &&= t.nextSibling) && t.nodeType == 8 && !t.data.startsWith("$s"););
	return t;
}
function D(e, t, n, r) {
	var i, a = e.key, o = e.type, s = t[n], c = s && !(2 & s.__u);
	if (s === null && a == null || c && a == s.key && o == s.type) return n;
	if (r > +!!c) {
		for (i = n - 1; i >= 0; i--) if ((s = t[i]) && !(2 & s.__u) && a == s.key && o == s.type) return i;
		for (i = n + 1; i < t.length; i++) if ((s = t[i]) && !(2 & s.__u) && a == s.key && o == s.type) return i;
	}
	return -1;
}
function O(e, t, n) {
	n ??= "", t[0] == "-" ? e.setProperty(t, n) : e[t] = n;
}
function k(e, t, n, r, i) {
	var a, o;
	if (t == "style") {
		if (typeof n == "string") e.style.cssText = n;
		else {
			if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || O(e.style, t);
			if (n) for (t in n) r && n[t] == r[t] || O(e.style, t, n[t]);
		}
	} else if (t[0] == "o" && t[1] == "n") (e.__e ||= {})[t] = n, n && r || (o = l[t] || (l[t] = te(t)), (e.__a ||= {})[t] = c, a = t != (t = t.replace(s, "$1")), (t = t.slice(2))[0] < "a" && (t = t.toLowerCase()), n ? e.addEventListener(t, o, a) : e.removeEventListener(t, o, a));
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			return;
		} catch {}
		if (typeof n == "function") return;
		n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n);
	}
}
function te(t) {
	return function(n) {
		var r = this.__e;
		if (r) {
			if (r = r[t], n[o] == null) n[o] = c++;
			else if (n[o] < this.__a[t]) return;
			return r(e.event ? e.event(n) : n);
		}
	};
}
function A(t, n, r, i, a, o, s, c, l, u) {
	var f, m, _, v, S, C, w, T, E, D, O, k, te, A, M, N, P, F, I = n.type;
	if (n.constructor !== void 0) return null;
	128 & r.__u && (l = 32 & r.__u, f = r.__c.__z) && (n.__u |= l, m = o = [], f.nodeType == 8 ? c = j(f, o) : o.push(f), c = o[0] || c), (f = e.__b) && f(n);
	n: if (typeof I == "function") {
		_ = s.length;
		try {
			if (T = n.props, E = (f = I.prototype) && f.render, D = (f = I.contextType) && i[f.__c], O = f ? D ? D.props.value : f.__ : i, (v = r.__c) ? (n.__c = v, 2 & v.__g && (v.__g |= 1)) : (E ? n.__c = v = new I(T, O) : (n.__c = v = new b(T, O), v.constructor = I, v.render = ae), D && D.sub(v), v.state || (v.state = {}), v.__n = i, v.__g |= 8, v.__h = [], v.__k = []), E && (v.__s || (v.__s = v.state), I.getDerivedStateFromProps && (v.__s == v.state && (v.__s = h({}, v.__s)), h(v.__s, I.getDerivedStateFromProps(T, v.__s)))), S = v.props, C = v.state, v.__v = n, r.__c) {
				if (T !== S && E && !I.getDerivedStateFromProps && v.componentWillReceiveProps && v.componentWillReceiveProps(T, O), n.__v == r.__v && !(8 & v.__g) || !(4 & v.__g) && v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(T, v.__s, O)) {
					n.__v != r.__v && (v.props = T, v.state = v.__s, v.__g &= -9), n.__e = r.__e, n.__k = r.__k, n.__k.some(function(e) {
						e && (e.__ = n);
					}), d.push.apply(v.__h, v.__k), v.__k = [], v.__h.length && s.push(v), c = x(r);
					break n;
				}
				v.componentWillUpdate && v.componentWillUpdate(T, v.__s, O), E && v.componentDidUpdate && v.__h.push(function() {
					v.componentDidUpdate(S, C, w);
				});
			} else E && !I.getDerivedStateFromProps && v.componentWillMount && v.componentWillMount(), E && v.componentDidMount && v.__h.push(v.componentDidMount);
			if (v.context = O, v.props = T, v.__P = t, v.__g &= -5, k = e.__r, te = 0, E) v.state = v.__s, v.__g &= -9, k && k(n), f = v.render(v.props, v.state, v.context), d.push.apply(v.__h, v.__k), v.__k = [];
			else do
				v.__g &= -9, k && k(n), f = v.render(v.props, v.state, v.context), v.state = v.__s;
			while (8 & v.__g && ++te < 25);
			v.state = v.__s, v.getChildContext && (i = h({}, i, v.getChildContext())), E && r.__c && v.getSnapshotBeforeUpdate && (w = v.getSnapshotBeforeUpdate(S, C)), A = f && f.type === y && f.key == null ? f.props.children : f, T.__P && (f = c, a = (t = T.__P).namespaceURI, l = o = null, r.props && r.props.__P != t && (r.__k.some(function(e) {
				e && ie(e, e);
			}), r.__k = null), c = r.__k ? x(r, 0) : null), c = ee(t, p(A) ? A : [A], n, r, i, a, o, s, c, l, u), T.__P && (n.__e = null, c = f), n.__u &= -161, m && m.some(g), v.__h.length && s.push(v), 1 & v.__g && (v.__g &= -4);
		} catch (t) {
			if (s.length = _, n.__v = null, l || o) {
				if (t.then) {
					if (M = 0, n.__u |= 128 | l, o) {
						for (~(P = o.indexOf(c || void 0)) || (P = o.length); (F = o[P - 1]) && F.nodeType == 8;) P--;
						for (; P < o.length; P++) if (F = o[P]) {
							if (o[P] = null, F.nodeType == 8) {
								if (F.data.startsWith("$s")) M++ || (N = F);
								else if (M && F.data.startsWith("/$s") && !--M) break;
							} else if (!M) break;
						}
					}
					if (!N) {
						for (; c && c.nodeType == 8 && c.nextSibling;) c = c.nextSibling;
						N = c;
					}
					(f = j(N = n.__c.__z || (n.__c.__z = N))) ? (n.__e = N, c = f) : n.__e = c, c &&= c.nextSibling;
				} else o && o.some(g);
			} else n.__e = r.__e;
			n.__k ||= r.__k || [], t.then || ne(n), e.__e(t, n, r);
		}
	} else c = n.__e = re(r.__e, n, r, i, a, o, s, l, u, t);
	return (f = e.diffed) && f(n), c;
}
function j(e, t) {
	if (e && e.nodeType == 8 && e.data.startsWith("$s")) for (var n = 1; e = e.nextSibling;) {
		if (e.nodeType == 8) {
			if (e.data.startsWith("$s")) n++;
			else if (e.data.startsWith("/$s") && !--n) return e;
		}
		t && t.push(e);
	}
}
function ne(e) {
	e && (e.__c && (e.__c.__g |= 4), e.__k && e.__k.some(ne));
}
function M(t, n, r) {
	for (var i = 0; i < r.length;) N(r[i++], r[i++], r[i++]);
	e.__c && e.__c(n, t), t.some(function(n) {
		try {
			t = n.__h, n.__h = [], t.some(function(e) {
				e.call(n);
			});
		} catch (t) {
			e.__e(t, n.__v);
		}
	});
}
function re(t, n, r, i, a, o, s, c, l, d) {
	var h, _, v, y, b, S, C, w, T, E = r.props || u, D = n.props, O = n.type;
	if (O == "svg" ? a = "http://www.w3.org/2000/svg" : O == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a ||= "http://www.w3.org/1999/xhtml", o) {
		for (h = 0; h < o.length; h++) if ((b = o[h]) && (O ? b.localName == O : b.nodeType == 3)) {
			t = b, o[h] = null;
			break;
		}
	}
	if (!t) {
		if (w = d.ownerDocument || document, !O) return w.createTextNode(D);
		t = w.createElementNS(a, O, D.is && D), c &&= (e.__m && e.__m(n, o), !1), o = null;
	}
	if (O) {
		if (d = O == "template" ? t.content : t, o = O == "textarea" && D.defaultValue != null ? null : o && m.call(d.childNodes), !c && o) for (E = {}, h = 0; h < t.attributes.length; h++) E[(b = t.attributes[h]).name] = b.value;
		for (h in E) b = E[h], h == "dangerouslySetInnerHTML" ? v = b : h == "children" || h in D || h == "value" && "defaultValue" in D || h == "checked" && "defaultChecked" in D || k(t, h, null, b, a);
		for (h in T = 1 & r.__u, D) b = D[h], h == "children" ? y = b : h == "dangerouslySetInnerHTML" ? _ = b : h == "value" ? S = b : h == "checked" ? C = b : c && typeof b != "function" || !(E[h] !== b || T && b != null) || k(t, h, b, E[h], a);
		_ ? (c || v && (_.__html == v.__html || _.__html == t.innerHTML) || (t.innerHTML = _.__html), n.__k = []) : (v && (t.textContent = ""), (O == "foreignObject" || a == "http://www.w3.org/1998/Math/MathML" && f.test(O)) && (a = "http://www.w3.org/1999/xhtml"), ee(d, p(y) ? y : [y], n, r, i, a, o, s, o ? o[0] : r.__k && x(r, 0), c, l), o && o.some(g)), c && O != "textarea" || (h = "value", O == "progress" && S == null ? t.removeAttribute(h) : S == null || S === t[h] && (O != "progress" || S) || k(t, h, S, E[h], a), h = "checked", C != null && C != t[h] && k(t, h, C, E[h], a));
	} else E === D || c && t.data == D || (t.data = D);
	return t;
}
function N(t, n, r, i) {
	try {
		typeof t == "function" ? n ? n.__x = t(n) || 1 : (i &&= i.__c || i.__e) && (n = i.__x) && (i.__x = null, typeof n == "function" ? n() : t(null)) : t.current = n;
	} catch (t) {
		e.__e(t, r);
	}
}
function ie(t, n, r) {
	var i, a, o, s;
	if (e.unmount && e.unmount(t), !(i = t.ref) || i.current && i.current != t.__e || N(i, null, n, t), i = t.__c) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (t) {
			e.__e(t, n);
		}
		i.__P = i.__n = null;
	}
	if (i = t.__k) for (s = 0; s < i.length; s++) i[s] && ie(i[s], n, typeof t.type != "function" || r && !t.props.__P);
	!r && (i = t.__c) && (i = i.__z) && (a = j(i, o = [])) && (i == t.__e && o.some(g), g(a), g(i)), (i = t.__e) && (r || g(i), i.__e && (i.__e = null)), t.__e = t.__c = t.__ = null;
}
function ae(e, t, n) {
	return this.constructor(e, n);
}
function P(t, n) {
	var r, i, a, o;
	e.__ && e.__(t, n), n.nodeType == 9 && (n = n.documentElement), i = (r = t && 32 & t.__u) ? null : n.__k, n.__k = v(y, { children: [t] }), a = [], o = [], A(n, n.__k, i || u, u, n.namespaceURI, i ? null : n.firstChild ? m.call(n.childNodes) : null, a, i ? i.__e : n.firstChild, r, o), M(a, n.__k, o), n.__k.props.children = null;
}
e = { __e: function(e, t, n, r) {
	for (var a, o, s; t = t.__;) if ((a = t.__c) && !(1 & a.__g)) {
		a.__g |= 4;
		try {
			if ((s = (o = a.constructor) && o.getDerivedStateFromError) && a.setState(o.getDerivedStateFromError(e)), a.componentDidCatch && (a.componentDidCatch(e, r || {}), s = 1), s && 8 & a.__g) return void (a.__g |= 2);
		} catch (t) {
			e = t;
		}
	}
	throw i = 0, e;
} }, t = 0, b.prototype.setState = function(e, t) {
	var n = this.__s;
	n && n != this.state || (n = this.__s = h({}, this.state)), typeof e == "function" && (e = e(h({}, n), this.props)), e && (h(n, e), this.__v && (t && this.__k.push(t), C(this)));
}, b.prototype.forceUpdate = function(e) {
	this.__v && (this.__g |= 4, e && this.__h.push(e), C(this));
}, b.prototype.render = y, n = [], i = 0, a = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, o = Symbol(), s = /(PointerCapture)$|Capture$/i, c = 0, l = {};
var F = 0;
Array.isArray;
function I(t, n, r, i, a, o) {
	n ||= {};
	var s, c, l = n;
	if ("ref" in l && typeof t != "function") for (c in l = {}, n) c == "ref" ? s = n[c] : l[c] = n[c];
	var u = {
		type: t,
		props: l,
		key: r,
		ref: s,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --F,
		__i: -1,
		__u: 0
	};
	return (a || o) && (u.__source = a, u.__self = o), e.vnode && e.vnode(u), u;
}
function L(e) {
	return I("span", {
		class: "sourcey-select-wrap",
		children: [I("select", {
			...e,
			class: e.class ?? "sourcey-select"
		}), !e.multiple && (!e.size || e.size === 1) && I("svg", {
			class: "sourcey-select-caret",
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			focusable: "false",
			children: I("path", { d: "m4.5 6.25 3.5 3.5 3.5-3.5" })
		})]
	});
}
var R, z, oe, se, ce = Object.is, le = 0, B = [], ue = [], V = e, de = V.__b, fe = V.__r, pe = V.diffed, me = V.__c, he = V.unmount, ge = V.__;
function _e(e, t) {
	V.__h && V.__h(z, e, le || t), le = 0;
	var n = z.__H || (z.__H = {
		__: [],
		__h: []
	});
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
	return le = 1, ve(ke, e);
}
function ve(e, t, n) {
	var r = _e(R++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : ke(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		ce(t, n) || (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = z, !z.__f)) {
		z.__f = !0;
		var i = z.shouldComponentUpdate;
		z.shouldComponentUpdate = function(e, t, n) {
			var r = this.__H;
			if (!r) return !0;
			var a = !1, o = this.props != e;
			if (r.__.some(function(e) {
				e.__N && (a = !0, ce(e.__[0], e.__N[0]) || (o = !0));
			}), i) {
				var s = i.call(this, e, t, n);
				return a ? s || o : s;
			}
			return !a || o;
		};
	}
	return r.__;
}
function ye(e, t) {
	var n = _e(R++, 3);
	!V.__s && Oe(n.__H, t) && (n.__P = !0, n.__ = e, n.u = t, z.__H.__h.push(n));
}
function be(e, t) {
	var n = _e(R++, 4);
	!V.__s && Oe(n.__H, t) && (n.__P = !1, n.__ = e, n.u = t, z.__h.push(n));
}
function U(e) {
	return le = 5, xe(function() {
		return { current: e };
	}, []);
}
function xe(e, t) {
	var n = _e(R++, 7);
	return Oe(n.__H, t) && (n.__ = e(), n.__H = t), n.__;
}
function Se() {
	var e;
	do {
		for (; e = ue.shift();) try {
			Ee(e);
		} catch (t) {
			V.__e(t, { __: (e = e.__P) && e.__v });
		}
		for (; e = B.shift();) {
			var t = e.__H;
			if (e.__P && t) try {
				t.__h.some(Ee), t.__h.some(De), t.__h = [];
			} catch (n) {
				t.__h = [], V.__e(n, e.__v);
			}
		}
	} while (ue.length);
}
V.__b = function(e) {
	z = null, de && de(e);
}, V.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ge && ge(e, t);
}, V.__r = function(e) {
	fe && fe(e), R = 0;
	var t = (z = e.__c).__H;
	t && (oe == z ? z.__h = [] : (t.__h.some(Ee), t.__h.some(De), R = 0), t.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
	})), oe = z;
}, V.diffed = function(e) {
	pe && pe(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && Te(B.push(t)), t.__H.__.some(function(e) {
		e.u && (e.__H = e.u);
	})), oe = z = null;
}, V.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(Ee), e.__h = e.__h.filter(function(e) {
				return !e.__ || De(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], V.__e(n, e.__v);
		}
	}), me && me(e, t);
}, V.unmount = function(e) {
	he && he(e);
	var t, n, r = e.__c;
	r && r.__H && (r.__H.__.some(function(r) {
		try {
			if (r.__P && r.__c) {
				if (n === void 0) {
					for (n = e.__; n && (!n.__c || !n.__c.__P);) n = n.__;
					n &&= n.__c;
				}
				r.__P = n, Te(ue.push(r));
			} else Ee(r);
		} catch (e) {
			t = e;
		}
	}), r.__H = void 0, t && V.__e(t, r.__v));
};
var Ce = typeof requestAnimationFrame == "function";
function we(e) {
	var t, n = function() {
		clearTimeout(r), Ce && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Ce && (t = requestAnimationFrame(n));
}
function Te(e) {
	e != 1 && se == V.requestAnimationFrame || ((se = V.requestAnimationFrame) || we)(Se);
}
function Ee(e) {
	var t = z, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), z = t;
}
function De(e) {
	var t = z;
	e.__c = e.__(), z = t;
}
function Oe(e, t) {
	return !e || e.length != t.length || t.some(function(t, n) {
		return !ce(t, e[n]);
	});
}
function ke(e, t) {
	return typeof t == "function" ? t(e) : t;
}
var W = (e) => typeof e == "object" && !!e && !Array.isArray(e) && !(e instanceof Blob), Ae = (e, t) => Object.prototype.hasOwnProperty.call(e, t), je = (e) => [
	...e.allOf ?? [],
	...e.anyOf ?? [],
	...e.oneOf ?? []
];
function G(e, t, n = /* @__PURE__ */ new Set()) {
	return !e || n.has(e) ? !1 : (n.add(e), t(e) || je(e).some((e) => G(e, t, n)));
}
function Me(e, t) {
	return !!t && G(e, (e) => (t === "request" ? e.readOnly : e.writeOnly) === !0);
}
function Ne(e, t, n = !0) {
	let r = [];
	return G(e, (e) => {
		let i = e.properties?.[t];
		return i ? r.push(i) : n && W(e.additionalProperties) && r.push(e.additionalProperties), !1;
	}), r.length > 1 ? { allOf: r } : r[0];
}
function Pe(e = {}) {
	if (!e.allOf?.length) return e;
	let { allOf: t, ...n } = e, r = [n, ...t.map(Pe)], i = {};
	for (let e of r) for (let [t, n] of Object.entries(e)) n !== void 0 && !Ae(i, t) && Object.assign(i, { [t]: n });
	let a = new Set(r.flatMap((e) => Object.keys(e.properties ?? {})));
	return a.size && (i.properties = Object.fromEntries([...a].map((t) => [t, Ne(e, t, !1)]))), i.required = [...new Set(r.flatMap((e) => e.required ?? []))], i.readOnly = G(e, (e) => e.readOnly === !0), i.writeOnly = G(e, (e) => e.writeOnly === !0), G(e, (e) => e.format === "password") && (i.format = "password"), i;
}
function Fe(e, t) {
	if (e === t) return !0;
	if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, n) => Fe(e, t[n]));
	if (W(e) && W(t)) {
		let n = Object.keys(e);
		return n.length === Object.keys(t).length && n.every((n) => Ae(t, n) && Fe(e[n], t[n]));
	}
	return !1;
}
function Ie(e, t, n) {
	return e === "null" ? t === null : e === "object" ? W(t) : e === "array" ? Array.isArray(t) : e === "integer" ? typeof t == "number" && Number.isInteger(t) : e === "number" ? typeof t == "number" && Number.isFinite(t) : e === "string" && n ? t instanceof Blob : typeof t === e;
}
function K(e, t, n, r = 0) {
	if (!e || t === void 0) return [];
	let i = (e) => [{
		field: n,
		message: e
	}];
	if (r > 24) return i("This value is too deeply nested for the console.");
	let a = [];
	for (let i of e.allOf ?? []) a.push(...K(i, t, n, r + 1));
	for (let [o, s] of [["oneOf", e.oneOf], ["anyOf", e.anyOf]]) {
		if (!s) continue;
		let e = s.filter((e) => !K(e, t, n, r + 1).length).length;
		(!e || o === "oneOf" && e !== 1) && a.push(...i(`The value must match ${o === "oneOf" ? "exactly one" : "at least one"} of the declared alternatives.`));
	}
	e.not && !K(e.not, t, n, r + 1).length && a.push(...i("This value matches an excluded schema.")), e.enum && !e.enum.some((e) => Fe(e, t)) && a.push(...i("Choose one of the listed values.")), e.const !== void 0 && !Fe(e.const, t) && a.push(...i("Use the declared constant value."));
	let o = e.type === void 0 ? [] : Array.isArray(e.type) ? e.type : [e.type];
	if (t === null && e.nullable) return a;
	if (o.length && !o.some((n) => Ie(n, t, e.format === "binary"))) {
		let t = o.length > 1 ? "The value does not match an allowed type." : o[0] === "integer" ? "Enter a whole number." : o[0] === "number" ? "Enter a number." : o[0] === "boolean" ? "Choose true or false." : o[0] === "array" ? "Enter a list." : o[0] === "object" ? "Enter an object." : e.format === "binary" ? "Choose a file." : "Enter text.";
		return [...a, ...i(t)];
	}
	if (e.format === "binary" && !(t instanceof Blob)) return [...a, ...i("Choose a file.")];
	if (typeof t == "number") {
		Number.isFinite(t) || a.push(...i("Enter a finite number.")), e.minimum !== void 0 && t < e.minimum && a.push(...i(`Minimum: ${e.minimum}.`)), e.maximum !== void 0 && t > e.maximum && a.push(...i(`Maximum: ${e.maximum}.`));
		let n = typeof e.exclusiveMinimum == "number" ? e.exclusiveMinimum : e.exclusiveMinimum ? e.minimum : void 0, r = typeof e.exclusiveMaximum == "number" ? e.exclusiveMaximum : e.exclusiveMaximum ? e.maximum : void 0;
		if (n !== void 0 && t <= n && a.push(...i(`Must be greater than ${n}.`)), r !== void 0 && t >= r && a.push(...i(`Must be less than ${r}.`)), e.multipleOf !== void 0) {
			let n = t / e.multipleOf;
			(!(e.multipleOf > 0) || Math.abs(n - Math.round(n)) > 1e-10 * Math.max(1, Math.abs(n))) && a.push(...i(`Use a multiple of ${e.multipleOf}.`));
		}
	}
	if (typeof t == "string") {
		let n = [...t].length;
		if (e.minLength !== void 0 && n < e.minLength && a.push(...i(`Use at least ${e.minLength} characters.`)), e.maxLength !== void 0 && n > e.maxLength && a.push(...i(`Use no more than ${e.maxLength} characters.`)), e.pattern) try {
			new RegExp(e.pattern, "u").test(t) || a.push(...i("The value does not match the required pattern."));
		} catch {
			a.push(...i("The API schema contains an invalid text pattern."));
		}
	}
	if (Array.isArray(t) && (e.minItems !== void 0 && t.length < e.minItems && a.push(...i(`Add at least ${e.minItems} items.`)), e.maxItems !== void 0 && t.length > e.maxItems && a.push(...i(`Use no more than ${e.maxItems} items.`)), e.uniqueItems && t.some((e, n) => t.slice(0, n).some((t) => Fe(e, t))) && a.push(...i("Each item must be unique.")), t.forEach((t, i) => a.push(...t === void 0 ? [{
		field: `${n}.${i}`,
		message: "Enter a value or remove this item."
	}] : K(e.items, t, `${n}.${i}`, r + 1)))), W(t)) {
		for (let r of e.required ?? []) Me(Ne(e, r), "request") || Ae(t, r) && t[r] !== void 0 || a.push({
			field: `${n}.${r}`,
			message: "This field is required."
		});
		for (let [i, o] of Object.entries(t)) Ae(e.properties ?? {}, i) ? a.push(...K(e.properties[i], o, `${n}.${i}`, r + 1)) : e.additionalProperties === !1 ? a.push({
			field: `${n}.${i}`,
			message: "This field is not allowed."
		}) : typeof e.additionalProperties == "object" && a.push(...K(e.additionalProperties, o, `${n}.${i}`, r + 1));
	}
	return a;
}
function Le(e, t = /* @__PURE__ */ new Set()) {
	if (e.not && Object.keys(e.not).length === 0) return "never";
	if (t.has(e)) return e.refName ?? e.name ?? "recursive";
	let n = /* @__PURE__ */ new Set([...t, e]), r = e.allOf?.length ? e.allOf : e.oneOf?.length ? e.oneOf : e.anyOf;
	return r?.length ? [...new Set(r.map((e) => Le(e, n)))].join(e.allOf?.length ? " & " : " | ") : e.type === "array" && e.items ? `Array<${e.items.refName ?? Le(e.items, n)}>` : e.refName ? e.refName : e.name && (e.type === "object" || e.properties) ? e.name : (Array.isArray(e.type) ? e.type.join(" | ") : e.type) ?? "any";
}
function Re(e, t) {
	let n = He(e, {
		usage: t,
		path: "",
		ancestors: /* @__PURE__ */ new Set()
	});
	return n === void 0 || JSON.stringify(n, null, 2).split("\n").length <= 400 ? n : He(e, {
		usage: t,
		path: "",
		ancestors: /* @__PURE__ */ new Set(),
		homes: Ke(e, t)
	});
}
var ze = (e) => e.refName ?? e.name;
function Be(e) {
	if (Ve(e)) return !1;
	if (e.allOf?.length || e.properties) return !0;
	let t = e.oneOf?.[0] ?? e.anyOf?.[0];
	return t ? Be(t) : e.type === "object";
}
var Ve = (e) => e.example !== void 0 || !!e.examples?.length || e.default !== void 0 || !!e.enum?.length || e.const !== void 0;
function He(e, t) {
	if (e.example !== void 0) return e.example;
	if (e.examples?.length) return e.examples[0];
	if (e.default !== void 0) return e.default;
	if (e.enum?.length) return e.enum[0];
	if (e.const !== void 0) return e.const;
	let n = ze(e);
	if (n && Be(e) && (t = {
		...t,
		ancestors: new Set(t.ancestors).add(n)
	}), e.allOf?.length) return Ye(e.allOf, t);
	if (e.oneOf?.length) return He(e.oneOf[0], t);
	if (e.anyOf?.length) return He(e.anyOf[0], t);
	switch (Array.isArray(e.type) ? e.type[0] : e.type) {
		case "object": return We(e, t);
		case "array": return Ge(e, t);
		case "string": return Je(e);
		case "integer": return e.minimum ?? 0;
		case "number": return e.minimum ?? 0;
		case "boolean": return !0;
		case "null": return null;
		default: return e.properties ? We(e, t) : void 0;
	}
}
function Ue(e, t, n) {
	let r = ze(e);
	return !r || !Be(e) ? !1 : n.ancestors.has(r) || n.homes !== void 0 && n.homes.get(r) !== t;
}
function We(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(e.properties ?? {})) {
		if (Me(i, t.usage)) continue;
		let a = `${t.path}.${r}`, o = i.type === "array" && i.items;
		if (Ue(o ? i.items : i, o ? `${a}[]` : a, t)) {
			e.required?.includes(r) && (n[r] = o ? [] : {});
			continue;
		}
		let s = He(i, {
			...t,
			path: a
		});
		s !== void 0 && (n[r] = s);
	}
	return n;
}
function Ge(e, t) {
	if (!e.items) return [];
	let n = `${t.path}[]`;
	if (Ue(e.items, n, t)) return [];
	let r = He(e.items, {
		...t,
		path: n
	});
	return r === void 0 ? [] : [r];
}
function Ke(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [{
		schema: e,
		path: ""
	}], i = ze(e);
	i && Be(e) && n.set(i, "");
	for (let e = 0; e < r.length; e++) for (let i of qe(r[e].schema, r[e].path, t)) {
		let e = ze(i.schema);
		if (e && Be(i.schema)) {
			if (n.has(e)) continue;
			n.set(e, i.path);
		}
		r.push(i);
	}
	return n;
}
function qe(e, t, n) {
	if (Ve(e)) return [];
	if (e.allOf?.length) return e.allOf.flatMap((e) => qe(e, t, n));
	let r = e.oneOf?.[0] ?? e.anyOf?.[0];
	if (r) return qe(r, t, n);
	let i = Array.isArray(e.type) ? e.type[0] : e.type;
	return i === "array" ? e.items ? [{
		schema: e.items,
		path: `${t}[]`
	}] : [] : i !== "object" && !(i === void 0 && e.properties) ? [] : Object.entries(e.properties ?? {}).filter(([, e]) => !Me(e, n)).map(([e, n]) => ({
		schema: n,
		path: `${t}.${e}`
	}));
}
function Je(e) {
	switch (e.format) {
		case "date-time": return "2024-01-15T09:30:00Z";
		case "date": return "2024-01-15";
		case "time": return "09:30:00Z";
		case "email": return "user@example.com";
		case "uri":
		case "url": return "https://example.com";
		case "uuid": return "550e8400-e29b-41d4-a716-446655440000";
		case "ipv4": return "192.168.1.1";
		case "ipv6": return "::1";
		case "hostname": return "example.com";
		case "binary": return "<binary>";
		case "byte": return "dGVzdA==";
		case "password": return "********";
		default: return "string";
	}
}
function Ye(e, t) {
	let n = {};
	for (let r of e) {
		let e = He(r, t);
		e && typeof e == "object" && !Array.isArray(e) && Object.assign(n, e);
	}
	return Object.keys(n).length > 0 ? n : void 0;
}
var q = (e) => e.in + ":" + e.name, Xe = (e) => e === null ? "" : String(e), J = (e) => encodeURIComponent(Xe(e)).replace(/[!'()*]/g, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase()), Ze = /%(?:3A|2F|3F|23|5B|5D|40|21|24|26|27|28|29|2A|2B|2C|3B|3D)/gi, Qe = (e) => (t) => e ? J(t).replace(Ze, (e) => decodeURIComponent(e)) : J(t);
function $e(e) {
	let t = {};
	for (let n of e.parameters) {
		let e = n.content ? Object.values(n.content)[0] : void 0, r = Object.values(n.examples ?? {})[0]?.value, i = n.example === void 0 ? r === void 0 ? e?.example : r : n.example, a = i === void 0 ? n.schema?.default === void 0 ? n.required ? Re(n.schema ?? e?.schema ?? {}, "request") : void 0 : n.schema.default : i;
		a !== void 0 && (t[q(n)] = a);
	}
	let n = Object.keys(e.requestBody?.content ?? {})[0] ?? "", r = e.requestBody?.content[n], i = Object.values(r?.examples ?? {})[0]?.value, a = r?.example === void 0 ? i === void 0 ? r?.schema ? Re(r.schema, "request") : void 0 : i : r.example, o = e.security.findIndex((e) => Object.keys(e).length === 0);
	return {
		parameters: t,
		serverIndex: 0,
		serverVariables: {},
		mediaType: n,
		body: et(a, r?.schema),
		securityIndex: o >= 0 ? o : 0,
		auth: {}
	};
}
function et(e, t) {
	if (!(Me(t, "request") || t?.format === "binary" && !(e instanceof Blob))) {
		if (Array.isArray(e)) return e.map((e) => et(e, Pe(t).items)).filter((e) => e !== void 0);
		if (W(e)) {
			let n = Pe(t).properties;
			return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, et(t, n?.[e])]).filter(([, e]) => e !== void 0));
		}
		return e;
	}
}
function tt(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = n.trim(), i = r.trim(), a = e.toLowerCase(), o = t.get(a);
		o ? o[1] += (a === "cookie" ? "; " : ", ") + i : t.set(a, [e, i]);
	}
	return [...t.values()];
}
function nt(e, t) {
	let n = e.style ?? (e.in === "query" || e.in === "cookie" ? "form" : "simple"), r = e.explode ?? n === "form", i = e.in === "header" ? Xe : Qe(e.allowReserved), a = e.in === "header" ? e.name : J(e.name);
	if (n === "deepObject" && W(t)) return Object.entries(t).flatMap(([e, t]) => {
		let n = a + "[" + J(e) + "]";
		return Array.isArray(t) ? t.map((e) => [n, i(e)]) : [[n, i(t)]];
	});
	let o = n === "spaceDelimited" ? "%20" : n === "pipeDelimited" ? "|" : ",";
	if (e.in === "path") {
		let e = n === "label" && r ? "." : ",", o;
		return o = Array.isArray(t) ? t.map(i).join(n === "matrix" && r ? ";" + a + "=" : e) : W(t) ? Object.entries(t).map(([e, t]) => J(e) + (r ? "=" : ",") + i(t)).join(n === "matrix" && r ? ";" : e) : i(t), n === "label" && (o = "." + o), n === "matrix" && (o = ";" + (W(t) && r ? "" : a + "=") + o), [[a, o]];
	}
	return Array.isArray(t) ? n === "form" && r ? t.map((e) => [a, i(e)]) : [[a, t.map(i).join(o)]] : W(t) ? n === "form" && r ? Object.entries(t).map(([e, t]) => [J(e), i(t)]) : [[a, Object.entries(t).map(([e, t]) => i(e) + (r ? "=" : ",") + i(t)).join(o)]] : [[a, i(t)]];
}
function rt(e) {
	return /^(accept-charset|accept-encoding|access-control-request-.+|connection|content-length|cookie2?|date|dnt|expect|host|keep-alive|origin|referer|te|trailer|transfer-encoding|upgrade|via|proxy-.+|sec-.+)$/i.test(e);
}
function it(e, t) {
	let { operation: n } = e, r = [], i = [], a = [], o = n.path, s = e.servers[t.serverIndex] ?? e.servers[0] ?? { url: "/" };
	s = { ...s }, s.url = s.url.replace(/\{([^}]+)\}/g, (e, n) => {
		let i = s.variables?.[n], a = t.serverVariables[n] ?? i?.default;
		return (a === void 0 || i?.enum && !i.enum.includes(a)) && r.push({
			field: "server." + n,
			message: "Choose a valid server variable."
		}), a ?? "";
	});
	for (let e of n.parameters) {
		let n = q(e), s = t.parameters[n];
		if (s === void 0) {
			e.required && r.push({
				field: n,
				message: "This field is required."
			});
			continue;
		}
		let c = e.content ? Object.entries(e.content)[0] : void 0;
		if (r.push(...K(e.schema ?? c?.[1].schema, s, n)), !c) {
			let t = e.in === "path" ? [
				"simple",
				"label",
				"matrix"
			] : e.in === "header" ? ["simple"] : e.in === "cookie" ? ["form"] : [
				"form",
				"spaceDelimited",
				"pipeDelimited",
				"deepObject"
			];
			e.style && !t.includes(e.style) && r.push({
				field: n,
				message: "This parameter uses an unsupported serialization style: " + e.style + "."
			}), (W(s) && Object.values(s).some((e) => W(e) || Array.isArray(e)) || Array.isArray(s) && s.some((e) => W(e) || Array.isArray(e))) && r.push({
				field: n,
				message: "Nested parameter values need an explicit content encoding in the API description."
			});
		}
		let l = c ? [[J(e.name), Qe(e.allowReserved)(c[0].includes("json") ? JSON.stringify(s) : Xe(s))]] : nt(e, s);
		e.in === "query" || e.in === "querystring" ? (e.in === "querystring" && W(s) && (l = Object.entries(s).map(([e, t]) => [J(e), J(t)])), a.push(...l)) : e.in === "path" ? o = o.split("{" + e.name + "}").join(l[0][1]) : e.in === "header" ? (/[\r\n]/.test(e.name + Xe(s)) && r.push({
			field: n,
			message: "Headers cannot contain line breaks."
		}), i.push([e.name, c ? c[0].includes("json") ? JSON.stringify(s) : Xe(s) : l.map((e) => e[1]).join(",")])) : e.in === "cookie" && i.push(["Cookie", l.map(([e, t]) => e + "=" + t).join("; ")]);
	}
	/\{[^}]+\}/.test(o) && r.push({
		field: "path",
		message: "Fill in every path parameter."
	});
	let c = "";
	try {
		let t = new URL(s.url, e.baseUrl);
		if (!/^https?:$/.test(t.protocol) || t.username || t.password) throw Error();
		let n = t.search.slice(1);
		t.pathname = t.pathname.replace(/\/$/, "") + (o.startsWith("/") ? o : "/" + o), t.search = "", t.hash = "", c = t.href + (n || a.length ? "?" + [n, ...a.map(([e, t]) => e + "=" + t)].filter(Boolean).join("&").replace(/#/g, "%23") : "");
	} catch {
		r.push({
			field: "server",
			message: "Choose a valid HTTP or HTTPS server URL."
		});
	}
	let l = n.security[t.securityIndex] ?? {};
	for (let n of Object.keys(l)) {
		let a = e.securitySchemes[n], o = t.auth[n] ?? {};
		if (!a) r.push({
			field: "auth." + n,
			message: "The spec does not define this security scheme."
		});
		else if (a.type === "apiKey") {
			if (a.in === "cookie") {
				let t = c && new URL(c).origin === (e.browserOrigin ?? new URL(e.baseUrl).origin);
				(e.credentials === "omit" || !t && e.credentials !== "include") && r.push({
					field: "auth." + n,
					message: "This API uses a browser session cookie. Its console must explicitly enable the appropriate browser credentials.",
					browserOnly: !0
				});
				continue;
			}
			o.value || r.push({
				field: "auth." + n,
				message: "Enter " + (a.name ?? n) + "."
			}), a.in === "query" ? o.value && (c += (c.includes("?") ? "&" : "?") + J(a.name ?? n) + "=" + J(o.value)) : i.push([a.name ?? n, o.value ?? ""]);
		} else if (a.type === "http" && a.scheme?.toLowerCase() === "basic") {
			!o.username && !o.password && r.push({
				field: "auth." + n,
				message: "Enter your username and password."
			});
			let e = new TextEncoder().encode((o.username ?? "") + ":" + (o.password ?? ""));
			i.push(["Authorization", "Basic " + btoa(Array.from(e, (e) => String.fromCharCode(e)).join(""))]);
		} else a.type === "oauth2" || a.type === "openIdConnect" || a.type === "http" && a.scheme?.toLowerCase() === "bearer" ? (o.value || r.push({
			field: "auth." + n,
			message: "Enter an access token."
		}), i.push(["Authorization", "Bearer " + (o.value ?? "")])) : r.push({
			field: "auth." + n,
			message: "This browser console cannot perform " + (a.scheme ?? a.type) + " authentication.",
			browserOnly: !0
		});
	}
	let u, d = n.requestBody?.content[t.mediaType], f = et(t.body, d?.schema);
	if (n.requestBody?.required && f === void 0 && r.push({
		field: "body",
		message: "A request body is required."
	}), f !== void 0 && d) {
		if (r.push(...K(d.schema, f, "body")), /^(GET|HEAD)$/i.test(n.method) && r.push({
			field: "body",
			message: "Browser requests cannot send a body with " + n.method.toUpperCase() + ".",
			browserOnly: !0
		}), t.mediaType.includes("multipart/form-data")) W(f) ? u = {
			kind: "multipart",
			parts: at(f, d.encoding)
		} : r.push({
			field: "body",
			message: "Multipart bodies must contain named fields."
		});
		else {
			let e = f instanceof Blob ? void 0 : t.mediaType.includes("json") ? JSON.stringify(f, null, 2) : t.mediaType === "application/x-www-form-urlencoded" && W(f) ? Object.entries(f).flatMap(([e, t]) => nt({
				name: e,
				in: "query",
				...d.encoding?.[e]
			}, t)).map(([e, t]) => e + "=" + t).join("&") : Xe(f);
			e === void 0 ? r.push({
				field: "body",
				message: "Choose multipart/form-data for file uploads."
			}) : u = {
				kind: "text",
				text: e
			}, i.push(["Content-Type", t.mediaType]);
		}
	}
	for (let [e, t] of i) rt(e) && r.push({
		field: "header:" + e,
		message: e + " is controlled by the browser. Use its session credentials instead.",
		browserOnly: !0
	}), /[\r\n]/.test(e + t) && r.push({
		field: "header:" + e,
		message: "Headers cannot contain line breaks."
	});
	return /^(CONNECT|TRACE|TRACK)$/i.test(n.method) && r.push({
		field: "method",
		message: "Browsers do not allow the " + n.method.toUpperCase() + " method.",
		browserOnly: !0
	}), {
		method: n.method.toUpperCase(),
		url: c,
		headers: tt(i),
		body: u,
		credentials: e.credentials ?? "same-origin",
		issues: r
	};
}
function at(e, t) {
	return Object.entries(e).flatMap(([e, n]) => (Array.isArray(n) && t?.[e]?.explode !== !1 ? n : [n]).filter((e) => e !== void 0).map((t) => [e, t instanceof Blob ? t : W(t) || Array.isArray(t) ? JSON.stringify(t) : Xe(t)]));
}
function Y(e, t) {
	if (t === "curl") return "'" + e.replace(/'/g, "'\\''") + "'";
	let n = [
		"javascript",
		"typescript",
		"python"
	].includes(t) || ["ruby", "php"].includes(t) && !Array.from(e).some((e) => e.charCodeAt(0) < 32 || e.charCodeAt(0) === 127), r = n ? "'" : "\"", i = r;
	for (let a of e) {
		let e = a.codePointAt(0);
		if (a === "\\" || a === r) i += "\\" + a;
		else if (!n && t === "ruby" && a === "#" || !n && t === "php" && a === "$") i += "\\" + a;
		else if (e < 32 || e === 127) {
			let n = {
				9: "\\t",
				10: "\\n",
				13: "\\r"
			}[e];
			i += n ?? (t === "rust" ? `\\u{${e.toString(16)}}` : t === "java" ? `\\${e.toString(8).padStart(3, "0")}` : t === "csharp" ? `\\u${e.toString(16).padStart(4, "0")}` : `\\x${e.toString(16).padStart(2, "0")}`);
		} else i += a;
	}
	return i + r;
}
function X(e, t) {
	let n = Array.from(e).some((e) => {
		let t = e.charCodeAt(0);
		return t < 32 && t !== 10 || t === 127;
	});
	if (!e.includes("\n") || n) return;
	let r = e.split("\n");
	switch (t) {
		case "curl": return Y(e, t);
		case "javascript":
		case "typescript": return "`" + e.replace(/[\\`]|\$\{/g, (e) => "\\" + e) + "`";
		case "python": return "'''" + e.replace(/[\\']/g, (e) => "\\" + e) + "'''";
		case "go": return e.includes("`") ? void 0 : "`" + e + "`";
		case "rust": {
			let t = "#";
			for (; e.includes("\"" + t);) t += "#";
			return "r" + t + "\"" + e + "\"" + t;
		}
		case "java": return r.some((e) => / $/.test(e)) || r.every((e) => !e || e.startsWith(" ")) ? void 0 : "\"\"\"\n" + e.replace(/\\/g, "\\\\").replace(/"{3,}/g, (e) => e.replace(/"/g, "\\\"")).replace(/"{1,2}$/, (e) => e.replace(/"/g, "\\\"")) + "\"\"\"";
		case "php": return r.some((e) => /^\s*BODY\b/.test(e)) ? void 0 : "<<<'BODY'\n" + e + "\nBODY";
		case "ruby": return r.some((e) => /^\s*BODY$/.test(e)) ? void 0 : "<<-'BODY'.chomp\n" + e + "\nBODY";
		case "csharp": {
			let t = "\"".repeat(Math.max(3, ...(e.match(/"+/g) ?? []).map((e) => e.length + 1)));
			return t + "\n" + e + "\n" + t;
		}
	}
}
var ot = {
	curl: "BASE_URL",
	javascript: "baseUrl",
	typescript: "baseUrl",
	python: "base_url",
	go: "baseURL",
	ruby: "base_url",
	java: "baseUrl",
	php: "$baseUrl",
	rust: "base_url",
	csharp: "baseUrl"
};
function Z(e, t, n = !1) {
	let r = Y(e, t);
	if (!n) return r;
	let i = ot[t];
	if (!i) throw Error(`Unsupported sample language: ${t}`);
	return t === "curl" ? `"\${${i}}"${r}` : t === "php" ? `${i} . ${r}` : t === "rust" ? `${i}.to_owned() + ${r}` : `${i} + ${r}`;
}
function Q(e) {
	let t = ot[e], n = Y("YOUR_API_ORIGIN", e);
	return e === "go" ? `const ${t} = ${n}` : e === "java" ? `String ${t} = ${n};` : e === "rust" ? `let ${t} = ${n};` : e === "csharp" ? `var ${t} = ${n};` : e === "javascript" || e === "typescript" ? `const ${t} = ${n};` : `${t}=${n}${e === "php" ? ";" : ""}`;
}
var $ = (e) => "name" in e ? String(e.name) : "upload.bin";
function st(e, t, { originVariable: n = !1 } = {}) {
	if (e.body?.kind !== "multipart") return [];
	let r = e.body.parts, i = e.headers.filter(([e]) => e.toLowerCase() !== "content-type");
	return t.flatMap((t) => {
		let a = (e) => Y(e, t), o = [], s;
		if (t === "curl") return [{
			lang: "bash",
			label: "cURL",
			source: [
				"curl -X " + e.method + " " + Z(e.url, t, n),
				...i.map(([e, t]) => "  -H " + a(e + ": " + t)),
				...r.map(([e, t]) => (t instanceof Blob ? "  -F " : "  --form-string ") + a(e + "=" + (t instanceof Blob ? "@" + $(t) : t)))
			].join(" \\\n").replace(/^/, n ? Q(t) + "\n" : "")
		}];
		if (t === "javascript" || t === "typescript") {
			s = t === "javascript" ? "JavaScript" : "TypeScript", n && o.push(Q(t)), o.push("const form = new FormData();");
			for (let [e, t] of r) o.push("form.append(" + a(e) + ", " + (t instanceof Blob ? "fileInput.files[0]" : a(t)) + ");");
			o.push("const response = await fetch(" + Z(e.url, t, n) + ", {", "  method: " + a(e.method) + ",", "  headers: " + JSON.stringify(Object.fromEntries(i)) + ",", ...e.credentials === "same-origin" ? [] : ["  credentials: " + a(e.credentials) + ","], "  body: form,", "});", "console.log(await response.text());");
		} else if (t === "python") {
			s = "Python", o.push("import requests", "from contextlib import ExitStack", "", ...n ? [Q(t)] : [], "with ExitStack() as stack:", "    files = [");
			for (let [e, t] of r) o.push("        (" + a(e) + ", " + (t instanceof Blob ? "(" + a($(t)) + ", stack.enter_context(open(" + a($(t)) + ", 'rb')))" : "(None, " + a(t) + ")") + "),");
			o.push("    ]", "    response = requests.request(" + a(e.method) + ", " + Z(e.url, t, n) + ", headers=" + JSON.stringify(Object.fromEntries(i)) + ", files=files)", "    print(response.text)");
		} else if (t === "go") s = "Go", o.push("package main", "import (\"bytes\"; \"fmt\"; \"io\"; \"mime/multipart\"; \"net/http\"" + (r.some(([, e]) => e instanceof Blob) ? "; \"os\"" : "") + ")", "func main() {", ...n ? ["  " + Q(t)] : [], "  var body bytes.Buffer", "  writer := multipart.NewWriter(&body)"), r.forEach(([e, t], n) => {
			t instanceof Blob ? o.push("  file" + n + ", _ := os.Open(" + a($(t)) + ")", "  defer file" + n + ".Close()", "  part" + n + ", _ := writer.CreateFormFile(" + a(e) + ", " + a($(t)) + ")", "  io.Copy(part" + n + ", file" + n + ")") : o.push("  writer.WriteField(" + a(e) + ", " + a(t) + ")");
		}), o.push("  writer.Close()", "  req, _ := http.NewRequest(" + a(e.method) + ", " + Z(e.url, t, n) + ", &body)", ...i.map(([e, t]) => "  req.Header.Set(" + a(e) + ", " + a(t) + ")"), "  req.Header.Set(\"Content-Type\", writer.FormDataContentType())", "  resp, err := http.DefaultClient.Do(req)", "  if err != nil { panic(err) }", "  defer resp.Body.Close()", "  data, _ := io.ReadAll(resp.Body)", "  fmt.Println(string(data))", "}");
		else if (t === "ruby") s = "Ruby", o.push("require 'net/http'", ...n ? [Q(t)] : [], "uri = URI(" + Z(e.url, t, n) + ")", "request = Net::HTTPGenericRequest.new(" + a(e.method) + ", true, true, uri.request_uri, {})", ...i.map(([e, t]) => "request[" + a(e) + "] = " + a(t)), "request.set_form([" + r.map(([e, t]) => "[" + a(e) + ", " + (t instanceof Blob ? "File.open(" + a($(t)) + ", 'rb')" : a(t)) + "]").join(", ") + "], 'multipart/form-data')", "response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') { |http| http.request(request) }", "puts response.body");
		else if (t === "php") return s = "PHP", [ct(e, t, s, n)];
		else if (t === "java") return s = "Java", [ct(e, t, s, n)];
		else if (t === "rust") {
			s = "Rust", o.push("#[tokio::main]", "async fn main() -> Result<(), Box<dyn std::error::Error>> {", ...n ? ["  " + Q(t)] : [], "  let form = reqwest::multipart::Form::new()");
			for (let [e, t] of r) o.push("    ." + (t instanceof Blob ? "file(" + a(e) + ", " + a($(t)) + ").await?" : "text(" + a(e) + ", " + a(t) + ")"));
			o.push("    ;", "  let response = reqwest::Client::new().request(reqwest::Method::from_bytes(b\"" + e.method + "\")?, " + Z(e.url, t, n) + ")");
			for (let [e, t] of i) o.push("    .header(" + a(e) + ", " + a(t) + ")");
			o.push("    .multipart(form).send().await?;", "  println!(\"{}\", response.text().await?);", "  Ok(())", "}");
		} else if (t === "csharp") {
			s = "C#", o.push("using var client = new HttpClient();", ...n ? [Q(t)] : [], "using var content = new MultipartFormDataContent();");
			for (let [e, t] of r) o.push("content.Add(" + (t instanceof Blob ? "new StreamContent(File.OpenRead(" + a($(t)) + "))" : "new StringContent(" + a(t) + ")") + ", " + a(e) + (t instanceof Blob ? ", " + a($(t)) : "") + ");");
			o.push("using var request = new HttpRequestMessage(new HttpMethod(" + a(e.method) + "), " + Z(e.url, t, n) + ") { Content = content };", ...i.map(([e, t]) => "request.Headers.TryAddWithoutValidation(" + a(e) + ", " + a(t) + ");"), "using var response = await client.SendAsync(request);", "Console.WriteLine(await response.Content.ReadAsStringAsync());");
		} else return [];
		return [{
			lang: t,
			label: s,
			source: o.join("\n")
		}];
	});
}
function ct(e, t, n, r) {
	let i = e.body?.kind === "multipart" ? e.body.parts : [], a = (e) => e.replace(/"/g, "%22").replace(/\r/g, "%0D").replace(/\n/g, "%0A"), o = t === "php", s = (e) => Y(e, t), c = o ? [
		"<?php",
		...r ? [Q(t)] : [],
		"$boundary = \"sourcey-\" . bin2hex(random_bytes(16));",
		"$body = \"\";"
	] : [
		"import java.net.http.*;",
		"import java.net.URI;",
		"import java.io.*;",
		"import java.nio.file.*;",
		"import java.nio.charset.StandardCharsets;",
		...r ? [Q(t)] : [],
		"String boundary = \"sourcey-\" + java.util.UUID.randomUUID();",
		"var body = new ByteArrayOutputStream();"
	];
	for (let [e, t] of i) {
		let n = "\r\nContent-Disposition: form-data; name=\"" + a(e) + "\"" + (t instanceof Blob ? "; filename=\"" + a($(t)) + "\"" : "") + "\r\n\r\n";
		o ? c.push("$body .= \"--\" . $boundary . " + s(n) + " . " + (t instanceof Blob ? "file_get_contents(" + s($(t)) + ")" : s(t)) + " . \"\\r\\n\";") : c.push("body.write((\"--\" + boundary + " + s(n) + ").getBytes(StandardCharsets.UTF_8));", "body.write(" + (t instanceof Blob ? "Files.readAllBytes(Path.of(" + s($(t)) + "))" : s(t) + ".getBytes(StandardCharsets.UTF_8)") + ");", "body.write(\"\\r\\n\".getBytes(StandardCharsets.UTF_8));");
	}
	return o ? c.push("$body .= \"--\" . $boundary . \"--\\r\\n\";", "$ch = curl_init(" + Z(e.url, t, r) + ");", "curl_setopt($ch, CURLOPT_CUSTOMREQUEST, " + s(e.method) + ");", "curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);", "curl_setopt($ch, CURLOPT_HTTPHEADER, [\"Content-Type: multipart/form-data; boundary=\" . $boundary, " + e.headers.filter(([e]) => e.toLowerCase() !== "content-type").map(([e, t]) => s(e + ": " + t)).join(", ") + "]);", "curl_setopt($ch, CURLOPT_POSTFIELDS, $body);", "echo curl_exec($ch);", "curl_close($ch);") : c.push("body.write((\"--\" + boundary + \"--\\r\\n\").getBytes(StandardCharsets.UTF_8));", "var request = HttpRequest.newBuilder(URI.create(" + Z(e.url, t, r) + "))", "  .header(\"Content-Type\", \"multipart/form-data; boundary=\" + boundary)", ...e.headers.filter(([e]) => e.toLowerCase() !== "content-type").map(([e, t]) => "  .header(" + s(e) + ", " + s(t) + ")"), "  .method(" + s(e.method) + ", HttpRequest.BodyPublishers.ofByteArray(body.toByteArray())).build();", "var response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());", "System.out.println(response.body());"), {
		lang: t,
		label: n,
		source: c.join("\n")
	};
}
var lt = {
	curl({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = [`curl -X ${t} ${Z(e, "curl", i)}`];
		for (let [e, t] of n) a.push("  -H " + gt(e + ": " + t));
		let o = r?.includes("\0");
		r !== void 0 && a.push(o ? "  --data-binary @-" : `  --data-raw ${gt(r)}`);
		let s = o ? `printf '%b' ${gt(Array.from(new TextEncoder().encode(r)).map((e) => `\\0${e.toString(8).padStart(3, "0")}`).join(""))} | ` : "";
		return {
			lang: "bash",
			label: "cURL",
			source: (i ? Q("curl") + "\n" : "") + s + a.join(" \\\n")
		};
	},
	javascript({ url: e, method: t, headers: n, body: r, credentials: i, originVariable: a }) {
		let o = r === void 0 ? void 0 : X(r, "javascript"), s = [
			...a ? [Q("javascript")] : [],
			...o ? [`const body = ${o};`, ""] : [],
			`const response = await fetch(${Z(e, "javascript", a)}, {`
		];
		return s.push(`  method: '${t}',`), n.length && s.push("  headers: {", ...Object.entries(Object.fromEntries(n)).map(([e, t]) => `    ${Y(e, "javascript")}: ${Y(t, "javascript")},`), "  },"), i !== "same-origin" && s.push("  credentials: " + vt(i) + ","), r !== void 0 && s.push(o ? "  body," : "  body: " + Y(r, "javascript") + ","), s.push("});", "", "const data = await response.text();"), {
			lang: "javascript",
			label: "JavaScript",
			source: s.join("\n")
		};
	},
	typescript(e) {
		return {
			...lt.javascript(e),
			lang: "typescript",
			label: "TypeScript"
		};
	},
	python({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = ["import requests", ""];
		i && a.push(Q("python"));
		let o = r === void 0 ? void 0 : X(r, "python");
		o && a.push("body = " + o, "");
		let s = [...ft(t) ? [] : [vt(t)], Z(e, "python", i)];
		r !== void 0 && s.push("data=" + (o ? "body" : vt(r)) + ".encode('utf-8')"), n.length && s.push([
			"headers={",
			...Object.entries(Object.fromEntries(n)).map(([e, t]) => `    ${Y(e, "python")}: ${Y(t, "python")},`),
			"}"
		].join("\n    "));
		let c = ft(t) ? "requests." + t.toLowerCase() : "requests.request";
		return a.push("response = " + c + (s.length > (ft(t) ? 1 : 2) ? "(\n    " + s.join(",\n    ") + ",\n)" : "(" + s.join(", ") + ")"), "print(response.text)"), {
			lang: "python",
			label: "Python",
			source: a.join("\n")
		};
	},
	go({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = [
			"package main",
			"",
			"import (",
			"  \"fmt\"",
			"  \"io\"",
			"  \"net/http\""
		];
		r !== void 0 && a.push("  \"strings\""), a.push(")", ""), a.push("func main() {"), i && a.push("  " + Q("go")), r === void 0 ? a.push(`  req, _ := http.NewRequest(${Y(t, "go")}, ${Z(e, "go", i)}, nil)`) : (a.push("  body := strings.NewReader(" + (X(r, "go") ?? JSON.stringify(r)) + ")"), a.push(`  req, _ := http.NewRequest(${Y(t, "go")}, ${Z(e, "go", i)}, body)`));
		for (let [e, t] of n) a.push("  req.Header.Set(" + JSON.stringify(e) + ", " + JSON.stringify(t) + ")");
		return a.push("  resp, _ := http.DefaultClient.Do(req)"), a.push("  defer resp.Body.Close()"), a.push("  data, _ := io.ReadAll(resp.Body)"), a.push("  fmt.Println(string(data))"), a.push("}"), {
			lang: "go",
			label: "Go",
			source: a.join("\n")
		};
	},
	ruby({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = [
			"require 'net/http'",
			"require 'json'",
			"",
			...i ? [Q("ruby")] : [],
			`uri = URI(${Z(e, "ruby", i)})`
		], o = pt(t);
		o ? (a.push(`request = Net::HTTP::${o}.new(uri)`), r !== void 0 && a.push(`request.body = ${X(r, "ruby") ?? Y(r, "ruby")}`)) : (a.push(`request = Net::HTTPGenericRequest.new('${t}', ${r ? "true" : "false"}, true, uri.request_uri, {})`), r !== void 0 && a.push(`request.body = ${X(r, "ruby") ?? Y(r, "ruby")}`));
		for (let [e, t] of n) a.push("request[" + Y(e, "ruby") + "] = " + Y(t, "ruby"));
		return a.push("", "response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') { |http| http.request(request) }"), a.push("data = JSON.parse(response.body)"), {
			lang: "ruby",
			label: "Ruby",
			source: a.join("\n")
		};
	},
	java({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = [
			"import java.net.http.*;",
			"import java.net.URI;",
			"",
			"HttpClient client = HttpClient.newHttpClient();"
		];
		i && a.push(Q("java")), r === void 0 ? (a.push("HttpRequest request = HttpRequest.newBuilder()"), a.push(`    .uri(URI.create(${Z(e, "java", i)}))`), a.push(`    .method("${t}", HttpRequest.BodyPublishers.noBody())`)) : (a.push("String body = " + (X(r, "java") ?? Y(r, "java")) + ";", ""), a.push("HttpRequest request = HttpRequest.newBuilder()"), a.push(`    .uri(URI.create(${Z(e, "java", i)}))`), a.push(`    .method("${t}", HttpRequest.BodyPublishers.ofString(body))`));
		for (let [e, t] of n) a.push("    .header(" + Y(e, "java") + ", " + Y(t, "java") + ")");
		return a.push("    .build();", ""), a.push("HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());"), a.push("System.out.println(response.body());"), {
			lang: "java",
			label: "Java",
			source: a.join("\n")
		};
	},
	php({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = r === void 0 ? void 0 : X(r, "php"), o = [
			"<?php",
			...i ? [Q("php")] : [],
			...a ? [`$body = ${a};`, ""] : [],
			`$ch = curl_init(${Z(e, "php", i)});`
		];
		return o.push("curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);"), t !== "GET" && o.push(`curl_setopt($ch, CURLOPT_CUSTOMREQUEST, '${_t(t)}');`), n.length && o.push("curl_setopt($ch, CURLOPT_HTTPHEADER, [" + n.map(([e, t]) => Y(e + ": " + t, "php")).join(", ") + "]);"), r !== void 0 && o.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, ${a ? "$body" : Y(r, "php")});`), o.push("", "$response = curl_exec($ch);", "curl_close($ch);"), o.push("$data = json_decode($response, true);"), {
			lang: "php",
			label: "PHP",
			source: o.join("\n")
		};
	},
	rust({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = [
			"use reqwest;",
			"",
			"#[tokio::main]",
			"async fn main() -> Result<(), reqwest::Error> {",
			"    let client = reqwest::Client::new();"
		];
		i && a.push("    " + Q("rust"));
		let o = mt(t) ? `client.${t.toLowerCase()}(${Z(e, "rust", i)})` : `client.request(reqwest::Method::from_bytes(b"${t}").unwrap(), ${Z(e, "rust", i)})`;
		r === void 0 ? a.push(`    let response = ${o}`) : (a.push("    let body = " + (X(r, "rust") ?? Y(r, "rust")) + ";"), a.push(`    let response = ${o}`), a.push("        .body(body)"));
		for (let [e, t] of n) a.push("        .header(" + Y(e, "rust") + ", " + Y(t, "rust") + ")");
		return a.push("        .send()"), a.push("        .await?"), a.push("        .text()"), a.push("        .await?;"), a.push("    println!(\"{}\", response);"), a.push("    Ok(())"), a.push("}"), {
			lang: "rust",
			label: "Rust",
			source: a.join("\n")
		};
	},
	csharp({ url: e, method: t, headers: n, body: r, originVariable: i }) {
		let a = ["using var client = new HttpClient();", ""];
		i && a.push(Q("csharp"));
		let o = ht(t) ? `HttpMethod.${t[0] + t.slice(1).toLowerCase()}` : `new HttpMethod("${t}")`;
		if (r !== void 0) {
			let t = X(r, "csharp");
			t && a.push("var body = " + t + ";"), a.push("var content = new StringContent(" + (t ? "body" : Y(r, "csharp")) + ", System.Text.Encoding.UTF8);"), a.push(`var request = new HttpRequestMessage(${o}, ${Z(e, "csharp", i)}) { Content = content };`);
		} else a.push(`var request = new HttpRequestMessage(${o}, ${Z(e, "csharp", i)});`);
		for (let [e, t] of n) a.push(e.toLowerCase() === "content-type" ? "request.Content!.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse(" + Y(t, "csharp") + ");" : "request.Headers.TryAddWithoutValidation(" + Y(e, "csharp") + ", " + Y(t, "csharp") + ");");
		return a.push("var response = await client.SendAsync(request);", "var data = await response.Content.ReadAsStringAsync();"), {
			lang: "csharp",
			label: "C#",
			source: a.join("\n")
		};
	}
}, ut = [
	"curl",
	"javascript",
	"python"
];
Object.freeze(Object.keys(lt));
function dt(e, t = ut, n = {}) {
	if (e = {
		...e,
		headers: tt(e.headers)
	}, e.body?.kind === "multipart") return st(e, t, n);
	let r = {
		url: e.url,
		method: e.method,
		headers: e.headers,
		credentials: e.credentials,
		body: e.body?.kind === "text" ? e.body.text : void 0,
		originVariable: n.originVariable
	};
	return t.map((e) => lt[e]?.(r)).filter((e) => !!e);
}
function ft(e) {
	return [
		"GET",
		"POST",
		"PUT",
		"DELETE",
		"PATCH"
	].includes(e);
}
function pt(e) {
	switch (e) {
		case "GET": return "Get";
		case "POST": return "Post";
		case "PUT": return "Put";
		case "DELETE": return "Delete";
		case "PATCH": return "Patch";
		default: return;
	}
}
function mt(e) {
	return [
		"GET",
		"POST",
		"PUT",
		"DELETE",
		"PATCH"
	].includes(e);
}
function ht(e) {
	return [
		"GET",
		"POST",
		"PUT",
		"DELETE",
		"PATCH"
	].includes(e);
}
function gt(e) {
	return `'${e.replace(/'/g, "'\\''")}'`;
}
function _t(e) {
	return e.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
function vt(e) {
	return Y(e, "javascript");
}
var yt = /authorization|cookie|password|passwd|secret|token|api[-_]?key/i;
function bt(e, t, n, r = 0) {
	if (e !== void 0) {
		if (r > 24 || G(t, (e) => e.writeOnly === !0 || e.format === "password")) return n === "preview" ? "YOUR_VALUE" : void 0;
		if (e instanceof Blob) return n === "storage" ? void 0 : e;
		if (Array.isArray(e)) {
			let i = [];
			G(t, (e) => (e.items && i.push(e.items), !1));
			let a = i.length > 1 ? { allOf: i } : i[0], o = e.map((e) => bt(e, a, n, r + 1));
			return n === "storage" && o.some((e) => e === void 0) ? void 0 : o;
		}
		if (W(e)) {
			let i = Object.entries(e).flatMap(([e, i]) => {
				let a = Ne(t, e, !1);
				if (n === "storage" && !a) return [];
				let o = yt.test(e) ? n === "preview" ? "YOUR_VALUE" : void 0 : bt(i, Ne(t, e), n, r + 1);
				return o === void 0 ? [] : [[e, o]];
			});
			return n === "storage" && !i.length ? void 0 : Object.fromEntries(i);
		}
		return e;
	}
}
function xt(e, t, n) {
	let r = Object.fromEntries(t.operation.parameters.flatMap((t) => {
		let r = q(t), i = t.schema ?? Object.values(t.content ?? {})[0]?.schema, a = yt.test(t.name) ? n === "preview" && e.parameters[r] !== void 0 ? "YOUR_VALUE" : void 0 : bt(e.parameters[r], i, n);
		return a === void 0 ? [] : [[r, a]];
	})), i = t.operation.requestBody?.content[e.mediaType]?.schema, a = n === "storage" && !G(i, (e) => !!e.properties) ? void 0 : bt(e.body, i, n);
	return {
		...e,
		parameters: r,
		body: a,
		serverVariables: Object.fromEntries(Object.entries(e.serverVariables).flatMap(([e, t]) => yt.test(e) ? n === "preview" ? [[e, "YOUR_VALUE"]] : [] : [[e, t]])),
		auth: n === "preview" ? Object.fromEntries(Object.keys(e.auth).map((e) => [e, {
			value: "YOUR_TOKEN",
			username: "YOUR_USERNAME",
			password: "YOUR_PASSWORD"
		}])) : {}
	};
}
var St = 1e5, Ct = 2592e6;
function wt(e, t) {
	return "sourcey:try-it:v1:" + encodeURIComponent(t + "|" + e.specKey + "|" + e.version + "|" + e.operation.method + "|" + e.operation.path);
}
function Tt(e, t) {
	let n = xt(t, e, "storage");
	return {
		at: Date.now(),
		parameters: n.parameters,
		mediaType: n.mediaType,
		body: n.body,
		serverIndex: n.serverIndex,
		serverVariables: n.serverVariables
	};
}
function Et(e, t, n, r) {
	try {
		let i = e.getItem(t);
		if (!i || i.length > St) return;
		let a = JSON.parse(i);
		if (!W(a) || typeof a.at != "number" || Date.now() - a.at > Ct) {
			e.removeItem(t);
			return;
		}
		let o = {
			...r,
			parameters: W(a.parameters) ? a.parameters : {},
			serverVariables: W(a.serverVariables) ? Object.fromEntries(Object.entries(a.serverVariables).filter(([, e]) => typeof e == "string")) : {},
			serverIndex: typeof a.serverIndex == "number" && a.serverIndex >= 0 && a.serverIndex < Math.max(n.servers.length, 1) ? a.serverIndex : 0,
			mediaType: typeof a.mediaType == "string" && n.operation.requestBody?.content[a.mediaType] ? a.mediaType : r.mediaType,
			body: Object.prototype.hasOwnProperty.call(a, "body") ? a.body : r.body,
			auth: {},
			securityIndex: r.securityIndex
		}, s = Tt(n, o);
		return JSON.stringify(a) !== JSON.stringify({
			...s,
			at: a.at
		}) && e.removeItem(t), {
			...o,
			...s,
			parameters: s.parameters
		};
	} catch {
		return;
	}
}
function Dt(e, t, n, r) {
	let i = JSON.stringify(Tt(n, r));
	if (i.length > St) throw Error("Draft exceeds the local cache limit.");
	e.setItem(t, i);
}
function Ot(e) {
	let t = wt(e, location.origin + location.pathname), n = U(!1), [r, i] = H(() => {
		let r = $e(e.operation);
		try {
			let i = Et(localStorage, t, e, r);
			return n.current = !!i, i ?? r;
		} catch {
			return r;
		}
	}), [a, o] = H(n.current ? "Draft restored" : ""), [s, c] = H(!1);
	ye(() => {
		if (!s) return;
		let n = setTimeout(() => {
			try {
				Dt(localStorage, t, e, r), o("Fields saved in this browser");
			} catch {
				o("Draft stays in this tab");
			}
		}, 350);
		return () => clearTimeout(n);
	}, [
		r.parameters,
		r.body,
		r.mediaType,
		r.serverIndex,
		r.serverVariables,
		s
	]), ye(() => {
		if (!a || a === "Draft stays in this tab") return;
		let e = setTimeout(() => o(""), 2500);
		return () => clearTimeout(e);
	}, [a]);
	function l(e, t = !0) {
		i((t) => ({
			...t,
			...e
		})), t && c(!0);
	}
	function u() {
		try {
			localStorage.removeItem(t);
		} catch {}
		c(!1), o("");
	}
	return {
		draft: r,
		update: l,
		saving: a,
		clearSaved: u
	};
}
var kt = 10485760;
async function At(e, t, n = fetch) {
	let r = performance.now(), i = await n(e.url, {
		...jt(e),
		signal: t
	}), a = [], o = 0, s = !1;
	if (i.body) {
		let e = i.body.getReader();
		try {
			for (;;) {
				let { value: t, done: n } = await e.read();
				if (n) break;
				let r = kt - o;
				if (t.length > r) {
					a.push(t.slice(0, r)), o += r, s = !0, await e.cancel();
					break;
				}
				a.push(new Uint8Array(t)), o += t.length;
			}
		} finally {
			e.releaseLock();
		}
	}
	return {
		status: i.status,
		statusText: i.statusText,
		url: i.url || e.url,
		duration: Math.round(performance.now() - r),
		headers: [...i.headers],
		blob: new Blob(a, { type: i.headers.get("content-type") ?? "" }),
		truncated: s
	};
}
function jt(e) {
	let t = new Headers(tt(e.headers)), n;
	if (e.body?.kind === "text") n = e.body.text;
	else if (e.body?.kind === "multipart") {
		let r = new FormData();
		for (let [t, n] of e.body.parts) r.append(t, n);
		n = r, t.delete("Content-Type");
	}
	return {
		method: e.method,
		headers: t,
		body: n,
		credentials: e.credentials
	};
}
function Mt(e) {
	let [t, n] = H(!1), [r, i] = H(""), [a, o] = H(), [s, c] = H(), l = U(void 0), u = U(0), d = U(!0);
	function f() {
		u.current++, l.current && (l.current.abort(), l.current = void 0, n(!1), i("Request cancelled."));
	}
	be(() => {
		d.current = !0;
		let t = document.getElementById(e);
		return t?.addEventListener("sourcey:try-it-close", f), () => {
			d.current = !1, u.current++, l.current?.abort(), l.current = void 0, t?.removeEventListener("sourcey:try-it-close", f);
		};
	}, [e]);
	async function p(e, t) {
		if (l.current) return;
		let r = ++u.current, a = new AbortController();
		l.current = a, n(!0), i("");
		try {
			let n = await At(e, a.signal);
			if (!d.current || r !== u.current) return;
			o(n), c(t), i(`Received HTTP ${n.status}.`);
		} catch (e) {
			if (!d.current || r !== u.current) return;
			i(e instanceof DOMException && e.name === "AbortError" ? "Request cancelled." : "The browser could not complete this request. Check your connection and the server’s browser-access settings. You can also copy the request and run it in a terminal.");
		} finally {
			d.current && r === u.current && (l.current = void 0, n(!1));
		}
	}
	function m() {
		o(void 0), c(void 0), i("");
	}
	return {
		sending: t,
		message: r,
		response: a,
		sentDraft: s,
		setMessage: i,
		send: p,
		abort: f,
		reset: m
	};
}
function Nt(e) {
	let { name: t, path: n, value: r, required: i, description: a, issues: o = [], depth: s = 0 } = e, c = Pe(e.schema), l = c.oneOf ?? c.anyOf, [u, d] = H(() => Math.max(0, l?.findIndex((e) => !K(e, r, n).length) ?? 0)), [f, p] = H(), m = U(r), h = U(null), g = U(null);
	function _(t) {
		m.current = t, e.onChange(t);
	}
	be(() => {
		r === void 0 && g.current && (g.current.value = ""), r !== m.current && (p(void 0), h.current?.setCustomValidity(""), m.current = r);
	}, [r]);
	let v = (e.idPrefix ?? "tryit") + "-field-" + encodeURIComponent(n), b = o.find((e) => e.field === n)?.message, x = Array.isArray(c.type) ? c.type.find((e) => e !== "null") : c.type, S = !!c.properties && !l && s < 12, C = {
		id: v,
		name: n,
		class: "sourcey-input",
		"aria-invalid": !!b,
		"aria-required": i || void 0,
		"aria-describedby": (a ? v + "-help " : "") + (b ? v + "-error" : "") || void 0
	}, w = {
		...C,
		value: r == null ? "" : String(r),
		placeholder: i ? void 0 : "Not set",
		readOnly: c.const !== void 0,
		onInput: (e) => _(e.currentTarget.value === "" ? i ? "" : void 0 : x === "number" || x === "integer" ? Number(e.currentTarget.value) : e.currentTarget.value)
	}, ee = l ? I(y, { children: [I(L, {
		...C,
		class: "sourcey-select",
		value: u,
		onChange: (e) => {
			let t = Number(e.currentTarget.value);
			d(t), _(void 0);
		},
		children: l.map((e, t) => I("option", {
			value: t,
			children: e.title ?? e.refName ?? Le(e)
		}))
	}), I(Nt, {
		...e,
		name: "Value",
		idPrefix: (e.idPrefix ?? "tryit") + "-variant",
		schema: l[u],
		description: l[u]?.description,
		onChange: _,
		depth: s + 1
	})] }) : c.enum ? I(L, {
		...C,
		class: "sourcey-select",
		value: r === void 0 ? "" : String(c.enum.findIndex((e) => JSON.stringify(e) === JSON.stringify(r))),
		onChange: (e) => _(e.currentTarget.value === "" ? void 0 : c.enum[Number(e.currentTarget.value)]),
		children: [I("option", {
			value: "",
			children: i ? "Choose a value" : "Not set"
		}), c.enum.map((e, t) => I("option", {
			value: t,
			title: c.enumDescriptions?.[t],
			children: c.enumNames?.[t] ?? String(e)
		}))]
	}) : c.format === "binary" ? I("input", {
		...C,
		ref: g,
		type: "file",
		onChange: (e) => _(e.currentTarget.files?.[0])
	}) : x === "boolean" ? I(L, {
		...C,
		class: "sourcey-select",
		value: r === void 0 ? "" : String(r),
		onChange: (e) => _(e.currentTarget.value === "" ? void 0 : e.currentTarget.value === "true"),
		children: [
			I("option", {
				value: "",
				children: i ? "Choose a value" : "Not set"
			}),
			I("option", {
				value: "true",
				children: "true"
			}),
			I("option", {
				value: "false",
				children: "false"
			})
		]
	}) : S ? I("div", {
		class: "tryit-object",
		id: v,
		role: "group",
		"aria-labelledby": v + "-label",
		children: Object.entries(c.properties).filter(([, e]) => !Me(e, "request")).map(([t, i]) => I(Nt, {
			name: t,
			path: n + "." + t,
			schema: i,
			value: W(r) ? r[t] : void 0,
			required: c.required?.includes(t),
			description: i.description,
			issues: o,
			depth: s + 1,
			idPrefix: e.idPrefix,
			onChange: (e) => {
				let n = Object.entries(W(r) ? r : {}).filter(([e]) => e !== t);
				_(Object.fromEntries(e === void 0 ? n : [...n, [t, e]]));
			}
		}))
	}) : x === "array" && s < 12 ? I("div", {
		class: "tryit-array",
		id: v,
		role: "group",
		"aria-labelledby": v + "-label",
		children: [(Array.isArray(r) ? r : []).map((i, a) => I("div", {
			class: "tryit-array-item",
			children: [I(Nt, {
				name: "Item " + (a + 1),
				path: n + "." + a,
				schema: c.items,
				value: i,
				depth: s + 1,
				issues: o,
				idPrefix: e.idPrefix,
				onChange: (e) => _(r.map((t, n) => n === a ? e : t))
			}), I("button", {
				type: "button",
				class: "sourcey-button sourcey-button-quiet",
				"aria-label": "Remove " + t + " item " + (a + 1),
				onClick: () => _(r.filter((e, t) => t !== a)),
				children: "Remove"
			})]
		}, a)), I("button", {
			type: "button",
			class: "sourcey-button sourcey-button-quiet",
			disabled: c.maxItems !== void 0 && Array.isArray(r) && r.length >= c.maxItems,
			onClick: () => _([...Array.isArray(r) ? r : [], void 0]),
			children: "Add item"
		})]
	}) : x === "object" || !x || s >= 12 ? I("textarea", {
		...C,
		ref: h,
		class: "sourcey-input sourcey-textarea",
		rows: 5,
		spellcheck: !1,
		value: f ?? (r === void 0 ? "" : JSON.stringify(r, null, 2)),
		onInput: (e) => {
			let t = e.currentTarget.value;
			if (p(t), !t.trim()) e.currentTarget.setCustomValidity(""), _(void 0);
			else try {
				let n = JSON.parse(t);
				e.currentTarget.setCustomValidity(""), _(n);
			} catch {
				e.currentTarget.setCustomValidity("Enter valid JSON.");
			}
		}
	}) : c.format === "password" ? I("input", {
		...w,
		type: "password",
		autoComplete: "off"
	}) : x === "integer" || x === "number" ? I("input", {
		...w,
		type: "number",
		min: c.minimum,
		max: c.maximum,
		step: x === "integer" ? 1 : "any"
	}) : c.format === "date" ? I("input", {
		...w,
		type: "date"
	}) : c.format === "email" ? I("input", {
		...w,
		type: "email"
	}) : I("input", {
		...w,
		type: "text"
	});
	return I("div", {
		class: "sourcey-field",
		children: [
			I("div", {
				class: "tryit-field-heading",
				children: [
					S || x === "array" ? I("span", {
						class: "sourcey-label",
						id: v + "-label",
						children: I("code", { children: t })
					}) : I("label", {
						class: "sourcey-label",
						for: v,
						children: I("code", { children: t })
					}),
					I("span", {
						class: "tryit-field-meta",
						children: i ? "Required" : x ?? ""
					}),
					(c.nullable || Array.isArray(c.type) && c.type.includes("null")) && I("label", {
						class: "tryit-null",
						children: [
							I("input", {
								type: "checkbox",
								checked: r === null,
								onChange: (e) => _(e.currentTarget.checked ? null : void 0)
							}),
							" ",
							"null"
						]
					}),
					r !== void 0 && !i && I("button", {
						type: "button",
						class: "tryit-unset",
						onClick: () => {
							p(void 0), _(void 0);
						},
						children: "Unset"
					})
				]
			}),
			a && I("p", {
				class: "sourcey-help",
				id: v + "-help",
				children: a
			}),
			I("div", {
				class: "sourcey-field-control",
				children: r === null ? I("p", {
					class: "sourcey-help",
					children: "null"
				}) : ee
			}),
			b && I("p", {
				class: "sourcey-error",
				id: v + "-error",
				children: b
			})
		]
	});
}
function Pt({ text: e, label: t = "Copy" }) {
	let [n, r] = H("");
	return ye(() => {
		if (!n) return;
		let e = setTimeout(() => r(""), 1800);
		return () => clearTimeout(e);
	}, [n]), I("button", {
		type: "button",
		class: "sourcey-button sourcey-button-quiet",
		"aria-live": "polite",
		onClick: async () => {
			try {
				await navigator.clipboard.writeText(e), r("Copied");
			} catch {
				r("Select and copy the text");
			}
		},
		children: n || t
	});
}
function Ft({ response: e, stale: t, id: n, headingLevel: r = 3 }) {
	let i = r === 2 ? "h2" : "h3", [a, o] = H("body"), [s, c] = H(!1), [l, u] = H(""), [d, f] = H(""), p = !!e.blob.type && !/json|text|xml|javascript|x-www-form-urlencoded/i.test(e.blob.type), m = e.blob.size > 64e3;
	ye(() => {
		let t = !0;
		u("");
		let n = URL.createObjectURL(e.blob);
		return f(n), p || e.blob.slice(0, 64e3).text().then((e) => {
			t && u(e);
		}), () => {
			t = !1, URL.revokeObjectURL(n);
		};
	}, [e, p]);
	let h = l;
	if (!s && !m) try {
		h = JSON.stringify(JSON.parse(l), null, 2);
	} catch {}
	let g = a === "headers" ? e.headers.map(([e, t]) => e + ": " + t).join("\n") : h, _ = e.status >= 400 ? "tryit-status-error" : "tryit-status-ok";
	return I("section", {
		class: "tryit-response",
		"aria-label": "Live response",
		children: [
			I("div", {
				class: "tryit-heading",
				children: [I(i, { children: "Response" }), I("div", {
					class: "tryit-response-meta",
					children: [I("span", {
						class: "tryit-status " + _,
						children: [
							e.status,
							" ",
							e.statusText
						]
					}), I("span", { children: [
						e.duration,
						" ms ·",
						" ",
						e.blob.size < 1024 ? e.blob.size + " B" : (e.blob.size / 1024).toFixed(1) + " KB"
					] })]
				})]
			}),
			t && I("p", {
				class: "sourcey-help",
				children: "Inputs changed. This is the response to your previous request."
			}),
			I("div", {
				class: "tryit-response-tools",
				children: [
					I("div", {
						class: "tryit-tabs",
						role: "tablist",
						"aria-label": "Response view",
						children: ["body", "headers"].map((e) => I("button", {
							type: "button",
							role: "tab",
							id: n + "-tab-" + e,
							"aria-controls": n + "-response-panel",
							"aria-selected": a === e,
							tabIndex: a === e ? 0 : -1,
							onKeyDown: (e) => {
								if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
									e.preventDefault(), o(a === "body" ? "headers" : "body");
									let t = e.currentTarget.parentElement;
									requestAnimationFrame(() => t?.querySelector("[aria-selected=\"true\"]")?.focus());
								}
							},
							onClick: () => o(e),
							children: e === "body" ? "Body" : "Headers"
						}))
					}),
					a === "body" && !p && I("button", {
						type: "button",
						class: "sourcey-button sourcey-button-quiet",
						"aria-pressed": s,
						onClick: () => c(!s),
						children: s ? "Pretty" : "Raw"
					}),
					!p && I(Pt, {
						text: a === "headers" ? g : l,
						label: m ? "Copy preview" : "Copy"
					})
				]
			}),
			I("div", {
				role: "tabpanel",
				id: n + "-response-panel",
				"aria-labelledby": n + "-tab-" + a,
				tabIndex: 0,
				class: "tryit-response-body",
				children: p && a === "body" ? I("p", { children: ["Binary response · ", e.blob.type] }) : !e.blob.size && a === "body" ? I("p", { children: "No response body." }) : I("pre", { children: I("code", { children: g }) })
			}),
			(m || p) && I("div", {
				class: "tryit-response-download",
				children: [I("p", {
					class: "sourcey-help",
					children: e.truncated ? "Stopped at the 10 MB response limit. Download contains the captured portion." : m ? "Showing the first 64 KB. Download the complete response." : "Download the response to open this file."
				}), I("a", {
					class: "sourcey-button sourcey-button-quiet",
					href: d,
					download: e.truncated ? "response-partial" : "response",
					children: ["Download", e.truncated ? " captured response" : " response"]
				})]
			}),
			I("p", {
				class: "tryit-response-origin",
				children: ["Received from ", I("code", { children: new URL(e.url).host })]
			})
		]
	});
}
function It(e) {
	let t = e.match(/^[a-z][a-z0-9+.-]*:\/\/[^/?#]*/i)?.[0] ?? "";
	return [t, ...e.slice(t.length).split(/(?=[/?&])/)].filter(Boolean);
}
function Lt(e, t) {
	let n = document.createElement("span");
	It(t).forEach((e, t) => {
		t && n.append(document.createElement("wbr")), n.append(e);
	}), e.replaceChildren(n);
}
function Rt({ data: e, id: t, onClose: n, headingLevel: r = 3 }) {
	let i = r === 2 ? "h2" : "h3", a = r === 2 ? "h3" : "h4", { draft: o, update: s, saving: c, clearSaved: l } = Ot(e), u = Mt(t), { sending: d, message: f, response: p, sentDraft: m, setMessage: h, abort: g } = u, [_, v] = H([]), [y, b] = H(e.languages[0] ?? "curl"), [x, S] = H(!1), [C, w] = H(!1), [ee, T] = H(!1), [E, D] = H(0), [O, k] = H(!1), te = U(null), A = {
		...e,
		baseUrl: e.sourceUrl ?? location.href,
		browserOrigin: location.origin
	}, j = it(A, o), ne = it(A, xt(o, e, "preview")), M = dt(x ? j : ne, e.languages.length ? e.languages : ["curl"]), re = M.find((e) => e.label === y || e.lang === y || y === "curl" && e.label === "cURL") ?? M[0], N = e.operation.parameters, ie = N.filter((e) => e.required), ae = N.filter((e) => !e.required), P = [...ie, ...ae.slice(0, 2)], F = ae.slice(2), R = e.operation.security, z = R[o.securityIndex] ?? {}, oe = Object.keys(z), se = e.servers[o.serverIndex] ?? e.servers[0] ?? { url: "/" }, ce = e.operation.requestBody?.content[o.mediaType], le = Object.entries(ce?.examples ?? {}).filter(([, e]) => e.value !== void 0);
	function B(e, t = !0) {
		s(e, t), v([]);
	}
	ye(() => {
		let e = document.getElementById(t);
		if (!e) return;
		e.dataset.tryItUrl = ne.url;
		let n = e.closest("[data-sourcey-operation]")?.querySelector("[data-endpoint-url]");
		!e.hidden && n && ne.url && Lt(n, ne.url);
	}, [ne.url]);
	async function ue() {
		if (d) return;
		if (j.issues.length) {
			v(j.issues), w(j.issues.some((e) => e.field.startsWith("auth."))), T(!0), h("Check the highlighted fields before sending."), requestAnimationFrame(() => te.current?.querySelector("[aria-invalid=\"true\"]")?.focus());
			return;
		}
		let e = te.current?.querySelector("input:invalid, select:invalid, textarea:invalid");
		e ? (v([{
			field: e.name,
			message: e.validationMessage
		}]), h("Check the highlighted fields before sending."), e.focus()) : (v([]), await u.send(j, o));
	}
	let V = (e) => I(Nt, {
		idPrefix: t,
		name: e.name,
		path: q(e),
		schema: e.schema ?? Object.values(e.content ?? {})[0]?.schema,
		value: o.parameters[q(e)],
		required: e.required,
		description: e.description,
		issues: _,
		onChange: (t) => {
			let n = { ...o.parameters };
			t === void 0 ? delete n[q(e)] : n[q(e)] = t, B({ parameters: n });
		}
	}, q(e));
	return I("div", {
		class: "tryit-panel",
		children: [I("form", {
			ref: te,
			noValidate: !0,
			onSubmit: (e) => {
				e.preventDefault(), ue();
			},
			onKeyDown: (e) => {
				(e.metaKey || e.ctrlKey) && e.key === "Enter" && (e.preventDefault(), ue()), e.key === "Escape" && !(e.target instanceof HTMLSelectElement) && (e.preventDefault(), n());
			},
			children: [
				I("div", {
					class: "tryit-heading",
					children: [I(i, { children: "Request" }), I("button", {
						type: "button",
						class: "sourcey-button sourcey-button-quiet",
						disabled: d,
						onClick: () => {
							B({
								...$e(e.operation),
								serverIndex: o.serverIndex,
								serverVariables: o.serverVariables,
								auth: o.auth
							}), u.reset(), D((e) => e + 1), l();
						},
						children: "Reset"
					})]
				}),
				I("fieldset", {
					class: "tryit-fields",
					disabled: d,
					children: [
						I("div", {
							class: "tryit-server",
							children: [e.servers.length > 1 ? I("label", {
								class: "sourcey-label",
								for: t + "-server",
								children: "Server"
							}) : I("span", {
								class: "sourcey-label",
								children: "Server"
							}), e.servers.length > 1 ? I(L, {
								id: t + "-server",
								class: "sourcey-select",
								value: o.serverIndex,
								onChange: (t) => {
									B({
										...xt(o, e, "clear"),
										serverIndex: Number(t.currentTarget.value),
										serverVariables: {}
									}), S(!1);
								},
								children: e.servers.map((e, t) => I("option", {
									value: t,
									children: e.description ?? e.url
								}))
							}) : I("span", {
								class: "sourcey-help",
								children: se.description ?? se.url
							})]
						}),
						Object.entries(se.variables ?? {}).map(([n, r]) => I(Nt, {
							name: n,
							path: "server." + n,
							idPrefix: t,
							required: !0,
							schema: {
								type: "string",
								enum: r.enum
							},
							description: r.description,
							issues: _,
							value: o.serverVariables[n] ?? r.default,
							onChange: (t) => B({
								...xt(o, e, "clear"),
								serverVariables: {
									...o.serverVariables,
									[n]: String(t ?? "")
								}
							})
						})),
						R.length > 0 && I("details", {
							class: "tryit-auth",
							open: C,
							onToggle: (e) => w(e.currentTarget.open),
							children: [
								I("summary", { children: [I("span", { children: "Authentication" }), I("span", {
									class: "sourcey-help",
									children: oe.length ? oe.every((t) => {
										let n = o.auth[t], r = e.securitySchemes[t];
										return r?.type === "apiKey" && r.in === "cookie" || !!(n?.value || n?.username || n?.password);
									}) ? "Added for this tab" : "Required" : "Not required"
								})] }),
								R.length > 1 && I("div", {
									class: "sourcey-field",
									children: [I("label", {
										class: "sourcey-label",
										for: t + "-security",
										children: "Authentication method"
									}), I(L, {
										class: "sourcey-select",
										id: t + "-security",
										value: o.securityIndex,
										onChange: (e) => B({
											securityIndex: Number(e.currentTarget.value),
											auth: {}
										}, !1),
										children: R.map((e, t) => I("option", {
											value: t,
											children: Object.keys(e).join(" + ") || "No authentication"
										}))
									})]
								}),
								oe.map((n) => {
									let r = e.securitySchemes[n];
									if (!r) return I("p", {
										class: "sourcey-error",
										children: ["Missing security scheme: ", n]
									});
									if (r.type === "apiKey" && r.in === "cookie") return I("p", {
										class: "sourcey-help",
										children: [n, " uses your existing browser session. Cookies are managed by the browser."]
									});
									let i = r.type === "http" && r.scheme?.toLowerCase() === "basic", a = i ? ["username", "password"] : ["value"], s = _.find((e) => e.field === "auth." + n)?.message, c = t + "-auth-" + encodeURIComponent(n) + "-error";
									return I("div", {
										class: "tryit-auth-fields",
										children: [
											r.type === "oauth2" || r.type === "openIdConnect" ? I("p", {
												class: "sourcey-help",
												children: [
													"Paste an existing access token for ",
													n,
													". This console does not run an authorization flow."
												]
											}) : null,
											a.map((e) => {
												let a = {
													class: "sourcey-input",
													id: t + "-auth-" + encodeURIComponent(n) + "-" + e,
													autoComplete: "off",
													spellcheck: !1,
													value: o.auth[n]?.[e] ?? "",
													"aria-invalid": !!s,
													"aria-describedby": s ? c : void 0,
													onInput: (t) => B({ auth: {
														...o.auth,
														[n]: {
															...o.auth[n],
															[e]: t.currentTarget.value
														}
													} }, !1)
												};
												return I("div", {
													class: "sourcey-field",
													children: [I("label", {
														class: "sourcey-label",
														for: a.id,
														children: i ? e === "username" ? "Username" : "Password" : r.type === "apiKey" ? r.name ?? n : n + " access token"
													}), e === "username" ? I("input", {
														...a,
														type: "text"
													}) : I("input", {
														...a,
														type: "password"
													})]
												});
											}),
											s && I("p", {
												class: "sourcey-error",
												id: c,
												children: s
											})
										]
									}, n);
								}),
								I("div", {
									class: "tryit-auth-note",
									children: [I("p", {
										class: "sourcey-help",
										children: "Credentials stay in this tab and are sent to the selected server."
									}), I("button", {
										type: "button",
										class: "sourcey-button sourcey-button-quiet",
										onClick: () => {
											B(xt(o, e, "clear"), !1), S(!1);
										},
										children: "Clear credentials"
									})]
								})
							]
						}),
						P.length > 0 && I("div", {
							class: "tryit-parameters",
							children: P.map(V)
						}),
						F.length > 0 && I("details", {
							class: "tryit-optional",
							open: ee,
							onToggle: (e) => T(e.currentTarget.open),
							children: [I("summary", { children: ["More parameters ", I("span", {
								class: "sourcey-help",
								children: [
									"(",
									F.length,
									")"
								]
							})] }), F.map(V)]
						}),
						e.operation.requestBody && I("section", {
							class: "tryit-body",
							children: [
								I("div", {
									class: "tryit-heading",
									children: [
										I(a, { children: ["Body", e.operation.requestBody.required ? " · required" : ""] }),
										o.mediaType.includes("json") && I("button", {
											type: "button",
											class: "sourcey-button sourcey-button-quiet",
											"aria-pressed": O,
											onClick: () => {
												let e = te.current?.querySelector("textarea[name=\"body\"]:invalid");
												e ? (e.focus(), v([{
													field: "body",
													message: e.validationMessage
												}])) : k(!O);
											},
											children: O ? "Use fields" : "Edit JSON"
										}),
										I("label", {
											class: "tryit-media",
											children: [I("span", {
												class: "sr-only",
												children: "Request body media type"
											}), I(L, {
												class: "sourcey-select",
												value: o.mediaType,
												onChange: (t) => {
													let n = t.currentTarget.value, r = e.operation.requestBody.content[n];
													B({
														mediaType: n,
														body: r.example ?? Object.values(r.examples ?? {})[0]?.value ?? (r.schema ? Re(r.schema, "request") : "")
													});
												},
												children: Object.keys(e.operation.requestBody.content).map((e) => I("option", {
													value: e,
													children: e
												}))
											})]
										})
									]
								}),
								le.length > 0 && I("div", {
									class: "sourcey-field",
									children: [I("label", {
										class: "sourcey-label",
										for: t + "-example",
										children: "Use an example"
									}), I(L, {
										class: "sourcey-select",
										id: t + "-example",
										value: "",
										onChange: (e) => {
											let t = ce?.examples?.[e.currentTarget.value];
											t && B({ body: t.value });
										},
										children: [I("option", {
											value: "",
											children: "Choose an example"
										}), le.map(([e, t]) => I("option", {
											value: e,
											children: t.summary ?? e
										}))]
									})]
								}),
								I(Nt, {
									name: "Request body",
									path: "body",
									idPrefix: t,
									schema: O && o.mediaType.includes("json") ? {} : ce?.schema ?? (/json|form/.test(o.mediaType) ? {} : { type: "string" }),
									required: e.operation.requestBody.required,
									description: e.operation.requestBody.description,
									value: o.body,
									issues: _,
									onChange: (e) => B({ body: e })
								}, o.mediaType + ":" + O)
							]
						})
					]
				}, E),
				_.length > 0 && I("div", {
					class: "sourcey-error tryit-errors",
					role: "alert",
					children: I("ul", { children: _.map((e) => I("li", { children: [
						I("strong", { children: [e.field.replace(/^(auth\.|body\.|query:|path:|header:)/, ""), ":"] }),
						" ",
						e.message
					] }, e.field + e.message)) })
				}),
				I("div", {
					class: "tryit-actions",
					children: [
						I("span", {
							class: "sourcey-help tryit-saved",
							role: "status",
							children: c
						}),
						I("span", {
							class: "tryit-shortcut",
							"aria-hidden": "true",
							children: [/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl", " Enter"]
						}),
						d ? I("button", {
							type: "button",
							class: "sourcey-button sourcey-button-primary",
							onClick: (e) => {
								e.preventDefault(), g();
							},
							children: "Cancel request"
						}, "cancel") : I("button", {
							type: "submit",
							class: "sourcey-button sourcey-button-primary",
							children: ["Send request ", I("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						}, "send")
					]
				}),
				I("p", {
					class: "sourcey-help tryit-send-target",
					children: [
						"Sends ",
						j.method,
						" to",
						" ",
						I("code", { children: j.url ? new URL(j.url).origin : se.url }),
						e.credentials === "include" ? " with browser session credentials." : "."
					]
				}),
				I("div", {
					class: "tryit-feedback",
					role: "status",
					"aria-live": "polite",
					children: d ? "Sending request…" : f
				}),
				I("details", {
					class: "tryit-preview",
					children: [
						I("summary", { children: ["View request ", I("span", {
							class: "sourcey-help",
							children: re?.label ?? "cURL"
						})] }),
						I("div", {
							class: "tryit-preview-tools",
							children: [I("label", { children: [I("span", {
								class: "sr-only",
								children: "Code sample language"
							}), I(L, {
								class: "sourcey-select",
								value: re?.label,
								onChange: (e) => b(e.currentTarget.value),
								children: M.map((e) => I("option", {
									value: e.label,
									children: e.label
								}))
							})] }), re && I(Pt, { text: re.source })]
						}),
						I("pre", {
							class: "tryit-code",
							tabIndex: 0,
							children: I("code", { children: re?.source })
						}),
						I("label", {
							class: "tryit-include",
							children: [
								I("input", {
									type: "checkbox",
									checked: x,
									onChange: (e) => S(e.currentTarget.checked)
								}),
								" ",
								"Include credentials in the preview and copied code"
							]
						})
					]
				})
			]
		}), p && I(Ft, {
			response: p,
			stale: m !== o,
			id: t,
			headingLevel: r
		})]
	});
}
function zt(e, t, n) {
	let r = e.dataset.tryItHeading === "2" ? 2 : 3;
	P(_(Rt, {
		data: t,
		id: e.id,
		onClose: n,
		headingLevel: r
	}), e), window.addEventListener("pagehide", () => {
		n(), P(null, e);
	}, { once: !0 });
}
export { zt as activate };
