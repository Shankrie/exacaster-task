import { Contact } from "@model/contact/Contact";
import { api } from "@services/api/api";

export const getContacts = () => {
  return api.get<Contact[]>("contacts");
};

export const getContact = (id: string) => {
  return api.get<Contact>(`contacts/${id}`);
};
