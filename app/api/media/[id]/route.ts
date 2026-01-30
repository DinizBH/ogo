import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return new Response("Not found", { status: 404 });
  }
  const media = await prisma.media.findUnique({
    where: { id },
  });

  if (!media || !media.data) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(media.data, {
    headers: {
      "Content-Type": media.mimeType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
