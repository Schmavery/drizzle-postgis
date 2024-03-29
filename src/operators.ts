/**
 * @packageDocumentation
 * Binary operators for use with GIS objects.
 *
 *  @groupDescription Bounding Box Operators
 * These operators calculate values related to the bounding boxes of their arguments.
 * {@link https://postgis.net/docs/reference.html#operators-bbox}
 *
 * @groupDescription Distance Operators
 * These operators calculate distance between their arguments
 * {@link https://postgis.net/docs/reference.html#operators-distance}
 */

import {
  type SQLWrapper,
  type SQL,
  sql,
  type BinaryOperator,
  bindIfParam,
} from "drizzle-orm";
import { gisExtensionSchema } from "~/config";

/** && — Returns TRUE if A's 2D bounding box intersects B's 2D bounding box.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/geometry_overlaps.html
 */
export const bboxOverlaps: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}&&) ${bindIfParam(
    right,
    left
  )}`;
};

/** && — Returns TRUE if A's n-D bounding box intersects B's n-D bounding box.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/geometry_overlaps_nd.html
 */
export const bboxOverlapsND: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}&&&) ${bindIfParam(
    right,
    left
  )}`;
};

/** &< — Returns TRUE if A's bounding box overlaps or is to the left of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overleft.html
 */
export const bboxOverlapsOrLeft: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}&<) ${bindIfParam(
    right,
    left
  )}`;
};

/** &<| — Returns TRUE if A's bounding box overlaps or is below B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overbelow.html
 */
export const bboxOverlapsOrBelow: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}&<|) ${bindIfParam(
    right,
    left
  )}`;
};

/** &> — Returns TRUE if A' bounding box overlaps or is to the right of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overright.html
 */
export const bboxOverlapsOrRight: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}&>) ${bindIfParam(
    right,
    left
  )}`;
};

/** << — Returns TRUE if A's bounding box is strictly to the left of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Left.html
 */
export const bboxLeft: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}<<) ${bindIfParam(
    right,
    left
  )}`;
};

/** <<| — Returns TRUE if A's bounding box is strictly below B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Below.html
 */
export const bboxBelow: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}<<|) ${bindIfParam(
    right,
    left
  )}`;
};

/** |&> — Returns TRUE if A's bounding box overlaps or is above B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overabove.html
 */
export const bboxOverlapsOrAbove: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}|&>) ${bindIfParam(
    right,
    left
  )}`;
};

/** |>> — Returns TRUE if A's bounding box is strictly above B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Above.html
 */
export const bboxAbove: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}|>>) ${bindIfParam(
    right,
    left
  )}`;
};

/** >> — Returns TRUE if A's bounding box is strictly to the right of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Right.html
 */
export const bboxRight: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}>>) ${bindIfParam(
    right,
    left
  )}`;
};

/** = — Returns TRUE if the coordinates and coordinate order geometry/geography A are the same as the coordinates and coordinate order of geometry/geography B.
 *
 * @group Other Operators
 * @link https://postgis.net/docs/ST_Geometry_EQ.html
 */
export const eq: BinaryOperator = (left: SQLWrapper, right: unknown): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}=) ${bindIfParam(
    right,
    left
  )}`;
};

/** ~= — Returns TRUE if A's bounding box is the same as B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Same.html
 */
export const bboxSame: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}~=) ${bindIfParam(
    right,
    left
  )}`;
};

/** @ — Returns TRUE if A's bounding box is contained by B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Contained.html
 */
export const bboxContained: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}@) ${bindIfParam(
    right,
    left
  )}`;
};

/** ~ — Returns TRUE if A's bounding box contains B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Contain.html
 */
export const bboxContain: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} OPERATOR(${gisExtensionSchema}~) ${bindIfParam(
    right,
    left
  )}`;
};

/** <-> — Returns the 2D distance between A and B.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_knn.html
 */
export const distanceKNN: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL<number> => {
  return sql`${left} OPERATOR(${gisExtensionSchema}<->) ${bindIfParam(
    right,
    left
  )}`;
};

/** |=| — Returns the distance between A and B trajectories at their closest point of approach.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_cpa.html
 */
export const distanceCPA: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL<number> => {
  return sql`${left} OPERATOR(${gisExtensionSchema}|=|) ${bindIfParam(
    right,
    left
  )}`;
};

/** <#> — Returns the 2D distance between A and B bounding boxes.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_box.html
 */
export const distanceBox: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL<number> => {
  return sql`${left} OPERATOR(${gisExtensionSchema}<#>) ${bindIfParam(
    right,
    left
  )}`;
};

/** <<->> — Returns the n-D distance between the centroids of A and B bounding boxes.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_centroid_nd.html
 */
export const distanceCentroidND: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL<number> => {
  return sql`${left} OPERATOR(${gisExtensionSchema}<<->>) ${bindIfParam(
    right,
    left
  )}`;
};

/** <<#>> — Returns the n-D distance between A and B bounding boxes.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_box_nd.html
 */
export const distanceBoxND: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL<number> => {
  return sql`${left} OPERATOR(${gisExtensionSchema}<<#>>) ${bindIfParam(
    right,
    left
  )}`;
};
