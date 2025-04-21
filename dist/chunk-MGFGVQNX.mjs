import { a as a$3 } from './chunk-5XWWYWUB.mjs';
import { a as a$2 } from './chunk-NXVYELTV.mjs';
import { a as a$1, k } from './chunk-PUN3HLEN.mjs';

var T={};a$1(T,{addMeasure:()=>x,area:()=>S,asText:()=>u,closestPoint:()=>a,geoHash:()=>f,geomFromGeoJSON:()=>W,geomFromText:()=>m,isValid:()=>L,isValidReason:()=>Q,x:()=>s,y:()=>$});function S(r){return k`${a$2}ST_Area(${r})`.mapWith(Number)}function a(r,o){return k`${a$2}ST_ClosestPoint(${r}, ${o})`.mapWith(a$3)}function m(r){return k`${a$2}ST_GeomFromText(${r})`.mapWith(a$3)}function u(r){return k`${a$2}ST_AsText(${r})`}function s(r){return k`${a$2}ST_X(${r})`.mapWith(Number)}function $(r){return k`${a$2}ST_Y(${r})`.mapWith(Number)}function L(r){return k`${a$2}ST_IsValid(${r},0)`.mapWith(Boolean)}function Q(r){return k`${a$2}ST_IsValidReason(${r})`}function W(r){return k`${a$2}ST_GeomFromGeoJSON(${JSON.stringify(r)})`.mapWith(a$3)}function f(r,o=20){return k`${a$2}ST_GeoHash(${r}, ${o})`}function x(r,o,p){return k`${a$2}ST_AddMeasure(${r}, ${o}, ${p})`}

export { S as a, a as b, m as c, u as d, s as e, $ as f, L as g, Q as h, W as i, f as j, x as k, T as l };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-MGFGVQNX.mjs.map