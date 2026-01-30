const { execSync } = require("child_process");

const shouldRun =
  process.env.RUN_MIGRATIONS === "true" &&
  (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production");

if (!shouldRun) {
  console.log("[postdeploy] Skipping migrations/seed");
  process.exit(0);
}

try {
  console.log("[postdeploy] Running prisma db push");
  execSync("npm run db:push", { stdio: "inherit" });
  console.log("[postdeploy] Running prisma db seed");
  execSync("npm run db:seed", { stdio: "inherit" });
} catch (error) {
  console.error("[postdeploy] Failed", error);
  process.exit(1);
}
