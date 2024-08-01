import { getContact } from "@api/contactApi";
import contactPaceholderUrl from "@assets/images/contact-placeholder.jpg";
import { Link } from "@components/general/Link/Link";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { formatName } from "@utils/contact/formatName";
import { useTranslation } from "react-i18next";

type Props = {
  id: string;
};

export const ContactPreview = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ["contact", id],
    placeholderData: keepPreviousData,
    queryFn: () => getContact(id),
  });

  const { t } = useTranslation();

  const contact = data?.data;

  if (!contact) {
    return null;
  }

  return (
    <div className="w-full max-w-[330px] bg-white shadow-normal rounded-sm overflow-hidden">
      <img
        className="w-full"
        src={contactPaceholderUrl}
        alt={t("contact.photo")}
      />
      <div className="flex flex-col gap-[16px] p-[16px] text-center">
        <div className="text-lg leading-[32px] text-text">
          {formatName(contact.name, contact.surname)}
        </div>
        <table className="w-full text-textLight">
          <tbody>
            {[
              {
                label: t("contact.name"),
                value: formatName(contact.name, contact.surname),
              },
              {
                label: t("contact.city"),
                value: contact.city,
              },
              {
                label: t("contact.email"),
                value: (
                  <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
                ),
              },
              {
                label: t("contact.phone"),
                value: contact.phone,
              },
            ].map((row) => (
              <tr className="text-xs leading-[16px]" key={row.label}>
                <td className="px-[16px] text-right">{row.label}:</td>
                <td className="px-[16px] text-left">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
