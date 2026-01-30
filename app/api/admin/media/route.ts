import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const alt = formData.get("alt")?.toString() ?? null;

  if (!file || !(file instanceof File)) {
    return new Response("File is required", { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const media = await prisma.media.create({
    data: {
      filename: file.name,
      mimeType: file.type || "application/octet-stream",
      data: buffer,
      alt,
    },
  });

  return Response.json({ id: media.id, url: `/api/media/${media.id}` });
}
