var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { V as T, U as D, S as m, D as ge, a as Se, b as Ee, c as Te, W as _, L as F, d as f, B as k, e as j, O as we, M as b, C as Y, f as L, g as H, h as U, F as xe, E as Z, i as oe, N as le, j as O, R as ce, P as ue, A as be, k as he, T as de, l as fe, m as ee, n as te, G as N, o as K, p as Re, q as Me, r as ye, s as Ie, H as Ce, t as Be, u as _e, v as I, w as A, x as Ue, y as x, z as se, I as Ae, J as Pe, K as De, Q as Ne, X as ie, Y as Oe } from "./three.module-Co8YQJoG.js";
async function ze() {
  const t = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(`
        [out:json][timeout:30];
        area["name:en"="Thailand"]->.searchArea;
        (
          way["railway"="rail"](area.searchArea);
          node["railway"~"station|halt"](area.searchArea);
        );
        out body;
        >;
        out skel qt;
    `)}`;
  try {
    const s = await fetch(t);
    if (!s.ok) throw new Error("Network response was not ok");
    return await s.json();
  } catch (s) {
    return console.error("Error fetching railway data:", s), null;
  }
}
function Le(e) {
  const t = /* @__PURE__ */ new Map(), s = [];
  e.elements.forEach((r) => {
    if (r.type === "node") {
      const n = { lat: r.lat, lon: r.lon, id: r.id, tags: r.tags || {} };
      t.set(r.id, n), r.tags && (r.tags.railway === "station" || r.tags.railway === "halt") && s.push(n);
    }
  });
  const i = [];
  return e.elements.forEach((r) => {
    if (r.type === "way" && r.nodes) {
      const n = [], a = [];
      r.nodes.forEach((o) => {
        const l = t.get(o);
        l && (n.push([l.lat, l.lon]), a.push(o));
      }), n.length > 1 && i.push({ id: r.id, nodes: a, coords: n, tags: r.tags || {} });
    }
  }), { ways: i, nodes: t, stations: s };
}
/**
* postprocessing v6.38.3 build Thu Feb 19 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var X = 1 / 1e3, Ge = 1e3, He = class {
  constructor() {
    this.startTime = performance.now(), this.previousTime = 0, this.currentTime = 0, this._delta = 0, this._elapsed = 0, this._fixedDelta = 1e3 / 60, this.timescale = 1, this.useFixedDelta = false, this._autoReset = false;
  }
  get autoReset() {
    return this._autoReset;
  }
  set autoReset(e) {
    typeof document < "u" && document.hidden !== void 0 && (e ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this._autoReset = e);
  }
  get delta() {
    return this._delta * X;
  }
  get fixedDelta() {
    return this._fixedDelta * X;
  }
  set fixedDelta(e) {
    this._fixedDelta = e * Ge;
  }
  get elapsed() {
    return this._elapsed * X;
  }
  update(e) {
    this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = (e !== void 0 ? e : performance.now()) - this.startTime, this._delta = this.currentTime - this.previousTime), this._delta *= this.timescale, this._elapsed += this._delta;
  }
  reset() {
    this._delta = 0, this._elapsed = 0, this.currentTime = performance.now() - this.startTime;
  }
  getDelta() {
    return this.delta;
  }
  getElapsed() {
    return this.elapsed;
  }
  handleEvent(e) {
    document.hidden || (this.currentTime = performance.now() - this.startTime);
  }
  dispose() {
    this.autoReset = false;
  }
}, Fe = (() => {
  const e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), s = new fe();
  return s.setAttribute("position", new ee(e, 3)), s.setAttribute("uv", new ee(t, 2)), s;
})(), R = class Q {
  static get fullscreenGeometry() {
    return Fe;
  }
  constructor(t = "Pass", s = new j(), i = new we()) {
    this.name = t, this.renderer = null, this.scene = s, this.camera = i, this.screen = null, this.rtt = true, this.needsSwap = true, this.needsDepthTexture = false, this.enabled = true;
  }
  get renderToScreen() {
    return !this.rtt;
  }
  set renderToScreen(t) {
    if (this.rtt === t) {
      const s = this.fullscreenMaterial;
      s !== null && (s.needsUpdate = true), this.rtt = !t;
    }
  }
  set mainScene(t) {
  }
  set mainCamera(t) {
  }
  setRenderer(t) {
    this.renderer = t;
  }
  isEnabled() {
    return this.enabled;
  }
  setEnabled(t) {
    this.enabled = t;
  }
  get fullscreenMaterial() {
    return this.screen !== null ? this.screen.material : null;
  }
  set fullscreenMaterial(t) {
    let s = this.screen;
    s !== null ? s.material = t : (s = new b(Q.fullscreenGeometry, t), s.frustumCulled = false, this.scene === null && (this.scene = new j()), this.scene.add(s), this.screen = s);
  }
  getFullscreenMaterial() {
    return this.fullscreenMaterial;
  }
  setFullscreenMaterial(t) {
    this.fullscreenMaterial = t;
  }
  getDepthTexture() {
    return null;
  }
  setDepthTexture(t, s = k) {
  }
  render(t, s, i, r, n) {
    throw new Error("Render method not implemented!");
  }
  setSize(t, s) {
  }
  initialize(t, s, i) {
  }
  dispose() {
    for (const t of Object.keys(this)) {
      const s = this[t];
      (s instanceof _ || s instanceof he || s instanceof de || s instanceof Q) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, ke = class extends R {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e, t, s, i, r) {
    const n = e.state.buffers.stencil;
    n.setLocked(false), n.setTest(false);
  }
}, Ve = `#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`, pe = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", ve = class extends U {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new f(null), depthBuffer: new f(null), channelWeights: new f(null), opacity: new f(1) }, blending: O, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ve, vertexShader: pe }), this.depthFunc = be;
  }
  get inputBuffer() {
    return this.uniforms.inputBuffer.value;
  }
  set inputBuffer(e) {
    const t = e !== null;
    this.colorWrite !== t && (t ? this.defines.COLOR_WRITE = true : delete this.defines.COLOR_WRITE, this.colorWrite = t, this.needsUpdate = true), this.uniforms.inputBuffer.value = e;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(e) {
    const t = e !== null;
    this.depthWrite !== t && (t ? this.defines.DEPTH_WRITE = true : delete this.defines.DEPTH_WRITE, this.depthTest = t, this.depthWrite = t, this.needsUpdate = true), this.uniforms.depthBuffer.value = e;
  }
  set depthPacking(e) {
    this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = true;
  }
  get colorSpaceConversion() {
    return this.defines.COLOR_SPACE_CONVERSION !== void 0;
  }
  set colorSpaceConversion(e) {
    this.colorSpaceConversion !== e && (e ? this.defines.COLOR_SPACE_CONVERSION = true : delete this.defines.COLOR_SPACE_CONVERSION, this.needsUpdate = true);
  }
  get channelWeights() {
    return this.uniforms.channelWeights.value;
  }
  set channelWeights(e) {
    e !== null ? (this.defines.USE_WEIGHTS = "1", this.uniforms.channelWeights.value = e) : delete this.defines.USE_WEIGHTS, this.needsUpdate = true;
  }
  setInputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  getOpacity(e) {
    return this.uniforms.opacity.value;
  }
  setOpacity(e) {
    this.uniforms.opacity.value = e;
  }
}, We = class extends R {
  constructor(e, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new ve(), this.needsSwap = false, this.renderTarget = e, e === void 0 && (this.renderTarget = new _(1, 1, { minFilter: F, magFilter: F, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
  }
  get resize() {
    return this.autoResize;
  }
  set resize(e) {
    this.autoResize = e;
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  setAutoResizeEnabled(e) {
    this.autoResize = e;
  }
  render(e, t, s, i, r) {
    this.fullscreenMaterial.inputBuffer = t.texture, e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera);
  }
  setSize(e, t) {
    this.autoResize && this.renderTarget.setSize(e, t);
  }
  initialize(e, t, s) {
    s !== void 0 && (this.renderTarget.texture.type = s, s !== D ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e !== null && e.outputColorSpace === m && (this.renderTarget.texture.colorSpace = m));
  }
}, re = new Y(), me = class extends R {
  constructor(e = true, t = true, s = false) {
    super("ClearPass", null, null), this.needsSwap = false, this.color = e, this.depth = t, this.stencil = s, this.overrideClearColor = null, this.overrideClearAlpha = -1;
  }
  setClearFlags(e, t, s) {
    this.color = e, this.depth = t, this.stencil = s;
  }
  getOverrideClearColor() {
    return this.overrideClearColor;
  }
  setOverrideClearColor(e) {
    this.overrideClearColor = e;
  }
  getOverrideClearAlpha() {
    return this.overrideClearAlpha;
  }
  setOverrideClearAlpha(e) {
    this.overrideClearAlpha = e;
  }
  render(e, t, s, i, r) {
    const n = this.overrideClearColor, a = this.overrideClearAlpha, o = e.getClearAlpha(), l = n !== null, c = a >= 0;
    l ? (e.getClearColor(re), e.setClearColor(n, c ? a : o)) : c && e.setClearAlpha(a), e.setRenderTarget(this.renderToScreen ? null : t), e.clear(this.color, this.depth, this.stencil), l ? e.setClearColor(re, o) : c && e.setClearAlpha(o);
  }
}, Ke = class extends R {
  constructor(e, t) {
    super("MaskPass", e, t), this.needsSwap = false, this.clearPass = new me(false, false, true), this.inverse = false;
  }
  set mainScene(e) {
    this.scene = e;
  }
  set mainCamera(e) {
    this.camera = e;
  }
  get inverted() {
    return this.inverse;
  }
  set inverted(e) {
    this.inverse = e;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(e) {
    this.clearPass.enabled = e;
  }
  getClearPass() {
    return this.clearPass;
  }
  isInverted() {
    return this.inverted;
  }
  setInverted(e) {
    this.inverted = e;
  }
  render(e, t, s, i, r) {
    const n = e.getContext(), a = e.state.buffers, o = this.scene, l = this.camera, c = this.clearPass, v = this.inverted ? 0 : 1, h = 1 - v;
    a.color.setMask(false), a.depth.setMask(false), a.color.setLocked(true), a.depth.setLocked(true), a.stencil.setTest(true), a.stencil.setOp(n.REPLACE, n.REPLACE, n.REPLACE), a.stencil.setFunc(n.ALWAYS, v, 4294967295), a.stencil.setClear(h), a.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? c.render(e, null) : (c.render(e, t), c.render(e, s))), this.renderToScreen ? (e.setRenderTarget(null), e.render(o, l)) : (e.setRenderTarget(t), e.render(o, l), e.setRenderTarget(s), e.render(o, l)), a.color.setLocked(false), a.depth.setLocked(false), a.stencil.setLocked(false), a.stencil.setFunc(n.EQUAL, 1, 4294967295), a.stencil.setOp(n.KEEP, n.KEEP, n.KEEP), a.stencil.setLocked(true);
  }
}, Xe = class {
  constructor(e = null, { depthBuffer: t = true, stencilBuffer: s = false, multisampling: i = 0, frameBufferType: r } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, s, r, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new We(), this.depthTexture = null, this.passes = [], this.timer = new He(), this.autoRenderToScreen = true, this.setRenderer(e);
  }
  get multisampling() {
    return this.inputBuffer.samples || 0;
  }
  set multisampling(e) {
    const t = this.inputBuffer, s = this.multisampling;
    s > 0 && e > 0 ? (this.inputBuffer.samples = e, this.outputBuffer.samples = e, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : s !== e && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(t.depthBuffer, t.stencilBuffer, t.texture.type, e), this.inputBuffer.depthTexture = this.depthTexture, this.outputBuffer = this.inputBuffer.clone());
  }
  getTimer() {
    return this.timer;
  }
  getRenderer() {
    return this.renderer;
  }
  setRenderer(e) {
    if (this.renderer = e, e !== null) {
      const t = e.getSize(new T()), s = e.getContext().getContextAttributes().alpha, i = this.inputBuffer.texture.type;
      i === D && e.outputColorSpace === m && (this.inputBuffer.texture.colorSpace = m, this.outputBuffer.texture.colorSpace = m, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e.autoClear = false, this.setSize(t.width, t.height);
      for (const r of this.passes) r.initialize(e, s, i);
    }
  }
  replaceRenderer(e, t = true) {
    const s = this.renderer, i = s.domElement.parentNode;
    return this.setRenderer(e), t && i !== null && (i.removeChild(s.domElement), i.appendChild(e.domElement)), s;
  }
  createDepthTexture() {
    const e = this.depthTexture = new ge();
    return this.inputBuffer.depthTexture = e, this.inputBuffer.dispose(), this.inputBuffer.stencilBuffer ? (e.format = Se, e.type = Ee) : e.type = Te, e;
  }
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.inputBuffer.dispose();
      for (const e of this.passes) e.setDepthTexture(null);
    }
  }
  createBuffer(e, t, s, i) {
    const r = this.renderer, n = r === null ? new T() : r.getDrawingBufferSize(new T()), a = { minFilter: F, magFilter: F, stencilBuffer: t, depthBuffer: e, type: s }, o = new _(n.width, n.height, a);
    return i > 0 && (o.samples = i), s === D && r !== null && r.outputColorSpace === m && (o.texture.colorSpace = m), o.texture.name = "EffectComposer.Buffer", o.texture.generateMipmaps = false, o;
  }
  setMainScene(e) {
    for (const t of this.passes) t.mainScene = e;
  }
  setMainCamera(e) {
    for (const t of this.passes) t.mainCamera = e;
  }
  addPass(e, t) {
    const s = this.passes, i = this.renderer, r = i.getDrawingBufferSize(new T()), n = i.getContext().getContextAttributes().alpha, a = this.inputBuffer.texture.type;
    if (e.setRenderer(i), e.setSize(r.width, r.height), e.initialize(i, n, a), this.autoRenderToScreen && (s.length > 0 && (s[s.length - 1].renderToScreen = false), e.renderToScreen && (this.autoRenderToScreen = false)), t !== void 0 ? s.splice(t, 0, e) : s.push(e), this.autoRenderToScreen && (s[s.length - 1].renderToScreen = true), e.needsDepthTexture || this.depthTexture !== null) if (this.depthTexture === null) {
      const o = this.createDepthTexture();
      for (e of s) e.setDepthTexture(o);
    } else e.setDepthTexture(this.depthTexture);
  }
  removePass(e) {
    const t = this.passes, s = t.indexOf(e);
    if (s !== -1 && t.splice(s, 1).length > 0) {
      if (this.depthTexture !== null) {
        const n = (o, l) => o || l.needsDepthTexture;
        t.reduce(n, false) || (e.getDepthTexture() === this.depthTexture && e.setDepthTexture(null), this.deleteDepthTexture());
      }
      this.autoRenderToScreen && s === t.length && (e.renderToScreen = false, t.length > 0 && (t[t.length - 1].renderToScreen = true));
    }
  }
  removeAllPasses() {
    const e = this.passes;
    this.deleteDepthTexture(), e.length > 0 && (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = false), this.passes = []);
  }
  render(e) {
    const t = this.renderer, s = this.copyPass;
    let i = this.inputBuffer, r = this.outputBuffer, n = false, a, o, l;
    e === void 0 && (this.timer.update(), e = this.timer.getDelta());
    for (const c of this.passes) c.enabled && (c.render(t, i, r, e, n), c.needsSwap && (n && (s.renderToScreen = c.renderToScreen, a = t.getContext(), o = t.state.buffers.stencil, o.setFunc(a.NOTEQUAL, 1, 4294967295), s.render(t, i, r, e, n), o.setFunc(a.EQUAL, 1, 4294967295)), l = i, i = r, r = l), c instanceof Ke ? n = true : c instanceof ke && (n = false));
  }
  setSize(e, t, s) {
    const i = this.renderer, r = i.getSize(new T());
    (e === void 0 || t === void 0) && (e = r.width, t = r.height), (r.width !== e || r.height !== t) && i.setSize(e, t, s);
    const n = i.getDrawingBufferSize(new T());
    this.inputBuffer.setSize(n.width, n.height), this.outputBuffer.setSize(n.width, n.height);
    for (const a of this.passes) a.setSize(n.width, n.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const e of this.passes) e.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), R.fullscreenGeometry.dispose();
  }
}, P = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, d = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, qe = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[d.FRAGMENT_HEAD, null], [d.FRAGMENT_MAIN_UV, null], [d.FRAGMENT_MAIN_IMAGE, null], [d.VERTEX_HEAD, null], [d.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = P.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = oe;
  }
}, q = false, ne = class {
  constructor(e = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let s;
        if (t.material.flatShading) switch (t.material.side) {
          case H:
            s = this.materialsFlatShadedDoubleSide;
            break;
          case L:
            s = this.materialsFlatShadedBackSide;
            break;
          default:
            s = this.materialsFlatShaded;
            break;
        }
        else switch (t.material.side) {
          case H:
            s = this.materialsDoubleSide;
            break;
          case L:
            s = this.materialsBackSide;
            break;
          default:
            s = this.materials;
            break;
        }
        this.originalMaterials.set(t, t.material), t.isSkinnedMesh ? t.material = s[2] : t.isInstancedMesh ? t.material = s[1] : t.material = s[0], ++this.meshCount;
      }
    };
  }
  cloneMaterial(e) {
    if (!(e instanceof U)) return e.clone();
    const t = e.uniforms, s = /* @__PURE__ */ new Map();
    for (const r in t) {
      const n = t[r].value;
      n.isRenderTargetTexture && (t[r].value = null, s.set(r, n));
    }
    const i = e.clone();
    for (const r of s) t[r[0]].value = r[1], i.uniforms[r[0]].value = r[1];
    return i;
  }
  setMaterial(e) {
    if (this.disposeMaterials(), this.material = e, e !== null) {
      const t = this.materials = [this.cloneMaterial(e), this.cloneMaterial(e), this.cloneMaterial(e)];
      for (const s of t) s.uniforms = Object.assign({}, e.uniforms), s.side = xe;
      t[2].skinning = true, this.materialsBackSide = t.map((s) => {
        const i = this.cloneMaterial(s);
        return i.uniforms = Object.assign({}, e.uniforms), i.side = L, i;
      }), this.materialsDoubleSide = t.map((s) => {
        const i = this.cloneMaterial(s);
        return i.uniforms = Object.assign({}, e.uniforms), i.side = H, i;
      }), this.materialsFlatShaded = t.map((s) => {
        const i = this.cloneMaterial(s);
        return i.uniforms = Object.assign({}, e.uniforms), i.flatShading = true, i;
      }), this.materialsFlatShadedBackSide = t.map((s) => {
        const i = this.cloneMaterial(s);
        return i.uniforms = Object.assign({}, e.uniforms), i.flatShading = true, i.side = L, i;
      }), this.materialsFlatShadedDoubleSide = t.map((s) => {
        const i = this.cloneMaterial(s);
        return i.uniforms = Object.assign({}, e.uniforms), i.flatShading = true, i.side = H, i;
      });
    }
  }
  render(e, t, s) {
    const i = e.shadowMap.enabled;
    if (e.shadowMap.enabled = false, q) {
      const r = this.originalMaterials;
      this.meshCount = 0, t.traverse(this.replaceMaterial), e.render(t, s);
      for (const n of r) n[0].material = n[1];
      this.meshCount !== r.size && r.clear();
    } else {
      const r = t.overrideMaterial;
      t.overrideMaterial = this.material, e.render(t, s), t.overrideMaterial = r;
    }
    e.shadowMap.enabled = i;
  }
  disposeMaterials() {
    if (this.material !== null) {
      const e = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
      for (const t of e) t.dispose();
    }
  }
  dispose() {
    this.originalMaterials.clear(), this.disposeMaterials();
  }
  static get workaroundEnabled() {
    return q;
  }
  static set workaroundEnabled(e) {
    q = e;
  }
}, B = -1, y = class extends Z {
  constructor(e, t = B, s = B, i = 1) {
    super(), this.resizable = e, this.baseSize = new T(1, 1), this.preferredSize = new T(t, s), this.target = this.preferredSize, this.s = i, this.effectiveSize = new T(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const e = this.baseSize, t = this.preferredSize, s = this.effectiveSize, i = this.scale;
    t.width !== B ? s.width = t.width : t.height !== B ? s.width = Math.round(t.height * (e.width / Math.max(e.height, 1))) : s.width = Math.round(e.width * i), t.height !== B ? s.height = t.height : t.width !== B ? s.height = Math.round(t.width / Math.max(e.width / Math.max(e.height, 1), 1)) : s.height = Math.round(e.height * i);
  }
  get width() {
    return this.effectiveSize.width;
  }
  set width(e) {
    this.preferredWidth = e;
  }
  get height() {
    return this.effectiveSize.height;
  }
  set height(e) {
    this.preferredHeight = e;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  get scale() {
    return this.s;
  }
  set scale(e) {
    this.s !== e && (this.s = e, this.preferredSize.setScalar(B), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getScale() {
    return this.scale;
  }
  setScale(e) {
    this.scale = e;
  }
  get baseWidth() {
    return this.baseSize.width;
  }
  set baseWidth(e) {
    this.baseSize.width !== e && (this.baseSize.width = e, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getBaseWidth() {
    return this.baseWidth;
  }
  setBaseWidth(e) {
    this.baseWidth = e;
  }
  get baseHeight() {
    return this.baseSize.height;
  }
  set baseHeight(e) {
    this.baseSize.height !== e && (this.baseSize.height = e, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getBaseHeight() {
    return this.baseHeight;
  }
  setBaseHeight(e) {
    this.baseHeight = e;
  }
  setBaseSize(e, t) {
    (this.baseSize.width !== e || this.baseSize.height !== t) && (this.baseSize.set(e, t), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  get preferredWidth() {
    return this.preferredSize.width;
  }
  set preferredWidth(e) {
    this.preferredSize.width !== e && (this.preferredSize.width = e, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getPreferredWidth() {
    return this.preferredWidth;
  }
  setPreferredWidth(e) {
    this.preferredWidth = e;
  }
  get preferredHeight() {
    return this.preferredSize.height;
  }
  set preferredHeight(e) {
    this.preferredSize.height !== e && (this.preferredSize.height = e, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getPreferredHeight() {
    return this.preferredHeight;
  }
  setPreferredHeight(e) {
    this.preferredHeight = e;
  }
  setPreferredSize(e, t) {
    (this.preferredSize.width !== e || this.preferredSize.height !== t) && (this.preferredSize.set(e, t), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  copy(e) {
    this.s = e.scale, this.baseSize.set(e.baseWidth, e.baseHeight), this.preferredSize.set(e.preferredWidth, e.preferredHeight), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height);
  }
  static get AUTO_SIZE() {
    return B;
  }
}, u = { ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, je = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ye = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", Qe = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ze = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", $e = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Je = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", et = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", tt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", st = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", it = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", rt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", nt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", at = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ot = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", lt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ct = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ut = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ht = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", dt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ft = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", pt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", vt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", mt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", gt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", St = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Et = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Tt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", wt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", xt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", bt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", Rt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Mt = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", yt = /* @__PURE__ */ new Map([[u.ADD, je], [u.ALPHA, Ye], [u.AVERAGE, Qe], [u.COLOR, Ze], [u.COLOR_BURN, $e], [u.COLOR_DODGE, Je], [u.DARKEN, et], [u.DIFFERENCE, tt], [u.DIVIDE, st], [u.DST, null], [u.EXCLUSION, it], [u.HARD_LIGHT, rt], [u.HARD_MIX, nt], [u.HUE, at], [u.INVERT, ot], [u.INVERT_RGB, lt], [u.LIGHTEN, ct], [u.LINEAR_BURN, ut], [u.LINEAR_DODGE, ht], [u.LINEAR_LIGHT, dt], [u.LUMINOSITY, ft], [u.MULTIPLY, pt], [u.NEGATION, vt], [u.NORMAL, mt], [u.OVERLAY, gt], [u.PIN_LIGHT, St], [u.REFLECT, Et], [u.SATURATION, Tt], [u.SCREEN, wt], [u.SOFT_LIGHT, xt], [u.SRC, bt], [u.SUBTRACT, Rt], [u.VIVID_LIGHT, Mt]]), It = class extends Z {
  constructor(e, t = 1) {
    super(), this._blendFunction = e, this.opacity = new f(t);
  }
  getOpacity() {
    return this.opacity.value;
  }
  setOpacity(e) {
    this.opacity.value = e;
  }
  get blendFunction() {
    return this._blendFunction;
  }
  set blendFunction(e) {
    this._blendFunction = e, this.dispatchEvent({ type: "change" });
  }
  getBlendFunction() {
    return this.blendFunction;
  }
  setBlendFunction(e) {
    this.blendFunction = e;
  }
  getShaderCode() {
    return yt.get(this.blendFunction);
  }
}, $ = class extends Z {
  constructor(e, t, { attributes: s = P.NONE, blendFunction: i = u.NORMAL, defines: r = /* @__PURE__ */ new Map(), uniforms: n = /* @__PURE__ */ new Map(), extensions: a = null, vertexShader: o = null } = {}) {
    super(), this.name = e, this.renderer = null, this.attributes = s, this.fragmentShader = t, this.vertexShader = o, this.defines = r, this.uniforms = n, this.extensions = a, this.blendMode = new It(i), this.blendMode.addEventListener("change", (l) => this.setChanged()), this._inputColorSpace = oe, this._outputColorSpace = le;
  }
  get inputColorSpace() {
    return this._inputColorSpace;
  }
  set inputColorSpace(e) {
    this._inputColorSpace = e, this.setChanged();
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e, this.setChanged();
  }
  set mainScene(e) {
  }
  set mainCamera(e) {
  }
  getName() {
    return this.name;
  }
  setRenderer(e) {
    this.renderer = e;
  }
  getDefines() {
    return this.defines;
  }
  getUniforms() {
    return this.uniforms;
  }
  getExtensions() {
    return this.extensions;
  }
  getBlendMode() {
    return this.blendMode;
  }
  getAttributes() {
    return this.attributes;
  }
  setAttributes(e) {
    this.attributes = e, this.setChanged();
  }
  getFragmentShader() {
    return this.fragmentShader;
  }
  setFragmentShader(e) {
    this.fragmentShader = e, this.setChanged();
  }
  getVertexShader() {
    return this.vertexShader;
  }
  setVertexShader(e) {
    this.vertexShader = e, this.setChanged();
  }
  setChanged() {
    this.dispatchEvent({ type: "change" });
  }
  setDepthTexture(e, t = k) {
  }
  update(e, t, s) {
  }
  setSize(e, t) {
  }
  initialize(e, t, s) {
  }
  dispose() {
    for (const e of Object.keys(this)) {
      const t = this[e];
      (t instanceof _ || t instanceof he || t instanceof de || t instanceof R) && this[e].dispose();
    }
  }
}, J = { MEDIUM: 2, LARGE: 3 }, Ct = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, Bt = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", _t = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], Ut = class extends U {
  constructor(e = new te()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new f(null), texelSize: new f(new te()), scale: new f(1), kernel: new f(0) }, blending: O, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ct, vertexShader: Bt }), this.setTexelSize(e.x, e.y), this.kernelSize = J.MEDIUM;
  }
  set inputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  setInputBuffer(e) {
    this.inputBuffer = e;
  }
  get kernelSequence() {
    return _t[this.kernelSize];
  }
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(e) {
    this.uniforms.scale.value = e;
  }
  getScale() {
    return this.uniforms.scale.value;
  }
  setScale(e) {
    this.uniforms.scale.value = e;
  }
  getKernel() {
    return null;
  }
  get kernel() {
    return this.uniforms.kernel.value;
  }
  set kernel(e) {
    this.uniforms.kernel.value = e;
  }
  setKernel(e) {
    this.kernel = e;
  }
  setTexelSize(e, t) {
    this.uniforms.texelSize.value.set(e, t, e * 0.5, t * 0.5);
  }
  setSize(e, t) {
    const s = 1 / e, i = 1 / t;
    this.uniforms.texelSize.value.set(s, i, s * 0.5, i * 0.5);
  }
}, At = class extends R {
  constructor({ kernelSize: e = J.MEDIUM, resolutionScale: t = 0.5, width: s = y.AUTO_SIZE, height: i = y.AUTO_SIZE, resolutionX: r = s, resolutionY: n = i } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new _(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const a = this.resolution = new y(this, r, n, t);
    a.addEventListener("change", (o) => this.setSize(a.baseWidth, a.baseHeight)), this._blurMaterial = new Ut(), this._blurMaterial.kernelSize = e, this.copyMaterial = new ve();
  }
  getResolution() {
    return this.resolution;
  }
  get blurMaterial() {
    return this._blurMaterial;
  }
  set blurMaterial(e) {
    this._blurMaterial = e;
  }
  get dithering() {
    return this.copyMaterial.dithering;
  }
  set dithering(e) {
    this.copyMaterial.dithering = e;
  }
  get kernelSize() {
    return this.blurMaterial.kernelSize;
  }
  set kernelSize(e) {
    this.blurMaterial.kernelSize = e;
  }
  get width() {
    return this.resolution.width;
  }
  set width(e) {
    this.resolution.preferredWidth = e;
  }
  get height() {
    return this.resolution.height;
  }
  set height(e) {
    this.resolution.preferredHeight = e;
  }
  get scale() {
    return this.blurMaterial.scale;
  }
  set scale(e) {
    this.blurMaterial.scale = e;
  }
  getScale() {
    return this.blurMaterial.scale;
  }
  setScale(e) {
    this.blurMaterial.scale = e;
  }
  getKernelSize() {
    return this.kernelSize;
  }
  setKernelSize(e) {
    this.kernelSize = e;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(e) {
    this.resolution.scale = e;
  }
  render(e, t, s, i, r) {
    const n = this.scene, a = this.camera, o = this.renderTargetA, l = this.renderTargetB, c = this.blurMaterial, v = c.kernelSequence;
    let h = t;
    this.fullscreenMaterial = c;
    for (let p = 0, S = v.length; p < S; ++p) {
      const C = (p & 1) === 0 ? o : l;
      c.kernel = v[p], c.inputBuffer = h.texture, e.setRenderTarget(C), e.render(n, a), h = C;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = h.texture, e.setRenderTarget(this.renderToScreen ? null : s), e.render(n, a);
  }
  setSize(e, t) {
    const s = this.resolution;
    s.setBaseSize(e, t);
    const i = s.width, r = s.height;
    this.renderTargetA.setSize(i, r), this.renderTargetB.setSize(i, r), this.blurMaterial.setSize(e, t);
  }
  initialize(e, t, s) {
    s !== void 0 && (this.renderTargetA.texture.type = s, this.renderTargetB.texture.type = s, s !== D ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e !== null && e.outputColorSpace === m && (this.renderTargetA.texture.colorSpace = m, this.renderTargetB.texture.colorSpace = m));
  }
  static get AUTO_SIZE() {
    return y.AUTO_SIZE;
  }
}, Pt = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`, Dt = class extends U {
  constructor(e = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: ce.replace(/\D+/g, "") }, uniforms: { inputBuffer: new f(null), threshold: new f(0), smoothing: new f(1), range: new f(null) }, blending: O, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Pt, vertexShader: pe }), this.colorOutput = e, this.luminanceRange = t;
  }
  set inputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  setInputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  get threshold() {
    return this.uniforms.threshold.value;
  }
  set threshold(e) {
    this.smoothing > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.threshold.value = e;
  }
  getThreshold() {
    return this.threshold;
  }
  setThreshold(e) {
    this.threshold = e;
  }
  get smoothing() {
    return this.uniforms.smoothing.value;
  }
  set smoothing(e) {
    this.threshold > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.smoothing.value = e;
  }
  getSmoothingFactor() {
    return this.smoothing;
  }
  setSmoothingFactor(e) {
    this.smoothing = e;
  }
  get useThreshold() {
    return this.threshold > 0 || this.smoothing > 0;
  }
  set useThreshold(e) {
  }
  get colorOutput() {
    return this.defines.COLOR !== void 0;
  }
  set colorOutput(e) {
    e ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = true;
  }
  isColorOutputEnabled(e) {
    return this.colorOutput;
  }
  setColorOutputEnabled(e) {
    this.colorOutput = e;
  }
  get useRange() {
    return this.luminanceRange !== null;
  }
  set useRange(e) {
    this.luminanceRange = null;
  }
  get luminanceRange() {
    return this.uniforms.range.value;
  }
  set luminanceRange(e) {
    e !== null ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.uniforms.range.value = e, this.needsUpdate = true;
  }
  getLuminanceRange() {
    return this.luminanceRange;
  }
  setLuminanceRange(e) {
    this.luminanceRange = e;
  }
}, Nt = class extends R {
  constructor({ renderTarget: e, luminanceRange: t, colorOutput: s, resolutionScale: i = 1, width: r = y.AUTO_SIZE, height: n = y.AUTO_SIZE, resolutionX: a = r, resolutionY: o = n } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new Dt(s, t), this.needsSwap = false, this.renderTarget = e, this.renderTarget === void 0 && (this.renderTarget = new _(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const l = this.resolution = new y(this, a, o, i);
    l.addEventListener("change", (c) => this.setSize(l.baseWidth, l.baseHeight));
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  getResolution() {
    return this.resolution;
  }
  render(e, t, s, i, r) {
    const n = this.fullscreenMaterial;
    n.inputBuffer = t.texture, e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera);
  }
  setSize(e, t) {
    const s = this.resolution;
    s.setBaseSize(e, t), this.renderTarget.setSize(s.width, s.height);
  }
  initialize(e, t, s) {
    s !== void 0 && s !== D && (this.renderTarget.texture.type = s, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, Ot = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, zt = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", Lt = class extends U {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new f(null), texelSize: new f(new T()) }, blending: O, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ot, vertexShader: zt });
  }
  set inputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  setSize(e, t) {
    this.uniforms.texelSize.value.set(1 / e, 1 / t);
  }
}, Gt = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, Ht = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", Ft = class extends U {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new f(null), supportBuffer: new f(null), texelSize: new f(new T()), radius: new f(0.85) }, blending: O, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Gt, vertexShader: Ht });
  }
  set inputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  set supportBuffer(e) {
    this.uniforms.supportBuffer.value = e;
  }
  get radius() {
    return this.uniforms.radius.value;
  }
  set radius(e) {
    this.uniforms.radius.value = e;
  }
  setSize(e, t) {
    this.uniforms.texelSize.value.set(1 / e, 1 / t);
  }
}, kt = class extends R {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new _(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new Lt(), this.upsamplingMaterial = new Ft(), this.resolution = new T();
  }
  get texture() {
    return this.renderTarget.texture;
  }
  get levels() {
    return this.downsamplingMipmaps.length;
  }
  set levels(e) {
    if (this.levels !== e) {
      const t = this.renderTarget;
      this.dispose(), this.downsamplingMipmaps = [], this.upsamplingMipmaps = [];
      for (let s = 0; s < e; ++s) {
        const i = t.clone();
        i.texture.name = "Downsampling.Mipmap" + s, this.downsamplingMipmaps.push(i);
      }
      this.upsamplingMipmaps.push(t);
      for (let s = 1, i = e - 1; s < i; ++s) {
        const r = t.clone();
        r.texture.name = "Upsampling.Mipmap" + s, this.upsamplingMipmaps.push(r);
      }
      this.setSize(this.resolution.x, this.resolution.y);
    }
  }
  get radius() {
    return this.upsamplingMaterial.radius;
  }
  set radius(e) {
    this.upsamplingMaterial.radius = e;
  }
  render(e, t, s, i, r) {
    const { scene: n, camera: a } = this, { downsamplingMaterial: o, upsamplingMaterial: l } = this, { downsamplingMipmaps: c, upsamplingMipmaps: v } = this;
    let h = t;
    this.fullscreenMaterial = o;
    for (let p = 0, S = c.length; p < S; ++p) {
      const C = c[p];
      o.setSize(h.width, h.height), o.inputBuffer = h.texture, e.setRenderTarget(C), e.render(n, a), h = C;
    }
    this.fullscreenMaterial = l;
    for (let p = v.length - 1; p >= 0; --p) {
      const S = v[p];
      l.setSize(h.width, h.height), l.inputBuffer = h.texture, l.supportBuffer = c[p].texture, e.setRenderTarget(S), e.render(n, a), h = S;
    }
  }
  setSize(e, t) {
    const s = this.resolution;
    s.set(e, t);
    let i = s.width, r = s.height;
    for (let n = 0, a = this.downsamplingMipmaps.length; n < a; ++n) i = Math.round(i * 0.5), r = Math.round(r * 0.5), this.downsamplingMipmaps[n].setSize(i, r), n < this.upsamplingMipmaps.length && this.upsamplingMipmaps[n].setSize(i, r);
  }
  initialize(e, t, s) {
    if (s !== void 0) {
      const i = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const r of i) r.texture.type = s;
      if (s !== D) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e !== null && e.outputColorSpace === m) for (const r of i) r.texture.colorSpace = m;
    }
  }
  dispose() {
    super.dispose();
    for (const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e.dispose();
  }
}, Vt = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, Wt = class extends $ {
  constructor({ blendFunction: e = u.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: s = 0.03, mipmapBlur: i = true, intensity: r = 1, radius: n = 0.85, levels: a = 8, kernelSize: o = J.LARGE, resolutionScale: l = 0.5, width: c = y.AUTO_SIZE, height: v = y.AUTO_SIZE, resolutionX: h = c, resolutionY: p = v } = {}) {
    super("BloomEffect", Vt, { blendFunction: e, uniforms: /* @__PURE__ */ new Map([["map", new f(null)], ["intensity", new f(r)]]) }), this.renderTarget = new _(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new At({ kernelSize: o }), this.luminancePass = new Nt({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = s, this.mipmapBlurPass = new kt(), this.mipmapBlurPass.enabled = i, this.mipmapBlurPass.radius = n, this.mipmapBlurPass.levels = a, this.uniforms.get("map").value = i ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const S = this.resolution = new y(this, h, p, l);
    S.addEventListener("change", (C) => this.setSize(S.baseWidth, S.baseHeight));
  }
  get texture() {
    return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture;
  }
  getTexture() {
    return this.texture;
  }
  getResolution() {
    return this.resolution;
  }
  getBlurPass() {
    return this.blurPass;
  }
  getLuminancePass() {
    return this.luminancePass;
  }
  get luminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  getLuminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  get width() {
    return this.resolution.width;
  }
  set width(e) {
    this.resolution.preferredWidth = e;
  }
  get height() {
    return this.resolution.height;
  }
  set height(e) {
    this.resolution.preferredHeight = e;
  }
  get dithering() {
    return this.blurPass.dithering;
  }
  set dithering(e) {
    this.blurPass.dithering = e;
  }
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(e) {
    this.blurPass.kernelSize = e;
  }
  get distinction() {
    return console.warn(this.name, "distinction was removed"), 1;
  }
  set distinction(e) {
    console.warn(this.name, "distinction was removed");
  }
  get intensity() {
    return this.uniforms.get("intensity").value;
  }
  set intensity(e) {
    this.uniforms.get("intensity").value = e;
  }
  getIntensity() {
    return this.intensity;
  }
  setIntensity(e) {
    this.intensity = e;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(e) {
    this.resolution.scale = e;
  }
  update(e, t, s) {
    const i = this.renderTarget, r = this.luminancePass;
    r.enabled ? (r.render(e, t), this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e, r.renderTarget) : this.blurPass.render(e, r.renderTarget, i)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e, t) : this.blurPass.render(e, t, i);
  }
  setSize(e, t) {
    const s = this.resolution;
    s.setBaseSize(e, t), this.renderTarget.setSize(s.width, s.height), this.blurPass.resolution.copy(s), this.luminancePass.setSize(e, t), this.mipmapBlurPass.setSize(e, t);
  }
  initialize(e, t, s) {
    this.blurPass.initialize(e, t, s), this.luminancePass.initialize(e, t, s), this.mipmapBlurPass.initialize(e, t, s), s !== void 0 && (this.renderTarget.texture.type = s, e !== null && e.outputColorSpace === m && (this.renderTarget.texture.colorSpace = m));
  }
}, Kt = class extends R {
  constructor(e, t, s = null) {
    super("RenderPass", e, t), this.needsSwap = false, this.clearPass = new me(), this.overrideMaterialManager = s === null ? null : new ne(s), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
  }
  set mainScene(e) {
    this.scene = e;
  }
  set mainCamera(e) {
    this.camera = e;
  }
  get renderToScreen() {
    return super.renderToScreen;
  }
  set renderToScreen(e) {
    super.renderToScreen = e, this.clearPass.renderToScreen = e;
  }
  get overrideMaterial() {
    const e = this.overrideMaterialManager;
    return e !== null ? e.material : null;
  }
  set overrideMaterial(e) {
    const t = this.overrideMaterialManager;
    e !== null ? t !== null ? t.setMaterial(e) : this.overrideMaterialManager = new ne(e) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
  }
  getOverrideMaterial() {
    return this.overrideMaterial;
  }
  setOverrideMaterial(e) {
    this.overrideMaterial = e;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(e) {
    this.clearPass.enabled = e;
  }
  getSelection() {
    return this.selection;
  }
  setSelection(e) {
    this.selection = e;
  }
  isBackgroundDisabled() {
    return this.ignoreBackground;
  }
  setBackgroundDisabled(e) {
    this.ignoreBackground = e;
  }
  isShadowMapDisabled() {
    return this.skipShadowMapUpdate;
  }
  setShadowMapDisabled(e) {
    this.skipShadowMapUpdate = e;
  }
  getClearPass() {
    return this.clearPass;
  }
  render(e, t, s, i, r) {
    const n = this.scene, a = this.camera, o = this.selection, l = a.layers.mask, c = n.background, v = e.shadowMap.autoUpdate, h = this.renderToScreen ? null : t;
    o !== null && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (n.background = null), this.clearPass.enabled && this.clearPass.render(e, t), e.setRenderTarget(h), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e, n, a) : e.render(n, a), a.layers.mask = l, n.background = c, e.shadowMap.autoUpdate = v;
  }
}, z = { DEFAULT: 0, ESKIL: 1 }, Xt = `void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`, qt = class extends $ {
  constructor({ blendFunction: e = u.SCREEN, premultiply: t = false } = {}) {
    super("NoiseEffect", Xt, { blendFunction: e }), this.premultiply = t;
  }
  get premultiply() {
    return this.defines.has("PREMULTIPLY");
  }
  set premultiply(e) {
    this.premultiply !== e && (e ? this.defines.set("PREMULTIPLY", "1") : this.defines.delete("PREMULTIPLY"), this.setChanged());
  }
  isPremultiplied() {
    return this.premultiply;
  }
  setPremultiplied(e) {
    this.premultiply = e;
  }
}, jt = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, Yt = class extends $ {
  constructor({ blendFunction: e, eskil: t = false, technique: s = t ? z.ESKIL : z.DEFAULT, offset: i = 0.5, darkness: r = 0.5 } = {}) {
    super("VignetteEffect", jt, { blendFunction: e, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", s.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new f(i)], ["darkness", new f(r)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e) {
    this.technique !== e && (this.defines.set("VIGNETTE_TECHNIQUE", e.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === z.ESKIL;
  }
  set eskil(e) {
    this.technique = e ? z.ESKIL : z.DEFAULT;
  }
  getTechnique() {
    return this.technique;
  }
  setTechnique(e) {
    this.technique = e;
  }
  get offset() {
    return this.uniforms.get("offset").value;
  }
  set offset(e) {
    this.uniforms.get("offset").value = e;
  }
  getOffset() {
    return this.offset;
  }
  setOffset(e) {
    this.offset = e;
  }
  get darkness() {
    return this.uniforms.get("darkness").value;
  }
  set darkness(e) {
    this.uniforms.get("darkness").value = e;
  }
  getDarkness() {
    return this.darkness;
  }
  setDarkness(e) {
    this.darkness = e;
  }
}, Qt = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`, Zt = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", $t = class extends U {
  constructor(e, t, s, i, r = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: ce.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new f(null), depthBuffer: new f(null), resolution: new f(new T()), texelSize: new f(new T()), cameraNear: new f(0.3), cameraFar: new f(1e3), aspect: new f(1), time: new f(0) }, blending: O, toneMapped: false, depthWrite: false, depthTest: false, dithering: r }), e && this.setShaderParts(e), t && this.setDefines(t), s && this.setUniforms(s), this.copyCameraSettings(i);
  }
  set inputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  setInputBuffer(e) {
    this.uniforms.inputBuffer.value = e;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(e) {
    this.uniforms.depthBuffer.value = e;
  }
  get depthPacking() {
    return Number(this.defines.DEPTH_PACKING);
  }
  set depthPacking(e) {
    this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e, t = k) {
    this.depthBuffer = e, this.depthPacking = t;
  }
  setShaderData(e) {
    this.setShaderParts(e.shaderParts), this.setDefines(e.defines), this.setUniforms(e.uniforms), this.setExtensions(e.extensions);
  }
  setShaderParts(e) {
    return this.fragmentShader = Qt.replace(d.FRAGMENT_HEAD, e.get(d.FRAGMENT_HEAD) || "").replace(d.FRAGMENT_MAIN_UV, e.get(d.FRAGMENT_MAIN_UV) || "").replace(d.FRAGMENT_MAIN_IMAGE, e.get(d.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = Zt.replace(d.VERTEX_HEAD, e.get(d.VERTEX_HEAD) || "").replace(d.VERTEX_MAIN_SUPPORT, e.get(d.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
  }
  setDefines(e) {
    for (const t of e.entries()) this.defines[t[0]] = t[1];
    return this.needsUpdate = true, this;
  }
  setUniforms(e) {
    for (const t of e.entries()) this.uniforms[t[0]] = t[1];
    return this;
  }
  setExtensions(e) {
    this.extensions = {};
    for (const t of e) this.extensions[t] = true;
    return this;
  }
  get encodeOutput() {
    return this.defines.ENCODE_OUTPUT !== void 0;
  }
  set encodeOutput(e) {
    this.encodeOutput !== e && (e ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = true);
  }
  isOutputEncodingEnabled(e) {
    return this.encodeOutput;
  }
  setOutputEncodingEnabled(e) {
    this.encodeOutput = e;
  }
  get time() {
    return this.uniforms.time.value;
  }
  set time(e) {
    this.uniforms.time.value = e;
  }
  setDeltaTime(e) {
    this.uniforms.time.value += e;
  }
  adoptCameraSettings(e) {
    this.copyCameraSettings(e);
  }
  copyCameraSettings(e) {
    e && (this.uniforms.cameraNear.value = e.near, this.uniforms.cameraFar.value = e.far, e instanceof ue ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(e, t) {
    const s = this.uniforms;
    s.resolution.value.set(e, t), s.texelSize.value.set(1 / e, 1 / t), s.aspect.value = e / t;
  }
  static get Section() {
    return d;
  }
};
function ae(e, t, s) {
  for (const i of t) {
    const r = "$1" + e + i.charAt(0).toUpperCase() + i.slice(1), n = new RegExp("([^\\.])(\\b" + i + "\\b)", "g");
    for (const a of s.entries()) a[1] !== null && s.set(a[0], a[1].replace(n, r));
  }
}
function Jt(e, t, s) {
  let i = t.getFragmentShader(), r = t.getVertexShader();
  const n = i !== void 0 && /mainImage/.test(i), a = i !== void 0 && /mainUv/.test(i);
  if (s.attributes |= t.getAttributes(), i === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (a && (s.attributes & P.CONVOLUTION) !== 0) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!n && !a) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, l = s.shaderParts;
    let c = l.get(d.FRAGMENT_HEAD) || "", v = l.get(d.FRAGMENT_MAIN_UV) || "", h = l.get(d.FRAGMENT_MAIN_IMAGE) || "", p = l.get(d.VERTEX_HEAD) || "", S = l.get(d.VERTEX_MAIN_SUPPORT) || "";
    const C = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
    if (a && (v += `	${e}MainUv(UV);
`, s.uvTransformation = true), r !== null && /mainSupport/.test(r)) {
      const g = /mainSupport *\([\w\s]*?uv\s*?\)/.test(r);
      S += `	${e}MainSupport(`, S += g ? `vUv);
` : `);
`;
      for (const w of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const W of w[1].split(/\s*,\s*/)) s.varyings.add(W), C.add(W), M.add(W);
      for (const w of r.matchAll(o)) M.add(w[1]);
    }
    for (const g of i.matchAll(o)) M.add(g[1]);
    for (const g of t.defines.keys()) M.add(g.replace(/\([\w\s,]*\)/g, ""));
    for (const g of t.uniforms.keys()) M.add(g);
    M.delete("while"), M.delete("for"), M.delete("if"), t.uniforms.forEach((g, w) => s.uniforms.set(e + w.charAt(0).toUpperCase() + w.slice(1), g)), t.defines.forEach((g, w) => s.defines.set(e + w.charAt(0).toUpperCase() + w.slice(1), g));
    const V = /* @__PURE__ */ new Map([["fragment", i], ["vertex", r]]);
    ae(e, M, s.defines), ae(e, M, V), i = V.get("fragment"), r = V.get("vertex");
    const G = t.blendMode;
    if (s.blendModes.set(G.blendFunction, G), n) {
      t.inputColorSpace !== null && t.inputColorSpace !== s.colorSpace && (h += t.inputColorSpace === m ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== le ? s.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (s.colorSpace = t.inputColorSpace);
      const g = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      h += `${e}MainImage(color0, UV, `, (s.attributes & P.DEPTH) !== 0 && g.test(i) && (h += "depth, ", s.readDepth = true), h += `color1);
	`;
      const w = e + "BlendOpacity";
      s.uniforms.set(w, G.opacity), h += `color0 = blend${G.blendFunction}(color0, color1, ${w});

	`, c += `uniform float ${w};

`;
    }
    if (c += i + `
`, r !== null && (p += r + `
`), l.set(d.FRAGMENT_HEAD, c), l.set(d.FRAGMENT_MAIN_UV, v), l.set(d.FRAGMENT_MAIN_IMAGE, h), l.set(d.VERTEX_HEAD, p), l.set(d.VERTEX_MAIN_SUPPORT, S), t.extensions !== null) for (const g of t.extensions) s.extensions.add(g);
  }
}
var es = class extends R {
  constructor(e, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new $t(null, null, null, e), this.listener = (s) => this.handleEvent(s), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
  }
  set mainScene(e) {
    for (const t of this.effects) t.mainScene = e;
  }
  set mainCamera(e) {
    this.fullscreenMaterial.copyCameraSettings(e);
    for (const t of this.effects) t.mainCamera = e;
  }
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput;
  }
  set encodeOutput(e) {
    this.fullscreenMaterial.encodeOutput = e;
  }
  get dithering() {
    return this.fullscreenMaterial.dithering;
  }
  set dithering(e) {
    const t = this.fullscreenMaterial;
    t.dithering = e, t.needsUpdate = true;
  }
  setEffects(e) {
    for (const t of this.effects) t.removeEventListener("change", this.listener);
    this.effects = e.sort((t, s) => s.attributes - t.attributes);
    for (const t of this.effects) t.addEventListener("change", this.listener);
  }
  updateMaterial() {
    const e = new qe();
    let t = 0;
    for (const a of this.effects) if (a.blendMode.blendFunction === u.DST) e.attributes |= a.getAttributes() & P.DEPTH;
    else {
      if ((e.attributes & a.getAttributes() & P.CONVOLUTION) !== 0) throw new Error(`Convolution effects cannot be merged (${a.name})`);
      Jt("e" + t++, a, e);
    }
    let s = e.shaderParts.get(d.FRAGMENT_HEAD), i = e.shaderParts.get(d.FRAGMENT_MAIN_IMAGE), r = e.shaderParts.get(d.FRAGMENT_MAIN_UV);
    const n = /\bblend\b/g;
    for (const a of e.blendModes.values()) s += a.getShaderCode().replace(n, `blend${a.blendFunction}`) + `
`;
    (e.attributes & P.DEPTH) !== 0 ? (e.readDepth && (i = `float depth = readDepth(UV);

	` + i), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e.colorSpace === m && (i += `color0 = sRGBToLinear(color0);
	`), e.uvTransformation ? (r = `vec2 transformedUv = vUv;
` + r, e.defines.set("UV", "transformedUv")) : e.defines.set("UV", "vUv"), e.shaderParts.set(d.FRAGMENT_HEAD, s), e.shaderParts.set(d.FRAGMENT_MAIN_IMAGE, i), e.shaderParts.set(d.FRAGMENT_MAIN_UV, r);
    for (const [a, o] of e.shaderParts) o !== null && e.shaderParts.set(a, o.trim().replace(/^#/, `
#`));
    this.skipRendering = t === 0, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(e);
  }
  recompile() {
    this.updateMaterial();
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  setDepthTexture(e, t = k) {
    this.fullscreenMaterial.depthBuffer = e, this.fullscreenMaterial.depthPacking = t;
    for (const s of this.effects) s.setDepthTexture(e, t);
  }
  render(e, t, s, i, r) {
    for (const n of this.effects) n.update(e, t, i);
    if (!this.skipRendering || this.renderToScreen) {
      const n = this.fullscreenMaterial;
      n.inputBuffer = t.texture, n.time += i * this.timeScale, e.setRenderTarget(this.renderToScreen ? null : s), e.render(this.scene, this.camera);
    }
  }
  setSize(e, t) {
    this.fullscreenMaterial.setSize(e, t);
    for (const s of this.effects) s.setSize(e, t);
  }
  initialize(e, t, s) {
    this.renderer = e;
    for (const i of this.effects) i.initialize(e, t, s);
    this.updateMaterial(), s !== void 0 && s !== D && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
  dispose() {
    super.dispose();
    for (const e of this.effects) e.removeEventListener("change", this.listener), e.dispose();
  }
  handleEvent(e) {
    switch (e.type) {
      case "change":
        this.recompile();
        break;
    }
  }
};
const E = { CENTER: [13.7563, 100.5018], SCALE: 111320, PLAYER_HEIGHT: 5, INTERACTION_DIST: 15, SPEED_MULTIPLIER: 6e5 };
class ts {
  constructor() {
    __publicField(this, "scene");
    __publicField(this, "camera");
    __publicField(this, "renderer");
    __publicField(this, "composer");
    __publicField(this, "clock");
    __publicField(this, "tracksGroup", new N());
    __publicField(this, "landscapeGroup", new N());
    __publicField(this, "vehicleGroup", new N());
    __publicField(this, "stationsGroup", new N());
    __publicField(this, "curves", []);
    __publicField(this, "state", "DRIVING");
    __publicField(this, "keys", {});
    __publicField(this, "playerRotation", new K(0, 0, 0, "YXZ"));
    __publicField(this, "currentCurveIdx", 0);
    __publicField(this, "progress", 0);
    __publicField(this, "targetSpeed", 2e-4);
    __publicField(this, "currentSpeed", 2e-4);
    __publicField(this, "lookAmount", 0);
    __publicField(this, "targetLookAmount", 0);
    __publicField(this, "money", 0);
    __publicField(this, "incomeRate", 10);
    __publicField(this, "era", "STEAM");
    __publicField(this, "currentBiome", "BANGKOK");
    __publicField(this, "chapters", { BANGKOK: { id: "BANGKOK", name: "SECTOR 01: BANGKOK HUB", fogColor: 328976, ambientColor: 2105408, highlightColor: 65535, objective: "INITIATE ROUTE TO NORTHERN FRONTIER" }, NORTH: { id: "NORTH", name: "SECTOR 02: NORTHERN RIDGE", fogColor: 660746, ambientColor: 1388565, highlightColor: 4521796, objective: "CLIMB THE KHUN TAN RIDGE" }, ISAN: { id: "ISAN", name: "SECTOR 03: EASTERN PLATEAU", fogColor: 1380357, ambientColor: 3153936, highlightColor: 16755200, objective: "CROSS THE KHORAT FRONTIER" }, SOUTH: { id: "SOUTH", name: "SECTOR 04: SOUTHERN COAST", fogColor: 331797, ambientColor: 1058101, highlightColor: 43775, objective: "ESTABLISH MARITIME CONNECTION" }, EAST: { id: "EAST", name: "SECTOR 05: INDUSTRIAL ZONE", fogColor: 1052688, ambientColor: 2434341, highlightColor: 16777215, objective: "MAXIMIZE LOGISTICS EFFICIENCY" } });
    this.scene = new j(), this.camera = new ue(75, window.innerWidth / window.innerHeight, 0.1, 1e5), this.renderer = new Re({ antialias: true, powerPreference: "high-performance", alpha: false }), this.clock = new Me(), this.init();
  }
  async init() {
    this.setupRenderer(), this.setupPostProcessing(), this.setupScene(), this.setupEventListeners(), this.createTrainModel(), await this.loadWorldData(), this.hideLoader(), this.startSystems(), this.animate();
  }
  setupRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setClearColor(8900331), this.renderer.toneMapping = ye, this.renderer.toneMappingExposure = 1.2, document.getElementById("app").appendChild(this.renderer.domElement);
  }
  setupPostProcessing() {
    this.composer = new Xe(this.renderer), this.composer.addPass(new Kt(this.scene, this.camera));
    const t = new Wt({ intensity: 1.5, luminanceThreshold: 0.4, mipmapBlur: true }), s = new qt();
    s.blendMode.opacity.value = 0.02;
    const i = new Yt({ offset: 0.3, darkness: 0.5 });
    this.composer.addPass(new es(this.camera, t, s, i));
  }
  setupScene() {
    this.scene.add(this.tracksGroup), this.scene.add(this.landscapeGroup), this.scene.add(this.vehicleGroup), this.scene.add(this.stationsGroup);
    const t = new Ie(16777215, 2.5);
    t.position.set(2e3, 2e3, 1e3), this.scene.add(t);
    const s = new Ce(16777215, 4473924, 0.5);
    this.scene.add(s), this.createSky(), this.createInfiniteGround(), this.updateAtmosphere();
  }
  createSky() {
    const t = new Be(3e4, 32, 32), s = new U({ uniforms: { topColor: { value: new Y(39423) }, bottomColor: { value: new Y(13693183) }, offset: { value: 600 }, exponent: { value: 0.7 } }, vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `, fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `, side: L });
    this.scene.add(new b(t, s));
  }
  createInfiniteGround() {
    const t = new _e(3e5, 3e5), s = new I({ color: 2774309, roughness: 0.9, metalness: 0 }), i = new b(t, s);
    i.rotation.x = -Math.PI / 2, i.position.y = -0.1, this.scene.add(i);
  }
  createTrainModel() {
    const t = new N(), s = new b(new A(3.5, 4.5, 8), new I({ color: 1710704, metalness: 0.7, roughness: 0.3 }));
    s.position.y = 2.25, t.add(s);
    const i = new A(3.6, 1.5, 5), r = new I({ color: 43690, emissive: 65535, emissiveIntensity: 0.2 }), n = new b(i, r);
    n.position.y = 2.5, t.add(n);
    const a = new Ue(16777113, 10, 50);
    a.position.set(0, 2, 4.5), t.add(a), this.vehicleGroup.add(t);
  }
  setupEventListeners() {
    var _a, _b;
    window.addEventListener("keydown", (t) => {
      const s = t.key.toLowerCase();
      this.keys[s] = true, s === "e" && this.handleAction();
    }), window.addEventListener("keyup", (t) => this.keys[t.key.toLowerCase()] = false), window.addEventListener("mousemove", (t) => {
      this.state === "WALKING" && document.pointerLockElement ? (this.playerRotation.y -= t.movementX * 2e-3, this.playerRotation.x -= t.movementY * 2e-3, this.playerRotation.x = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, this.playerRotation.x))) : this.targetLookAmount = (t.clientX / window.innerWidth - 0.5) * 2;
    }), window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight), this.composer.setSize(window.innerWidth, window.innerHeight);
    }), (_a = document.getElementById("btn-slow")) == null ? void 0 : _a.addEventListener("click", () => this.targetSpeed = Math.max(0, this.targetSpeed - 2e-4)), (_b = document.getElementById("btn-fast")) == null ? void 0 : _b.addEventListener("click", () => this.targetSpeed = Math.min(2e-3, this.targetSpeed + 2e-4));
  }
  handleAction() {
    this.state === "DRIVING" ? this.exitVehicle() : this.camera.position.distanceTo(this.vehicleGroup.position) < E.INTERACTION_DIST && this.enterVehicle();
  }
  exitVehicle() {
    var _a, _b;
    this.state = "WALKING", this.renderer.domElement.requestPointerLock(), (_a = document.getElementById("interaction-prompt")) == null ? void 0 : _a.classList.add("hidden"), (_b = document.getElementById("crosshair")) == null ? void 0 : _b.classList.remove("hidden"), document.getElementById("prompt-text").innerText = "ENTER TRAIN";
  }
  enterVehicle() {
    var _a, _b;
    this.state = "DRIVING", document.exitPointerLock(), (_a = document.getElementById("interaction-prompt")) == null ? void 0 : _a.classList.remove("hidden"), (_b = document.getElementById("crosshair")) == null ? void 0 : _b.classList.add("hidden"), document.getElementById("prompt-text").innerText = "EXIT TRAIN";
  }
  async loadWorldData() {
    try {
      const t = await ze();
      if (t) {
        const { ways: s, nodes: i, stations: r } = Le(t);
        this.processLoadedData(s, i, r);
        return;
      }
    } catch {
      console.warn("API Error. Using Fallback Data.");
    }
    this.loadFallbackData();
  }
  processLoadedData(t, s, i) {
    i.forEach((r) => {
      const n = (r.lon - E.CENTER[1]) * E.SCALE * Math.cos(E.CENTER[0] * Math.PI / 180), a = (E.CENTER[0] - r.lat) * E.SCALE;
      this.spawnStation(new x(n, 0, a), r.tags.name || "STATION");
    }), t.forEach((r) => {
      const n = r.coords.map((o) => {
        const l = (o[1] - E.CENTER[1]) * E.SCALE * Math.cos(E.CENTER[0] * Math.PI / 180), c = (E.CENTER[0] - o[0]) * E.SCALE;
        return new x(l, 0, c);
      });
      if (n.length < 2) return;
      const a = new se(n);
      this.curves.push(a), this.drawTrack(a), this.populateLandscape(a);
    }), this.currentCurveIdx = 0;
  }
  loadFallbackData() {
    const t = [];
    for (let i = 0; i <= 20; i++) {
      const r = i / 20 * Math.PI * 2, n = 1500;
      t.push(new x(Math.cos(r) * n, 0, Math.sin(r) * n));
    }
    const s = new se(t, true);
    this.curves.push(s), this.drawTrack(s), this.populateLandscape(s), this.spawnStation(new x(1500, 0, 0), "CENTRAL TERMINAL"), this.spawnStation(new x(-1500, 0, 0), "FRONTIER OUTPOST"), this.currentCurveIdx = 0;
  }
  drawTrack(t) {
    const s = t.getPoints(Math.floor(t.getLength() / 1.5)), i = new A(3.5, 0.2, 0.6), r = new I({ color: 4008735 }), n = new I({ color: 10066329, metalness: 1, roughness: 0.1 });
    for (let a = 0; a < s.length; a++) {
      const o = s[a], l = s[a + 1] || o, c = l.clone().sub(o).normalize();
      if (a % 2 === 0) {
        const h = new b(i, r);
        h.position.copy(o), h.lookAt(l), h.rotation.y += Math.PI / 2, this.tracksGroup.add(h);
      }
      const v = new x(-c.z, 0, c.x);
      [-1, 1].forEach((h) => {
        const p = new b(new A(0.15, 0.15, 1), n);
        p.position.copy(o).add(v.clone().multiplyScalar(h * 1)), p.position.y += 0.15, p.lookAt(l.clone().add(v.clone().multiplyScalar(h * 1))), p.scale.z = o.distanceTo(l) * 1.1, this.tracksGroup.add(p);
      });
    }
  }
  spawnStation(t, s) {
    const i = new N(), r = new b(new A(25, 1.2, 80), new I({ color: 3355443 }));
    r.position.set(15, 0.6, 0), i.add(r);
    const n = new b(new A(20, 0.5, 75), new I({ color: 8912896 }));
    n.position.set(15, 9, 0), i.add(n), i.position.copy(t), this.stationsGroup.add(i);
  }
  populateLandscape(t) {
    const s = t.getLength(), i = 400;
    for (let r = 0; r < s; r += i) {
      const n = r / s, a = t.getPointAt(n), o = t.getTangentAt(n), l = new x(-o.z, 0, o.x);
      [-1, 1].forEach((c) => {
        const v = c * (50 + Math.random() * 500), h = a.clone().add(l.clone().multiplyScalar(v));
        this.spawnAsset(h);
      });
    }
  }
  spawnAsset(t) {
    if (Math.random() > 0.4) {
      const s = 80 + Math.random() * 500, i = 40 + Math.random() * 40, r = new b(new A(i, s, i), new I({ color: 1712181, metalness: 0.8, roughness: 0.1 }));
      r.position.set(t.x, s / 2, t.z), this.landscapeGroup.add(r);
      const n = new Ae({ color: 13434879, size: 2.5, transparent: true, opacity: 0.6 }), a = [];
      for (let c = 0; c < 80; c++) a.push((Math.random() - 0.5) * i * 0.9, Math.random() * s, (Math.random() - 0.5) * i * 0.9);
      const o = new fe().setAttribute("position", new Pe(a, 3)), l = new De(o, n);
      l.position.copy(r.position).sub(new x(0, s / 2, 0)), this.landscapeGroup.add(l);
    } else {
      const s = 15 + Math.random() * 20, i = new b(new Ne(s / 3, s, 8), new I({ color: 1389845 }));
      i.position.set(t.x, s / 2, t.z), this.landscapeGroup.add(i);
    }
  }
  update() {
    const t = this.clock.getDelta();
    if (this.currentCurveIdx !== -1) {
      this.currentSpeed = ie.lerp(this.currentSpeed, this.targetSpeed, 0.05);
      const s = this.curves[this.currentCurveIdx];
      this.progress += this.currentSpeed, this.progress >= 1 && (this.progress = 0, this.currentCurveIdx = (this.currentCurveIdx + 1) % this.curves.length);
      const i = s.getPointAt(this.progress), r = s.getPointAt(Math.min(this.progress + 1e-3, 1));
      this.vehicleGroup.position.copy(i), this.vehicleGroup.lookAt(r);
      const n = Math.round(this.currentSpeed * E.SPEED_MULTIPLIER);
      document.getElementById("speed-val").innerText = n.toString(), document.getElementById("speed-indicator").style.width = `${Math.min(100, n / 1200 * 100)}%`;
    }
    if (this.state === "DRIVING") {
      const s = this.vehicleGroup.position, i = new x(0, 0, 1).applyQuaternion(this.vehicleGroup.quaternion);
      this.camera.position.copy(s).add(new x(0, 4.2, 0)), this.lookAmount = ie.lerp(this.lookAmount, this.targetLookAmount, 0.08), this.camera.lookAt(s.clone().add(i.multiplyScalar(20)).add(new x(this.lookAmount * 15, 0, 0)));
    } else {
      const s = 25 * t, i = new x(0, 0, -1).applyEuler(new K(0, this.playerRotation.y, 0)), r = new x(1, 0, 0).applyEuler(new K(0, this.playerRotation.y, 0));
      this.keys.w && this.camera.position.add(i.multiplyScalar(s)), this.keys.s && this.camera.position.add(i.multiplyScalar(-s)), this.keys.a && this.camera.position.add(r.multiplyScalar(-s)), this.keys.d && this.camera.position.add(r.multiplyScalar(s)), this.camera.quaternion.setFromEuler(this.playerRotation), this.camera.position.y = E.PLAYER_HEIGHT;
      const n = this.camera.position.distanceTo(this.vehicleGroup.position), a = document.getElementById("interaction-prompt");
      n < E.INTERACTION_DIST ? a == null ? void 0 : a.classList.remove("hidden") : a == null ? void 0 : a.classList.add("hidden");
    }
    this.updateEconomy();
  }
  updateEconomy() {
    this.money += this.incomeRate * this.clock.getDelta(), document.getElementById("money-val").innerText = Math.floor(this.money).toLocaleString(), this.money > 1e4 && this.era === "STEAM" && this.upgradeEra("DIESEL");
  }
  upgradeEra(t) {
    this.era = t, document.getElementById("era-badge").innerText = `${t} ERA`;
  }
  updateAtmosphere() {
    const t = this.chapters[this.currentBiome];
    this.scene.fog = new Oe(t.fogColor, 3e-4), document.getElementById("location").innerText = t.name, document.getElementById("objective-text").innerText = t.objective;
  }
  hideLoader() {
    const t = document.getElementById("loading-overlay");
    t && (t.style.opacity = "0", setTimeout(() => t.remove(), 1e3));
  }
  startSystems() {
    console.log("SIAM CONNECT PRO: SYSTEMS NOMINAL");
  }
  animate() {
    requestAnimationFrame(() => this.animate()), this.update(), this.composer.render();
  }
}
new ts();
