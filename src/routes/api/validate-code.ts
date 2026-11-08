import { createFileRoute } from "@tanstack/react-router";
import { validateCode } from "@/lib/codes.server";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export const Route = createFileRoute("/api/validate-code")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204 }),
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return json({ error: "Body must be valid JSON" }, 400);
        }
        const code = (body as { code?: unknown })?.code;
        const result = await validateCode(code);
        return json(result);
      },
    },
  },
});
