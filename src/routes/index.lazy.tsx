import { ContactListPage } from "@pages/contact/ContactListPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: ContactListPage,
});
