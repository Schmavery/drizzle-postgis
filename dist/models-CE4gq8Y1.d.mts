import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';
import { e as Geometry, B as BBox, g as Point, M as MultiPoint, L as LineString, h as MultiLineString, i as Polygon, j as MultiPolygon, k as GeometryCollection } from './geojsonTypes-CQTm8Syk.mjs';

type BaseGeometryType = "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection";
type GeometryType = BaseGeometryType | `${BaseGeometryType}Z`;
type GeometryOptions = {
    type?: GeometryType;
    srid?: never;
    is3D?: boolean;
} | {
    type: GeometryType;
    srid: number;
    is3D?: boolean;
};
type GeometrySubtypeOptions = {
    srid?: number;
    is3D?: boolean;
};
/** Internal function used for mapping Drizzle results
 * @internal
 */
declare function fromDriver<T extends Geometry>(value: string): T;
/** Internal function used for mapping Drizzle results
 *  @internal
 */
declare function box2DfromDriver(value: string): BBox;
/** box2d is a spatial data type used to represent the two-dimensional bounding box enclosing a geometry or collection of geometries.
 *
 * The representation contains the values xmin, ymin, xmax, ymax. These are the minimum and maximum values of the X and Y extents.
 * @example `POINT (1 2)`
 *
 * @link https://postgis.net/docs/box2d_type.html
 */
declare const box2D: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: BBox;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: BBox;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: BBox;
        driverParam: string;
        enumValues: undefined;
    }>;
};
/** Geometry is a fundamental PostGIS spatial data type used to represent a feature in planar (Euclidean) coordinate systems.
 *
 * Geometry is an abstract type. Geometry values belong to one of its concrete subtypes which represent various kinds and dimensions of geometric shapes.
 * These include the atomic types Point, LineString, and Polygon,
 * and the collection types MultiPoint, MultiLineString, MultiPolygon and GeometryCollection.
 *
 * @link https://postgis.net/docs/geometry.html
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#OGC_Geometry
 */
declare const geometry: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Geometry;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & GeometryOptions>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Geometry;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: GeometryOptions | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Geometry;
        driverParam: string;
        enumValues: undefined;
    }>;
};
/** A Point is a 0-dimensional geometry that represents a single location in coordinate space.
 *
 * @example `POINT (1 2)`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#Point
 */
declare const point: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Point;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & GeometrySubtypeOptions>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Point;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: GeometrySubtypeOptions | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Point;
        driverParam: string;
        enumValues: undefined;
    }>;
};
/** A MultiPoint is a collection of Points.
 *
 * @example `MULTIPOINT ( (0 0), (1 2) )`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#MultiPoint
 */
declare const multiPoint: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiPoint;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & GeometrySubtypeOptions>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiPoint;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: GeometrySubtypeOptions | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiPoint;
        driverParam: string;
        enumValues: undefined;
    }>;
};
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
declare const lineString: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: LineString;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & GeometrySubtypeOptions>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: LineString;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: GeometrySubtypeOptions | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: LineString;
        driverParam: string;
        enumValues: undefined;
    }>;
};
/** A MultiLineString is a collection of LineStrings.
 *
 * A MultiLineString is closed if each of its elements is closed.
 *
 * @example `MULTILINESTRING ( (0 0,1 1,1 2), (2 3,3 2,5 4) )`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#MultiLineString
 */
declare const multiLineString: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiLineString;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & GeometrySubtypeOptions>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiLineString;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: GeometrySubtypeOptions | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiLineString;
        driverParam: string;
        enumValues: undefined;
    }>;
};
/** A Polygon is a 2-dimensional planar region, delimited by an exterior boundary (the shell) and zero or more interior boundaries (holes).
 *
 * Each boundary is a LinearRing. A LinearRing is a LineString which is both closed and simple.
 * The first and last points must be equal, and the line must not self-intersect.
 *
 * @example `POLYGON ((0 0 0,4 0 0,4 4 0,0 4 0,0 0 0),(1 1 0,2 1 0,2 2 0,1 2 0,1 1 0))`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#Polygon
 */
declare const polygon: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Polygon;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & GeometrySubtypeOptions>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Polygon;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: GeometrySubtypeOptions | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Polygon;
        driverParam: string;
        enumValues: undefined;
    }>;
};
/**
 * A MultiPolygon is a collection of non-overlapping, non-adjacent Polygons.
 *
 * Polygons in the collection may touch only at a finite number of points.
 *
 * @example `MULTIPOLYGON (((1 5, 5 5, 5 1, 1 1, 1 5)), ((6 5, 9 1, 6 1, 6 5)))`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#MultiPolygon
 */
declare const multiPolygon: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiPolygon;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & GeometrySubtypeOptions>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiPolygon;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: GeometrySubtypeOptions | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: MultiPolygon;
        driverParam: string;
        enumValues: undefined;
    }>;
};
/** A GeometryCollection is a heterogeneous (mixed) collection of geometries.
 *
 * @example `GEOMETRYCOLLECTION ( POINT(2 3), LINESTRING(2 3, 3 4))`
 *
 * @link https://postgis.net/docs/using_postgis_dbmanagement.html#GeometryCollection
 */
declare const geometryCollection: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: GeometryCollection<Geometry>;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any> & Omit<GeometrySubtypeOptions, "dimensions">>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: GeometryCollection<Geometry>;
        driverParam: string;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: Omit<GeometrySubtypeOptions, "dimensions"> | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: GeometryCollection<Geometry>;
        driverParam: string;
        enumValues: undefined;
    }>;
};

type models_BaseGeometryType = BaseGeometryType;
type models_GeometryOptions = GeometryOptions;
type models_GeometrySubtypeOptions = GeometrySubtypeOptions;
type models_GeometryType = GeometryType;
declare const models_box2D: typeof box2D;
declare const models_box2DfromDriver: typeof box2DfromDriver;
declare const models_fromDriver: typeof fromDriver;
declare const models_geometry: typeof geometry;
declare const models_geometryCollection: typeof geometryCollection;
declare const models_lineString: typeof lineString;
declare const models_multiLineString: typeof multiLineString;
declare const models_multiPoint: typeof multiPoint;
declare const models_multiPolygon: typeof multiPolygon;
declare const models_point: typeof point;
declare const models_polygon: typeof polygon;
declare namespace models {
  export { type models_BaseGeometryType as BaseGeometryType, type models_GeometryOptions as GeometryOptions, type models_GeometrySubtypeOptions as GeometrySubtypeOptions, type models_GeometryType as GeometryType, models_box2D as box2D, models_box2DfromDriver as box2DfromDriver, models_fromDriver as fromDriver, models_geometry as geometry, models_geometryCollection as geometryCollection, models_lineString as lineString, models_multiLineString as multiLineString, models_multiPoint as multiPoint, models_multiPolygon as multiPolygon, models_point as point, models_polygon as polygon };
}

export { type BaseGeometryType as B, type GeometryType as G, type GeometryOptions as a, type GeometrySubtypeOptions as b, box2DfromDriver as c, box2D as d, multiPoint as e, fromDriver as f, geometry as g, multiLineString as h, polygon as i, multiPolygon as j, geometryCollection as k, lineString as l, models as m, point as p };
