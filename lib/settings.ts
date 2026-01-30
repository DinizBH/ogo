import { prisma } from "@/lib/prisma";

export async function getSettings() {
  const settings = await prisma.appSettings.findFirst();
  if (settings) return settings;
  return prisma.appSettings.create({ data: { allowRegistration: false } });
}

export async function setAllowRegistration(value: boolean) {
  const settings = await prisma.appSettings.findFirst();
  if (settings) {
    return prisma.appSettings.update({
      where: { id: settings.id },
      data: { allowRegistration: value },
    });
  }
  return prisma.appSettings.create({ data: { allowRegistration: value } });
}
