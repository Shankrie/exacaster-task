import { EyeIcon } from "@icons/EyeIcon";
import { theme } from "@themes/themeConfig";
import { formatName } from "@utils/contact/formatName";
import { createColumnHelper } from "@tanstack/react-table";
import { Table } from "@components/general/Table/Table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Contact } from "@model/contact/Contact";

type Props = {
  contacts: Contact[];
  onRowClick: (contact: Contact) => void;
};

const columnHelper = createColumnHelper<Contact>();

export const ContactListTable = ({ contacts, onRowClick }: Props) => {
  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: t("contact.name"),
        cell: ({ row }) => formatName(row.original.name, row.original.surname),
      }),
      columnHelper.accessor("city", {
        header: t("contact.city"),
        cell: (context) => context.getValue(),
      }),
      columnHelper.accessor("isActive", {
        header: () => <EyeIcon fill={theme.colors.textInverted} />,
        cell: (context) =>
          context.getValue() ? <EyeIcon fill={theme.colors.textLight} /> : "",
        enableSorting: false,
        enableHiding: false,
      }),
      columnHelper.accessor("email", {
        header: () => t("contact.email"),
        cell: (context) => context.getValue(),
        enableSorting: false,
      }),
      columnHelper.accessor("phone", {
        header: t("contact.phone"),
        cell: (context) => context.renderValue(),
        enableSorting: false,
        meta: { align: "right" },
      }),
    ],
    [t],
  );

  return (
    <Table
      data={contacts}
      columns={columns}
      defaultSorting={[{ id: "name", desc: false }]}
      onRowClick={onRowClick}
    />
  );
};
