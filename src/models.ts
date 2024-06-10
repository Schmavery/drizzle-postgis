/* eslint-disable @typescript-eslint/consistent-type-definitions */
// Inspired by @link https://github.com/drizzle-team/drizzle-orm/discussions/123#discussioncomment-6075834
import { sql } from "drizzle-orm";
import { customType } from "drizzle-orm/pg-core";
import type * as GeoJSON from "~/geojsonTypes";

import wkx from "wkx";

export type BaseGeometryType =
  | "Point"
  | "MultiPoint"
  | "LineString"
  | "MultiLineString"
  | "Polygon"
  | "MultiPolygon"
  | "GeometryCollection";

export type GeometryType = BaseGeometryType | `${BaseGeometryType}Z`;

export type GeometryOptions =
  | { type?: GeometryType; srid?: never; is3D?: boolean }
  | { type: GeometryType; srid: number; is3D?: boolean };

export type GeometrySubtypeOptions = { srid?: number; is3D?: boolean };

const dataType = (options?: GeometryOptions) => {
  let result = "geometry";
  if (options?.type) {
    result += `(${options.type}`;
    if (options?.srid) {
      result += `,${options.srid}`;
    }

    return `${result})`;
  }
  return `${result}()`;
};

function toDriver(value: GeoJSON.Geometry) {
  return sql`ST_GeomFromGeoJSON(${JSON.stringify(value)})`;
}

/** Internal function used for mapping Drizzle results
 * @internal
 */
export function fromDriver<T extends GeoJSON.Geometry>(value: string) {
  const b = Buffer.from(value, "hex");
  // Dependency on wkx can be removed once @link https://github.com/drizzle-team/drizzle-orm/pull/1423 is merged
  return wkx.Geometry.parse(b).toGeoJSON({ shortCrs: true }) as T;
}

/** Internal function used for mapping Drizzle results
 *  @internal
 */
export function box2DfromDriver(value: string): GeoJSON.BBox {
  const match = value.match(
    /BOX\((?<xmin>[0-9\.]+),? ?(?<ymin>[0-9\.]+),? ?(?<xmax>[0-9\.]+),? ?(?<ymax>[0-9\.]+)\)/
  );
  if (!match?.groups) throw new Error(`Box2D parse error, value: ${value}`);
  return [
    Number.parseFloat(match.groups.xmin),
    Number.parseFloat(match.groups.ymin),
    Number.parseFloat(match.groups.xmax),
    Number.parseFloat(match.groups.ymax),
  ];
}

/** box2d is a spatial data type used to represent the two-dimensional bounding box enclosing a geometry or collection of geometries.
 *
 * The representation contains the values xmin, ymin, xmax, ymax. These are the minimum and maximum values of the X and Y extents.
 * @example `POINT (1 2)`
 *
 * @link https://postgis.net/docs/box2d_type.html
 */
export const box2D = customType<{
  data: GeoJSON.Box2D;
  driverData: string;
}>({
  dataType: () => "box2d",
  toDriver: (b: GeoJSON.Box2D) => `BOX(${b[0]} ${b[1]}, ${b[2]} ${b[3]})`,
  fromDriver: box2DfromDriver,
});

/** Geometry is a fundamental PostGIS spatial data type used to represent a feature in planar (Euclidean) coordinate systems.
 *
 * Geometry is an abstract type. Geometry values belong to one of its concrete subtypes which represent various kinds and dimensions of geometric shapes.
 * These include the atomic types Point, LineString, and Polygon,
 * and the collection types MultiPoint, MultiLineString, MultiPolygon and GeometryCollection.
 *
 * @link https://postgis.net/docs/geometry.html
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#OGC_Geometry
 */
export const geometry = customType<{
  data: GeoJSON.Geometry;
  config: GeometryOptions;
  driverData: string;
}>({
  dataType,
  toDriver: (pt: GeoJSON.Geometry) => toDriver(pt),
  fromDriver: (value) => fromDriver<GeoJSON.Geometry>(value),
});

/** A Point is a 0-dimensional geometry that represents a single location in coordinate space.
 *
 * @example `POINT (1 2)`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#Point
 */
export const point = customType<{
  data: GeoJSON.Point;
  config: GeometrySubtypeOptions;
  driverData: string;
}>({
  dataType: (options) =>
    dataType({ type: `Point${options?.is3D ? "Z" : ""}`, ...options }),
  toDriver: (pt: GeoJSON.Point) => toDriver(pt),
  fromDriver: (value) => fromDriver<GeoJSON.Point>(value),
});

/** A MultiPoint is a collection of Points.
 *
 * @example `MULTIPOINT ( (0 0), (1 2) )`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#MultiPoint
 */
