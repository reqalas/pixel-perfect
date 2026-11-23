import { createFileRoute, redirect } from "@tanstack/react-router";

// The film was renamed from "Kontrapunkt" to "Counterpoint"; keep the old address working.
export const Route = createFileRoute("/films/kontrapunkt")({
  beforeLoad: () => {
    throw redirect({ to: "/films/$slug", params: { slug: "counterpoint" } });
  },
});
