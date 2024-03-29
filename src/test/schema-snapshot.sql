CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"geometry" geometry,
	"geometryCollection" geometry(GeometryCollection),
	"point" geometry(Point,4326),
	"pointz" geometry(PointZ,4326),
	"multiPoint" geometry(MultiPoint,4326),
	"polygon" geometry(Polygon,4326),
	"multiPolygon" geometry(MultiPolygon,4326),
	"lineString" geometry(LineString,4326),
	"multiLineString" geometry(MultiLineString,4326),
	"box2D" box2d
);
