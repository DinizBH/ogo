import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { defaultHomeContent, HomeContentData } from "@/lib/home-content";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const record = await prisma.homeContent.findFirst();
  return Response.json((record?.data as HomeContentData) ?? defaultHomeContent);
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = (await request.json()) as HomeContentData;
  const existing = await prisma.homeContent.findFirst();

  if (existing) {
    const updated = await prisma.homeContent.update({
      where: { id: existing.id },
      data: { data: body },
    });
    return Response.json(updated.data);
  }

  const created = await prisma.homeContent.create({ data: { data: body } });
  return Response.json(created.data, { status: 201 });
}
