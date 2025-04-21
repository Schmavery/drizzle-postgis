import { type PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import {
  test,
  expect,
  type TestContext,
  type Test,
  type TaskContext,
} from "vitest";

import * as schema from "~/test/schema";

export function expectToBeDefined<T>(
  value: T | undefined,
  message?: string
): asserts value is T {
  expect(value, message).toBeDefined();
}

export function makeDB() {
  const client = postgres(
    process.env.DRIZZLE_DB_URL ??
      "postgresql://postgres:example@127.0.0.1:5433/postgres"
  );
  return drizzle(client, { schema });
}

const db = makeDB();

export function rollbackTest(
  name: string,
  cb: (
    ctx: TaskContext<Test<unknown>> &
      TestContext & { db: PostgresJsDatabase<typeof schema> }
  ) => Promise<unknown>
) {
  test(name, async (ctx) => {
    await db
      .transaction(async (db) => {
        await cb({
          db: db,
          skip: ctx.skip,
          expect: ctx.expect,
          onTestFailed: ctx.onTestFailed,
          onTestFinished: ctx.onTestFinished,
          task: ctx.task,
        });
        throw new Error("Rollback");
      })
      .catch((err) => {
        if (err.message !== "Rollback") {
          throw err;
        }
      });
  });
}

export function getFirst<T>(array: T[]) {
  return array[0];
}
