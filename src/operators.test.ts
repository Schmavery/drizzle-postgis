import * as schema from "~/test/schema";

import { operators as op, functions as func } from "~/index";
import { rollbackTest } from "~/test/test-helpers";

const BASIC_TESTS = [
  { fn: op.bboxOverlaps, name: "bboxOverlaps", result: true },
  { fn: op.bboxOverlapsND, name: "bboxOverlapsND", result: true },
  { fn: op.bboxOverlapsOrLeft, name: "bboxOverlapsOrLeft", result: false },
  { fn: op.bboxOverlapsOrBelow, name: "bboxOverlapsOrBelow", result: false },
  { fn: op.bboxOverlapsOrRight, name: "bboxOverlapsOrRight", result: true },
  { fn: op.bboxLeft, name: "bboxLeft", result: false },
  { fn: op.bboxBelow, name: "bboxBelow", result: false },
  { fn: op.bboxOverlapsOrAbove, name: "bboxOverlapsOrAbove", result: true },
  { fn: op.bboxAbove, name: "bboxAbove", result: false },
  { fn: op.bboxRight, name: "bboxRight", result: false },
  { fn: op.eq, name: "eq", result: false },
  { fn: op.bboxSame, name: "bboxSame", result: false },
  { fn: op.bboxContained, name: "bboxContained", result: false },
  { fn: op.bboxContain, name: "bboxContain", result: true },
  { fn: op.distanceKNN, name: "distanceKNN", result: 0 },
  { fn: op.distanceBox, name: "distanceBox", result: 0 },
  { fn: op.distanceCentroidND, name: "distanceCentroidND", result: 0 },
  // { fn: op.distanceBoxND, name: "distanceBoxND", result: true },
];

for (const testDef of BASIC_TESTS) {
  rollbackTest(testDef.name, async ({ db, expect }) => {
    await db.insert(schema.user).values({});

    expect(
      await db
        .select({
          result: testDef.fn(
            func.geomFromText("LINESTRING(0 0, 2 2)"),
            func.geomFromText("LINESTRING(0 1, 1 0)")
          ),
        })
        .from(schema.user)
    ).toMatchObject([{ result: testDef.result }]);
  });
}

rollbackTest("distanceCPA", async ({ db, expect }) => {
  await db.insert(schema.user).values({});

  expect(
    await db
      .select({
        result: op.distanceCPA(
          func.addMeasure(func.geomFromText("LINESTRING(0 0, 2 2)"), 1, 2),
          func.addMeasure(func.geomFromText("LINESTRING(0 1, 1 0)"), 1, 4)
        ),
      })
      .from(schema.user)
  ).toMatchObject([{ result: 0.5812381937190965 }]);
});
