import { BinaryOperator } from 'drizzle-orm';

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

/** && — Returns TRUE if A's 2D bounding box intersects B's 2D bounding box.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/geometry_overlaps.html
 */
declare const bboxOverlaps: BinaryOperator;
/** && — Returns TRUE if A's n-D bounding box intersects B's n-D bounding box.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/geometry_overlaps_nd.html
 */
declare const bboxOverlapsND: BinaryOperator;
/** &< — Returns TRUE if A's bounding box overlaps or is to the left of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overleft.html
 */
declare const bboxOverlapsOrLeft: BinaryOperator;
/** &<| — Returns TRUE if A's bounding box overlaps or is below B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overbelow.html
 */
declare const bboxOverlapsOrBelow: BinaryOperator;
/** &> — Returns TRUE if A' bounding box overlaps or is to the right of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overright.html
 */
declare const bboxOverlapsOrRight: BinaryOperator;
/** << — Returns TRUE if A's bounding box is strictly to the left of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Left.html
 */
declare const bboxLeft: BinaryOperator;
/** <<| — Returns TRUE if A's bounding box is strictly below B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Below.html
 */
declare const bboxBelow: BinaryOperator;
/** |&> — Returns TRUE if A's bounding box overlaps or is above B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Overabove.html
 */
declare const bboxOverlapsOrAbove: BinaryOperator;
/** |>> — Returns TRUE if A's bounding box is strictly above B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Above.html
 */
declare const bboxAbove: BinaryOperator;
/** >> — Returns TRUE if A's bounding box is strictly to the right of B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Right.html
 */
declare const bboxRight: BinaryOperator;
/** = — Returns TRUE if the coordinates and coordinate order geometry/geography A are the same as the coordinates and coordinate order of geometry/geography B.
 *
 * @group Other Operators
 * @link https://postgis.net/docs/ST_Geometry_EQ.html
 */
declare const eq: BinaryOperator;
/** ~= — Returns TRUE if A's bounding box is the same as B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Same.html
 */
declare const bboxSame: BinaryOperator;
/** @ — Returns TRUE if A's bounding box is contained by B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Contained.html
 */
declare const bboxContained: BinaryOperator;
/** ~ — Returns TRUE if A's bounding box contains B's.
 *
 * @group Bounding Box Operators
 * @link https://postgis.net/docs/ST_Geometry_Contain.html
 */
declare const bboxContain: BinaryOperator;
/** <-> — Returns the 2D distance between A and B.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_knn.html
 */
declare const distanceKNN: BinaryOperator;
/** |=| — Returns the distance between A and B trajectories at their closest point of approach.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_cpa.html
 */
declare const distanceCPA: BinaryOperator;
/** <#> — Returns the 2D distance between A and B bounding boxes.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_box.html
 */
declare const distanceBox: BinaryOperator;
/** <<->> — Returns the n-D distance between the centroids of A and B bounding boxes.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_centroid_nd.html
 */
declare const distanceCentroidND: BinaryOperator;
/** <<#>> — Returns the n-D distance between A and B bounding boxes.
 *
 * @group Distance Operators
 * @link https://postgis.net/docs/geometry_distance_box_nd.html
 */
declare const distanceBoxND: BinaryOperator;

declare const operators_bboxAbove: typeof bboxAbove;
declare const operators_bboxBelow: typeof bboxBelow;
declare const operators_bboxContain: typeof bboxContain;
declare const operators_bboxContained: typeof bboxContained;
declare const operators_bboxLeft: typeof bboxLeft;
declare const operators_bboxOverlaps: typeof bboxOverlaps;
declare const operators_bboxOverlapsND: typeof bboxOverlapsND;
declare const operators_bboxOverlapsOrAbove: typeof bboxOverlapsOrAbove;
declare const operators_bboxOverlapsOrBelow: typeof bboxOverlapsOrBelow;
declare const operators_bboxOverlapsOrLeft: typeof bboxOverlapsOrLeft;
declare const operators_bboxOverlapsOrRight: typeof bboxOverlapsOrRight;
declare const operators_bboxRight: typeof bboxRight;
declare const operators_bboxSame: typeof bboxSame;
declare const operators_distanceBox: typeof distanceBox;
declare const operators_distanceBoxND: typeof distanceBoxND;
declare const operators_distanceCPA: typeof distanceCPA;
declare const operators_distanceCentroidND: typeof distanceCentroidND;
declare const operators_distanceKNN: typeof distanceKNN;
declare const operators_eq: typeof eq;
declare namespace operators {
  export { operators_bboxAbove as bboxAbove, operators_bboxBelow as bboxBelow, operators_bboxContain as bboxContain, operators_bboxContained as bboxContained, operators_bboxLeft as bboxLeft, operators_bboxOverlaps as bboxOverlaps, operators_bboxOverlapsND as bboxOverlapsND, operators_bboxOverlapsOrAbove as bboxOverlapsOrAbove, operators_bboxOverlapsOrBelow as bboxOverlapsOrBelow, operators_bboxOverlapsOrLeft as bboxOverlapsOrLeft, operators_bboxOverlapsOrRight as bboxOverlapsOrRight, operators_bboxRight as bboxRight, operators_bboxSame as bboxSame, operators_distanceBox as distanceBox, operators_distanceBoxND as distanceBoxND, operators_distanceCPA as distanceCPA, operators_distanceCentroidND as distanceCentroidND, operators_distanceKNN as distanceKNN, operators_eq as eq };
}

export { bboxOverlapsND as a, bboxOverlaps as b, bboxOverlapsOrLeft as c, bboxOverlapsOrBelow as d, bboxOverlapsOrRight as e, bboxLeft as f, bboxBelow as g, bboxOverlapsOrAbove as h, bboxAbove as i, bboxRight as j, eq as k, bboxSame as l, bboxContained as m, bboxContain as n, operators as o, distanceKNN as p, distanceCPA as q, distanceBox as r, distanceCentroidND as s, distanceBoxND as t };
