export { m as models } from './models-CE4gq8Y1.mjs';
export { f as functions } from './functions-BbATW-CZ.mjs';
export { o as operators } from './operators-C_pDKrZ4.mjs';
import * as drizzle_orm from 'drizzle-orm';
export { B as BBox, b as Box2D, F as Feature, m as FeatureCollection, d as GeoJSON, G as GeoJsonGeometryTypes, c as GeoJsonObject, l as GeoJsonProperties, a as GeoJsonTypes, e as Geometry, k as GeometryCollection, f as GeometryObject, L as LineString, h as MultiLineString, M as MultiPoint, j as MultiPolygon, g as Point, i as Polygon, P as Position } from './geojsonTypes-CQTm8Syk.mjs';
import 'drizzle-orm/pg-core';

/** Set this value to specify a namespace for accessing PostGIS
 *
 * Best to do it right when you instantiate your drizzle client.
 * @internal
 */
declare let gisExtensionSchema: drizzle_orm.SQL<unknown>;
/** Can be used to set the schema for PostGIS in the case that it's not in the search path.
 *
 * @example config.setPostGISSchema("extensions")
 *
 * @param schemaName name of the PostGIS schema
 *
 * @link https://www.postgresql.org/docs/current/ddl-schemas.html#DDL-SCHEMAS-PATH
 */
declare function setPostGISSchema(schemaName: string): void;

declare const config_gisExtensionSchema: typeof gisExtensionSchema;
declare const config_setPostGISSchema: typeof setPostGISSchema;
declare namespace config {
  export { config_gisExtensionSchema as gisExtensionSchema, config_setPostGISSchema as setPostGISSchema };
}

export { config };
