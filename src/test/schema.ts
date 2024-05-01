import { models as gis } from "~/index";

import { uuid, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  geometry: gis.geometry("geometry"),
  geometryCollection: gis.geometryCollection("geometryCollection"),
  point: gis.point("point", { srid: 4326 }),
  pointz: gis.point("pointz", { srid: 4326, is3D: true }),
  multiPoint: gis.multiPoint("multiPoint", { srid: 4326 }),
  multiPointz: gis.multiPoint("multiPointz", { srid: 4326, is3D: true }),
  polygon: gis.polygon("polygon", { srid: 4326 }),
  polygonz: gis.polygon("polygonz", { srid: 4326, is3D: true }),
  multiPolygon: gis.multiPolygon("multiPolygon", { srid: 4326 }),
  multiPolygonz: gis.multiPolygon("multiPolygonz", { srid: 4326, is3D: true }),
  lineString: gis.lineString("lineString", { srid: 4326 }),
  lineStringz: gis.lineString("lineStringz", { srid: 4326, is3D: true }),
  multiLineString: gis.multiLineString("multiLineString", { srid: 4326 }),
  multiLineStringz: gis.multiLineString("multiLineStringz", {
    srid: 4326,
    is3D: true,
  }),
  box2D: gis.box2D("box2D"),
});
