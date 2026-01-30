import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getSettings } from "@/lib/settings";

export async function POST(request: Request) {
  const settings = await getSettings();
  if (!settings.allowRegistration) {
    return Response.json({ error: "Cadastro desativado" }, { status: 403 });
  }

  const { name, email, password } = (await request.json()) as {
    name?: string;
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    return Response.json({ error: "Email e senha são obrigatórios" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return Response.json({ error: "Email já cadastrado" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name: name || null,
      email,
      passwordHash,
    },
  });

  return Response.json({ ok: true });
}
