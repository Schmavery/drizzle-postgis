import { sql } from "drizzle-orm";

/** Set this value to specify a namespace for accessing PostGIS
 *
 * Best to do it right when you instantiate your drizzle client.
 * @internal
 */
export let gisExtensionSchema = sql.raw("");

/** Can be used to set the schema for PostGIS in the case that it's not in the search path.
 *
 * @example config.setPostGISSchema("extensions")
 *
 * @param schemaName name of the PostGIS schema
 *
 * @link https://www.postgresql.org/docs/current/ddl-schemas.html#DDL-SCHEMAS-PATH
 */
export function setPostGISSchema(schemaName: string) {
  gisExtensionSchema = sql.raw(schemaName + ".");
}
