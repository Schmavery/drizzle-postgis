import {
  Box2D,
  LineString,
  MultiPoint,
  Point,
  MultiLineString,
  Polygon,
  MultiPolygon,
  GeometryCollection,
} from "~/index";

export const box1 = [1.0, 2.0, 6.2, 10.15] satisfies Box2D;
export const box2 = [1.0, 3.0, 6.6, 7.15] satisfies Box2D;

export const point1 = {
  type: "Point",
  coordinates: [-79.01694, 37.10411],
} satisfies Point;

export const point2 = {
  type: "Point",
  coordinates: [1.01694, 5.10411],
} satisfies Point;

export const pointz1 = {
  type: "Point",
  coordinates: [-79.01694, 37.10411, 1.0],
} satisfies Point;

export const pointz2 = {
  type: "Point",
  coordinates: [1.01694, 5.10411, 1.0],
} satisfies Point;

export const multiPoint1 = {
  type: "MultiPoint",
  coordinates: [
    [-79.01694, 37.10411],
    [-79.01694, 12.10411],
  ],
} satisfies MultiPoint;

export const multiPoint2 = {
  type: "MultiPoint",
  coordinates: [
    [-1.01694, 37.10411],
    [-1.01694, 12.10411],
  ],
} satisfies MultiPoint;

export const lineString1 = {
  type: "LineString",
  coordinates: [
    [100, 0],
    [101, 1],
  ],
} satisfies LineString;

export const lineString2 = {
  type: "LineString",
  coordinates: [
    [101, 0],
    [102, 1],
  ],
} satisfies LineString;

export const multiLineString1 = {
  type: "MultiLineString",
  coordinates: [
    [
      [100, 0],
      [101, 1],
    ],
  ],
} satisfies MultiLineString;

export const multiLineString2 = {
  type: "MultiLineString",
  coordinates: [
    [
      [101, 0],
      [102, 1],
    ],
  ],
} satisfies MultiLineString;

export const polygon1 = {
  type: "Polygon",
  coordinates: [
    [
      [100, 0],
      [101, 0],
      [101, 1],
      [100, 1],
      [100, 0],
    ],
  ],
} satisfies Polygon;

export const polygon2 = {
  type: "Polygon",
  coordinates: [
    [
      [100, 0],
      [102, 0],
      [102, 1],
      [100, 1],
      [100, 0],
    ],
  ],
} satisfies Polygon;

export const multiPolygon1 = {
  type: "MultiPolygon",
  coordinates: [
    [
      [
        [102, 2],
        [103, 2],
        [103, 3],
        [102, 3],
        [102, 2],
      ],
    ],
  ],
} satisfies MultiPolygon;

export const multiPolygon2 = {
  type: "MultiPolygon",
  coordinates: [
    [
      [
        [102, 2],
        [103, 2],
        [103, 3],
        [102, 3],
        [102, 2],
      ],
    ],
  ],
} satisfies MultiPolygon;

export const geometryCollection1 = {
  type: "GeometryCollection",
  geometries: [point1, lineString1],
} satisfies GeometryCollection;

export const geometryCollection2 = {
  type: "GeometryCollection",
  geometries: [point2, multiLineString1, polygon2],
} satisfies GeometryCollection;
