import { Z as tt, y as d, _ as v, $ as T, a0 as H, a1 as Y, V as c, a2 as et, a3 as st, X as it, M as I, O as ot, l as X, J as K, h as w, a4 as B, W as O, a5 as L, j as at, a6 as rt, C as j, a7 as G, a8 as N, e as nt, P as ht, p as lt, u as ct, m as ut, I as dt, K as pt, a9 as mt, aa as ft } from "./three.module-Co8YQJoG.js";
const Z = { type: "change" }, F = { type: "start" }, q = { type: "end" }, A = new et(), V = new st(), _t = Math.cos(70 * it.DEG2RAD), u = new d(), p = 2 * Math.PI, n = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, z = 1e-6;
class gt extends tt {
  constructor(t, e = null) {
    super(t, e), this.state = n.NONE, this.target = new d(), this.cursor = new d(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: v.ROTATE, MIDDLE: v.DOLLY, RIGHT: v.PAN }, this.touches = { ONE: T.ROTATE, TWO: T.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new d(), this._lastQuaternion = new H(), this._lastTargetPosition = new d(), this._quat = new H().setFromUnitVectors(t.up, new d(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Y(), this._sphericalDelta = new Y(), this._scale = 1, this._panOffset = new d(), this._rotateStart = new c(), this._rotateEnd = new c(), this._rotateDelta = new c(), this._panStart = new c(), this._panEnd = new c(), this._panDelta = new c(), this._dollyStart = new c(), this._dollyEnd = new c(), this._dollyDelta = new c(), this._dollyDirection = new d(), this._mouse = new c(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = yt.bind(this), this._onPointerDown = bt.bind(this), this._onPointerUp = Tt.bind(this), this._onContextMenu = Pt.bind(this), this._onMouseWheel = xt.bind(this), this._onKeyDown = vt.bind(this), this._onTouchStart = St.bind(this), this._onTouchMove = Et.bind(this), this._onMouseDown = wt.bind(this), this._onMouseMove = Mt.bind(this), this._interceptControlDown = Dt.bind(this), this._interceptControlUp = Ct.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  set cursorStyle(t) {
    this._cursorStyle = t, t === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
  }
  get cursorStyle() {
    return this._cursorStyle;
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Z), this.update(), this.state = n.NONE;
  }
  pan(t, e) {
    this._pan(t, e), this.update();
  }
  dollyIn(t) {
    this._dollyIn(t), this.update();
  }
  dollyOut(t) {
    this._dollyOut(t), this.update();
  }
  rotateLeft(t) {
    this._rotateLeft(t), this.update();
  }
  rotateUp(t) {
    this._rotateUp(t), this.update();
  }
  update(t = null) {
    const e = this.object.position;
    u.copy(e).sub(this.target), u.applyQuaternion(this._quat), this._spherical.setFromVector3(u), this.autoRotate && this.state === n.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, o = this.maxAzimuthAngle;
    isFinite(s) && isFinite(o) && (s < -Math.PI ? s += p : s > Math.PI && (s -= p), o < -Math.PI ? o += p : o > Math.PI && (o -= p), s <= o ? this._spherical.theta = Math.max(s, Math.min(o, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + o) / 2 ? Math.max(s, this._spherical.theta) : Math.min(o, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let a = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const r = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), a = r != this._spherical.radius;
    }
    if (u.setFromSpherical(this._spherical), u.applyQuaternion(this._quatInverse), e.copy(this.target).add(u), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let r = null;
      if (this.object.isPerspectiveCamera) {
        const h = u.length();
        r = this._clampDistance(h * this._scale);
        const l = h - r;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), a = !!l;
      } else if (this.object.isOrthographicCamera) {
        const h = new d(this._mouse.x, this._mouse.y, 0);
        h.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), a = l !== this.object.zoom;
        const b = new d(this._mouse.x, this._mouse.y, 0);
        b.unproject(this.object), this.object.position.sub(b).add(h), this.object.updateMatrixWorld(), r = u.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      r !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position) : (A.origin.copy(this.object.position), A.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(A.direction)) < _t ? this.object.lookAt(this.target) : (V.setFromNormalAndCoplanarPoint(this.object.up, this.target), A.intersectPlane(V, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const r = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), r !== this.object.zoom && (this.object.updateProjectionMatrix(), a = true);
    }
    return this._scale = 1, this._performCursorZoom = false, a || this._lastPosition.distanceToSquared(this.object.position) > z || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > z || this._lastTargetPosition.distanceToSquared(this.target) > z ? (this.dispatchEvent(Z), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? p / 60 * this.autoRotateSpeed * t : p / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    u.setFromMatrixColumn(e, 0), u.multiplyScalar(-t), this._panOffset.add(u);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? u.setFromMatrixColumn(e, 1) : (u.setFromMatrixColumn(e, 0), u.crossVectors(this.object.up, u)), u.multiplyScalar(t), this._panOffset.add(u);
  }
  _pan(t, e) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const o = this.object.position;
      u.copy(o).sub(this.target);
      let a = u.length();
      a *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * a / s.clientHeight, this.object.matrix), this._panUp(2 * e * a / s.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const s = this.domElement.getBoundingClientRect(), o = t - s.left, a = e - s.top, r = s.width, h = s.height;
    this._mouse.x = o / r * 2 - 1, this._mouse.y = -(a / h) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(p * this._rotateDelta.x / e.clientHeight), this._rotateUp(p * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(p * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-p * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(p * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-p * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), o = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(s, o);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), o = 0.5 * (t.pageY + e.y);
      this._panStart.set(s, o);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, o = t.pageY - e.y, a = Math.sqrt(s * s + o * o);
    this._dollyStart.set(0, a);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const s = this._getSecondPointerPosition(t), o = 0.5 * (t.pageX + s.x), a = 0.5 * (t.pageY + s.y);
      this._rotateEnd.set(o, a);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(p * this._rotateDelta.x / e.clientHeight), this._rotateUp(p * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), o = 0.5 * (t.pageY + e.y);
      this._panEnd.set(s, o);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, o = t.pageY - e.y, a = Math.sqrt(s * s + o * o);
    this._dollyEnd.set(0, a), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const r = (t.pageX + e.x) * 0.5, h = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(r, h);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new c(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, s = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        s.deltaY *= 16;
        break;
      case 2:
        s.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
  }
}
function bt(i) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function yt(i) {
  this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function Tt(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(q), this.state = n.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function wt(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case v.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i), this.state = n.DOLLY;
      break;
    case v.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = n.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = n.ROTATE;
      }
      break;
    case v.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = n.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = n.PAN;
      }
      break;
    default:
      this.state = n.NONE;
  }
  this.state !== n.NONE && this.dispatchEvent(F);
}
function Mt(i) {
  switch (this.state) {
    case n.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i);
      break;
    case n.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i);
      break;
    case n.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function xt(i) {
  this.enabled === false || this.enableZoom === false || this.state !== n.NONE || (i.preventDefault(), this.dispatchEvent(F), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(q));
}
function vt(i) {
  this.enabled !== false && this._handleKeyDown(i);
}
function St(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case T.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i), this.state = n.TOUCH_ROTATE;
          break;
        case T.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i), this.state = n.TOUCH_PAN;
          break;
        default:
          this.state = n.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case T.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i), this.state = n.TOUCH_DOLLY_PAN;
          break;
        case T.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i), this.state = n.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = n.NONE;
      }
      break;
    default:
      this.state = n.NONE;
  }
  this.state !== n.NONE && this.dispatchEvent(F);
}
function Et(i) {
  switch (this._trackPointer(i), this.state) {
    case n.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case n.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case n.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case n.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = n.NONE;
  }
}
function Pt(i) {
  this.enabled !== false && i.preventDefault();
}
function Dt(i) {
  i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Ct(i) {
  i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
const U = { name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}` };
class R {
  constructor() {
    this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const Rt = new ot(-1, 1, 1, -1, 0, 1);
class At extends X {
  constructor() {
    super(), this.setAttribute("position", new K([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new K([0, 2, 0, 0, 2, 0], 2));
  }
}
const Ot = new At();
class J {
  constructor(t) {
    this._mesh = new I(Ot, t);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(t) {
    t.render(this._mesh, Rt);
  }
  get material() {
    return this._mesh.material;
  }
  set material(t) {
    this._mesh.material = t;
  }
}
class Lt extends R {
  constructor(t, e = "tDiffuse") {
    super(), this.textureID = e, this.uniforms = null, this.material = null, t instanceof w ? (this.uniforms = t.uniforms, this.material = t) : t && (this.uniforms = B.clone(t.uniforms), this.material = new w({ name: t.name !== void 0 ? t.name : "unspecified", defines: Object.assign({}, t.defines), uniforms: this.uniforms, vertexShader: t.vertexShader, fragmentShader: t.fragmentShader })), this._fsQuad = new J(this.material);
  }
  render(t, e, s) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = s.texture), this._fsQuad.material = this.material, this.renderToScreen ? (t.setRenderTarget(null), this._fsQuad.render(t)) : (t.setRenderTarget(e), this.clear && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), this._fsQuad.render(t));
  }
  dispose() {
    this.material.dispose(), this._fsQuad.dispose();
  }
}
class W extends R {
  constructor(t, e) {
    super(), this.scene = t, this.camera = e, this.clear = true, this.needsSwap = false, this.inverse = false;
  }
  render(t, e, s) {
    const o = t.getContext(), a = t.state;
    a.buffers.color.setMask(false), a.buffers.depth.setMask(false), a.buffers.color.setLocked(true), a.buffers.depth.setLocked(true);
    let r, h;
    this.inverse ? (r = 0, h = 1) : (r = 1, h = 0), a.buffers.stencil.setTest(true), a.buffers.stencil.setOp(o.REPLACE, o.REPLACE, o.REPLACE), a.buffers.stencil.setFunc(o.ALWAYS, r, 4294967295), a.buffers.stencil.setClear(h), a.buffers.stencil.setLocked(true), t.setRenderTarget(s), this.clear && t.clear(), t.render(this.scene, this.camera), t.setRenderTarget(e), this.clear && t.clear(), t.render(this.scene, this.camera), a.buffers.color.setLocked(false), a.buffers.depth.setLocked(false), a.buffers.color.setMask(true), a.buffers.depth.setMask(true), a.buffers.stencil.setLocked(false), a.buffers.stencil.setFunc(o.EQUAL, 1, 4294967295), a.buffers.stencil.setOp(o.KEEP, o.KEEP, o.KEEP), a.buffers.stencil.setLocked(true);
  }
}
class Ut extends R {
  constructor() {
    super(), this.needsSwap = false;
  }
  render(t) {
    t.state.buffers.stencil.setLocked(false), t.state.buffers.stencil.setTest(false);
  }
}
class jt {
  constructor(t, e) {
    if (this.renderer = t, this._pixelRatio = t.getPixelRatio(), e === void 0) {
      const s = t.getSize(new c());
      this._width = s.width, this._height = s.height, e = new O(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: L }), e.texture.name = "EffectComposer.rt1";
    } else this._width = e.width, this._height = e.height;
    this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new Lt(U), this.copyPass.material.blending = at, this.timer = new rt();
  }
  swapBuffers() {
    const t = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = t;
  }
  addPass(t) {
    this.passes.push(t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(t, e) {
    this.passes.splice(e, 0, t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(t) {
    const e = this.passes.indexOf(t);
    e !== -1 && this.passes.splice(e, 1);
  }
  isLastEnabledPass(t) {
    for (let e = t + 1; e < this.passes.length; e++) if (this.passes[e].enabled) return false;
    return true;
  }
  render(t) {
    this.timer.update(), t === void 0 && (t = this.timer.getDelta());
    const e = this.renderer.getRenderTarget();
    let s = false;
    for (let o = 0, a = this.passes.length; o < a; o++) {
      const r = this.passes[o];
      if (r.enabled !== false) {
        if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(o), r.render(this.renderer, this.writeBuffer, this.readBuffer, t, s), r.needsSwap) {
          if (s) {
            const h = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(h.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t), l.setFunc(h.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        W !== void 0 && (r instanceof W ? s = true : r instanceof Ut && (s = false));
      }
    }
    this.renderer.setRenderTarget(e);
  }
  reset(t) {
    if (t === void 0) {
      const e = this.renderer.getSize(new c());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = e.width, this._height = e.height, t = this.renderTarget1.clone(), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(t, e) {
    this._width = t, this._height = e;
    const s = this._width * this._pixelRatio, o = this._height * this._pixelRatio;
    this.renderTarget1.setSize(s, o), this.renderTarget2.setSize(s, o);
    for (let a = 0; a < this.passes.length; a++) this.passes[a].setSize(s, o);
  }
  setPixelRatio(t) {
    this._pixelRatio = t, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class kt extends R {
  constructor(t, e, s = null, o = null, a = null) {
    super(), this.scene = t, this.camera = e, this.overrideMaterial = s, this.clearColor = o, this.clearAlpha = a, this.clear = true, this.clearDepth = false, this.needsSwap = false, this.isRenderPass = true, this._oldClearColor = new j();
  }
  render(t, e, s) {
    const o = t.autoClear;
    t.autoClear = false;
    let a, r;
    this.overrideMaterial !== null && (r = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (t.getClearColor(this._oldClearColor), t.setClearColor(this.clearColor, t.getClearAlpha())), this.clearAlpha !== null && (a = t.getClearAlpha(), t.setClearAlpha(this.clearAlpha)), this.clearDepth == true && t.clearDepth(), t.setRenderTarget(this.renderToScreen ? null : s), this.clear === true && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), t.render(this.scene, this.camera), this.clearColor !== null && t.setClearColor(this._oldClearColor), this.clearAlpha !== null && t.setClearAlpha(a), this.overrideMaterial !== null && (this.scene.overrideMaterial = r), t.autoClear = o;
  }
}
const zt = { uniforms: { tDiffuse: { value: null }, luminosityThreshold: { value: 1 }, smoothWidth: { value: 1 }, defaultColor: { value: new j(0) }, defaultOpacity: { value: 0 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}` };
class E extends R {
  constructor(t, e = 1, s, o) {
    super(), this.strength = e, this.radius = s, this.threshold = o, this.resolution = t !== void 0 ? new c(t.x, t.y) : new c(256, 256), this.clearColor = new j(0, 0, 0), this.needsSwap = false, this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let a = Math.round(this.resolution.x / 2), r = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new O(a, r, { type: L }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = false;
    for (let m = 0; m < this.nMips; m++) {
      const f = new O(a, r, { type: L });
      f.texture.name = "UnrealBloomPass.h" + m, f.texture.generateMipmaps = false, this.renderTargetsHorizontal.push(f);
      const k = new O(a, r, { type: L });
      k.texture.name = "UnrealBloomPass.v" + m, k.texture.generateMipmaps = false, this.renderTargetsVertical.push(k), a = Math.round(a / 2), r = Math.round(r / 2);
    }
    const h = zt;
    this.highPassUniforms = B.clone(h.uniforms), this.highPassUniforms.luminosityThreshold.value = o, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new w({ uniforms: this.highPassUniforms, vertexShader: h.vertexShader, fragmentShader: h.fragmentShader }), this.separableBlurMaterials = [];
    const l = [6, 10, 14, 18, 22];
    a = Math.round(this.resolution.x / 2), r = Math.round(this.resolution.y / 2);
    for (let m = 0; m < this.nMips; m++) this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[m])), this.separableBlurMaterials[m].uniforms.invSize.value = new c(1 / a, 1 / r), a = Math.round(a / 2), r = Math.round(r / 2);
    this.compositeMaterial = this._getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = e, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const b = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = b, this.bloomTintColors = [new d(1, 1, 1), new d(1, 1, 1), new d(1, 1, 1), new d(1, 1, 1), new d(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, this.copyUniforms = B.clone(U.uniforms), this.blendMaterial = new w({ uniforms: this.copyUniforms, vertexShader: U.vertexShader, fragmentShader: U.fragmentShader, premultipliedAlpha: true, blending: G, depthTest: false, depthWrite: false, transparent: true }), this._oldClearColor = new j(), this._oldClearAlpha = 1, this._basic = new N(), this._fsQuad = new J(null);
  }
  dispose() {
    for (let t = 0; t < this.renderTargetsHorizontal.length; t++) this.renderTargetsHorizontal[t].dispose();
    for (let t = 0; t < this.renderTargetsVertical.length; t++) this.renderTargetsVertical[t].dispose();
    this.renderTargetBright.dispose();
    for (let t = 0; t < this.separableBlurMaterials.length; t++) this.separableBlurMaterials[t].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this._basic.dispose(), this._fsQuad.dispose();
  }
  setSize(t, e) {
    let s = Math.round(t / 2), o = Math.round(e / 2);
    this.renderTargetBright.setSize(s, o);
    for (let a = 0; a < this.nMips; a++) this.renderTargetsHorizontal[a].setSize(s, o), this.renderTargetsVertical[a].setSize(s, o), this.separableBlurMaterials[a].uniforms.invSize.value = new c(1 / s, 1 / o), s = Math.round(s / 2), o = Math.round(o / 2);
  }
  render(t, e, s, o, a) {
    t.getClearColor(this._oldClearColor), this._oldClearAlpha = t.getClearAlpha();
    const r = t.autoClear;
    t.autoClear = false, t.setClearColor(this.clearColor, 0), a && t.state.buffers.stencil.setTest(false), this.renderToScreen && (this._fsQuad.material = this._basic, this._basic.map = s.texture, t.setRenderTarget(null), t.clear(), this._fsQuad.render(t)), this.highPassUniforms.tDiffuse.value = s.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this._fsQuad.material = this.materialHighPassFilter, t.setRenderTarget(this.renderTargetBright), t.clear(), this._fsQuad.render(t);
    let h = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++) this._fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = h.texture, this.separableBlurMaterials[l].uniforms.direction.value = E.BlurDirectionX, t.setRenderTarget(this.renderTargetsHorizontal[l]), t.clear(), this._fsQuad.render(t), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = E.BlurDirectionY, t.setRenderTarget(this.renderTargetsVertical[l]), t.clear(), this._fsQuad.render(t), h = this.renderTargetsVertical[l];
    this._fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, t.setRenderTarget(this.renderTargetsHorizontal[0]), t.clear(), this._fsQuad.render(t), this._fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, a && t.state.buffers.stencil.setTest(true), this.renderToScreen ? (t.setRenderTarget(null), this._fsQuad.render(t)) : (t.setRenderTarget(s), this._fsQuad.render(t)), t.setClearColor(this._oldClearColor, this._oldClearAlpha), t.autoClear = r;
  }
  _getSeparableBlurMaterial(t) {
    const e = [], s = t / 3;
    for (let o = 0; o < t; o++) e.push(0.39894 * Math.exp(-0.5 * o * o / (s * s)) / s);
    return new w({ defines: { KERNEL_RADIUS: t }, uniforms: { colorTexture: { value: null }, invSize: { value: new c(0.5, 0.5) }, direction: { value: new c(0.5, 0.5) }, gaussianCoefficients: { value: e } }, vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`, fragmentShader: `

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}` });
  }
  _getCompositeMaterial(t) {
    return new w({ defines: { NUM_MIPS: t }, uniforms: { blurTexture1: { value: null }, blurTexture2: { value: null }, blurTexture3: { value: null }, blurTexture4: { value: null }, blurTexture5: { value: null }, bloomStrength: { value: 1 }, bloomFactors: { value: null }, bloomTintColors: { value: null }, bloomRadius: { value: 0 } }, vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`, fragmentShader: `

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}` });
  }
}
E.BlurDirectionX = new c(1, 0);
E.BlurDirectionY = new c(0, 1);
let y, M, _, D, P, C, x, S, g = 0;
async function It() {
  y = new nt(), M = new ht(75, window.innerWidth / window.innerHeight, 0.1, 1e3), M.position.set(0, 10, 25), _ = new lt({ antialias: true, alpha: true }), _.setSize(window.innerWidth, window.innerHeight), _.setPixelRatio(Math.min(window.devicePixelRatio, 2)), document.getElementById("canvas-container").appendChild(_.domElement);
  const i = new kt(y, M), t = new E(new c(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  D = new jt(_), D.addPass(i), D.addPass(t);
  const e = new ct(100, 100, 50, 50), s = new N({ color: 62207, wireframe: true, transparent: true, opacity: 0.15 });
  x = new I(e, s), x.rotation.x = -Math.PI / 2, x.position.y = -8, y.add(x);
  const o = 8e3, a = new X(), r = new Float32Array(o * 3);
  for (let f = 0; f < o * 3; f++) r[f] = (Math.random() - 0.5) * 60;
  a.setAttribute("position", new ut(r, 3));
  const h = new dt({ size: 0.08, transparent: true, blending: G });
  C = new pt(a, h), y.add(C);
  const l = new mt(4, 1.2, 100, 16), b = new N({ color: 62207, wireframe: true });
  S = new I(l, b), y.add(S);
  const m = new ft(16777215, 0.1);
  y.add(m), P = new gt(M, _.domElement), P.enableDamping = true, P.autoRotate = true, P.autoRotateSpeed = 0.5, Q(), setInterval(Q, 3e4), $(), setTimeout(() => {
    document.getElementById("loader").style.opacity = "0", setTimeout(() => document.getElementById("loader").remove(), 1e3);
  }, 1500);
}
async function Q() {
  try {
    const t = await (await fetch("https://open-api.cmuccdc.org/aqic/dustboy/676")).json();
    Bt(t), g = parseFloat(t.pm25);
  } catch {
    console.warn("Using simulated data for core..."), g = 12 + Math.random() * 80;
  }
}
function Bt(i) {
  document.getElementById("pm25").innerText = i.pm25, document.getElementById("station").innerText = i.nickname, document.getElementById("temp").innerText = i.temp || "--", document.getElementById("hum").innerText = i.humid || "--";
  const t = Nt(i.pm25), e = document.getElementById("status");
  e.innerText = t.label, e.style.color = t.color, document.documentElement.style.setProperty("--accent", t.color), S.material.color.set(t.color), C.material.color.set(t.color), x.material.color.set(t.color);
}
function Nt(i) {
  return i <= 25 ? { label: "CLEAREST", color: "#00f2ff" } : i <= 37 ? { label: "SAFE CORE", color: "#00ffaa" } : i <= 50 ? { label: "MILD DENSITY", color: "#ffea00" } : i <= 90 ? { label: "DANGER LEVELS", color: "#ff6200" } : { label: "CRITICAL FAILURE", color: "#ff0044" };
}
function $() {
  requestAnimationFrame($);
  const i = Date.now() * 1e-3, t = x.geometry.attributes.position;
  for (let s = 0; s < t.count; s++) {
    const o = t.getX(s), a = t.getY(s), r = Math.sin(o * 0.1 + i + g * 0.05) * Math.cos(a * 0.1 + i) * 2;
    t.setZ(s, r);
  }
  t.needsUpdate = true, S.rotation.y += 0.01 + g * 1e-3, S.rotation.z += 5e-3;
  const e = 1 + Math.sin(i * 3) * 0.05 + g / 100;
  S.scale.set(e, e, e), C.rotation.y = i * 0.1, g > 50 && (C.position.x = Math.sin(i * 20) * (g * 5e-3)), P.update(), D.render();
}
window.addEventListener("resize", () => {
  M.aspect = window.innerWidth / window.innerHeight, M.updateProjectionMatrix(), _.setSize(window.innerWidth, window.innerHeight), D.setSize(window.innerWidth, window.innerHeight);
});
It();
