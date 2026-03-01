(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function t(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const Ks = "183", qp = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Yp = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, gl = 0, Ma = 1, xl = 2, sr = 1, vl = 2, Mi = 3, Tn = 0, wt = 1, on = 2, cn = 0, ii = 1, Sa = 2, Ea = 3, ya = 4, Ml = 5, Un = 100, Sl = 101, El = 102, yl = 103, Tl = 104, bl = 200, Al = 201, wl = 202, Rl = 203, is = 204, rs = 205, Cl = 206, Pl = 207, Dl = 208, Ll = 209, Il = 210, Ul = 211, Nl = 212, Fl = 213, Ol = 214, ss = 0, as = 1, os = 2, si = 3, ls = 4, cs = 5, us = 6, hs = 7, So = 0, Bl = 1, zl = 2, Yt = 0, Eo = 1, yo = 2, To = 3, bo = 4, Ao = 5, wo = 6, Ro = 7, Co = 300, Bn = 301, ai = 302, Er = 303, yr = 304, pr = 306, fs = 1e3, ln = 1001, ds = 1002, xt = 1003, Vl = 1004, Ii = 1005, Et = 1006, Tr = 1007, Fn = 1008, Dt = 1009, Po = 1010, Do = 1011, Ti = 1012, $s = 1013, $t = 1014, Xt = 1015, hn = 1016, js = 1017, Js = 1018, bi = 1020, Lo = 35902, Io = 35899, Uo = 1021, No = 1022, Vt = 1023, fn = 1026, On = 1027, Fo = 1028, Qs = 1029, oi = 1030, ea = 1031, ta = 1033, ar = 33776, or = 33777, lr = 33778, cr = 33779, ps = 35840, ms = 35841, _s = 35842, gs = 35843, xs = 36196, vs = 37492, Ms = 37496, Ss = 37488, Es = 37489, ys = 37490, Ts = 37491, bs = 37808, As = 37809, ws = 37810, Rs = 37811, Cs = 37812, Ps = 37813, Ds = 37814, Ls = 37815, Is = 37816, Us = 37817, Ns = 37818, Fs = 37819, Os = 37820, Bs = 37821, zs = 36492, Vs = 36494, Gs = 36495, Hs = 36283, ks = 36284, Ws = 36285, Xs = 36286, Gl = 3200, Oo = 0, Hl = 1, En = "", It = "srgb", li = "srgb-linear", hr = "linear", Ze = "srgb", Hn = 7680, Ta = 519, kl = 512, Wl = 513, Xl = 514, na = 515, ql = 516, Yl = 517, ia = 518, Zl = 519, ba = 35044, Aa = "300 es", qt = 2e3, Ai = 2001;
function Kl(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return true;
  return false;
}
function fr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function $l() {
  const i = fr("canvas");
  return i.style.display = "block", i;
}
const wa = {};
function Ra(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Bo(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function we(...i) {
  i = Bo(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function We(...i) {
  i = Bo(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function dr(...i) {
  const e = i.join(" ");
  e in wa || (wa[e] = true, we(...i));
}
function jl(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const Jl = { [ss]: as, [os]: us, [ls]: hs, [si]: cs, [as]: ss, [us]: os, [hs]: ls, [cs]: si };
class zn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? false : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const Mt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ca = 1234567;
const Ei = Math.PI / 180, wi = 180 / Math.PI;
function ui() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Mt[i & 255] + Mt[i >> 8 & 255] + Mt[i >> 16 & 255] + Mt[i >> 24 & 255] + "-" + Mt[e & 255] + Mt[e >> 8 & 255] + "-" + Mt[e >> 16 & 15 | 64] + Mt[e >> 24 & 255] + "-" + Mt[t & 63 | 128] + Mt[t >> 8 & 255] + "-" + Mt[t >> 16 & 255] + Mt[t >> 24 & 255] + Mt[n & 255] + Mt[n >> 8 & 255] + Mt[n >> 16 & 255] + Mt[n >> 24 & 255]).toLowerCase();
}
function Ne(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ra(i, e) {
  return (i % e + e) % e;
}
function Ql(i, e, t, n, r) {
  return n + (i - e) * (r - n) / (t - e);
}
function ec(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function yi(i, e, t) {
  return (1 - t) * i + t * e;
}
function tc(i, e, t, n) {
  return yi(i, e, 1 - Math.exp(-t * n));
}
function nc(i, e = 1) {
  return e - Math.abs(ra(i, e * 2) - e);
}
function ic(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function rc(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function sc(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function ac(i, e) {
  return i + Math.random() * (e - i);
}
function oc(i) {
  return i * (0.5 - Math.random());
}
function lc(i) {
  i !== void 0 && (Ca = i);
  let e = Ca += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function cc(i) {
  return i * Ei;
}
function uc(i) {
  return i * wi;
}
function hc(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function fc(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function dc(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function pc(i, e, t, n, r) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), f = a((e + n) / 2), m = s((e - n) / 2), u = a((e - n) / 2), d = s((n - e) / 2), g = a((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(o * f, c * m, c * u, o * l);
      break;
    case "YZY":
      i.set(c * u, o * f, c * m, o * l);
      break;
    case "ZXZ":
      i.set(c * m, c * u, o * f, o * l);
      break;
    case "XZX":
      i.set(o * f, c * g, c * d, o * l);
      break;
    case "YXY":
      i.set(c * d, o * f, c * g, o * l);
      break;
    case "ZYZ":
      i.set(c * g, c * d, o * f, o * l);
      break;
    default:
      we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function ni(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function yt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Zp = { DEG2RAD: Ei, RAD2DEG: wi, generateUUID: ui, clamp: Ne, euclideanModulo: ra, mapLinear: Ql, inverseLerp: ec, lerp: yi, damp: tc, pingpong: nc, smoothstep: ic, smootherstep: rc, randInt: sc, randFloat: ac, randFloatSpread: oc, seededRandom: lc, degToRad: cc, radToDeg: uc, isPowerOfTwo: hc, ceilPowerOfTwo: fc, floorPowerOfTwo: dc, setQuaternionFromProperEuler: pc, normalize: yt, denormalize: ni };
class ze {
  constructor(e = 0, t = 0) {
    ze.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ne(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class hi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let c = n[r + 0], l = n[r + 1], f = n[r + 2], m = n[r + 3], u = s[a + 0], d = s[a + 1], g = s[a + 2], E = s[a + 3];
    if (m !== E || c !== u || l !== d || f !== g) {
      let p = c * u + l * d + f * g + m * E;
      p < 0 && (u = -u, d = -d, g = -g, E = -E, p = -p);
      let h = 1 - o;
      if (p < 0.9995) {
        const M = Math.acos(p), T = Math.sin(M);
        h = Math.sin(h * M) / T, o = Math.sin(o * M) / T, c = c * h + u * o, l = l * h + d * o, f = f * h + g * o, m = m * h + E * o;
      } else {
        c = c * h + u * o, l = l * h + d * o, f = f * h + g * o, m = m * h + E * o;
        const M = 1 / Math.sqrt(c * c + l * l + f * f + m * m);
        c *= M, l *= M, f *= M, m *= M;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = f, e[t + 3] = m;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], c = n[r + 1], l = n[r + 2], f = n[r + 3], m = s[a], u = s[a + 1], d = s[a + 2], g = s[a + 3];
    return e[t] = o * g + f * m + c * d - l * u, e[t + 1] = c * g + f * u + l * m - o * d, e[t + 2] = l * g + f * d + o * u - c * m, e[t + 3] = f * g - o * m - c * u - l * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), f = o(r / 2), m = o(s / 2), u = c(n / 2), d = c(r / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * f * m + l * d * g, this._y = l * d * m - u * f * g, this._z = l * f * g + u * d * m, this._w = l * f * m - u * d * g;
        break;
      case "YXZ":
        this._x = u * f * m + l * d * g, this._y = l * d * m - u * f * g, this._z = l * f * g - u * d * m, this._w = l * f * m + u * d * g;
        break;
      case "ZXY":
        this._x = u * f * m - l * d * g, this._y = l * d * m + u * f * g, this._z = l * f * g + u * d * m, this._w = l * f * m - u * d * g;
        break;
      case "ZYX":
        this._x = u * f * m - l * d * g, this._y = l * d * m + u * f * g, this._z = l * f * g - u * d * m, this._w = l * f * m + u * d * g;
        break;
      case "YZX":
        this._x = u * f * m + l * d * g, this._y = l * d * m + u * f * g, this._z = l * f * g - u * d * m, this._w = l * f * m - u * d * g;
        break;
      case "XZY":
        this._x = u * f * m - l * d * g, this._y = l * d * m - u * f * g, this._z = l * f * g + u * d * m, this._w = l * f * m + u * d * g;
        break;
      default:
        we("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], f = t[6], m = t[10], u = n + o + m;
    if (u > 0) {
      const d = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / d, this._x = (f - c) * d, this._y = (s - l) * d, this._z = (a - r) * d;
    } else if (n > o && n > m) {
      const d = 2 * Math.sqrt(1 + n - o - m);
      this._w = (f - c) / d, this._x = 0.25 * d, this._y = (r + a) / d, this._z = (s + l) / d;
    } else if (o > m) {
      const d = 2 * Math.sqrt(1 + o - n - m);
      this._w = (s - l) / d, this._x = (r + a) / d, this._y = 0.25 * d, this._z = (c + f) / d;
    } else {
      const d = 2 * Math.sqrt(1 + m - n - o);
      this._w = (a - r) / d, this._x = (s + l) / d, this._y = (c + f) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ne(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, f = t._w;
    return this._x = n * f + a * o + r * l - s * c, this._y = r * f + a * c + s * o - n * l, this._z = s * f + a * l + n * c - r * o, this._w = a * f - n * o - r * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    let n = e._x, r = e._y, s = e._z, a = e._w, o = this.dot(e);
    o < 0 && (n = -n, r = -r, s = -s, a = -a, o = -o);
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o), f = Math.sin(l);
      c = Math.sin(c * l) / f, t = Math.sin(t * l) / f, this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this._onChangeCallback();
    } else this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(e = 0, t = 0, n = 0) {
    I.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Pa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Pa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * n), f = 2 * (o * t - s * r), m = 2 * (s * n - a * t);
    return this.x = t + c * l + a * m - o * f, this.y = n + c * f + o * l - s * m, this.z = r + c * m + s * f - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this.z = Ne(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this.z = Ne(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return br.copy(this).projectOnVector(e), this.sub(br);
  }
  reflect(e) {
    return this.sub(br.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ne(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const br = new I(), Pa = new hi();
class Le {
  constructor(e, t, n, r, s, a, o, c, l) {
    Le.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l);
  }
  set(e, t, n, r, s, a, o, c, l) {
    const f = this.elements;
    return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = s, f[5] = c, f[6] = n, f[7] = a, f[8] = l, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], f = n[4], m = n[7], u = n[2], d = n[5], g = n[8], E = r[0], p = r[3], h = r[6], M = r[1], T = r[4], S = r[7], w = r[2], A = r[5], C = r[8];
    return s[0] = a * E + o * M + c * w, s[3] = a * p + o * T + c * A, s[6] = a * h + o * S + c * C, s[1] = l * E + f * M + m * w, s[4] = l * p + f * T + m * A, s[7] = l * h + f * S + m * C, s[2] = u * E + d * M + g * w, s[5] = u * p + d * T + g * A, s[8] = u * h + d * S + g * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8];
    return t * a * f - t * o * l - n * s * f + n * o * c + r * s * l - r * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], m = f * a - o * l, u = o * c - f * s, d = l * s - a * c, g = t * m + n * u + r * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / g;
    return e[0] = m * E, e[1] = (r * l - f * n) * E, e[2] = (o * n - r * a) * E, e[3] = u * E, e[4] = (f * t - r * c) * E, e[5] = (r * s - o * t) * E, e[6] = d * E, e[7] = (n * c - l * t) * E, e[8] = (a * t - n * s) * E, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(n * c, n * l, -n * (c * a + l * o) + a + e, -r * l, r * c, -r * (-l * a + c * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Ar.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Ar.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Ar.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ar = new Le(), Da = new Le().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), La = new Le().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function mc() {
  const i = { enabled: true, workingColorSpace: li, spaces: {}, convert: function(r, s, a) {
    return this.enabled === false || s === a || !s || !a || (this.spaces[s].transfer === Ze && (r.r = un(r.r), r.g = un(r.g), r.b = un(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ze && (r.r = ri(r.r), r.g = ri(r.g), r.b = ri(r.b))), r;
  }, workingToColorSpace: function(r, s) {
    return this.convert(r, this.workingColorSpace, s);
  }, colorSpaceToWorking: function(r, s) {
    return this.convert(r, s, this.workingColorSpace);
  }, getPrimaries: function(r) {
    return this.spaces[r].primaries;
  }, getTransfer: function(r) {
    return r === En ? hr : this.spaces[r].transfer;
  }, getToneMappingMode: function(r) {
    return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
    return r.fromArray(this.spaces[s].luminanceCoefficients);
  }, define: function(r) {
    Object.assign(this.spaces, r);
  }, _getMatrix: function(r, s, a) {
    return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(r) {
    return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(r = this.workingColorSpace) {
    return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(r, s) {
    return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
  }, toWorkingColorSpace: function(r, s) {
    return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({ [li]: { primaries: e, whitePoint: n, transfer: hr, toXYZ: Da, fromXYZ: La, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: It }, outputColorSpaceConfig: { drawingBufferColorSpace: It } }, [It]: { primaries: e, whitePoint: n, transfer: Ze, toXYZ: Da, fromXYZ: La, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: It } } }), i;
}
const He = mc();
function un(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ri(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let kn;
class _c {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      kn === void 0 && (kn = fr("canvas")), kn.width = e.width, kn.height = e.height;
      const r = kn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = kn;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = fr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = un(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(un(t[n] / 255) * 255) : t[n] = un(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let gc = 0;
class sa {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: gc++ }), this.uuid = ui(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? s.push(wr(r[a].image)) : s.push(wr(r[a]));
      } else s = wr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function wr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? _c.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (we("Texture: Unable to serialize Texture."), {});
}
let xc = 0;
const Rr = new I();
class bt extends zn {
  constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, n = ln, r = ln, s = Et, a = Fn, o = Vt, c = Dt, l = bt.DEFAULT_ANISOTROPY, f = En) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: xc++ }), this.uuid = ui(), this.name = "", this.source = new sa(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new ze(0, 0), this.repeat = new ze(1, 1), this.center = new ze(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Le(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = f, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Rr).x;
  }
  get height() {
    return this.source.getSize(Rr).y;
  }
  get depth() {
    return this.source.getSize(Rr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        we(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        we(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Co) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case fs:
        e.x = e.x - Math.floor(e.x);
        break;
      case ln:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case ds:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case fs:
        e.y = e.y - Math.floor(e.y);
        break;
      case ln:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case ds:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = Co;
bt.DEFAULT_ANISOTROPY = 1;
class at {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    at.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements, l = c[0], f = c[4], m = c[8], u = c[1], d = c[5], g = c[9], E = c[2], p = c[6], h = c[10];
    if (Math.abs(f - u) < 0.01 && Math.abs(m - E) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(f + u) < 0.1 && Math.abs(m + E) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + d + h - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (l + 1) / 2, S = (d + 1) / 2, w = (h + 1) / 2, A = (f + u) / 4, C = (m + E) / 4, x = (g + p) / 4;
      return T > S && T > w ? T < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), r = A / n, s = C / n) : S > w ? S < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(S), n = A / r, s = x / r) : w < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(w), n = C / s, r = x / s), this.set(n, r, s, t), this;
    }
    let M = Math.sqrt((p - g) * (p - g) + (m - E) * (m - E) + (u - f) * (u - f));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (p - g) / M, this.y = (m - E) / M, this.z = (u - f) / M, this.w = Math.acos((l + d + h - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this.z = Ne(this.z, e.z, t.z), this.w = Ne(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this.z = Ne(this.z, e, t), this.w = Ne(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class vc extends zn {
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Et, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new at(0, 0, e, t), this.scissorTest = false, this.viewport = new at(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new bt(r), a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: Et, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== true && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new sa(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Zt extends vc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class zo extends bt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = xt, this.minFilter = xt, this.wrapR = ln, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Mc extends bt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = xt, this.minFilter = xt, this.wrapR = ln, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class it {
  constructor(e, t, n, r, s, a, o, c, l, f, m, u, d, g, E, p) {
    it.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, f, m, u, d, g, E, p);
  }
  set(e, t, n, r, s, a, o, c, l, f, m, u, d, g, E, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = f, h[10] = m, h[14] = u, h[3] = d, h[7] = g, h[11] = E, h[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new it().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    if (e.determinant() === 0) return this.identity();
    const t = this.elements, n = e.elements, r = 1 / Wn.setFromMatrixColumn(e, 0).length(), s = 1 / Wn.setFromMatrixColumn(e, 1).length(), a = 1 / Wn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), f = Math.cos(s), m = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * f, d = a * m, g = o * f, E = o * m;
      t[0] = c * f, t[4] = -c * m, t[8] = l, t[1] = d + g * l, t[5] = u - E * l, t[9] = -o * c, t[2] = E - u * l, t[6] = g + d * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const u = c * f, d = c * m, g = l * f, E = l * m;
      t[0] = u + E * o, t[4] = g * o - d, t[8] = a * l, t[1] = a * m, t[5] = a * f, t[9] = -o, t[2] = d * o - g, t[6] = E + u * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const u = c * f, d = c * m, g = l * f, E = l * m;
      t[0] = u - E * o, t[4] = -a * m, t[8] = g + d * o, t[1] = d + g * o, t[5] = a * f, t[9] = E - u * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const u = a * f, d = a * m, g = o * f, E = o * m;
      t[0] = c * f, t[4] = g * l - d, t[8] = u * l + E, t[1] = c * m, t[5] = E * l + u, t[9] = d * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const u = a * c, d = a * l, g = o * c, E = o * l;
      t[0] = c * f, t[4] = E - u * m, t[8] = g * m + d, t[1] = m, t[5] = a * f, t[9] = -o * f, t[2] = -l * f, t[6] = d * m + g, t[10] = u - E * m;
    } else if (e.order === "XZY") {
      const u = a * c, d = a * l, g = o * c, E = o * l;
      t[0] = c * f, t[4] = -m, t[8] = l * f, t[1] = u * m + E, t[5] = a * f, t[9] = d * m - g, t[2] = g * m - d, t[6] = o * f, t[10] = E * m + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Sc, e, Ec);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Ct.subVectors(e, t), Ct.lengthSq() === 0 && (Ct.z = 1), Ct.normalize(), _n.crossVectors(n, Ct), _n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4, Ct.normalize(), _n.crossVectors(n, Ct)), _n.normalize(), Ui.crossVectors(Ct, _n), r[0] = _n.x, r[4] = Ui.x, r[8] = Ct.x, r[1] = _n.y, r[5] = Ui.y, r[9] = Ct.y, r[2] = _n.z, r[6] = Ui.z, r[10] = Ct.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], f = n[1], m = n[5], u = n[9], d = n[13], g = n[2], E = n[6], p = n[10], h = n[14], M = n[3], T = n[7], S = n[11], w = n[15], A = r[0], C = r[4], x = r[8], y = r[12], O = r[1], R = r[5], N = r[9], B = r[13], k = r[2], G = r[6], V = r[10], H = r[14], Q = r[3], $ = r[7], ce = r[11], pe = r[15];
    return s[0] = a * A + o * O + c * k + l * Q, s[4] = a * C + o * R + c * G + l * $, s[8] = a * x + o * N + c * V + l * ce, s[12] = a * y + o * B + c * H + l * pe, s[1] = f * A + m * O + u * k + d * Q, s[5] = f * C + m * R + u * G + d * $, s[9] = f * x + m * N + u * V + d * ce, s[13] = f * y + m * B + u * H + d * pe, s[2] = g * A + E * O + p * k + h * Q, s[6] = g * C + E * R + p * G + h * $, s[10] = g * x + E * N + p * V + h * ce, s[14] = g * y + E * B + p * H + h * pe, s[3] = M * A + T * O + S * k + w * Q, s[7] = M * C + T * R + S * G + w * $, s[11] = M * x + T * N + S * V + w * ce, s[15] = M * y + T * B + S * H + w * pe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], f = e[2], m = e[6], u = e[10], d = e[14], g = e[3], E = e[7], p = e[11], h = e[15], M = c * d - l * u, T = o * d - l * m, S = o * u - c * m, w = a * d - l * f, A = a * u - c * f, C = a * m - o * f;
    return t * (E * M - p * T + h * S) - n * (g * M - p * w + h * A) + r * (g * T - E * w + h * C) - s * (g * S - E * A + p * C);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], m = e[9], u = e[10], d = e[11], g = e[12], E = e[13], p = e[14], h = e[15], M = t * o - n * a, T = t * c - r * a, S = t * l - s * a, w = n * c - r * o, A = n * l - s * o, C = r * l - s * c, x = f * E - m * g, y = f * p - u * g, O = f * h - d * g, R = m * p - u * E, N = m * h - d * E, B = u * h - d * p, k = M * B - T * N + S * R + w * O - A * y + C * x;
    if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const G = 1 / k;
    return e[0] = (o * B - c * N + l * R) * G, e[1] = (r * N - n * B - s * R) * G, e[2] = (E * C - p * A + h * w) * G, e[3] = (u * A - m * C - d * w) * G, e[4] = (c * O - a * B - l * y) * G, e[5] = (t * B - r * O + s * y) * G, e[6] = (p * S - g * C - h * T) * G, e[7] = (f * C - u * S + d * T) * G, e[8] = (a * N - o * O + l * x) * G, e[9] = (n * O - t * N - s * x) * G, e[10] = (g * A - E * S + h * M) * G, e[11] = (m * S - f * A - d * M) * G, e[12] = (o * y - a * R - c * x) * G, e[13] = (t * R - n * y + r * x) * G, e[14] = (E * T - g * w - p * M) * G, e[15] = (f * w - m * T + u * M) * G, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, f = s * o;
    return this.set(l * a + n, l * o - r * c, l * c + r * o, 0, l * o + r * c, f * o + n, f * c - r * a, 0, l * c - r * o, f * c + r * a, s * c * c + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, f = a + a, m = o + o, u = s * l, d = s * f, g = s * m, E = a * f, p = a * m, h = o * m, M = c * l, T = c * f, S = c * m, w = n.x, A = n.y, C = n.z;
    return r[0] = (1 - (E + h)) * w, r[1] = (d + S) * w, r[2] = (g - T) * w, r[3] = 0, r[4] = (d - S) * A, r[5] = (1 - (u + h)) * A, r[6] = (p + M) * A, r[7] = 0, r[8] = (g + T) * C, r[9] = (p - M) * C, r[10] = (1 - (u + E)) * C, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    e.x = r[12], e.y = r[13], e.z = r[14];
    const s = this.determinant();
    if (s === 0) return n.set(1, 1, 1), t.identity(), this;
    let a = Wn.set(r[0], r[1], r[2]).length();
    const o = Wn.set(r[4], r[5], r[6]).length(), c = Wn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Ft.copy(this);
    const l = 1 / a, f = 1 / o, m = 1 / c;
    return Ft.elements[0] *= l, Ft.elements[1] *= l, Ft.elements[2] *= l, Ft.elements[4] *= f, Ft.elements[5] *= f, Ft.elements[6] *= f, Ft.elements[8] *= m, Ft.elements[9] *= m, Ft.elements[10] *= m, t.setFromRotationMatrix(Ft), n.x = a, n.y = o, n.z = c, this;
  }
  makePerspective(e, t, n, r, s, a, o = qt, c = false) {
    const l = this.elements, f = 2 * s / (t - e), m = 2 * s / (n - r), u = (t + e) / (t - e), d = (n + r) / (n - r);
    let g, E;
    if (c) g = s / (a - s), E = a * s / (a - s);
    else if (o === qt) g = -(a + s) / (a - s), E = -2 * a * s / (a - s);
    else if (o === Ai) g = -a / (a - s), E = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = m, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = E, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = qt, c = false) {
    const l = this.elements, f = 2 / (t - e), m = 2 / (n - r), u = -(t + e) / (t - e), d = -(n + r) / (n - r);
    let g, E;
    if (c) g = 1 / (a - s), E = a / (a - s);
    else if (o === qt) g = -2 / (a - s), E = -(a + s) / (a - s);
    else if (o === Ai) g = -1 / (a - s), E = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = m, l[9] = 0, l[13] = d, l[2] = 0, l[6] = 0, l[10] = g, l[14] = E, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Wn = new I(), Ft = new it(), Sc = new I(0, 0, 0), Ec = new I(1, 1, 1), _n = new I(), Ui = new I(), Ct = new I(), Ia = new it(), Ua = new hi();
class jt {
  constructor(e = 0, t = 0, n = 0, r = jt.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], f = r[9], m = r[2], u = r[6], d = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ne(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-f, d), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ne(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-m, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ne(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-m, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ne(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ne(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-f, l), this._y = Math.atan2(-m, s)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-Ne(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-f, d), this._y = 0);
        break;
      default:
        we("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ia.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ia, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ua.setFromEuler(this), this.setFromQuaternion(Ua, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
jt.DEFAULT_ORDER = "XYZ";
class Vo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let yc = 0;
const Na = new I(), Xn = new hi(), tn = new it(), Ni = new I(), pi = new I(), Tc = new I(), bc = new hi(), Fa = new I(1, 0, 0), Oa = new I(0, 1, 0), Ba = new I(0, 0, 1), za = { type: "added" }, Ac = { type: "removed" }, qn = { type: "childadded", child: null }, Cr = { type: "childremoved", child: null };
class _t extends zn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: yc++ }), this.uuid = ui(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _t.DEFAULT_UP.clone();
    const e = new I(), t = new jt(), n = new hi(), r = new I(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: r }, modelViewMatrix: { value: new it() }, normalMatrix: { value: new Le() } }), this.matrix = new it(), this.matrixWorld = new it(), this.matrixAutoUpdate = _t.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Vo(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.multiply(Xn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.premultiply(Xn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Fa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Oa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ba, e);
  }
  translateOnAxis(e, t) {
    return Na.copy(e).applyQuaternion(this.quaternion), this.position.add(Na.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Fa, e);
  }
  translateY(e) {
    return this.translateOnAxis(Oa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ba, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(tn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ni.copy(e) : Ni.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(true, false), pi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? tn.lookAt(pi, Ni, this.up) : tn.lookAt(Ni, pi, this.up), this.quaternion.setFromRotationMatrix(tn), r && (tn.extractRotation(r.matrixWorld), Xn.setFromRotationMatrix(tn), this.quaternion.premultiply(Xn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (We("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(za), qn.child = e, this.dispatchEvent(qn), qn.child = null) : We("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ac), Cr.child = e, this.dispatchEvent(Cr), Cr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(tn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(za), qn.child = e, this.dispatchEvent(qn), qn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(pi, e, Tc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(pi, bc, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x, n = e.y, r = e.z, s = this.matrix.elements;
      s[12] += t - s[0] * t - s[4] * n - s[8] * r, s[13] += n - s[1] * t - s[5] * n - s[9] * r, s[14] += r - s[2] * t - s[6] * n - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === true && (r.castShadow = true), this.receiveShadow === true && (r.receiveShadow = true), this.visible === false && (r.visible = false), this.frustumCulled === false && (r.frustumCulled = false), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== false && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === false && (r.matrixAutoUpdate = false), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c)) for (let l = 0, f = c.length; l < f; l++) {
          const m = c[l];
          s(e.shapes, m);
        }
        else s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let c = 0, l = this.material.length; c < l; c++) o.push(s(e.materials, this.material[c]));
      r.material = o;
    } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), f = a(e.images), m = a(e.shapes), u = a(e.skeletons), d = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), f.length > 0 && (n.images = f), m.length > 0 && (n.shapes = m), u.length > 0 && (n.skeletons = u), d.length > 0 && (n.animations = d), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const f = o[l];
        delete f.metadata, c.push(f);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), e.pivot !== null && (this.pivot = e.pivot.clone()), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const r = e.children[n];
      this.add(r.clone());
    }
    return this;
  }
}
_t.DEFAULT_UP = new I(0, 1, 0);
_t.DEFAULT_MATRIX_AUTO_UPDATE = true;
_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
class Fi extends _t {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const wc = { type: "move" };
class Pr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Fi(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Fi(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Fi(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new I()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = true;
        for (const E of e.hand.values()) {
          const p = t.getJointPose(E, n), h = this._getHandJoint(l, E);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = true, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const f = l.joints["index-finger-tip"], m = l.joints["thumb-tip"], u = f.position.distanceTo(m.position), d = 0.02, g = 5e-3;
        l.inputState.pinching && u > d + g ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && u <= d - g && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = true, s.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = false, s.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = false));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(wc)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Fi();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Go = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, gn = { h: 0, s: 0, l: 0 }, Oi = { h: 0, s: 0, l: 0 };
function Dr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ve {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = It) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, He.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, n, r = He.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, He.colorSpaceToWorking(this, r), this;
  }
  setHSL(e, t, n, r = He.workingColorSpace) {
    if (e = ra(e, 1), t = Ne(t, 0, 1), n = Ne(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Dr(a, s, e + 1 / 3), this.g = Dr(a, s, e), this.b = Dr(a, s, e - 1 / 3);
    }
    return He.colorSpaceToWorking(this, r), this;
  }
  setStyle(e, t = It) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && we("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          we("Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      we("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = It) {
    const n = Go[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : we("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = un(e.r), this.g = un(e.g), this.b = un(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ri(e.r), this.g = ri(e.g), this.b = ri(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = It) {
    return He.workingToColorSpace(St.copy(this), e), Math.round(Ne(St.r * 255, 0, 255)) * 65536 + Math.round(Ne(St.g * 255, 0, 255)) * 256 + Math.round(Ne(St.b * 255, 0, 255));
  }
  getHexString(e = It) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = He.workingColorSpace) {
    He.workingToColorSpace(St.copy(this), t);
    const n = St.r, r = St.g, s = St.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const f = (o + a) / 2;
    if (o === a) c = 0, l = 0;
    else {
      const m = a - o;
      switch (l = f <= 0.5 ? m / (a + o) : m / (2 - a - o), a) {
        case n:
          c = (r - s) / m + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / m + 2;
          break;
        case s:
          c = (n - r) / m + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = f, e;
  }
  getRGB(e, t = He.workingColorSpace) {
    return He.workingToColorSpace(St.copy(this), t), e.r = St.r, e.g = St.g, e.b = St.b, e;
  }
  getStyle(e = It) {
    He.workingToColorSpace(St.copy(this), e);
    const t = St.r, n = St.g, r = St.b;
    return e !== It ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(gn), this.setHSL(gn.h + e, gn.s + t, gn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(gn), e.getHSL(Oi);
    const n = yi(gn.h, Oi.h, t), r = yi(gn.s, Oi.s, t), s = yi(gn.l, Oi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const St = new Ve();
Ve.NAMES = Go;
class Ho {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = true, this.name = "", this.color = new Ve(e), this.density = t;
  }
  clone() {
    return new Ho(this.color, this.density);
  }
  toJSON() {
    return { type: "FogExp2", name: this.name, color: this.color.getHex(), density: this.density };
  }
}
class Kp extends _t {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new jt(), this.environmentIntensity = 1, this.environmentRotation = new jt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const Ot = new I(), nn = new I(), Lr = new I(), rn = new I(), Yn = new I(), Zn = new I(), Va = new I(), Ir = new I(), Ur = new I(), Nr = new I(), Fr = new at(), Or = new at(), Br = new at();
class zt {
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ot.subVectors(e, t), r.cross(Ot);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Ot.subVectors(r, t), nn.subVectors(n, t), Lr.subVectors(e, t);
    const a = Ot.dot(Ot), o = Ot.dot(nn), c = Ot.dot(Lr), l = nn.dot(nn), f = nn.dot(Lr), m = a * l - o * o;
    if (m === 0) return s.set(0, 0, 0), null;
    const u = 1 / m, d = (l * c - o * f) * u, g = (a * f - o * c) * u;
    return s.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, rn) === null ? false : rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, c) {
    return this.getBarycoord(e, t, n, r, rn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, rn.x), c.addScaledVector(a, rn.y), c.addScaledVector(o, rn.z), c);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return Fr.setScalar(0), Or.setScalar(0), Br.setScalar(0), Fr.fromBufferAttribute(e, t), Or.fromBufferAttribute(e, n), Br.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Fr, s.x), a.addScaledVector(Or, s.y), a.addScaledVector(Br, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return Ot.subVectors(n, t), nn.subVectors(e, t), Ot.cross(nn).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ot.subVectors(this.c, this.b), nn.subVectors(this.a, this.b), Ot.cross(nn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return zt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return zt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return zt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Yn.subVectors(r, n), Zn.subVectors(s, n), Ir.subVectors(e, n);
    const c = Yn.dot(Ir), l = Zn.dot(Ir);
    if (c <= 0 && l <= 0) return t.copy(n);
    Ur.subVectors(e, r);
    const f = Yn.dot(Ur), m = Zn.dot(Ur);
    if (f >= 0 && m <= f) return t.copy(r);
    const u = c * m - f * l;
    if (u <= 0 && c >= 0 && f <= 0) return a = c / (c - f), t.copy(n).addScaledVector(Yn, a);
    Nr.subVectors(e, s);
    const d = Yn.dot(Nr), g = Zn.dot(Nr);
    if (g >= 0 && d <= g) return t.copy(s);
    const E = d * l - c * g;
    if (E <= 0 && l >= 0 && g <= 0) return o = l / (l - g), t.copy(n).addScaledVector(Zn, o);
    const p = f * g - d * m;
    if (p <= 0 && m - f >= 0 && d - g >= 0) return Va.subVectors(s, r), o = (m - f) / (m - f + (d - g)), t.copy(r).addScaledVector(Va, o);
    const h = 1 / (p + E + u);
    return a = E * h, o = u * h, t.copy(n).addScaledVector(Yn, a).addScaledVector(Zn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class Ci {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Bt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Bt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Bt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Bt) : Bt.fromBufferAttribute(s, a), Bt.applyMatrix4(e.matrixWorld), this.expandByPoint(Bt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Bi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Bi.copy(n.boundingBox)), Bi.applyMatrix4(e.matrixWorld), this.union(Bi);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Bt), Bt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(mi), zi.subVectors(this.max, mi), Kn.subVectors(e.a, mi), $n.subVectors(e.b, mi), jn.subVectors(e.c, mi), xn.subVectors($n, Kn), vn.subVectors(jn, $n), wn.subVectors(Kn, jn);
    let t = [0, -xn.z, xn.y, 0, -vn.z, vn.y, 0, -wn.z, wn.y, xn.z, 0, -xn.x, vn.z, 0, -vn.x, wn.z, 0, -wn.x, -xn.y, xn.x, 0, -vn.y, vn.x, 0, -wn.y, wn.x, 0];
    return !zr(t, Kn, $n, jn, zi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !zr(t, Kn, $n, jn, zi)) ? false : (Vi.crossVectors(xn, vn), t = [Vi.x, Vi.y, Vi.z], zr(t, Kn, $n, jn, zi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Bt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Bt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(sn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const sn = [new I(), new I(), new I(), new I(), new I(), new I(), new I(), new I()], Bt = new I(), Bi = new Ci(), Kn = new I(), $n = new I(), jn = new I(), xn = new I(), vn = new I(), wn = new I(), mi = new I(), zi = new I(), Vi = new I(), Rn = new I();
function zr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Rn.fromArray(i, s);
    const o = r.x * Math.abs(Rn.x) + r.y * Math.abs(Rn.y) + r.z * Math.abs(Rn.z), c = e.dot(Rn), l = t.dot(Rn), f = n.dot(Rn);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o) return false;
  }
  return true;
}
const ut = new I(), Gi = new ze();
let Rc = 0;
class Kt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Rc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ba, this.updateRanges = [], this.gpuType = Xt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++) this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Gi.fromBufferAttribute(this, t), Gi.applyMatrix3(e), this.setXY(t, Gi.x, Gi.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = ni(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = yt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array), r = yt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array), r = yt(r, this.array), s = yt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== ba && (e.usage = this.usage), e;
  }
}
class ko extends Kt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Wo extends Kt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class rt extends Kt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const Cc = new Ci(), _i = new I(), Vr = new I();
class mr {
  constructor(e = new I(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Cc.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++) r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    _i.subVectors(e, this.center);
    const t = _i.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(_i, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Vr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(_i.copy(e.center).add(Vr)), this.expandByPoint(_i.copy(e.center).sub(Vr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
let Pc = 0;
const Lt = new it(), Gr = new _t(), Jn = new I(), Pt = new Ci(), gi = new Ci(), mt = new I();
class At extends zn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Pc++ }), this.uuid = ui(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Kl(e) ? Wo : ko)(e, 1) : this.index = e, this;
  }
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Le().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Lt.makeRotationFromQuaternion(e), this.applyMatrix4(Lt), this;
  }
  rotateX(e) {
    return Lt.makeRotationX(e), this.applyMatrix4(Lt), this;
  }
  rotateY(e) {
    return Lt.makeRotationY(e), this.applyMatrix4(Lt), this;
  }
  rotateZ(e) {
    return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this;
  }
  translate(e, t, n) {
    return Lt.makeTranslation(e, t, n), this.applyMatrix4(Lt), this;
  }
  scale(e, t, n) {
    return Lt.makeScale(e, t, n), this.applyMatrix4(Lt), this;
  }
  lookAt(e) {
    return Gr.lookAt(e), Gr.updateMatrix(), this.applyMatrix4(Gr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Jn).negate(), this.translate(Jn.x, Jn.y, Jn.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new rt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ci());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new I(-1 / 0, -1 / 0, -1 / 0), new I(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, r = t.length; n < r; n++) {
        const s = t[n];
        Pt.setFromBufferAttribute(s), this.morphTargetsRelative ? (mt.addVectors(this.boundingBox.min, Pt.min), this.boundingBox.expandByPoint(mt), mt.addVectors(this.boundingBox.max, Pt.max), this.boundingBox.expandByPoint(mt)) : (this.boundingBox.expandByPoint(Pt.min), this.boundingBox.expandByPoint(Pt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new mr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Pt.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s];
        gi.setFromBufferAttribute(o), this.morphTargetsRelative ? (mt.addVectors(Pt.min, gi.min), Pt.expandByPoint(mt), mt.addVectors(Pt.max, gi.max), Pt.expandByPoint(mt)) : (Pt.expandByPoint(gi.min), Pt.expandByPoint(gi.max));
      }
      Pt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++) mt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(mt));
      if (t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s], c = this.morphTargetsRelative;
        for (let l = 0, f = o.count; l < f; l++) mt.fromBufferAttribute(o, l), c && (Jn.fromBufferAttribute(e, l), mt.add(Jn)), r = Math.max(r, n.distanceToSquared(mt));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Kt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let x = 0; x < n.count; x++) o[x] = new I(), c[x] = new I();
    const l = new I(), f = new I(), m = new I(), u = new ze(), d = new ze(), g = new ze(), E = new I(), p = new I();
    function h(x, y, O) {
      l.fromBufferAttribute(n, x), f.fromBufferAttribute(n, y), m.fromBufferAttribute(n, O), u.fromBufferAttribute(s, x), d.fromBufferAttribute(s, y), g.fromBufferAttribute(s, O), f.sub(l), m.sub(l), d.sub(u), g.sub(u);
      const R = 1 / (d.x * g.y - g.x * d.y);
      isFinite(R) && (E.copy(f).multiplyScalar(g.y).addScaledVector(m, -d.y).multiplyScalar(R), p.copy(m).multiplyScalar(d.x).addScaledVector(f, -g.x).multiplyScalar(R), o[x].add(E), o[y].add(E), o[O].add(E), c[x].add(p), c[y].add(p), c[O].add(p));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: e.count }]);
    for (let x = 0, y = M.length; x < y; ++x) {
      const O = M[x], R = O.start, N = O.count;
      for (let B = R, k = R + N; B < k; B += 3) h(e.getX(B + 0), e.getX(B + 1), e.getX(B + 2));
    }
    const T = new I(), S = new I(), w = new I(), A = new I();
    function C(x) {
      w.fromBufferAttribute(r, x), A.copy(w);
      const y = o[x];
      T.copy(y), T.sub(w.multiplyScalar(w.dot(y))).normalize(), S.crossVectors(A, y);
      const R = S.dot(c[x]) < 0 ? -1 : 1;
      a.setXYZW(x, T.x, T.y, T.z, R);
    }
    for (let x = 0, y = M.length; x < y; ++x) {
      const O = M[x], R = O.start, N = O.count;
      for (let B = R, k = R + N; B < k; B += 3) C(e.getX(B + 0)), C(e.getX(B + 1)), C(e.getX(B + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Kt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let u = 0, d = n.count; u < d; u++) n.setXYZ(u, 0, 0, 0);
      const r = new I(), s = new I(), a = new I(), o = new I(), c = new I(), l = new I(), f = new I(), m = new I();
      if (e) for (let u = 0, d = e.count; u < d; u += 3) {
        const g = e.getX(u + 0), E = e.getX(u + 1), p = e.getX(u + 2);
        r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, E), a.fromBufferAttribute(t, p), f.subVectors(a, s), m.subVectors(r, s), f.cross(m), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, E), l.fromBufferAttribute(n, p), o.add(f), c.add(f), l.add(f), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(E, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
      }
      else for (let u = 0, d = t.count; u < d; u += 3) r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), f.subVectors(a, s), m.subVectors(r, s), f.cross(m), n.setXYZ(u + 0, f.x, f.y, f.z), n.setXYZ(u + 1, f.x, f.y, f.z), n.setXYZ(u + 2, f.x, f.y, f.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) mt.fromBufferAttribute(e, t), mt.normalize(), e.setXYZ(t, mt.x, mt.y, mt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, f = o.itemSize, m = o.normalized, u = new l.constructor(c.length * f);
      let d = 0, g = 0;
      for (let E = 0, p = c.length; E < p; E++) {
        o.isInterleavedBufferAttribute ? d = c[E] * o.data.stride + o.offset : d = c[E] * f;
        for (let h = 0; h < f; h++) u[g++] = l[d++];
      }
      return new Kt(u, f, m);
    }
    if (this.index === null) return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new At(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let f = 0, m = l.length; f < m; f++) {
        const u = l[f], d = e(u, n);
        c.push(d);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], f = [];
      for (let m = 0, u = l.length; m < u; m++) {
        const d = l[m];
        f.push(d.toJSON(e.data));
      }
      f.length > 0 && (r[c] = f, s = true);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const f = r[l];
      this.setAttribute(l, f.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const f = [], m = s[l];
      for (let u = 0, d = m.length; u < d; u++) f.push(m[u].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, f = a.length; l < f; l++) {
      const m = a[l];
      this.addGroup(m.start, m.count, m.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
let Dc = 0;
class fi extends zn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Dc++ }), this.uuid = ui(), this.name = "", this.type = "Material", this.blending = ii, this.side = Tn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = is, this.blendDst = rs, this.blendEquation = Un, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ve(0, 0, 0), this.blendAlpha = 0, this.depthFunc = si, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Ta, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Hn, this.stencilZFail = Hn, this.stencilZPass = Hn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        we(`Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        we(`Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ii && (n.blending = this.blending), this.side !== Tn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== is && (n.blendSrc = this.blendSrc), this.blendDst !== rs && (n.blendDst = this.blendDst), this.blendEquation !== Un && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== si && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ta && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Hn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Hn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Hn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.allowOverride === false && (n.allowOverride = false), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
const an = new I(), Hr = new I(), Hi = new I(), Mn = new I(), kr = new I(), ki = new I(), Wr = new I();
class Xo {
  constructor(e = new I(), t = new I(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, an)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = an.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (an.copy(this.origin).addScaledVector(this.direction, t), an.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Hr.copy(e).add(t).multiplyScalar(0.5), Hi.copy(t).sub(e).normalize(), Mn.copy(this.origin).sub(Hr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Hi), o = Mn.dot(this.direction), c = -Mn.dot(Hi), l = Mn.lengthSq(), f = Math.abs(1 - a * a);
    let m, u, d, g;
    if (f > 0) if (m = a * c - o, u = a * o - c, g = s * f, m >= 0) if (u >= -g) if (u <= g) {
      const E = 1 / f;
      m *= E, u *= E, d = m * (m + a * u + 2 * o) + u * (a * m + u + 2 * c) + l;
    } else u = s, m = Math.max(0, -(a * u + o)), d = -m * m + u * (u + 2 * c) + l;
    else u = -s, m = Math.max(0, -(a * u + o)), d = -m * m + u * (u + 2 * c) + l;
    else u <= -g ? (m = Math.max(0, -(-a * s + o)), u = m > 0 ? -s : Math.min(Math.max(-s, -c), s), d = -m * m + u * (u + 2 * c) + l) : u <= g ? (m = 0, u = Math.min(Math.max(-s, -c), s), d = u * (u + 2 * c) + l) : (m = Math.max(0, -(a * s + o)), u = m > 0 ? s : Math.min(Math.max(-s, -c), s), d = -m * m + u * (u + 2 * c) + l);
    else u = a > 0 ? -s : s, m = Math.max(0, -(a * u + o)), d = -m * m + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, m), r && r.copy(Hr).addScaledVector(Hi, u), d;
  }
  intersectSphere(e, t) {
    an.subVectors(e.center, this.origin);
    const n = an.dot(this.direction), r = an.dot(an) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? false : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x, f = 1 / this.direction.y, m = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), f >= 0 ? (s = (e.min.y - u.y) * f, a = (e.max.y - u.y) * f) : (s = (e.max.y - u.y) * f, a = (e.min.y - u.y) * f), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), m >= 0 ? (o = (e.min.z - u.z) * m, c = (e.max.z - u.z) * m) : (o = (e.max.z - u.z) * m, c = (e.min.z - u.z) * m), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, an) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    kr.subVectors(t, e), ki.subVectors(n, e), Wr.crossVectors(kr, ki);
    let a = this.direction.dot(Wr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    Mn.subVectors(this.origin, e);
    const c = o * this.direction.dot(ki.crossVectors(Mn, ki));
    if (c < 0) return null;
    const l = o * this.direction.dot(kr.cross(Mn));
    if (l < 0 || c + l > a) return null;
    const f = -o * Mn.dot(Wr);
    return f < 0 ? null : this.at(f / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class qo extends fi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new jt(), this.combine = So, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ga = new it(), Cn = new Xo(), Wi = new mr(), Ha = new I(), Xi = new I(), qi = new I(), Yi = new I(), Xr = new I(), Zi = new I(), ka = new I(), Ki = new I();
class dn extends _t {
  constructor(e = new At(), t = new qo()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Zi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const f = o[c], m = s[c];
        f !== 0 && (Xr.fromBufferAttribute(m, e), a ? Zi.addScaledVector(Xr, f) : Zi.addScaledVector(Xr.sub(t), f));
      }
      t.add(Zi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Wi.copy(n.boundingSphere), Wi.applyMatrix4(s), Cn.copy(e.ray).recast(e.near), !(Wi.containsPoint(Cn.origin) === false && (Cn.intersectSphere(Wi, Ha) === null || Cn.origin.distanceToSquared(Ha) > (e.far - e.near) ** 2)) && (Ga.copy(s).invert(), Cn.copy(e.ray).applyMatrix4(Ga), !(n.boundingBox !== null && Cn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Cn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, f = s.attributes.uv1, m = s.attributes.normal, u = s.groups, d = s.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, E = u.length; g < E; g++) {
      const p = u[g], h = a[p.materialIndex], M = Math.max(p.start, d.start), T = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
      for (let S = M, w = T; S < w; S += 3) {
        const A = o.getX(S), C = o.getX(S + 1), x = o.getX(S + 2);
        r = $i(this, h, e, n, l, f, m, A, C, x), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const g = Math.max(0, d.start), E = Math.min(o.count, d.start + d.count);
      for (let p = g, h = E; p < h; p += 3) {
        const M = o.getX(p), T = o.getX(p + 1), S = o.getX(p + 2);
        r = $i(this, a, e, n, l, f, m, M, T, S), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
    else if (c !== void 0) if (Array.isArray(a)) for (let g = 0, E = u.length; g < E; g++) {
      const p = u[g], h = a[p.materialIndex], M = Math.max(p.start, d.start), T = Math.min(c.count, Math.min(p.start + p.count, d.start + d.count));
      for (let S = M, w = T; S < w; S += 3) {
        const A = S, C = S + 1, x = S + 2;
        r = $i(this, h, e, n, l, f, m, A, C, x), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const g = Math.max(0, d.start), E = Math.min(c.count, d.start + d.count);
      for (let p = g, h = E; p < h; p += 3) {
        const M = p, T = p + 1, S = p + 2;
        r = $i(this, a, e, n, l, f, m, M, T, S), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
  }
}
function Lc(i, e, t, n, r, s, a, o) {
  let c;
  if (e.side === wt ? c = n.intersectTriangle(a, s, r, true, o) : c = n.intersectTriangle(r, s, a, e.side === Tn, o), c === null) return null;
  Ki.copy(o), Ki.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Ki);
  return l < t.near || l > t.far ? null : { distance: l, point: Ki.clone(), object: i };
}
function $i(i, e, t, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, Xi), i.getVertexPosition(c, qi), i.getVertexPosition(l, Yi);
  const f = Lc(i, e, t, n, Xi, qi, Yi, ka);
  if (f) {
    const m = new I();
    zt.getBarycoord(ka, Xi, qi, Yi, m), r && (f.uv = zt.getInterpolatedAttribute(r, o, c, l, m, new ze())), s && (f.uv1 = zt.getInterpolatedAttribute(s, o, c, l, m, new ze())), a && (f.normal = zt.getInterpolatedAttribute(a, o, c, l, m, new I()), f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
    const u = { a: o, b: c, c: l, normal: new I(), materialIndex: 0 };
    zt.getNormal(Xi, qi, Yi, u.normal), f.face = u, f.barycoord = m;
  }
  return f;
}
class Ic extends bt {
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = xt, f = xt, m, u) {
    super(null, a, o, c, l, f, r, s, m, u), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const qr = new I(), Uc = new I(), Nc = new Le();
class In {
  constructor(e = new I(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = qr.subVectors(n, t).cross(Uc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(qr), r = this.normal.dot(n);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Nc.getNormalMatrix(e), r = this.coplanarPoint(qr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pn = new mr(), Fc = new ze(0.5, 0.5), ji = new I();
class aa {
  constructor(e = new In(), t = new In(), n = new In(), r = new In(), s = new In(), a = new In()) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = qt, n = false) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], f = s[4], m = s[5], u = s[6], d = s[7], g = s[8], E = s[9], p = s[10], h = s[11], M = s[12], T = s[13], S = s[14], w = s[15];
    if (r[0].setComponents(l - a, d - f, h - g, w - M).normalize(), r[1].setComponents(l + a, d + f, h + g, w + M).normalize(), r[2].setComponents(l + o, d + m, h + E, w + T).normalize(), r[3].setComponents(l - o, d - m, h - E, w - T).normalize(), n) r[4].setComponents(c, u, p, S).normalize(), r[5].setComponents(l - c, d - u, h - p, w - S).normalize();
    else if (r[4].setComponents(l - c, d - u, h - p, w - S).normalize(), t === qt) r[5].setComponents(l + c, d + u, h + p, w + S).normalize();
    else if (t === Ai) r[5].setComponents(c, u, p, S).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Pn);
  }
  intersectsSprite(e) {
    Pn.center.set(0, 0, 0);
    const t = Fc.distanceTo(e.center);
    return Pn.radius = 0.7071067811865476 + t, Pn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Pn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (ji.x = r.normal.x > 0 ? e.max.x : e.min.x, ji.y = r.normal.y > 0 ? e.max.y : e.min.y, ji.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(ji) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Oc extends fi {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ve(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Wa = new it(), qs = new Xo(), Ji = new mr(), Qi = new I();
class $p extends _t {
  constructor(e = new At(), t = new Oc()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ji.copy(n.boundingSphere), Ji.applyMatrix4(r), Ji.radius += s, e.ray.intersectsSphere(Ji) === false) return;
    Wa.copy(r).invert(), qs.copy(e.ray).applyMatrix4(Wa);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, m = n.attributes.position;
    if (l !== null) {
      const u = Math.max(0, a.start), d = Math.min(l.count, a.start + a.count);
      for (let g = u, E = d; g < E; g++) {
        const p = l.getX(g);
        Qi.fromBufferAttribute(m, p), Xa(Qi, p, c, r, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start), d = Math.min(m.count, a.start + a.count);
      for (let g = u, E = d; g < E; g++) Qi.fromBufferAttribute(m, g), Xa(Qi, g, c, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Xa(i, e, t, n, r, s, a) {
  const o = qs.distanceSqToPoint(i);
  if (o < t) {
    const c = new I();
    qs.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far) return;
    s.push({ distance: l, distanceToRay: Math.sqrt(o), point: c, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class Yo extends bt {
  constructor(e = [], t = Bn, n, r, s, a, o, c, l, f) {
    super(e, t, n, r, s, a, o, c, l, f), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Ri extends bt {
  constructor(e, t, n = $t, r, s, a, o = xt, c = xt, l, f = fn, m = 1) {
    if (f !== fn && f !== On) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: m };
    super(u, r, s, a, o, c, f, n, l), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new sa(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Bc extends Ri {
  constructor(e, t = $t, n = Bn, r, s, a = xt, o = xt, c, l = fn) {
    const f = { width: e, height: e, depth: 1 }, m = [f, f, f, f, f, f];
    super(e, e, t, n, r, s, a, o, c, l), this.image = m, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Zo extends bt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Pi extends At {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: s, depthSegments: a };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], f = [], m = [];
    let u = 0, d = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new rt(l, 3)), this.setAttribute("normal", new rt(f, 3)), this.setAttribute("uv", new rt(m, 2));
    function g(E, p, h, M, T, S, w, A, C, x, y) {
      const O = S / C, R = w / x, N = S / 2, B = w / 2, k = A / 2, G = C + 1, V = x + 1;
      let H = 0, Q = 0;
      const $ = new I();
      for (let ce = 0; ce < V; ce++) {
        const pe = ce * R - B;
        for (let he = 0; he < G; he++) {
          const Ie = he * O - N;
          $[E] = Ie * M, $[p] = pe * T, $[h] = k, l.push($.x, $.y, $.z), $[E] = 0, $[p] = 0, $[h] = A > 0 ? 1 : -1, f.push($.x, $.y, $.z), m.push(he / C), m.push(1 - ce / x), H += 1;
        }
      }
      for (let ce = 0; ce < x; ce++) for (let pe = 0; pe < C; pe++) {
        const he = u + pe + G * ce, Ie = u + pe + G * (ce + 1), nt = u + (pe + 1) + G * (ce + 1), tt = u + (pe + 1) + G * ce;
        c.push(he, Ie, tt), c.push(Ie, nt, tt), Q += 6;
      }
      o.addGroup(d, Q, y), d += Q, u += H;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Pi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class oa extends At {
  constructor(e = 1, t = 1, n = 1, r = 32, s = 1, a = false, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: r, heightSegments: s, openEnded: a, thetaStart: o, thetaLength: c };
    const l = this;
    r = Math.floor(r), s = Math.floor(s);
    const f = [], m = [], u = [], d = [];
    let g = 0;
    const E = [], p = n / 2;
    let h = 0;
    M(), a === false && (e > 0 && T(true), t > 0 && T(false)), this.setIndex(f), this.setAttribute("position", new rt(m, 3)), this.setAttribute("normal", new rt(u, 3)), this.setAttribute("uv", new rt(d, 2));
    function M() {
      const S = new I(), w = new I();
      let A = 0;
      const C = (t - e) / n;
      for (let x = 0; x <= s; x++) {
        const y = [], O = x / s, R = O * (t - e) + e;
        for (let N = 0; N <= r; N++) {
          const B = N / r, k = B * c + o, G = Math.sin(k), V = Math.cos(k);
          w.x = R * G, w.y = -O * n + p, w.z = R * V, m.push(w.x, w.y, w.z), S.set(G, C, V).normalize(), u.push(S.x, S.y, S.z), d.push(B, 1 - O), y.push(g++);
        }
        E.push(y);
      }
      for (let x = 0; x < r; x++) for (let y = 0; y < s; y++) {
        const O = E[y][x], R = E[y + 1][x], N = E[y + 1][x + 1], B = E[y][x + 1];
        (e > 0 || y !== 0) && (f.push(O, R, B), A += 3), (t > 0 || y !== s - 1) && (f.push(R, N, B), A += 3);
      }
      l.addGroup(h, A, 0), h += A;
    }
    function T(S) {
      const w = g, A = new ze(), C = new I();
      let x = 0;
      const y = S === true ? e : t, O = S === true ? 1 : -1;
      for (let N = 1; N <= r; N++) m.push(0, p * O, 0), u.push(0, O, 0), d.push(0.5, 0.5), g++;
      const R = g;
      for (let N = 0; N <= r; N++) {
        const k = N / r * c + o, G = Math.cos(k), V = Math.sin(k);
        C.x = y * V, C.y = p * O, C.z = y * G, m.push(C.x, C.y, C.z), u.push(0, O, 0), A.x = G * 0.5 + 0.5, A.y = V * 0.5 * O + 0.5, d.push(A.x, A.y), g++;
      }
      for (let N = 0; N < r; N++) {
        const B = w + N, k = R + N;
        S === true ? f.push(k, k + 1, B) : f.push(k + 1, k, B), x += 3;
      }
      l.addGroup(h, x, S === true ? 1 : 2), h += x;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new oa(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ko extends oa {
  constructor(e = 1, t = 1, n = 32, r = 1, s = false, a = 0, o = Math.PI * 2) {
    super(0, e, t, n, r, s, a, o), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: o };
  }
  static fromJSON(e) {
    return new Ko(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class la extends At {
  constructor(e = [], t = [], n = 1, r = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: n, detail: r };
    const s = [], a = [];
    o(r), l(n), f(), this.setAttribute("position", new rt(s, 3)), this.setAttribute("normal", new rt(s.slice(), 3)), this.setAttribute("uv", new rt(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(M) {
      const T = new I(), S = new I(), w = new I();
      for (let A = 0; A < t.length; A += 3) d(t[A + 0], T), d(t[A + 1], S), d(t[A + 2], w), c(T, S, w, M);
    }
    function c(M, T, S, w) {
      const A = w + 1, C = [];
      for (let x = 0; x <= A; x++) {
        C[x] = [];
        const y = M.clone().lerp(S, x / A), O = T.clone().lerp(S, x / A), R = A - x;
        for (let N = 0; N <= R; N++) N === 0 && x === A ? C[x][N] = y : C[x][N] = y.clone().lerp(O, N / R);
      }
      for (let x = 0; x < A; x++) for (let y = 0; y < 2 * (A - x) - 1; y++) {
        const O = Math.floor(y / 2);
        y % 2 === 0 ? (u(C[x][O + 1]), u(C[x + 1][O]), u(C[x][O])) : (u(C[x][O + 1]), u(C[x + 1][O + 1]), u(C[x + 1][O]));
      }
    }
    function l(M) {
      const T = new I();
      for (let S = 0; S < s.length; S += 3) T.x = s[S + 0], T.y = s[S + 1], T.z = s[S + 2], T.normalize().multiplyScalar(M), s[S + 0] = T.x, s[S + 1] = T.y, s[S + 2] = T.z;
    }
    function f() {
      const M = new I();
      for (let T = 0; T < s.length; T += 3) {
        M.x = s[T + 0], M.y = s[T + 1], M.z = s[T + 2];
        const S = p(M) / 2 / Math.PI + 0.5, w = h(M) / Math.PI + 0.5;
        a.push(S, 1 - w);
      }
      g(), m();
    }
    function m() {
      for (let M = 0; M < a.length; M += 6) {
        const T = a[M + 0], S = a[M + 2], w = a[M + 4], A = Math.max(T, S, w), C = Math.min(T, S, w);
        A > 0.9 && C < 0.1 && (T < 0.2 && (a[M + 0] += 1), S < 0.2 && (a[M + 2] += 1), w < 0.2 && (a[M + 4] += 1));
      }
    }
    function u(M) {
      s.push(M.x, M.y, M.z);
    }
    function d(M, T) {
      const S = M * 3;
      T.x = e[S + 0], T.y = e[S + 1], T.z = e[S + 2];
    }
    function g() {
      const M = new I(), T = new I(), S = new I(), w = new I(), A = new ze(), C = new ze(), x = new ze();
      for (let y = 0, O = 0; y < s.length; y += 9, O += 6) {
        M.set(s[y + 0], s[y + 1], s[y + 2]), T.set(s[y + 3], s[y + 4], s[y + 5]), S.set(s[y + 6], s[y + 7], s[y + 8]), A.set(a[O + 0], a[O + 1]), C.set(a[O + 2], a[O + 3]), x.set(a[O + 4], a[O + 5]), w.copy(M).add(T).add(S).divideScalar(3);
        const R = p(w);
        E(A, O + 0, M, R), E(C, O + 2, T, R), E(x, O + 4, S, R);
      }
    }
    function E(M, T, S, w) {
      w < 0 && M.x === 1 && (a[T] = M.x - 1), S.x === 0 && S.z === 0 && (a[T] = w / 2 / Math.PI + 0.5);
    }
    function p(M) {
      return Math.atan2(M.z, -M.x);
    }
    function h(M) {
      return Math.atan2(-M.y, Math.sqrt(M.x * M.x + M.z * M.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new la(e.vertices, e.indices, e.radius, e.detail);
  }
}
class zc {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    we("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const t = [];
    let n, r = this.getPoint(0), s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++) n = this.getPoint(a / e), s += n.distanceTo(r), t.push(s), r = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let a;
    t ? a = t : a = e * n[s - 1];
    let o = 0, c = s - 1, l;
    for (; o <= c; ) if (r = Math.floor(o + (c - o) / 2), l = n[r] - a, l < 0) o = r + 1;
    else if (l > 0) c = r - 1;
    else {
      c = r;
      break;
    }
    if (r = c, n[r] === a) return r / (s - 1);
    const f = n[r], u = n[r + 1] - f, d = (a - f) / u;
    return (r + d) / (s - 1);
  }
  getTangent(e, t) {
    let r = e - 1e-4, s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const a = this.getPoint(r), o = this.getPoint(s), c = t || (a.isVector2 ? new ze() : new I());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t = false) {
    const n = new I(), r = [], s = [], a = [], o = new I(), c = new it();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      r[d] = this.getTangentAt(g, new I());
    }
    s[0] = new I(), a[0] = new I();
    let l = Number.MAX_VALUE;
    const f = Math.abs(r[0].x), m = Math.abs(r[0].y), u = Math.abs(r[0].z);
    f <= l && (l = f, n.set(1, 0, 0)), m <= l && (l = m, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], o), a[0].crossVectors(r[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (s[d] = s[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(r[d - 1], r[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(Ne(r[d - 1].dot(r[d]), -1, 1));
        s[d].applyMatrix4(c.makeRotationAxis(o, g));
      }
      a[d].crossVectors(r[d], s[d]);
    }
    if (t === true) {
      let d = Math.acos(Ne(s[0].dot(s[e]), -1, 1));
      d /= e, r[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let g = 1; g <= e; g++) s[g].applyMatrix4(c.makeRotationAxis(r[g], d * g)), a[g].crossVectors(r[g], s[g]);
    }
    return { tangents: r, normals: s, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
function ca() {
  let i = 0, e = 0, t = 0, n = 0;
  function r(s, a, o, c) {
    i = s, e = o, t = -3 * s + 3 * a - 2 * o - c, n = 2 * s - 2 * a + o + c;
  }
  return { initCatmullRom: function(s, a, o, c, l) {
    r(a, o, l * (o - s), l * (c - a));
  }, initNonuniformCatmullRom: function(s, a, o, c, l, f, m) {
    let u = (a - s) / l - (o - s) / (l + f) + (o - a) / f, d = (o - a) / f - (c - a) / (f + m) + (c - o) / m;
    u *= f, d *= f, r(a, o, u, d);
  }, calc: function(s) {
    const a = s * s, o = a * s;
    return i + e * s + t * a + n * o;
  } };
}
const er = new I(), Yr = new ca(), Zr = new ca(), Kr = new ca();
class jp extends zc {
  constructor(e = [], t = false, n = "centripetal", r = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
  }
  getPoint(e, t = new I()) {
    const n = t, r = this.points, s = r.length, a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), c = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : c === 0 && o === s - 1 && (o = s - 2, c = 1);
    let l, f;
    this.closed || o > 0 ? l = r[(o - 1) % s] : (er.subVectors(r[0], r[1]).add(r[0]), l = er);
    const m = r[o % s], u = r[(o + 1) % s];
    if (this.closed || o + 2 < s ? f = r[(o + 2) % s] : (er.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), f = er), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(l.distanceToSquared(m), d), E = Math.pow(m.distanceToSquared(u), d), p = Math.pow(u.distanceToSquared(f), d);
      E < 1e-4 && (E = 1), g < 1e-4 && (g = E), p < 1e-4 && (p = E), Yr.initNonuniformCatmullRom(l.x, m.x, u.x, f.x, g, E, p), Zr.initNonuniformCatmullRom(l.y, m.y, u.y, f.y, g, E, p), Kr.initNonuniformCatmullRom(l.z, m.z, u.z, f.z, g, E, p);
    } else this.curveType === "catmullrom" && (Yr.initCatmullRom(l.x, m.x, u.x, f.x, this.tension), Zr.initCatmullRom(l.y, m.y, u.y, f.y, this.tension), Kr.initCatmullRom(l.z, m.z, u.z, f.z, this.tension));
    return n.set(Yr.calc(c), Zr.calc(c), Kr.calc(c)), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new I().fromArray(r));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
class $o extends la {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], s = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
    super(r, s, e, t), this.type = "IcosahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new $o(e.radius, e.detail);
  }
}
class _r extends At {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, f = c + 1, m = e / o, u = t / c, d = [], g = [], E = [], p = [];
    for (let h = 0; h < f; h++) {
      const M = h * u - a;
      for (let T = 0; T < l; T++) {
        const S = T * m - s;
        g.push(S, -M, 0), E.push(0, 0, 1), p.push(T / o), p.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++) for (let M = 0; M < o; M++) {
      const T = M + l * h, S = M + l * (h + 1), w = M + 1 + l * (h + 1), A = M + 1 + l * h;
      d.push(T, S, A), d.push(S, w, A);
    }
    this.setIndex(d), this.setAttribute("position", new rt(g, 3)), this.setAttribute("normal", new rt(E, 3)), this.setAttribute("uv", new rt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new _r(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class jo extends At {
  constructor(e = 1, t = 32, n = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: r, phiLength: s, thetaStart: a, thetaLength: o }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const f = [], m = new I(), u = new I(), d = [], g = [], E = [], p = [];
    for (let h = 0; h <= n; h++) {
      const M = [], T = h / n;
      let S = 0;
      h === 0 && a === 0 ? S = 0.5 / t : h === n && c === Math.PI && (S = -0.5 / t);
      for (let w = 0; w <= t; w++) {
        const A = w / t;
        m.x = -e * Math.cos(r + A * s) * Math.sin(a + T * o), m.y = e * Math.cos(a + T * o), m.z = e * Math.sin(r + A * s) * Math.sin(a + T * o), g.push(m.x, m.y, m.z), u.copy(m).normalize(), E.push(u.x, u.y, u.z), p.push(A + S, 1 - T), M.push(l++);
      }
      f.push(M);
    }
    for (let h = 0; h < n; h++) for (let M = 0; M < t; M++) {
      const T = f[h][M + 1], S = f[h][M], w = f[h + 1][M], A = f[h + 1][M + 1];
      (h !== 0 || a > 0) && d.push(T, S, A), (h !== n - 1 || c < Math.PI) && d.push(S, w, A);
    }
    this.setIndex(d), this.setAttribute("position", new rt(g, 3)), this.setAttribute("normal", new rt(E, 3)), this.setAttribute("uv", new rt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new jo(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Jo extends At {
  constructor(e = 1, t = 0.4, n = 12, r = 48, s = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: r, arc: s, thetaStart: a, thetaLength: o }, n = Math.floor(n), r = Math.floor(r);
    const c = [], l = [], f = [], m = [], u = new I(), d = new I(), g = new I();
    for (let E = 0; E <= n; E++) {
      const p = a + E / n * o;
      for (let h = 0; h <= r; h++) {
        const M = h / r * s;
        d.x = (e + t * Math.cos(p)) * Math.cos(M), d.y = (e + t * Math.cos(p)) * Math.sin(M), d.z = t * Math.sin(p), l.push(d.x, d.y, d.z), u.x = e * Math.cos(M), u.y = e * Math.sin(M), g.subVectors(d, u).normalize(), f.push(g.x, g.y, g.z), m.push(h / r), m.push(E / n);
      }
    }
    for (let E = 1; E <= n; E++) for (let p = 1; p <= r; p++) {
      const h = (r + 1) * E + p - 1, M = (r + 1) * (E - 1) + p - 1, T = (r + 1) * (E - 1) + p, S = (r + 1) * E + p;
      c.push(h, M, S), c.push(M, T, S);
    }
    this.setIndex(c), this.setAttribute("position", new rt(l, 3)), this.setAttribute("normal", new rt(f, 3)), this.setAttribute("uv", new rt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Jo(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Qo extends At {
  constructor(e = 1, t = 0.4, n = 64, r = 8, s = 2, a = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: r, p: s, q: a }, n = Math.floor(n), r = Math.floor(r);
    const o = [], c = [], l = [], f = [], m = new I(), u = new I(), d = new I(), g = new I(), E = new I(), p = new I(), h = new I();
    for (let T = 0; T <= n; ++T) {
      const S = T / n * s * Math.PI * 2;
      M(S, s, a, e, d), M(S + 0.01, s, a, e, g), p.subVectors(g, d), h.addVectors(g, d), E.crossVectors(p, h), h.crossVectors(E, p), E.normalize(), h.normalize();
      for (let w = 0; w <= r; ++w) {
        const A = w / r * Math.PI * 2, C = -t * Math.cos(A), x = t * Math.sin(A);
        m.x = d.x + (C * h.x + x * E.x), m.y = d.y + (C * h.y + x * E.y), m.z = d.z + (C * h.z + x * E.z), c.push(m.x, m.y, m.z), u.subVectors(m, d).normalize(), l.push(u.x, u.y, u.z), f.push(T / n), f.push(w / r);
      }
    }
    for (let T = 1; T <= n; T++) for (let S = 1; S <= r; S++) {
      const w = (r + 1) * (T - 1) + (S - 1), A = (r + 1) * T + (S - 1), C = (r + 1) * T + S, x = (r + 1) * (T - 1) + S;
      o.push(w, A, x), o.push(A, C, x);
    }
    this.setIndex(o), this.setAttribute("position", new rt(c, 3)), this.setAttribute("normal", new rt(l, 3)), this.setAttribute("uv", new rt(f, 2));
    function M(T, S, w, A, C) {
      const x = Math.cos(T), y = Math.sin(T), O = w / S * T, R = Math.cos(O);
      C.x = A * (2 + R) * 0.5 * x, C.y = A * (2 + R) * y * 0.5, C.z = A * Math.sin(O) * 0.5;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Qo(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
function ci(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function Tt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ci(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Vc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function el(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : He.workingColorSpace;
}
const Gc = { clone: ci, merge: Tt };
var Hc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, kc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Jt extends fi {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Hc, this.fragmentShader = kc, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ci(e.uniforms), this.uniformsGroups = Vc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[r] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[r] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[r] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[r] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[r] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[r] = { type: "m4", value: a.toArray() } : t.uniforms[r] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions) this.extensions[r] === true && (n[r] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Wc extends Jt {
  constructor(e) {
    super(e), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class Jp extends fi {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ve(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oo, this.normalScale = new ze(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new jt(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Xc extends fi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Gl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class qc extends fi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class gr extends _t {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ve(e), this.intensity = t;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
class Qp extends gr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ve(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const $r = new it(), qa = new I(), Ya = new I();
class tl {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ze(512, 512), this.mapType = Dt, this.map = null, this.mapPass = null, this.matrix = new it(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new aa(), this._frameExtents = new ze(1, 1), this._viewportCount = 1, this._viewports = [new at(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    qa.setFromMatrixPosition(e.matrixWorld), t.position.copy(qa), Ya.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ya), t.updateMatrixWorld(), $r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix($r, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === Ai || t.reversedDepth ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply($r);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
const tr = new I(), nr = new hi(), Ht = new I();
class nl extends _t {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new it(), this.projectionMatrix = new it(), this.projectionMatrixInverse = new it(), this.coordinateSystem = qt, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(tr, nr, Ht), Ht.x === 1 && Ht.y === 1 && Ht.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(tr, nr, Ht.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(tr, nr, Ht), Ht.x === 1 && Ht.y === 1 && Ht.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(tr, nr, Ht.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Sn = new I(), Za = new ze(), Ka = new ze();
class Ut extends nl {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = wi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ei * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return wi * 2 * Math.atan(Math.tan(Ei * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Sn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Sn.x, Sn.y).multiplyScalar(-e / Sn.z), Sn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Sn.x, Sn.y).multiplyScalar(-e / Sn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Za, Ka), t.subVectors(Ka, Za);
  }
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ei * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, t -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class Yc extends tl {
  constructor() {
    super(new Ut(90, 1, 0.5, 500)), this.isPointLightShadow = true;
  }
}
class em extends gr {
  constructor(e, t, n = 0, r = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Yc();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
  }
}
class ua extends nl {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= f * this.view.offsetY, c = o - f * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Zc extends tl {
  constructor() {
    super(new ua(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class tm extends gr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.shadow = new Zc();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
class nm extends gr {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
const Qn = -90, ei = 1;
class Kc extends _t {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Ut(Qn, ei, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Ut(Qn, ei, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Ut(Qn, ei, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ut(Qn, ei, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Ut(Qn, ei, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Ut(Qn, ei, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === qt) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Ai) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, f] = this.children, m = e.getRenderTarget(), u = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const E = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false;
    let p = false;
    e.isWebGLRenderer === true ? p = e.state.buffers.depth.getReversed() : p = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), p && e.autoClear === false && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), p && e.autoClear === false && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), p && e.autoClear === false && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), p && e.autoClear === false && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), p && e.autoClear === false && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = E, e.setRenderTarget(n, 5, r), p && e.autoClear === false && e.clearDepth(), e.render(t, f), e.setRenderTarget(m, u, d), e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class $c extends Ut {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
class im {
  constructor() {
    this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
  }
  connect(e) {
    this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = jc.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, false));
  }
  disconnect() {
    this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
  }
  getDelta() {
    return this._delta / 1e3;
  }
  getElapsed() {
    return this._elapsed / 1e3;
  }
  getTimescale() {
    return this._timescale;
  }
  setTimescale(e) {
    return this._timescale = e, this;
  }
  reset() {
    return this._currentTime = performance.now() - this._startTime, this;
  }
  dispose() {
    this.disconnect();
  }
  update(e) {
    return this._pageVisibilityHandler !== null && this._document.hidden === true ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (e !== void 0 ? e : performance.now()) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
  }
}
function jc() {
  this._document.hidden === false && this.reset();
}
class il {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new il(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
class rm {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false, we("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.");
  }
  start() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = performance.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
class sm {
  constructor(e = 1, t = 0, n = 0) {
    this.radius = e, this.phi = t, this.theta = n;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Ne(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ne(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class am extends zn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      we("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function $a(i, e, t, n) {
  const r = Jc(n);
  switch (t) {
    case Uo:
      return i * e;
    case Fo:
      return i * e / r.components * r.byteLength;
    case Qs:
      return i * e / r.components * r.byteLength;
    case oi:
      return i * e * 2 / r.components * r.byteLength;
    case ea:
      return i * e * 2 / r.components * r.byteLength;
    case No:
      return i * e * 3 / r.components * r.byteLength;
    case Vt:
      return i * e * 4 / r.components * r.byteLength;
    case ta:
      return i * e * 4 / r.components * r.byteLength;
    case ar:
    case or:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case lr:
    case cr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ms:
    case gs:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case ps:
    case _s:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case xs:
    case vs:
    case Ss:
    case Es:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ms:
    case ys:
    case Ts:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case bs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case As:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case ws:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Rs:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Cs:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ps:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ds:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ls:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Is:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Us:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ns:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Fs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Os:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Bs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case zs:
    case Vs:
    case Gs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Hs:
    case ks:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Ws:
    case Xs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Jc(i) {
  switch (i) {
    case Dt:
    case Po:
      return { byteLength: 1, components: 1 };
    case Ti:
    case Do:
    case hn:
      return { byteLength: 2, components: 1 };
    case js:
    case Js:
      return { byteLength: 2, components: 4 };
    case $t:
    case $s:
    case Xt:
      return { byteLength: 4, components: 1 };
    case Lo:
    case Io:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ks } }));
typeof window < "u" && (window.__THREE__ ? we("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ks);
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function rl() {
  let i = null, e = false, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return { start: function() {
    e !== true && t !== null && (n = i.requestAnimationFrame(r), e = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    i = s;
  } };
}
function Qc(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, f = o.usage, m = l.byteLength, u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, f), o.onUploadCallback();
    let d;
    if (l instanceof Float32Array) d = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array) d = i.HALF_FLOAT;
    else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? d = i.HALF_FLOAT : d = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) d = i.SHORT;
    else if (l instanceof Uint32Array) d = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) d = i.INT;
    else if (l instanceof Int8Array) d = i.BYTE;
    else if (l instanceof Uint8Array) d = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) d = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return { buffer: u, type: d, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: m };
  }
  function n(o, c, l) {
    const f = c.array, m = c.updateRanges;
    if (i.bindBuffer(l, o), m.length === 0) i.bufferSubData(l, 0, f);
    else {
      m.sort((d, g) => d.start - g.start);
      let u = 0;
      for (let d = 1; d < m.length; d++) {
        const g = m[u], E = m[d];
        E.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, E.start + E.count - g.start) : (++u, m[u] = E);
      }
      m.length = u + 1;
      for (let d = 0, g = m.length; d < g; d++) {
        const E = m[d];
        i.bufferSubData(l, E.start * f.BYTES_PER_ELEMENT, f, E.start, E.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const f = e.get(o);
      (!f || f.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return { get: r, remove: s, update: a };
}
var eu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, tu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, nu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, iu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ru = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, su = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, au = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ou = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, lu = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, cu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, uu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, hu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, fu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, du = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, pu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, mu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, _u = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, gu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, xu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, vu = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Mu = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, Su = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Eu = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, yu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Tu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, bu = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Au = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, wu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Ru = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Cu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Pu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Du = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Lu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, Iu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, Uu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Nu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Fu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Ou = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Bu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, zu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Vu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Gu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Hu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ku = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Wu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Xu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, qu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Yu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Zu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ku = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, $u = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ju = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Ju = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Qu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, eh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, th = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, nh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, ih = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, rh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, sh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, ah = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, oh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, lh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, ch = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, uh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, hh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, fh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, dh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ph = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, mh = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, _h = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, gh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, xh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, vh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Mh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Sh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Eh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, yh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Th = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, bh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Ah = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, wh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Rh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, Ch = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ph = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Dh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Lh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ih = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Uh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Nh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, Fh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Oh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Bh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, zh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Vh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Gh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Hh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, kh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Wh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Xh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, qh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Yh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Zh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Kh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, $h = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, jh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Jh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Qh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ef = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, tf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, nf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, rf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, sf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, af = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, of = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, lf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, cf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, uf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, hf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ff = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, df = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, pf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, mf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _f = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, vf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Mf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Sf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Ef = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, yf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, bf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Af = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, wf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Rf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Cf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Pf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Df = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Lf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, If = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ue = { alphahash_fragment: eu, alphahash_pars_fragment: tu, alphamap_fragment: nu, alphamap_pars_fragment: iu, alphatest_fragment: ru, alphatest_pars_fragment: su, aomap_fragment: au, aomap_pars_fragment: ou, batching_pars_vertex: lu, batching_vertex: cu, begin_vertex: uu, beginnormal_vertex: hu, bsdfs: fu, iridescence_fragment: du, bumpmap_pars_fragment: pu, clipping_planes_fragment: mu, clipping_planes_pars_fragment: _u, clipping_planes_pars_vertex: gu, clipping_planes_vertex: xu, color_fragment: vu, color_pars_fragment: Mu, color_pars_vertex: Su, color_vertex: Eu, common: yu, cube_uv_reflection_fragment: Tu, defaultnormal_vertex: bu, displacementmap_pars_vertex: Au, displacementmap_vertex: wu, emissivemap_fragment: Ru, emissivemap_pars_fragment: Cu, colorspace_fragment: Pu, colorspace_pars_fragment: Du, envmap_fragment: Lu, envmap_common_pars_fragment: Iu, envmap_pars_fragment: Uu, envmap_pars_vertex: Nu, envmap_physical_pars_fragment: qu, envmap_vertex: Fu, fog_vertex: Ou, fog_pars_vertex: Bu, fog_fragment: zu, fog_pars_fragment: Vu, gradientmap_pars_fragment: Gu, lightmap_pars_fragment: Hu, lights_lambert_fragment: ku, lights_lambert_pars_fragment: Wu, lights_pars_begin: Xu, lights_toon_fragment: Yu, lights_toon_pars_fragment: Zu, lights_phong_fragment: Ku, lights_phong_pars_fragment: $u, lights_physical_fragment: ju, lights_physical_pars_fragment: Ju, lights_fragment_begin: Qu, lights_fragment_maps: eh, lights_fragment_end: th, logdepthbuf_fragment: nh, logdepthbuf_pars_fragment: ih, logdepthbuf_pars_vertex: rh, logdepthbuf_vertex: sh, map_fragment: ah, map_pars_fragment: oh, map_particle_fragment: lh, map_particle_pars_fragment: ch, metalnessmap_fragment: uh, metalnessmap_pars_fragment: hh, morphinstance_vertex: fh, morphcolor_vertex: dh, morphnormal_vertex: ph, morphtarget_pars_vertex: mh, morphtarget_vertex: _h, normal_fragment_begin: gh, normal_fragment_maps: xh, normal_pars_fragment: vh, normal_pars_vertex: Mh, normal_vertex: Sh, normalmap_pars_fragment: Eh, clearcoat_normal_fragment_begin: yh, clearcoat_normal_fragment_maps: Th, clearcoat_pars_fragment: bh, iridescence_pars_fragment: Ah, opaque_fragment: wh, packing: Rh, premultiplied_alpha_fragment: Ch, project_vertex: Ph, dithering_fragment: Dh, dithering_pars_fragment: Lh, roughnessmap_fragment: Ih, roughnessmap_pars_fragment: Uh, shadowmap_pars_fragment: Nh, shadowmap_pars_vertex: Fh, shadowmap_vertex: Oh, shadowmask_pars_fragment: Bh, skinbase_vertex: zh, skinning_pars_vertex: Vh, skinning_vertex: Gh, skinnormal_vertex: Hh, specularmap_fragment: kh, specularmap_pars_fragment: Wh, tonemapping_fragment: Xh, tonemapping_pars_fragment: qh, transmission_fragment: Yh, transmission_pars_fragment: Zh, uv_pars_fragment: Kh, uv_pars_vertex: $h, uv_vertex: jh, worldpos_vertex: Jh, background_vert: Qh, background_frag: ef, backgroundCube_vert: tf, backgroundCube_frag: nf, cube_vert: rf, cube_frag: sf, depth_vert: af, depth_frag: of, distance_vert: lf, distance_frag: cf, equirect_vert: uf, equirect_frag: hf, linedashed_vert: ff, linedashed_frag: df, meshbasic_vert: pf, meshbasic_frag: mf, meshlambert_vert: _f, meshlambert_frag: gf, meshmatcap_vert: xf, meshmatcap_frag: vf, meshnormal_vert: Mf, meshnormal_frag: Sf, meshphong_vert: Ef, meshphong_frag: yf, meshphysical_vert: Tf, meshphysical_frag: bf, meshtoon_vert: Af, meshtoon_frag: wf, points_vert: Rf, points_frag: Cf, shadow_vert: Pf, shadow_frag: Df, sprite_vert: Lf, sprite_frag: If }, ae = { common: { diffuse: { value: new Ve(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Le() }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Le() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Le() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Le() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Le() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Le() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Le() }, normalScale: { value: new ze(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Le() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Le() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Le() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Le() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ve(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ve(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 }, uvTransform: { value: new Le() } }, sprite: { diffuse: { value: new Ve(16777215) }, opacity: { value: 1 }, center: { value: new ze(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Le() }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 } } }, Wt = { basic: { uniforms: Tt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.fog]), vertexShader: Ue.meshbasic_vert, fragmentShader: Ue.meshbasic_frag }, lambert: { uniforms: Tt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, { emissive: { value: new Ve(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Ue.meshlambert_vert, fragmentShader: Ue.meshlambert_frag }, phong: { uniforms: Tt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, { emissive: { value: new Ve(0) }, specular: { value: new Ve(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Ue.meshphong_vert, fragmentShader: Ue.meshphong_frag }, standard: { uniforms: Tt([ae.common, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.roughnessmap, ae.metalnessmap, ae.fog, ae.lights, { emissive: { value: new Ve(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag }, toon: { uniforms: Tt([ae.common, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.gradientmap, ae.fog, ae.lights, { emissive: { value: new Ve(0) } }]), vertexShader: Ue.meshtoon_vert, fragmentShader: Ue.meshtoon_frag }, matcap: { uniforms: Tt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, { matcap: { value: null } }]), vertexShader: Ue.meshmatcap_vert, fragmentShader: Ue.meshmatcap_frag }, points: { uniforms: Tt([ae.points, ae.fog]), vertexShader: Ue.points_vert, fragmentShader: Ue.points_frag }, dashed: { uniforms: Tt([ae.common, ae.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ue.linedashed_vert, fragmentShader: Ue.linedashed_frag }, depth: { uniforms: Tt([ae.common, ae.displacementmap]), vertexShader: Ue.depth_vert, fragmentShader: Ue.depth_frag }, normal: { uniforms: Tt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ue.meshnormal_vert, fragmentShader: Ue.meshnormal_frag }, sprite: { uniforms: Tt([ae.sprite, ae.fog]), vertexShader: Ue.sprite_vert, fragmentShader: Ue.sprite_frag }, background: { uniforms: { uvTransform: { value: new Le() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ue.background_vert, fragmentShader: Ue.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Le() } }, vertexShader: Ue.backgroundCube_vert, fragmentShader: Ue.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ue.cube_vert, fragmentShader: Ue.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ue.equirect_vert, fragmentShader: Ue.equirect_frag }, distance: { uniforms: Tt([ae.common, ae.displacementmap, { referencePosition: { value: new I() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ue.distance_vert, fragmentShader: Ue.distance_frag }, shadow: { uniforms: Tt([ae.lights, ae.fog, { color: { value: new Ve(0) }, opacity: { value: 1 } }]), vertexShader: Ue.shadow_vert, fragmentShader: Ue.shadow_frag } };
Wt.physical = { uniforms: Tt([Wt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Le() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Le() }, clearcoatNormalScale: { value: new ze(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Le() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Le() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Le() }, sheen: { value: 0 }, sheenColor: { value: new Ve(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Le() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Le() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Le() }, transmissionSamplerSize: { value: new ze() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Le() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ve(0) }, specularColor: { value: new Ve(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Le() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Le() }, anisotropyVector: { value: new ze() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Le() } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag };
const ir = { r: 0, b: 0, g: 0 }, Dn = new jt(), Uf = new it();
function Nf(i, e, t, n, r, s) {
  const a = new Ve(0);
  let o = r === true ? 0 : 1, c, l, f = null, m = 0, u = null;
  function d(M) {
    let T = M.isScene === true ? M.background : null;
    if (T && T.isTexture) {
      const S = M.backgroundBlurriness > 0;
      T = e.get(T, S);
    }
    return T;
  }
  function g(M) {
    let T = false;
    const S = d(M);
    S === null ? p(a, o) : S && S.isColor && (p(S, 1), T = true);
    const w = i.xr.getEnvironmentBlendMode();
    w === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : w === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || T) && (t.buffers.depth.setTest(true), t.buffers.depth.setMask(true), t.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function E(M, T) {
    const S = d(T);
    S && (S.isCubeTexture || S.mapping === pr) ? (l === void 0 && (l = new dn(new Pi(1, 1, 1), new Jt({ name: "BackgroundCubeMaterial", uniforms: ci(Wt.backgroundCube.uniforms), vertexShader: Wt.backgroundCube.vertexShader, fragmentShader: Wt.backgroundCube.fragmentShader, side: wt, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(w, A, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), n.update(l)), Dn.copy(T.backgroundRotation), Dn.x *= -1, Dn.y *= -1, Dn.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === false && (Dn.y *= -1, Dn.z *= -1), l.material.uniforms.envMap.value = S, l.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === false ? -1 : 1, l.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(Dn)), l.material.toneMapped = He.getTransfer(S.colorSpace) !== Ze, (f !== S || m !== S.version || u !== i.toneMapping) && (l.material.needsUpdate = true, f = S, m = S.version, u = i.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new dn(new _r(2, 2), new Jt({ name: "BackgroundMaterial", uniforms: ci(Wt.background.uniforms), vertexShader: Wt.background.vertexShader, fragmentShader: Wt.background.fragmentShader, side: Tn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), n.update(c)), c.material.uniforms.t2D.value = S, c.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, c.material.toneMapped = He.getTransfer(S.colorSpace) !== Ze, S.matrixAutoUpdate === true && S.updateMatrix(), c.material.uniforms.uvTransform.value.copy(S.matrix), (f !== S || m !== S.version || u !== i.toneMapping) && (c.material.needsUpdate = true, f = S, m = S.version, u = i.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(M, T) {
    M.getRGB(ir, el(i)), t.buffers.color.setClear(ir.r, ir.g, ir.b, T, s);
  }
  function h() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(M, T = 1) {
    a.set(M), o = T, p(a, o);
  }, getClearAlpha: function() {
    return o;
  }, setClearAlpha: function(M) {
    o = M, p(a, o);
  }, render: g, addToRenderList: E, dispose: h };
}
function Ff(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = false;
  function o(R, N, B, k, G) {
    let V = false;
    const H = m(R, k, B, N);
    s !== H && (s = H, l(s.object)), V = d(R, k, B, G), V && g(R, k, B, G), G !== null && e.update(G, i.ELEMENT_ARRAY_BUFFER), (V || a) && (a = false, S(R, N, B, k), G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(R) {
    return i.bindVertexArray(R);
  }
  function f(R) {
    return i.deleteVertexArray(R);
  }
  function m(R, N, B, k) {
    const G = k.wireframe === true;
    let V = n[N.id];
    V === void 0 && (V = {}, n[N.id] = V);
    const H = R.isInstancedMesh === true ? R.id : 0;
    let Q = V[H];
    Q === void 0 && (Q = {}, V[H] = Q);
    let $ = Q[B.id];
    $ === void 0 && ($ = {}, Q[B.id] = $);
    let ce = $[G];
    return ce === void 0 && (ce = u(c()), $[G] = ce), ce;
  }
  function u(R) {
    const N = [], B = [], k = [];
    for (let G = 0; G < t; G++) N[G] = 0, B[G] = 0, k[G] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: N, enabledAttributes: B, attributeDivisors: k, object: R, attributes: {}, index: null };
  }
  function d(R, N, B, k) {
    const G = s.attributes, V = N.attributes;
    let H = 0;
    const Q = B.getAttributes();
    for (const $ in Q) if (Q[$].location >= 0) {
      const pe = G[$];
      let he = V[$];
      if (he === void 0 && ($ === "instanceMatrix" && R.instanceMatrix && (he = R.instanceMatrix), $ === "instanceColor" && R.instanceColor && (he = R.instanceColor)), pe === void 0 || pe.attribute !== he || he && pe.data !== he.data) return true;
      H++;
    }
    return s.attributesNum !== H || s.index !== k;
  }
  function g(R, N, B, k) {
    const G = {}, V = N.attributes;
    let H = 0;
    const Q = B.getAttributes();
    for (const $ in Q) if (Q[$].location >= 0) {
      let pe = V[$];
      pe === void 0 && ($ === "instanceMatrix" && R.instanceMatrix && (pe = R.instanceMatrix), $ === "instanceColor" && R.instanceColor && (pe = R.instanceColor));
      const he = {};
      he.attribute = pe, pe && pe.data && (he.data = pe.data), G[$] = he, H++;
    }
    s.attributes = G, s.attributesNum = H, s.index = k;
  }
  function E() {
    const R = s.newAttributes;
    for (let N = 0, B = R.length; N < B; N++) R[N] = 0;
  }
  function p(R) {
    h(R, 0);
  }
  function h(R, N) {
    const B = s.newAttributes, k = s.enabledAttributes, G = s.attributeDivisors;
    B[R] = 1, k[R] === 0 && (i.enableVertexAttribArray(R), k[R] = 1), G[R] !== N && (i.vertexAttribDivisor(R, N), G[R] = N);
  }
  function M() {
    const R = s.newAttributes, N = s.enabledAttributes;
    for (let B = 0, k = N.length; B < k; B++) N[B] !== R[B] && (i.disableVertexAttribArray(B), N[B] = 0);
  }
  function T(R, N, B, k, G, V, H) {
    H === true ? i.vertexAttribIPointer(R, N, B, G, V) : i.vertexAttribPointer(R, N, B, k, G, V);
  }
  function S(R, N, B, k) {
    E();
    const G = k.attributes, V = B.getAttributes(), H = N.defaultAttributeValues;
    for (const Q in V) {
      const $ = V[Q];
      if ($.location >= 0) {
        let ce = G[Q];
        if (ce === void 0 && (Q === "instanceMatrix" && R.instanceMatrix && (ce = R.instanceMatrix), Q === "instanceColor" && R.instanceColor && (ce = R.instanceColor)), ce !== void 0) {
          const pe = ce.normalized, he = ce.itemSize, Ie = e.get(ce);
          if (Ie === void 0) continue;
          const nt = Ie.buffer, tt = Ie.type, Z = Ie.bytesPerElement, ne = tt === i.INT || tt === i.UNSIGNED_INT || ce.gpuType === $s;
          if (ce.isInterleavedBufferAttribute) {
            const se = ce.data, De = se.stride, be = ce.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let Re = 0; Re < $.locationSize; Re++) h($.location + Re, se.meshPerAttribute);
              R.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = se.meshPerAttribute * se.count);
            } else for (let Re = 0; Re < $.locationSize; Re++) p($.location + Re);
            i.bindBuffer(i.ARRAY_BUFFER, nt);
            for (let Re = 0; Re < $.locationSize; Re++) T($.location + Re, he / $.locationSize, tt, pe, De * Z, (be + he / $.locationSize * Re) * Z, ne);
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let se = 0; se < $.locationSize; se++) h($.location + se, ce.meshPerAttribute);
              R.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else for (let se = 0; se < $.locationSize; se++) p($.location + se);
            i.bindBuffer(i.ARRAY_BUFFER, nt);
            for (let se = 0; se < $.locationSize; se++) T($.location + se, he / $.locationSize, tt, pe, he * Z, he / $.locationSize * se * Z, ne);
          }
        } else if (H !== void 0) {
          const pe = H[Q];
          if (pe !== void 0) switch (pe.length) {
            case 2:
              i.vertexAttrib2fv($.location, pe);
              break;
            case 3:
              i.vertexAttrib3fv($.location, pe);
              break;
            case 4:
              i.vertexAttrib4fv($.location, pe);
              break;
            default:
              i.vertexAttrib1fv($.location, pe);
          }
        }
      }
    }
    M();
  }
  function w() {
    y();
    for (const R in n) {
      const N = n[R];
      for (const B in N) {
        const k = N[B];
        for (const G in k) {
          const V = k[G];
          for (const H in V) f(V[H].object), delete V[H];
          delete k[G];
        }
      }
      delete n[R];
    }
  }
  function A(R) {
    if (n[R.id] === void 0) return;
    const N = n[R.id];
    for (const B in N) {
      const k = N[B];
      for (const G in k) {
        const V = k[G];
        for (const H in V) f(V[H].object), delete V[H];
        delete k[G];
      }
    }
    delete n[R.id];
  }
  function C(R) {
    for (const N in n) {
      const B = n[N];
      for (const k in B) {
        const G = B[k];
        if (G[R.id] === void 0) continue;
        const V = G[R.id];
        for (const H in V) f(V[H].object), delete V[H];
        delete G[R.id];
      }
    }
  }
  function x(R) {
    for (const N in n) {
      const B = n[N], k = R.isInstancedMesh === true ? R.id : 0, G = B[k];
      if (G !== void 0) {
        for (const V in G) {
          const H = G[V];
          for (const Q in H) f(H[Q].object), delete H[Q];
          delete G[V];
        }
        delete B[k], Object.keys(B).length === 0 && delete n[N];
      }
    }
  }
  function y() {
    O(), a = true, s !== r && (s = r, l(s.object));
  }
  function O() {
    r.geometry = null, r.program = null, r.wireframe = false;
  }
  return { setup: o, reset: y, resetDefaultState: O, dispose: w, releaseStatesOfGeometry: A, releaseStatesOfObject: x, releaseStatesOfProgram: C, initAttributes: E, enableAttribute: p, disableUnusedAttributes: M };
}
function Of(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, f) {
    i.drawArrays(n, l, f), t.update(f, n, 1);
  }
  function a(l, f, m) {
    m !== 0 && (i.drawArraysInstanced(n, l, f, m), t.update(f, n, m));
  }
  function o(l, f, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, f, 0, m);
    let d = 0;
    for (let g = 0; g < m; g++) d += f[g];
    t.update(d, n, 1);
  }
  function c(l, f, m, u) {
    if (m === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let g = 0; g < l.length; g++) a(l[g], f[g], u[g]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, l, 0, f, 0, u, 0, m);
      let g = 0;
      for (let E = 0; E < m; E++) g += f[E] * u[E];
      t.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Bf(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const C = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(C) {
    return !(C !== Vt && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const x = C === hn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(C !== Dt && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && C !== Xt && !x);
  }
  function c(C) {
    if (C === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const f = c(l);
  f !== l && (we("WebGLRenderer:", l, "not supported, using", f, "instead."), l = f);
  const m = t.logarithmicDepthBuffer === true, u = t.reversedDepthBuffer === true && e.has("EXT_clip_control"), d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), E = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), M = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), w = i.getParameter(i.MAX_SAMPLES), A = i.getParameter(i.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: m, reversedDepthBuffer: u, maxTextures: d, maxVertexTextures: g, maxTextureSize: E, maxCubemapSize: p, maxAttributes: h, maxVertexUniforms: M, maxVaryings: T, maxFragmentUniforms: S, maxSamples: w, samples: A };
}
function zf(i) {
  const e = this;
  let t = null, n = 0, r = false, s = false;
  const a = new In(), o = new Le(), c = { value: null, needsUpdate: false };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(m, u) {
    const d = m.length !== 0 || u || n !== 0 || r;
    return r = u, n = m.length, d;
  }, this.beginShadows = function() {
    s = true, f(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(m, u) {
    t = f(m, u, 0);
  }, this.setState = function(m, u, d) {
    const g = m.clippingPlanes, E = m.clipIntersection, p = m.clipShadows, h = i.get(m);
    if (!r || g === null || g.length === 0 || s && !p) s ? f(null) : l();
    else {
      const M = s ? 0 : n, T = M * 4;
      let S = h.clippingState || null;
      c.value = S, S = f(g, u, T, d);
      for (let w = 0; w !== T; ++w) S[w] = t[w];
      h.clippingState = S, this.numIntersection = E ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function f(m, u, d, g) {
    const E = m !== null ? m.length : 0;
    let p = null;
    if (E !== 0) {
      if (p = c.value, g !== true || p === null) {
        const h = d + E * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let T = 0, S = d; T !== E; ++T, S += 4) a.copy(m[T]).applyMatrix4(M, o), a.normal.toArray(p, S), p[S + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = true;
    }
    return e.numPlanes = E, e.numIntersection = 0, p;
  }
}
const yn = 4, ja = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Nn = 20, Vf = 256, xi = new ua(), Ja = new Ve();
let jr = null, Jr = 0, Qr = 0, es = false;
const Gf = new I();
class Qa {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const { size: a = 256, position: o = Gf } = s;
    jr = this._renderer.getRenderTarget(), Jr = this._renderer.getActiveCubeFace(), Qr = this._renderer.getActiveMipmapLevel(), es = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = true, this._sceneToCubeUV(e, n, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = no(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = to(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(jr, Jr, Qr), this._renderer.xr.enabled = es, e.scissorTest = false, ti(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Bn || e.mapping === ai ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), jr = this._renderer.getRenderTarget(), Jr = this._renderer.getActiveCubeFace(), Qr = this._renderer.getActiveMipmapLevel(), es = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Et, minFilter: Et, generateMipmaps: false, type: hn, format: Vt, colorSpace: li, depthBuffer: false }, r = eo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = eo(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Hf(s)), this._blurMaterial = Wf(s, e, t), this._ggxMaterial = kf(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new dn(new At(), e);
    this._renderer.compile(t, xi);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new Ut(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], f = [1, 1, 1, -1, -1, -1], m = this._renderer, u = m.autoClear, d = m.toneMapping;
    m.getClearColor(Ja), m.toneMapping = Yt, m.autoClear = false, m.state.buffers.depth.getReversed() && (m.setRenderTarget(r), m.clearDepth(), m.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new dn(new Pi(), new qo({ name: "PMREM.Background", side: wt, depthWrite: false, depthTest: false })));
    const E = this._backgroundBox, p = E.material;
    let h = false;
    const M = e.background;
    M ? M.isColor && (p.color.copy(M), e.background = null, h = true) : (p.color.copy(Ja), h = true);
    for (let T = 0; T < 6; T++) {
      const S = T % 3;
      S === 0 ? (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + f[T], s.y, s.z)) : S === 1 ? (c.up.set(0, 0, l[T]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + f[T], s.z)) : (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + f[T]));
      const w = this._cubeSize;
      ti(r, S * w, T > 2 ? w : 0, w, w), m.setRenderTarget(r), h && m.render(E, c), m.render(e, c);
    }
    m.toneMapping = d, m.autoClear = u, e.background = M;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Bn || e.mapping === ai;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = no()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = to());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    ti(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, xi);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const r = this._lodMeshes.length;
    for (let s = 1; s < r; s++) this._applyGGXFilter(e, s - 1, s);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const r = this._renderer, s = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), f = t / (this._lodMeshes.length - 1), m = Math.sqrt(l * l - f * f), u = 0 + l * 1.25, d = m * u, { _lodMax: g } = this, E = this._sizeLods[n], p = 3 * E * (n > g - yn ? n - g + yn : 0), h = 4 * (this._cubeSize - E);
    c.envMap.value = e.texture, c.roughness.value = d, c.mipInt.value = g - t, ti(s, p, h, 3 * E, 2 * E), r.setRenderTarget(s), r.render(o, xi), c.envMap.value = s.texture, c.roughness.value = 0, c.mipInt.value = g - n, ti(e, p, h, 3 * E, 2 * E), r.setRenderTarget(e), r.render(o, xi);
  }
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, r, "latitudinal", s), this._halfBlur(a, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && We("blur direction must be either latitudinal or longitudinal!");
    const f = 3, m = this._lodMeshes[r];
    m.material = l;
    const u = l.uniforms, d = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Nn - 1), E = s / g, p = isFinite(s) ? 1 + Math.floor(f * E) : Nn;
    p > Nn && we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);
    const h = [];
    let M = 0;
    for (let C = 0; C < Nn; ++C) {
      const x = C / E, y = Math.exp(-x * x / 2);
      h.push(y), C === 0 ? M += y : C < p && (M += 2 * y);
    }
    for (let C = 0; C < h.length; C++) h[C] = h[C] / M;
    u.envMap.value = e.texture, u.samples.value = p, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: T } = this;
    u.dTheta.value = g, u.mipInt.value = T - n;
    const S = this._sizeLods[r], w = 3 * S * (r > T - yn ? r - T + yn : 0), A = 4 * (this._cubeSize - S);
    ti(t, w, A, 3 * S, 2 * S), c.setRenderTarget(t), c.render(m, xi);
  }
}
function Hf(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - yn + 1 + ja.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - yn ? c = ja[a - i + yn - 1] : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2), f = -l, m = 1 + l, u = [f, f, m, f, m, m, f, f, m, m, f, m], d = 6, g = 6, E = 3, p = 2, h = 1, M = new Float32Array(E * g * d), T = new Float32Array(p * g * d), S = new Float32Array(h * g * d);
    for (let A = 0; A < d; A++) {
      const C = A % 3 * 2 / 3 - 1, x = A > 2 ? 0 : -1, y = [C, x, 0, C + 2 / 3, x, 0, C + 2 / 3, x + 1, 0, C, x, 0, C + 2 / 3, x + 1, 0, C, x + 1, 0];
      M.set(y, E * g * A), T.set(u, p * g * A);
      const O = [A, A, A, A, A, A];
      S.set(O, h * g * A);
    }
    const w = new At();
    w.setAttribute("position", new Kt(M, E)), w.setAttribute("uv", new Kt(T, p)), w.setAttribute("faceIndex", new Kt(S, h)), n.push(new dn(w, null)), r > yn && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function eo(i, e, t) {
  const n = new Zt(i, e, t);
  return n.texture.mapping = pr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function ti(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function kf(i, e, t) {
  return new Jt({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: Vf, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: xr(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: cn, depthTest: false, depthWrite: false });
}
function Wf(i, e, t) {
  const n = new Float32Array(Nn), r = new I(0, 1, 0);
  return new Jt({ name: "SphericalGaussianBlur", defines: { n: Nn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: xr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: cn, depthTest: false, depthWrite: false });
}
function to() {
  return new Jt({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: xr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: cn, depthTest: false, depthWrite: false });
}
function no() {
  return new Jt({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: xr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: cn, depthTest: false, depthWrite: false });
}
function xr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
class sl extends Zt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Yo(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new Pi(5, 5, 5), s = new Jt({ name: "CubemapFromEquirect", uniforms: ci(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: wt, blending: cn });
    s.uniforms.tEquirect.value = t;
    const a = new dn(r, s), o = t.minFilter;
    return t.minFilter === Fn && (t.minFilter = Et), new Kc(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t = true, n = true, r = true) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
function Xf(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, d = false) {
    return u == null ? null : d ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const d = u.mapping;
      if (d === Er || d === yr) if (e.has(u)) {
        const g = e.get(u).texture;
        return o(g, u.mapping);
      } else {
        const g = u.image;
        if (g && g.height > 0) {
          const E = new sl(g.height);
          return E.fromEquirectangularTexture(i, u), e.set(u, E), u.addEventListener("dispose", l), o(E.texture, u.mapping);
        } else return null;
      }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const d = u.mapping, g = d === Er || d === yr, E = d === Bn || d === ai;
      if (g || E) {
        let p = t.get(u);
        const h = p !== void 0 ? p.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== h) return n === null && (n = new Qa(i)), p = g ? n.fromEquirectangular(u, p) : n.fromCubemap(u, p), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), p.texture;
        if (p !== void 0) return p.texture;
        {
          const M = u.image;
          return g && M && M.height > 0 || E && M && c(M) ? (n === null && (n = new Qa(i)), p = g ? n.fromEquirectangular(u) : n.fromCubemap(u), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), u.addEventListener("dispose", f), p.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, d) {
    return d === Er ? u.mapping = Bn : d === yr && (u.mapping = ai), u;
  }
  function c(u) {
    let d = 0;
    const g = 6;
    for (let E = 0; E < g; E++) u[E] !== void 0 && d++;
    return d === g;
  }
  function l(u) {
    const d = u.target;
    d.removeEventListener("dispose", l);
    const g = e.get(d);
    g !== void 0 && (e.delete(d), g.dispose());
  }
  function f(u) {
    const d = u.target;
    d.removeEventListener("dispose", f);
    const g = t.get(d);
    g !== void 0 && (t.delete(d), g.dispose());
  }
  function m() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return { get: r, dispose: m };
}
function qf(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const r = i.getExtension(n);
    return e[n] = r, r;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const r = t(n);
    return r === null && dr("WebGLRenderer: " + n + " extension not supported."), r;
  } };
}
function Yf(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(m) {
    const u = m.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes) e.remove(u.attributes[g]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const d = s.get(u);
    d && (e.remove(d), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === true && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(m, u) {
    return r[u.id] === true || (u.addEventListener("dispose", a), r[u.id] = true, t.memory.geometries++), u;
  }
  function c(m) {
    const u = m.attributes;
    for (const d in u) e.update(u[d], i.ARRAY_BUFFER);
  }
  function l(m) {
    const u = [], d = m.index, g = m.attributes.position;
    let E = 0;
    if (g === void 0) return;
    if (d !== null) {
      const M = d.array;
      E = d.version;
      for (let T = 0, S = M.length; T < S; T += 3) {
        const w = M[T + 0], A = M[T + 1], C = M[T + 2];
        u.push(w, A, A, C, C, w);
      }
    } else {
      const M = g.array;
      E = g.version;
      for (let T = 0, S = M.length / 3 - 1; T < S; T += 3) {
        const w = T + 0, A = T + 1, C = T + 2;
        u.push(w, A, A, C, C, w);
      }
    }
    const p = new (g.count >= 65535 ? Wo : ko)(u, 1);
    p.version = E;
    const h = s.get(m);
    h && e.remove(h), s.set(m, p);
  }
  function f(m) {
    const u = s.get(m);
    if (u) {
      const d = m.index;
      d !== null && u.version < d.version && l(m);
    } else l(m);
    return s.get(m);
  }
  return { get: o, update: c, getWireframeAttribute: f };
}
function Zf(i, e, t) {
  let n;
  function r(u) {
    n = u;
  }
  let s, a;
  function o(u) {
    s = u.type, a = u.bytesPerElement;
  }
  function c(u, d) {
    i.drawElements(n, d, s, u * a), t.update(d, n, 1);
  }
  function l(u, d, g) {
    g !== 0 && (i.drawElementsInstanced(n, d, s, u * a, g), t.update(d, n, g));
  }
  function f(u, d, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, s, u, 0, g);
    let p = 0;
    for (let h = 0; h < g; h++) p += d[h];
    t.update(p, n, 1);
  }
  function m(u, d, g, E) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < u.length; h++) l(u[h] / a, d[h], E[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, d, 0, s, u, 0, E, 0, g);
      let h = 0;
      for (let M = 0; M < g; M++) h += d[M] * E[M];
      t.update(h, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = f, this.renderMultiDrawInstances = m;
}
function Kf(i) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        We("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: r, update: n };
}
function $f(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new at();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, f = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, m = f !== void 0 ? f.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== m) {
      let y = function() {
        C.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      u !== void 0 && u.texture.dispose();
      const d = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, E = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], M = o.morphAttributes.color || [];
      let T = 0;
      d === true && (T = 1), g === true && (T = 2), E === true && (T = 3);
      let S = o.attributes.position.count * T, w = 1;
      S > e.maxTextureSize && (w = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
      const A = new Float32Array(S * w * 4 * m), C = new zo(A, S, w, m);
      C.type = Xt, C.needsUpdate = true;
      const x = T * 4;
      for (let O = 0; O < m; O++) {
        const R = p[O], N = h[O], B = M[O], k = S * w * 4 * O;
        for (let G = 0; G < R.count; G++) {
          const V = G * x;
          d === true && (r.fromBufferAttribute(R, G), A[k + V + 0] = r.x, A[k + V + 1] = r.y, A[k + V + 2] = r.z, A[k + V + 3] = 0), g === true && (r.fromBufferAttribute(N, G), A[k + V + 4] = r.x, A[k + V + 5] = r.y, A[k + V + 6] = r.z, A[k + V + 7] = 0), E === true && (r.fromBufferAttribute(B, G), A[k + V + 8] = r.x, A[k + V + 9] = r.y, A[k + V + 10] = r.z, A[k + V + 11] = B.itemSize === 4 ? r.w : 1);
        }
      }
      u = { count: m, texture: C, size: new ze(S, w) }, n.set(o, u), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let d = 0;
      for (let E = 0; E < l.length; E++) d += l[E];
      const g = o.morphTargetsRelative ? 1 : 1 - d;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", g), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return { update: s };
}
function jf(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const f = r.render.frame, m = l.geometry, u = e.get(l, m);
    if (s.get(u) !== f && (e.update(u), s.set(u, f)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === false && l.addEventListener("dispose", c), s.get(l) !== f && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, f))), l.isSkinnedMesh) {
      const d = l.skeleton;
      s.get(d) !== f && (d.update(), s.set(d, f));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const f = l.target;
    f.removeEventListener("dispose", c), n.releaseStatesOfObject(f), t.remove(f.instanceMatrix), f.instanceColor !== null && t.remove(f.instanceColor);
  }
  return { update: a, dispose: o };
}
const Jf = { [Eo]: "LINEAR_TONE_MAPPING", [yo]: "REINHARD_TONE_MAPPING", [To]: "CINEON_TONE_MAPPING", [bo]: "ACES_FILMIC_TONE_MAPPING", [wo]: "AGX_TONE_MAPPING", [Ro]: "NEUTRAL_TONE_MAPPING", [Ao]: "CUSTOM_TONE_MAPPING" };
function Qf(i, e, t, n, r) {
  const s = new Zt(e, t, { type: i, depthBuffer: n, stencilBuffer: r }), a = new Zt(e, t, { type: hn, depthBuffer: false, stencilBuffer: false }), o = new At();
  o.setAttribute("position", new rt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new rt([0, 2, 0, 0, 2, 0], 2));
  const c = new Wc({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`, fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`, depthTest: false, depthWrite: false }), l = new dn(o, c), f = new ua(-1, 1, 1, -1, 0, 1);
  let m = null, u = null, d = false, g, E = null, p = [], h = false;
  this.setSize = function(M, T) {
    s.setSize(M, T), a.setSize(M, T);
    for (let S = 0; S < p.length; S++) {
      const w = p[S];
      w.setSize && w.setSize(M, T);
    }
  }, this.setEffects = function(M) {
    p = M, h = p.length > 0 && p[0].isRenderPass === true;
    const T = s.width, S = s.height;
    for (let w = 0; w < p.length; w++) {
      const A = p[w];
      A.setSize && A.setSize(T, S);
    }
  }, this.begin = function(M, T) {
    if (d || M.toneMapping === Yt && p.length === 0) return false;
    if (E = T, T !== null) {
      const S = T.width, w = T.height;
      (s.width !== S || s.height !== w) && this.setSize(S, w);
    }
    return h === false && M.setRenderTarget(s), g = M.toneMapping, M.toneMapping = Yt, true;
  }, this.hasRenderPass = function() {
    return h;
  }, this.end = function(M, T) {
    M.toneMapping = g, d = true;
    let S = s, w = a;
    for (let A = 0; A < p.length; A++) {
      const C = p[A];
      if (C.enabled !== false && (C.render(M, w, S, T), C.needsSwap !== false)) {
        const x = S;
        S = w, w = x;
      }
    }
    if (m !== M.outputColorSpace || u !== M.toneMapping) {
      m = M.outputColorSpace, u = M.toneMapping, c.defines = {}, He.getTransfer(m) === Ze && (c.defines.SRGB_TRANSFER = "");
      const A = Jf[u];
      A && (c.defines[A] = ""), c.needsUpdate = true;
    }
    c.uniforms.tDiffuse.value = S.texture, M.setRenderTarget(E), M.render(l, f), E = null, d = false;
  }, this.isCompositing = function() {
    return d;
  }, this.dispose = function() {
    s.dispose(), a.dispose(), o.dispose(), c.dispose();
  };
}
const al = new bt(), Ys = new Ri(1, 1), ol = new zo(), ll = new Mc(), cl = new Yo(), io = [], ro = [], so = new Float32Array(16), ao = new Float32Array(9), oo = new Float32Array(4);
function di(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = io[r];
  if (s === void 0 && (s = new Float32Array(r), io[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, i[a].toArray(s, o);
  }
  return s;
}
function ht(i, e) {
  if (i.length !== e.length) return false;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return false;
  return true;
}
function ft(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function vr(i, e) {
  let t = ro[e];
  t === void 0 && (t = new Int32Array(e), ro[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function ed(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function td(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e)) return;
    i.uniform2fv(this.addr, e), ft(t, e);
  }
}
function nd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ht(t, e)) return;
    i.uniform3fv(this.addr, e), ft(t, e);
  }
}
function id(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e)) return;
    i.uniform4fv(this.addr, e), ft(t, e);
  }
}
function rd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    i.uniformMatrix2fv(this.addr, false, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    oo.set(n), i.uniformMatrix2fv(this.addr, false, oo), ft(t, n);
  }
}
function sd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    i.uniformMatrix3fv(this.addr, false, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    ao.set(n), i.uniformMatrix3fv(this.addr, false, ao), ft(t, n);
  }
}
function ad(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    i.uniformMatrix4fv(this.addr, false, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    so.set(n), i.uniformMatrix4fv(this.addr, false, so), ft(t, n);
  }
}
function od(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function ld(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e)) return;
    i.uniform2iv(this.addr, e), ft(t, e);
  }
}
function cd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ht(t, e)) return;
    i.uniform3iv(this.addr, e), ft(t, e);
  }
}
function ud(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e)) return;
    i.uniform4iv(this.addr, e), ft(t, e);
  }
}
function hd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function fd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e)) return;
    i.uniform2uiv(this.addr, e), ft(t, e);
  }
}
function dd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ht(t, e)) return;
    i.uniform3uiv(this.addr, e), ft(t, e);
  }
}
function pd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e)) return;
    i.uniform4uiv(this.addr, e), ft(t, e);
  }
}
function md(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Ys.compareFunction = t.isReversedDepthBuffer() ? ia : na, s = Ys) : s = al, t.setTexture2D(e || s, r);
}
function _d(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ll, r);
}
function gd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || cl, r);
}
function xd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || ol, r);
}
function vd(i) {
  switch (i) {
    case 5126:
      return ed;
    case 35664:
      return td;
    case 35665:
      return nd;
    case 35666:
      return id;
    case 35674:
      return rd;
    case 35675:
      return sd;
    case 35676:
      return ad;
    case 5124:
    case 35670:
      return od;
    case 35667:
    case 35671:
      return ld;
    case 35668:
    case 35672:
      return cd;
    case 35669:
    case 35673:
      return ud;
    case 5125:
      return hd;
    case 36294:
      return fd;
    case 36295:
      return dd;
    case 36296:
      return pd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return md;
    case 35679:
    case 36299:
    case 36307:
      return _d;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return gd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return xd;
  }
}
function Md(i, e) {
  i.uniform1fv(this.addr, e);
}
function Sd(i, e) {
  const t = di(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Ed(i, e) {
  const t = di(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function yd(i, e) {
  const t = di(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Td(i, e) {
  const t = di(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, t);
}
function bd(i, e) {
  const t = di(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, t);
}
function Ad(i, e) {
  const t = di(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, t);
}
function wd(i, e) {
  i.uniform1iv(this.addr, e);
}
function Rd(i, e) {
  i.uniform2iv(this.addr, e);
}
function Cd(i, e) {
  i.uniform3iv(this.addr, e);
}
function Pd(i, e) {
  i.uniform4iv(this.addr, e);
}
function Dd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Ld(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Id(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Ud(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Nd(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = Ys : a = al;
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || a, s[o]);
}
function Fd(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || ll, s[a]);
}
function Od(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || cl, s[a]);
}
function Bd(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || ol, s[a]);
}
function zd(i) {
  switch (i) {
    case 5126:
      return Md;
    case 35664:
      return Sd;
    case 35665:
      return Ed;
    case 35666:
      return yd;
    case 35674:
      return Td;
    case 35675:
      return bd;
    case 35676:
      return Ad;
    case 5124:
    case 35670:
      return wd;
    case 35667:
    case 35671:
      return Rd;
    case 35668:
    case 35672:
      return Cd;
    case 35669:
    case 35673:
      return Pd;
    case 5125:
      return Dd;
    case 36294:
      return Ld;
    case 36295:
      return Id;
    case 36296:
      return Ud;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Nd;
    case 35679:
    case 36299:
    case 36307:
      return Fd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Od;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Bd;
  }
}
class Vd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = vd(t.type);
  }
}
class Gd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = zd(t.type);
  }
}
class Hd {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ts = /(\w+)(\])?(\[|\.)?/g;
function lo(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function kd(i, e, t) {
  const n = i.name, r = n.length;
  for (ts.lastIndex = 0; ; ) {
    const s = ts.exec(n), a = ts.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      lo(t, l === void 0 ? new Vd(o, i, e) : new Gd(o, i, e));
      break;
    } else {
      let m = t.map[o];
      m === void 0 && (m = new Hd(o), lo(t, m)), t = m;
    }
  }
}
class ur {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), c = e.getUniformLocation(t, o.name);
      kd(o, c, this);
    }
    const r = [], s = [];
    for (const a of this.seq) a.type === e.SAMPLER_2D_SHADOW || a.type === e.SAMPLER_CUBE_SHADOW || a.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(a) : s.push(a);
    r.length > 0 && (this.seq = r.concat(s));
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== false && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function co(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Wd = 37297;
let Xd = 0;
function qd(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const uo = new Le();
function Yd(i) {
  He._getMatrix(uo, He.workingColorSpace, i);
  const e = `mat3( ${uo.elements.map((t) => t.toFixed(4))} )`;
  switch (He.getTransfer(i)) {
    case hr:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return we("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function ho(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + qd(i.getShaderSource(e), o);
  } else return s;
}
function Zd(i, e) {
  const t = Yd(e);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
const Kd = { [Eo]: "Linear", [yo]: "Reinhard", [To]: "Cineon", [bo]: "ACESFilmic", [wo]: "AgX", [Ro]: "Neutral", [Ao]: "Custom" };
function $d(i, e) {
  const t = Kd[e];
  return t === void 0 ? (we("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const rr = new I();
function jd() {
  He.getLuminanceCoefficients(rr);
  const i = rr.x.toFixed(4), e = rr.y.toFixed(4), t = rr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function Jd(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Si).join(`
`);
}
function Qd(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function ep(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: i.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function Si(i) {
  return i !== "";
}
function fo(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function po(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const tp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Zs(i) {
  return i.replace(tp, ip);
}
const np = /* @__PURE__ */ new Map();
function ip(i, e) {
  let t = Ue[e];
  if (t === void 0) {
    const n = np.get(e);
    if (n !== void 0) t = Ue[n], we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Zs(t);
}
const rp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function mo(i) {
  return i.replace(rp, sp);
}
function sp(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function _o(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const ap = { [sr]: "SHADOWMAP_TYPE_PCF", [Mi]: "SHADOWMAP_TYPE_VSM" };
function op(i) {
  return ap[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const lp = { [Bn]: "ENVMAP_TYPE_CUBE", [ai]: "ENVMAP_TYPE_CUBE", [pr]: "ENVMAP_TYPE_CUBE_UV" };
function cp(i) {
  return i.envMap === false ? "ENVMAP_TYPE_CUBE" : lp[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const up = { [ai]: "ENVMAP_MODE_REFRACTION" };
function hp(i) {
  return i.envMap === false ? "ENVMAP_MODE_REFLECTION" : up[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const fp = { [So]: "ENVMAP_BLENDING_MULTIPLY", [Bl]: "ENVMAP_BLENDING_MIX", [zl]: "ENVMAP_BLENDING_ADD" };
function dp(i) {
  return i.envMap === false ? "ENVMAP_BLENDING_NONE" : fp[i.combine] || "ENVMAP_BLENDING_NONE";
}
function pp(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function mp(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = op(t), l = cp(t), f = hp(t), m = dp(t), u = pp(t), d = Jd(t), g = Qd(s), E = r.createProgram();
  let p, h, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Si).join(`
`), p.length > 0 && (p += `
`), h = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Si).join(`
`), h.length > 0 && (h += `
`)) : (p = [_o(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + f : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Si).join(`
`), h = [_o(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + f : "", t.envMap ? "#define " + m : "", u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "", u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "", u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Yt ? "#define TONE_MAPPING" : "", t.toneMapping !== Yt ? Ue.tonemapping_pars_fragment : "", t.toneMapping !== Yt ? $d("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ue.colorspace_pars_fragment, Zd("linearToOutputTexel", t.outputColorSpace), jd(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Si).join(`
`)), a = Zs(a), a = fo(a, t), a = po(a, t), o = Zs(o), o = fo(o, t), o = po(o, t), a = mo(a), o = mo(o), t.isRawShaderMaterial !== true && (M = `#version 300 es
`, p = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, h = ["#define varying in", t.glslVersion === Aa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Aa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
  const T = M + p + a, S = M + h + o, w = co(r, r.VERTEX_SHADER, T), A = co(r, r.FRAGMENT_SHADER, S);
  r.attachShader(E, w), r.attachShader(E, A), t.index0AttributeName !== void 0 ? r.bindAttribLocation(E, 0, t.index0AttributeName) : t.morphTargets === true && r.bindAttribLocation(E, 0, "position"), r.linkProgram(E);
  function C(R) {
    if (i.debug.checkShaderErrors) {
      const N = r.getProgramInfoLog(E) || "", B = r.getShaderInfoLog(w) || "", k = r.getShaderInfoLog(A) || "", G = N.trim(), V = B.trim(), H = k.trim();
      let Q = true, $ = true;
      if (r.getProgramParameter(E, r.LINK_STATUS) === false) if (Q = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, E, w, A);
      else {
        const ce = ho(r, w, "vertex"), pe = ho(r, A, "fragment");
        We("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(E, r.VALIDATE_STATUS) + `

Material Name: ` + R.name + `
Material Type: ` + R.type + `

Program Info Log: ` + G + `
` + ce + `
` + pe);
      }
      else G !== "" ? we("WebGLProgram: Program Info Log:", G) : (V === "" || H === "") && ($ = false);
      $ && (R.diagnostics = { runnable: Q, programLog: G, vertexShader: { log: V, prefix: p }, fragmentShader: { log: H, prefix: h } });
    }
    r.deleteShader(w), r.deleteShader(A), x = new ur(r, E), y = ep(r, E);
  }
  let x;
  this.getUniforms = function() {
    return x === void 0 && C(this), x;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && C(this), y;
  };
  let O = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return O === false && (O = r.getProgramParameter(E, Wd)), O;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(E), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Xd++, this.cacheKey = e, this.usedTimes = 1, this.program = E, this.vertexShader = w, this.fragmentShader = A, this;
}
let _p = 0;
class gp {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === false && (a.add(r), r.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new xp(e), t.set(e, n)), n;
  }
}
class xp {
  constructor(e) {
    this.id = _p++, this.code = e, this.usedTimes = 0;
  }
}
function vp(i, e, t, n, r, s) {
  const a = new Vo(), o = new gp(), c = /* @__PURE__ */ new Set(), l = [], f = /* @__PURE__ */ new Map(), m = n.logarithmicDepthBuffer;
  let u = n.precision;
  const d = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function g(x) {
    return c.add(x), x === 0 ? "uv" : `uv${x}`;
  }
  function E(x, y, O, R, N) {
    const B = R.fog, k = N.geometry, G = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? R.environment : null, V = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap, H = e.get(x.envMap || G, V), Q = H && H.mapping === pr ? H.image.height : null, $ = d[x.type];
    x.precision !== null && (u = n.getMaxPrecision(x.precision), u !== x.precision && we("WebGLProgram.getParameters:", x.precision, "not supported, using", u, "instead."));
    const ce = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, pe = ce !== void 0 ? ce.length : 0;
    let he = 0;
    k.morphAttributes.position !== void 0 && (he = 1), k.morphAttributes.normal !== void 0 && (he = 2), k.morphAttributes.color !== void 0 && (he = 3);
    let Ie, nt, tt, Z;
    if ($) {
      const Ye = Wt[$];
      Ie = Ye.vertexShader, nt = Ye.fragmentShader;
    } else Ie = x.vertexShader, nt = x.fragmentShader, o.update(x), tt = o.getVertexShaderID(x), Z = o.getFragmentShaderID(x);
    const ne = i.getRenderTarget(), se = i.state.buffers.depth.getReversed(), De = N.isInstancedMesh === true, be = N.isBatchedMesh === true, Re = !!x.map, dt = !!x.matcap, Ge = !!H, qe = !!x.aoMap, je = !!x.lightMap, Fe = !!x.bumpMap, ot = !!x.normalMap, P = !!x.displacementMap, ct = !!x.emissiveMap, Xe = !!x.metalnessMap, Qe = !!x.roughnessMap, Me = x.anisotropy > 0, b = x.clearcoat > 0, _ = x.dispersion > 0, L = x.iridescence > 0, Y = x.sheen > 0, K = x.transmission > 0, q = Me && !!x.anisotropyMap, me = b && !!x.clearcoatMap, ie = b && !!x.clearcoatNormalMap, Te = b && !!x.clearcoatRoughnessMap, Ae = L && !!x.iridescenceMap, j = L && !!x.iridescenceThicknessMap, ee = Y && !!x.sheenColorMap, _e = Y && !!x.sheenRoughnessMap, xe = !!x.specularMap, ue = !!x.specularColorMap, Oe = !!x.specularIntensityMap, D = K && !!x.transmissionMap, re = K && !!x.thicknessMap, te = !!x.gradientMap, de = !!x.alphaMap, J = x.alphaTest > 0, X = !!x.alphaHash, ge = !!x.extensions;
    let Ce = Yt;
    x.toneMapped && (ne === null || ne.isXRRenderTarget === true) && (Ce = i.toneMapping);
    const et = { shaderID: $, shaderType: x.type, shaderName: x.name, vertexShader: Ie, fragmentShader: nt, defines: x.defines, customVertexShaderID: tt, customFragmentShaderID: Z, isRawShaderMaterial: x.isRawShaderMaterial === true, glslVersion: x.glslVersion, precision: u, batching: be, batchingColor: be && N._colorsTexture !== null, instancing: De, instancingColor: De && N.instanceColor !== null, instancingMorph: De && N.morphTexture !== null, outputColorSpace: ne === null ? i.outputColorSpace : ne.isXRRenderTarget === true ? ne.texture.colorSpace : li, alphaToCoverage: !!x.alphaToCoverage, map: Re, matcap: dt, envMap: Ge, envMapMode: Ge && H.mapping, envMapCubeUVHeight: Q, aoMap: qe, lightMap: je, bumpMap: Fe, normalMap: ot, displacementMap: P, emissiveMap: ct, normalMapObjectSpace: ot && x.normalMapType === Hl, normalMapTangentSpace: ot && x.normalMapType === Oo, metalnessMap: Xe, roughnessMap: Qe, anisotropy: Me, anisotropyMap: q, clearcoat: b, clearcoatMap: me, clearcoatNormalMap: ie, clearcoatRoughnessMap: Te, dispersion: _, iridescence: L, iridescenceMap: Ae, iridescenceThicknessMap: j, sheen: Y, sheenColorMap: ee, sheenRoughnessMap: _e, specularMap: xe, specularColorMap: ue, specularIntensityMap: Oe, transmission: K, transmissionMap: D, thicknessMap: re, gradientMap: te, opaque: x.transparent === false && x.blending === ii && x.alphaToCoverage === false, alphaMap: de, alphaTest: J, alphaHash: X, combine: x.combine, mapUv: Re && g(x.map.channel), aoMapUv: qe && g(x.aoMap.channel), lightMapUv: je && g(x.lightMap.channel), bumpMapUv: Fe && g(x.bumpMap.channel), normalMapUv: ot && g(x.normalMap.channel), displacementMapUv: P && g(x.displacementMap.channel), emissiveMapUv: ct && g(x.emissiveMap.channel), metalnessMapUv: Xe && g(x.metalnessMap.channel), roughnessMapUv: Qe && g(x.roughnessMap.channel), anisotropyMapUv: q && g(x.anisotropyMap.channel), clearcoatMapUv: me && g(x.clearcoatMap.channel), clearcoatNormalMapUv: ie && g(x.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Te && g(x.clearcoatRoughnessMap.channel), iridescenceMapUv: Ae && g(x.iridescenceMap.channel), iridescenceThicknessMapUv: j && g(x.iridescenceThicknessMap.channel), sheenColorMapUv: ee && g(x.sheenColorMap.channel), sheenRoughnessMapUv: _e && g(x.sheenRoughnessMap.channel), specularMapUv: xe && g(x.specularMap.channel), specularColorMapUv: ue && g(x.specularColorMap.channel), specularIntensityMapUv: Oe && g(x.specularIntensityMap.channel), transmissionMapUv: D && g(x.transmissionMap.channel), thicknessMapUv: re && g(x.thicknessMap.channel), alphaMapUv: de && g(x.alphaMap.channel), vertexTangents: !!k.attributes.tangent && (ot || Me), vertexColors: x.vertexColors, vertexAlphas: x.vertexColors === true && !!k.attributes.color && k.attributes.color.itemSize === 4, pointsUvs: N.isPoints === true && !!k.attributes.uv && (Re || de), fog: !!B, useFog: x.fog === true, fogExp2: !!B && B.isFogExp2, flatShading: x.wireframe === false && (x.flatShading === true || k.attributes.normal === void 0 && ot === false && (x.isMeshLambertMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isMeshPhysicalMaterial)), sizeAttenuation: x.sizeAttenuation === true, logarithmicDepthBuffer: m, reversedDepthBuffer: se, skinning: N.isSkinnedMesh === true, morphTargets: k.morphAttributes.position !== void 0, morphNormals: k.morphAttributes.normal !== void 0, morphColors: k.morphAttributes.color !== void 0, morphTargetsCount: pe, morphTextureStride: he, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numClippingPlanes: s.numPlanes, numClipIntersection: s.numIntersection, dithering: x.dithering, shadowMapEnabled: i.shadowMap.enabled && O.length > 0, shadowMapType: i.shadowMap.type, toneMapping: Ce, decodeVideoTexture: Re && x.map.isVideoTexture === true && He.getTransfer(x.map.colorSpace) === Ze, decodeVideoTextureEmissive: ct && x.emissiveMap.isVideoTexture === true && He.getTransfer(x.emissiveMap.colorSpace) === Ze, premultipliedAlpha: x.premultipliedAlpha, doubleSided: x.side === on, flipSided: x.side === wt, useDepthPacking: x.depthPacking >= 0, depthPacking: x.depthPacking || 0, index0AttributeName: x.index0AttributeName, extensionClipCullDistance: ge && x.extensions.clipCullDistance === true && t.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (ge && x.extensions.multiDraw === true || be) && t.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"), customProgramCacheKey: x.customProgramCacheKey() };
    return et.vertexUv1s = c.has(1), et.vertexUv2s = c.has(2), et.vertexUv3s = c.has(3), c.clear(), et;
  }
  function p(x) {
    const y = [];
    if (x.shaderID ? y.push(x.shaderID) : (y.push(x.customVertexShaderID), y.push(x.customFragmentShaderID)), x.defines !== void 0) for (const O in x.defines) y.push(O), y.push(x.defines[O]);
    return x.isRawShaderMaterial === false && (h(y, x), M(y, x), y.push(i.outputColorSpace)), y.push(x.customProgramCacheKey), y.join();
  }
  function h(x, y) {
    x.push(y.precision), x.push(y.outputColorSpace), x.push(y.envMapMode), x.push(y.envMapCubeUVHeight), x.push(y.mapUv), x.push(y.alphaMapUv), x.push(y.lightMapUv), x.push(y.aoMapUv), x.push(y.bumpMapUv), x.push(y.normalMapUv), x.push(y.displacementMapUv), x.push(y.emissiveMapUv), x.push(y.metalnessMapUv), x.push(y.roughnessMapUv), x.push(y.anisotropyMapUv), x.push(y.clearcoatMapUv), x.push(y.clearcoatNormalMapUv), x.push(y.clearcoatRoughnessMapUv), x.push(y.iridescenceMapUv), x.push(y.iridescenceThicknessMapUv), x.push(y.sheenColorMapUv), x.push(y.sheenRoughnessMapUv), x.push(y.specularMapUv), x.push(y.specularColorMapUv), x.push(y.specularIntensityMapUv), x.push(y.transmissionMapUv), x.push(y.thicknessMapUv), x.push(y.combine), x.push(y.fogExp2), x.push(y.sizeAttenuation), x.push(y.morphTargetsCount), x.push(y.morphAttributeCount), x.push(y.numDirLights), x.push(y.numPointLights), x.push(y.numSpotLights), x.push(y.numSpotLightMaps), x.push(y.numHemiLights), x.push(y.numRectAreaLights), x.push(y.numDirLightShadows), x.push(y.numPointLightShadows), x.push(y.numSpotLightShadows), x.push(y.numSpotLightShadowsWithMaps), x.push(y.numLightProbes), x.push(y.shadowMapType), x.push(y.toneMapping), x.push(y.numClippingPlanes), x.push(y.numClipIntersection), x.push(y.depthPacking);
  }
  function M(x, y) {
    a.disableAll(), y.instancing && a.enable(0), y.instancingColor && a.enable(1), y.instancingMorph && a.enable(2), y.matcap && a.enable(3), y.envMap && a.enable(4), y.normalMapObjectSpace && a.enable(5), y.normalMapTangentSpace && a.enable(6), y.clearcoat && a.enable(7), y.iridescence && a.enable(8), y.alphaTest && a.enable(9), y.vertexColors && a.enable(10), y.vertexAlphas && a.enable(11), y.vertexUv1s && a.enable(12), y.vertexUv2s && a.enable(13), y.vertexUv3s && a.enable(14), y.vertexTangents && a.enable(15), y.anisotropy && a.enable(16), y.alphaHash && a.enable(17), y.batching && a.enable(18), y.dispersion && a.enable(19), y.batchingColor && a.enable(20), y.gradientMap && a.enable(21), x.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.reversedDepthBuffer && a.enable(4), y.skinning && a.enable(5), y.morphTargets && a.enable(6), y.morphNormals && a.enable(7), y.morphColors && a.enable(8), y.premultipliedAlpha && a.enable(9), y.shadowMapEnabled && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), y.decodeVideoTextureEmissive && a.enable(20), y.alphaToCoverage && a.enable(21), x.push(a.mask);
  }
  function T(x) {
    const y = d[x.type];
    let O;
    if (y) {
      const R = Wt[y];
      O = Gc.clone(R.uniforms);
    } else O = x.uniforms;
    return O;
  }
  function S(x, y) {
    let O = f.get(y);
    return O !== void 0 ? ++O.usedTimes : (O = new mp(i, y, x, r), l.push(O), f.set(y, O)), O;
  }
  function w(x) {
    if (--x.usedTimes === 0) {
      const y = l.indexOf(x);
      l[y] = l[l.length - 1], l.pop(), f.delete(x.cacheKey), x.destroy();
    }
  }
  function A(x) {
    o.remove(x);
  }
  function C() {
    o.dispose();
  }
  return { getParameters: E, getProgramCacheKey: p, getUniforms: T, acquireProgram: S, releaseProgram: w, releaseShaderCache: A, programs: l, dispose: C };
}
function Mp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function Sp(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function go(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function xo() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let d = 0;
    return u.isInstancedMesh && (d += 2), u.isSkinnedMesh && (d += 1), d;
  }
  function o(u, d, g, E, p, h) {
    let M = i[e];
    return M === void 0 ? (M = { id: u.id, object: u, geometry: d, material: g, materialVariant: a(u), groupOrder: E, renderOrder: u.renderOrder, z: p, group: h }, i[e] = M) : (M.id = u.id, M.object = u, M.geometry = d, M.material = g, M.materialVariant = a(u), M.groupOrder = E, M.renderOrder = u.renderOrder, M.z = p, M.group = h), e++, M;
  }
  function c(u, d, g, E, p, h) {
    const M = o(u, d, g, E, p, h);
    g.transmission > 0 ? n.push(M) : g.transparent === true ? r.push(M) : t.push(M);
  }
  function l(u, d, g, E, p, h) {
    const M = o(u, d, g, E, p, h);
    g.transmission > 0 ? n.unshift(M) : g.transparent === true ? r.unshift(M) : t.unshift(M);
  }
  function f(u, d) {
    t.length > 1 && t.sort(u || Sp), n.length > 1 && n.sort(d || go), r.length > 1 && r.sort(d || go);
  }
  function m() {
    for (let u = e, d = i.length; u < d; u++) {
      const g = i[u];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: r, init: s, push: c, unshift: l, finish: m, sort: f };
}
function Ep() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new xo(), i.set(n, [a])) : r >= s.length ? (a = new xo(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function yp() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new I(), color: new Ve() };
        break;
      case "SpotLight":
        t = { position: new I(), direction: new I(), color: new Ve(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new I(), color: new Ve(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new I(), skyColor: new Ve(), groundColor: new Ve() };
        break;
      case "RectAreaLight":
        t = { color: new Ve(), position: new I(), halfWidth: new I(), halfHeight: new I() };
        break;
    }
    return i[e.id] = t, t;
  } };
}
function Tp() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ze() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ze() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ze(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[e.id] = t, t;
  } };
}
let bp = 0;
function Ap(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function wp(i) {
  const e = new yp(), t = Tp(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let l = 0; l < 9; l++) n.probe.push(new I());
  const r = new I(), s = new it(), a = new it();
  function o(l) {
    let f = 0, m = 0, u = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let d = 0, g = 0, E = 0, p = 0, h = 0, M = 0, T = 0, S = 0, w = 0, A = 0, C = 0;
    l.sort(Ap);
    for (let y = 0, O = l.length; y < O; y++) {
      const R = l[y], N = R.color, B = R.intensity, k = R.distance;
      let G = null;
      if (R.shadow && R.shadow.map && (R.shadow.map.texture.format === oi ? G = R.shadow.map.texture : G = R.shadow.map.depthTexture || R.shadow.map.texture), R.isAmbientLight) f += N.r * B, m += N.g * B, u += N.b * B;
      else if (R.isLightProbe) {
        for (let V = 0; V < 9; V++) n.probe[V].addScaledVector(R.sh.coefficients[V], B);
        C++;
      } else if (R.isDirectionalLight) {
        const V = e.get(R);
        if (V.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow) {
          const H = R.shadow, Q = t.get(R);
          Q.shadowIntensity = H.intensity, Q.shadowBias = H.bias, Q.shadowNormalBias = H.normalBias, Q.shadowRadius = H.radius, Q.shadowMapSize = H.mapSize, n.directionalShadow[d] = Q, n.directionalShadowMap[d] = G, n.directionalShadowMatrix[d] = R.shadow.matrix, M++;
        }
        n.directional[d] = V, d++;
      } else if (R.isSpotLight) {
        const V = e.get(R);
        V.position.setFromMatrixPosition(R.matrixWorld), V.color.copy(N).multiplyScalar(B), V.distance = k, V.coneCos = Math.cos(R.angle), V.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), V.decay = R.decay, n.spot[E] = V;
        const H = R.shadow;
        if (R.map && (n.spotLightMap[w] = R.map, w++, H.updateMatrices(R), R.castShadow && A++), n.spotLightMatrix[E] = H.matrix, R.castShadow) {
          const Q = t.get(R);
          Q.shadowIntensity = H.intensity, Q.shadowBias = H.bias, Q.shadowNormalBias = H.normalBias, Q.shadowRadius = H.radius, Q.shadowMapSize = H.mapSize, n.spotShadow[E] = Q, n.spotShadowMap[E] = G, S++;
        }
        E++;
      } else if (R.isRectAreaLight) {
        const V = e.get(R);
        V.color.copy(N).multiplyScalar(B), V.halfWidth.set(R.width * 0.5, 0, 0), V.halfHeight.set(0, R.height * 0.5, 0), n.rectArea[p] = V, p++;
      } else if (R.isPointLight) {
        const V = e.get(R);
        if (V.color.copy(R.color).multiplyScalar(R.intensity), V.distance = R.distance, V.decay = R.decay, R.castShadow) {
          const H = R.shadow, Q = t.get(R);
          Q.shadowIntensity = H.intensity, Q.shadowBias = H.bias, Q.shadowNormalBias = H.normalBias, Q.shadowRadius = H.radius, Q.shadowMapSize = H.mapSize, Q.shadowCameraNear = H.camera.near, Q.shadowCameraFar = H.camera.far, n.pointShadow[g] = Q, n.pointShadowMap[g] = G, n.pointShadowMatrix[g] = R.shadow.matrix, T++;
        }
        n.point[g] = V, g++;
      } else if (R.isHemisphereLight) {
        const V = e.get(R);
        V.skyColor.copy(R.color).multiplyScalar(B), V.groundColor.copy(R.groundColor).multiplyScalar(B), n.hemi[h] = V, h++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1, n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1, n.rectAreaLTC2 = ae.LTC_HALF_2)), n.ambient[0] = f, n.ambient[1] = m, n.ambient[2] = u;
    const x = n.hash;
    (x.directionalLength !== d || x.pointLength !== g || x.spotLength !== E || x.rectAreaLength !== p || x.hemiLength !== h || x.numDirectionalShadows !== M || x.numPointShadows !== T || x.numSpotShadows !== S || x.numSpotMaps !== w || x.numLightProbes !== C) && (n.directional.length = d, n.spot.length = E, n.rectArea.length = p, n.point.length = g, n.hemi.length = h, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = S + w - A, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = C, x.directionalLength = d, x.pointLength = g, x.spotLength = E, x.rectAreaLength = p, x.hemiLength = h, x.numDirectionalShadows = M, x.numPointShadows = T, x.numSpotShadows = S, x.numSpotMaps = w, x.numLightProbes = C, n.version = bp++);
  }
  function c(l, f) {
    let m = 0, u = 0, d = 0, g = 0, E = 0;
    const p = f.matrixWorldInverse;
    for (let h = 0, M = l.length; h < M; h++) {
      const T = l[h];
      if (T.isDirectionalLight) {
        const S = n.directional[m];
        S.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(p), m++;
      } else if (T.isSpotLight) {
        const S = n.spot[d];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(p), d++;
      } else if (T.isRectAreaLight) {
        const S = n.rectArea[g];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(p), a.identity(), s.copy(T.matrixWorld), s.premultiply(p), a.extractRotation(s), S.halfWidth.set(T.width * 0.5, 0, 0), S.halfHeight.set(0, T.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), g++;
      } else if (T.isPointLight) {
        const S = n.point[u];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(p), u++;
      } else if (T.isHemisphereLight) {
        const S = n.hemi[E];
        S.direction.setFromMatrixPosition(T.matrixWorld), S.direction.transformDirection(p), E++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function vo(i) {
  const e = new wp(i), t = [], n = [];
  function r(f) {
    l.camera = f, t.length = 0, n.length = 0;
  }
  function s(f) {
    t.push(f);
  }
  function a(f) {
    n.push(f);
  }
  function o() {
    e.setup(t);
  }
  function c(f) {
    e.setupView(t, f);
  }
  const l = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: r, state: l, setupLights: o, setupLightsView: c, pushLight: s, pushShadow: a };
}
function Rp(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new vo(i), e.set(r, [o])) : s >= a.length ? (o = new vo(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const Cp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Pp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, Dp = [new I(1, 0, 0), new I(-1, 0, 0), new I(0, 1, 0), new I(0, -1, 0), new I(0, 0, 1), new I(0, 0, -1)], Lp = [new I(0, -1, 0), new I(0, -1, 0), new I(0, 0, 1), new I(0, 0, -1), new I(0, -1, 0), new I(0, -1, 0)], Mo = new it(), vi = new I(), ns = new I();
function Ip(i, e, t) {
  let n = new aa();
  const r = new ze(), s = new ze(), a = new at(), o = new Xc(), c = new qc(), l = {}, f = t.maxTextureSize, m = { [Tn]: wt, [wt]: Tn, [on]: on }, u = new Jt({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new ze() }, radius: { value: 4 } }, vertexShader: Cp, fragmentShader: Pp }), d = u.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new At();
  g.setAttribute("position", new Kt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const E = new dn(g, u), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = sr;
  let h = this.type;
  this.render = function(A, C, x) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || A.length === 0) return;
    this.type === vl && (we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = sr);
    const y = i.getRenderTarget(), O = i.getActiveCubeFace(), R = i.getActiveMipmapLevel(), N = i.state;
    N.setBlending(cn), N.buffers.depth.getReversed() === true ? N.buffers.color.setClear(0, 0, 0, 0) : N.buffers.color.setClear(1, 1, 1, 1), N.buffers.depth.setTest(true), N.setScissorTest(false);
    const B = h !== this.type;
    B && C.traverse(function(k) {
      k.material && (Array.isArray(k.material) ? k.material.forEach((G) => G.needsUpdate = true) : k.material.needsUpdate = true);
    });
    for (let k = 0, G = A.length; k < G; k++) {
      const V = A[k], H = V.shadow;
      if (H === void 0) {
        we("WebGLShadowMap:", V, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === false && H.needsUpdate === false) continue;
      r.copy(H.mapSize);
      const Q = H.getFrameExtents();
      r.multiply(Q), s.copy(H.mapSize), (r.x > f || r.y > f) && (r.x > f && (s.x = Math.floor(f / Q.x), r.x = s.x * Q.x, H.mapSize.x = s.x), r.y > f && (s.y = Math.floor(f / Q.y), r.y = s.y * Q.y, H.mapSize.y = s.y));
      const $ = i.state.buffers.depth.getReversed();
      if (H.camera._reversedDepth = $, H.map === null || B === true) {
        if (H.map !== null && (H.map.depthTexture !== null && (H.map.depthTexture.dispose(), H.map.depthTexture = null), H.map.dispose()), this.type === Mi) {
          if (V.isPointLight) {
            we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          H.map = new Zt(r.x, r.y, { format: oi, type: hn, minFilter: Et, magFilter: Et, generateMipmaps: false }), H.map.texture.name = V.name + ".shadowMap", H.map.depthTexture = new Ri(r.x, r.y, Xt), H.map.depthTexture.name = V.name + ".shadowMapDepth", H.map.depthTexture.format = fn, H.map.depthTexture.compareFunction = null, H.map.depthTexture.minFilter = xt, H.map.depthTexture.magFilter = xt;
        } else V.isPointLight ? (H.map = new sl(r.x), H.map.depthTexture = new Bc(r.x, $t)) : (H.map = new Zt(r.x, r.y), H.map.depthTexture = new Ri(r.x, r.y, $t)), H.map.depthTexture.name = V.name + ".shadowMap", H.map.depthTexture.format = fn, this.type === sr ? (H.map.depthTexture.compareFunction = $ ? ia : na, H.map.depthTexture.minFilter = Et, H.map.depthTexture.magFilter = Et) : (H.map.depthTexture.compareFunction = null, H.map.depthTexture.minFilter = xt, H.map.depthTexture.magFilter = xt);
        H.camera.updateProjectionMatrix();
      }
      const ce = H.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let pe = 0; pe < ce; pe++) {
        if (H.map.isWebGLCubeRenderTarget) i.setRenderTarget(H.map, pe), i.clear();
        else {
          pe === 0 && (i.setRenderTarget(H.map), i.clear());
          const he = H.getViewport(pe);
          a.set(s.x * he.x, s.y * he.y, s.x * he.z, s.y * he.w), N.viewport(a);
        }
        if (V.isPointLight) {
          const he = H.camera, Ie = H.matrix, nt = V.distance || he.far;
          nt !== he.far && (he.far = nt, he.updateProjectionMatrix()), vi.setFromMatrixPosition(V.matrixWorld), he.position.copy(vi), ns.copy(he.position), ns.add(Dp[pe]), he.up.copy(Lp[pe]), he.lookAt(ns), he.updateMatrixWorld(), Ie.makeTranslation(-vi.x, -vi.y, -vi.z), Mo.multiplyMatrices(he.projectionMatrix, he.matrixWorldInverse), H._frustum.setFromProjectionMatrix(Mo, he.coordinateSystem, he.reversedDepth);
        } else H.updateMatrices(V);
        n = H.getFrustum(), S(C, x, H.camera, V, this.type);
      }
      H.isPointLightShadow !== true && this.type === Mi && M(H, x), H.needsUpdate = false;
    }
    h = this.type, p.needsUpdate = false, i.setRenderTarget(y, O, R);
  };
  function M(A, C) {
    const x = e.update(E);
    u.defines.VSM_SAMPLES !== A.blurSamples && (u.defines.VSM_SAMPLES = A.blurSamples, d.defines.VSM_SAMPLES = A.blurSamples, u.needsUpdate = true, d.needsUpdate = true), A.mapPass === null && (A.mapPass = new Zt(r.x, r.y, { format: oi, type: hn })), u.uniforms.shadow_pass.value = A.map.depthTexture, u.uniforms.resolution.value = A.mapSize, u.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(C, null, x, u, E, null), d.uniforms.shadow_pass.value = A.mapPass.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(C, null, x, d, E, null);
  }
  function T(A, C, x, y) {
    let O = null;
    const R = x.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (R !== void 0) O = R;
    else if (O = x.isPointLight === true ? c : o, i.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === true) {
      const N = O.uuid, B = C.uuid;
      let k = l[N];
      k === void 0 && (k = {}, l[N] = k);
      let G = k[B];
      G === void 0 && (G = O.clone(), k[B] = G, C.addEventListener("dispose", w)), O = G;
    }
    if (O.visible = C.visible, O.wireframe = C.wireframe, y === Mi ? O.side = C.shadowSide !== null ? C.shadowSide : C.side : O.side = C.shadowSide !== null ? C.shadowSide : m[C.side], O.alphaMap = C.alphaMap, O.alphaTest = C.alphaToCoverage === true ? 0.5 : C.alphaTest, O.map = C.map, O.clipShadows = C.clipShadows, O.clippingPlanes = C.clippingPlanes, O.clipIntersection = C.clipIntersection, O.displacementMap = C.displacementMap, O.displacementScale = C.displacementScale, O.displacementBias = C.displacementBias, O.wireframeLinewidth = C.wireframeLinewidth, O.linewidth = C.linewidth, x.isPointLight === true && O.isMeshDistanceMaterial === true) {
      const N = i.properties.get(O);
      N.light = x;
    }
    return O;
  }
  function S(A, C, x, y, O) {
    if (A.visible === false) return;
    if (A.layers.test(C.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && O === Mi) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, A.matrixWorld);
      const B = e.update(A), k = A.material;
      if (Array.isArray(k)) {
        const G = B.groups;
        for (let V = 0, H = G.length; V < H; V++) {
          const Q = G[V], $ = k[Q.materialIndex];
          if ($ && $.visible) {
            const ce = T(A, $, y, O);
            A.onBeforeShadow(i, A, C, x, B, ce, Q), i.renderBufferDirect(x, null, B, ce, A, Q), A.onAfterShadow(i, A, C, x, B, ce, Q);
          }
        }
      } else if (k.visible) {
        const G = T(A, k, y, O);
        A.onBeforeShadow(i, A, C, x, B, G, null), i.renderBufferDirect(x, null, B, G, A, null), A.onAfterShadow(i, A, C, x, B, G, null);
      }
    }
    const N = A.children;
    for (let B = 0, k = N.length; B < k; B++) S(N[B], C, x, y, O);
  }
  function w(A) {
    A.target.removeEventListener("dispose", w);
    for (const x in l) {
      const y = l[x], O = A.target.uuid;
      O in y && (y[O].dispose(), delete y[O]);
    }
  }
}
function Up(i, e) {
  function t() {
    let D = false;
    const re = new at();
    let te = null;
    const de = new at(0, 0, 0, 0);
    return { setMask: function(J) {
      te !== J && !D && (i.colorMask(J, J, J, J), te = J);
    }, setLocked: function(J) {
      D = J;
    }, setClear: function(J, X, ge, Ce, et) {
      et === true && (J *= Ce, X *= Ce, ge *= Ce), re.set(J, X, ge, Ce), de.equals(re) === false && (i.clearColor(J, X, ge, Ce), de.copy(re));
    }, reset: function() {
      D = false, te = null, de.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, re = false, te = null, de = null, J = null;
    return { setReversed: function(X) {
      if (re !== X) {
        const ge = e.get("EXT_clip_control");
        X ? ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.ZERO_TO_ONE_EXT) : ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.NEGATIVE_ONE_TO_ONE_EXT), re = X;
        const Ce = J;
        J = null, this.setClear(Ce);
      }
    }, getReversed: function() {
      return re;
    }, setTest: function(X) {
      X ? ne(i.DEPTH_TEST) : se(i.DEPTH_TEST);
    }, setMask: function(X) {
      te !== X && !D && (i.depthMask(X), te = X);
    }, setFunc: function(X) {
      if (re && (X = Jl[X]), de !== X) {
        switch (X) {
          case ss:
            i.depthFunc(i.NEVER);
            break;
          case as:
            i.depthFunc(i.ALWAYS);
            break;
          case os:
            i.depthFunc(i.LESS);
            break;
          case si:
            i.depthFunc(i.LEQUAL);
            break;
          case ls:
            i.depthFunc(i.EQUAL);
            break;
          case cs:
            i.depthFunc(i.GEQUAL);
            break;
          case us:
            i.depthFunc(i.GREATER);
            break;
          case hs:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        de = X;
      }
    }, setLocked: function(X) {
      D = X;
    }, setClear: function(X) {
      J !== X && (J = X, re && (X = 1 - X), i.clearDepth(X));
    }, reset: function() {
      D = false, te = null, de = null, J = null, re = false;
    } };
  }
  function r() {
    let D = false, re = null, te = null, de = null, J = null, X = null, ge = null, Ce = null, et = null;
    return { setTest: function(Ye) {
      D || (Ye ? ne(i.STENCIL_TEST) : se(i.STENCIL_TEST));
    }, setMask: function(Ye) {
      re !== Ye && !D && (i.stencilMask(Ye), re = Ye);
    }, setFunc: function(Ye, Qt, en) {
      (te !== Ye || de !== Qt || J !== en) && (i.stencilFunc(Ye, Qt, en), te = Ye, de = Qt, J = en);
    }, setOp: function(Ye, Qt, en) {
      (X !== Ye || ge !== Qt || Ce !== en) && (i.stencilOp(Ye, Qt, en), X = Ye, ge = Qt, Ce = en);
    }, setLocked: function(Ye) {
      D = Ye;
    }, setClear: function(Ye) {
      et !== Ye && (i.clearStencil(Ye), et = Ye);
    }, reset: function() {
      D = false, re = null, te = null, de = null, J = null, X = null, ge = null, Ce = null, et = null;
    } };
  }
  const s = new t(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, u = /* @__PURE__ */ new WeakMap(), d = [], g = null, E = false, p = null, h = null, M = null, T = null, S = null, w = null, A = null, C = new Ve(0, 0, 0), x = 0, y = false, O = null, R = null, N = null, B = null, k = null;
  const G = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = false, H = 0;
  const Q = i.getParameter(i.VERSION);
  Q.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL (\d)/.exec(Q)[1]), V = H >= 1) : Q.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]), V = H >= 2);
  let $ = null, ce = {};
  const pe = i.getParameter(i.SCISSOR_BOX), he = i.getParameter(i.VIEWPORT), Ie = new at().fromArray(pe), nt = new at().fromArray(he);
  function tt(D, re, te, de) {
    const J = new Uint8Array(4), X = i.createTexture();
    i.bindTexture(D, X), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let ge = 0; ge < te; ge++) D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(re, 0, i.RGBA, 1, 1, de, 0, i.RGBA, i.UNSIGNED_BYTE, J) : i.texImage2D(re + ge, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
    return X;
  }
  const Z = {};
  Z[i.TEXTURE_2D] = tt(i.TEXTURE_2D, i.TEXTURE_2D, 1), Z[i.TEXTURE_CUBE_MAP] = tt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Z[i.TEXTURE_2D_ARRAY] = tt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Z[i.TEXTURE_3D] = tt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ne(i.DEPTH_TEST), a.setFunc(si), Fe(false), ot(Ma), ne(i.CULL_FACE), qe(cn);
  function ne(D) {
    f[D] !== true && (i.enable(D), f[D] = true);
  }
  function se(D) {
    f[D] !== false && (i.disable(D), f[D] = false);
  }
  function De(D, re) {
    return m[D] !== re ? (i.bindFramebuffer(D, re), m[D] = re, D === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = re), D === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = re), true) : false;
  }
  function be(D, re) {
    let te = d, de = false;
    if (D) {
      te = u.get(re), te === void 0 && (te = [], u.set(re, te));
      const J = D.textures;
      if (te.length !== J.length || te[0] !== i.COLOR_ATTACHMENT0) {
        for (let X = 0, ge = J.length; X < ge; X++) te[X] = i.COLOR_ATTACHMENT0 + X;
        te.length = J.length, de = true;
      }
    } else te[0] !== i.BACK && (te[0] = i.BACK, de = true);
    de && i.drawBuffers(te);
  }
  function Re(D) {
    return g !== D ? (i.useProgram(D), g = D, true) : false;
  }
  const dt = { [Un]: i.FUNC_ADD, [Sl]: i.FUNC_SUBTRACT, [El]: i.FUNC_REVERSE_SUBTRACT };
  dt[yl] = i.MIN, dt[Tl] = i.MAX;
  const Ge = { [bl]: i.ZERO, [Al]: i.ONE, [wl]: i.SRC_COLOR, [is]: i.SRC_ALPHA, [Il]: i.SRC_ALPHA_SATURATE, [Dl]: i.DST_COLOR, [Cl]: i.DST_ALPHA, [Rl]: i.ONE_MINUS_SRC_COLOR, [rs]: i.ONE_MINUS_SRC_ALPHA, [Ll]: i.ONE_MINUS_DST_COLOR, [Pl]: i.ONE_MINUS_DST_ALPHA, [Ul]: i.CONSTANT_COLOR, [Nl]: i.ONE_MINUS_CONSTANT_COLOR, [Fl]: i.CONSTANT_ALPHA, [Ol]: i.ONE_MINUS_CONSTANT_ALPHA };
  function qe(D, re, te, de, J, X, ge, Ce, et, Ye) {
    if (D === cn) {
      E === true && (se(i.BLEND), E = false);
      return;
    }
    if (E === false && (ne(i.BLEND), E = true), D !== Ml) {
      if (D !== p || Ye !== y) {
        if ((h !== Un || S !== Un) && (i.blendEquation(i.FUNC_ADD), h = Un, S = Un), Ye) switch (D) {
          case ii:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case Sa:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case Ea:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case ya:
            i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
            break;
          default:
            We("WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case ii:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case Sa:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
            break;
          case Ea:
            We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case ya:
            We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            We("WebGLState: Invalid blending: ", D);
            break;
        }
        M = null, T = null, w = null, A = null, C.set(0, 0, 0), x = 0, p = D, y = Ye;
      }
      return;
    }
    J = J || re, X = X || te, ge = ge || de, (re !== h || J !== S) && (i.blendEquationSeparate(dt[re], dt[J]), h = re, S = J), (te !== M || de !== T || X !== w || ge !== A) && (i.blendFuncSeparate(Ge[te], Ge[de], Ge[X], Ge[ge]), M = te, T = de, w = X, A = ge), (Ce.equals(C) === false || et !== x) && (i.blendColor(Ce.r, Ce.g, Ce.b, et), C.copy(Ce), x = et), p = D, y = false;
  }
  function je(D, re) {
    D.side === on ? se(i.CULL_FACE) : ne(i.CULL_FACE);
    let te = D.side === wt;
    re && (te = !te), Fe(te), D.blending === ii && D.transparent === false ? qe(cn) : qe(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), s.setMask(D.colorWrite);
    const de = D.stencilWrite;
    o.setTest(de), de && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), ct(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? ne(i.SAMPLE_ALPHA_TO_COVERAGE) : se(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Fe(D) {
    O !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), O = D);
  }
  function ot(D) {
    D !== gl ? (ne(i.CULL_FACE), D !== R && (D === Ma ? i.cullFace(i.BACK) : D === xl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : se(i.CULL_FACE), R = D;
  }
  function P(D) {
    D !== N && (V && i.lineWidth(D), N = D);
  }
  function ct(D, re, te) {
    D ? (ne(i.POLYGON_OFFSET_FILL), (B !== re || k !== te) && (B = re, k = te, a.getReversed() && (re = -re), i.polygonOffset(re, te))) : se(i.POLYGON_OFFSET_FILL);
  }
  function Xe(D) {
    D ? ne(i.SCISSOR_TEST) : se(i.SCISSOR_TEST);
  }
  function Qe(D) {
    D === void 0 && (D = i.TEXTURE0 + G - 1), $ !== D && (i.activeTexture(D), $ = D);
  }
  function Me(D, re, te) {
    te === void 0 && ($ === null ? te = i.TEXTURE0 + G - 1 : te = $);
    let de = ce[te];
    de === void 0 && (de = { type: void 0, texture: void 0 }, ce[te] = de), (de.type !== D || de.texture !== re) && ($ !== te && (i.activeTexture(te), $ = te), i.bindTexture(D, re || Z[D]), de.type = D, de.texture = re);
  }
  function b() {
    const D = ce[$];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function _() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function L() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Y() {
    try {
      i.texSubImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function K() {
    try {
      i.texSubImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function q() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function me() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function ie() {
    try {
      i.texStorage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Te() {
    try {
      i.texStorage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Ae() {
    try {
      i.texImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function j() {
    try {
      i.texImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function ee(D) {
    Ie.equals(D) === false && (i.scissor(D.x, D.y, D.z, D.w), Ie.copy(D));
  }
  function _e(D) {
    nt.equals(D) === false && (i.viewport(D.x, D.y, D.z, D.w), nt.copy(D));
  }
  function xe(D, re) {
    let te = l.get(re);
    te === void 0 && (te = /* @__PURE__ */ new WeakMap(), l.set(re, te));
    let de = te.get(D);
    de === void 0 && (de = i.getUniformBlockIndex(re, D.name), te.set(D, de));
  }
  function ue(D, re) {
    const de = l.get(re).get(D);
    c.get(re) !== de && (i.uniformBlockBinding(re, de, D.__bindingPointIndex), c.set(re, de));
  }
  function Oe() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), a.setReversed(false), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), f = {}, $ = null, ce = {}, m = {}, u = /* @__PURE__ */ new WeakMap(), d = [], g = null, E = false, p = null, h = null, M = null, T = null, S = null, w = null, A = null, C = new Ve(0, 0, 0), x = 0, y = false, O = null, R = null, N = null, B = null, k = null, Ie.set(0, 0, i.canvas.width, i.canvas.height), nt.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: s, depth: a, stencil: o }, enable: ne, disable: se, bindFramebuffer: De, drawBuffers: be, useProgram: Re, setBlending: qe, setMaterial: je, setFlipSided: Fe, setCullFace: ot, setLineWidth: P, setPolygonOffset: ct, setScissorTest: Xe, activeTexture: Qe, bindTexture: Me, unbindTexture: b, compressedTexImage2D: _, compressedTexImage3D: L, texImage2D: Ae, texImage3D: j, updateUBOMapping: xe, uniformBlockBinding: ue, texStorage2D: ie, texStorage3D: Te, texSubImage2D: Y, texSubImage3D: K, compressedTexSubImage2D: q, compressedTexSubImage3D: me, scissor: ee, viewport: _e, reset: Oe };
}
function Np(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), l = new ze(), f = /* @__PURE__ */ new WeakMap();
  let m;
  const u = /* @__PURE__ */ new WeakMap();
  let d = false;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(b, _) {
    return d ? new OffscreenCanvas(b, _) : fr("canvas");
  }
  function E(b, _, L) {
    let Y = 1;
    const K = Me(b);
    if ((K.width > L || K.height > L) && (Y = L / Math.max(K.width, K.height)), Y < 1) if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
      const q = Math.floor(Y * K.width), me = Math.floor(Y * K.height);
      m === void 0 && (m = g(q, me));
      const ie = _ ? g(q, me) : m;
      return ie.width = q, ie.height = me, ie.getContext("2d").drawImage(b, 0, 0, q, me), we("WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + q + "x" + me + ")."), ie;
    } else return "data" in b && we("WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), b;
    return b;
  }
  function p(b) {
    return b.generateMipmaps;
  }
  function h(b) {
    i.generateMipmap(b);
  }
  function M(b) {
    return b.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? i.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(b, _, L, Y, K = false) {
    if (b !== null) {
      if (i[b] !== void 0) return i[b];
      we("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let q = _;
    if (_ === i.RED && (L === i.FLOAT && (q = i.R32F), L === i.HALF_FLOAT && (q = i.R16F), L === i.UNSIGNED_BYTE && (q = i.R8)), _ === i.RED_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.R8UI), L === i.UNSIGNED_SHORT && (q = i.R16UI), L === i.UNSIGNED_INT && (q = i.R32UI), L === i.BYTE && (q = i.R8I), L === i.SHORT && (q = i.R16I), L === i.INT && (q = i.R32I)), _ === i.RG && (L === i.FLOAT && (q = i.RG32F), L === i.HALF_FLOAT && (q = i.RG16F), L === i.UNSIGNED_BYTE && (q = i.RG8)), _ === i.RG_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.RG8UI), L === i.UNSIGNED_SHORT && (q = i.RG16UI), L === i.UNSIGNED_INT && (q = i.RG32UI), L === i.BYTE && (q = i.RG8I), L === i.SHORT && (q = i.RG16I), L === i.INT && (q = i.RG32I)), _ === i.RGB_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.RGB8UI), L === i.UNSIGNED_SHORT && (q = i.RGB16UI), L === i.UNSIGNED_INT && (q = i.RGB32UI), L === i.BYTE && (q = i.RGB8I), L === i.SHORT && (q = i.RGB16I), L === i.INT && (q = i.RGB32I)), _ === i.RGBA_INTEGER && (L === i.UNSIGNED_BYTE && (q = i.RGBA8UI), L === i.UNSIGNED_SHORT && (q = i.RGBA16UI), L === i.UNSIGNED_INT && (q = i.RGBA32UI), L === i.BYTE && (q = i.RGBA8I), L === i.SHORT && (q = i.RGBA16I), L === i.INT && (q = i.RGBA32I)), _ === i.RGB && (L === i.UNSIGNED_INT_5_9_9_9_REV && (q = i.RGB9_E5), L === i.UNSIGNED_INT_10F_11F_11F_REV && (q = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const me = K ? hr : He.getTransfer(Y);
      L === i.FLOAT && (q = i.RGBA32F), L === i.HALF_FLOAT && (q = i.RGBA16F), L === i.UNSIGNED_BYTE && (q = me === Ze ? i.SRGB8_ALPHA8 : i.RGBA8), L === i.UNSIGNED_SHORT_4_4_4_4 && (q = i.RGBA4), L === i.UNSIGNED_SHORT_5_5_5_1 && (q = i.RGB5_A1);
    }
    return (q === i.R16F || q === i.R32F || q === i.RG16F || q === i.RG32F || q === i.RGBA16F || q === i.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function S(b, _) {
    let L;
    return b ? _ === null || _ === $t || _ === bi ? L = i.DEPTH24_STENCIL8 : _ === Xt ? L = i.DEPTH32F_STENCIL8 : _ === Ti && (L = i.DEPTH24_STENCIL8, we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === $t || _ === bi ? L = i.DEPTH_COMPONENT24 : _ === Xt ? L = i.DEPTH_COMPONENT32F : _ === Ti && (L = i.DEPTH_COMPONENT16), L;
  }
  function w(b, _) {
    return p(b) === true || b.isFramebufferTexture && b.minFilter !== xt && b.minFilter !== Et ? Math.log2(Math.max(_.width, _.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? _.mipmaps.length : 1;
  }
  function A(b) {
    const _ = b.target;
    _.removeEventListener("dispose", A), x(_), _.isVideoTexture && f.delete(_);
  }
  function C(b) {
    const _ = b.target;
    _.removeEventListener("dispose", C), O(_);
  }
  function x(b) {
    const _ = n.get(b);
    if (_.__webglInit === void 0) return;
    const L = b.source, Y = u.get(L);
    if (Y) {
      const K = Y[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && y(b), Object.keys(Y).length === 0 && u.delete(L);
    }
    n.remove(b);
  }
  function y(b) {
    const _ = n.get(b);
    i.deleteTexture(_.__webglTexture);
    const L = b.source, Y = u.get(L);
    delete Y[_.__cacheKey], a.memory.textures--;
  }
  function O(b) {
    const _ = n.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)), b.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) {
      if (Array.isArray(_.__webglFramebuffer[Y])) for (let K = 0; K < _.__webglFramebuffer[Y].length; K++) i.deleteFramebuffer(_.__webglFramebuffer[Y][K]);
      else i.deleteFramebuffer(_.__webglFramebuffer[Y]);
      _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[Y]);
    }
    else {
      if (Array.isArray(_.__webglFramebuffer)) for (let Y = 0; Y < _.__webglFramebuffer.length; Y++) i.deleteFramebuffer(_.__webglFramebuffer[Y]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let Y = 0; Y < _.__webglColorRenderbuffer.length; Y++) _.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const L = b.textures;
    for (let Y = 0, K = L.length; Y < K; Y++) {
      const q = n.get(L[Y]);
      q.__webglTexture && (i.deleteTexture(q.__webglTexture), a.memory.textures--), n.remove(L[Y]);
    }
    n.remove(b);
  }
  let R = 0;
  function N() {
    R = 0;
  }
  function B() {
    const b = R;
    return b >= r.maxTextures && we("WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + r.maxTextures), R += 1, b;
  }
  function k(b) {
    const _ = [];
    return _.push(b.wrapS), _.push(b.wrapT), _.push(b.wrapR || 0), _.push(b.magFilter), _.push(b.minFilter), _.push(b.anisotropy), _.push(b.internalFormat), _.push(b.format), _.push(b.type), _.push(b.generateMipmaps), _.push(b.premultiplyAlpha), _.push(b.flipY), _.push(b.unpackAlignment), _.push(b.colorSpace), _.join();
  }
  function G(b, _) {
    const L = n.get(b);
    if (b.isVideoTexture && Xe(b), b.isRenderTargetTexture === false && b.isExternalTexture !== true && b.version > 0 && L.__version !== b.version) {
      const Y = b.image;
      if (Y === null) we("WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === false) we("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Z(L, b, _);
        return;
      }
    } else b.isExternalTexture && (L.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, L.__webglTexture, i.TEXTURE0 + _);
  }
  function V(b, _) {
    const L = n.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && L.__version !== b.version) {
      Z(L, b, _);
      return;
    } else b.isExternalTexture && (L.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, L.__webglTexture, i.TEXTURE0 + _);
  }
  function H(b, _) {
    const L = n.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && L.__version !== b.version) {
      Z(L, b, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, L.__webglTexture, i.TEXTURE0 + _);
  }
  function Q(b, _) {
    const L = n.get(b);
    if (b.isCubeDepthTexture !== true && b.version > 0 && L.__version !== b.version) {
      ne(L, b, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, L.__webglTexture, i.TEXTURE0 + _);
  }
  const $ = { [fs]: i.REPEAT, [ln]: i.CLAMP_TO_EDGE, [ds]: i.MIRRORED_REPEAT }, ce = { [xt]: i.NEAREST, [Vl]: i.NEAREST_MIPMAP_NEAREST, [Ii]: i.NEAREST_MIPMAP_LINEAR, [Et]: i.LINEAR, [Tr]: i.LINEAR_MIPMAP_NEAREST, [Fn]: i.LINEAR_MIPMAP_LINEAR }, pe = { [kl]: i.NEVER, [Zl]: i.ALWAYS, [Wl]: i.LESS, [na]: i.LEQUAL, [Xl]: i.EQUAL, [ia]: i.GEQUAL, [ql]: i.GREATER, [Yl]: i.NOTEQUAL };
  function he(b, _) {
    if (_.type === Xt && e.has("OES_texture_float_linear") === false && (_.magFilter === Et || _.magFilter === Tr || _.magFilter === Ii || _.magFilter === Fn || _.minFilter === Et || _.minFilter === Tr || _.minFilter === Ii || _.minFilter === Fn) && we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(b, i.TEXTURE_WRAP_S, $[_.wrapS]), i.texParameteri(b, i.TEXTURE_WRAP_T, $[_.wrapT]), (b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY) && i.texParameteri(b, i.TEXTURE_WRAP_R, $[_.wrapR]), i.texParameteri(b, i.TEXTURE_MAG_FILTER, ce[_.magFilter]), i.texParameteri(b, i.TEXTURE_MIN_FILTER, ce[_.minFilter]), _.compareFunction && (i.texParameteri(b, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(b, i.TEXTURE_COMPARE_FUNC, pe[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === xt || _.minFilter !== Ii && _.minFilter !== Fn || _.type === Xt && e.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const L = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(b, L.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Ie(b, _) {
    let L = false;
    b.__webglInit === void 0 && (b.__webglInit = true, _.addEventListener("dispose", A));
    const Y = _.source;
    let K = u.get(Y);
    K === void 0 && (K = {}, u.set(Y, K));
    const q = k(_);
    if (q !== b.__cacheKey) {
      K[q] === void 0 && (K[q] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, L = true), K[q].usedTimes++;
      const me = K[b.__cacheKey];
      me !== void 0 && (K[b.__cacheKey].usedTimes--, me.usedTimes === 0 && y(_)), b.__cacheKey = q, b.__webglTexture = K[q].texture;
    }
    return L;
  }
  function nt(b, _, L) {
    return Math.floor(Math.floor(b / L) / _);
  }
  function tt(b, _, L, Y) {
    const q = b.updateRanges;
    if (q.length === 0) t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, L, Y, _.data);
    else {
      q.sort((j, ee) => j.start - ee.start);
      let me = 0;
      for (let j = 1; j < q.length; j++) {
        const ee = q[me], _e = q[j], xe = ee.start + ee.count, ue = nt(_e.start, _.width, 4), Oe = nt(ee.start, _.width, 4);
        _e.start <= xe + 1 && ue === Oe && nt(_e.start + _e.count - 1, _.width, 4) === ue ? ee.count = Math.max(ee.count, _e.start + _e.count - ee.start) : (++me, q[me] = _e);
      }
      q.length = me + 1;
      const ie = i.getParameter(i.UNPACK_ROW_LENGTH), Te = i.getParameter(i.UNPACK_SKIP_PIXELS), Ae = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let j = 0, ee = q.length; j < ee; j++) {
        const _e = q[j], xe = Math.floor(_e.start / 4), ue = Math.ceil(_e.count / 4), Oe = xe % _.width, D = Math.floor(xe / _.width), re = ue, te = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Oe), i.pixelStorei(i.UNPACK_SKIP_ROWS, D), t.texSubImage2D(i.TEXTURE_2D, 0, Oe, D, re, te, L, Y, _.data);
      }
      b.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, ie), i.pixelStorei(i.UNPACK_SKIP_PIXELS, Te), i.pixelStorei(i.UNPACK_SKIP_ROWS, Ae);
    }
  }
  function Z(b, _, L) {
    let Y = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (Y = i.TEXTURE_3D);
    const K = Ie(b, _), q = _.source;
    t.bindTexture(Y, b.__webglTexture, i.TEXTURE0 + L);
    const me = n.get(q);
    if (q.version !== me.__version || K === true) {
      t.activeTexture(i.TEXTURE0 + L);
      const ie = He.getPrimaries(He.workingColorSpace), Te = _.colorSpace === En ? null : He.getPrimaries(_.colorSpace), Ae = _.colorSpace === En || ie === Te ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ae);
      let j = E(_.image, false, r.maxTextureSize);
      j = Qe(_, j);
      const ee = s.convert(_.format, _.colorSpace), _e = s.convert(_.type);
      let xe = T(_.internalFormat, ee, _e, _.colorSpace, _.isVideoTexture);
      he(Y, _);
      let ue;
      const Oe = _.mipmaps, D = _.isVideoTexture !== true, re = me.__version === void 0 || K === true, te = q.dataReady, de = w(_, j);
      if (_.isDepthTexture) xe = S(_.format === On, _.type), re && (D ? t.texStorage2D(i.TEXTURE_2D, 1, xe, j.width, j.height) : t.texImage2D(i.TEXTURE_2D, 0, xe, j.width, j.height, 0, ee, _e, null));
      else if (_.isDataTexture) if (Oe.length > 0) {
        D && re && t.texStorage2D(i.TEXTURE_2D, de, xe, Oe[0].width, Oe[0].height);
        for (let J = 0, X = Oe.length; J < X; J++) ue = Oe[J], D ? te && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ue.width, ue.height, ee, _e, ue.data) : t.texImage2D(i.TEXTURE_2D, J, xe, ue.width, ue.height, 0, ee, _e, ue.data);
        _.generateMipmaps = false;
      } else D ? (re && t.texStorage2D(i.TEXTURE_2D, de, xe, j.width, j.height), te && tt(_, j, ee, _e)) : t.texImage2D(i.TEXTURE_2D, 0, xe, j.width, j.height, 0, ee, _e, j.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        D && re && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, xe, Oe[0].width, Oe[0].height, j.depth);
        for (let J = 0, X = Oe.length; J < X; J++) if (ue = Oe[J], _.format !== Vt) if (ee !== null) if (D) {
          if (te) if (_.layerUpdates.size > 0) {
            const ge = $a(ue.width, ue.height, _.format, _.type);
            for (const Ce of _.layerUpdates) {
              const et = ue.data.subarray(Ce * ge / ue.data.BYTES_PER_ELEMENT, (Ce + 1) * ge / ue.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, Ce, ue.width, ue.height, 1, ee, et);
            }
            _.clearLayerUpdates();
          } else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ue.width, ue.height, j.depth, ee, ue.data);
        } else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, xe, ue.width, ue.height, j.depth, 0, ue.data, 0, 0);
        else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else D ? te && t.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ue.width, ue.height, j.depth, ee, _e, ue.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, J, xe, ue.width, ue.height, j.depth, 0, ee, _e, ue.data);
      } else {
        D && re && t.texStorage2D(i.TEXTURE_2D, de, xe, Oe[0].width, Oe[0].height);
        for (let J = 0, X = Oe.length; J < X; J++) ue = Oe[J], _.format !== Vt ? ee !== null ? D ? te && t.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, ue.width, ue.height, ee, ue.data) : t.compressedTexImage2D(i.TEXTURE_2D, J, xe, ue.width, ue.height, 0, ue.data) : we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? te && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ue.width, ue.height, ee, _e, ue.data) : t.texImage2D(i.TEXTURE_2D, J, xe, ue.width, ue.height, 0, ee, _e, ue.data);
      }
      else if (_.isDataArrayTexture) if (D) {
        if (re && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, xe, j.width, j.height, j.depth), te) if (_.layerUpdates.size > 0) {
          const J = $a(j.width, j.height, _.format, _.type);
          for (const X of _.layerUpdates) {
            const ge = j.data.subarray(X * J / j.data.BYTES_PER_ELEMENT, (X + 1) * J / j.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, X, j.width, j.height, 1, ee, _e, ge);
          }
          _.clearLayerUpdates();
        } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, ee, _e, j.data);
      } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, xe, j.width, j.height, j.depth, 0, ee, _e, j.data);
      else if (_.isData3DTexture) D ? (re && t.texStorage3D(i.TEXTURE_3D, de, xe, j.width, j.height, j.depth), te && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, ee, _e, j.data)) : t.texImage3D(i.TEXTURE_3D, 0, xe, j.width, j.height, j.depth, 0, ee, _e, j.data);
      else if (_.isFramebufferTexture) {
        if (re) if (D) t.texStorage2D(i.TEXTURE_2D, de, xe, j.width, j.height);
        else {
          let J = j.width, X = j.height;
          for (let ge = 0; ge < de; ge++) t.texImage2D(i.TEXTURE_2D, ge, xe, J, X, 0, ee, _e, null), J >>= 1, X >>= 1;
        }
      } else if (Oe.length > 0) {
        if (D && re) {
          const J = Me(Oe[0]);
          t.texStorage2D(i.TEXTURE_2D, de, xe, J.width, J.height);
        }
        for (let J = 0, X = Oe.length; J < X; J++) ue = Oe[J], D ? te && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ee, _e, ue) : t.texImage2D(i.TEXTURE_2D, J, xe, ee, _e, ue);
        _.generateMipmaps = false;
      } else if (D) {
        if (re) {
          const J = Me(j);
          t.texStorage2D(i.TEXTURE_2D, de, xe, J.width, J.height);
        }
        te && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ee, _e, j);
      } else t.texImage2D(i.TEXTURE_2D, 0, xe, ee, _e, j);
      p(_) && h(Y), me.__version = q.version, _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function ne(b, _, L) {
    if (_.image.length !== 6) return;
    const Y = Ie(b, _), K = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, b.__webglTexture, i.TEXTURE0 + L);
    const q = n.get(K);
    if (K.version !== q.__version || Y === true) {
      t.activeTexture(i.TEXTURE0 + L);
      const me = He.getPrimaries(He.workingColorSpace), ie = _.colorSpace === En ? null : He.getPrimaries(_.colorSpace), Te = _.colorSpace === En || me === ie ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te);
      const Ae = _.isCompressedTexture || _.image[0].isCompressedTexture, j = _.image[0] && _.image[0].isDataTexture, ee = [];
      for (let X = 0; X < 6; X++) !Ae && !j ? ee[X] = E(_.image[X], true, r.maxCubemapSize) : ee[X] = j ? _.image[X].image : _.image[X], ee[X] = Qe(_, ee[X]);
      const _e = ee[0], xe = s.convert(_.format, _.colorSpace), ue = s.convert(_.type), Oe = T(_.internalFormat, xe, ue, _.colorSpace), D = _.isVideoTexture !== true, re = q.__version === void 0 || Y === true, te = K.dataReady;
      let de = w(_, _e);
      he(i.TEXTURE_CUBE_MAP, _);
      let J;
      if (Ae) {
        D && re && t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Oe, _e.width, _e.height);
        for (let X = 0; X < 6; X++) {
          J = ee[X].mipmaps;
          for (let ge = 0; ge < J.length; ge++) {
            const Ce = J[ge];
            _.format !== Vt ? xe !== null ? D ? te && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge, 0, 0, Ce.width, Ce.height, xe, Ce.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge, Oe, Ce.width, Ce.height, 0, Ce.data) : we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge, 0, 0, Ce.width, Ce.height, xe, ue, Ce.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge, Oe, Ce.width, Ce.height, 0, xe, ue, Ce.data);
          }
        }
      } else {
        if (J = _.mipmaps, D && re) {
          J.length > 0 && de++;
          const X = Me(ee[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Oe, X.width, X.height);
        }
        for (let X = 0; X < 6; X++) if (j) {
          D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, ee[X].width, ee[X].height, xe, ue, ee[X].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Oe, ee[X].width, ee[X].height, 0, xe, ue, ee[X].data);
          for (let ge = 0; ge < J.length; ge++) {
            const et = J[ge].image[X].image;
            D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge + 1, 0, 0, et.width, et.height, xe, ue, et.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge + 1, Oe, et.width, et.height, 0, xe, ue, et.data);
          }
        } else {
          D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, xe, ue, ee[X]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Oe, xe, ue, ee[X]);
          for (let ge = 0; ge < J.length; ge++) {
            const Ce = J[ge];
            D ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge + 1, 0, 0, xe, ue, Ce.image[X]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ge + 1, Oe, xe, ue, Ce.image[X]);
          }
        }
      }
      p(_) && h(i.TEXTURE_CUBE_MAP), q.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function se(b, _, L, Y, K, q) {
    const me = s.convert(L.format, L.colorSpace), ie = s.convert(L.type), Te = T(L.internalFormat, me, ie, L.colorSpace), Ae = n.get(_), j = n.get(L);
    if (j.__renderTarget = _, !Ae.__hasExternalTextures) {
      const ee = Math.max(1, _.width >> q), _e = Math.max(1, _.height >> q);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? t.texImage3D(K, q, Te, ee, _e, _.depth, 0, me, ie, null) : t.texImage2D(K, q, Te, ee, _e, 0, me, ie, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, b), ct(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, K, j.__webglTexture, 0, P(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, K, j.__webglTexture, q), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function De(b, _, L) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, b), _.depthBuffer) {
      const Y = _.depthTexture, K = Y && Y.isDepthTexture ? Y.type : null, q = S(_.stencilBuffer, K), me = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      ct(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, P(_), q, _.width, _.height) : L ? i.renderbufferStorageMultisample(i.RENDERBUFFER, P(_), q, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, q, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, me, i.RENDERBUFFER, b);
    } else {
      const Y = _.textures;
      for (let K = 0; K < Y.length; K++) {
        const q = Y[K], me = s.convert(q.format, q.colorSpace), ie = s.convert(q.type), Te = T(q.internalFormat, me, ie, q.colorSpace);
        ct(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, P(_), Te, _.width, _.height) : L ? i.renderbufferStorageMultisample(i.RENDERBUFFER, P(_), Te, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Te, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function be(b, _, L) {
    const Y = _.isWebGLCubeRenderTarget === true;
    if (t.bindFramebuffer(i.FRAMEBUFFER, b), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const K = n.get(_.depthTexture);
    if (K.__renderTarget = _, (!K.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), Y) {
      if (K.__webglInit === void 0 && (K.__webglInit = true, _.depthTexture.addEventListener("dispose", A)), K.__webglTexture === void 0) {
        K.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), he(i.TEXTURE_CUBE_MAP, _.depthTexture);
        const Ae = s.convert(_.depthTexture.format), j = s.convert(_.depthTexture.type);
        let ee;
        _.depthTexture.format === fn ? ee = i.DEPTH_COMPONENT24 : _.depthTexture.format === On && (ee = i.DEPTH24_STENCIL8);
        for (let _e = 0; _e < 6; _e++) i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + _e, 0, ee, _.width, _.height, 0, Ae, j, null);
      }
    } else G(_.depthTexture, 0);
    const q = K.__webglTexture, me = P(_), ie = Y ? i.TEXTURE_CUBE_MAP_POSITIVE_X + L : i.TEXTURE_2D, Te = _.depthTexture.format === On ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === fn) ct(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Te, ie, q, 0, me) : i.framebufferTexture2D(i.FRAMEBUFFER, Te, ie, q, 0);
    else if (_.depthTexture.format === On) ct(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Te, ie, q, 0, me) : i.framebufferTexture2D(i.FRAMEBUFFER, Te, ie, q, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Re(b) {
    const _ = n.get(b), L = b.isWebGLCubeRenderTarget === true;
    if (_.__boundDepthTexture !== b.depthTexture) {
      const Y = b.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), Y) {
        const K = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, Y.removeEventListener("dispose", K);
        };
        Y.addEventListener("dispose", K), _.__depthDisposeCallback = K;
      }
      _.__boundDepthTexture = Y;
    }
    if (b.depthTexture && !_.__autoAllocateDepthBuffer) if (L) for (let Y = 0; Y < 6; Y++) be(_.__webglFramebuffer[Y], b, Y);
    else {
      const Y = b.texture.mipmaps;
      Y && Y.length > 0 ? be(_.__webglFramebuffer[0], b, 0) : be(_.__webglFramebuffer, b, 0);
    }
    else if (L) {
      _.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++) if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Y]), _.__webglDepthbuffer[Y] === void 0) _.__webglDepthbuffer[Y] = i.createRenderbuffer(), De(_.__webglDepthbuffer[Y], b, false);
      else {
        const K = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, q = _.__webglDepthbuffer[Y];
        i.bindRenderbuffer(i.RENDERBUFFER, q), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, q);
      }
    } else {
      const Y = b.texture.mipmaps;
      if (Y && Y.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i.createRenderbuffer(), De(_.__webglDepthbuffer, b, false);
      else {
        const K = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, q = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, q), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, q);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function dt(b, _, L) {
    const Y = n.get(b);
    _ !== void 0 && se(Y.__webglFramebuffer, b, b.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), L !== void 0 && Re(b);
  }
  function Ge(b) {
    const _ = b.texture, L = n.get(b), Y = n.get(_);
    b.addEventListener("dispose", C);
    const K = b.textures, q = b.isWebGLCubeRenderTarget === true, me = K.length > 1;
    if (me || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()), Y.__version = _.version, a.memory.textures++), q) {
      L.__webglFramebuffer = [];
      for (let ie = 0; ie < 6; ie++) if (_.mipmaps && _.mipmaps.length > 0) {
        L.__webglFramebuffer[ie] = [];
        for (let Te = 0; Te < _.mipmaps.length; Te++) L.__webglFramebuffer[ie][Te] = i.createFramebuffer();
      } else L.__webglFramebuffer[ie] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        L.__webglFramebuffer = [];
        for (let ie = 0; ie < _.mipmaps.length; ie++) L.__webglFramebuffer[ie] = i.createFramebuffer();
      } else L.__webglFramebuffer = i.createFramebuffer();
      if (me) for (let ie = 0, Te = K.length; ie < Te; ie++) {
        const Ae = n.get(K[ie]);
        Ae.__webglTexture === void 0 && (Ae.__webglTexture = i.createTexture(), a.memory.textures++);
      }
      if (b.samples > 0 && ct(b) === false) {
        L.__webglMultisampledFramebuffer = i.createFramebuffer(), L.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, L.__webglMultisampledFramebuffer);
        for (let ie = 0; ie < K.length; ie++) {
          const Te = K[ie];
          L.__webglColorRenderbuffer[ie] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, L.__webglColorRenderbuffer[ie]);
          const Ae = s.convert(Te.format, Te.colorSpace), j = s.convert(Te.type), ee = T(Te.internalFormat, Ae, j, Te.colorSpace, b.isXRRenderTarget === true), _e = P(b);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, _e, ee, b.width, b.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, L.__webglColorRenderbuffer[ie]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), b.depthBuffer && (L.__webglDepthRenderbuffer = i.createRenderbuffer(), De(L.__webglDepthRenderbuffer, b, true)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture), he(i.TEXTURE_CUBE_MAP, _);
      for (let ie = 0; ie < 6; ie++) if (_.mipmaps && _.mipmaps.length > 0) for (let Te = 0; Te < _.mipmaps.length; Te++) se(L.__webglFramebuffer[ie][Te], b, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ie, Te);
      else se(L.__webglFramebuffer[ie], b, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0);
      p(_) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (me) {
      for (let ie = 0, Te = K.length; ie < Te; ie++) {
        const Ae = K[ie], j = n.get(Ae);
        let ee = i.TEXTURE_2D;
        (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (ee = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ee, j.__webglTexture), he(ee, Ae), se(L.__webglFramebuffer, b, Ae, i.COLOR_ATTACHMENT0 + ie, ee, 0), p(Ae) && h(ee);
      }
      t.unbindTexture();
    } else {
      let ie = i.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (ie = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ie, Y.__webglTexture), he(ie, _), _.mipmaps && _.mipmaps.length > 0) for (let Te = 0; Te < _.mipmaps.length; Te++) se(L.__webglFramebuffer[Te], b, _, i.COLOR_ATTACHMENT0, ie, Te);
      else se(L.__webglFramebuffer, b, _, i.COLOR_ATTACHMENT0, ie, 0);
      p(_) && h(ie), t.unbindTexture();
    }
    b.depthBuffer && Re(b);
  }
  function qe(b) {
    const _ = b.textures;
    for (let L = 0, Y = _.length; L < Y; L++) {
      const K = _[L];
      if (p(K)) {
        const q = M(b), me = n.get(K).__webglTexture;
        t.bindTexture(q, me), h(q), t.unbindTexture();
      }
    }
  }
  const je = [], Fe = [];
  function ot(b) {
    if (b.samples > 0) {
      if (ct(b) === false) {
        const _ = b.textures, L = b.width, Y = b.height;
        let K = i.COLOR_BUFFER_BIT;
        const q = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, me = n.get(b), ie = _.length > 1;
        if (ie) for (let Ae = 0; Ae < _.length; Ae++) t.bindFramebuffer(i.FRAMEBUFFER, me.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, me.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, me.__webglMultisampledFramebuffer);
        const Te = b.texture.mipmaps;
        Te && Te.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglFramebuffer);
        for (let Ae = 0; Ae < _.length; Ae++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), ie) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, me.__webglColorRenderbuffer[Ae]);
            const j = n.get(_[Ae]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, j, 0);
          }
          i.blitFramebuffer(0, 0, L, Y, 0, 0, L, Y, K, i.NEAREST), c === true && (je.length = 0, Fe.length = 0, je.push(i.COLOR_ATTACHMENT0 + Ae), b.depthBuffer && b.resolveDepthBuffer === false && (je.push(q), Fe.push(q), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Fe)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, je));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ie) for (let Ae = 0; Ae < _.length; Ae++) {
          t.bindFramebuffer(i.FRAMEBUFFER, me.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.RENDERBUFFER, me.__webglColorRenderbuffer[Ae]);
          const j = n.get(_[Ae]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, me.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ae, i.TEXTURE_2D, j, 0);
        }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === false && c) {
        const _ = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function P(b) {
    return Math.min(r.maxSamples, b.samples);
  }
  function ct(b) {
    const _ = n.get(b);
    return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function Xe(b) {
    const _ = a.render.frame;
    f.get(b) !== _ && (f.set(b, _), b.update());
  }
  function Qe(b, _) {
    const L = b.colorSpace, Y = b.format, K = b.type;
    return b.isCompressedTexture === true || b.isVideoTexture === true || L !== li && L !== En && (He.getTransfer(L) === Ze ? (Y !== Vt || K !== Dt) && we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : We("WebGLTextures: Unsupported texture color space:", L)), _;
  }
  function Me(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (l.width = b.naturalWidth || b.width, l.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (l.width = b.displayWidth, l.height = b.displayHeight) : (l.width = b.width, l.height = b.height), l;
  }
  this.allocateTextureUnit = B, this.resetTextureUnits = N, this.setTexture2D = G, this.setTexture2DArray = V, this.setTexture3D = H, this.setTextureCube = Q, this.rebindTextures = dt, this.setupRenderTarget = Ge, this.updateRenderTargetMipmap = qe, this.updateMultisampleRenderTarget = ot, this.setupDepthRenderbuffer = Re, this.setupFrameBufferTexture = se, this.useMultisampledRTT = ct, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function Fp(i, e) {
  function t(n, r = En) {
    let s;
    const a = He.getTransfer(r);
    if (n === Dt) return i.UNSIGNED_BYTE;
    if (n === js) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Js) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Lo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Io) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Po) return i.BYTE;
    if (n === Do) return i.SHORT;
    if (n === Ti) return i.UNSIGNED_SHORT;
    if (n === $s) return i.INT;
    if (n === $t) return i.UNSIGNED_INT;
    if (n === Xt) return i.FLOAT;
    if (n === hn) return i.HALF_FLOAT;
    if (n === Uo) return i.ALPHA;
    if (n === No) return i.RGB;
    if (n === Vt) return i.RGBA;
    if (n === fn) return i.DEPTH_COMPONENT;
    if (n === On) return i.DEPTH_STENCIL;
    if (n === Fo) return i.RED;
    if (n === Qs) return i.RED_INTEGER;
    if (n === oi) return i.RG;
    if (n === ea) return i.RG_INTEGER;
    if (n === ta) return i.RGBA_INTEGER;
    if (n === ar || n === or || n === lr || n === cr) if (a === Ze) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (n === ar) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === or) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === lr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === cr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === ar) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === or) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === lr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === cr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === ps || n === ms || n === _s || n === gs) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (n === ps) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === ms) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === _s) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === gs) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === xs || n === vs || n === Ms || n === Ss || n === Es || n === ys || n === Ts) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (n === xs || n === vs) return a === Ze ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (n === Ms) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      if (n === Ss) return s.COMPRESSED_R11_EAC;
      if (n === Es) return s.COMPRESSED_SIGNED_R11_EAC;
      if (n === ys) return s.COMPRESSED_RG11_EAC;
      if (n === Ts) return s.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (n === bs || n === As || n === ws || n === Rs || n === Cs || n === Ps || n === Ds || n === Ls || n === Is || n === Us || n === Ns || n === Fs || n === Os || n === Bs) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (n === bs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === As) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === ws) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Rs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Cs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Ps) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Ds) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Ls) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Is) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Us) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Ns) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Fs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Os) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Bs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === zs || n === Vs || n === Gs) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
      if (n === zs) return a === Ze ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Vs) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Gs) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Hs || n === ks || n === Ws || n === Xs) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
      if (n === Hs) return s.COMPRESSED_RED_RGTC1_EXT;
      if (n === ks) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Ws) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Xs) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === bi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Op = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Bp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class zp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Zo(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Jt({ vertexShader: Op, fragmentShader: Bp, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new dn(new _r(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Vp extends zn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, f = null, m = null, u = null, d = null, g = null;
    const E = typeof XRWebGLBinding < "u", p = new zp(), h = {}, M = t.getContextAttributes();
    let T = null, S = null;
    const w = [], A = [], C = new ze();
    let x = null;
    const y = new Ut();
    y.viewport = new at();
    const O = new Ut();
    O.viewport = new at();
    const R = [y, O], N = new $c();
    let B = null, k = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Z) {
      let ne = w[Z];
      return ne === void 0 && (ne = new Pr(), w[Z] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let ne = w[Z];
      return ne === void 0 && (ne = new Pr(), w[Z] = ne), ne.getGripSpace();
    }, this.getHand = function(Z) {
      let ne = w[Z];
      return ne === void 0 && (ne = new Pr(), w[Z] = ne), ne.getHandSpace();
    };
    function G(Z) {
      const ne = A.indexOf(Z.inputSource);
      if (ne === -1) return;
      const se = w[ne];
      se !== void 0 && (se.update(Z.inputSource, Z.frame, l || a), se.dispatchEvent({ type: Z.type, data: Z.inputSource }));
    }
    function V() {
      r.removeEventListener("select", G), r.removeEventListener("selectstart", G), r.removeEventListener("selectend", G), r.removeEventListener("squeeze", G), r.removeEventListener("squeezestart", G), r.removeEventListener("squeezeend", G), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", H);
      for (let Z = 0; Z < w.length; Z++) {
        const ne = A[Z];
        ne !== null && (A[Z] = null, w[Z].disconnect(ne));
      }
      B = null, k = null, p.reset();
      for (const Z in h) delete h[Z];
      e.setRenderTarget(T), d = null, u = null, m = null, r = null, S = null, tt.stop(), n.isPresenting = false, e.setPixelRatio(x), e.setSize(C.width, C.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      s = Z, n.isPresenting === true && we("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      o = Z, n.isPresenting === true && we("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(Z) {
      l = Z;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return m === null && E && (m = new XRWebGLBinding(r, t)), m;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Z) {
      if (r = Z, r !== null) {
        if (T = e.getRenderTarget(), r.addEventListener("select", G), r.addEventListener("selectstart", G), r.addEventListener("selectend", G), r.addEventListener("squeeze", G), r.addEventListener("squeezestart", G), r.addEventListener("squeezeend", G), r.addEventListener("end", V), r.addEventListener("inputsourceschange", H), M.xrCompatible !== true && await t.makeXRCompatible(), x = e.getPixelRatio(), e.getSize(C), E && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let se = null, De = null, be = null;
          M.depth && (be = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, se = M.stencil ? On : fn, De = M.stencil ? bi : $t);
          const Re = { colorFormat: t.RGBA8, depthFormat: be, scaleFactor: s };
          m = this.getBinding(), u = m.createProjectionLayer(Re), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, false), S = new Zt(u.textureWidth, u.textureHeight, { format: Vt, type: Dt, depthTexture: new Ri(u.textureWidth, u.textureHeight, De, void 0, void 0, void 0, void 0, void 0, void 0, se), stencilBuffer: M.stencil, colorSpace: e.outputColorSpace, samples: M.antialias ? 4 : 0, resolveDepthBuffer: u.ignoreDepthValues === false, resolveStencilBuffer: u.ignoreDepthValues === false });
        } else {
          const se = { antialias: M.antialias, alpha: true, depth: M.depth, stencil: M.stencil, framebufferScaleFactor: s };
          d = new XRWebGLLayer(r, t, se), r.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, false), S = new Zt(d.framebufferWidth, d.framebufferHeight, { format: Vt, type: Dt, colorSpace: e.outputColorSpace, stencilBuffer: M.stencil, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        }
        S.isXRRenderTarget = true, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), tt.setContext(r), tt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function H(Z) {
      for (let ne = 0; ne < Z.removed.length; ne++) {
        const se = Z.removed[ne], De = A.indexOf(se);
        De >= 0 && (A[De] = null, w[De].disconnect(se));
      }
      for (let ne = 0; ne < Z.added.length; ne++) {
        const se = Z.added[ne];
        let De = A.indexOf(se);
        if (De === -1) {
          for (let Re = 0; Re < w.length; Re++) if (Re >= A.length) {
            A.push(se), De = Re;
            break;
          } else if (A[Re] === null) {
            A[Re] = se, De = Re;
            break;
          }
          if (De === -1) break;
        }
        const be = w[De];
        be && be.connect(se);
      }
    }
    const Q = new I(), $ = new I();
    function ce(Z, ne, se) {
      Q.setFromMatrixPosition(ne.matrixWorld), $.setFromMatrixPosition(se.matrixWorld);
      const De = Q.distanceTo($), be = ne.projectionMatrix.elements, Re = se.projectionMatrix.elements, dt = be[14] / (be[10] - 1), Ge = be[14] / (be[10] + 1), qe = (be[9] + 1) / be[5], je = (be[9] - 1) / be[5], Fe = (be[8] - 1) / be[0], ot = (Re[8] + 1) / Re[0], P = dt * Fe, ct = dt * ot, Xe = De / (-Fe + ot), Qe = Xe * -Fe;
      if (ne.matrixWorld.decompose(Z.position, Z.quaternion, Z.scale), Z.translateX(Qe), Z.translateZ(Xe), Z.matrixWorld.compose(Z.position, Z.quaternion, Z.scale), Z.matrixWorldInverse.copy(Z.matrixWorld).invert(), be[10] === -1) Z.projectionMatrix.copy(ne.projectionMatrix), Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        const Me = dt + Xe, b = Ge + Xe, _ = P - Qe, L = ct + (De - Qe), Y = qe * Ge / b * Me, K = je * Ge / b * Me;
        Z.projectionMatrix.makePerspective(_, L, Y, K, Me, b), Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert();
      }
    }
    function pe(Z, ne) {
      ne === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(ne.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (r === null) return;
      let ne = Z.near, se = Z.far;
      p.texture !== null && (p.depthNear > 0 && (ne = p.depthNear), p.depthFar > 0 && (se = p.depthFar)), N.near = O.near = y.near = ne, N.far = O.far = y.far = se, (B !== N.near || k !== N.far) && (r.updateRenderState({ depthNear: N.near, depthFar: N.far }), B = N.near, k = N.far), N.layers.mask = Z.layers.mask | 6, y.layers.mask = N.layers.mask & -5, O.layers.mask = N.layers.mask & -3;
      const De = Z.parent, be = N.cameras;
      pe(N, De);
      for (let Re = 0; Re < be.length; Re++) pe(be[Re], De);
      be.length === 2 ? ce(N, y, O) : N.projectionMatrix.copy(y.projectionMatrix), he(Z, N, De);
    };
    function he(Z, ne, se) {
      se === null ? Z.matrix.copy(ne.matrixWorld) : (Z.matrix.copy(se.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(ne.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(true), Z.projectionMatrix.copy(ne.projectionMatrix), Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = wi * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1);
    }
    this.getCamera = function() {
      return N;
    }, this.getFoveation = function() {
      if (!(u === null && d === null)) return c;
    }, this.setFoveation = function(Z) {
      c = Z, u !== null && (u.fixedFoveation = Z), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Z);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(N);
    }, this.getCameraTexture = function(Z) {
      return h[Z];
    };
    let Ie = null;
    function nt(Z, ne) {
      if (f = ne.getViewerPose(l || a), g = ne, f !== null) {
        const se = f.views;
        d !== null && (e.setRenderTargetFramebuffer(S, d.framebuffer), e.setRenderTarget(S));
        let De = false;
        se.length !== N.cameras.length && (N.cameras.length = 0, De = true);
        for (let Ge = 0; Ge < se.length; Ge++) {
          const qe = se[Ge];
          let je = null;
          if (d !== null) je = d.getViewport(qe);
          else {
            const ot = m.getViewSubImage(u, qe);
            je = ot.viewport, Ge === 0 && (e.setRenderTargetTextures(S, ot.colorTexture, ot.depthStencilTexture), e.setRenderTarget(S));
          }
          let Fe = R[Ge];
          Fe === void 0 && (Fe = new Ut(), Fe.layers.enable(Ge), Fe.viewport = new at(), R[Ge] = Fe), Fe.matrix.fromArray(qe.transform.matrix), Fe.matrix.decompose(Fe.position, Fe.quaternion, Fe.scale), Fe.projectionMatrix.fromArray(qe.projectionMatrix), Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(), Fe.viewport.set(je.x, je.y, je.width, je.height), Ge === 0 && (N.matrix.copy(Fe.matrix), N.matrix.decompose(N.position, N.quaternion, N.scale)), De === true && N.cameras.push(Fe);
        }
        const be = r.enabledFeatures;
        if (be && be.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && E) {
          m = n.getBinding();
          const Ge = m.getDepthInformation(se[0]);
          Ge && Ge.isValid && Ge.texture && p.init(Ge, r.renderState);
        }
        if (be && be.includes("camera-access") && E) {
          e.state.unbindTexture(), m = n.getBinding();
          for (let Ge = 0; Ge < se.length; Ge++) {
            const qe = se[Ge].camera;
            if (qe) {
              let je = h[qe];
              je || (je = new Zo(), h[qe] = je);
              const Fe = m.getCameraImage(qe);
              je.sourceTexture = Fe;
            }
          }
        }
      }
      for (let se = 0; se < w.length; se++) {
        const De = A[se], be = w[se];
        De !== null && be !== void 0 && be.update(De, ne, l || a);
      }
      Ie && Ie(Z, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), g = null;
    }
    const tt = new rl();
    tt.setAnimationLoop(nt), this.setAnimationLoop = function(Z) {
      Ie = Z;
    }, this.dispose = function() {
    };
  }
}
const Ln = new jt(), Gp = new it();
function Hp(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === true && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, el(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, M, T, S) {
    h.isMeshBasicMaterial ? s(p, h) : h.isMeshLambertMaterial ? (s(p, h), h.envMap && (p.envMapIntensity.value = h.envMapIntensity)) : h.isMeshToonMaterial ? (s(p, h), m(p, h)) : h.isMeshPhongMaterial ? (s(p, h), f(p, h), h.envMap && (p.envMapIntensity.value = h.envMapIntensity)) : h.isMeshStandardMaterial ? (s(p, h), u(p, h), h.isMeshPhysicalMaterial && d(p, h, S)) : h.isMeshMatcapMaterial ? (s(p, h), g(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), E(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (a(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? c(p, h, M, T) : h.isSpriteMaterial ? l(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = false);
  }
  function s(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === wt && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === wt && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const M = e.get(h), T = M.envMap, S = M.envMapRotation;
    T && (p.envMap.value = T, Ln.copy(S), Ln.x *= -1, Ln.y *= -1, Ln.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === false && (Ln.y *= -1, Ln.z *= -1), p.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(Ln)), p.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function a(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function o(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function c(p, h, M, T) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * M, p.scale.value = T * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function l(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function f(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function m(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function u(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function d(p, h, M) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === wt && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = M.texture, p.transmissionSamplerSize.value.set(M.width, M.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function E(p, h) {
    const M = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(M.matrixWorld), p.nearDistance.value = M.shadow.camera.near, p.farDistance.value = M.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function kp(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(M, T) {
    const S = T.program;
    n.uniformBlockBinding(M, S);
  }
  function l(M, T) {
    let S = r[M.id];
    S === void 0 && (g(M), S = f(M), r[M.id] = S, M.addEventListener("dispose", p));
    const w = T.program;
    n.updateUBOMapping(M, w);
    const A = e.render.frame;
    s[M.id] !== A && (u(M), s[M.id] = A);
  }
  function f(M) {
    const T = m();
    M.__bindingPointIndex = T;
    const S = i.createBuffer(), w = M.__size, A = M.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, w, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, S), S;
  }
  function m() {
    for (let M = 0; M < o; M++) if (a.indexOf(M) === -1) return a.push(M), M;
    return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(M) {
    const T = r[M.id], S = M.uniforms, w = M.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let A = 0, C = S.length; A < C; A++) {
      const x = Array.isArray(S[A]) ? S[A] : [S[A]];
      for (let y = 0, O = x.length; y < O; y++) {
        const R = x[y];
        if (d(R, A, y, w) === true) {
          const N = R.__offset, B = Array.isArray(R.value) ? R.value : [R.value];
          let k = 0;
          for (let G = 0; G < B.length; G++) {
            const V = B[G], H = E(V);
            typeof V == "number" || typeof V == "boolean" ? (R.__data[0] = V, i.bufferSubData(i.UNIFORM_BUFFER, N + k, R.__data)) : V.isMatrix3 ? (R.__data[0] = V.elements[0], R.__data[1] = V.elements[1], R.__data[2] = V.elements[2], R.__data[3] = 0, R.__data[4] = V.elements[3], R.__data[5] = V.elements[4], R.__data[6] = V.elements[5], R.__data[7] = 0, R.__data[8] = V.elements[6], R.__data[9] = V.elements[7], R.__data[10] = V.elements[8], R.__data[11] = 0) : (V.toArray(R.__data, k), k += H.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, N, R.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function d(M, T, S, w) {
    const A = M.value, C = T + "_" + S;
    if (w[C] === void 0) return typeof A == "number" || typeof A == "boolean" ? w[C] = A : w[C] = A.clone(), true;
    {
      const x = w[C];
      if (typeof A == "number" || typeof A == "boolean") {
        if (x !== A) return w[C] = A, true;
      } else if (x.equals(A) === false) return x.copy(A), true;
    }
    return false;
  }
  function g(M) {
    const T = M.uniforms;
    let S = 0;
    const w = 16;
    for (let C = 0, x = T.length; C < x; C++) {
      const y = Array.isArray(T[C]) ? T[C] : [T[C]];
      for (let O = 0, R = y.length; O < R; O++) {
        const N = y[O], B = Array.isArray(N.value) ? N.value : [N.value];
        for (let k = 0, G = B.length; k < G; k++) {
          const V = B[k], H = E(V), Q = S % w, $ = Q % H.boundary, ce = Q + $;
          S += $, ce !== 0 && w - ce < H.storage && (S += w - ce), N.__data = new Float32Array(H.storage / Float32Array.BYTES_PER_ELEMENT), N.__offset = S, S += H.storage;
        }
      }
    }
    const A = S % w;
    return A > 0 && (S += w - A), M.__size = S, M.__cache = {}, this;
  }
  function E(M) {
    const T = { boundary: 0, storage: 0 };
    return typeof M == "number" || typeof M == "boolean" ? (T.boundary = 4, T.storage = 4) : M.isVector2 ? (T.boundary = 8, T.storage = 8) : M.isVector3 || M.isColor ? (T.boundary = 16, T.storage = 12) : M.isVector4 ? (T.boundary = 16, T.storage = 16) : M.isMatrix3 ? (T.boundary = 48, T.storage = 48) : M.isMatrix4 ? (T.boundary = 64, T.storage = 64) : M.isTexture ? we("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : we("WebGLRenderer: Unsupported uniform value type.", M), T;
  }
  function p(M) {
    const T = M.target;
    T.removeEventListener("dispose", p);
    const S = a.indexOf(T.__bindingPointIndex);
    a.splice(S, 1), i.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id];
  }
  function h() {
    for (const M in r) i.deleteBuffer(r[M]);
    a = [], r = {}, s = {};
  }
  return { bind: c, update: l, dispose: h };
}
const Wp = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let kt = null;
function Xp() {
  return kt === null && (kt = new Ic(Wp, 16, 16, oi, hn), kt.name = "DFG_LUT", kt.minFilter = Et, kt.magFilter = Et, kt.wrapS = ln, kt.wrapT = ln, kt.generateMipmaps = false, kt.needsUpdate = true), kt;
}
class om {
  constructor(e = {}) {
    const { canvas: t = $l(), context: n = null, depth: r = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: f = "default", failIfMajorPerformanceCaveat: m = false, reversedDepthBuffer: u = false, outputBufferType: d = Dt } = e;
    this.isWebGLRenderer = true;
    let g;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      g = n.getContextAttributes().alpha;
    } else g = a;
    const E = d, p = /* @__PURE__ */ new Set([ta, ea, Qs]), h = /* @__PURE__ */ new Set([Dt, $t, Ti, bi, js, Js]), M = new Uint32Array(4), T = new Int32Array(4);
    let S = null, w = null;
    const A = [], C = [];
    let x = null;
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Yt, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const y = this;
    let O = false;
    this._outputColorSpace = It;
    let R = 0, N = 0, B = null, k = -1, G = null;
    const V = new at(), H = new at();
    let Q = null;
    const $ = new Ve(0);
    let ce = 0, pe = t.width, he = t.height, Ie = 1, nt = null, tt = null;
    const Z = new at(0, 0, pe, he), ne = new at(0, 0, pe, he);
    let se = false;
    const De = new aa();
    let be = false, Re = false;
    const dt = new it(), Ge = new I(), qe = new at(), je = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Fe = false;
    function ot() {
      return B === null ? Ie : 1;
    }
    let P = n;
    function ct(v, U) {
      return t.getContext(v, U);
    }
    try {
      const v = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: f, failIfMajorPerformanceCaveat: m };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ks}`), t.addEventListener("webglcontextlost", ge, false), t.addEventListener("webglcontextrestored", Ce, false), t.addEventListener("webglcontextcreationerror", et, false), P === null) {
        const U = "webgl2";
        if (P = ct(U, v), P === null) throw ct(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw We("WebGLRenderer: " + v.message), v;
    }
    let Xe, Qe, Me, b, _, L, Y, K, q, me, ie, Te, Ae, j, ee, _e, xe, ue, Oe, D, re, te, de;
    function J() {
      Xe = new qf(P), Xe.init(), re = new Fp(P, Xe), Qe = new Bf(P, Xe, e, re), Me = new Up(P, Xe), Qe.reversedDepthBuffer && u && Me.buffers.depth.setReversed(true), b = new Kf(P), _ = new Mp(), L = new Np(P, Xe, Me, _, Qe, re, b), Y = new Xf(y), K = new Qc(P), te = new Ff(P, K), q = new Yf(P, K, b, te), me = new jf(P, q, K, te, b), ue = new $f(P, Qe, L), ee = new zf(_), ie = new vp(y, Y, Xe, Qe, te, ee), Te = new Hp(y, _), Ae = new Ep(), j = new Rp(Xe), xe = new Nf(y, Y, Me, me, g, c), _e = new Ip(y, me, Qe), de = new kp(P, b, Qe, Me), Oe = new Of(P, Xe, b), D = new Zf(P, Xe, b), b.programs = ie.programs, y.capabilities = Qe, y.extensions = Xe, y.properties = _, y.renderLists = Ae, y.shadowMap = _e, y.state = Me, y.info = b;
    }
    J(), E !== Dt && (x = new Qf(E, t.width, t.height, r, s));
    const X = new Vp(y, P);
    this.xr = X, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Xe.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Xe.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return Ie;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (Ie = v, this.setSize(pe, he, false));
    }, this.getSize = function(v) {
      return v.set(pe, he);
    }, this.setSize = function(v, U, W = true) {
      if (X.isPresenting) {
        we("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      pe = v, he = U, t.width = Math.floor(v * Ie), t.height = Math.floor(U * Ie), W === true && (t.style.width = v + "px", t.style.height = U + "px"), x !== null && x.setSize(t.width, t.height), this.setViewport(0, 0, v, U);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(pe * Ie, he * Ie).floor();
    }, this.setDrawingBufferSize = function(v, U, W) {
      pe = v, he = U, Ie = W, t.width = Math.floor(v * W), t.height = Math.floor(U * W), this.setViewport(0, 0, v, U);
    }, this.setEffects = function(v) {
      if (E === Dt) {
        console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (v) {
        for (let U = 0; U < v.length; U++) if (v[U].isOutputPass === true) {
          console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      x.setEffects(v || []);
    }, this.getCurrentViewport = function(v) {
      return v.copy(V);
    }, this.getViewport = function(v) {
      return v.copy(Z);
    }, this.setViewport = function(v, U, W, z) {
      v.isVector4 ? Z.set(v.x, v.y, v.z, v.w) : Z.set(v, U, W, z), Me.viewport(V.copy(Z).multiplyScalar(Ie).round());
    }, this.getScissor = function(v) {
      return v.copy(ne);
    }, this.setScissor = function(v, U, W, z) {
      v.isVector4 ? ne.set(v.x, v.y, v.z, v.w) : ne.set(v, U, W, z), Me.scissor(H.copy(ne).multiplyScalar(Ie).round());
    }, this.getScissorTest = function() {
      return se;
    }, this.setScissorTest = function(v) {
      Me.setScissorTest(se = v);
    }, this.setOpaqueSort = function(v) {
      nt = v;
    }, this.setTransparentSort = function(v) {
      tt = v;
    }, this.getClearColor = function(v) {
      return v.copy(xe.getClearColor());
    }, this.setClearColor = function() {
      xe.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return xe.getClearAlpha();
    }, this.setClearAlpha = function() {
      xe.setClearAlpha(...arguments);
    }, this.clear = function(v = true, U = true, W = true) {
      let z = 0;
      if (v) {
        let F = false;
        if (B !== null) {
          const oe = B.texture.format;
          F = p.has(oe);
        }
        if (F) {
          const oe = B.texture.type, fe = h.has(oe), le = xe.getClearColor(), ve = xe.getClearAlpha(), Ee = le.r, Pe = le.g, Be = le.b;
          fe ? (M[0] = Ee, M[1] = Pe, M[2] = Be, M[3] = ve, P.clearBufferuiv(P.COLOR, 0, M)) : (T[0] = Ee, T[1] = Pe, T[2] = Be, T[3] = ve, P.clearBufferiv(P.COLOR, 0, T));
        } else z |= P.COLOR_BUFFER_BIT;
      }
      U && (z |= P.DEPTH_BUFFER_BIT), W && (z |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), z !== 0 && P.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ge, false), t.removeEventListener("webglcontextrestored", Ce, false), t.removeEventListener("webglcontextcreationerror", et, false), xe.dispose(), Ae.dispose(), j.dispose(), _.dispose(), Y.dispose(), me.dispose(), te.dispose(), de.dispose(), ie.dispose(), X.dispose(), X.removeEventListener("sessionstart", fa), X.removeEventListener("sessionend", da), bn.stop();
    };
    function ge(v) {
      v.preventDefault(), Ra("WebGLRenderer: Context Lost."), O = true;
    }
    function Ce() {
      Ra("WebGLRenderer: Context Restored."), O = false;
      const v = b.autoReset, U = _e.enabled, W = _e.autoUpdate, z = _e.needsUpdate, F = _e.type;
      J(), b.autoReset = v, _e.enabled = U, _e.autoUpdate = W, _e.needsUpdate = z, _e.type = F;
    }
    function et(v) {
      We("WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function Ye(v) {
      const U = v.target;
      U.removeEventListener("dispose", Ye), Qt(U);
    }
    function Qt(v) {
      en(v), _.remove(v);
    }
    function en(v) {
      const U = _.get(v).programs;
      U !== void 0 && (U.forEach(function(W) {
        ie.releaseProgram(W);
      }), v.isShaderMaterial && ie.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, U, W, z, F, oe) {
      U === null && (U = je);
      const fe = F.isMesh && F.matrixWorld.determinant() < 0, le = hl(v, U, W, z, F);
      Me.setMaterial(z, fe);
      let ve = W.index, Ee = 1;
      if (z.wireframe === true) {
        if (ve = q.getWireframeAttribute(W), ve === void 0) return;
        Ee = 2;
      }
      const Pe = W.drawRange, Be = W.attributes.position;
      let ye = Pe.start * Ee, Ke = (Pe.start + Pe.count) * Ee;
      oe !== null && (ye = Math.max(ye, oe.start * Ee), Ke = Math.min(Ke, (oe.start + oe.count) * Ee)), ve !== null ? (ye = Math.max(ye, 0), Ke = Math.min(Ke, ve.count)) : Be != null && (ye = Math.max(ye, 0), Ke = Math.min(Ke, Be.count));
      const lt = Ke - ye;
      if (lt < 0 || lt === 1 / 0) return;
      te.setup(F, z, le, W, ve);
      let st, $e = Oe;
      if (ve !== null && (st = K.get(ve), $e = D, $e.setIndex(st)), F.isMesh) z.wireframe === true ? (Me.setLineWidth(z.wireframeLinewidth * ot()), $e.setMode(P.LINES)) : $e.setMode(P.TRIANGLES);
      else if (F.isLine) {
        let vt = z.linewidth;
        vt === void 0 && (vt = 1), Me.setLineWidth(vt * ot()), F.isLineSegments ? $e.setMode(P.LINES) : F.isLineLoop ? $e.setMode(P.LINE_LOOP) : $e.setMode(P.LINE_STRIP);
      } else F.isPoints ? $e.setMode(P.POINTS) : F.isSprite && $e.setMode(P.TRIANGLES);
      if (F.isBatchedMesh) if (F._multiDrawInstances !== null) dr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), $e.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances);
      else if (Xe.get("WEBGL_multi_draw")) $e.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
      else {
        const vt = F._multiDrawStarts, Se = F._multiDrawCounts, Rt = F._multiDrawCount, ke = ve ? K.get(ve).bytesPerElement : 1, Nt = _.get(z).currentProgram.getUniforms();
        for (let Gt = 0; Gt < Rt; Gt++) Nt.setValue(P, "_gl_DrawID", Gt), $e.render(vt[Gt] / ke, Se[Gt]);
      }
      else if (F.isInstancedMesh) $e.renderInstances(ye, lt, F.count);
      else if (W.isInstancedBufferGeometry) {
        const vt = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, Se = Math.min(W.instanceCount, vt);
        $e.renderInstances(ye, lt, Se);
      } else $e.render(ye, lt);
    };
    function ha(v, U, W) {
      v.transparent === true && v.side === on && v.forceSinglePass === false ? (v.side = wt, v.needsUpdate = true, Li(v, U, W), v.side = Tn, v.needsUpdate = true, Li(v, U, W), v.side = on) : Li(v, U, W);
    }
    this.compile = function(v, U, W = null) {
      W === null && (W = v), w = j.get(W), w.init(U), C.push(w), W.traverseVisible(function(F) {
        F.isLight && F.layers.test(U.layers) && (w.pushLight(F), F.castShadow && w.pushShadow(F));
      }), v !== W && v.traverseVisible(function(F) {
        F.isLight && F.layers.test(U.layers) && (w.pushLight(F), F.castShadow && w.pushShadow(F));
      }), w.setupLights();
      const z = /* @__PURE__ */ new Set();
      return v.traverse(function(F) {
        if (!(F.isMesh || F.isPoints || F.isLine || F.isSprite)) return;
        const oe = F.material;
        if (oe) if (Array.isArray(oe)) for (let fe = 0; fe < oe.length; fe++) {
          const le = oe[fe];
          ha(le, W, F), z.add(le);
        }
        else ha(oe, W, F), z.add(oe);
      }), w = C.pop(), z;
    }, this.compileAsync = function(v, U, W = null) {
      const z = this.compile(v, U, W);
      return new Promise((F) => {
        function oe() {
          if (z.forEach(function(fe) {
            _.get(fe).currentProgram.isReady() && z.delete(fe);
          }), z.size === 0) {
            F(v);
            return;
          }
          setTimeout(oe, 10);
        }
        Xe.get("KHR_parallel_shader_compile") !== null ? oe() : setTimeout(oe, 10);
      });
    };
    let Mr = null;
    function ul(v) {
      Mr && Mr(v);
    }
    function fa() {
      bn.stop();
    }
    function da() {
      bn.start();
    }
    const bn = new rl();
    bn.setAnimationLoop(ul), typeof self < "u" && bn.setContext(self), this.setAnimationLoop = function(v) {
      Mr = v, X.setAnimationLoop(v), v === null ? bn.stop() : bn.start();
    }, X.addEventListener("sessionstart", fa), X.addEventListener("sessionend", da), this.render = function(v, U) {
      if (U !== void 0 && U.isCamera !== true) {
        We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (O === true) return;
      const W = X.enabled === true && X.isPresenting === true, z = x !== null && (B === null || W) && x.begin(y, B);
      if (v.matrixWorldAutoUpdate === true && v.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === true && U.updateMatrixWorld(), X.enabled === true && X.isPresenting === true && (x === null || x.isCompositing() === false) && (X.cameraAutoUpdate === true && X.updateCamera(U), U = X.getCamera()), v.isScene === true && v.onBeforeRender(y, v, U, B), w = j.get(v, C.length), w.init(U), C.push(w), dt.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), De.setFromProjectionMatrix(dt, qt, U.reversedDepth), Re = this.localClippingEnabled, be = ee.init(this.clippingPlanes, Re), S = Ae.get(v, A.length), S.init(), A.push(S), X.enabled === true && X.isPresenting === true) {
        const fe = y.xr.getDepthSensingMesh();
        fe !== null && Sr(fe, U, -1 / 0, y.sortObjects);
      }
      Sr(v, U, 0, y.sortObjects), S.finish(), y.sortObjects === true && S.sort(nt, tt), Fe = X.enabled === false || X.isPresenting === false || X.hasDepthSensing() === false, Fe && xe.addToRenderList(S, v), this.info.render.frame++, be === true && ee.beginShadows();
      const F = w.state.shadowsArray;
      if (_e.render(F, v, U), be === true && ee.endShadows(), this.info.autoReset === true && this.info.reset(), (z && x.hasRenderPass()) === false) {
        const fe = S.opaque, le = S.transmissive;
        if (w.setupLights(), U.isArrayCamera) {
          const ve = U.cameras;
          if (le.length > 0) for (let Ee = 0, Pe = ve.length; Ee < Pe; Ee++) {
            const Be = ve[Ee];
            ma(fe, le, v, Be);
          }
          Fe && xe.render(v);
          for (let Ee = 0, Pe = ve.length; Ee < Pe; Ee++) {
            const Be = ve[Ee];
            pa(S, v, Be, Be.viewport);
          }
        } else le.length > 0 && ma(fe, le, v, U), Fe && xe.render(v), pa(S, v, U);
      }
      B !== null && N === 0 && (L.updateMultisampleRenderTarget(B), L.updateRenderTargetMipmap(B)), z && x.end(y), v.isScene === true && v.onAfterRender(y, v, U), te.resetDefaultState(), k = -1, G = null, C.pop(), C.length > 0 ? (w = C[C.length - 1], be === true && ee.setGlobalState(y.clippingPlanes, w.state.camera)) : w = null, A.pop(), A.length > 0 ? S = A[A.length - 1] : S = null;
    };
    function Sr(v, U, W, z) {
      if (v.visible === false) return;
      if (v.layers.test(U.layers)) {
        if (v.isGroup) W = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === true && v.update(U);
        else if (v.isLight) w.pushLight(v), v.castShadow && w.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || De.intersectsSprite(v)) {
            z && qe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(dt);
            const fe = me.update(v), le = v.material;
            le.visible && S.push(v, fe, le, W, qe.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || De.intersectsObject(v))) {
          const fe = me.update(v), le = v.material;
          if (z && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), qe.copy(v.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), qe.copy(fe.boundingSphere.center)), qe.applyMatrix4(v.matrixWorld).applyMatrix4(dt)), Array.isArray(le)) {
            const ve = fe.groups;
            for (let Ee = 0, Pe = ve.length; Ee < Pe; Ee++) {
              const Be = ve[Ee], ye = le[Be.materialIndex];
              ye && ye.visible && S.push(v, fe, ye, W, qe.z, Be);
            }
          } else le.visible && S.push(v, fe, le, W, qe.z, null);
        }
      }
      const oe = v.children;
      for (let fe = 0, le = oe.length; fe < le; fe++) Sr(oe[fe], U, W, z);
    }
    function pa(v, U, W, z) {
      const { opaque: F, transmissive: oe, transparent: fe } = v;
      w.setupLightsView(W), be === true && ee.setGlobalState(y.clippingPlanes, W), z && Me.viewport(V.copy(z)), F.length > 0 && Di(F, U, W), oe.length > 0 && Di(oe, U, W), fe.length > 0 && Di(fe, U, W), Me.buffers.depth.setTest(true), Me.buffers.depth.setMask(true), Me.buffers.color.setMask(true), Me.setPolygonOffset(false);
    }
    function ma(v, U, W, z) {
      if ((W.isScene === true ? W.overrideMaterial : null) !== null) return;
      if (w.state.transmissionRenderTarget[z.id] === void 0) {
        const ye = Xe.has("EXT_color_buffer_half_float") || Xe.has("EXT_color_buffer_float");
        w.state.transmissionRenderTarget[z.id] = new Zt(1, 1, { generateMipmaps: true, type: ye ? hn : Dt, minFilter: Fn, samples: Math.max(4, Qe.samples), stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: He.workingColorSpace });
      }
      const oe = w.state.transmissionRenderTarget[z.id], fe = z.viewport || V;
      oe.setSize(fe.z * y.transmissionResolutionScale, fe.w * y.transmissionResolutionScale);
      const le = y.getRenderTarget(), ve = y.getActiveCubeFace(), Ee = y.getActiveMipmapLevel();
      y.setRenderTarget(oe), y.getClearColor($), ce = y.getClearAlpha(), ce < 1 && y.setClearColor(16777215, 0.5), y.clear(), Fe && xe.render(W);
      const Pe = y.toneMapping;
      y.toneMapping = Yt;
      const Be = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), w.setupLightsView(z), be === true && ee.setGlobalState(y.clippingPlanes, z), Di(v, W, z), L.updateMultisampleRenderTarget(oe), L.updateRenderTargetMipmap(oe), Xe.has("WEBGL_multisampled_render_to_texture") === false) {
        let ye = false;
        for (let Ke = 0, lt = U.length; Ke < lt; Ke++) {
          const st = U[Ke], { object: $e, geometry: vt, material: Se, group: Rt } = st;
          if (Se.side === on && $e.layers.test(z.layers)) {
            const ke = Se.side;
            Se.side = wt, Se.needsUpdate = true, _a($e, W, z, vt, Se, Rt), Se.side = ke, Se.needsUpdate = true, ye = true;
          }
        }
        ye === true && (L.updateMultisampleRenderTarget(oe), L.updateRenderTargetMipmap(oe));
      }
      y.setRenderTarget(le, ve, Ee), y.setClearColor($, ce), Be !== void 0 && (z.viewport = Be), y.toneMapping = Pe;
    }
    function Di(v, U, W) {
      const z = U.isScene === true ? U.overrideMaterial : null;
      for (let F = 0, oe = v.length; F < oe; F++) {
        const fe = v[F], { object: le, geometry: ve, group: Ee } = fe;
        let Pe = fe.material;
        Pe.allowOverride === true && z !== null && (Pe = z), le.layers.test(W.layers) && _a(le, U, W, ve, Pe, Ee);
      }
    }
    function _a(v, U, W, z, F, oe) {
      v.onBeforeRender(y, U, W, z, F, oe), v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), F.onBeforeRender(y, U, W, z, v, oe), F.transparent === true && F.side === on && F.forceSinglePass === false ? (F.side = wt, F.needsUpdate = true, y.renderBufferDirect(W, U, z, F, v, oe), F.side = Tn, F.needsUpdate = true, y.renderBufferDirect(W, U, z, F, v, oe), F.side = on) : y.renderBufferDirect(W, U, z, F, v, oe), v.onAfterRender(y, U, W, z, F, oe);
    }
    function Li(v, U, W) {
      U.isScene !== true && (U = je);
      const z = _.get(v), F = w.state.lights, oe = w.state.shadowsArray, fe = F.state.version, le = ie.getParameters(v, F.state, oe, U, W), ve = ie.getProgramCacheKey(le);
      let Ee = z.programs;
      z.environment = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? U.environment : null, z.fog = U.fog;
      const Pe = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap;
      z.envMap = Y.get(v.envMap || z.environment, Pe), z.envMapRotation = z.environment !== null && v.envMap === null ? U.environmentRotation : v.envMapRotation, Ee === void 0 && (v.addEventListener("dispose", Ye), Ee = /* @__PURE__ */ new Map(), z.programs = Ee);
      let Be = Ee.get(ve);
      if (Be !== void 0) {
        if (z.currentProgram === Be && z.lightsStateVersion === fe) return xa(v, le), Be;
      } else le.uniforms = ie.getUniforms(v), v.onBeforeCompile(le, y), Be = ie.acquireProgram(le, ve), Ee.set(ve, Be), z.uniforms = le.uniforms;
      const ye = z.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === true) && (ye.clippingPlanes = ee.uniform), xa(v, le), z.needsLights = dl(v), z.lightsStateVersion = fe, z.needsLights && (ye.ambientLightColor.value = F.state.ambient, ye.lightProbe.value = F.state.probe, ye.directionalLights.value = F.state.directional, ye.directionalLightShadows.value = F.state.directionalShadow, ye.spotLights.value = F.state.spot, ye.spotLightShadows.value = F.state.spotShadow, ye.rectAreaLights.value = F.state.rectArea, ye.ltc_1.value = F.state.rectAreaLTC1, ye.ltc_2.value = F.state.rectAreaLTC2, ye.pointLights.value = F.state.point, ye.pointLightShadows.value = F.state.pointShadow, ye.hemisphereLights.value = F.state.hemi, ye.directionalShadowMatrix.value = F.state.directionalShadowMatrix, ye.spotLightMatrix.value = F.state.spotLightMatrix, ye.spotLightMap.value = F.state.spotLightMap, ye.pointShadowMatrix.value = F.state.pointShadowMatrix), z.currentProgram = Be, z.uniformsList = null, Be;
    }
    function ga(v) {
      if (v.uniformsList === null) {
        const U = v.currentProgram.getUniforms();
        v.uniformsList = ur.seqWithValue(U.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function xa(v, U) {
      const W = _.get(v);
      W.outputColorSpace = U.outputColorSpace, W.batching = U.batching, W.batchingColor = U.batchingColor, W.instancing = U.instancing, W.instancingColor = U.instancingColor, W.instancingMorph = U.instancingMorph, W.skinning = U.skinning, W.morphTargets = U.morphTargets, W.morphNormals = U.morphNormals, W.morphColors = U.morphColors, W.morphTargetsCount = U.morphTargetsCount, W.numClippingPlanes = U.numClippingPlanes, W.numIntersection = U.numClipIntersection, W.vertexAlphas = U.vertexAlphas, W.vertexTangents = U.vertexTangents, W.toneMapping = U.toneMapping;
    }
    function hl(v, U, W, z, F) {
      U.isScene !== true && (U = je), L.resetTextureUnits();
      const oe = U.fog, fe = z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial ? U.environment : null, le = B === null ? y.outputColorSpace : B.isXRRenderTarget === true ? B.texture.colorSpace : li, ve = z.isMeshStandardMaterial || z.isMeshLambertMaterial && !z.envMap || z.isMeshPhongMaterial && !z.envMap, Ee = Y.get(z.envMap || fe, ve), Pe = z.vertexColors === true && !!W.attributes.color && W.attributes.color.itemSize === 4, Be = !!W.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), ye = !!W.morphAttributes.position, Ke = !!W.morphAttributes.normal, lt = !!W.morphAttributes.color;
      let st = Yt;
      z.toneMapped && (B === null || B.isXRRenderTarget === true) && (st = y.toneMapping);
      const $e = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, vt = $e !== void 0 ? $e.length : 0, Se = _.get(z), Rt = w.state.lights;
      if (be === true && (Re === true || v !== G)) {
        const pt = v === G && z.id === k;
        ee.setState(z, v, pt);
      }
      let ke = false;
      z.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== Rt.state.version || Se.outputColorSpace !== le || F.isBatchedMesh && Se.batching === false || !F.isBatchedMesh && Se.batching === true || F.isBatchedMesh && Se.batchingColor === true && F.colorTexture === null || F.isBatchedMesh && Se.batchingColor === false && F.colorTexture !== null || F.isInstancedMesh && Se.instancing === false || !F.isInstancedMesh && Se.instancing === true || F.isSkinnedMesh && Se.skinning === false || !F.isSkinnedMesh && Se.skinning === true || F.isInstancedMesh && Se.instancingColor === true && F.instanceColor === null || F.isInstancedMesh && Se.instancingColor === false && F.instanceColor !== null || F.isInstancedMesh && Se.instancingMorph === true && F.morphTexture === null || F.isInstancedMesh && Se.instancingMorph === false && F.morphTexture !== null || Se.envMap !== Ee || z.fog === true && Se.fog !== oe || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== ee.numPlanes || Se.numIntersection !== ee.numIntersection) || Se.vertexAlphas !== Pe || Se.vertexTangents !== Be || Se.morphTargets !== ye || Se.morphNormals !== Ke || Se.morphColors !== lt || Se.toneMapping !== st || Se.morphTargetsCount !== vt) && (ke = true) : (ke = true, Se.__version = z.version);
      let Nt = Se.currentProgram;
      ke === true && (Nt = Li(z, U, F));
      let Gt = false, An = false, Vn = false;
      const Je = Nt.getUniforms(), gt = Se.uniforms;
      if (Me.useProgram(Nt.program) && (Gt = true, An = true, Vn = true), z.id !== k && (k = z.id, An = true), Gt || G !== v) {
        Me.buffers.depth.getReversed() && v.reversedDepth !== true && (v._reversedDepth = true, v.updateProjectionMatrix()), Je.setValue(P, "projectionMatrix", v.projectionMatrix), Je.setValue(P, "viewMatrix", v.matrixWorldInverse);
        const mn = Je.map.cameraPosition;
        mn !== void 0 && mn.setValue(P, Ge.setFromMatrixPosition(v.matrixWorld)), Qe.logarithmicDepthBuffer && Je.setValue(P, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && Je.setValue(P, "isOrthographic", v.isOrthographicCamera === true), G !== v && (G = v, An = true, Vn = true);
      }
      if (Se.needsLights && (Rt.state.directionalShadowMap.length > 0 && Je.setValue(P, "directionalShadowMap", Rt.state.directionalShadowMap, L), Rt.state.spotShadowMap.length > 0 && Je.setValue(P, "spotShadowMap", Rt.state.spotShadowMap, L), Rt.state.pointShadowMap.length > 0 && Je.setValue(P, "pointShadowMap", Rt.state.pointShadowMap, L)), F.isSkinnedMesh) {
        Je.setOptional(P, F, "bindMatrix"), Je.setOptional(P, F, "bindMatrixInverse");
        const pt = F.skeleton;
        pt && (pt.boneTexture === null && pt.computeBoneTexture(), Je.setValue(P, "boneTexture", pt.boneTexture, L));
      }
      F.isBatchedMesh && (Je.setOptional(P, F, "batchingTexture"), Je.setValue(P, "batchingTexture", F._matricesTexture, L), Je.setOptional(P, F, "batchingIdTexture"), Je.setValue(P, "batchingIdTexture", F._indirectTexture, L), Je.setOptional(P, F, "batchingColorTexture"), F._colorsTexture !== null && Je.setValue(P, "batchingColorTexture", F._colorsTexture, L));
      const pn = W.morphAttributes;
      if ((pn.position !== void 0 || pn.normal !== void 0 || pn.color !== void 0) && ue.update(F, W, Nt), (An || Se.receiveShadow !== F.receiveShadow) && (Se.receiveShadow = F.receiveShadow, Je.setValue(P, "receiveShadow", F.receiveShadow)), (z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial) && z.envMap === null && U.environment !== null && (gt.envMapIntensity.value = U.environmentIntensity), gt.dfgLUT !== void 0 && (gt.dfgLUT.value = Xp()), An && (Je.setValue(P, "toneMappingExposure", y.toneMappingExposure), Se.needsLights && fl(gt, Vn), oe && z.fog === true && Te.refreshFogUniforms(gt, oe), Te.refreshMaterialUniforms(gt, z, Ie, he, w.state.transmissionRenderTarget[v.id]), ur.upload(P, ga(Se), gt, L)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (ur.upload(P, ga(Se), gt, L), z.uniformsNeedUpdate = false), z.isSpriteMaterial && Je.setValue(P, "center", F.center), Je.setValue(P, "modelViewMatrix", F.modelViewMatrix), Je.setValue(P, "normalMatrix", F.normalMatrix), Je.setValue(P, "modelMatrix", F.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const pt = z.uniformsGroups;
        for (let mn = 0, Gn = pt.length; mn < Gn; mn++) {
          const va = pt[mn];
          de.update(va, Nt), de.bind(va, Nt);
        }
      }
      return Nt;
    }
    function fl(v, U) {
      v.ambientLightColor.needsUpdate = U, v.lightProbe.needsUpdate = U, v.directionalLights.needsUpdate = U, v.directionalLightShadows.needsUpdate = U, v.pointLights.needsUpdate = U, v.pointLightShadows.needsUpdate = U, v.spotLights.needsUpdate = U, v.spotLightShadows.needsUpdate = U, v.rectAreaLights.needsUpdate = U, v.hemisphereLights.needsUpdate = U;
    }
    function dl(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === true;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return N;
    }, this.getRenderTarget = function() {
      return B;
    }, this.setRenderTargetTextures = function(v, U, W) {
      const z = _.get(v);
      z.__autoAllocateDepthBuffer = v.resolveDepthBuffer === false, z.__autoAllocateDepthBuffer === false && (z.__useRenderToTexture = false), _.get(v.texture).__webglTexture = U, _.get(v.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : W, z.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(v, U) {
      const W = _.get(v);
      W.__webglFramebuffer = U, W.__useDefaultFramebuffer = U === void 0;
    };
    const pl = P.createFramebuffer();
    this.setRenderTarget = function(v, U = 0, W = 0) {
      B = v, R = U, N = W;
      let z = null, F = false, oe = false;
      if (v) {
        const le = _.get(v);
        if (le.__useDefaultFramebuffer !== void 0) {
          Me.bindFramebuffer(P.FRAMEBUFFER, le.__webglFramebuffer), V.copy(v.viewport), H.copy(v.scissor), Q = v.scissorTest, Me.viewport(V), Me.scissor(H), Me.setScissorTest(Q), k = -1;
          return;
        } else if (le.__webglFramebuffer === void 0) L.setupRenderTarget(v);
        else if (le.__hasExternalTextures) L.rebindTextures(v, _.get(v.texture).__webglTexture, _.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Pe = v.depthTexture;
          if (le.__boundDepthTexture !== Pe) {
            if (Pe !== null && _.has(Pe) && (v.width !== Pe.image.width || v.height !== Pe.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            L.setupDepthRenderbuffer(v);
          }
        }
        const ve = v.texture;
        (ve.isData3DTexture || ve.isDataArrayTexture || ve.isCompressedArrayTexture) && (oe = true);
        const Ee = _.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Ee[U]) ? z = Ee[U][W] : z = Ee[U], F = true) : v.samples > 0 && L.useMultisampledRTT(v) === false ? z = _.get(v).__webglMultisampledFramebuffer : Array.isArray(Ee) ? z = Ee[W] : z = Ee, V.copy(v.viewport), H.copy(v.scissor), Q = v.scissorTest;
      } else V.copy(Z).multiplyScalar(Ie).floor(), H.copy(ne).multiplyScalar(Ie).floor(), Q = se;
      if (W !== 0 && (z = pl), Me.bindFramebuffer(P.FRAMEBUFFER, z) && Me.drawBuffers(v, z), Me.viewport(V), Me.scissor(H), Me.setScissorTest(Q), F) {
        const le = _.get(v.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + U, le.__webglTexture, W);
      } else if (oe) {
        const le = U;
        for (let ve = 0; ve < v.textures.length; ve++) {
          const Ee = _.get(v.textures[ve]);
          P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0 + ve, Ee.__webglTexture, W, le);
        }
      } else if (v !== null && W !== 0) {
        const le = _.get(v.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, le.__webglTexture, W);
      }
      k = -1;
    }, this.readRenderTargetPixels = function(v, U, W, z, F, oe, fe, le = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ve = _.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && fe !== void 0 && (ve = ve[fe]), ve) {
        Me.bindFramebuffer(P.FRAMEBUFFER, ve);
        try {
          const Ee = v.textures[le], Pe = Ee.format, Be = Ee.type;
          if (v.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + le), !Qe.textureFormatReadable(Pe)) {
            We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Qe.textureTypeReadable(Be)) {
            We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= v.width - z && W >= 0 && W <= v.height - F && P.readPixels(U, W, z, F, re.convert(Pe), re.convert(Be), oe);
        } finally {
          const Ee = B !== null ? _.get(B).__webglFramebuffer : null;
          Me.bindFramebuffer(P.FRAMEBUFFER, Ee);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, U, W, z, F, oe, fe, le = 0) {
      if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ve = _.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && fe !== void 0 && (ve = ve[fe]), ve) if (U >= 0 && U <= v.width - z && W >= 0 && W <= v.height - F) {
        Me.bindFramebuffer(P.FRAMEBUFFER, ve);
        const Ee = v.textures[le], Pe = Ee.format, Be = Ee.type;
        if (v.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + le), !Qe.textureFormatReadable(Pe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Qe.textureTypeReadable(Be)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const ye = P.createBuffer();
        P.bindBuffer(P.PIXEL_PACK_BUFFER, ye), P.bufferData(P.PIXEL_PACK_BUFFER, oe.byteLength, P.STREAM_READ), P.readPixels(U, W, z, F, re.convert(Pe), re.convert(Be), 0);
        const Ke = B !== null ? _.get(B).__webglFramebuffer : null;
        Me.bindFramebuffer(P.FRAMEBUFFER, Ke);
        const lt = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return P.flush(), await jl(P, lt, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, ye), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, oe), P.deleteBuffer(ye), P.deleteSync(lt), oe;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, U = null, W = 0) {
      const z = Math.pow(2, -W), F = Math.floor(v.image.width * z), oe = Math.floor(v.image.height * z), fe = U !== null ? U.x : 0, le = U !== null ? U.y : 0;
      L.setTexture2D(v, 0), P.copyTexSubImage2D(P.TEXTURE_2D, W, 0, 0, fe, le, F, oe), Me.unbindTexture();
    };
    const ml = P.createFramebuffer(), _l = P.createFramebuffer();
    this.copyTextureToTexture = function(v, U, W = null, z = null, F = 0, oe = 0) {
      let fe, le, ve, Ee, Pe, Be, ye, Ke, lt;
      const st = v.isCompressedTexture ? v.mipmaps[oe] : v.image;
      if (W !== null) fe = W.max.x - W.min.x, le = W.max.y - W.min.y, ve = W.isBox3 ? W.max.z - W.min.z : 1, Ee = W.min.x, Pe = W.min.y, Be = W.isBox3 ? W.min.z : 0;
      else {
        const gt = Math.pow(2, -F);
        fe = Math.floor(st.width * gt), le = Math.floor(st.height * gt), v.isDataArrayTexture ? ve = st.depth : v.isData3DTexture ? ve = Math.floor(st.depth * gt) : ve = 1, Ee = 0, Pe = 0, Be = 0;
      }
      z !== null ? (ye = z.x, Ke = z.y, lt = z.z) : (ye = 0, Ke = 0, lt = 0);
      const $e = re.convert(U.format), vt = re.convert(U.type);
      let Se;
      U.isData3DTexture ? (L.setTexture3D(U, 0), Se = P.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (L.setTexture2DArray(U, 0), Se = P.TEXTURE_2D_ARRAY) : (L.setTexture2D(U, 0), Se = P.TEXTURE_2D), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, U.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Rt = P.getParameter(P.UNPACK_ROW_LENGTH), ke = P.getParameter(P.UNPACK_IMAGE_HEIGHT), Nt = P.getParameter(P.UNPACK_SKIP_PIXELS), Gt = P.getParameter(P.UNPACK_SKIP_ROWS), An = P.getParameter(P.UNPACK_SKIP_IMAGES);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, st.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, st.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Ee), P.pixelStorei(P.UNPACK_SKIP_ROWS, Pe), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Be);
      const Vn = v.isDataArrayTexture || v.isData3DTexture, Je = U.isDataArrayTexture || U.isData3DTexture;
      if (v.isDepthTexture) {
        const gt = _.get(v), pn = _.get(U), pt = _.get(gt.__renderTarget), mn = _.get(pn.__renderTarget);
        Me.bindFramebuffer(P.READ_FRAMEBUFFER, pt.__webglFramebuffer), Me.bindFramebuffer(P.DRAW_FRAMEBUFFER, mn.__webglFramebuffer);
        for (let Gn = 0; Gn < ve; Gn++) Vn && (P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, _.get(v).__webglTexture, F, Be + Gn), P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, _.get(U).__webglTexture, oe, lt + Gn)), P.blitFramebuffer(Ee, Pe, fe, le, ye, Ke, fe, le, P.DEPTH_BUFFER_BIT, P.NEAREST);
        Me.bindFramebuffer(P.READ_FRAMEBUFFER, null), Me.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else if (F !== 0 || v.isRenderTargetTexture || _.has(v)) {
        const gt = _.get(v), pn = _.get(U);
        Me.bindFramebuffer(P.READ_FRAMEBUFFER, ml), Me.bindFramebuffer(P.DRAW_FRAMEBUFFER, _l);
        for (let pt = 0; pt < ve; pt++) Vn ? P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, gt.__webglTexture, F, Be + pt) : P.framebufferTexture2D(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, gt.__webglTexture, F), Je ? P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, pn.__webglTexture, oe, lt + pt) : P.framebufferTexture2D(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, pn.__webglTexture, oe), F !== 0 ? P.blitFramebuffer(Ee, Pe, fe, le, ye, Ke, fe, le, P.COLOR_BUFFER_BIT, P.NEAREST) : Je ? P.copyTexSubImage3D(Se, oe, ye, Ke, lt + pt, Ee, Pe, fe, le) : P.copyTexSubImage2D(Se, oe, ye, Ke, Ee, Pe, fe, le);
        Me.bindFramebuffer(P.READ_FRAMEBUFFER, null), Me.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else Je ? v.isDataTexture || v.isData3DTexture ? P.texSubImage3D(Se, oe, ye, Ke, lt, fe, le, ve, $e, vt, st.data) : U.isCompressedArrayTexture ? P.compressedTexSubImage3D(Se, oe, ye, Ke, lt, fe, le, ve, $e, st.data) : P.texSubImage3D(Se, oe, ye, Ke, lt, fe, le, ve, $e, vt, st) : v.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, oe, ye, Ke, fe, le, $e, vt, st.data) : v.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, oe, ye, Ke, st.width, st.height, $e, st.data) : P.texSubImage2D(P.TEXTURE_2D, oe, ye, Ke, fe, le, $e, vt, st);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, Rt), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ke), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Nt), P.pixelStorei(P.UNPACK_SKIP_ROWS, Gt), P.pixelStorei(P.UNPACK_SKIP_IMAGES, An), oe === 0 && U.generateMipmaps && P.generateMipmap(Se), Me.unbindTexture();
    }, this.initRenderTarget = function(v) {
      _.get(v).__webglFramebuffer === void 0 && L.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? L.setTextureCube(v, 0) : v.isData3DTexture ? L.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? L.setTexture2DArray(v, 0) : L.setTexture2D(v, 0), Me.unbindTexture();
    }, this.resetState = function() {
      R = 0, N = 0, B = null, Me.reset(), te.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return qt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = He._getDrawingBufferColorSpace(e), t.unpackColorSpace = He._getUnpackColorSpace();
  }
}
export {
  Yp as $,
  as as A,
  Gl as B,
  Ve as C,
  Ri as D,
  zn as E,
  Tn as F,
  Fi as G,
  Qp as H,
  Oc as I,
  rt as J,
  $p as K,
  Et as L,
  dn as M,
  En as N,
  ua as O,
  Ut as P,
  Ko as Q,
  Ks as R,
  It as S,
  bt as T,
  Dt as U,
  ze as V,
  Zt as W,
  Zp as X,
  Ho as Y,
  am as Z,
  qp as _,
  On as a,
  hi as a0,
  sm as a1,
  Xo as a2,
  In as a3,
  Gc as a4,
  hn as a5,
  im as a6,
  Sa as a7,
  qo as a8,
  Qo as a9,
  nm as aa,
  $o as ab,
  Jo as ac,
  bi as b,
  $t as c,
  il as d,
  Kp as e,
  wt as f,
  on as g,
  Jt as h,
  li as i,
  cn as j,
  fi as k,
  At as l,
  Kt as m,
  at as n,
  jt as o,
  om as p,
  rm as q,
  bo as r,
  tm as s,
  jo as t,
  _r as u,
  Jp as v,
  Pi as w,
  em as x,
  I as y,
  jp as z
};
