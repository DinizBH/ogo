import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { userId } = (await request.json()) as { userId?: string };
  if (!userId) {
    return Response.json({ error: "userId é obrigatório" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { approved: true },
  });

  return Response.json({ ok: true });
}
