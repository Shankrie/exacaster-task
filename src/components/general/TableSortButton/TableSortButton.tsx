import { ArrowUpIcon } from "@icons/ArrowUpIcon";
import { theme } from "@themes/themeConfig";
import { ReactNode } from "react";

type Props = {
  columnId: string;
  sortColumnId: string;
  descending: boolean;
  label: ReactNode;
  onClick: () => void;
};

export const TableSortButton = ({
  columnId,
  sortColumnId,
  descending,
  label,
  onClick,
}: Props) => {
  return (
    <button className="flex gap-[4px] items-center" onClick={onClick}>
      {label}
      {sortColumnId === columnId && (
        <span
          className={`transition-all ${descending ? "rotate-180" : "rotate-0"}`}
        >
          <ArrowUpIcon fill={theme.colors.textInverted} />
        </span>
      )}
    </button>
  );
};
