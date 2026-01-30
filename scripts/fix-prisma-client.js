const fs = require("fs");
const path = require("path");

const clientDir = path.join(__dirname, "..", "node_modules", "@prisma", "client");
const prismaGenerated = path.join(__dirname, "..", "node_modules", ".prisma", "client");
const targetDir = path.join(clientDir, ".prisma");
const targetLink = path.join(targetDir, "client");

if (!fs.existsSync(prismaGenerated)) {
  process.exit(0);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

try {
  if (fs.existsSync(targetLink)) {
    fs.rmSync(targetLink, { force: true, recursive: true });
  }
  fs.symlinkSync(path.relative(targetDir, prismaGenerated), targetLink, "junction");
} catch (error) {
  console.error("Failed to link Prisma client", error);
}
