import { execSync } from "child_process";

let startedContainers = false;
export async function setup() {
  const res = execSync("docker ps", { encoding: "utf-8" });
  console.log(res);
  const containerRunning =
    res.includes("drizzle-postgis-db") || res.includes("act-CI-test");
  if (!containerRunning) {
    console.log("Starting up test DB...");
    execSync("docker compose up --wait", { encoding: "utf-8" });
    startedContainers = true;
    console.log("Started docker compose!");
  }
}

export function teardown() {
  if (startedContainers) {
    console.log("Cleaned up docker compose!");
    execSync("docker compose --progress=quiet down --volumes", {
      encoding: "utf-8",
    });
  }
}
