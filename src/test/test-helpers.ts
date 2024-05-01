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
  const client = postgres(process.env.DRIZZLE_DB_URL!);
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
  test(name, (ctx) =>
    expect(
      async () =>
        await db.transaction(async (db) => {
          await cb({
            db: db,
            skip: ctx.skip,
            expect: ctx.expect,
            onTestFailed: ctx.onTestFailed,
            onTestFinished: ctx.onTestFinished,
            task: ctx.task,
          });
          db.rollback();
        })
    ).rejects.toThrowError("Rollback")
  );
}

export function getFirst<T>(array: T[]) {
  return array[0];
}
