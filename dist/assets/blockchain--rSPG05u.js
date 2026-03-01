import { e as D, P as F, p as L, ab as P, a8 as M, M as I, ac as T, l as G, m as z, I as H, K as O } from "./three.module-Co8YQJoG.js";
import { createPublicClient as W, http as _ } from "https://esm.sh/viem";
let s, g, d, i, p, u, E;
const $ = document.getElementById("canvas-container");
function j() {
  s = new D(), g = new F(75, window.innerWidth / window.innerHeight, 0.1, 1e3), g.position.set(0, 0, 15), d = new L({ antialias: true, alpha: true }), d.setSize(window.innerWidth, window.innerHeight), d.setPixelRatio(Math.min(window.devicePixelRatio, 2)), $.appendChild(d.domElement);
  const e = new P(4, 2), t = new M({ color: 62207, wireframe: true, transparent: true, opacity: 0.1 });
  i = new I(e, t), s.add(i);
  const o = new T(6, 0.05, 16, 100), a = new T(8, 0.05, 16, 100), h = new M({ color: 62207, transparent: true, opacity: 0.2 });
  p = new I(o, h), u = new I(a, h), p.rotation.x = Math.PI / 2, u.rotation.y = Math.PI / 2, s.add(p), s.add(u);
  const w = new G(), c = 2e3, b = new Float32Array(c * 3);
  for (let r = 0; r < c * 3; r++) b[r] = (Math.random() - 0.5) * 40;
  w.setAttribute("position", new z(b, 3));
  const f = new H({ size: 0.05, color: 62207, transparent: true, opacity: 0.5 });
  E = new O(w, f), s.add(E), R();
}
function R() {
  requestAnimationFrame(R);
  const e = Date.now() * 1e-3;
  i.rotation.y += 5e-3, i.rotation.z += 3e-3, i.scale.setScalar(1 + Math.sin(e * 2) * 0.05), p.rotation.x += 0.01, p.rotation.y += 5e-3, u.rotation.y += 8e-3, u.rotation.z += 0.01, E.rotation.y += 1e-3, d.render(s, g);
}
const U = { id: 8899, name: "JIBCHAIN L1", rpcUrls: { default: { http: ["https://rpc-l1.jibchain.net"] } } }, l = W({ chain: U, transport: _() }), J = "0x63bB41b79b5aAc6e98C7b35Dcb0fE941b85Ba5Bb", m = "0x0994Bc66b2863f8D58C8185b1ed6147895632812", A = "0xcB0e58b011924e049ce4b4D62298Edf43dFF0BDd", V = [{ name: "getStoreInfo", inputs: [{ name: "store", type: "address" }], outputs: [{ name: "nickname", type: "string" }, { name: "owner", type: "address" }, { name: "authorizedSensorCount", type: "uint256" }, { name: "deployedBlock", type: "uint128" }, { name: "description", type: "string" }], stateMutability: "view", type: "function" }], x = [{ name: "getAllFields", outputs: [{ components: [{ name: "name", type: "string" }, { name: "unit", type: "string" }, { name: "dtype", type: "string" }], type: "tuple[]" }], stateMutability: "view", type: "function" }, { name: "getLatestRecord", inputs: [{ name: "sensor", type: "address" }], outputs: [{ name: "", type: "uint256" }, { name: "", type: "int256[]" }], stateMutability: "view", type: "function" }, { anonymous: false, inputs: [{ indexed: true, name: "sensor", type: "address" }, { indexed: false, name: "timestamp", type: "uint256" }, { indexed: false, name: "values", type: "int256[]" }], name: "RecordStored", type: "event" }];
let B, C, y = [];
async function Y() {
  try {
    const e = await l.getBlockNumber();
    document.getElementById("current-block").innerText = e.toString(), v(`Connected to JIBCHAIN at block #${e}`);
    const [t, o, a, h, w] = await l.readContract({ address: J, abi: V, functionName: "getStoreInfo", args: [m] });
    document.getElementById("station-name").innerText = t, document.getElementById("station-desc").innerText = w, document.getElementById("station-id").innerText = m.slice(0, 12) + "...", document.getElementById("station-owner").innerText = o;
    const c = await l.readContract({ address: m, abi: x, functionName: "getAllFields" }), [b, f] = await l.readContract({ address: m, abi: x, functionName: "getLatestRecord", args: [A] }), r = c.findIndex((n) => n.name.includes("water_depth") && !n.name.includes("min")), N = c.findIndex((n) => n.name.includes("battery_voltage") && !n.name.includes("min"));
    document.getElementById("depth-val").innerText = (Number(f[r]) / 1e4).toFixed(4), document.getElementById("bolt-val").innerText = (Number(f[N]) / 100).toFixed(3), y = (await l.getContractEvents({ address: m, abi: x, eventName: "RecordStored", fromBlock: e - 6000n, args: { sensor: A } })).map((n) => ({ t: Number(n.args.timestamp), d: Number(n.args.values[r]) / 1e4, v: Number(n.args.values[N]) / 100 })).sort((n, k) => n.t - k.t), v(`Synced ${y.length} records from history.`), q(), i.material.opacity = 0.5, setTimeout(() => i.material.opacity = 0.1, 500);
    const S = document.getElementById("loader");
    S.style.opacity = "0", setTimeout(() => S.remove(), 1e3);
  } catch (e) {
    console.error(e), v("!! CONNECTION FAILURE !!", true);
  }
}
function v(e, t = false) {
  const o = document.getElementById("event-log"), a = document.createElement("div");
  a.className = "log-entry", t && (a.style.color = "var(--danger)"), a.innerHTML = `<span class="log-time">[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}]</span> ${e}`, o.prepend(a);
}
function q() {
  const e = (t, o) => ({ type: "line", data: { labels: y.map((a) => new Date(a.t * 1e3).toLocaleTimeString()), datasets: [{ label: t, data: [], borderColor: o, backgroundColor: o + "20", fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { display: false }, grid: { display: false } }, y: { ticks: { color: "#444" }, grid: { color: "rgba(255,255,255,0.02)" } } } } });
  B = new Chart(document.getElementById("depthChart").getContext("2d"), e("Depth", "#00f2ff")), C = new Chart(document.getElementById("boltChart").getContext("2d"), e("Voltage", "#7000ff")), B.data.datasets[0].data = y.map((t) => t.d), C.data.datasets[0].data = y.map((t) => t.v), B.update(), C.update();
}
window.addEventListener("resize", () => {
  g.aspect = window.innerWidth / window.innerHeight, g.updateProjectionMatrix(), d.setSize(window.innerWidth, window.innerHeight);
});
j();
Y();
