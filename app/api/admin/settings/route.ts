import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { getSettings, setAllowRegistration } from "@/lib/settings";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const settings = await getSettings();
  return Response.json({ allowRegistration: settings.allowRegistration });
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { allowRegistration } = (await request.json()) as { allowRegistration?: boolean };
  if (typeof allowRegistration !== "boolean") {
    return Response.json({ error: "allowRegistration inválido" }, { status: 400 });
  }

  const settings = await setAllowRegistration(allowRegistration);
  return Response.json({ allowRegistration: settings.allowRegistration });
}
