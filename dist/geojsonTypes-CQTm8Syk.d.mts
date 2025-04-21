/**
 * The valid values for the "type" property of GeoJSON geometry objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
type GeoJsonGeometryTypes = Geometry["type"];
/**
 * The value values for the "type" property of GeoJSON Objects.
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
type GeoJsonTypes = GeoJSON["type"];
/**
 * Bounding box
 * https://tools.ietf.org/html/rfc7946#section-5
 */
type BBox = [west: number, south: number, east: number, north: number] | [number, number, number, number, number, number];
/**
 * Alias for Bounding box
 * https://tools.ietf.org/html/rfc7946#section-5
 */
type Box2D = BBox;
/**
 * A Position is an array of coordinates.
 * https://tools.ietf.org/html/rfc7946#section-3.1.1
 * Array should contain between two and three elements.
 * The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values),
 * but the current specification only allows X, Y, and (optionally) Z to be defined.
 */
type Position = number[];
/**
 * The base GeoJSON object.
 * https://tools.ietf.org/html/rfc7946#section-3
 * The GeoJSON specification also allows foreign members
 * (https://tools.ietf.org/html/rfc7946#section-6.1)
 * Developers should use "&" type in TypeScript or extend the interface
 * to add these foreign members.
 */
interface GeoJsonObject {
    /**
     * Specifies the type of GeoJSON object.
     */
    type: GeoJsonTypes;
    /**
     * Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
     * The value of the bbox member is an array of length 2*n where n is the number of dimensions
     * represented in the contained geometries, with all axes of the most southwesterly point
     * followed by all axes of the more northeasterly point.
     * The axes order of a bbox follows the axes order of geometries.
     * https://tools.ietf.org/html/rfc7946#section-5
     */
    bbox?: BBox | undefined;
}
/**
 * Union of GeoJSON objects.
 */
type GeoJSON = Geometry | Feature | FeatureCollection;
/**
 * Geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3
 */
type Geometry = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon | GeometryCollection;
type GeometryObject = Geometry;
/**
 * Point geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.2
 */
interface Point extends GeoJsonObject {
    type: "Point";
    coordinates: Position;
}
/**
 * MultiPoint geometry object.
 *  https://tools.ietf.org/html/rfc7946#section-3.1.3
 */
interface MultiPoint extends GeoJsonObject {
    type: "MultiPoint";
    coordinates: Position[];
}
/**
 * LineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.4
 */
interface LineString extends GeoJsonObject {
    type: "LineString";
    coordinates: Position[];
}
/**
 * MultiLineString geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.5
 */
interface MultiLineString extends GeoJsonObject {
    type: "MultiLineString";
    coordinates: Position[][];
}
/**
 * Polygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.6
 */
interface Polygon extends GeoJsonObject {
    type: "Polygon";
    coordinates: Position[][];
}
/**
 * MultiPolygon geometry object.
 * https://tools.ietf.org/html/rfc7946#section-3.1.7
 */
interface MultiPolygon extends GeoJsonObject {
    type: "MultiPolygon";
    coordinates: Position[][][];
}
/**
 * Geometry Collection
 * https://tools.ietf.org/html/rfc7946#section-3.1.8
 */
interface GeometryCollection<G extends Geometry = Geometry> extends GeoJsonObject {
    type: "GeometryCollection";
    geometries: G[];
}
type GeoJsonProperties = {
    [name: string]: unknown;
} | null;
/**
 * A feature object which contains a geometry and associated properties.
 * https://tools.ietf.org/html/rfc7946#section-3.2
 */
interface Feature<G extends Geometry | null = Geometry, P = GeoJsonProperties> extends GeoJsonObject {
    type: "Feature";
    /**
     * The feature's geometry
     */
    geometry: G;
    /**
     * A value that uniquely identifies this feature in a
     * https://tools.ietf.org/html/rfc7946#section-3.2.
     */
    id?: string | number | undefined;
    /**
     * Properties associated with this feature.
     */
    properties: P;
}
/**
 * A collection of feature objects.
 *  https://tools.ietf.org/html/rfc7946#section-3.3
 */
interface FeatureCollection<G extends Geometry | null = Geometry, P = GeoJsonProperties> extends GeoJsonObject {
    type: "FeatureCollection";
    features: Array<Feature<G, P>>;
}

export type { BBox as B, Feature as F, GeoJsonGeometryTypes as G, LineString as L, MultiPoint as M, Position as P, GeoJsonTypes as a, Box2D as b, GeoJsonObject as c, GeoJSON as d, Geometry as e, GeometryObject as f, Point as g, MultiLineString as h, Polygon as i, MultiPolygon as j, GeometryCollection as k, GeoJsonProperties as l, FeatureCollection as m };
