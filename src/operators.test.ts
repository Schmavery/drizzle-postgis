import * as schema from "~/test/schema";

import { operators as op, functions as func } from "~/index";
import { rollbackTest } from "~/test/test-helpers";

rollbackTest("geomFromGeoJSON", async ({ db, expect }) => {
  await db.insert(schema.user).values({});

  expect(
    await db
      .select({
        equals: op.bboxSame(
          func.geomFromText("LINESTRING(0 0, 1 1)"),
          func.geomFromText("LINESTRING(0 1, 1 0)")
        ),
      })
      .from(schema.user)
  ).toMatchObject([{ equals: true }]);
});
