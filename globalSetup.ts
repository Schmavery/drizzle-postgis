import { execSync } from "child_process";

export async function setup() {
  console.log("Starting up test DB...");
  execSync("docker compose --progress=quiet up --wait");
  console.log("Started docker compose!");
}

export function teardown() {
  execSync("docker compose --progress=quiet down --volumes");
  console.log("Cleaned up docker compose!");
}