export const multiPoint = customType<{
  data: GeoJSON.MultiPoint;
  config: GeometrySubtypeOptions;
  driverData: string;
}>({
  dataType: (options) =>
    dataType({ type: `MultiPoint${options?.is3D ? "Z" : ""}`, ...options }),
  toDriver: (pt: GeoJSON.MultiPoint) => toDriver(pt),
  fromDriver: (value) => fromDriver<GeoJSON.MultiPoint>(value),
});

/** A LineString is a 1-dimensional line formed by a contiguous sequence of line segments.
 *
 * Each line segment is defined by two points, with the end point of one segment forming the start point of the next segment.
 * An OGC-valid LineString has either zero or two or more points, but PostGIS also allows single-point LineStrings.
 * LineStrings may cross themselves (self-intersect). A LineString is closed if the start and end points are the same.
 * A LineString is simple if it does not self-intersect.
 *
 * @example `LINESTRING (1 2, 3 4, 5 6)`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#LineString
 */
export const lineString = customType<{
  data: GeoJSON.LineString;
  config: GeometrySubtypeOptions;
  driverData: string;
}>({
  dataType: (options) =>
    dataType({ type: `LineString${options?.is3D ? "Z" : ""}`, ...options }),
  toDriver: (pt: GeoJSON.LineString) => toDriver(pt),
  fromDriver: (value) => fromDriver<GeoJSON.LineString>(value),
});

/** A MultiLineString is a collection of LineStrings.
 *
 * A MultiLineString is closed if each of its elements is closed.
 *
 * @example `MULTILINESTRING ( (0 0,1 1,1 2), (2 3,3 2,5 4) )`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#MultiLineString
 */
export const multiLineString = customType<{
  data: GeoJSON.MultiLineString;
  config: GeometrySubtypeOptions;
  driverData: string;
}>({
  dataType: (options) =>
    dataType({
      type: `MultiLineString${options?.is3D ? "Z" : ""}`,
      ...options,
    }),
  toDriver: (pt: GeoJSON.MultiLineString) => toDriver(pt),
  fromDriver: (value) => fromDriver<GeoJSON.MultiLineString>(value),
});

/** A Polygon is a 2-dimensional planar region, delimited by an exterior boundary (the shell) and zero or more interior boundaries (holes).
 *
 * Each boundary is a LinearRing. A LinearRing is a LineString which is both closed and simple.
 * The first and last points must be equal, and the line must not self-intersect.
 *
 * @example `POLYGON ((0 0 0,4 0 0,4 4 0,0 4 0,0 0 0),(1 1 0,2 1 0,2 2 0,1 2 0,1 1 0))`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#Polygon
 */
export const polygon = customType<{
  data: GeoJSON.Polygon;
  config: GeometrySubtypeOptions;
  driverData: string;
}>({
  dataType: (options) =>
    dataType({ type: `Polygon${options?.is3D ? "Z" : ""}`, ...options }),
  toDriver: (mp: GeoJSON.Polygon) => toDriver(mp),
  fromDriver: (value) => fromDriver<GeoJSON.Polygon>(value),
});

/**
 * A MultiPolygon is a collection of non-overlapping, non-adjacent Polygons.
 *
 * Polygons in the collection may touch only at a finite number of points.
 *
 * @example `MULTIPOLYGON (((1 5, 5 5, 5 1, 1 1, 1 5)), ((6 5, 9 1, 6 1, 6 5)))`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#MultiPolygon
 */
export const multiPolygon = customType<{
  data: GeoJSON.MultiPolygon;
  config: GeometrySubtypeOptions;
  driverData: string;
}>({
  dataType: (options) =>
    dataType({ type: `MultiPolygon${options?.is3D ? "Z" : ""}`, ...options }),
  toDriver: (mp: GeoJSON.MultiPolygon) => toDriver(mp),
  fromDriver: (value) => fromDriver<GeoJSON.MultiPolygon>(value),
});

/** A GeometryCollection is a heterogeneous (mixed) collection of geometries.
 *
 * @example `GEOMETRYCOLLECTION ( POINT(2 3), LINESTRING(2 3, 3 4))`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#GeometryCollection
 */
export const geometryCollection = customType<{
  data: GeoJSON.GeometryCollection;
  config: Omit<GeometrySubtypeOptions, "dimensions">;
  driverData: string;
}>({
  dataType: (options) =>
    dataType({
      type: "GeometryCollection",
      ...options,
    }),
  toDriver: (mp: GeoJSON.GeometryCollection) => toDriver(mp),
  fromDriver: (value) => fromDriver<GeoJSON.GeometryCollection>(value),
});
