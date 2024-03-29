import { expect, test } from "vitest";
import { execSync } from "child_process";
import { rm, readdir } from "node:fs/promises";
import { readFile } from "fs/promises";

export function expectToBeDefined<T>(
  value: T | undefined,
  message?: string
): asserts value is T {
  expect(value, message).toBeDefined();
}

test("drizzle-kit generate:pg matches snapshot", async () => {
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
});
