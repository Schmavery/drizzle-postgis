import { SQLWrapper, SQL } from 'drizzle-orm';
import { g as Point, e as Geometry } from './geojsonTypes-CQTm8Syk.js';

/**
 * @packageDocumentation
 *
 *  @groupDescription Measurement Functions
 * These functions compute measurements of distance, area and angles.
 * There are also functions to compute geometry values determined by measurements.
 * {@link https://postgis.net/docs/reference.html#Measurement_Functions}
 *
 * @groupDescription Geometry Inputs
 * These functions create geometry objects from various textual or binary formats.
 * {@link https://postgis.net/docs/reference.html#Geometry_Inputs}
 *
 * @groupDescription Geometry Outputs
 * These functions convert geometry objects into various textual or binary formats.
 * {@link https://postgis.net/docs/reference.html#Geometry_Inputs}
 *
 * @groupDescription Geometry Validation
 * These functions test whether geometries are valid according to the OGC SFS standard.
 * They also provide information about the nature and location of invalidity.
 * {@link https://postgis.net/docs/reference.html#Geometry_Validation}
 *
 * @groupDescription Geometry Accessors
 * These functions return information about properties of specific geometry objects.
 * {@link https://postgis.net/docs/reference.html#Geometry_Accessors}
 */

/** Returns the area of a polygonal geometry.
 *
 * For geometry types a 2D Cartesian (planar) area is computed, with units specified by the SRID.
 * For geography types by default area is determined on a spheroid with units in square meters.
 *
 * @group Measurement Functions
 * @link https://postgis.net/docs/ST_Area.html
 */
declare function area(expression: SQLWrapper): SQL<number>;
/** Returns the 2-dimensional point on geom1 that is closest to geom2.
 *
 * This is the first point of the shortest line between the geometries (as computed by ST_ShortestLine).
 *
 * @group Measurement Functions
 * @link https://postgis.net/docs/ST_ClosestPoint.html
 */
declare function closestPoint(geom1: SQLWrapper, geom2: SQLWrapper): SQL<Point>;
/** Constructs a PostGIS ST_Geometry object from the OGC Well-Known text representation.
 *
 * Inverse of {@link asText}
 *
 * @group Geometry Inputs
 * @link https://postgis.net/docs/ST_GeomFromText.html
 */
declare function geomFromText(expression: string | SQLWrapper): SQL<Geometry>;
/** Returns the OGC Well-Known Text (WKT) representation of the geometry/geography.
 *
 * Inverse of {@link geomFromText}
 *
 * @group Geometry Outputs
 * @link https://postgis.net/docs/ST_AsText.html
 */
declare function asText(expression: string | SQLWrapper): SQL<string>;
/** Return the X coordinate of the point, or NULL if not available. Input must be a point.
 *
 * @group Geometry Accessors
 * @link https://postgis.net/docs/ST_X.html
 */
declare function x(expression: SQLWrapper): SQL<number | null>;
/** Return the Y coordinate of the point, or NULL if not available. Input must be a point.
 *
 * @group Geometry Accessors
 * @link https://postgis.net/docs/ST_Y.html
 */
declare function y(expression: SQLWrapper): SQL<number | null>;
/** Tests if an ST_Geometry value is well-formed and valid in 2D according to the OGC rules.
 *
 * @group Geometry Validation
 * @link https://postgis.net/docs/ST_IsValid.html
 */
declare function isValid(geom1: SQLWrapper): SQL<boolean>;
/** Returns text stating if a geometry is valid, or if invalid a reason why.
 *
 * @group Geometry Validation
 * @link https://postgis.net/docs/ST_IsValidReason.html
 */
declare function isValidReason(geom1: SQLWrapper): SQL<string>;
/** Constructs a PostGIS geometry object from the GeoJSON representation.
 *
 * ST_GeomFromGeoJSON works only for JSON Geometry fragments. It throws an error if you try to use it on a whole JSON document.
 *
 * @group Geometry Inputs
 * @link https://postgis.net/docs/ST_GeomFromGeoJSON.html
 */
declare function geomFromGeoJSON(expression: Record<string, unknown>): SQL<Geometry>;
/** Computes a GeoHash representation of a geometry.
 *
 * A GeoHash encodes a geographic Point into a text form that is sortable and searchable based on prefixing.
 * A shorter GeoHash is a less precise representation of a point. It can be thought of as a box that contains the point.
 *
 * @group Geometry Outputs
 * @link https://postgis.net/docs/ST_GeoHash.html
 */
declare function geoHash(geom1: SQLWrapper, maxChars?: number): SQL<string>;
/** Return a derived geometry with measure elements linearly interpolated between the start and end points.
 *
 * If the geometry has no measure dimension, one is added.
 * If the geometry has a measure dimension, it is over-written with new values.
 * Only LINESTRINGS and MULTILINESTRINGS are supported..
 *
 * @group Linear Referencing
 * @link https://postgis.net/docs/manual-2.0/ST_AddMeasure.html
 */
declare function addMeasure(geom1: SQLWrapper, measureStart: number, measureEnd: number): SQL<string>;

declare const functions_addMeasure: typeof addMeasure;
declare const functions_area: typeof area;
declare const functions_asText: typeof asText;
declare const functions_closestPoint: typeof closestPoint;
declare const functions_geoHash: typeof geoHash;
declare const functions_geomFromGeoJSON: typeof geomFromGeoJSON;
declare const functions_geomFromText: typeof geomFromText;
declare const functions_isValid: typeof isValid;
declare const functions_isValidReason: typeof isValidReason;
declare const functions_x: typeof x;
declare const functions_y: typeof y;
declare namespace functions {
  export { functions_addMeasure as addMeasure, functions_area as area, functions_asText as asText, functions_closestPoint as closestPoint, functions_geoHash as geoHash, functions_geomFromGeoJSON as geomFromGeoJSON, functions_geomFromText as geomFromText, functions_isValid as isValid, functions_isValidReason as isValidReason, functions_x as x, functions_y as y };
}

export { area as a, asText as b, closestPoint as c, isValidReason as d, geomFromGeoJSON as e, functions as f, geomFromText as g, geoHash as h, isValid as i, addMeasure as j, x, y };
