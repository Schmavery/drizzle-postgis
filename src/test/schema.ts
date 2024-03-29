import { models as gis } from "~/index";

import { uuid, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  geometry: gis.geometry("geometry"),
  geometryCollection: gis.geometryCollection("geometryCollection"),
  point: gis.point("point", { srid: 4326 }),
  pointz: gis.point("pointz", { srid: 4326, is3D: true }),
  multiPoint: gis.multiPoint("multiPoint", { srid: 4326 }),
  polygon: gis.polygon("polygon", { srid: 4326 }),
  multiPolygon: gis.multiPolygon("multiPolygon", { srid: 4326 }),
  lineString: gis.lineString("lineString", { srid: 4326 }),
  multiLineString: gis.multiLineString("multiLineString", { srid: 4326 }),
  box2D: gis.box2D("box2D"),
});
