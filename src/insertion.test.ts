import { eq } from "drizzle-orm";
import * as TEST_DATA from "~/test/test-data";
import * as schema from "~/test/schema";

import { rollbackTest } from "~/test/test-helpers";

rollbackTest("insert/update box2D", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ box2D: TEST_DATA.box1 })
    .returning();

  expect(
    await db.select({ box2D: schema.user.box2D }).from(schema.user)
  ).toMatchObject([{ box2D: TEST_DATA.box1 }]);

  await db
    .update(schema.user)
    .set({ box2D: TEST_DATA.box2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.query.user.findFirst({ columns: { box2D: true } })
  ).toMatchObject({ box2D: TEST_DATA.box2 });
});

rollbackTest("insert/update point", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ point: TEST_DATA.point1 })
    .returning();

  expect(
    await db.select({ point: schema.user.point }).from(schema.user)
  ).toMatchObject([{ point: TEST_DATA.point1 }]);

  await db
    .update(schema.user)
    .set({ point: TEST_DATA.point2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.query.user.findFirst({ columns: { point: true } })
  ).toMatchObject({ point: TEST_DATA.point2 });
});

rollbackTest("insert/update pointz", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ pointz: TEST_DATA.pointz1 })
    .returning();

  expect(
    await db.select({ pointz: schema.user.pointz }).from(schema.user)
  ).toMatchObject([{ pointz: TEST_DATA.pointz1 }]);

  await db
    .update(schema.user)
    .set({ pointz: TEST_DATA.pointz2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.query.user.findFirst({ columns: { pointz: true } })
  ).toMatchObject({ pointz: TEST_DATA.pointz2 });
});

rollbackTest("insert/update multipoint", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ multiPoint: TEST_DATA.multiPoint1 })
    .returning();

  expect(
    await db.query.user.findFirst({ columns: { multiPoint: true } })
  ).toMatchObject({ multiPoint: TEST_DATA.multiPoint1 });

  await db
    .update(schema.user)
    .set({ multiPoint: TEST_DATA.multiPoint2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.select({ multiPoint: schema.user.multiPoint }).from(schema.user)
  ).toMatchObject([{ multiPoint: TEST_DATA.multiPoint2 }]);
});

rollbackTest("insert/update linestring", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ lineString: TEST_DATA.lineString1 })
    .returning();

  expect(
    await db.select({ lineString: schema.user.lineString }).from(schema.user)
  ).toMatchObject([{ lineString: TEST_DATA.lineString1 }]);

  await db
    .update(schema.user)
    .set({ lineString: TEST_DATA.lineString2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.query.user.findFirst({ columns: { lineString: true } })
  ).toMatchObject({ lineString: TEST_DATA.lineString2 });
});

rollbackTest("insert/update multilinestring", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ multiLineString: TEST_DATA.multiLineString1 })
    .returning();

  expect(
    await db
      .select({ multiLineString: schema.user.multiLineString })
      .from(schema.user)
  ).toMatchObject([{ multiLineString: TEST_DATA.multiLineString1 }]);

  await db
    .update(schema.user)
    .set({ multiLineString: TEST_DATA.multiLineString2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.query.user.findFirst({ columns: { multiLineString: true } })
  ).toMatchObject({ multiLineString: TEST_DATA.multiLineString2 });
});

rollbackTest("insert/update polygon", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ polygon: TEST_DATA.polygon1 })
    .returning();

  expect(
    await db.select({ polygon: schema.user.polygon }).from(schema.user)
  ).toMatchObject([{ polygon: TEST_DATA.polygon1 }]);

  await db
    .update(schema.user)
    .set({ polygon: TEST_DATA.polygon2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.query.user.findFirst({ columns: { polygon: true } })
  ).toMatchObject({ polygon: TEST_DATA.polygon2 });
});

rollbackTest("insert/update multipolygon", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ multiPolygon: TEST_DATA.multiPolygon1 })
    .returning();

  expect(
    await db.query.user.findFirst({ columns: { multiPolygon: true } })
  ).toMatchObject({ multiPolygon: TEST_DATA.multiPolygon1 });

  await db
    .update(schema.user)
    .set({ multiPolygon: TEST_DATA.multiPolygon2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db
      .select({ multiPolygon: schema.user.multiPolygon })
      .from(schema.user)
  ).toMatchObject([{ multiPolygon: TEST_DATA.multiPolygon2 }]);
});

rollbackTest("insert/update geometry", async ({ db, expect }) => {
  const data = TEST_DATA.multiPolygon1;
  const data2 = TEST_DATA.point1;

  const [user] = await db
    .insert(schema.user)
    .values({ geometry: data })
    .returning();

  expect(
    await db.query.user.findFirst({ columns: { geometry: true } })
  ).toMatchObject({ geometry: data });

  await db
    .update(schema.user)
    .set({ geometry: data2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db.select({ geometry: schema.user.geometry }).from(schema.user)
  ).toMatchObject([{ geometry: data2 }]);
});

rollbackTest("select null geometry", async ({ db, expect }) => {
  await db.insert(schema.user).values({});

  expect(
    await db.query.user.findFirst({ columns: { geometry: true } })
  ).toMatchObject({ geometry: null });
});

rollbackTest("insert/update geometrycollection", async ({ db, expect }) => {
  const [user] = await db
    .insert(schema.user)
    .values({ geometryCollection: TEST_DATA.geometryCollection1 })
    .returning();

  expect(
    await db.query.user.findFirst({ columns: { geometryCollection: true } })
  ).toMatchObject({
    geometryCollection: TEST_DATA.geometryCollection1,
  });

  await db
    .update(schema.user)
    .set({ geometryCollection: TEST_DATA.geometryCollection2 })
    .where(eq(schema.user.id, user.id));

  expect(
    await db
      .select({ geometryCollection: schema.user.geometryCollection })
      .from(schema.user)
  ).toMatchObject([{ geometryCollection: TEST_DATA.geometryCollection2 }]);
});
