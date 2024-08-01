import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    id: (search?.id as string) || "",
    name: (search?.name as string) || "",
    city: (search?.city as string) || "",
    active: search?.active === true,
  }),
});
