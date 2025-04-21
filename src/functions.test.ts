import { type Point, type Polygon, functions as gis } from "~/index";
import { getFirst, rollbackTest } from "~/test/test-helpers";

import * as schema from "~/test/schema";
import * as TEST_DATA from "~/test/test-data";

rollbackTest("geomFromGeoJSON", async ({ db, expect }) => {
  await db
    .insert(schema.user)
    .values({ point: gis.geomFromGeoJSON(TEST_DATA.point1) });

  expect(
    await db.select({ point: schema.user.point }).from(schema.user)
  ).toMatchObject([{ point: TEST_DATA.point1 }]);
});

rollbackTest("geomFromText", async ({ db, expect }) => {
  const data: Point = {
    type: "Point",
    coordinates: [-71.064544, 42.28787],
  };

  await db
    .insert(schema.user)
    .values({ point: gis.geomFromText("POINT(-71.064544 42.28787)") })
    .returning();

  expect(
    await db.select({ point: schema.user.point }).from(schema.user)
  ).toMatchObject([{ point: data }]);
});

rollbackTest("area", async ({ db, expect }) => {
  const data: Polygon = {
    type: "Polygon",
    coordinates: [
      [
        [0, 0],
        [1, 0],
        [1, 2],
        [0, 2],
        [0, 0],
      ],
    ],
  };

  await db.insert(schema.user).values({ polygon: data });

  expect(
    await db.select({ area: gis.area(schema.user.polygon) }).from(schema.user)
  ).toMatchObject([{ area: 2 }]);
});

rollbackTest("x", async ({ db, expect }) => {
  await db.insert(schema.user).values({ point: TEST_DATA.point1 });

  expect(
    await db.select({ x: gis.x(schema.user.point) }).from(schema.user)
  ).toMatchObject([{ x: -79.01694 }]);
});

rollbackTest("y", async ({ db, expect }) => {
  await db.insert(schema.user).values({ point: TEST_DATA.point1 });

  expect(
    await db.select({ y: gis.y(schema.user.point) }).from(schema.user)
  ).toMatchObject([{ y: 37.10411 }]);
});

rollbackTest("closestPoint", async ({ db, expect }) => {
  await db
    .insert(schema.user)
    .values({ point: TEST_DATA.point1, polygon: TEST_DATA.polygon1 });

  expect(
    await db
      .select({
        closest: gis.closestPoint(schema.user.point, schema.user.polygon),
      })
      .from(schema.user)
  ).toMatchObject([{ closest: TEST_DATA.point1 }]);
});

rollbackTest("isValid", async ({ db, expect }) => {
  await db.insert(schema.user).values({});

  expect(
    await db
      .select({
        valid: gis.isValid(gis.geomFromText("LINESTRING(0 0, 1 1)")),
        invalid: gis.isValid(
          gis.geomFromText("POLYGON((0 0, 1 1, 1 2, 1 1, 0 0))")
        ),
      })
      .from(schema.user)
  ).toMatchObject([{ valid: true, invalid: false }]);
});

rollbackTest("isValidReason", async ({ db, expect }) => {
  await db.insert(schema.user).values({});

  expect(
    await db
      .select({
        valid: gis.isValidReason(gis.geomFromText("LINESTRING(0 0, 1 1)")),
        invalid: gis.isValidReason(
          gis.geomFromText("POLYGON((0 0, 1 1, 1 2, 1 1, 0 0))")
        ),
      })
      .from(schema.user)
  ).toMatchObject([
    {
      valid: "Valid Geometry",
      invalid: "Self-intersection[1 2]",
    },
  ]);
});

rollbackTest("geoHash", async ({ db, expect }) => {
  await db.insert(schema.user).values({});

  expect(
    await db
      .select({
        hash: gis.geoHash(gis.geomFromText("POINT(0 1)")),
        shortHash: gis.geoHash(gis.geomFromText("POINT(0 1)"), 5),
      })
      .from(schema.user)
  ).toMatchObject([
    {
      hash: "s00j8n012j80252h04b5",
      shortHash: "s00j8",
    },
  ]);
});

rollbackTest("addMeasure", async ({ db, expect }) => {
  await db.insert(schema.user).values({});

  expect(
    await db
      .select({
        text: gis.asText(
          gis.addMeasure(gis.geomFromText("LINESTRING(1 0, 2 0, 4 0)"), 1, 4)
        ),
      })
      .from(schema.user)
      .then(getFirst)
  ).toMatchObject({
    text: "LINESTRING M (1 0 1,2 0 2,4 0 4)",
  });
});
