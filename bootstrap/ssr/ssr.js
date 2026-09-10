import { computed, createBlock, createSSRApp, createTextVNode, createVNode, h, mergeProps, nextTick, onMounted, onUnmounted, openBlock, ref, renderSlot, toDisplayString, unref, useModel, useSSRContext, watch, withCtx, withKeys } from "vue";
import { ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { Head, Link, createInertiaApp, useForm, usePage } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region resources/js/Pages/Auth/ConfirmPassword.vue
var ConfirmPassword_exports = /* @__PURE__ */ __exportAll({ default: () => ConfirmPassword_default });
var _sfc_main$25 = {
	__name: "ConfirmPassword",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({ password: "" });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent));
			_push(`<div class="auth-page" data-v-8a81e80d><section class="auth-left" data-v-8a81e80d><div class="brand" data-v-8a81e80d><div class="brand-mark" data-v-8a81e80d>H</div><span data-v-8a81e80d>Haven</span></div><div class="welcome-content" data-v-8a81e80d><p class="eyebrow" data-v-8a81e80d>SECURITY CHECK</p><h1 data-v-8a81e80d>Confirm Your Password</h1><p class="welcome-copy" data-v-8a81e80d> This is a secure area of Haven. Confirm your password before continuing. </p></div></section><section class="auth-right" data-v-8a81e80d><div class="form-card" data-v-8a81e80d><div class="form-heading" data-v-8a81e80d><h2 data-v-8a81e80d>Confirm Password</h2><p data-v-8a81e80d> Enter your current password to continue. </p></div><form data-v-8a81e80d><div class="field" data-v-8a81e80d><label for="password" data-v-8a81e80d>Password</label><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" autocomplete="current-password" autofocus placeholder="Enter your password" data-v-8a81e80d>`);
			if (unref(form).errors.password) _push(`<p class="field-error" data-v-8a81e80d>${ssrInterpolate(unref(form).errors.password)}</p>`);
			else _push(`<!---->`);
			_push(`</div><button type="submit" class="confirm-button"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-8a81e80d>${ssrInterpolate(unref(form).processing ? "Confirming..." : "Confirm Password")}</button></form></div></section></div><!--]-->`);
		};
	}
};
var _sfc_setup$25 = _sfc_main$25.setup;
_sfc_main$25.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
var ConfirmPassword_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$25, [["__scopeId", "data-v-8a81e80d"]]);
//#endregion
//#region vendor/tightenco/ziggy/dist/index.esm.js
function t(t, e) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r);
	}
}
function e(e, n, r) {
	return n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n() {
	return n = Object.assign ? Object.assign.bind() : function(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = arguments[e];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
		}
		return t;
	}, n.apply(null, arguments);
}
function r(t) {
	return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
		return t.__proto__ || Object.getPrototypeOf(t);
	}, r(t);
}
function o() {
	try {
		var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch (t) {}
	return (o = function() {
		return !!t;
	})();
}
function i(t, e) {
	return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, i(t, e);
}
function u(t) {
	var e = function(t) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var n = e.call(t, "string");
			if ("object" != typeof n) return n;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return String(t);
	}(t);
	return "symbol" == typeof e ? e : e + "";
}
function f(t) {
	var e = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
	return f = function(t) {
		if (null === t || !function(t) {
			try {
				return -1 !== Function.toString.call(t).indexOf("[native code]");
			} catch (e) {
				return "function" == typeof t;
			}
		}(t)) return t;
		if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
		if (void 0 !== e) {
			if (e.has(t)) return e.get(t);
			e.set(t, n);
		}
		function n() {
			return function(t, e, n) {
				if (o()) return Reflect.construct.apply(null, arguments);
				var r = [null];
				r.push.apply(r, e);
				var u = new (t.bind.apply(t, r))();
				return n && i(u, n.prototype), u;
			}(t, arguments, r(this).constructor);
		}
		return n.prototype = Object.create(t.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), i(n, t);
	}, f(t);
}
var c = String.prototype.replace;
var a = /%20/g;
var l = {
	RFC1738: function(t) {
		return c.call(t, a, "+");
	},
	RFC3986: function(t) {
		return String(t);
	}
};
var s = "RFC3986";
var p = Object.prototype.hasOwnProperty;
var y = Array.isArray;
var d = /* @__PURE__ */ new WeakMap();
var b = function(t, e) {
	return d.set(t, e), t;
};
function v(t) {
	return d.has(t);
}
var h$1 = function(t) {
	return d.get(t);
};
var m = function(t, e) {
	d.set(t, e);
};
var g = function() {
	const t = [];
	for (let e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
	return t;
}();
var w = function(t, e) {
	const n = e && e.plainObjects ? Object.create(null) : {};
	for (let e = 0; e < t.length; ++e) void 0 !== t[e] && (n[e] = t[e]);
	return n;
};
var j = function t(e, n, r) {
	if (!n) return e;
	if ("object" != typeof n) {
		if (y(e)) e.push(n);
		else {
			if (!e || "object" != typeof e) return [e, n];
			if (v(e)) {
				var o = h$1(e) + 1;
				e[o] = n, m(e, o);
			} else (r && (r.plainObjects || r.allowPrototypes) || !p.call(Object.prototype, n)) && (e[n] = !0);
		}
		return e;
	}
	if (!e || "object" != typeof e) {
		if (v(n)) {
			for (var i = Object.keys(n), u = r && r.plainObjects ? {
				__proto__: null,
				0: e
			} : { 0: e }, f = 0; f < i.length; f++) u[parseInt(i[f], 10) + 1] = n[i[f]];
			return b(u, h$1(n) + 1);
		}
		return [e].concat(n);
	}
	let c = e;
	return y(e) && !y(n) && (c = w(e, r)), y(e) && y(n) ? (n.forEach(function(n, o) {
		if (p.call(e, o)) {
			const i = e[o];
			i && "object" == typeof i && n && "object" == typeof n ? e[o] = t(i, n, r) : e.push(n);
		} else e[o] = n;
	}), e) : Object.keys(n).reduce(function(e, o) {
		const i = n[o];
		return e[o] = p.call(e, o) ? t(e[o], i, r) : i, e;
	}, c);
};
var O = 1024;
var E = function(t, e, n, r) {
	if (v(t)) {
		var o = h$1(t) + 1;
		return t[o] = e, m(t, o), t;
	}
	var i = [].concat(t, e);
	return i.length > n ? b(w(i, { plainObjects: r }), i.length - 1) : i;
};
var T = function(t, e) {
	if (y(t)) {
		const n = [];
		for (let r = 0; r < t.length; r += 1) n.push(e(t[r]));
		return n;
	}
	return e(t);
};
var R = Object.prototype.hasOwnProperty;
var k = {
	brackets: function(t) {
		return t + "[]";
	},
	comma: "comma",
	indices: function(t, e) {
		return t + "[" + e + "]";
	},
	repeat: function(t) {
		return t;
	}
};
var S = Array.isArray;
var I = Array.prototype.push;
var A = function(t, e) {
	I.apply(t, S(e) ? e : [e]);
};
var D = Date.prototype.toISOString;
var $ = {
	addQueryPrefix: !1,
	allowDots: !1,
	allowEmptyArrays: !1,
	arrayFormat: "indices",
	charset: "utf-8",
	charsetSentinel: !1,
	delimiter: "&",
	encode: !0,
	encodeDotInKeys: !1,
	encoder: function(t, e, n, r, o) {
		if (0 === t.length) return t;
		let i = t;
		if ("symbol" == typeof t ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === n) return escape(i).replace(/%u[0-9a-f]{4}/gi, function(t) {
			return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
		});
		let u = "";
		for (let t = 0; t < i.length; t += O) {
			const e = i.length >= O ? i.slice(t, t + O) : i, n = [];
			for (let t = 0; t < e.length; ++t) {
				let r = e.charCodeAt(t);
				45 === r || 46 === r || 95 === r || 126 === r || r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122 || "RFC1738" === o && (40 === r || 41 === r) ? n[n.length] = e.charAt(t) : r < 128 ? n[n.length] = g[r] : r < 2048 ? n[n.length] = g[192 | r >> 6] + g[128 | 63 & r] : r < 55296 || r >= 57344 ? n[n.length] = g[224 | r >> 12] + g[128 | r >> 6 & 63] + g[128 | 63 & r] : (t += 1, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(t)), n[n.length] = g[240 | r >> 18] + g[128 | r >> 12 & 63] + g[128 | r >> 6 & 63] + g[128 | 63 & r]);
			}
			u += n.join("");
		}
		return u;
	},
	encodeValuesOnly: !1,
	format: s,
	formatter: l[s],
	indices: !1,
	serializeDate: function(t) {
		return D.call(t);
	},
	skipNulls: !1,
	strictNullHandling: !1
};
var N = {};
var _ = function(t, e, n, r, o, i, u, f, c, a, l, s, p, y, d, b, v, h) {
	let m = t, g = h, w = 0, j = !1;
	for (; void 0 !== (g = g.get(N)) && !j;) {
		const e = g.get(t);
		if (w += 1, void 0 !== e) {
			if (e === w) throw new RangeError("Cyclic object value");
			j = !0;
		}
		void 0 === g.get(N) && (w = 0);
	}
	if ("function" == typeof a ? m = a(e, m) : m instanceof Date ? m = p(m) : "comma" === n && S(m) && (m = T(m, function(t) {
		return t instanceof Date ? p(t) : t;
	})), null === m) {
		if (i) return c && !b ? c(e, $.encoder, v, "key", y) : e;
		m = "";
	}
	if ("string" == typeof (O = m) || "number" == typeof O || "boolean" == typeof O || "symbol" == typeof O || "bigint" == typeof O || function(t) {
		return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
	}(m)) return c ? [d(b ? e : c(e, $.encoder, v, "key", y)) + "=" + d(c(m, $.encoder, v, "value", y))] : [d(e) + "=" + d(String(m))];
	var O;
	const E = [];
	if (void 0 === m) return E;
	let R;
	if ("comma" === n && S(m)) b && c && (m = T(m, c)), R = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
	else if (S(a)) R = a;
	else {
		const t = Object.keys(m);
		R = l ? t.sort(l) : t;
	}
	const k = f ? e.replace(/\./g, "%2E") : e, I = r && S(m) && 1 === m.length ? k + "[]" : k;
	if (o && S(m) && 0 === m.length) return I + "[]";
	for (let e = 0; e < R.length; ++e) {
		const g = R[e], j = "object" == typeof g && void 0 !== g.value ? g.value : m[g];
		if (u && null === j) continue;
		const O = s && f ? g.replace(/\./g, "%2E") : g, T = S(m) ? "function" == typeof n ? n(I, O) : I : I + (s ? "." + O : "[" + O + "]");
		h.set(t, w);
		const k = /* @__PURE__ */ new WeakMap();
		k.set(N, h), A(E, _(j, T, n, r, o, i, u, f, "comma" === n && b && S(m) ? null : c, a, l, s, p, y, d, b, v, k));
	}
	return E;
};
var x = Object.prototype.hasOwnProperty;
var C = Array.isArray;
var P = {
	allowDots: !1,
	allowEmptyArrays: !1,
	allowPrototypes: !1,
	allowSparse: !1,
	arrayLimit: 20,
	charset: "utf-8",
	charsetSentinel: !1,
	comma: !1,
	decodeDotInKeys: !1,
	decoder: function(t, e, n) {
		const r = t.replace(/\+/g, " ");
		if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
		try {
			return decodeURIComponent(r);
		} catch (t) {
			return r;
		}
	},
	delimiter: "&",
	depth: 5,
	duplicates: "combine",
	ignoreQueryPrefix: !1,
	interpretNumericEntities: !1,
	parameterLimit: 1e3,
	parseArrays: !0,
	plainObjects: !1,
	strictNullHandling: !1
};
var Z = function(t) {
	return t.replace(/&#(\d+);/g, function(t, e) {
		return String.fromCharCode(parseInt(e, 10));
	});
};
var F = function(t, e) {
	return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
};
var U = function(t, e, n, r) {
	if (!t) return;
	const o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, i = /(\[[^[\]]*])/g;
	let u = n.depth > 0 && /(\[[^[\]]*])/.exec(o);
	const f = u ? o.slice(0, u.index) : o, c = [];
	if (f) {
		if (!n.plainObjects && x.call(Object.prototype, f) && !n.allowPrototypes) return;
		c.push(f);
	}
	let a = 0;
	for (; n.depth > 0 && null !== (u = i.exec(o)) && a < n.depth;) {
		if (a += 1, !n.plainObjects && x.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
		c.push(u[1]);
	}
	return u && c.push("[" + o.slice(u.index) + "]"), function(t, e, n, r) {
		let o = r ? e : F(e, n);
		for (let e = t.length - 1; e >= 0; --e) {
			let r;
			const i = t[e];
			if ("[]" === i && n.parseArrays) r = v(o) ? o : n.allowEmptyArrays && ("" === o || n.strictNullHandling && null === o) ? [] : E([], o, n.arrayLimit, n.plainObjects);
			else {
				r = n.plainObjects ? Object.create(null) : {};
				const t = "[" === i.charAt(0) && "]" === i.charAt(i.length - 1) ? i.slice(1, -1) : i, e = n.decodeDotInKeys ? t.replace(/%2E/g, ".") : t, u = parseInt(e, 10);
				n.parseArrays || "" !== e ? !isNaN(u) && i !== e && String(u) === e && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (r = [], r[u] = o) : "__proto__" !== e && (r[e] = o) : r = { 0: o };
			}
			o = r;
		}
		return o;
	}(c, e, n, r);
};
function q(t, e) {
	const n = function(t) {
		if (!t) return P;
		if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
		if (void 0 !== t.decodeDotInKeys && "boolean" != typeof t.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
		if (null != t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
		if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
		const e = void 0 === t.charset ? P.charset : t.charset, n = void 0 === t.duplicates ? P.duplicates : t.duplicates;
		if ("combine" !== n && "first" !== n && "last" !== n) throw new TypeError("The duplicates option must be either combine, first, or last");
		return {
			allowDots: void 0 === t.allowDots ? !0 === t.decodeDotInKeys || P.allowDots : !!t.allowDots,
			allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : P.allowEmptyArrays,
			allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : P.allowPrototypes,
			allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : P.allowSparse,
			arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : P.arrayLimit,
			charset: e,
			charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : P.charsetSentinel,
			comma: "boolean" == typeof t.comma ? t.comma : P.comma,
			decodeDotInKeys: "boolean" == typeof t.decodeDotInKeys ? t.decodeDotInKeys : P.decodeDotInKeys,
			decoder: "function" == typeof t.decoder ? t.decoder : P.decoder,
			delimiter: "string" == typeof t.delimiter || (r = t.delimiter, "[object RegExp]" === Object.prototype.toString.call(r)) ? t.delimiter : P.delimiter,
			depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : P.depth,
			duplicates: n,
			ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
			interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : P.interpretNumericEntities,
			parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : P.parameterLimit,
			parseArrays: !1 !== t.parseArrays,
			plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : P.plainObjects,
			strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : P.strictNullHandling
		};
		var r;
	}(e);
	if ("" === t || null == t) return n.plainObjects ? Object.create(null) : {};
	const r = "string" == typeof t ? function(t, e) {
		const n = { __proto__: null }, r = (e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(e.delimiter, Infinity === e.parameterLimit ? void 0 : e.parameterLimit);
		let o, i = -1, u = e.charset;
		if (e.charsetSentinel) for (o = 0; o < r.length; ++o) 0 === r[o].indexOf("utf8=") && ("utf8=%E2%9C%93" === r[o] ? u = "utf-8" : "utf8=%26%2310003%3B" === r[o] && (u = "iso-8859-1"), i = o, o = r.length);
		for (o = 0; o < r.length; ++o) {
			if (o === i) continue;
			const t = r[o], f = t.indexOf("]="), c = -1 === f ? t.indexOf("=") : f + 1;
			let a, l;
			-1 === c ? (a = e.decoder(t, P.decoder, u, "key"), l = e.strictNullHandling ? null : "") : (a = e.decoder(t.slice(0, c), P.decoder, u, "key"), l = T(F(t.slice(c + 1), e), function(t) {
				return e.decoder(t, P.decoder, u, "value");
			})), l && e.interpretNumericEntities && "iso-8859-1" === u && (l = Z(l)), t.indexOf("[]=") > -1 && (l = C(l) ? [l] : l);
			const s = x.call(n, a);
			s && "combine" === e.duplicates ? n[a] = E(n[a], l, e.arrayLimit, e.plainObjects) : s && "last" !== e.duplicates || (n[a] = l);
		}
		return n;
	}(t, n) : t;
	let o = n.plainObjects ? Object.create(null) : {};
	const i = Object.keys(r);
	for (let e = 0; e < i.length; ++e) {
		const u = i[e], f = U(u, r[u], n, "string" == typeof t);
		o = j(o, f, n);
	}
	return !0 === n.allowSparse ? o : function(t) {
		const e = [{
			obj: { o: t },
			prop: "o"
		}], n = [];
		for (let t = 0; t < e.length; ++t) {
			const r = e[t], o = r.obj[r.prop], i = Object.keys(o);
			for (let t = 0; t < i.length; ++t) {
				const r = i[t], u = o[r];
				"object" == typeof u && null !== u && -1 === n.indexOf(u) && (e.push({
					obj: o,
					prop: r
				}), n.push(u));
			}
		}
		return function(t) {
			for (; t.length > 1;) {
				const e = t.pop(), n = e.obj[e.prop];
				if (y(n)) {
					const t = [];
					for (let e = 0; e < n.length; ++e) void 0 !== n[e] && t.push(n[e]);
					e.obj[e.prop] = t;
				}
			}
		}(e), t;
	}(o);
}
var K = /*#__PURE__*/ function() {
	function t(t, e, n) {
		var r, o;
		this.name = t, this.definition = e, this.bindings = null != (r = e.bindings) ? r : {}, this.wheres = null != (o = e.wheres) ? o : {}, this.config = n;
	}
	var n = t.prototype;
	return n.matchesUrl = function(t) {
		var e, n = this;
		if (!this.definition.methods.includes("GET")) return !1;
		var r = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, function(t, e, r, o) {
			var i, u = "(?<" + r + ">" + ((null == (i = n.wheres[r]) ? void 0 : i.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
			return o ? "(" + e + u + ")?" : "" + e + u;
		}).replace(/^\w+:\/\//, ""), o = t.replace(/^\w+:\/\//, "").split("?"), i = o[0], u = o[1], f = null != (e = new RegExp("^" + r + "/?$").exec(i)) ? e : new RegExp("^" + r + "/?$").exec(decodeURI(i));
		if (f) {
			for (var c in f.groups) f.groups[c] = "string" == typeof f.groups[c] ? decodeURIComponent(f.groups[c]) : f.groups[c];
			return {
				params: f.groups,
				query: q(u)
			};
		}
		return !1;
	}, n.compile = function(t) {
		var e = this;
		return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n, r, o) {
			var i, u;
			if (!o && [null, void 0].includes(t[r])) throw new Error("Ziggy error: '" + r + "' parameter is required for route '" + e.name + "'.");
			if (e.wheres[r] && !new RegExp("^" + (o ? "(" + e.wheres[r] + ")?" : e.wheres[r]) + "$").test(null != (u = t[r]) ? u : "")) throw new Error("Ziggy error: '" + r + "' parameter '" + t[r] + "' does not match required format '" + e.wheres[r] + "' for route '" + e.name + "'.");
			return encodeURI(null != (i = t[r]) ? i : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
		}).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
	}, e(t, [
		{
			key: "template",
			get: function() {
				var t = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
				return "" === t ? "/" : t;
			}
		},
		{
			key: "origin",
			get: function() {
				return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
			}
		},
		{
			key: "parameterSegments",
			get: function() {
				var t, e;
				return null != (t = null == (e = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e.map(function(t) {
					return {
						name: t.replace(/{|\??}/g, ""),
						required: !/\?}$/.test(t)
					};
				})) ? t : [];
			}
		}
	]);
}();
var z = /*#__PURE__*/ function(t) {
	function r(e, r, o, i) {
		var u;
		if (void 0 === o && (o = !0), (u = t.call(this) || this).t = null != i ? i : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, !u.t && "undefined" != typeof document && document.getElementById("ziggy-routes-json") && (globalThis.Ziggy = JSON.parse(document.getElementById("ziggy-routes-json").textContent), u.t = globalThis.Ziggy), u.t = n({}, u.t, { absolute: o }), e) {
			if (!u.t.routes[e]) throw new Error("Ziggy error: route '" + e + "' is not in the route list.");
			u.i = new K(e, u.t.routes[e], u.t), u.u = u.l(r);
		}
		return u;
	}
	var o, u = t;
	(o = r).prototype = Object.create(u.prototype), o.prototype.constructor = o, i(o, u);
	var f = r.prototype;
	return f.toString = function() {
		var t = this, e = Object.keys(this.u).filter(function(e) {
			return !t.i.parameterSegments.some(function(t) {
				return t.name === e;
			});
		}).filter(function(t) {
			return "_query" !== t;
		}).reduce(function(e, r) {
			var o;
			return n({}, e, ((o = {})[r] = t.u[r], o));
		}, {});
		return this.i.compile(this.u) + function(t, e) {
			let n = t;
			const r = function(t) {
				if (!t) return $;
				if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
				if (void 0 !== t.encodeDotInKeys && "boolean" != typeof t.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
				if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
				const e = t.charset || $.charset;
				if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
				let n = s;
				if (void 0 !== t.format) {
					if (!R.call(l, t.format)) throw new TypeError("Unknown format option provided.");
					n = t.format;
				}
				const r = l[n];
				let o, i = $.filter;
				if (("function" == typeof t.filter || S(t.filter)) && (i = t.filter), o = t.arrayFormat in k ? t.arrayFormat : "indices" in t ? t.indices ? "indices" : "repeat" : $.arrayFormat, "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
				return {
					addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : $.addQueryPrefix,
					allowDots: void 0 === t.allowDots ? !0 === t.encodeDotInKeys || $.allowDots : !!t.allowDots,
					allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : $.allowEmptyArrays,
					arrayFormat: o,
					charset: e,
					charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : $.charsetSentinel,
					commaRoundTrip: t.commaRoundTrip,
					delimiter: void 0 === t.delimiter ? $.delimiter : t.delimiter,
					encode: "boolean" == typeof t.encode ? t.encode : $.encode,
					encodeDotInKeys: "boolean" == typeof t.encodeDotInKeys ? t.encodeDotInKeys : $.encodeDotInKeys,
					encoder: "function" == typeof t.encoder ? t.encoder : $.encoder,
					encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : $.encodeValuesOnly,
					filter: i,
					format: n,
					formatter: r,
					serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : $.serializeDate,
					skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : $.skipNulls,
					sort: "function" == typeof t.sort ? t.sort : null,
					strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : $.strictNullHandling
				};
			}(e);
			let o, i;
			"function" == typeof r.filter ? (i = r.filter, n = i("", n)) : S(r.filter) && (i = r.filter, o = i);
			const u = [];
			if ("object" != typeof n || null === n) return "";
			const f = k[r.arrayFormat], c = "comma" === f && r.commaRoundTrip;
			o || (o = Object.keys(n)), r.sort && o.sort(r.sort);
			const a = /* @__PURE__ */ new WeakMap();
			for (let t = 0; t < o.length; ++t) {
				const e = o[t];
				r.skipNulls && null === n[e] || A(u, _(n[e], e, f, c, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, a));
			}
			const p = u.join(r.delimiter);
			let y = !0 === r.addQueryPrefix ? "?" : "";
			return r.charsetSentinel && (y += "iso-8859-1" === r.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), p.length > 0 ? y + p : "";
		}(n({}, e, this.u._query), {
			addQueryPrefix: !0,
			arrayFormat: "indices",
			encodeValuesOnly: !0,
			skipNulls: !0,
			encoder: function(t, e) {
				return "boolean" == typeof t ? Number(t) : e(t);
			}
		});
	}, f.p = function(t) {
		var e = this;
		t ? this.t.absolute && t.startsWith("/") && (t = this.v().host + t) : t = this.h();
		var r = {}, o = Object.entries(this.t.routes).find(function(n) {
			return r = new K(n[0], n[1], e.t).matchesUrl(t);
		}) || [void 0, void 0];
		return n({ name: o[0] }, r, { route: o[1] });
	}, f.h = function() {
		var t = this.v(), e = t.pathname, n = t.search;
		return (this.t.absolute ? t.host + e : e.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n;
	}, f.current = function(t, e) {
		var r = this.p(), o = r.name, i = r.params, u = r.query, f = r.route;
		if (!t) return o;
		var c = new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o);
		if ([null, void 0].includes(e) || !c) return c;
		var a = new K(o, f, this.t);
		e = this.l(e, a);
		var l = n({}, i, u);
		if (Object.values(e).every(function(t) {
			return !t;
		}) && !Object.values(l).some(function(t) {
			return void 0 !== t;
		})) return !0;
		var s = function(t, e) {
			return Object.entries(t).every(function(t) {
				var n = t[0], r = t[1];
				return Array.isArray(r) && Array.isArray(e[n]) ? r.every(function(t) {
					return e[n].includes(t) || e[n].includes(decodeURIComponent(t));
				}) : "object" == typeof r && "object" == typeof e[n] && null !== r && null !== e[n] ? s(r, e[n]) : e[n] == r || e[n] == decodeURIComponent(r);
			});
		};
		return s(e, l);
	}, f.v = function() {
		var t, e, n, r, o, i, u = "undefined" != typeof window ? window.location : {}, f = u.host, c = u.pathname, a = u.search;
		return {
			host: null != (t = null == (e = this.t.location) ? void 0 : e.host) ? t : void 0 === f ? "" : f,
			pathname: null != (n = null == (r = this.t.location) ? void 0 : r.pathname) ? n : void 0 === c ? "" : c,
			search: null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : void 0 === a ? "" : a
		};
	}, f.has = function(t) {
		return this.t.routes.hasOwnProperty(t);
	}, f.l = function(t, e) {
		var r = this;
		void 0 === t && (t = {}), void 0 === e && (e = this.i), t ??= {}, t = ["string", "number"].includes(typeof t) ? [t] : t;
		var o = e.parameterSegments.filter(function(t) {
			return !r.t.defaults[t.name];
		});
		if (Array.isArray(t)) t = t.reduce(function(t, e, r) {
			var i, u;
			return n({}, t, o[r] ? ((i = {})[o[r].name] = e, i) : "object" == typeof e ? e : ((u = {})[e] = "", u));
		}, {});
		else if (1 === o.length && !t.hasOwnProperty(o[0].name) && (t.hasOwnProperty(Object.values(e.bindings)[0]) || t.hasOwnProperty("id"))) {
			var i;
			(i = {})[o[0].name] = t, t = i;
		}
		return n({}, this.m(e), this.j(t, e));
	}, f.m = function(t) {
		var e = this;
		return t.parameterSegments.filter(function(t) {
			return e.t.defaults[t.name];
		}).reduce(function(t, r, o) {
			var i, u = r.name;
			return n({}, t, ((i = {})[u] = e.t.defaults[u], i));
		}, {});
	}, f.j = function(t, e) {
		var r = e.bindings, o = e.parameterSegments;
		return Object.entries(t).reduce(function(t, e) {
			var i, u, f = e[0], c = e[1];
			if (!c || "object" != typeof c || Array.isArray(c) || !o.some(function(t) {
				return t.name === f;
			})) return n({}, t, ((u = {})[f] = c, u));
			var a = c.hasOwnProperty(r[f]) ? r[f] : c.hasOwnProperty("id") ? "id" : void 0;
			if (void 0 === a) throw new Error("Ziggy error: object passed as '" + f + "' parameter is missing route model binding key '" + r[f] + "'.");
			return n({}, t, ((i = {})[f] = c[a], i));
		}, {});
	}, f.valueOf = function() {
		return this.toString();
	}, e(r, [
		{
			key: "params",
			get: function() {
				var t = this.p();
				return n({}, t.params, t.query);
			}
		},
		{
			key: "routeParams",
			get: function() {
				return this.p().params;
			}
		},
		{
			key: "queryParams",
			get: function() {
				return this.p().query;
			}
		}
	]);
}(/*#__PURE__*/ f(String));
function B(t, e, n, r) {
	var o = new z(t, e, n, r);
	return t ? o.toString() : o;
}
var M = { install: function(t, e) {
	var n = function(t, n, r, o) {
		return void 0 === o && (o = e), B(t, n, r, o);
	};
	parseInt(t.version) > 2 ? (t.config.globalProperties.route = n, t.provide("route", n)) : t.mixin({ methods: { route: n } });
} };
//#endregion
//#region resources/js/ziggy.js
var Ziggy$1 = {
	"url": "http://localhost:8090",
	"port": 8090,
	"defaults": {},
	"routes": {
		"sanctum.csrf-cookie": {
			"uri": "sanctum/csrf-cookie",
			"methods": ["GET", "HEAD"]
		},
		"home": {
			"uri": "/",
			"methods": ["GET", "HEAD"]
		},
		"register": {
			"uri": "register",
			"methods": ["GET", "HEAD"]
		},
		"login": {
			"uri": "login",
			"methods": ["GET", "HEAD"]
		},
		"password.request": {
			"uri": "forgot-password",
			"methods": ["GET", "HEAD"]
		},
		"password.email": {
			"uri": "forgot-password",
			"methods": ["POST"]
		},
		"password.reset": {
			"uri": "reset-password/{token}",
			"methods": ["GET", "HEAD"],
			"parameters": ["token"]
		},
		"password.store": {
			"uri": "reset-password",
			"methods": ["POST"]
		},
		"verification.notice": {
			"uri": "verify-email",
			"methods": ["GET", "HEAD"]
		},
		"verification.verify": {
			"uri": "verify-email/{id}/{hash}",
			"methods": ["GET", "HEAD"],
			"parameters": ["id", "hash"]
		},
		"verification.send": {
			"uri": "email/verification-notification",
			"methods": ["POST"]
		},
		"password.confirm": {
			"uri": "confirm-password",
			"methods": ["GET", "HEAD"]
		},
		"password.update": {
			"uri": "password",
			"methods": ["PUT"]
		},
		"logout": {
			"uri": "logout",
			"methods": ["POST"]
		},
		"storage.local": {
			"uri": "storage/{path}",
			"methods": ["GET", "HEAD"],
			"wheres": { "path": ".*" },
			"parameters": ["path"]
		},
		"storage.local.upload": {
			"uri": "storage/{path}",
			"methods": ["PUT"],
			"wheres": { "path": ".*" },
			"parameters": ["path"]
		}
	}
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") Object.assign(Ziggy$1.routes, window.Ziggy.routes);
//#endregion
//#region resources/js/Pages/Auth/ForgotPassword.vue
var ForgotPassword_exports = /* @__PURE__ */ __exportAll({ default: () => ForgotPassword_default });
var _sfc_main$24 = {
	__name: "ForgotPassword",
	__ssrInlineRender: true,
	props: { status: {
		type: String,
		default: null
	} },
	setup(__props) {
		const route = (name, params = void 0) => {
			return B(name, params, void 0, Ziggy$1);
		};
		const form = useForm({ email: "" });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent));
			_push(`<div class="auth-page" data-v-4ff11307><section class="auth-left" data-v-4ff11307><div class="brand" data-v-4ff11307><div class="brand-mark" data-v-4ff11307>H</div><span data-v-4ff11307>Haven</span></div><div class="welcome-content" data-v-4ff11307><p class="eyebrow" data-v-4ff11307>ACCOUNT RECOVERY</p><h1 data-v-4ff11307>Reset Password</h1><p class="welcome-copy" data-v-4ff11307> Enter your email address and Haven will send you a password reset link. </p><div class="mail-card" data-v-4ff11307><div class="mail-icon" data-v-4ff11307>✉</div></div></div></section><section class="auth-right" data-v-4ff11307><div class="form-card" data-v-4ff11307><div class="form-heading" data-v-4ff11307><h2 data-v-4ff11307>Forgot Password</h2><p data-v-4ff11307> Enter the email address linked to your Haven account. </p></div>`);
			if (__props.status) _push(`<div class="status-message" data-v-4ff11307>${ssrInterpolate(__props.status)}</div>`);
			else _push(`<!---->`);
			_push(`<form data-v-4ff11307><div class="field" data-v-4ff11307><label for="email" data-v-4ff11307>Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" autocomplete="username" autofocus placeholder="you@example.com" data-v-4ff11307>`);
			if (unref(form).errors.email) _push(`<p class="field-error" data-v-4ff11307>${ssrInterpolate(unref(form).errors.email)}</p>`);
			else _push(`<!---->`);
			_push(`</div><button type="submit" class="reset-button"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-4ff11307>${ssrInterpolate(unref(form).processing ? "Sending..." : "Send Reset Link")}</button></form><p class="back-link" data-v-4ff11307>`);
			_push(ssrRenderComponent(unref(Link), { href: route("login") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to Login `);
					else return [createTextVNode(" Back to Login ")];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></section></div><!--]-->`);
		};
	}
};
var _sfc_setup$24 = _sfc_main$24.setup;
_sfc_main$24.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
var ForgotPassword_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$24, [["__scopeId", "data-v-4ff11307"]]);
//#endregion
//#region resources/js/Pages/Auth/Login.vue
var Login_exports = /* @__PURE__ */ __exportAll({ default: () => Login_default });
var _sfc_main$23 = {
	__name: "Login",
	__ssrInlineRender: true,
	props: {
		canResetPassword: {
			type: Boolean,
			default: false
		},
		status: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const route = (name, params = void 0) => {
			return B(name, params, void 0, Ziggy$1);
		};
		const form = useForm({
			email: "",
			password: "",
			remember: false
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
			_push(`<div class="auth-page" data-v-eed6d808><section class="auth-left" data-v-eed6d808><div class="brand" data-v-eed6d808><div class="brand-mark" data-v-eed6d808>H</div><span data-v-eed6d808>Haven</span></div><div class="welcome-content" data-v-eed6d808><p class="eyebrow" data-v-eed6d808>SMART HOME CONTROL</p><h1 data-v-eed6d808>Welcome Back</h1><p class="welcome-copy" data-v-eed6d808> Sign in to manage your home, devices, rooms and automations. </p><div class="house-card" data-v-eed6d808><div class="house-roof" data-v-eed6d808></div><div class="house-body" data-v-eed6d808><div class="window" data-v-eed6d808></div><div class="window" data-v-eed6d808></div><div class="door" data-v-eed6d808></div></div></div></div></section><section class="auth-right" data-v-eed6d808><div class="form-card" data-v-eed6d808><div class="form-heading" data-v-eed6d808><h2 data-v-eed6d808>Login</h2><p data-v-eed6d808>Enter your details to access your Haven account.</p></div>`);
			if (__props.status) _push(`<div class="status-message" data-v-eed6d808>${ssrInterpolate(__props.status)}</div>`);
			else _push(`<!---->`);
			if (unref(form).errors.email) _push(`<div class="login-error" role="alert" data-v-eed6d808><div class="error-icon" data-v-eed6d808>!</div><div data-v-eed6d808><strong data-v-eed6d808>Login failed</strong><p data-v-eed6d808>${ssrInterpolate(unref(form).errors.email)}</p></div></div>`);
			else _push(`<!---->`);
			_push(`<form data-v-eed6d808><div class="field" data-v-eed6d808><label for="email" data-v-eed6d808>Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" autocomplete="username" autofocus placeholder="you@example.com" data-v-eed6d808></div><div class="field" data-v-eed6d808><div class="field-heading" data-v-eed6d808><label for="password" data-v-eed6d808>Password</label>`);
			if (__props.canResetPassword) _push(ssrRenderComponent(unref(Link), {
				href: route("password.request"),
				class: "forgot-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Forgot password? `);
					else return [createTextVNode(" Forgot password? ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" autocomplete="current-password" placeholder="Enter your password" data-v-eed6d808>`);
			if (unref(form).errors.password) _push(`<p class="field-error" data-v-eed6d808>${ssrInterpolate(unref(form).errors.password)}</p>`);
			else _push(`<!---->`);
			_push(`</div><label class="remember-row" data-v-eed6d808><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} type="checkbox" data-v-eed6d808><span data-v-eed6d808>Remember me</span></label><button type="submit" class="login-button"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-eed6d808>${ssrInterpolate(unref(form).processing ? "Signing in..." : "Login")}</button></form><p class="register-link" data-v-eed6d808> Don&#39;t have an account? `);
			_push(ssrRenderComponent(unref(Link), { href: route("register") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Register `);
					else return [createTextVNode(" Register ")];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></section></div><!--]-->`);
		};
	}
};
var _sfc_setup$23 = _sfc_main$23.setup;
_sfc_main$23.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
var Login_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$23, [["__scopeId", "data-v-eed6d808"]]);
//#endregion
//#region resources/js/Pages/Auth/Register.vue
var Register_exports = /* @__PURE__ */ __exportAll({ default: () => Register_default });
var _sfc_main$22 = {
	__name: "Register",
	__ssrInlineRender: true,
	setup(__props) {
		const route = (name, params = void 0) => {
			return B(name, params, void 0, Ziggy$1);
		};
		const form = useForm({
			name: "",
			email: "",
			password: "",
			password_confirmation: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
			_push(`<div class="auth-page" data-v-128c082a><section class="auth-left" data-v-128c082a><div class="brand" data-v-128c082a><div class="brand-mark" data-v-128c082a>H</div><span data-v-128c082a>Haven</span></div><div class="welcome-content" data-v-128c082a><p class="eyebrow" data-v-128c082a>SMART HOME CONTROL</p><h1 data-v-128c082a>Welcome</h1><p class="welcome-copy" data-v-128c082a> Create your Haven account and start managing your home, rooms, devices and automations. </p><div class="house-card" data-v-128c082a><div class="house-roof" data-v-128c082a></div><div class="house-body" data-v-128c082a><div class="window" data-v-128c082a></div><div class="window" data-v-128c082a></div><div class="door" data-v-128c082a></div></div></div></div></section><section class="auth-right" data-v-128c082a><div class="form-card" data-v-128c082a><div class="form-heading" data-v-128c082a><h2 data-v-128c082a>Create Account</h2><p data-v-128c082a>Enter your details to create your Haven account.</p></div><form data-v-128c082a><div class="field" data-v-128c082a><label for="name" data-v-128c082a>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" autocomplete="name" autofocus placeholder="Your name" data-v-128c082a>`);
			if (unref(form).errors.name) _push(`<p class="field-error" data-v-128c082a>${ssrInterpolate(unref(form).errors.name)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="field" data-v-128c082a><label for="email" data-v-128c082a>Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" autocomplete="username" placeholder="you@example.com" data-v-128c082a>`);
			if (unref(form).errors.email) _push(`<p class="field-error" data-v-128c082a>${ssrInterpolate(unref(form).errors.email)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="field" data-v-128c082a><label for="password" data-v-128c082a>Password</label><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" autocomplete="new-password" placeholder="Create a password" data-v-128c082a>`);
			if (unref(form).errors.password) _push(`<p class="field-error" data-v-128c082a>${ssrInterpolate(unref(form).errors.password)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="field" data-v-128c082a><label for="password_confirmation" data-v-128c082a> Confirm Password </label><input id="password_confirmation"${ssrRenderAttr("value", unref(form).password_confirmation)} type="password" autocomplete="new-password" placeholder="Confirm your password" data-v-128c082a></div><button type="submit" class="register-button"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-128c082a>${ssrInterpolate(unref(form).processing ? "Creating account..." : "Register")}</button></form><p class="login-link" data-v-128c082a> Already have an account? `);
			_push(ssrRenderComponent(unref(Link), { href: route("login") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Login `);
					else return [createTextVNode(" Login ")];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></section></div><!--]-->`);
		};
	}
};
var _sfc_setup$22 = _sfc_main$22.setup;
_sfc_main$22.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
var Register_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$22, [["__scopeId", "data-v-128c082a"]]);
//#endregion
//#region resources/js/Pages/Auth/ResetPassword.vue
var ResetPassword_exports = /* @__PURE__ */ __exportAll({ default: () => ResetPassword_default });
var _sfc_main$21 = {
	__name: "ResetPassword",
	__ssrInlineRender: true,
	props: {
		email: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const form = useForm({
			token: props.token,
			email: props.email,
			password: "",
			password_confirmation: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent));
			_push(`<div class="auth-page" data-v-c4dfe433><section class="auth-left" data-v-c4dfe433><div class="brand" data-v-c4dfe433><div class="brand-mark" data-v-c4dfe433>H</div><span data-v-c4dfe433>Haven</span></div><div class="welcome-content" data-v-c4dfe433><p class="eyebrow" data-v-c4dfe433>ACCOUNT RECOVERY</p><h1 data-v-c4dfe433>Create New Password</h1><p class="welcome-copy" data-v-c4dfe433> Choose a new password for your Haven account. </p></div></section><section class="auth-right" data-v-c4dfe433><div class="form-card" data-v-c4dfe433><div class="form-heading" data-v-c4dfe433><h2 data-v-c4dfe433>Reset Password</h2><p data-v-c4dfe433>Enter your new password below.</p></div><form data-v-c4dfe433><div class="field" data-v-c4dfe433><label for="email" data-v-c4dfe433>Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" autocomplete="username" readonly data-v-c4dfe433>`);
			if (unref(form).errors.email) _push(`<p class="field-error" data-v-c4dfe433>${ssrInterpolate(unref(form).errors.email)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="field" data-v-c4dfe433><label for="password" data-v-c4dfe433>New Password</label><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" autocomplete="new-password" autofocus placeholder="Enter new password" data-v-c4dfe433>`);
			if (unref(form).errors.password) _push(`<p class="field-error" data-v-c4dfe433>${ssrInterpolate(unref(form).errors.password)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="field" data-v-c4dfe433><label for="password_confirmation" data-v-c4dfe433> Confirm New Password </label><input id="password_confirmation"${ssrRenderAttr("value", unref(form).password_confirmation)} type="password" autocomplete="new-password" placeholder="Confirm new password" data-v-c4dfe433></div><button type="submit" class="reset-button"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-c4dfe433>${ssrInterpolate(unref(form).processing ? "Resetting..." : "Reset Password")}</button></form><p class="back-link" data-v-c4dfe433>`);
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("login") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to Login `);
					else return [createTextVNode(" Back to Login ")];
				}),
				_: 1
			}, _parent));
			_push(`</p></div></section></div><!--]-->`);
		};
	}
};
var _sfc_setup$21 = _sfc_main$21.setup;
_sfc_main$21.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
var ResetPassword_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$21, [["__scopeId", "data-v-c4dfe433"]]);
//#endregion
//#region resources/js/Pages/Auth/VerifyEmail.vue
var VerifyEmail_exports = /* @__PURE__ */ __exportAll({ default: () => VerifyEmail_default });
var _sfc_main$20 = {
	__name: "VerifyEmail",
	__ssrInlineRender: true,
	props: { status: {
		type: String,
		default: null
	} },
	setup(__props) {
		const form = useForm({});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Verify Email" }, null, _parent));
			_push(`<div class="auth-page" data-v-5700de8e><section class="auth-left" data-v-5700de8e><div class="brand" data-v-5700de8e><div class="brand-mark" data-v-5700de8e>H</div><span data-v-5700de8e>Haven</span></div><div class="welcome-content" data-v-5700de8e><p class="eyebrow" data-v-5700de8e>EMAIL VERIFICATION</p><h1 data-v-5700de8e>Check Your Inbox</h1><p class="welcome-copy" data-v-5700de8e> Haven has sent you a verification link. Open the email and confirm your address to continue. </p></div></section><section class="auth-right" data-v-5700de8e><div class="form-card" data-v-5700de8e><div class="form-heading" data-v-5700de8e><h2 data-v-5700de8e>Verify Email</h2><p data-v-5700de8e> Before continuing, please verify your email address. </p></div>`);
			if (__props.status === "verification-link-sent") _push(`<div class="status-message" data-v-5700de8e> A new verification link has been sent to your email address. </div>`);
			else _push(`<!---->`);
			_push(`<form data-v-5700de8e><button type="submit" class="verify-button"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-5700de8e>${ssrInterpolate(unref(form).processing ? "Sending..." : "Resend Verification Email")}</button></form>`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("logout"),
				method: "post",
				as: "button",
				class: "logout-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Log Out `);
					else return [createTextVNode(" Log Out ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></section></div><!--]-->`);
		};
	}
};
var _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
var VerifyEmail_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$20, [["__scopeId", "data-v-5700de8e"]]);
//#endregion
//#region resources/js/Pages/Dashboard.vue
var Dashboard_exports = /* @__PURE__ */ __exportAll({ default: () => Dashboard_default });
var _sfc_main$19 = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const route = (name, params = void 0) => {
			return B(name, params, void 0, Ziggy$1);
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
			_push(`<div class="haven-app" data-v-33146595><aside class="sidebar" data-v-33146595><div class="brand" data-v-33146595><div class="brand-icon" data-v-33146595><svg viewBox="0 0 24 24" aria-hidden="true" data-v-33146595><path d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" data-v-33146595></path><path d="M9 21v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" data-v-33146595></path></svg></div><span data-v-33146595>Haven</span></div><nav class="nav" data-v-33146595><a href="#" class="nav-item active" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M4 13h6V4H4v9Zm0 7h6v-4H4v4Zm10 0h6v-9h-6v9Zm0-16v4h6V4h-6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" data-v-33146595></path></svg> Dashboard </a><a href="#" class="nav-item" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg> My Home </a><a href="#" class="nav-item" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><rect x="5" y="3" width="14" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></rect><circle cx="12" cy="17" r="1.2" fill="currentColor" data-v-33146595></circle></svg> Devices </a><a href="#" class="nav-item" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M13 2 5 13h6l-1 9 9-12h-6V2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" data-v-33146595></path></svg> Automations </a><a href="#" class="nav-item" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></circle><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg> Schedules </a><a href="#" class="nav-item" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path><path d="M10 19h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg> Alerts </a></nav><div class="sidebar-bottom" data-v-33146595><a href="#" class="nav-item" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></circle><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.4 1a8 8 0 0 0-2-1.2L14.2 3h-4.4l-.3 2.7a8 8 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 2 1.2l.3 2.7h4.4l.3-2.7a8 8 0 0 0 2-1.2l2.4 1 2-3.4-2-1.5A7 7 0 0 0 19 12Z" fill="none" stroke="currentColor" stroke-width="1.5" data-v-33146595></path></svg> Settings </a>`);
			_push(ssrRenderComponent(unref(Link), {
				href: route("logout"),
				method: "post",
				as: "button",
				class: "nav-item logout"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg viewBox="0 0 24 24" data-v-33146595${_scopeId}><path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M16 8l4 4-4 4M20 12H9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" data-v-33146595${_scopeId}></path></svg> Logout `);
					else return [(openBlock(), createBlock("svg", { viewBox: "0 0 24 24" }, [createVNode("path", {
						d: "M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M16 8l4 4-4 4M20 12H9",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "1.7",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					})])), createTextVNode(" Logout ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></aside><main class="main" data-v-33146595><header class="topbar" data-v-33146595><div data-v-33146595><p class="eyebrow" data-v-33146595>MY HOME</p><h1 data-v-33146595>Good evening</h1><p class="welcome" data-v-33146595> Here&#39;s what&#39;s happening around your home. </p></div><div class="topbar-actions" data-v-33146595><button class="icon-button" aria-label="Notifications" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path><path d="M10 19h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg><span class="notification-dot" data-v-33146595></span></button><div class="user" data-v-33146595><div class="avatar" data-v-33146595>CB</div><div data-v-33146595><strong data-v-33146595>Chris</strong><span data-v-33146595>Home Owner</span></div></div></div></header><section class="stats-grid" data-v-33146595><article class="stat-card" data-v-33146595><div class="stat-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><rect x="5" y="3" width="14" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></rect><circle cx="12" cy="17" r="1.2" fill="currentColor" data-v-33146595></circle></svg></div><div data-v-33146595><span class="stat-label" data-v-33146595>Devices</span><strong class="stat-number" data-v-33146595>12</strong><span class="stat-meta" data-v-33146595><span class="status-symbol" data-v-33146595>●</span> 10 online </span></div></article><article class="stat-card" data-v-33146595><div class="stat-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M13 2 5 13h6l-1 9 9-12h-6V2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" data-v-33146595></path></svg></div><div data-v-33146595><span class="stat-label" data-v-33146595>Automations</span><strong class="stat-number" data-v-33146595>6</strong><span class="stat-meta" data-v-33146595><span class="status-symbol" data-v-33146595>✓</span> All active </span></div></article><article class="stat-card" data-v-33146595><div class="stat-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg></div><div data-v-33146595><span class="stat-label" data-v-33146595>Rooms</span><strong class="stat-number" data-v-33146595>7</strong><span class="stat-meta" data-v-33146595> Across your home </span></div></article><article class="stat-card" data-v-33146595><div class="stat-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg></div><div data-v-33146595><span class="stat-label" data-v-33146595>Alerts</span><strong class="stat-number" data-v-33146595>2</strong><span class="stat-meta warning" data-v-33146595><span class="status-symbol" data-v-33146595>!</span> Need attention </span></div></article></section><section class="dashboard-grid" data-v-33146595><article class="panel rooms-panel" data-v-33146595><div class="panel-header" data-v-33146595><div data-v-33146595><h2 data-v-33146595>Rooms</h2><p data-v-33146595>Quick access to your home</p></div><button class="text-button" data-v-33146595> View all <span data-v-33146595>→</span></button></div><div class="room-grid" data-v-33146595><button class="room-card" data-v-33146595><div class="room-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M4 14v5M20 14v5M4 16h16M6 16v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg></div><div data-v-33146595><strong data-v-33146595>Living Room</strong><span data-v-33146595>4 devices</span></div><span class="room-arrow" data-v-33146595>›</span></button><button class="room-card" data-v-33146595><div class="room-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M5 18V8h14v10M3 18h18M8 8V5h8v3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg></div><div data-v-33146595><strong data-v-33146595>Kitchen</strong><span data-v-33146595>3 devices</span></div><span class="room-arrow" data-v-33146595>›</span></button><button class="room-card" data-v-33146595><div class="room-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M4 17v-6h16v6M4 14h16M6 11V8h5a2 2 0 0 1 2 2v1M4 17v2M20 17v2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg></div><div data-v-33146595><strong data-v-33146595>Bedroom</strong><span data-v-33146595>2 devices</span></div><span class="room-arrow" data-v-33146595>›</span></button><button class="room-card" data-v-33146595><div class="room-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M7 4h10v16H7zM4 20h16M10 8h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg></div><div data-v-33146595><strong data-v-33146595>Office</strong><span data-v-33146595>3 devices</span></div><span class="room-arrow" data-v-33146595>›</span></button></div></article><article class="panel status-panel" data-v-33146595><div class="panel-header" data-v-33146595><div data-v-33146595><h2 data-v-33146595>Home Status</h2><p data-v-33146595>Everything looks good</p></div><span class="status-pill" data-v-33146595><span data-v-33146595>✓</span> Secure </span></div><div class="status-list" data-v-33146595><div class="status-row" data-v-33146595><div class="status-row-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg></div><div data-v-33146595><strong data-v-33146595>Doors &amp; Windows</strong><span data-v-33146595>All secured</span></div><span class="check" data-v-33146595>✓</span></div><div class="status-row" data-v-33146595><div class="status-row-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M12 2v20M8 6h4a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" data-v-33146595></path></svg></div><div data-v-33146595><strong data-v-33146595>Temperature</strong><span data-v-33146595>21°C average</span></div><span class="value" data-v-33146595>21°C</span></div><div class="status-row" data-v-33146595><div class="status-row-icon" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M13 2 5 13h6l-1 9 9-12h-6V2Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg></div><div data-v-33146595><strong data-v-33146595>Energy Usage</strong><span data-v-33146595>Normal consumption</span></div><span class="value" data-v-33146595>2.4 kW</span></div></div></article><article class="panel activity-panel" data-v-33146595><div class="panel-header" data-v-33146595><div data-v-33146595><h2 data-v-33146595>Recent Activity</h2><p data-v-33146595>Latest events around your home</p></div><button class="text-button" data-v-33146595> View history <span data-v-33146595>→</span></button></div><div class="activity-list" data-v-33146595><div class="activity-item" data-v-33146595><div class="activity-marker" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M13 2 5 13h6l-1 9 9-12h-6V2Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg></div><div class="activity-copy" data-v-33146595><strong data-v-33146595>Evening lights activated</strong><span data-v-33146595>Automation · Living Room</span></div><time data-v-33146595>2 min ago</time></div><div class="activity-item" data-v-33146595><div class="activity-marker" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg></div><div class="activity-copy" data-v-33146595><strong data-v-33146595>Front door locked</strong><span data-v-33146595>Front Door Lock</span></div><time data-v-33146595>18 min ago</time></div><div class="activity-item" data-v-33146595><div class="activity-marker" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></circle><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg></div><div class="activity-copy" data-v-33146595><strong data-v-33146595>Heating schedule completed</strong><span data-v-33146595>Morning Heating</span></div><time data-v-33146595>1 hr ago</time></div></div></article><article class="panel quick-panel" data-v-33146595><div class="panel-header" data-v-33146595><div data-v-33146595><h2 data-v-33146595>Quick Actions</h2><p data-v-33146595>Control your home</p></div></div><div class="quick-actions" data-v-33146595><button class="quick-action primary" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M13 2 5 13h6l-1 9 9-12h-6V2Z" fill="none" stroke="currentColor" stroke-width="1.8" data-v-33146595></path></svg> Run Automation </button><button class="quick-action" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><rect x="5" y="3" width="14" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></rect></svg> Add Device </button><button class="quick-action" data-v-33146595><svg viewBox="0 0 24 24" data-v-33146595><path d="M3 11.5 12 4l9 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8Z" fill="none" stroke="currentColor" stroke-width="1.7" data-v-33146595></path></svg> Add Room </button></div></article></section></main></div><!--]-->`);
		};
	}
};
var _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var Dashboard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$19, [["__scopeId", "data-v-33146595"]]);
//#endregion
//#region resources/js/Pages/Home.vue
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => Home_default });
var _sfc_main$18 = {
	__name: "Home",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Haven" }, null, _parent));
			_push(`<div class="landing-page" data-v-1a7f780e><header class="site-header" data-v-1a7f780e><div class="header-inner" data-v-1a7f780e><div class="brand" data-v-1a7f780e><div class="brand-icon" data-v-1a7f780e><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a7f780e><path d="M3 11.5L12 4l9 7.5" data-v-1a7f780e></path><path d="M5 10.5V20h14v-9.5" data-v-1a7f780e></path><path d="M9 20v-6h6v6" data-v-1a7f780e></path></svg></div><span class="brand-name" data-v-1a7f780e>Haven</span></div><nav class="main-nav" data-v-1a7f780e><a href="#features" data-v-1a7f780e>Features</a><a href="#how-it-works" data-v-1a7f780e>How It Works</a><a href="#about" data-v-1a7f780e>About</a></nav><div class="auth-actions" data-v-1a7f780e>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/login",
				class: "btn btn-login"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Login `);
					else return [createTextVNode(" Login ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/register",
				class: "btn btn-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Get Started `);
					else return [createTextVNode(" Get Started ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></header><main data-v-1a7f780e><section class="hero" data-v-1a7f780e><div class="hero-inner" data-v-1a7f780e><div class="hero-copy" data-v-1a7f780e><div class="hero-badge" data-v-1a7f780e><span class="hero-badge-dot" data-v-1a7f780e></span> Smart home control made simple </div><h1 data-v-1a7f780e> A smarter home <span data-v-1a7f780e>in your hands</span></h1><p class="hero-description" data-v-1a7f780e> Monitor, control and automate your home with a simple, secure interface designed to keep everything in one place. </p><div class="hero-actions" data-v-1a7f780e>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/register",
				class: "btn btn-primary btn-large"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Get Started `);
					else return [createTextVNode(" Get Started ")];
				}),
				_: 1
			}, _parent));
			_push(`<a href="#features" class="btn btn-secondary btn-large" data-v-1a7f780e> Explore Features </a></div><div class="hero-points" data-v-1a7f780e><div class="hero-point" data-v-1a7f780e><span class="point-icon" data-v-1a7f780e>✓</span> Easy device control </div><div class="hero-point" data-v-1a7f780e><span class="point-icon" data-v-1a7f780e>✓</span> Flexible automations </div><div class="hero-point" data-v-1a7f780e><span class="point-icon" data-v-1a7f780e>✓</span> Home monitoring </div></div></div><div class="hero-visual" data-v-1a7f780e><div class="home-preview-card" data-v-1a7f780e><div class="preview-top" data-v-1a7f780e><div data-v-1a7f780e><span class="preview-label" data-v-1a7f780e> My Home </span><h2 data-v-1a7f780e>Everything connected</h2></div><div class="online-status" data-v-1a7f780e><span class="online-dot" data-v-1a7f780e></span> Online </div></div><div class="preview-grid" data-v-1a7f780e><div class="preview-stat" data-v-1a7f780e><span data-v-1a7f780e>Devices</span><strong data-v-1a7f780e>12</strong><small data-v-1a7f780e>10 online</small></div><div class="preview-stat" data-v-1a7f780e><span data-v-1a7f780e>Automations</span><strong data-v-1a7f780e>8</strong><small data-v-1a7f780e>6 active</small></div><div class="preview-stat" data-v-1a7f780e><span data-v-1a7f780e>Rooms</span><strong data-v-1a7f780e>6</strong><small data-v-1a7f780e>Fully connected</small></div><div class="preview-stat" data-v-1a7f780e><span data-v-1a7f780e>Alerts</span><strong data-v-1a7f780e>0</strong><small data-v-1a7f780e>No action needed</small></div></div><div class="room-card" data-v-1a7f780e><div data-v-1a7f780e><strong data-v-1a7f780e>Living Room</strong><span data-v-1a7f780e>3 devices connected</span></div><span class="room-status" data-v-1a7f780e> Active </span></div></div></div></div></section><section id="features" class="features-section" data-v-1a7f780e><div class="section-heading" data-v-1a7f780e><span data-v-1a7f780e>Everything in one place</span><h2 data-v-1a7f780e> Simple control for your entire home </h2><p data-v-1a7f780e> Haven gives you the tools to manage devices, create automations and keep an eye on your home. </p></div><div class="features-inner" data-v-1a7f780e><article class="feature-card" data-v-1a7f780e><div class="feature-icon" data-v-1a7f780e><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a7f780e><path d="M9 18h6" data-v-1a7f780e></path><path d="M10 22h4" data-v-1a7f780e></path><path d="M8.5 14.5A6 6 0 1 1 15.5 14.5C14.5 15.2 14 16 14 17H10C10 16 9.5 15.2 8.5 14.5Z" data-v-1a7f780e></path></svg></div><h3 data-v-1a7f780e>Control</h3><p data-v-1a7f780e> Manage lights, switches and smart devices from one place. </p></article><article class="feature-card" data-v-1a7f780e><div class="feature-icon" data-v-1a7f780e><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a7f780e><path d="M13 2L4 14h7l-1 8 9-12h-7z" data-v-1a7f780e></path></svg></div><h3 data-v-1a7f780e>Automate</h3><p data-v-1a7f780e> Create routines that react to schedules, conditions and events. </p></article><article class="feature-card" data-v-1a7f780e><div class="feature-icon" data-v-1a7f780e><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a7f780e><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" data-v-1a7f780e></path><path d="m9 12 2 2 4-4" data-v-1a7f780e></path></svg></div><h3 data-v-1a7f780e>Stay Safe</h3><p data-v-1a7f780e> See important alerts and recent activity across your home. </p></article><article class="feature-card" data-v-1a7f780e><div class="feature-icon" data-v-1a7f780e><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a7f780e><path d="M12 2v20" data-v-1a7f780e></path><path d="M5 9h14" data-v-1a7f780e></path><path d="M7 9c0-4 2-7 5-7s5 3 5 7" data-v-1a7f780e></path><path d="M7 9c0 6 2 11 5 13 3-2 5-7 5-13" data-v-1a7f780e></path></svg></div><h3 data-v-1a7f780e>Save Energy</h3><p data-v-1a7f780e> Track usage and make smarter decisions around your home. </p></article></div></section><section id="how-it-works" class="how-section" data-v-1a7f780e><div class="section-heading" data-v-1a7f780e><span data-v-1a7f780e>How it works</span><h2 data-v-1a7f780e> Your smarter home in three steps </h2><p data-v-1a7f780e> Haven keeps setup straightforward so you can get started quickly. </p></div><div class="steps" data-v-1a7f780e><div class="step-card" data-v-1a7f780e><div class="step-number" data-v-1a7f780e>1</div><h3 data-v-1a7f780e>Create your account</h3><p data-v-1a7f780e> Register for Haven and create your first home. </p></div><div class="step-card" data-v-1a7f780e><div class="step-number" data-v-1a7f780e>2</div><h3 data-v-1a7f780e>Add your devices</h3><p data-v-1a7f780e> Organise devices into homes and rooms. </p></div><div class="step-card" data-v-1a7f780e><div class="step-number" data-v-1a7f780e>3</div><h3 data-v-1a7f780e>Create automations</h3><p data-v-1a7f780e> Build schedules and rules that make everyday tasks easier. </p></div></div></section><section id="about" class="cta-section" data-v-1a7f780e><div class="cta-card" data-v-1a7f780e><div data-v-1a7f780e><span class="cta-small" data-v-1a7f780e> Ready to get started? </span><h2 data-v-1a7f780e> Build your smarter home with Haven. </h2><p data-v-1a7f780e> Create your account and start organising your smart home today. </p></div>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/register",
				class: "btn btn-primary btn-large"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Create Account `);
					else return [createTextVNode(" Create Account ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></section></main><footer class="site-footer" data-v-1a7f780e><div class="footer-inner" data-v-1a7f780e><div class="brand" data-v-1a7f780e><div class="brand-icon small" data-v-1a7f780e><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1a7f780e><path d="M3 11.5L12 4l9 7.5" data-v-1a7f780e></path><path d="M5 10.5V20h14v-9.5" data-v-1a7f780e></path><path d="M9 20v-6h6v6" data-v-1a7f780e></path></svg></div><span class="brand-name" data-v-1a7f780e> Haven </span></div><p data-v-1a7f780e> Smart home control made simple. </p></div></footer></div><!--]-->`);
		};
	}
};
var _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var Home_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$18, [["__scopeId", "data-v-1a7f780e"]]);
//#endregion
//#region resources/js/Components/ApplicationLogo.vue
var _sfc_main$17 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		viewBox: "0 0 316 316",
		xmlns: "http://www.w3.org/2000/svg"
	}, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
var _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var ApplicationLogo_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$17, [["ssrRender", _sfc_ssrRender$2]]);
//#endregion
//#region resources/js/Components/Dropdown.vue
var _sfc_main$16 = {
	__name: "Dropdown",
	__ssrInlineRender: true,
	props: {
		align: {
			type: String,
			default: "right"
		},
		width: {
			type: String,
			default: "48"
		},
		contentClasses: {
			type: String,
			default: "py-1 bg-white"
		}
	},
	setup(__props) {
		const props = __props;
		const closeOnEscape = (e) => {
			if (open.value && e.key === "Escape") open.value = false;
		};
		onMounted(() => document.addEventListener("keydown", closeOnEscape));
		onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
		const widthClass = computed(() => {
			return { 48: "w-48" }[props.width.toString()];
		});
		const alignmentClasses = computed(() => {
			if (props.align === "left") return "ltr:origin-top-left rtl:origin-top-right start-0";
			else if (props.align === "right") return "ltr:origin-top-right rtl:origin-top-left end-0";
			else return "origin-top";
		});
		const open = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
			ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
			_push(`</div><div class="fixed inset-0 z-40" style="${ssrRenderStyle(open.value ? null : { display: "none" })}"></div><div class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}" style="${ssrRenderStyle([{ "display": "none" }, open.value ? null : { display: "none" }])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
			ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DropdownLink.vue
var _sfc_main$15 = {
	__name: "DropdownLink",
	__ssrInlineRender: true,
	props: { href: {
		type: String,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/NavLink.vue
var _sfc_main$14 = {
	__name: "NavLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const classes = computed(() => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: classes.value
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/ResponsiveNavLink.vue
var _sfc_main$13 = {
	__name: "ResponsiveNavLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const classes = computed(() => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: classes.value
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AuthenticatedLayout.vue
var _sfc_main$12 = {
	__name: "AuthenticatedLayout",
	__ssrInlineRender: true,
	setup(__props) {
		const showingNavigationDropdown = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="border-b border-gray-100 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 justify-between"><div class="flex"><div class="flex shrink-0 items-center">`);
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("dashboard") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ApplicationLogo_default, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent, _scopeId));
					else return [createVNode(ApplicationLogo_default, { class: "block h-9 w-auto fill-current text-gray-800" })];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
			_push(ssrRenderComponent(_sfc_main$14, {
				href: _ctx.route("dashboard"),
				active: _ctx.route().current("dashboard")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [createTextVNode(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="hidden sm:ms-6 sm:flex sm:items-center"><div class="relative ms-3">`);
			_push(ssrRenderComponent(_sfc_main$16, {
				align: "right",
				width: "48"
			}, {
				trigger: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
					else return [createVNode("span", { class: "inline-flex rounded-md" }, [createVNode("button", {
						type: "button",
						class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
					}, [createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1), (openBlock(), createBlock("svg", {
						class: "-me-0.5 ms-2 h-4 w-4",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 20 20",
						fill: "currentColor"
					}, [createVNode("path", {
						"fill-rule": "evenodd",
						d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
						"clip-rule": "evenodd"
					})]))])])];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$15, { href: _ctx.route("profile.edit") }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Profile `);
								else return [createTextVNode(" Profile ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$15, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Log Out `);
								else return [createTextVNode(" Log Out ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$15, { href: _ctx.route("profile.edit") }, {
						default: withCtx(() => [createTextVNode(" Profile ")]),
						_: 1
					}, 8, ["href"]), createVNode(_sfc_main$15, {
						href: _ctx.route("logout"),
						method: "post",
						as: "button"
					}, {
						default: withCtx(() => [createTextVNode(" Log Out ")]),
						_: 1
					}, 8, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
				hidden: showingNavigationDropdown.value,
				"inline-flex": !showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
				hidden: !showingNavigationDropdown.value,
				"inline-flex": showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{
				block: showingNavigationDropdown.value,
				hidden: !showingNavigationDropdown.value
			}, "sm:hidden"])}"><div class="space-y-1 pb-3 pt-2">`);
			_push(ssrRenderComponent(_sfc_main$13, {
				href: _ctx.route("dashboard"),
				active: _ctx.route().current("dashboard")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [createTextVNode(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="border-t border-gray-200 pb-1 pt-4"><div class="px-4"><div class="text-base font-medium text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="text-sm font-medium text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
			_push(ssrRenderComponent(_sfc_main$13, { href: _ctx.route("profile.edit") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Profile `);
					else return [createTextVNode(" Profile ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$13, {
				href: _ctx.route("logout"),
				method: "post",
				as: "button"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Log Out `);
					else return [createTextVNode(" Log Out ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></nav>`);
			if (_ctx.$slots.header) {
				_push(`<header class="bg-white shadow"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">`);
				ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
				_push(`</div></header>`);
			} else _push(`<!---->`);
			_push(`<main>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div></div>`);
		};
	}
};
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DangerButton.vue
var _sfc_main$11 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var DangerButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$11, [["ssrRender", _sfc_ssrRender$1]]);
//#endregion
//#region resources/js/Components/InputError.vue
var _sfc_main$10 = {
	__name: "InputError",
	__ssrInlineRender: true,
	props: { message: { type: String } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps(_attrs, { style: __props.message ? null : { display: "none" } }))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
		};
	}
};
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/InputLabel.vue
var _sfc_main$9 = {
	__name: "InputLabel",
	__ssrInlineRender: true,
	props: { value: { type: String } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-gray-700" }, _attrs))}>`);
			if (__props.value) _push(`<span>${ssrInterpolate(__props.value)}</span>`);
			else {
				_push(`<span>`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</span>`);
			}
			_push(`</label>`);
		};
	}
};
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Modal.vue
var _sfc_main$8 = {
	__name: "Modal",
	__ssrInlineRender: true,
	props: {
		show: {
			type: Boolean,
			default: false
		},
		maxWidth: {
			type: String,
			default: "2xl"
		},
		closeable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const dialog = ref();
		const showSlot = ref(props.show);
		watch(() => props.show, () => {
			if (props.show) {
				document.body.style.overflow = "hidden";
				showSlot.value = true;
				dialog.value?.showModal();
			} else {
				document.body.style.overflow = "";
				setTimeout(() => {
					dialog.value?.close();
					showSlot.value = false;
				}, 200);
			}
		});
		const close = () => {
			if (props.closeable) emit("close");
		};
		const closeOnEscape = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				if (props.show) close();
			}
		};
		onMounted(() => document.addEventListener("keydown", closeOnEscape));
		onUnmounted(() => {
			document.removeEventListener("keydown", closeOnEscape);
			document.body.style.overflow = "";
		});
		const maxWidthClass = computed(() => {
			return {
				sm: "sm:max-w-sm",
				md: "sm:max-w-md",
				lg: "sm:max-w-lg",
				xl: "sm:max-w-xl",
				"2xl": "sm:max-w-2xl"
			}[props.maxWidth];
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<dialog${ssrRenderAttrs(mergeProps({
				class: "z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",
				ref_key: "dialog",
				ref: dialog
			}, _attrs))}><div class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region><div class="fixed inset-0 transform transition-all" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div class="${ssrRenderClass([maxWidthClass.value, "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full"])}" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}">`);
			if (showSlot.value) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			else _push(`<!---->`);
			_push(`</div></div></dialog>`);
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/SecondaryButton.vue
var _sfc_main$7 = {
	__name: "SecondaryButton",
	__ssrInlineRender: true,
	props: { type: {
		type: String,
		default: "button"
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${ssrRenderAttrs(mergeProps({
				type: __props.type,
				class: "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</button>`);
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/TextInput.vue
var _sfc_main$6 = {
	__name: "TextInput",
	__ssrInlineRender: true,
	props: {
		"modelValue": {
			type: String,
			required: true
		},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const model = useModel(__props, "modelValue");
		const input = ref(null);
		onMounted(() => {
			if (input.value.hasAttribute("autofocus")) input.value.focus();
		});
		__expose({ focus: () => input.value.focus() });
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
				class: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
				ref_key: "input",
				ref: input
			}, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Partials/DeleteUserForm.vue
var DeleteUserForm_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$5 });
var _sfc_main$5 = {
	__name: "DeleteUserForm",
	__ssrInlineRender: true,
	setup(__props) {
		const confirmingUserDeletion = ref(false);
		const passwordInput = ref(null);
		const form = useForm({ password: "" });
		const confirmUserDeletion = () => {
			confirmingUserDeletion.value = true;
			nextTick(() => passwordInput.value.focus());
		};
		const deleteUser = () => {
			form.delete(route("profile.destroy"), {
				preserveScroll: true,
				onSuccess: () => closeModal(),
				onError: () => passwordInput.value.focus(),
				onFinish: () => form.reset()
			});
		};
		const closeModal = () => {
			confirmingUserDeletion.value = false;
			form.clearErrors();
			form.reset();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900"> Delete Account </h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
			_push(ssrRenderComponent(DangerButton_default, { onClick: confirmUserDeletion }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Delete Account`);
					else return [createTextVNode("Delete Account")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$8, {
				show: confirmingUserDeletion.value,
				onClose: closeModal
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$9, {
							for: "password",
							value: "Password",
							class: "sr-only"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$6, {
							id: "password",
							ref_key: "passwordInput",
							ref: passwordInput,
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							type: "password",
							class: "mt-1 block w-3/4",
							placeholder: "Password",
							onKeyup: deleteUser
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$10, {
							message: unref(form).errors.password,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$7, { onClick: closeModal }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(DangerButton_default, {
							class: ["ms-3", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing,
							onClick: deleteUser
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Delete Account `);
								else return [createTextVNode(" Delete Account ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "p-6" }, [
						createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
						createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
						createVNode("div", { class: "mt-6" }, [
							createVNode(_sfc_main$9, {
								for: "password",
								value: "Password",
								class: "sr-only"
							}),
							createVNode(_sfc_main$6, {
								id: "password",
								ref_key: "passwordInput",
								ref: passwordInput,
								modelValue: unref(form).password,
								"onUpdate:modelValue": ($event) => unref(form).password = $event,
								type: "password",
								class: "mt-1 block w-3/4",
								placeholder: "Password",
								onKeyup: withKeys(deleteUser, ["enter"])
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$10, {
								message: unref(form).errors.password,
								class: "mt-2"
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-6 flex justify-end" }, [createVNode(_sfc_main$7, { onClick: closeModal }, {
							default: withCtx(() => [createTextVNode(" Cancel ")]),
							_: 1
						}), createVNode(DangerButton_default, {
							class: ["ms-3", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing,
							onClick: deleteUser
						}, {
							default: withCtx(() => [createTextVNode(" Delete Account ")]),
							_: 1
						}, 8, ["class", "disabled"])])
					])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/PrimaryButton.vue
var _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var PrimaryButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue
var UpdatePasswordForm_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$3 });
var _sfc_main$3 = {
	__name: "UpdatePasswordForm",
	__ssrInlineRender: true,
	setup(__props) {
		const passwordInput = ref(null);
		const currentPasswordInput = ref(null);
		const form = useForm({
			current_password: "",
			password: "",
			password_confirmation: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Update Password </h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
			_push(ssrRenderComponent(_sfc_main$9, {
				for: "current_password",
				value: "Current Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, {
				id: "current_password",
				ref_key: "currentPasswordInput",
				ref: currentPasswordInput,
				modelValue: unref(form).current_password,
				"onUpdate:modelValue": ($event) => unref(form).current_password = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "current-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$10, {
				message: unref(form).errors.current_password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$9, {
				for: "password",
				value: "New Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, {
				id: "password",
				ref_key: "passwordInput",
				ref: passwordInput,
				modelValue: unref(form).password,
				"onUpdate:modelValue": ($event) => unref(form).password = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$10, {
				message: unref(form).errors.password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$9, {
				for: "password_confirmation",
				value: "Confirm Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, {
				id: "password_confirmation",
				modelValue: unref(form).password_confirmation,
				"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$10, {
				message: unref(form).errors.password_confirmation,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div class="flex items-center gap-4">`);
			_push(ssrRenderComponent(PrimaryButton_default, { disabled: unref(form).processing }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Save`);
					else return [createTextVNode("Save")];
				}),
				_: 1
			}, _parent));
			if (unref(form).recentlySuccessful) _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
			else _push(`<!---->`);
			_push(`</div></form></section>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue
var UpdateProfileInformationForm_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$2 });
var _sfc_main$2 = {
	__name: "UpdateProfileInformationForm",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const user = usePage().props.auth.user;
		const form = useForm({
			name: user.name,
			email: user.email
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Profile Information </h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
			_push(ssrRenderComponent(_sfc_main$9, {
				for: "name",
				value: "Name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, {
				id: "name",
				type: "text",
				class: "mt-1 block w-full",
				modelValue: unref(form).name,
				"onUpdate:modelValue": ($event) => unref(form).name = $event,
				required: "",
				autofocus: "",
				autocomplete: "name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$10, {
				class: "mt-2",
				message: unref(form).errors.name
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$9, {
				for: "email",
				value: "Email"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, {
				id: "email",
				type: "email",
				class: "mt-1 block w-full",
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				required: "",
				autocomplete: "username"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$10, {
				class: "mt-2",
				message: unref(form).errors.email
			}, null, _parent));
			_push(`</div>`);
			if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
				_push(`<div><p class="mt-2 text-sm text-gray-800"> Your email address is unverified. `);
				_push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("verification.send"),
					method: "post",
					as: "button",
					class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Click here to re-send the verification email. `);
						else return [createTextVNode(" Click here to re-send the verification email. ")];
					}),
					_: 1
				}, _parent));
				_push(`</p><div class="mt-2 text-sm font-medium text-green-600" style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}"> A new verification link has been sent to your email address. </div></div>`);
			} else _push(`<!---->`);
			_push(`<div class="flex items-center gap-4">`);
			_push(ssrRenderComponent(PrimaryButton_default, { disabled: unref(form).processing }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Save`);
					else return [createTextVNode("Save")];
				}),
				_: 1
			}, _parent));
			if (unref(form).recentlySuccessful) _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
			else _push(`<!---->`);
			_push(`</div></form></section>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Edit.vue
var Edit_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$1 });
var _sfc_main$1 = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$12, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Profile </h2>`);
					else return [createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Profile ")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, _parent, _scopeId));
						_push(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$5, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div></div></div>`);
					} else return [createVNode("div", { class: "py-12" }, [createVNode("div", { class: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8" }, [
						createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [createVNode(_sfc_main$2, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, 8, ["must-verify-email", "status"])]),
						createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [createVNode(_sfc_main$3, { class: "max-w-xl" })]),
						createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [createVNode(_sfc_main$5, { class: "max-w-xl" })])
					])])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Welcome.vue
var Welcome_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main });
var _sfc_main = {
	__name: "Welcome",
	__ssrInlineRender: true,
	props: {
		canLogin: { type: Boolean },
		canRegister: { type: Boolean },
		laravelVersion: {
			type: String,
			required: true
		},
		phpVersion: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
			_push(`<div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"><img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg"><div class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"><div class="flex lg:col-start-2 lg:justify-center"><svg class="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="currentColor"></path></svg></div>`);
			if (__props.canLogin) {
				_push(`<nav class="-mx-3 flex flex-1 justify-end">`);
				if (_ctx.$page.props.auth.user) _push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("dashboard"),
					class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Dashboard `);
						else return [createTextVNode(" Dashboard ")];
					}),
					_: 1
				}, _parent));
				else {
					_push(`<!--[-->`);
					_push(ssrRenderComponent(unref(Link), {
						href: _ctx.route("login"),
						class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Log in `);
							else return [createTextVNode(" Log in ")];
						}),
						_: 1
					}, _parent));
					if (__props.canRegister) _push(ssrRenderComponent(unref(Link), {
						href: _ctx.route("register"),
						class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Register `);
							else return [createTextVNode(" Register ")];
						}),
						_: 1
					}, _parent));
					else _push(`<!---->`);
					_push(`<!--]-->`);
				}
				_push(`</nav>`);
			} else _push(`<!---->`);
			_push(`</header><main class="mt-6"><div class="grid gap-6 lg:grid-cols-2 lg:gap-8"><a href="https://laravel.com/docs" id="docs-card" class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div id="screenshot-container" class="relative flex w-full flex-1 items-stretch"><img src="https://laravel.com/assets/img/welcome/docs-light.svg" alt="Laravel documentation screenshot" class="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"><img src="https://laravel.com/assets/img/welcome/docs-dark.svg" alt="Laravel documentation screenshot" class="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"><div class="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div></div><div class="relative flex items-center gap-6 lg:items-end"><div id="docs-card-content" class="flex items-start gap-6 lg:flex-col"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#FF2D20" d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"></path><path fill="#FF2D20" d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"></path></svg></div><div class="pt-3 sm:pt-5 lg:pt-0"><h2 class="text-xl font-semibold text-black dark:text-white"> Documentation </h2><p class="mt-4 text-sm/relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div></div><svg class="size-6 shrink-0 stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></div></a><a href="https://laracasts.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laracasts </h2><p class="mt-4 text-sm/relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z"></path><path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z"></path><path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laravel News </h2><p class="mt-4 text-sm/relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Vibrant Ecosystem </h2><p class="mt-4 text-sm/relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]">Forge</a>, <a href="https://vapor.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Vapor</a>, <a href="https://nova.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Nova</a>, <a href="https://envoyer.io" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Envoyer</a>, and <a href="https://herd.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Herd</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Echo</a>, <a href="https://laravel.com/docs/horizon" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Telescope</a>, and more. </p></div></div></div></main><footer class="py-16 text-center text-sm text-black dark:text-white/70"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </footer></div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region resources/js/ssr.js
createServer((page) => createInertiaApp({
	page,
	render: renderToString,
	resolve: (name) => {
		return (/* @__PURE__ */ Object.assign({
			"./Pages/Auth/ConfirmPassword.vue": ConfirmPassword_exports,
			"./Pages/Auth/ForgotPassword.vue": ForgotPassword_exports,
			"./Pages/Auth/Login.vue": Login_exports,
			"./Pages/Auth/Register.vue": Register_exports,
			"./Pages/Auth/ResetPassword.vue": ResetPassword_exports,
			"./Pages/Auth/VerifyEmail.vue": VerifyEmail_exports,
			"./Pages/Dashboard.vue": Dashboard_exports,
			"./Pages/Home.vue": Home_exports,
			"./Pages/Profile/Edit.vue": Edit_exports,
			"./Pages/Profile/Partials/DeleteUserForm.vue": DeleteUserForm_exports,
			"./Pages/Profile/Partials/UpdatePasswordForm.vue": UpdatePasswordForm_exports,
			"./Pages/Profile/Partials/UpdateProfileInformationForm.vue": UpdateProfileInformationForm_exports,
			"./Pages/Welcome.vue": Welcome_exports
		}))[`./Pages/${name}.vue`];
	},
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin).use(M, Ziggy$1);
	}
}));
//#endregion
export {};
