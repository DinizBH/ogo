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
  execSync("npm run db:push", {
    stdio: "inherit",
    env: {
      ...process.env,
      DATABASE_URL: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
    },
  });
  console.log("[postdeploy] Running prisma db seed");
  execSync("npm run db:seed", {
    stdio: "inherit",
    env: {
      ...process.env,
      DATABASE_URL: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
    },
  });
} catch (error) {
  console.error("[postdeploy] Failed", error);
  console.error(
    "[postdeploy] To skip, set RUN_MIGRATIONS=false or fix DATABASE_URL."
  );
  process.exit(1);
}
