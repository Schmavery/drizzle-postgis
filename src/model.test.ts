import { expect, test } from "vitest";
import { execSync } from "node:child_process";
import { rm, readdir } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import { expectToBeDefined } from "~/test/test-helpers";
import { config } from "~/index";
import { geomFromGeoJSON } from "~/functions";
import { PgDialect } from "drizzle-orm/pg-core";

test(
  "drizzle-kit generate:pg matches snapshot",
  async () => {
    await rm("./src/test/migrations", { recursive: true, force: true });
    execSync(
      "npm exec -- drizzle-kit generate:pg --out ./src/test/migrations --schema ./src/test/schema.ts"
    );
    const dir = await readdir("./src/test/migrations");
    const migrationFilename = dir.find((v) => v.includes("0000_"));
    expectToBeDefined(migrationFilename, "Couldn't find migration file");

    const migrationFileContent = await readFile(
      `./src/test/migrations/${migrationFilename}`,
      { encoding: "utf-8" }
    );

    await expect(migrationFileContent).toMatchFileSnapshot(
      "./test/schema-snapshot.sql"
    );
    await rm("./src/test/migrations", { recursive: true, force: true });
  },
  { timeout: 10000 }
);

test("config schema name", async () => {
  const pgDialect = new PgDialect();

  config.setPostGISSchema("extensions");
  expect(pgDialect.sqlToQuery(geomFromGeoJSON({})).sql).toBe(
    "extensions.ST_GeomFromGeoJSON($1)"
  );
  config.setPostGISSchema("");
  expect(pgDialect.sqlToQuery(geomFromGeoJSON({})).sql).toBe(
    "ST_GeomFromGeoJSON($1)"
  );
});
