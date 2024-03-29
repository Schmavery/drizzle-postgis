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

import { fromDriver } from "~/models";
import { type SQL, sql, type SQLWrapper } from "drizzle-orm";
import { gisExtensionSchema } from "~/config";
import * as GeoJSON from "~/geojsonTypes";

/** Returns the area of a polygonal geometry.
 *
 * For geometry types a 2D Cartesian (planar) area is computed, with units specified by the SRID.
 * For geography types by default area is determined on a spheroid with units in square meters.
 *
 * @group Measurement Functions
 * @link https://postgis.net/docs/ST_Area.html
 */
export function area(expression: SQLWrapper): SQL<number> {
  return sql`${gisExtensionSchema}ST_Area(${expression})`.mapWith(Number);
}

/** Returns the 2-dimensional point on geom1 that is closest to geom2.
 *
 * This is the first point of the shortest line between the geometries (as computed by ST_ShortestLine).
 *
 * @group Measurement Functions
 * @link https://postgis.net/docs/ST_ClosestPoint.html
 */
export function closestPoint(
  geom1: SQLWrapper,
  geom2: SQLWrapper
): SQL<GeoJSON.Point> {
  return sql`${gisExtensionSchema}ST_ClosestPoint(${geom1}, ${geom2})`.mapWith(
    fromDriver<GeoJSON.Point>
  );
}

/** Constructs a PostGIS ST_Geometry object from the OGC Well-Known text representation.
 *
 * Inverse of {@link asText}
 *
 * @group Geometry Inputs
 * @link https://postgis.net/docs/ST_GeomFromText.html
 */
export function geomFromText(
  expression: string | SQLWrapper
): SQL<GeoJSON.Geometry> {
  return sql`${gisExtensionSchema}ST_GeomFromText(${expression})`.mapWith(
    fromDriver
  );
}

/** Returns the OGC Well-Known Text (WKT) representation of the geometry/geography.
 *
 * Inverse of {@link geomFromText}
 *
 * @group Geometry Outputs
 * @link https://postgis.net/docs/ST_AsText.html
 */
export function asText(expression: string | SQLWrapper): SQL<string> {
  return sql`${gisExtensionSchema}ST_AsText(${expression})`;
}

/** Return the X coordinate of the point, or NULL if not available. Input must be a point.
 *
 * @group Geometry Accessors
 * @link https://postgis.net/docs/ST_X.html
 */
export function x(expression: SQLWrapper): SQL<number | null> {
  return sql`${gisExtensionSchema}ST_X(${expression})`.mapWith(Number);
}

/** Return the Y coordinate of the point, or NULL if not available. Input must be a point.
 *
 * @group Geometry Accessors
 * @link https://postgis.net/docs/ST_Y.html
 */
export function y(expression: SQLWrapper): SQL<number | null> {
  return sql`${gisExtensionSchema}ST_Y(${expression})`.mapWith(Number);
}

/** Tests if an ST_Geometry value is well-formed and valid in 2D according to the OGC rules.
 *
 * @group Geometry Validation
 * @link https://postgis.net/docs/ST_IsValid.html
 */
export function isValid(geom1: SQLWrapper): SQL<boolean> {
  return sql`${gisExtensionSchema}ST_IsValid(${geom1},0)`.mapWith(Boolean);
}

/** Returns text stating if a geometry is valid, or if invalid a reason why.
 *
 * @group Geometry Validation
 * @link https://postgis.net/docs/ST_IsValidReason.html
 */
export function isValidReason(geom1: SQLWrapper): SQL<string> {
  return sql`${gisExtensionSchema}ST_IsValidReason(${geom1})`;
}

/** Constructs a PostGIS geometry object from the GeoJSON representation.
 *
 * ST_GeomFromGeoJSON works only for JSON Geometry fragments. It throws an error if you try to use it on a whole JSON document.
 *
 * @group Geometry Inputs
 * @link https://postgis.net/docs/ST_GeomFromGeoJSON.html
 */
export function geomFromGeoJSON(
  expression: Record<string, unknown>
): SQL<GeoJSON.Geometry> {
  return sql`${gisExtensionSchema}ST_GeomFromGeoJSON(${JSON.stringify(
    expression
  )})`.mapWith(fromDriver);
}

/** Computes a GeoHash representation of a geometry.
 *
 * A GeoHash encodes a geographic Point into a text form that is sortable and searchable based on prefixing.
 * A shorter GeoHash is a less precise representation of a point. It can be thought of as a box that contains the point.
 *
 * @group Geometry Outputs
 * @link https://postgis.net/docs/ST_GeoHash.html
 */
export function geoHash(geom1: SQLWrapper, maxChars: number = 20): SQL<string> {
  return sql`${gisExtensionSchema}ST_GeoHash(${geom1}, ${maxChars})`;
}
