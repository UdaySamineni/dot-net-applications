/*
 * SystemJS v0.20.18 Dev
 */
!function () {
    "use strict";
    function e(e) { return ut ? Symbol() : "@@" + e; }
    function t(e, t) { ot || (t = t.replace(at ? /file:\/\/\//g : /file:\/\//g, "")); var r, n = (e.message || e) + "\n  " + t; r = ft && e.fileName ? new Error(n, e.fileName, e.lineNumber) : new Error(n); var o = e.originalErr ? e.originalErr.stack : e.stack; return r.stack = it ? n + "\n  " + o : o, r.originalErr = e.originalErr || e, r; }
    function r(e, t) { throw new RangeError('Unable to resolve "' + e + '" to ' + t); }
    function n(e, t) { e = e.trim(); var n = t && t.substr(0, t.indexOf(":") + 1), o = e[0], i = e[1]; if ("/" === o && "/" === i)
        return n || r(e, t), n + e; if ("." === o && ("/" === i || "." === i && ("/" === e[2] || 2 === e.length && (e += "/")) || 1 === e.length && (e += "/")) || "/" === o) {
        var a, s = !n || "/" !== t[n.length];
        if (s ? (void 0 === t && r(e, t), a = t) : a = "/" === t[n.length + 1] ? "file:" !== n ? (a = t.substr(n.length + 2)).substr(a.indexOf("/") + 1) : t.substr(8) : t.substr(n.length + 1), "/" === o) {
            if (!s)
                return t.substr(0, t.length - a.length - 1) + e;
            r(e, t);
        }
        for (var u = a.substr(0, a.lastIndexOf("/") + 1) + e, l = [], c = -1, f = 0; f < u.length; f++)
            if (-1 === c)
                if ("." !== u[f])
                    c = f;
                else {
                    if ("." === u[f + 1] && "/" === u[f + 2])
                        l.pop(), f += 2;
                    else {
                        if ("/" !== u[f + 1]) {
                            c = f;
                            continue;
                        }
                        f += 1;
                    }
                    s && 0 === l.length && r(e, t), f === u.length && l.push("");
                }
            else
                "/" === u[f] && (l.push(u.substring(c, f + 1)), c = -1);
        return -1 !== c && l.push(u.substr(c)), t.substr(0, t.length - a.length) + l.join("");
    } return -1 !== e.indexOf(":") ? it && ":" === e[1] && "\\" === e[2] && e[0].match(/[a-z]/i) ? "file:///" + e.replace(/\\/g, "/") : e : void 0; }
    function o(e) { if (e.values)
        return e.values(); if ("undefined" == typeof Symbol || !Symbol.iterator)
        throw new Error("Symbol.iterator not supported in this browser"); var t = {}; return t[Symbol.iterator] = function () { var t = Object.keys(e), r = 0; return { next: function () { return r < t.length ? { value: e[t[r++]], done: !1 } : { value: void 0, done: !0 }; } }; }, t; }
    function i() { this.registry = new u; }
    function a(e) { if (!(e instanceof l))
        throw new TypeError("Module instantiation did not return a valid namespace object."); return e; }
    function s(e) { if (void 0 === e)
        throw new RangeError("No resolution found."); return e; }
    function u() { this[mt] = {}; }
    function l(e) { Object.defineProperty(this, vt, { value: e }), Object.keys(e).forEach(c, this); }
    function c(e) { Object.defineProperty(this, e, { enumerable: !0, get: function () { return this[vt][e]; } }); }
    function f() { i.call(this); var e = this.registry.delete; this.registry.delete = function (r) { var n = e.call(this, r); return t.hasOwnProperty(r) && !t[r].linkRecord && (delete t[r], n = !0), n; }; var t = {}; this[yt] = { lastRegister: void 0, records: t }, this.trace = !1; }
    function d(e, t, r) { return e.records[t] = { key: t, registration: r, module: void 0, importerSetters: void 0, loadError: void 0, evalError: void 0, linkRecord: { instantiatePromise: void 0, dependencies: void 0, execute: void 0, executingRequire: !1, moduleObj: void 0, setters: void 0, depsInstantiatePromise: void 0, dependencyInstantiations: void 0 } }; }
    function p(e, t, r, n, o) { var i = n[t]; if (i)
        return Promise.resolve(i); var a = o.records[t]; return a && !a.module ? a.loadError ? Promise.reject(a.loadError) : h(e, a, a.linkRecord, n, o) : e.resolve(t, r).then(function (t) { if (i = n[t])
        return i; if ((a = o.records[t]) && !a.module || (a = d(o, t, a && a.registration)), a.loadError)
        return Promise.reject(a.loadError); var r = a.linkRecord; return r ? h(e, a, r, n, o) : a; }); }
    function g(e, t, r) { return function () { var e = r.lastRegister; return e ? (r.lastRegister = void 0, t.registration = e, !0) : !!t.registration; }; }
    function h(e, r, n, o, i) { return n.instantiatePromise || (n.instantiatePromise = (r.registration ? Promise.resolve() : Promise.resolve().then(function () { return i.lastRegister = void 0, e[bt](r.key, e[bt].length > 1 && g(e, r, i)); })).then(function (t) { if (void 0 !== t) {
        if (!(t instanceof l))
            throw new TypeError("Instantiate did not return a valid Module object.");
        return delete i.records[r.key], e.trace && v(e, r, n), o[r.key] = t;
    } var a = r.registration; if (r.registration = void 0, !a)
        throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register."); return n.dependencies = a[0], r.importerSetters = [], n.moduleObj = {}, a[2] ? (n.moduleObj.default = n.moduleObj.__useDefault = {}, n.executingRequire = a[1], n.execute = a[2]) : y(e, r, n, a[1]), r; }).catch(function (e) { throw r.linkRecord = void 0, r.loadError = r.loadError || t(e, "Instantiating " + r.key); })); }
    function m(e, t, r, n, o, i) { return e.resolve(t, r).then(function (r) { i && (i[t] = r); var a = o.records[r], s = n[r]; if (s && (!a || a.module && s !== a.module))
        return s; if (a && a.loadError)
        throw a.loadError; (!a || !s && a.module) && (a = d(o, r, a && a.registration)); var u = a.linkRecord; return u ? h(e, a, u, n, o) : a; }); }
    function v(e, t, r) { e.loads = e.loads || {}, e.loads[t.key] = { key: t.key, deps: r.dependencies, dynamicDeps: [], depMap: r.depMap || {} }; }
    function y(e, t, r, n) { var o = r.moduleObj, i = t.importerSetters, a = !1, s = n.call(st, function (e, t) { if ("object" == typeof e) {
        var r = !1;
        for (var n in e)
            t = e[n], "__useDefault" === n || n in o && o[n] === t || (r = !0, o[n] = t);
        if (!1 === r)
            return t;
    }
    else {
        if ((a || e in o) && o[e] === t)
            return t;
        o[e] = t;
    } for (var s = 0; s < i.length; s++)
        i[s](o); return t; }, new x(e, t.key)); r.setters = s.setters, r.execute = s.execute, s.exports && (r.moduleObj = o = s.exports, a = !0); }
    function b(e, r, n, o, i) { if (n.depsInstantiatePromise)
        return n.depsInstantiatePromise; for (var a = Array(n.dependencies.length), s = 0; s < n.dependencies.length; s++)
        a[s] = m(e, n.dependencies[s], r.key, o, i, e.trace && n.depMap || (n.depMap = {})); var u = Promise.all(a).then(function (e) { if (n.dependencyInstantiations = e, n.setters)
        for (var t = 0; t < e.length; t++) {
            var o = n.setters[t];
            if (o) {
                var i = e[t];
                if (i instanceof l)
                    o(i);
                else {
                    if (i.loadError)
                        throw i.loadError;
                    o(i.module || i.linkRecord.moduleObj), i.importerSetters && i.importerSetters.push(o);
                }
            }
        } return r; }); return e.trace && (u = u.then(function () { return v(e, r, n), r; })), (u = u.catch(function (e) { throw n.depsInstantiatePromise = void 0, t(e, "Loading " + r.key); })).catch(function () { }), n.depsInstantiatePromise = u; }
    function w(e, t, r, n, o) { return new Promise(function (r, i) { function a(t) { var r = t.linkRecord; r && -1 === u.indexOf(t) && (u.push(t), c++, b(e, t, r, n, o).then(s, i)); } function s(e) { c--; var t = e.linkRecord; if (t)
        for (var n = 0; n < t.dependencies.length; n++) {
            var o = t.dependencyInstantiations[n];
            o instanceof l || a(o);
        } 0 === c && r(); } var u = [], c = 0; a(t); }); }
    function x(e, t) { this.loader = e, this.key = this.id = t, this.meta = { url: t }; }
    function k(e, t, r, n, o, i) { if (t.module)
        return t.module; if (t.evalError)
        throw t.evalError; if (i && -1 !== i.indexOf(t))
        return t.linkRecord.moduleObj; var a = O(e, t, r, n, o, r.setters ? [] : i || []); if (a)
        throw a; return t.module; }
    function E(e, t, r, n, o, i, a) { return function (s) { for (var u = 0; u < r.length; u++)
        if (r[u] === s) {
            var c, f = n[u];
            return c = f instanceof l ? f : k(e, f, f.linkRecord, o, i, a), "__useDefault" in c ? c.__useDefault : c;
        } throw new Error("Module " + s + " not declared as a System.registerDynamic dependency of " + t); }; }
    function O(e, r, n, o, i, a) { a.push(r); var s; if (n.setters)
        for (var u, c, f = 0; f < n.dependencies.length; f++)
            if (!((u = n.dependencyInstantiations[f]) instanceof l) && ((c = u.linkRecord) && -1 === a.indexOf(u) && (s = u.evalError ? u.evalError : O(e, u, c, o, i, c.setters ? a : [])), s))
                return r.linkRecord = void 0, r.evalError = t(s, "Evaluating " + r.key), r.evalError; if (n.execute)
        if (n.setters)
            s = S(n.execute);
        else {
            var d = { id: r.key }, p = n.moduleObj;
            Object.defineProperty(d, "exports", { configurable: !0, set: function (e) { p.default = p.__useDefault = e; }, get: function () { return p.__useDefault; } });
            var g = E(e, r.key, n.dependencies, n.dependencyInstantiations, o, i, a);
            if (!n.executingRequire)
                for (f = 0; f < n.dependencies.length; f++)
                    g(n.dependencies[f]);
            s = j(n.execute, g, p.default, d), d.exports !== p.default && (p.default = p.__useDefault = d.exports);
            var h = p.default;
            if (h && h.__esModule)
                for (var m in h)
                    Object.hasOwnProperty.call(h, m) && (p[m] = h[m]);
        } if (r.linkRecord = void 0, s)
        return r.evalError = t(s, "Evaluating " + r.key); if (o[r.key] = r.module = new l(n.moduleObj), !n.setters) {
        if (r.importerSetters)
            for (f = 0; f < r.importerSetters.length; f++)
                r.importerSetters[f](r.module);
        r.importerSetters = void 0;
    } }
    function S(e) { try {
        e.call(wt);
    }
    catch (e) {
        return e;
    } }
    function j(e, t, r, n) { try {
        var o = e.call(st, t, r, n);
        void 0 !== o && (n.exports = o);
    }
    catch (e) {
        return e;
    } }
    function _() { }
    function P(e) { return e instanceof l ? e : new l(e && e.__esModule ? e : { default: e, __useDefault: e }); }
    function M(e) { return void 0 === xt && (xt = "undefined" != typeof Symbol && !!Symbol.toStringTag), e instanceof l || xt && "[object Module]" == Object.prototype.toString.call(e); }
    function R(e, t) { (t || this.warnings && "undefined" != typeof console && console.warn) && console.warn(e); }
    function C(e, t, r) { var n = new Uint8Array(t); return 0 === n[0] && 97 === n[1] && 115 === n[2] ? WebAssembly.compile(t).then(function (t) { var n = [], o = [], i = {}; return WebAssembly.Module.imports && WebAssembly.Module.imports(t).forEach(function (e) { var t = e.module; o.push(function (e) { i[t] = e; }), -1 === n.indexOf(t) && n.push(t); }), e.register(n, function (e) { return { setters: o, execute: function () { e(new WebAssembly.Instance(t, i).exports); } }; }), r(), !0; }) : Promise.resolve(!1); }
    function L(e, t) { if ("." === e[0])
        throw new Error("Node module " + e + " can't be loaded as it is not a package require."); if (!kt) {
        var r = this._nodeRequire("module"), n = decodeURI(t.substr(at ? 8 : 7));
        (kt = new r(n)).paths = r._nodeModulePaths(n);
    } return kt.require(e); }
    function A(e, t) { for (var r in t)
        Object.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }
    function I(e, t) { for (var r in t)
        Object.hasOwnProperty.call(t, r) && void 0 === e[r] && (e[r] = t[r]); return e; }
    function F(e, t, r) { for (var n in t)
        if (Object.hasOwnProperty.call(t, n)) {
            var o = t[n];
            void 0 === e[n] ? e[n] = o : o instanceof Array && e[n] instanceof Array ? e[n] = [].concat(r ? o : e[n]).concat(r ? e[n] : o) : "object" == typeof o && null !== o && "object" == typeof e[n] ? e[n] = (r ? I : A)(A({}, e[n]), o) : r || (e[n] = o);
        } }
    function K(e) { if (Pt || Mt) {
        var t = document.createElement("link");
        Pt ? (t.rel = "preload", t.as = "script") : t.rel = "prefetch", t.href = e, document.head.appendChild(t), document.head.removeChild(t);
    }
    else
        (new Image).src = e; }
    function D(e, t, r) { try {
        importScripts(e);
    }
    catch (e) {
        r(e);
    } t(); }
    function U(e, t, r, n, o) { function i() { n(), s(); } function a(t) { s(), o(new Error("Fetching " + e)); } function s() { for (var e = 0; e < Rt.length; e++)
        if (Rt[e].err === a) {
            Rt.splice(e, 1);
            break;
        } u.removeEventListener("load", i, !1), u.removeEventListener("error", a, !1), document.head.removeChild(u); } if (e = e.replace(/#/g, "%23"), _t)
        return D(e, n, o); var u = document.createElement("script"); u.type = "text/javascript", u.charset = "utf-8", u.async = !0, t && (u.crossOrigin = t), r && (u.integrity = r), u.addEventListener("load", i, !1), u.addEventListener("error", a, !1), u.src = e, document.head.appendChild(u); }
    function q(e, t) { for (var r = e.split("."); r.length;)
        t = t[r.shift()]; return t; }
    function T(e, t, r) { var o = N(t, r); if (o) {
        var i = t[o] + r.substr(o.length), a = n(i, nt);
        return void 0 !== a ? a : e + i;
    } return -1 !== r.indexOf(":") ? r : e + r; }
    function z(e) { var t = this.name; if (t.substr(0, e.length) === e && (t.length === e.length || "/" === t[e.length] || "/" === e[e.length - 1] || ":" === e[e.length - 1])) {
        var r = e.split("/").length;
        r > this.len && (this.match = e, this.len = r);
    } }
    function N(e, t) { if (Object.hasOwnProperty.call(e, t))
        return t; var r = { name: t, match: void 0, len: 0 }; return Object.keys(e).forEach(z, r), r.match; }
    function J(e, t, r, n) { if ("file:///" === e.substr(0, 8)) {
        if (Ft)
            return $(e, t, r, n);
        throw new Error("Unable to fetch file URLs in this environment.");
    } e = e.replace(/#/g, "%23"); var o = { headers: { Accept: "application/x-es-module, */*" } }; return r && (o.integrity = r), t && ("string" == typeof t && (o.headers.Authorization = t), o.credentials = "include"), fetch(e, o).then(function (e) { if (e.ok)
        return n ? e.arrayBuffer() : e.text(); throw new Error("Fetch error: " + e.status + " " + e.statusText); }); }
    function $(e, t, r, n) { return new Promise(function (r, o) { function i() { r(n ? s.response : s.responseText); } function a() { o(new Error("XHR error: " + (s.status ? " (" + s.status + (s.statusText ? " " + s.statusText : "") + ")" : "") + " loading " + e)); } e = e.replace(/#/g, "%23"); var s = new XMLHttpRequest; n && (s.responseType = "arraybuffer"), s.onreadystatechange = function () { 4 === s.readyState && (0 == s.status ? s.response ? i() : (s.addEventListener("error", a), s.addEventListener("load", i)) : 200 === s.status ? i() : a()); }, s.open("GET", e, !0), s.setRequestHeader && (s.setRequestHeader("Accept", "application/x-es-module, */*"), t && ("string" == typeof t && s.setRequestHeader("Authorization", t), s.withCredentials = !0)), s.send(null); }); }
    function B(e, t, r, n) { return "file:///" != e.substr(0, 8) ? Promise.reject(new Error('Unable to fetch "' + e + '". Only file URLs of the form file:/// supported running in Node.')) : (Lt = Lt || require("fs"), e = at ? e.replace(/\//g, "\\").substr(8) : e.substr(7), new Promise(function (t, r) { Lt.readFile(e, function (e, o) { if (e)
        return r(e); if (n)
        t(o);
    else {
        var i = o + "";
        "\ufeff" === i[0] && (i = i.substr(1)), t(i);
    } }); })); }
    function W() { throw new Error("No fetch method is defined for this environment."); }
    function G() { return { pluginKey: void 0, pluginArgument: void 0, pluginModule: void 0, packageKey: void 0, packageConfig: void 0, load: void 0 }; }
    function H(e, t, r) { var n = G(); if (r) {
        var o;
        t.pluginFirst ? -1 !== (o = r.lastIndexOf("!")) && (n.pluginArgument = n.pluginKey = r.substr(0, o)) : -1 !== (o = r.indexOf("!")) && (n.pluginArgument = n.pluginKey = r.substr(o + 1)), n.packageKey = N(t.packages, r), n.packageKey && (n.packageConfig = t.packages[n.packageKey]);
    } return n; }
    function Z(e, t) { var r = this[St], n = G(), o = H(this, r, t), i = this; return Promise.resolve().then(function () { var r = e.lastIndexOf("#?"); if (-1 === r)
        return Promise.resolve(e); var n = he.call(i, e.substr(r + 2)); return me.call(i, n, t, !0).then(function (t) { return t ? e.substr(0, r) : "@empty"; }); }).then(function (e) { var a = ne(r.pluginFirst, e); return a ? (n.pluginKey = a.plugin, Promise.all([ee.call(i, r, a.argument, o && o.pluginArgument || t, n, o, !0), i.resolve(a.plugin, t)]).then(function (e) { if (n.pluginArgument = e[0], n.pluginKey = e[1], n.pluginArgument === n.pluginKey)
        throw new Error("Plugin " + n.pluginArgument + " cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule."); return oe(r.pluginFirst, e[0], e[1]); })) : ee.call(i, r, e, o && o.pluginArgument || t, n, o, !1); }).then(function (e) { return ve.call(i, e, t, o); }).then(function (e) { return re.call(i, r, e, n), n.pluginKey || !n.load.loader ? e : i.resolve(n.load.loader, e).then(function (t) { return n.pluginKey = t, n.pluginArgument = e, e; }); }).then(function (e) { return i[jt][e] = n, e; }); }
    function X(e, t) { var r = ne(e.pluginFirst, t); if (r) {
        var n = X.call(this, e, r.plugin);
        return oe(e.pluginFirst, Q.call(this, e, r.argument, void 0, !1, !1), n);
    } return Q.call(this, e, t, void 0, !1, !1); }
    function Y(e, t) { var r = this[St], n = G(), o = o || H(this, r, t), i = ne(r.pluginFirst, e); return i ? (n.pluginKey = Y.call(this, i.plugin, t), oe(r.pluginFirst, V.call(this, r, i.argument, o.pluginArgument || t, n, o, !!n.pluginKey), n.pluginKey)) : V.call(this, r, e, o.pluginArgument || t, n, o, !!n.pluginKey); }
    function Q(e, t, r, o, i) { var a = n(t, r || nt); if (a)
        return T(e.baseURL, e.paths, a); if (o) {
        var s = N(e.map, t);
        if (s && (t = e.map[s] + t.substr(s.length), a = n(t, nt)))
            return T(e.baseURL, e.paths, a);
    } if (this.registry.has(t))
        return t; if ("@node/" === t.substr(0, 6))
        return t; var u = i && "/" !== t[t.length - 1], l = T(e.baseURL, e.paths, u ? t + "/" : t); return u ? l.substr(0, l.length - 1) : l; }
    function V(e, t, r, n, o, i) { if (o && o.packageConfig && "." !== t[0]) {
        var a = o.packageConfig.map, s = a && N(a, t);
        if (s && "string" == typeof a[s]) {
            var u = ue(this, e, o.packageConfig, o.packageKey, s, t, n, i);
            if (u)
                return u;
        }
    } var l = Q.call(this, e, t, r, !0, !0), c = de(e, l); if (n.packageKey = c && c.packageKey || N(e.packages, l), !n.packageKey)
        return l; if (-1 !== e.packageConfigKeys.indexOf(l))
        return n.packageKey = void 0, l; n.packageConfig = e.packages[n.packageKey] || (e.packages[n.packageKey] = Ee()); var f = l.substr(n.packageKey.length + 1); return ae(this, e, n.packageConfig, n.packageKey, f, n, i); }
    function ee(e, t, r, n, o, i) { var a = this; return Et.then(function () { if (o && o.packageConfig && "./" !== t.substr(0, 2)) {
        var r = o.packageConfig.map, s = r && N(r, t);
        if (s)
            return ce(a, e, o.packageConfig, o.packageKey, s, t, n, i);
    } return Et; }).then(function (o) { if (o)
        return o; var s = Q.call(a, e, t, r, !0, !0), u = de(e, s); return n.packageKey = u && u.packageKey || N(e.packages, s), n.packageKey ? -1 !== e.packageConfigKeys.indexOf(s) ? (n.packageKey = void 0, n.load = te(), n.load.format = "json", n.load.loader = "", Promise.resolve(s)) : (n.packageConfig = e.packages[n.packageKey] || (e.packages[n.packageKey] = Ee()), (u && !n.packageConfig.configured ? pe(a, e, u.configPath, n) : Et).then(function () { var t = s.substr(n.packageKey.length + 1); return le(a, e, n.packageConfig, n.packageKey, t, n, i); })) : Promise.resolve(s); }); }
    function te() { return { extension: "", deps: void 0, format: void 0, loader: void 0, scriptLoad: void 0, globals: void 0, nonce: void 0, integrity: void 0, sourceMap: void 0, exports: void 0, encapsulateGlobal: !1, crossOrigin: void 0, cjsRequireDetection: !0, cjsDeferDepsExecute: !1, esModule: !1 }; }
    function re(e, t, r) { r.load = r.load || te(); var n, o = 0; for (var i in e.meta)
        if (-1 !== (n = i.indexOf("*")) && i.substr(0, n) === t.substr(0, n) && i.substr(n + 1) === t.substr(t.length - i.length + n + 1)) {
            var a = i.split("/").length;
            a > o && (o = a), F(r.load, e.meta[i], o !== a);
        } if (e.meta[t] && F(r.load, e.meta[t], !1), r.packageKey) {
        var s = t.substr(r.packageKey.length + 1), u = {};
        if (r.packageConfig.meta) {
            o = 0;
            ge(r.packageConfig.meta, s, function (e, t, r) { r > o && (o = r), F(u, t, r && o > r); }), F(r.load, u, !1);
        }
        !r.packageConfig.format || r.pluginKey || r.load.loader || (r.load.format = r.load.format || r.packageConfig.format);
    } }
    function ne(e, t) { var r, n, o = e ? t.indexOf("!") : t.lastIndexOf("!"); if (-1 !== o)
        return e ? (r = t.substr(o + 1), n = t.substr(0, o)) : (r = t.substr(0, o), n = t.substr(o + 1) || r.substr(r.lastIndexOf(".") + 1)), { argument: r, plugin: n }; }
    function oe(e, t, r) { return e ? r + "!" + t : t + "!" + r; }
    function ie(e, t, r, n, o) { if (!n || !t.defaultExtension || "/" === n[n.length - 1] || o)
        return n; var i = !1; if (t.meta && ge(t.meta, n, function (e, t, r) { if (0 === r || e.lastIndexOf("*") !== e.length - 1)
        return i = !0; }), !i && e.meta && ge(e.meta, r + "/" + n, function (e, t, r) { if (0 === r || e.lastIndexOf("*") !== e.length - 1)
        return i = !0; }), i)
        return n; var a = "." + t.defaultExtension; return n.substr(n.length - a.length) !== a ? n + a : n; }
    function ae(e, t, r, n, o, i, a) { if (!o) {
        if (!r.main)
            return n;
        o = "./" === r.main.substr(0, 2) ? r.main.substr(2) : r.main;
    } if (r.map) {
        var s = "./" + o, u = N(r.map, s);
        if (u || (s = "./" + ie(t, r, n, o, a)) !== "./" + o && (u = N(r.map, s)), u) {
            var l = ue(e, t, r, n, u, s, i, a);
            if (l)
                return l;
        }
    } return n + "/" + ie(t, r, n, o, a); }
    function se(e, t, r) { return !(t.substr(0, e.length) === e && r.length > e.length); }
    function ue(e, t, r, n, o, i, a, s) { "/" === i[i.length - 1] && (i = i.substr(0, i.length - 1)); var u = r.map[o]; if ("object" == typeof u)
        throw new Error("Synchronous conditional normalization not supported sync normalizing " + o + " in " + n); if (se(o, u, i) && "string" == typeof u)
        return V.call(e, t, u + i.substr(o.length), n + "/", a, a, s); }
    function le(e, t, r, n, o, i, a) { if (!o) {
        if (!r.main)
            return Promise.resolve(n);
        o = "./" === r.main.substr(0, 2) ? r.main.substr(2) : r.main;
    } var s, u; return r.map && (s = "./" + o, (u = N(r.map, s)) || (s = "./" + ie(t, r, n, o, a)) !== "./" + o && (u = N(r.map, s))), (u ? ce(e, t, r, n, u, s, i, a) : Et).then(function (e) { return e ? Promise.resolve(e) : Promise.resolve(n + "/" + ie(t, r, n, o, a)); }); }
    function ce(e, t, r, n, o, i, a, s) { "/" === i[i.length - 1] && (i = i.substr(0, i.length - 1)); var u = r.map[o]; if ("string" == typeof u)
        return se(o, u, i) ? ee.call(e, t, u + i.substr(o.length), n + "/", a, a, s).then(function (t) { return ve.call(e, t, n + "/", a); }) : Et; var l = [], c = []; for (var d in u) {
        var p = he(d);
        c.push({ condition: p, map: u[d] }), l.push(f.prototype.import.call(e, p.module, n));
    } return Promise.all(l).then(function (e) { for (var t = 0; t < c.length; t++) {
        var r = c[t].condition, n = q(r.prop, "__useDefault" in e[t] ? e[t].__useDefault : e[t]);
        if (!r.negate && n || r.negate && !n)
            return c[t].map;
    } }).then(function (r) { if (r)
        return se(o, r, i) ? ee.call(e, t, r + i.substr(o.length), n + "/", a, a, s).then(function (t) { return ve.call(e, t, n + "/", a); }) : Et; }); }
    function fe(e) { var t = e.lastIndexOf("*"), r = Math.max(t + 1, e.lastIndexOf("/")); return { length: r, regEx: new RegExp("^(" + e.substr(0, r).replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^\\/]+") + ")(\\/|$)"), wildcard: -1 !== t }; }
    function de(e, t) { for (var r, n, o = !1, i = 0; i < e.packageConfigPaths.length; i++) {
        var a = e.packageConfigPaths[i], s = Dt[a] || (Dt[a] = fe(a));
        if (!(t.length < s.length)) {
            var u = t.match(s.regEx);
            !u || r && (o && s.wildcard || !(r.length < u[1].length)) || (r = u[1], o = !s.wildcard, n = r + a.substr(s.length));
        }
    } if (r)
        return { packageKey: r, configPath: n }; }
    function pe(e, r, n, o, i) { var a = e.pluginLoader || e; return -1 === r.packageConfigKeys.indexOf(n) && r.packageConfigKeys.push(n), a.import(n).then(function (e) { Oe(o.packageConfig, e, o.packageKey, !0, r), o.packageConfig.configured = !0; }).catch(function (e) { throw t(e, "Unable to fetch package configuration file " + n); }); }
    function ge(e, t, r) { var n; for (var o in e) {
        var i = "./" === o.substr(0, 2) ? "./" : "";
        if (i && (o = o.substr(2)), -1 !== (n = o.indexOf("*")) && o.substr(0, n) === t.substr(0, n) && o.substr(n + 1) === t.substr(t.length - o.length + n + 1) && r(o, e[i + o], o.split("/").length))
            return;
    } var a = e[t] && Object.hasOwnProperty.call(e, t) ? e[t] : e["./" + t]; a && r(a, a, 0); }
    function he(e) { var t, r, n, o = e.lastIndexOf("|"); return -1 !== o ? (t = e.substr(o + 1), r = e.substr(0, o), "~" === t[0] && (n = !0, t = t.substr(1))) : (n = "~" === e[0], t = "default", r = e.substr(n), -1 !== Ut.indexOf(r) && (t = r, r = null)), { module: r || "@system-env", prop: t, negate: n }; }
    function me(e, t, r) { return f.prototype.import.call(this, e.module, t).then(function (t) { var n = q(e.prop, t); if (r && "boolean" != typeof n)
        throw new TypeError("Condition did not resolve to a boolean."); return e.negate ? !n : n; }); }
    function ve(e, t, r) { var n = e.match(qt); if (!n)
        return Promise.resolve(e); var o = he.call(this, n[0].substr(2, n[0].length - 3)); return me.call(this, o, t, !1).then(function (r) { if ("string" != typeof r)
        throw new TypeError("The condition value for " + e + " doesn't resolve to a string."); if (-1 !== r.indexOf("/"))
        throw new TypeError("Unabled to interpolate conditional " + e + (t ? " in " + t : "") + "\n\tThe condition value " + r + ' cannot contain a "/" separator.'); return e.replace(qt, r); }); }
    function ye(e, t, r) { for (var n = 0; n < Tt.length; n++) {
        var o = Tt[n];
        t[o] && Er[o.substr(0, o.length - 6)] && r(t[o]);
    } }
    function be(e, t) { var r = {}; for (var n in e) {
        var o = e[n];
        t > 1 ? o instanceof Array ? r[n] = [].concat(o) : "object" == typeof o ? r[n] = be(o, t - 1) : "packageConfig" !== n && (r[n] = o) : r[n] = o;
    } return r; }
    function we(e, t) { var r = e[t]; return r instanceof Array ? e[t].concat([]) : "object" == typeof r ? be(r, 3) : e[t]; }
    function xe(e) { if (e) {
        if (-1 !== Or.indexOf(e))
            return we(this[St], e);
        throw new Error('"' + e + '" is not a valid configuration name. Must be one of ' + Or.join(", ") + ".");
    } for (var t = {}, r = 0; r < Or.length; r++) {
        var n = Or[r], o = we(this[St], n);
        void 0 !== o && (t[n] = o);
    } return t; }
    function ke(e, t) { var r = this, o = this[St]; if ("warnings" in e && (o.warnings = e.warnings), "wasm" in e && (o.wasm = "undefined" != typeof WebAssembly && e.wasm), ("production" in e || "build" in e) && tt.call(r, !!e.production, !!(e.build || Er && Er.build)), !t) {
        var i;
        ye(r, e, function (e) { i = i || e.baseURL; }), (i = i || e.baseURL) && (o.baseURL = n(i, nt) || n("./" + i, nt), "/" !== o.baseURL[o.baseURL.length - 1] && (o.baseURL += "/")), e.paths && A(o.paths, e.paths), ye(r, e, function (e) { e.paths && A(o.paths, e.paths); });
        for (var a in o.paths)
            -1 !== o.paths[a].indexOf("*") && (R.call(o, "Path config " + a + " -> " + o.paths[a] + " is no longer supported as wildcards are deprecated."), delete o.paths[a]);
    } if (e.defaultJSExtensions && R.call(o, "The defaultJSExtensions configuration option is deprecated.\n  Use packages defaultExtension instead.", !0), "boolean" == typeof e.pluginFirst && (o.pluginFirst = e.pluginFirst), e.map)
        for (var a in e.map) {
            var s = e.map[a];
            if ("string" == typeof s) {
                var u = Q.call(r, o, s, void 0, !1, !1);
                "/" === u[u.length - 1] && ":" !== a[a.length - 1] && "/" !== a[a.length - 1] && (u = u.substr(0, u.length - 1)), o.map[a] = u;
            }
            else {
                m = (m = Q.call(r, o, "/" !== a[a.length - 1] ? a + "/" : a, void 0, !0, !0)).substr(0, m.length - 1);
                var l = o.packages[m];
                l || ((l = o.packages[m] = Ee()).defaultExtension = ""), Oe(l, { map: s }, m, !1, o);
            }
        } if (e.packageConfigPaths) {
        for (var c = [], f = 0; f < e.packageConfigPaths.length; f++) {
            var d = e.packageConfigPaths[f], p = Math.max(d.lastIndexOf("*") + 1, d.lastIndexOf("/")), g = Q.call(r, o, d.substr(0, p), void 0, !1, !1);
            c[f] = g + d.substr(p);
        }
        o.packageConfigPaths = c;
    } if (e.bundles)
        for (var a in e.bundles) {
            for (var h = [], f = 0; f < e.bundles[a].length; f++)
                h.push(r.normalizeSync(e.bundles[a][f]));
            o.bundles[a] = h;
        } if (e.packages)
        for (var a in e.packages) {
            if (a.match(/^([^\/]+:)?\/\/$/))
                throw new TypeError('"' + a + '" is not a valid package name.');
            var m = Q.call(r, o, "/" !== a[a.length - 1] ? a + "/" : a, void 0, !0, !0);
            m = m.substr(0, m.length - 1), Oe(o.packages[m] = o.packages[m] || Ee(), e.packages[a], m, !1, o);
        } if (e.depCache)
        for (var a in e.depCache)
            o.depCache[r.normalizeSync(a)] = [].concat(e.depCache[a]); if (e.meta)
        for (var a in e.meta)
            if ("*" === a[0])
                A(o.meta[a] = o.meta[a] || {}, e.meta[a]);
            else {
                var v = Q.call(r, o, a, void 0, !0, !0);
                A(o.meta[v] = o.meta[v] || {}, e.meta[a]);
            } "transpiler" in e && (o.transpiler = e.transpiler); for (var y in e)
        -1 === Or.indexOf(y) && -1 === Tt.indexOf(y) && (r[y] = e[y]); ye(r, e, function (e) { r.config(e, !0); }); }
    function Ee() { return { defaultExtension: void 0, main: void 0, format: void 0, meta: void 0, map: void 0, packageConfig: void 0, configured: !1 }; }
    function Oe(e, t, r, n, o) { for (var i in t)
        "main" === i || "format" === i || "defaultExtension" === i || "configured" === i ? n && void 0 !== e[i] || (e[i] = t[i]) : "map" === i ? (n ? I : A)(e.map = e.map || {}, t.map) : "meta" === i ? (n ? I : A)(e.meta = e.meta || {}, t.meta) : Object.hasOwnProperty.call(t, i) && R.call(o, '"' + i + '" is not a valid package configuration option in package ' + r); return void 0 === e.defaultExtension && (e.defaultExtension = "js"), void 0 === e.main && e.map && e.map["."] ? (e.main = e.map["."], delete e.map["."]) : "object" == typeof e.main && (e.map = e.map || {}, e.map["./@main"] = e.main, e.main.default = e.main.default || "./", e.main = "@main"), e; }
    function Se(e) { return zt ? Wt + new Buffer(e).toString("base64") : "undefined" != typeof btoa ? Wt + btoa(unescape(encodeURIComponent(e))) : ""; }
    function je(e, t, r, n) { var o = e.lastIndexOf("\n"); if (t) {
        if ("object" != typeof t)
            throw new TypeError("load.metadata.sourceMap must be set to an object.");
        t = JSON.stringify(t);
    } return (n ? "(function(System, SystemJS) {" : "") + e + (n ? "\n})(System, System);" : "") + ("\n//# sourceURL=" != e.substr(o, 15) ? "\n//# sourceURL=" + r + (t ? "!transpiled" : "") : "") + (t && Se(t) || ""); }
    function _e(e, t, r, n, o) { Nt || (Nt = document.head || document.body || document.documentElement); var i = document.createElement("script"); i.text = je(t, r, n, !1); var a, s = window.onerror; if (window.onerror = function (e) { a = addToError(e, "Evaluating " + n), s && s.apply(this, arguments); }, Pe(e), o && i.setAttribute("nonce", o), Nt.appendChild(i), Nt.removeChild(i), Me(), window.onerror = s, a)
        return a; }
    function Pe(e) { 0 == Gt++ && (Bt = st.System), st.System = st.SystemJS = e; }
    function Me() { 0 == --Gt && (st.System = st.SystemJS = Bt); }
    function Re(e, t, r, n, o, i, a) { if (t) {
        if (i && Ht)
            return _e(e, t, r, n, i);
        try {
            Pe(e), !Jt && e._nodeRequire && (Jt = e._nodeRequire("vm"), $t = Jt.runInThisContext("typeof System !== 'undefined' && System") === e), $t ? Jt.runInThisContext(je(t, r, n, !a), { filename: n + (r ? "!transpiled" : "") }) : (0, eval)(je(t, r, n, !a)), Me();
        }
        catch (e) {
            return Me(), e;
        }
    } }
    function Ce(e) { return "file:///" === e.substr(0, 8) ? e.substr(7 + !!at) : Zt && e.substr(0, Zt.length) === Zt ? e.substr(Zt.length) : e; }
    function Le(e, t) { return Ce(this.normalizeSync(e, t)); }
    function Ae(e) { var t, r = e.lastIndexOf("!"), n = (t = -1 !== r ? e.substr(0, r) : e).split("/"); return n.pop(), n = n.join("/"), { filename: Ce(t), dirname: Ce(n) }; }
    function Ie(e) { function t(e, t) { for (var r = 0; r < e.length; r++)
        if (e[r][0] < t.index && e[r][1] > t.index)
            return !0; return !1; } It.lastIndex = tr.lastIndex = rr.lastIndex = 0; var r, n = [], o = [], i = []; if (e.length / e.split("\n").length < 200) {
        for (; r = rr.exec(e);)
            o.push([r.index, r.index + r[0].length]);
        for (; r = tr.exec(e);)
            t(o, r) || i.push([r.index + r[1].length, r.index + r[0].length - 1]);
    } for (; r = It.exec(e);)
        if (!t(o, r) && !t(i, r)) {
            var a = r[1].substr(1, r[1].length - 2);
            if (a.match(/"|'/))
                continue;
            n.push(a);
        } return n; }
    function Fe(e) { if (-1 === nr.indexOf(e)) {
        try {
            var t = st[e];
        }
        catch (t) {
            nr.push(e);
        }
        this(e, t);
    } }
    function Ke(e) { if ("string" == typeof e)
        return q(e, st); if (!(e instanceof Array))
        throw new Error("Global exports must be a string or array."); for (var t = {}, r = 0; r < e.length; r++)
        t[e[r].split(".").pop()] = q(e[r], st); return t; }
    function De(e, t, r, n) { var o = st.define; st.define = void 0; var i; if (r) {
        i = {};
        for (var a in r)
            i[a] = st[a], st[a] = r[a];
    } return t || (Yt = {}, Object.keys(st).forEach(Fe, function (e, t) { Yt[e] = t; })), function () { var e, r = t ? Ke(t) : {}, a = !!t; if (t && !n || Object.keys(st).forEach(Fe, function (o, i) { Yt[o] !== i && void 0 !== i && (n && (st[o] = void 0), t || (r[o] = i, void 0 !== e ? a || e === i || (a = !0) : e = i)); }), r = a ? r : e, i)
        for (var s in i)
            st[s] = i[s]; return st.define = o, r; }; }
    function Ue(e, t) { var r = ((e = e.replace(tr, "")).match(ar)[1].split(",")[t] || "require").replace(sr, ""), n = ur[r] || (ur[r] = new RegExp(or + r + ir, "g")); n.lastIndex = 0; for (var o, i = []; o = n.exec(e);)
        i.push(o[2] || o[3]); return i; }
    function qe(e) { return function (t, r, n) { e(t, r, n), "object" != typeof (r = n.exports) && "function" != typeof r || "__esModule" in r || Object.defineProperty(n.exports, "__esModule", { value: !0 }); }; }
    function Te(e, t) { Vt = e, cr = t, Qt = void 0, lr = !1; }
    function ze(e) { Qt ? e.registerDynamic(Vt ? Qt[0].concat(Vt) : Qt[0], !1, cr ? qe(Qt[1]) : Qt[1]) : lr && e.registerDynamic([], !1, _); }
    function Ne(e, t) { !e.load.esModule || "object" != typeof t && "function" != typeof t || "__esModule" in t || Object.defineProperty(t, "__esModule", { value: !0 }); }
    function Je(e, t) { var r = this, n = this[St]; return (Be(n, this, e) || Et).then(function () { if (!t()) {
        var o = r[jt][e];
        if ("@node/" === e.substr(0, 6)) {
            if (!r._nodeRequire)
                throw new TypeError("Error loading " + e + ". Can only load node core modules in Node.");
            return r.registerDynamic([], !1, function () { return L.call(r, e.substr(6), r.baseURL); }), void t();
        }
        return o.load.scriptLoad ? !o.load.pluginKey && fr || (o.load.scriptLoad = !1, R.call(n, 'scriptLoad not supported for "' + e + '"')) : !1 !== o.load.scriptLoad && !o.load.pluginKey && fr && (o.load.deps || o.load.globals || !("system" === o.load.format || "register" === o.load.format || "global" === o.load.format && o.load.exports) || (o.load.scriptLoad = !0)), o.load.scriptLoad ? new Promise(function (n, i) { if ("amd" === o.load.format && st.define !== r.amdDefine)
            throw new Error("Loading AMD with scriptLoad requires setting the global `" + pr + ".define = SystemJS.amdDefine`"); U(e, o.load.crossOrigin, o.load.integrity, function () { if (!t()) {
            o.load.format = "global";
            var e = o.load.exports && Ke(o.load.exports);
            r.registerDynamic([], !1, function () { return Ne(o, e), e; }), t();
        } n(); }, i); }) : $e(r, e, o).then(function () { return We(r, e, o, t, n.wasm); });
    } }).then(function (t) { return delete r[jt][e], t; }); }
    function $e(e, t, r) { return r.pluginKey ? e.import(r.pluginKey).then(function (e) { r.pluginModule = e, r.pluginLoad = { name: t, address: r.pluginArgument, source: void 0, metadata: r.load }, r.load.deps = r.load.deps || []; }) : Et; }
    function Be(e, t, r) { var n = e.depCache[r]; if (n)
        for (a = 0; a < n.length; a++)
            t.normalize(n[a], r).then(K);
    else {
        var o = !1;
        for (var i in e.bundles) {
            for (var a = 0; a < e.bundles[i].length; a++) {
                var s = e.bundles[i][a];
                if (s === r) {
                    o = !0;
                    break;
                }
                if (-1 !== s.indexOf("*")) {
                    var u = s.split("*");
                    if (2 !== u.length) {
                        e.bundles[i].splice(a--, 1);
                        continue;
                    }
                    if (r.substr(0, u[0].length) === u[0] && r.substr(r.length - u[1].length, u[1].length) === u[1]) {
                        o = !0;
                        break;
                    }
                }
            }
            if (o)
                return t.import(i);
        }
    } }
    function We(e, t, r, n, o) { return r.load.exports && !r.load.format && (r.load.format = "global"), Et.then(function () { if (r.pluginModule && r.pluginModule.locate)
        return Promise.resolve(r.pluginModule.locate.call(e, r.pluginLoad)).then(function (e) { e && (r.pluginLoad.address = e); }); }).then(function () { return r.pluginModule ? (o = !1, r.pluginModule.fetch ? r.pluginModule.fetch.call(e, r.pluginLoad, function (e) { return Kt(e.address, r.load.authorization, r.load.integrity, !1); }) : Kt(r.pluginLoad.address, r.load.authorization, r.load.integrity, !1)) : Kt(t, r.load.authorization, r.load.integrity, o); }).then(function (i) { return o && "string" != typeof i ? C(e, i, n).then(function (o) { if (!o) {
        var a = ot ? new TextDecoder("utf-8").decode(new Uint8Array(i)) : i.toString();
        return Ge(e, t, a, r, n);
    } }) : Ge(e, t, i, r, n); }); }
    function Ge(e, t, r, n, o) { return Promise.resolve(r).then(function (t) { return "detect" === n.load.format && (n.load.format = void 0), Ve(t, n), n.pluginModule ? (n.pluginLoad.source = t, n.pluginModule.translate ? Promise.resolve(n.pluginModule.translate.call(e, n.pluginLoad, n.traceOpts)).then(function (e) { if (n.load.sourceMap) {
        if ("object" != typeof n.load.sourceMap)
            throw new Error("metadata.load.sourceMap must be set to an object.");
        Xe(n.pluginLoad.address, n.load.sourceMap);
    } return "string" == typeof e ? e : n.pluginLoad.source; }) : t) : t; }).then(function (r) { return n.load.format || '"bundle"' !== r.substring(0, 8) ? "register" === n.load.format || !n.load.format && He(r) ? (n.load.format = "register", r) : "esm" === n.load.format || !n.load.format && r.match(gr) ? (n.load.format = "esm", Ye(e, r, t, n, o)) : r : (n.load.format = "system", r); }).then(function (t) { if ("string" != typeof t || !n.pluginModule || !n.pluginModule.instantiate)
        return t; var r = !1; return n.pluginLoad.source = t, Promise.resolve(n.pluginModule.instantiate.call(e, n.pluginLoad, function (e) { if (t = e.source, n.load = e.metadata, r)
        throw new Error("Instantiate must only be called once."); r = !0; })).then(function (e) { return r ? t : P(e); }); }).then(function (r) { if ("string" != typeof r)
        return r; n.load.format || (n.load.format = Ze(r)); var i = !1; switch (n.load.format) {
        case "esm":
        case "register":
        case "system":
            if (u = Re(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !1))
                throw u;
            if (!o())
                return Ot;
            return;
        case "json":
            var a = JSON.parse(r);
            return e.newModule({ default: a, __useDefault: a });
        case "amd":
            var s = st.define;
            st.define = e.amdDefine, Te(n.load.deps, n.load.esModule);
            var u = Re(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !1);
            if ((i = o()) || (ze(e), i = o()), st.define = s, u)
                throw u;
            break;
        case "cjs":
            var l = n.load.deps, c = (n.load.deps || []).concat(n.load.cjsRequireDetection ? Ie(r) : []);
            for (var f in n.load.globals)
                n.load.globals[f] && c.push(n.load.globals[f]);
            e.registerDynamic(c, !0, function (o, i, a) { if (o.resolve = function (t) { return Le.call(e, t, a.id); }, a.paths = [], a.require = o, !n.load.cjsDeferDepsExecute && l)
                for (var s = 0; s < l.length; s++)
                    o(l[s]); var u = Ae(a.id), c = { exports: i, args: [o, i, a, u.filename, u.dirname, st, st] }, f = "(function (require, exports, module, __filename, __dirname, global, GLOBAL"; if (n.load.globals)
                for (var d in n.load.globals)
                    c.args.push(o(n.load.globals[d])), f += ", " + d; var p = st.define; st.define = void 0, st.__cjsWrapper = c, r = f + ") {" + r.replace(yr, "") + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);"; var g = Re(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !1); if (g)
                throw g; Ne(n, i), st.__cjsWrapper = void 0, st.define = p; }), i = o();
            break;
        case "global":
            c = n.load.deps || [];
            for (var f in n.load.globals) {
                var d = n.load.globals[f];
                d && c.push(d);
            }
            e.registerDynamic(c, !1, function (o, i, a) { var s; if (n.load.globals) {
                s = {};
                for (var u in n.load.globals)
                    n.load.globals[u] && (s[u] = o(n.load.globals[u]));
            } var l = n.load.exports; l && (r += "\n" + pr + '["' + l + '"] = ' + l + ";"); var c = De(a.id, l, s, n.load.encapsulateGlobal), f = Re(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !0); if (f)
                throw f; var d = c(); return Ne(n, d), d; }), i = o();
            break;
        default: throw new TypeError('Unknown module format "' + n.load.format + '" for "' + t + '".' + ("es6" === n.load.format ? ' Use "esm" instead here.' : ""));
    } if (!i)
        throw new Error("Module " + t + " detected as " + n.load.format + " but didn't execute correctly."); }); }
    function He(e) { var t = e.match(hr); return t && "System.register" === e.substr(t[0].length, 15); }
    function Ze(e) { return e.match(mr) ? "amd" : (vr.lastIndex = 0, It.lastIndex = 0, It.exec(e) || vr.exec(e) ? "cjs" : "global"); }
    function Xe(e, t) { var r = e.split("!")[0]; t.file && t.file != e || (t.file = r + "!transpiled"), (!t.sources || t.sources.length <= 1 && (!t.sources[0] || t.sources[0] === e)) && (t.sources = [r]); }
    function Ye(e, r, n, o, i) { if (!e.transpiler)
        throw new TypeError("Unable to dynamically transpile ES module\n   A loader plugin needs to be configured via `SystemJS.config({ transpiler: 'transpiler-module' })`."); if (o.load.deps) {
        for (var a = "", s = 0; s < o.load.deps.length; s++)
            a += 'import "' + o.load.deps[s] + '"; ';
        r = a + r;
    } return e.import.call(e, e.transpiler).then(function (t) { if (!(t = t.__useDefault || t).translate)
        throw new Error(e.transpiler + " is not a valid transpiler plugin."); return t === o.pluginModule ? r : ("string" == typeof o.load.sourceMap && (o.load.sourceMap = JSON.parse(o.load.sourceMap)), o.pluginLoad = o.pluginLoad || { name: n, address: n, source: r, metadata: o.load }, o.load.deps = o.load.deps || [], Promise.resolve(t.translate.call(e, o.pluginLoad, o.traceOpts)).then(function (e) { var t = o.load.sourceMap; return t && "object" == typeof t && Xe(n, t), "esm" === o.load.format && He(e) && (o.load.format = "register"), e; })); }, function (e) { throw t(e, "Unable to load transpiler to transpile " + n); }); }
    function Qe(e, t, r) { for (var n, o = t.split("."); o.length > 1;)
        e = e[n = o.shift()] = e[n] || {}; void 0 === e[n = o.shift()] && (e[n] = r); }
    function Ve(e, t) { var r = e.match(br); if (r)
        for (var n = r[0].match(wr), o = 0; o < n.length; o++) {
            var i = n[o], a = i.length, s = i.substr(0, 1);
            if (";" == i.substr(a - 1, 1) && a--, '"' == s || "'" == s) {
                var u = i.substr(1, i.length - 3), l = u.substr(0, u.indexOf(" "));
                if (l) {
                    var c = u.substr(l.length + 1, u.length - l.length - 1);
                    "deps" === l && (l = "deps[]"), "[]" === l.substr(l.length - 2, 2) ? (l = l.substr(0, l.length - 2), t.load[l] = t.load[l] || [], t.load[l].push(c)) : "use" !== l && Qe(t.load, l, c);
                }
                else
                    t.load[u] = !0;
            }
        } }
    function et() { f.call(this), this._loader = {}, this[jt] = {}, this[St] = { baseURL: nt, paths: {}, packageConfigPaths: [], packageConfigKeys: [], map: {}, packages: {}, depCache: {}, meta: {}, bundles: {}, production: !1, transpiler: void 0, loadedBundles: {}, warnings: !1, pluginFirst: !1, wasm: !1 }, this.scriptSrc = dr, this._nodeRequire = er, this.registry.set("@empty", Ot), tt.call(this, !1, !1), Xt(this); }
    function tt(e, t) { this[St].production = e, this.registry.set("@system-env", Er = this.newModule({ browser: ot, node: !!this._nodeRequire, production: !t && e, dev: t || !e, build: t, default: !0 })); }
    function rt(e, t) { R.call(e[St], "SystemJS." + t + " is deprecated for SystemJS.registry." + t); }
    var nt, ot = "undefined" != typeof window && "undefined" != typeof document, it = "undefined" != typeof process && process.versions && process.versions.node, at = "undefined" != typeof process && "string" == typeof process.platform && process.platform.match(/^win/), st = "undefined" != typeof self ? self : global, ut = "undefined" != typeof Symbol;
    if ("undefined" != typeof document && document.getElementsByTagName) {
        if (!(nt = document.baseURI)) {
            var lt = document.getElementsByTagName("base");
            nt = lt[0] && lt[0].href || window.location.href;
        }
    }
    else
        "undefined" != typeof location && (nt = location.href);
    if (nt) {
        var ct = (nt = nt.split("#")[0].split("?")[0]).lastIndexOf("/");
        -1 !== ct && (nt = nt.substr(0, ct + 1));
    }
    else {
        if ("undefined" == typeof process || !process.cwd)
            throw new TypeError("No environment baseURI");
        nt = "file://" + (at ? "/" : "") + process.cwd(), at && (nt = nt.replace(/\\/g, "/"));
    }
    "/" !== nt[nt.length - 1] && (nt += "/");
    var ft = "_" == new Error(0, "_").fileName, dt = Promise.resolve();
    i.prototype.constructor = i, i.prototype.import = function (e, r) { if ("string" != typeof e)
        throw new TypeError("Loader import method must be passed a module key string"); var n = this; return dt.then(function () { return n[gt](e, r); }).then(a).catch(function (n) { throw t(n, "Loading " + e + (r ? " from " + r : "")); }); };
    var pt = i.resolve = e("resolve"), gt = i.resolveInstantiate = e("resolveInstantiate");
    i.prototype[gt] = function (e, t) { var r = this; return r.resolve(e, t).then(function (e) { return r.registry.get(e); }); }, i.prototype.resolve = function (e, r) { var n = this; return dt.then(function () { return n[pt](e, r); }).then(s).catch(function (n) { throw t(n, "Resolving " + e + (r ? " to " + r : "")); }); };
    var ht = "undefined" != typeof Symbol && Symbol.iterator, mt = e("registry");
    ht && (u.prototype[Symbol.iterator] = function () { return this.entries()[Symbol.iterator](); }, u.prototype.entries = function () { var e = this[mt]; return o(Object.keys(e).map(function (t) { return [t, e[t]]; })); }), u.prototype.keys = function () { return o(Object.keys(this[mt])); }, u.prototype.values = function () { var e = this[mt]; return o(Object.keys(e).map(function (t) { return e[t]; })); }, u.prototype.get = function (e) { return this[mt][e]; }, u.prototype.set = function (e, t) { if (!(t instanceof l))
        throw new Error("Registry must be set with an instance of Module Namespace"); return this[mt][e] = t, this; }, u.prototype.has = function (e) { return Object.hasOwnProperty.call(this[mt], e); }, u.prototype.delete = function (e) { return !!Object.hasOwnProperty.call(this[mt], e) && (delete this[mt][e], !0); };
    var vt = e("baseObject");
    l.prototype = Object.create(null), "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(l.prototype, Symbol.toStringTag, { value: "Module" });
    var yt = e("register-internal");
    f.prototype = Object.create(i.prototype), f.prototype.constructor = f;
    var bt = f.instantiate = e("instantiate");
    f.prototype[f.resolve = i.resolve] = function (e, t) { return n(e, t || nt); }, f.prototype[bt] = function (e, t) { }, f.prototype[i.resolveInstantiate] = function (e, t) { var r = this, n = this[yt], o = this.registry[mt]; return p(r, e, t, o, n).then(function (e) { if (e instanceof l)
        return e; var t = e.linkRecord; if (!t) {
        if (e.module)
            return e.module;
        throw e.evalError;
    } return w(r, e, t, o, n).then(function () { return k(r, e, t, o, n, void 0); }); }); }, f.prototype.register = function (e, t, r) { var n = this[yt]; void 0 === r ? n.lastRegister = [e, t, void 0] : (n.records[e] || d(n, e, void 0)).registration = [t, r, void 0]; }, f.prototype.registerDynamic = function (e, t, r, n) { var o = this[yt]; "string" != typeof e ? o.lastRegister = [e, t, r] : (o.records[e] || d(o, e, void 0)).registration = [t, r, n]; }, x.prototype.import = function (e) { return this.loader.trace && this.loader.loads[this.key].dynamicDeps.push(e), this.loader.import(e, this.key); };
    var wt = {};
    Object.freeze && Object.freeze(wt);
    var xt, kt, Et = Promise.resolve(), Ot = new l({}), St = e("loader-config"), jt = e("metadata"), _t = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts, Pt = !1, Mt = !1;
    if (ot && function () { var e = document.createElement("link").relList; if (e && e.supports) {
        Mt = !0;
        try {
            Pt = e.supports("preload");
        }
        catch (e) { }
    } }(), ot) {
        var Rt = [], Ct = window.onerror;
        window.onerror = function (e, t) { for (var r = 0; r < Rt.length; r++)
            if (Rt[r].src === t)
                return void Rt[r].err(e); Ct && Ct.apply(this, arguments); };
    }
    var Lt, At, It = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g, Ft = "undefined" != typeof XMLHttpRequest, Kt = At = "undefined" != typeof self && void 0 !== self.fetch ? J : Ft ? $ : "undefined" != typeof require && "undefined" != typeof process ? B : W, Dt = {}, Ut = ["browser", "node", "dev", "build", "production", "default"], qt = /#\{[^\}]+\}/, Tt = ["browserConfig", "nodeConfig", "devConfig", "buildConfig", "productionConfig"], zt = "undefined" != typeof Buffer;
    try {
        zt && "YQ==" !== new Buffer("a").toString("base64") && (zt = !1);
    }
    catch (e) {
        zt = !1;
    }
    var Nt, Jt, $t, Bt, Wt = "\n//# sourceMappingURL=data:application/json;base64,", Gt = 0, Ht = !1;
    ot && "undefined" != typeof document && document.getElementsByTagName && (window.chrome && window.chrome.extension || navigator.userAgent.match(/^Node\.js/) || (Ht = !0));
    var Zt, Xt = function (e) { function t(r, n, o, i) { if ("object" == typeof r && !(r instanceof Array))
        return t.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1)); if ("string" == typeof r && "function" == typeof n && (r = [r]), !(r instanceof Array)) {
        if ("string" == typeof r) {
            var a = e.decanonicalize(r, i), s = e.get(a);
            if (!s)
                throw new Error('Module not already loaded loading "' + r + '" as ' + a + (i ? ' from "' + i + '".' : "."));
            return "__useDefault" in s ? s.__useDefault : s;
        }
        throw new TypeError("Invalid require");
    } for (var u = [], l = 0; l < r.length; l++)
        u.push(e.import(r[l], i)); Promise.all(u).then(function (e) { n && n.apply(null, e); }, o); } function r(r, n, o) { function i(r, i, l) { for (var c = [], f = 0; f < n.length; f++)
        c.push(r(n[f])); if (l.uri = l.id, l.config = _, -1 !== u && c.splice(u, 0, l), -1 !== s && c.splice(s, 0, i), -1 !== a) {
        var d = function (n, o, i) { return "string" == typeof n && "function" != typeof o ? r(n) : t.call(e, n, o, i, l.id); };
        d.toUrl = function (t) { return e.normalizeSync(t, l.id); }, c.splice(a, 0, d);
    } var p = st.require; st.require = t; var g = o.apply(-1 === s ? st : i, c); st.require = p, void 0 !== g && (l.exports = g); } "string" != typeof r && (o = n, n = r, r = null), n instanceof Array || (o = n, n = ["require", "exports", "module"].splice(0, o.length)), "function" != typeof o && (o = function (e) { return function () { return e; }; }(o)), r || Vt && (n = n.concat(Vt), Vt = void 0); var a, s, u; -1 !== (a = n.indexOf("require")) && (n.splice(a, 1), r || (n = n.concat(Ue(o.toString(), a)))), -1 !== (s = n.indexOf("exports")) && n.splice(s, 1), -1 !== (u = n.indexOf("module")) && n.splice(u, 1), r ? (e.registerDynamic(r, n, !1, i), Qt ? (Qt = void 0, lr = !0) : lr || (Qt = [n, i])) : e.registerDynamic(n, !1, cr ? qe(i) : i); } e.set("@@cjs-helpers", e.newModule({ requireResolve: Le.bind(e), getPathVars: Ae })), e.set("@@global-helpers", e.newModule({ prepareGlobal: De })), r.amd = {}, e.amdDefine = r, e.amdRequire = t; };
    "undefined" != typeof window && "undefined" != typeof document && window.location && (Zt = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""));
    var Yt, Qt, Vt, er, tr = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, rr = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g, nr = ["_g", "sessionStorage", "localStorage", "clipboardData", "frames", "frameElement", "external", "mozAnimationStartTime", "webkitStorageInfo", "webkitIndexedDB", "mozInnerScreenY", "mozInnerScreenX"], or = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])", ir = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)", ar = /\(([^\)]*)\)/, sr = /^\s+|\s+$/g, ur = {}, lr = !1, cr = !1, fr = (ot || _t) && "undefined" != typeof navigator && navigator.userAgent && !navigator.userAgent.match(/MSIE (9|10).0/);
    "undefined" == typeof require || "undefined" == typeof process || process.browser || (er = require);
    var dr, pr = "undefined" != typeof self ? "self" : "global", gr = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?(?!type)([^"'\(\)\n; ]+)\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/, hr = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/, mr = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/, vr = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/, yr = /^\#\!.*/, br = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/, wr = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;
    if ("undefined" == typeof Promise)
        throw new Error("SystemJS needs a Promise polyfill.");
    if ("undefined" != typeof document) {
        var xr = document.getElementsByTagName("script"), kr = xr[xr.length - 1];
        document.currentScript && (kr.defer || kr.async) && (kr = document.currentScript), dr = kr && kr.src;
    }
    else if ("undefined" != typeof importScripts)
        try {
            throw new Error("_");
        }
        catch (e) {
            e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function (e, t) { dr = t; });
        }
    else
        "undefined" != typeof __filename && (dr = __filename);
    var Er;
    et.prototype = Object.create(f.prototype), et.prototype.constructor = et, et.prototype[et.resolve = f.resolve] = et.prototype.normalize = Z, et.prototype.load = function (e, t) { return R.call(this[St], "System.load is deprecated."), this.import(e, t); }, et.prototype.decanonicalize = et.prototype.normalizeSync = et.prototype.resolveSync = Y, et.prototype[et.instantiate = f.instantiate] = Je, et.prototype.config = ke, et.prototype.getConfig = xe, et.prototype.global = st, et.prototype.import = function () { return f.prototype.import.apply(this, arguments).then(function (e) { return "__useDefault" in e ? e.__useDefault : e; }); };
    for (var Or = ["baseURL", "map", "paths", "packages", "packageConfigPaths", "depCache", "meta", "bundles", "transpiler", "warnings", "pluginFirst", "production", "wasm"], Sr = "undefined" != typeof Proxy, jr = 0; jr < Or.length; jr++)
        !function (e) { Object.defineProperty(et.prototype, e, { get: function () { var t = we(this[St], e); return Sr && "object" == typeof t && (t = new Proxy(t, { set: function (t, r) { throw new Error("Cannot set SystemJS." + e + '["' + r + '"] directly. Use SystemJS.config({ ' + e + ': { "' + r + '": ... } }) rather.'); } })), t; }, set: function (t) { throw new Error("Setting `SystemJS." + e + "` directly is no longer supported. Use `SystemJS.config({ " + e + ": ... })`."); } }); }(Or[jr]);
    et.prototype.delete = function (e) { return rt(this, "delete"), this.registry.delete(e); }, et.prototype.get = function (e) { return rt(this, "get"), this.registry.get(e); }, et.prototype.has = function (e) { return rt(this, "has"), this.registry.has(e); }, et.prototype.set = function (e, t) { return rt(this, "set"), this.registry.set(e, t); }, et.prototype.newModule = function (e) { return new l(e); }, et.prototype.isModule = M, et.prototype.register = function (e, t, r) { return "string" == typeof e && (e = X.call(this, this[St], e)), f.prototype.register.call(this, e, t, r); }, et.prototype.registerDynamic = function (e, t, r, n) { return "string" == typeof e && (e = X.call(this, this[St], e)), f.prototype.registerDynamic.call(this, e, t, r, n); }, et.prototype.version = "0.20.18 Dev";
    var _r = new et;
    (ot || _t) && (st.SystemJS = st.System = _r), "undefined" != typeof module && module.exports && (module.exports = _r);
}();
//# sourceMappingURL=system.js.map